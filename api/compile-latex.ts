/**
 * Vercel Serverless Function: LaTeX Compilation Proxy
 *
 * Compiles LaTeX content to PDF using latex.ytotech.com API
 * Supports PNG figures passed as base64
 * Returns base64-encoded PDF for client download
 *
 * Endpoint: POST /api/compile-latex
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 300, // 5 minutes for compilation
};

interface FigureResource {
  filename: string;
  base64: string;
}

interface BibResource {
  filename: string;
  content: string;  // Raw .bib content (not base64)
}

interface CompileRequest {
  filename: string;
  content: string;
  figures?: FigureResource[];  // Optional PNG figures as base64
  bibliography?: BibResource;  // Optional .bib file
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

  // SECURITY: Verify internal API secret if configured
  const apiSecret = process.env.INTERNAL_API_SECRET;
  if (apiSecret) {
    const providedSecret = req.headers['x-internal-secret'];
    if (providedSecret !== apiSecret) {
      console.warn('[LaTeX Compiler] Unauthorized request blocked');
      return res.status(401).json({ success: false, error: 'Unauthorized' });
    }
  }

  try {
    const { filename, content, figures, bibliography }: CompileRequest = req.body;

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
    const figureCount = figures?.length || 0;
    const hasBibliography = !!bibliography;

    console.log(`[LaTeX Compiler] Compiling ${filename}...`);
    console.log(`[LaTeX Compiler] Content: ${Math.round(contentLength / 1024)} KB, ${tikzCount} tikz, ${axisCount} pgfplots, ${figureCount} PNG figures${hasBibliography ? ', with .bib file' : ''}`);

    // Build resources array for latex.ytotech.com
    // Main LaTeX file first
    const resources: Array<{ main?: boolean; path?: string; content?: string; file?: string }> = [
      {
        main: true,
        content: content
      }
    ];

    // Add PNG figures as additional resources
    if (figures && figures.length > 0) {
      for (const fig of figures) {
        // latex.ytotech.com accepts raw base64 content with 'file' field
        // The path should match what's used in \includegraphics
        resources.push({
          path: fig.filename,
          file: fig.base64  // Raw base64, NOT data URL
        });
        console.log(`[LaTeX Compiler] Added figure: ${fig.filename} (${Math.round(fig.base64.length / 1024)} KB base64)`);
      }
    }

    // Add bibliography file if provided
    if (bibliography) {
      resources.push({
        path: bibliography.filename,
        content: bibliography.content
      });
      console.log(`[LaTeX Compiler] Added bibliography: ${bibliography.filename} (${Math.round(bibliography.content.length / 1024)} KB)`);
    }

    // Use latex.ytotech.com API for compilation
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      console.error('[LaTeX Compiler] Aborting due to 4 minute timeout');
      controller.abort();
    }, 240000);

    let compileResponse: Response;
    try {
      // Build compilation options
      const compileOptions: any = {
        compiler: 'pdflatex',
        resources: resources
      };

      // Add bibliography options if .bib file is provided
      if (bibliography) {
        compileOptions.options = {
          bibliography: {
            command: 'bibtex'
          }
        };
      }

      // Try latex.ytotech.com with pdflatex first
      compileResponse = await fetch('https://latex.ytotech.com/builds/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify(compileOptions)
      });

      // If we get SERVER_ERROR, try with xelatex as fallback
      if (!compileResponse.ok) {
        const errorCheck = await compileResponse.clone().text();
        if (errorCheck.includes('SERVER_ERROR')) {
          console.log('[LaTeX Compiler] pdflatex returned SERVER_ERROR, trying xelatex...');

          const fallbackOptions: any = {
            compiler: 'xelatex',
            resources: resources
          };
          if (bibliography) {
            fallbackOptions.options = {
              bibliography: { command: 'bibtex' }
            };
          }
          const fallbackResponse = await fetch('https://latex.ytotech.com/builds/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            signal: controller.signal,
            body: JSON.stringify(fallbackOptions)
          });

          if (fallbackResponse.ok) {
            console.log('[LaTeX Compiler] xelatex succeeded');
            compileResponse = fallbackResponse;
          } else {
            const fallbackError = await fallbackResponse.text();
            console.log('[LaTeX Compiler] xelatex also failed:', fallbackError.substring(0, 200));
            return res.status(200).json({
              success: false,
              error: `LaTeX compilation failed on both pdflatex and xelatex. The document (${Math.round(contentLength / 1024)} KB with ${tikzCount} TikZ figures and ${figureCount} PNG figures) may have syntax errors or be too complex.`,
              log: `pdflatex: ${errorCheck}\n\nxelatex: ${fallbackError.substring(0, 1500)}`
            });
          }
        }
      }

      clearTimeout(timeoutId);
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        console.error('[LaTeX Compiler] Request timed out after 4 minutes');
        return res.status(200).json({
          success: false,
          error: `LaTeX compilation timed out. The document with ${tikzCount} TikZ figures and ${figureCount} PNG figures may be too complex.`
        });
      }
      throw fetchError;
    }

    if (!compileResponse.ok) {
      const errorText = await compileResponse.text();
      console.error('[LaTeX Compiler] API Error:', compileResponse.status, errorText.substring(0, 1000));

      let errorMessage = 'LaTeX compilation failed';
      let logContent = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error || errorJson.message || errorMessage;
        logContent = errorJson.logs || errorJson.log || errorText;

        if (logContent) {
          const errorMatch = logContent.match(/!(.*?)\n/);
          if (errorMatch) {
            errorMessage = `LaTeX error: ${errorMatch[1].trim()}`;
          }
          const lineMatch = logContent.match(/l\.(\d+)/);
          if (lineMatch) {
            errorMessage += ` (around line ${lineMatch[1]})`;
          }
        }
      } catch {
        if (errorText.includes('Undefined control sequence')) {
          const match = errorText.match(/Undefined control sequence[^\\]*\\(\w+)/);
          errorMessage = `LaTeX error: Undefined control sequence${match ? ` (\\${match[1]})` : ''}`;
        } else if (errorText.includes('Missing')) {
          errorMessage = 'LaTeX error: Missing bracket or brace.';
        } else if (errorText.includes('Package pgfplots Error')) {
          errorMessage = 'LaTeX error: PGFPlots package error. Check axis definitions.';
        } else if (errorText.includes('cannot find image file')) {
          errorMessage = 'LaTeX error: Cannot find image file. Figure may not have been uploaded correctly.';
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

    // Estimate page count
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
