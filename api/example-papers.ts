/**
 * Vercel Serverless Function: Example Papers
 *
 * Returns ICIS 2024 example papers as base64-encoded PDFs
 * Used to provide exemplar papers to Gemini for paper quality calibration
 *
 * Endpoint: GET /api/example-papers
 * Query params:
 *   - count: number of papers to return (default: 10, max: 11)
 *
 * Response: { papers: [{ filename, base64, mimeType }] }
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as fs from 'fs';
import * as path from 'path';

export const config = {
  maxDuration: 60,
};

interface ExamplePaper {
  filename: string;
  base64: string;
  mimeType: string;
  size: number;
}

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

    // Path to example papers directory
    // In Vercel, the project root is accessible
    const examplesDir = path.join(process.cwd(), 'icis2024Examples');

    // Check if directory exists
    if (!fs.existsSync(examplesDir)) {
      console.error(`[Example Papers] Directory not found: ${examplesDir}`);
      return res.status(404).json({
        success: false,
        error: 'Example papers directory not found',
        path: examplesDir
      });
    }

    // Read all PDF files from the directory, sorted by size (smallest first)
    // This helps stay under Vercel's 4.5MB payload limit
    const allFiles = fs.readdirSync(examplesDir)
      .filter(f => f.toLowerCase().endsWith('.pdf'))
      .map(f => ({
        name: f,
        size: fs.statSync(path.join(examplesDir, f)).size
      }))
      .sort((a, b) => a.size - b.size)  // Smallest first
      .slice(0, count);

    const files = allFiles.map(f => f.name);

    console.log(`[Example Papers] Found ${files.length} PDF files, returning ${count}`);

    // Read each PDF and convert to base64
    const papers: ExamplePaper[] = [];

    for (const filename of files) {
      const filePath = path.join(examplesDir, filename);
      const fileBuffer = fs.readFileSync(filePath);
      const base64 = fileBuffer.toString('base64');

      papers.push({
        filename,
        base64,
        mimeType: 'application/pdf',
        size: fileBuffer.length
      });

      console.log(`[Example Papers] Loaded: ${filename} (${Math.round(fileBuffer.length / 1024)}KB)`);
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
