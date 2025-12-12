/**
 * Vercel Serverless Function: Get PDF for Viewer
 *
 * Retrieves stored PDF by token from Vercel Blob storage
 * Returns PDF data as base64 for rendering in viewer
 *
 * Endpoint: GET /api/get-viewer-pdf?token=xxx
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { list } from '@vercel/blob';

export const config = {
  maxDuration: 30,
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const token = req.query.token as string;

    if (!token) {
      return res.status(400).json({
        success: false,
        error: 'No token provided'
      });
    }

    // Check if Blob storage is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return res.status(503).json({
        success: false,
        error: 'Blob storage not configured'
      });
    }

    // Find the blob by prefix - PDFs are stored at papers/{token}.pdf
    const { blobs } = await list({ prefix: `papers/${token}` });

    if (blobs.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'PDF not found or link has expired'
      });
    }

    const blob = blobs[0];

    // Fetch the PDF content
    const pdfResponse = await fetch(blob.url);
    if (!pdfResponse.ok) {
      throw new Error('Failed to fetch PDF from storage');
    }

    const pdfBuffer = await pdfResponse.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

    console.log(`[Viewer PDF] Serving: ${token.substring(0, 8)}... (${Math.round(pdfBuffer.byteLength / 1024)} KB)`);

    return res.status(200).json({
      success: true,
      filename: blob.pathname.split('/').pop() || 'paper.pdf',
      pdfBase64
    });

  } catch (error) {
    console.error('[Viewer PDF] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to retrieve PDF'
    });
  }
}
