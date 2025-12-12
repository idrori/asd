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
import { randomBytes } from 'crypto';

export const config = {
  maxDuration: 60,
};

interface CreateLinkRequest {
  filename: string;
  pdfBase64: string;
}

// SECURITY: Use cryptographically secure random token generation
function generateToken(): string {
  return randomBytes(24).toString('base64url');
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

    // Store in Vercel Blob with anonymous path (no identifiable info)
    // Use only the random token as the path - no username, no project name
    // IMPORTANT: Use 'viewer/' prefix to match get-viewer-pdf.ts lookup
    const blob = await put(`viewer/${token}.pdf`, pdfBuffer, {
      access: 'public',
      contentType: 'application/pdf',
      addRandomSuffix: false
    });

    // Build the viewer URL using a clean base URL
    // Use custom domain if available, otherwise use the generic vercel.app URL
    const baseUrl = process.env.CUSTOM_DOMAIN
      ? `https://${process.env.CUSTOM_DOMAIN}`
      : 'https://iciscopilot.vercel.app';

    // The shareable link only contains the random token - no personal info
    const viewerUrl = `/viewer/${token}`;
    const fullUrl = `${baseUrl}${viewerUrl}`;

    console.log(`[Viewer Link] Created: ${token.substring(0, 8)}...`);

    return res.status(200).json({
      success: true,
      token,
      viewerUrl,
      fullUrl,
      // Don't expose the blob URL directly - only use our viewer endpoint
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
