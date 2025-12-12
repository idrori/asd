/**
 * Vercel Serverless Function: Create Shareable PDF Viewer Link
 *
 * Stores PDF in Vercel Blob storage and returns a shareable link
 * PDFs are stored with a unique token for access
 *
 * Endpoint: POST /api/create-viewer-link
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';

export const config = {
  maxDuration: 60,
};

interface CreateLinkRequest {
  filename: string;
  pdfBase64: string;
}

function generateToken(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 32; i++) {
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
    const { filename, pdfBase64 }: CreateLinkRequest = req.body;

    if (!pdfBase64) {
      return res.status(400).json({
        success: false,
        error: 'No PDF data provided'
      });
    }

    // Check if Blob storage is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('[Viewer Link] BLOB_READ_WRITE_TOKEN not configured');
      return res.status(503).json({
        success: false,
        error: 'Blob storage not configured. Add BLOB_READ_WRITE_TOKEN to Vercel environment.'
      });
    }

    // Generate unique token
    const token = generateToken();

    // Convert base64 to buffer
    const pdfBuffer = Buffer.from(pdfBase64, 'base64');

    // Store in Vercel Blob
    const blob = await put(`viewer/${token}.pdf`, pdfBuffer, {
      access: 'public',
      contentType: 'application/pdf',
      addRandomSuffix: false
    });

    // Build the viewer URL
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://icis-deploy-12-10-2025.vercel.app';

    const viewerUrl = `/viewer/${token}`;
    const fullUrl = `${baseUrl}${viewerUrl}`;

    console.log(`[Viewer Link] Created: ${token.substring(0, 8)}... -> ${blob.url}`);

    return res.status(200).json({
      success: true,
      token,
      viewerUrl,
      fullUrl,
      blobUrl: blob.url,
      expiresIn: '7 days',
      filename: filename || 'paper.pdf'
    });

  } catch (error) {
    console.error('[Viewer Link] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create viewer link'
    });
  }
}
