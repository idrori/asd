/**
 * Vercel Serverless Function: Paper to Open Research Interview
 *
 * Analyzes a research paper PDF and generates a synthetic interview
 * about open research problems stemming from the paper.
 *
 * Uses Gemini File API for large PDFs to avoid body size limits.
 *
 * Endpoint: POST /api/paper-to-interview
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 300, // 5 minutes for large PDFs
};

interface PaperToInterviewRequest {
  pdfBase64: string;
  formatTemplate: string;
  paperName?: string;
}

// Upload file to Gemini File API
async function uploadToGeminiFiles(apiKey: string, base64Data: string, filename: string): Promise<string> {
  // First, get upload URI
  const initResponse = await fetch(
    `https://generativelanguage.googleapis.com/upload/v1beta/files?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Type': 'application/pdf',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: {
          display_name: filename,
        },
      }),
    }
  );

  if (!initResponse.ok) {
    const error = await initResponse.text();
    throw new Error(`Failed to initialize upload: ${error}`);
  }

  const uploadUri = initResponse.headers.get('X-Goog-Upload-URL');
  if (!uploadUri) {
    throw new Error('No upload URI returned');
  }

  // Convert base64 to buffer
  const buffer = Buffer.from(base64Data, 'base64');

  // Upload the file content
  const uploadResponse = await fetch(uploadUri, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/pdf',
      'X-Goog-Upload-Command': 'upload, finalize',
      'X-Goog-Upload-Offset': '0',
    },
    body: buffer,
  });

  if (!uploadResponse.ok) {
    const error = await uploadResponse.text();
    throw new Error(`Failed to upload file: ${error}`);
  }

  const fileInfo = await uploadResponse.json();
  console.log(`[Paper-to-Interview] Uploaded file: ${fileInfo.file?.name}`);

  return fileInfo.file?.uri || fileInfo.file?.name;
}

// Wait for file to be processed
async function waitForFileProcessing(apiKey: string, fileUri: string): Promise<void> {
  // Extract file name from URI
  const fileName = fileUri.includes('/') ? fileUri.split('/').pop() : fileUri;

  for (let i = 0; i < 30; i++) { // Wait up to 30 seconds
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/files/${fileName}?key=${apiKey}`
    );

    if (response.ok) {
      const fileInfo = await response.json();
      if (fileInfo.state === 'ACTIVE') {
        return;
      }
      if (fileInfo.state === 'FAILED') {
        throw new Error('File processing failed');
      }
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  throw new Error('File processing timeout');
}

// SECURITY: Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://iciscopilot.vercel.app',
  'https://idrori.github.io',
  'http://localhost:5173',
  'http://localhost:3000'
];

function getCorsOrigin(req: VercelRequest): string {
  const origin = req.headers.origin as string;
  if (origin && ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed))) {
    return origin;
  }
  return ALLOWED_ORIGINS[0];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // SECURITY: Restrict CORS to known origins only
  const corsOrigin = getCorsOrigin(req);
  res.setHeader('Access-Control-Allow-Origin', corsOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Internal-Secret');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // NOTE: This is a user-facing endpoint called by the frontend.
  // Authentication is via CORS (restricted origins) - the API key stays server-side.

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[Paper-to-Interview] GEMINI_API_KEY not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const body: PaperToInterviewRequest = req.body;

    if (!body.pdfBase64) {
      return res.status(400).json({ error: 'PDF content required' });
    }

    if (!body.formatTemplate) {
      return res.status(400).json({ error: 'Interview format template required' });
    }

    const paperName = body.paperName || 'paper.pdf';
    console.log(`[Paper-to-Interview] Processing paper: ${paperName}`);

    // Calculate PDF size
    const pdfSizeBytes = (body.pdfBase64.length * 3) / 4;
    const pdfSizeMB = pdfSizeBytes / (1024 * 1024);
    console.log(`[Paper-to-Interview] PDF size: ${pdfSizeMB.toFixed(2)} MB`);

    // Use gemini-2.0-flash which supports PDF
    const model = 'gemini-2.0-flash';
    const baseUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const systemPrompt = `You are an expert research analyst who reads academic papers and generates synthetic research interviews.

Your task is to:
1. Read and thoroughly analyze the provided research paper
2. Identify the paper's limitations, open questions, and future work suggestions
3. Generate a complete research interview transcript as if a researcher was describing an OPEN research problem that naturally extends from this paper

The interview should:
- Focus on an OPEN research problem (something NOT yet done, building on the paper's limitations or future work)
- Be realistic and detailed, as if a real researcher was being interviewed
- Follow the exact format structure provided in the template
- Include specific details about methodology, data, evaluation metrics
- Reference the source paper appropriately
- Propose a concrete, feasible research direction

IMPORTANT: The generated interview should describe research that has NOT been done yet - it should propose new work that extends the paper's findings.`;

    const userPrompt = `Here is the interview format template to follow:

${body.formatTemplate}

---

Now, analyze the attached research paper and generate a complete interview transcript following the format above.

The interview should be about an OPEN research problem that:
1. Builds on the paper's findings, limitations, or suggested future work
2. Is feasible and concrete
3. Has not yet been conducted

Generate the full interview transcript now, including all sections from the template.`;

    let geminiRequest;

    // For large files (> 15MB), use File API
    if (pdfSizeMB > 15) {
      console.log('[Paper-to-Interview] Using File API for large PDF');

      // Upload file first
      const fileUri = await uploadToGeminiFiles(apiKey, body.pdfBase64, paperName);

      // Wait for processing
      await waitForFileProcessing(apiKey, fileUri);

      geminiRequest = {
        contents: [{
          role: 'user',
          parts: [
            {
              file_data: {
                mime_type: 'application/pdf',
                file_uri: fileUri
              }
            },
            {
              text: userPrompt
            }
          ]
        }],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 16384,
        }
      };
    } else {
      // For smaller files, use inline data
      console.log('[Paper-to-Interview] Using inline data for PDF');

      geminiRequest = {
        contents: [{
          role: 'user',
          parts: [
            {
              inline_data: {
                mime_type: 'application/pdf',
                data: body.pdfBase64
              }
            },
            {
              text: userPrompt
            }
          ]
        }],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 16384,
        }
      };
    }

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiRequest)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[Paper-to-Interview] API Error:', response.status, errorData);
      return res.status(response.status).json({
        error: 'Gemini API error',
        status: response.status,
        details: (errorData as any).error?.message || 'Unknown error'
      });
    }

    const data = await response.json();

    // Extract the generated text
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      console.error('[Paper-to-Interview] No text generated');
      return res.status(500).json({
        error: 'No interview generated',
        details: 'The model did not return any text'
      });
    }

    // Format the interview with header
    const timestamp = new Date().toISOString();
    const interview = `Research Interview Transcript (Generated from Paper)
Date: ${timestamp}
Source Paper: ${body.paperName || 'Uploaded PDF'}
==================================================

${generatedText}
`;

    console.log(`[Paper-to-Interview] Successfully generated interview (${generatedText.length} chars)`);

    return res.status(200).json({
      success: true,
      interview
    });

  } catch (error) {
    console.error('[Paper-to-Interview] Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
