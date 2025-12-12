/**
 * Vercel Serverless Function: Upload Data File
 *
 * Uploads a data file (CSV, Excel, etc.) to Vercel Blob storage
 * Returns the blob URL for later retrieval
 *
 * Endpoint: POST /api/upload-data
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';

export const config = {
  maxDuration: 60,
};

interface UploadRequest {
  filename: string;
  content: string;  // Base64 encoded file content
  contentType?: string;
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
    const { filename, content, contentType }: UploadRequest = req.body;

    if (!filename || !content) {
      return res.status(400).json({
        success: false,
        error: 'Filename and content are required'
      });
    }

    // Check if Blob storage is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('[Upload Data] BLOB_READ_WRITE_TOKEN not configured');
      return res.status(503).json({
        success: false,
        error: 'Blob storage not configured'
      });
    }

    // Decode base64 content
    const buffer = Buffer.from(content, 'base64');

    // Determine content type
    let mimeType = contentType || 'text/csv';
    if (filename.endsWith('.xlsx')) {
      mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    } else if (filename.endsWith('.xls')) {
      mimeType = 'application/vnd.ms-excel';
    } else if (filename.endsWith('.json')) {
      mimeType = 'application/json';
    }

    // Generate a unique path for the file
    const timestamp = Date.now();
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const blobPath = `data/${timestamp}_${safeName}`;

    // Store in Vercel Blob
    const blob = await put(blobPath, buffer, {
      access: 'public',
      contentType: mimeType,
      addRandomSuffix: false
    });

    console.log(`[Upload Data] Uploaded: ${filename} -> ${blob.url} (${buffer.length} bytes)`);

    return res.status(200).json({
      success: true,
      filename,
      blobUrl: blob.url,
      blobPath,
      size: buffer.length
    });

  } catch (error) {
    console.error('[Upload Data] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to upload file'
    });
  }
}
