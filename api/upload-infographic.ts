/**
 * Vercel Serverless Function: Upload Infographic to Blob Storage
 *
 * Receives base64-encoded infographic PNG and uploads to Vercel Blob
 * Returns blob URL for the uploaded infographic
 *
 * Endpoint: POST /api/upload-infographic
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';

export const config = {
  maxDuration: 60,
};

interface UploadRequest {
  base64: string;
  sessionId: string;
  filename?: string;
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
    const { base64, sessionId, filename = 'infographic.png' }: UploadRequest = req.body;

    if (!base64) {
      return res.status(400).json({
        success: false,
        error: 'No base64 data provided'
      });
    }

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        error: 'No sessionId provided'
      });
    }

    // Check if Blob storage is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('[Upload Infographic] BLOB_READ_WRITE_TOKEN not configured');
      return res.status(503).json({
        success: false,
        error: 'Blob storage not configured'
      });
    }

    console.log(`[Upload Infographic] Uploading infographic for session ${sessionId}`);

    // Convert base64 to buffer
    const pngBuffer = Buffer.from(base64, 'base64');

    // Upload to Vercel Blob
    const blob = await put(`infographics/${sessionId}/${filename}`, pngBuffer, {
      access: 'public',
      contentType: 'image/png',
      addRandomSuffix: false
    });

    console.log(`[Upload Infographic] Uploaded: ${blob.url}`);

    return res.status(200).json({
      success: true,
      url: blob.url,
      filename
    });

  } catch (error) {
    console.error('[Upload Infographic] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload infographic'
    });
  }
}
