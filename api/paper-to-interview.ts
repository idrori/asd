/**
 * Vercel Serverless Function: Paper to Open Research Interview
 *
 * Analyzes a research paper PDF and generates a synthetic interview
 * about open research problems stemming from the paper.
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    console.log(`[Paper-to-Interview] Processing paper: ${body.paperName || 'unnamed'}`);

    const geminiRequest = {
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
