/**
 * Vercel Serverless Function: Delete Data File
 *
 * Deletes a data file from Vercel Blob storage
 *
 * Endpoint: POST /api/delete-data
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { del } from '@vercel/blob';

export const config = {
  maxDuration: 30,
};

interface DeleteRequest {
  blobUrl: string;
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
    const { blobUrl }: DeleteRequest = req.body;

    if (!blobUrl) {
      return res.status(400).json({
        success: false,
        error: 'Blob URL is required'
      });
    }

    // Check if Blob storage is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('[Delete Data] BLOB_READ_WRITE_TOKEN not configured');
      return res.status(503).json({
        success: false,
        error: 'Blob storage not configured'
      });
    }

    // Delete from Vercel Blob
    await del(blobUrl);

    console.log(`[Delete Data] Deleted: ${blobUrl}`);

    return res.status(200).json({
      success: true,
      message: 'Data file deleted'
    });

  } catch (error) {
    console.error('[Delete Data] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete file'
    });
  }
}
