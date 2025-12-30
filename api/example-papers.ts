/**
 * Vercel Serverless Function: Example Papers
 *
 * Returns ICIS 2024 example papers as base64-encoded PDFs from Vercel Blob storage
 * Used to provide exemplar papers to Gemini for paper quality calibration
 *
 * Endpoint: GET /api/example-papers
 * Query params:
 *   - count: number of papers to return (default: 10, max: 11)
 *
 * Response: { papers: [{ filename, base64, mimeType }] }
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { list } from '@vercel/blob';

export const config = {
  maxDuration: 60,
};

interface ExamplePaper {
  filename: string;
  base64: string;
  mimeType: string;
  size: number;
}

// Base URL for the blob storage
const BLOB_BASE_URL = 'https://qtr4njdgvzsdurlu.public.blob.vercel-storage.com/icis2024Examples/';

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
    // Parse count parameter (default 10, max 11)
    const requestedCount = parseInt(req.query.count as string) || 10;
    const count = Math.min(Math.max(1, requestedCount), 11);

    // List blobs in the icis2024Examples folder
    const { blobs } = await list({ prefix: 'icis2024Examples/' });

    if (!blobs || blobs.length === 0) {
      console.error('[Example Papers] No blobs found in icis2024Examples/');
      return res.status(404).json({
        success: false,
        error: 'No example papers found in blob storage'
      });
    }

    // Filter PDFs and sort by size (smallest first)
    const pdfBlobs = blobs
      .filter(b => b.pathname.toLowerCase().endsWith('.pdf'))
      .sort((a, b) => a.size - b.size)
      .slice(0, count);

    console.log(`[Example Papers] Found ${pdfBlobs.length} PDF blobs, returning ${count}`);

    // Fetch each PDF and convert to base64
    const papers: ExamplePaper[] = [];

    for (const blob of pdfBlobs) {
      const response = await fetch(blob.url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString('base64');

      // Extract filename from pathname
      const filename = blob.pathname.replace('icis2024Examples/', '');

      papers.push({
        filename,
        base64,
        mimeType: 'application/pdf',
        size: buffer.length
      });

      console.log(`[Example Papers] Loaded: ${filename} (${Math.round(buffer.length / 1024)}KB)`);
    }

    const totalSize = papers.reduce((sum, p) => sum + p.size, 0);
    console.log(`[Example Papers] Total: ${papers.length} papers, ${Math.round(totalSize / 1024 / 1024)}MB`);

    return res.status(200).json({
      success: true,
      count: papers.length,
      totalSize,
      papers
    });

  } catch (error) {
    console.error('[Example Papers] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to load example papers'
    });
  }
}
