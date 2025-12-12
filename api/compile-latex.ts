/**
 * Vercel Serverless Function: LaTeX Compilation Proxy
 *
 * Compiles LaTeX content to PDF using latex.ytotech.com API
 * Returns base64-encoded PDF for client download
 *
 * Endpoint: POST /api/compile-latex
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 300, // 5 minutes for compilation
};

interface CompileRequest {
  filename: string;
  content: string;
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

  try {
    const { filename, content }: CompileRequest = req.body;

    if (!content) {
      return res.status(400).json({
        success: false,
        error: 'No LaTeX content provided'
      });
    }

    console.log(`[LaTeX Compiler] Compiling ${filename}...`);

    // Use latex.ytotech.com API for compilation
    // This service accepts LaTeX and returns PDF
    const compileResponse = await fetch('https://latex.ytotech.com/builds/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        compiler: 'pdflatex',
        resources: [
          {
            main: true,
            content: content
          }
        ]
      })
    });

    if (!compileResponse.ok) {
      const errorText = await compileResponse.text();
      console.error('[LaTeX Compiler] API Error:', compileResponse.status, errorText);

      // Try to parse as JSON for better error message
      let errorMessage = 'LaTeX compilation failed';
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error || errorJson.message || errorMessage;
      } catch {
        // If not JSON, check for common LaTeX errors
        if (errorText.includes('Undefined control sequence')) {
          errorMessage = 'LaTeX error: Undefined control sequence. Check for typos in commands.';
        } else if (errorText.includes('Missing')) {
          errorMessage = 'LaTeX error: Missing bracket or brace.';
        } else if (errorText.length < 500) {
          errorMessage = errorText;
        }
      }

      return res.status(200).json({
        success: false,
        error: errorMessage,
        log: errorText.substring(0, 2000)
      });
    }

    // Get the PDF as buffer
    const pdfBuffer = await compileResponse.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

    // Estimate page count (rough: ~50KB per page for academic papers)
    const fileSize = pdfBuffer.byteLength;
    const estimatedPages = Math.max(1, Math.round(fileSize / 50000));

    const pdfFilename = filename.replace('.tex', '.pdf');

    console.log(`[LaTeX Compiler] Success: ${pdfFilename} (${Math.round(fileSize / 1024)} KB, ~${estimatedPages} pages)`);

    return res.status(200).json({
      success: true,
      pdfFilename,
      pdfBase64,
      fileSize,
      pageCount: estimatedPages,
      exceedsLimit: estimatedPages > 16
    });

  } catch (error) {
    console.error('[LaTeX Compiler] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Compilation failed'
    });
  }
}
