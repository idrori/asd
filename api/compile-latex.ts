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
      console.error('[LaTeX Compiler] No content provided');
      return res.status(400).json({
        success: false,
        error: 'No LaTeX content provided'
      });
    }

    const contentLength = content.length;
    const tikzCount = (content.match(/\\begin\{tikzpicture\}/g) || []).length;
    const axisCount = (content.match(/\\begin\{axis\}/g) || []).length;

    console.log(`[LaTeX Compiler] Compiling ${filename}...`);
    console.log(`[LaTeX Compiler] Content: ${Math.round(contentLength / 1024)} KB, ${tikzCount} tikz figures, ${axisCount} pgfplots`);

    // Use latex.ytotech.com API for compilation
    // This service accepts LaTeX and returns PDF
    // Add AbortController with 4 minute timeout (leave 1 min buffer for Vercel)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      console.error('[LaTeX Compiler] Aborting due to 4 minute timeout');
      controller.abort();
    }, 240000);

    let compileResponse: Response;
    try {
      compileResponse = await fetch('https://latex.ytotech.com/builds/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
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
      clearTimeout(timeoutId);
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        console.error('[LaTeX Compiler] Request timed out after 4 minutes');
        return res.status(200).json({
          success: false,
          error: `LaTeX compilation timed out. The document with ${tikzCount} TikZ figures may be too complex. Try reducing the number of figures.`
        });
      }
      throw fetchError;
    }

    if (!compileResponse.ok) {
      const errorText = await compileResponse.text();
      console.error('[LaTeX Compiler] API Error:', compileResponse.status, errorText.substring(0, 1000));

      // Try to parse as JSON for better error message
      let errorMessage = 'LaTeX compilation failed';
      let logContent = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        // latex.ytotech.com returns { error: "...", logs: "..." }
        errorMessage = errorJson.error || errorJson.message || errorMessage;
        logContent = errorJson.logs || errorJson.log || errorText;

        // Extract useful info from logs
        if (logContent) {
          // Look for the actual LaTeX error in the logs
          const errorMatch = logContent.match(/!(.*?)\n/);
          if (errorMatch) {
            errorMessage = `LaTeX error: ${errorMatch[1].trim()}`;
          }
          // Look for line number
          const lineMatch = logContent.match(/l\.(\d+)/);
          if (lineMatch) {
            errorMessage += ` (around line ${lineMatch[1]})`;
          }
        }
      } catch {
        // If not JSON, check for common LaTeX errors
        if (errorText.includes('Undefined control sequence')) {
          const match = errorText.match(/Undefined control sequence[^\\]*\\(\w+)/);
          errorMessage = `LaTeX error: Undefined control sequence${match ? ` (\\${match[1]})` : ''}`;
        } else if (errorText.includes('Missing')) {
          errorMessage = 'LaTeX error: Missing bracket or brace.';
        } else if (errorText.includes('Package pgfplots Error')) {
          errorMessage = 'LaTeX error: PGFPlots package error. Check axis definitions.';
        } else if (errorText.length < 500) {
          errorMessage = errorText;
        }
      }

      return res.status(200).json({
        success: false,
        error: errorMessage,
        log: logContent.substring(0, 3000)
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
