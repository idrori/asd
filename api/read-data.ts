/**
 * Vercel Serverless Function: Read Data File
 *
 * Reads a data file from Vercel Blob storage
 * Returns file content and preview info
 *
 * Endpoint: GET /api/read-data?url=<blob-url>
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

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
    const blobUrl = req.query.url as string;

    if (!blobUrl) {
      return res.status(400).json({
        success: false,
        error: 'Blob URL is required'
      });
    }

    // SECURITY: Validate URL is from allowed Vercel Blob domains only (SSRF prevention)
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(blobUrl);
    } catch {
      return res.status(400).json({
        success: false,
        error: 'Invalid URL format'
      });
    }

    const allowedDomains = [
      'blob.vercel-storage.com',
      'public.blob.vercel-storage.com'
    ];

    const isAllowed = allowedDomains.some(domain =>
      parsedUrl.hostname === domain || parsedUrl.hostname.endsWith(`.${domain}`)
    );

    if (!isAllowed) {
      console.warn(`[Read Data] SSRF attempt blocked: ${parsedUrl.hostname}`);
      return res.status(403).json({
        success: false,
        error: 'URL not from allowed domain'
      });
    }

    // Fetch the file from Blob storage
    const response = await fetch(blobUrl);

    if (!response.ok) {
      return res.status(404).json({
        success: false,
        error: 'Data file not found'
      });
    }

    const content = await response.text();
    const lines = content.split(/\r?\n/);
    const firstLine = lines[0] || '';
    const totalLines = lines.filter(l => l.trim()).length;

    // Get filename from URL
    const urlParts = blobUrl.split('/');
    const filename = urlParts[urlParts.length - 1] || 'data.csv';

    console.log(`[Read Data] Read: ${filename} (${totalLines} lines)`);

    return res.status(200).json({
      success: true,
      filename,
      content,
      firstLine,
      totalLines,
      size: content.length
    });

  } catch (error) {
    console.error('[Read Data] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to read file'
    });
  }
}
