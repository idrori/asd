/**
 * Vercel Serverless Function: Upload PNG Figures to Blob Storage
 *
 * Receives base64-encoded PNG figures and uploads them to Vercel Blob
 * Returns blob URLs for each uploaded figure
 *
 * Endpoint: POST /api/upload-figures-to-blob
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';

export const config = {
  maxDuration: 60,
};

interface FigureInput {
  filename: string;
  base64: string;
  description: string;
}

interface UploadRequest {
  figures: FigureInput[];
  sessionId?: string;
}

interface UploadedFigure {
  filename: string;
  blobUrl: string;
  description: string;
}

// Generate a unique session token
function generateSessionId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
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
    const { figures, sessionId: providedSessionId }: UploadRequest = req.body;

    if (!figures || !Array.isArray(figures) || figures.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No figures provided'
      });
    }

    // Check if Blob storage is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('[Upload Figures] BLOB_READ_WRITE_TOKEN not configured');
      return res.status(503).json({
        success: false,
        error: 'Blob storage not configured. Add BLOB_READ_WRITE_TOKEN to Vercel environment.'
      });
    }

    const sessionId = providedSessionId || generateSessionId();
    const uploadedFigures: UploadedFigure[] = [];

    console.log(`[Upload Figures] Uploading ${figures.length} figures for session ${sessionId}`);

    // Upload each figure to blob storage
    for (const figure of figures) {
      try {
        // Convert base64 to buffer
        const pngBuffer = Buffer.from(figure.base64, 'base64');

        // Upload to Vercel Blob
        const blob = await put(`figures/${sessionId}/${figure.filename}`, pngBuffer, {
          access: 'public',
          contentType: 'image/png',
          addRandomSuffix: false
        });

        uploadedFigures.push({
          filename: figure.filename,
          blobUrl: blob.url,
          description: figure.description
        });

        console.log(`[Upload Figures] Uploaded ${figure.filename}: ${blob.url}`);
      } catch (uploadError) {
        console.error(`[Upload Figures] Error uploading ${figure.filename}:`, uploadError);
        // Continue with other figures
      }
    }

    console.log(`[Upload Figures] Successfully uploaded ${uploadedFigures.length}/${figures.length} figures`);

    return res.status(200).json({
      success: true,
      sessionId,
      figures: uploadedFigures,
      count: uploadedFigures.length
    });

  } catch (error) {
    console.error('[Upload Figures] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload figures'
    });
  }
}
