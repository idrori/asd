/**
 * Vercel Serverless Function: Semantic Scholar Reference Lookup
 *
 * Searches for academic papers on Semantic Scholar API
 * Returns matched papers with metadata for verification
 *
 * Endpoint: POST /api/semantic-scholar
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 30,
};

const SEMANTIC_SCHOLAR_BASE_URL = 'https://api.semanticscholar.org/graph/v1';

interface SearchRequest {
  queries: string[];  // Array of reference strings to search
}

interface PaperResult {
  query: string;
  found: boolean;
  paper?: {
    title: string;
    authors: string;
    year: number;
    venue: string;
    citationCount: number;
    url: string;
    apaReference: string;
  };
  error?: string;
}

// SECURITY: Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://iciscopilot.vercel.app',
  'https://idrori.github.io',
  'http://localhost:5173',
  'http://localhost:3000'
];

function getCorsOrigin(req: VercelRequest): string {
  const origin = req.headers.origin as string;
  if (origin && ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed))) {
    return origin;
  }
  return ALLOWED_ORIGINS[0];
}

async function searchPaper(query: string, apiKey?: string): Promise<PaperResult> {
  try {
    const url = `${SEMANTIC_SCHOLAR_BASE_URL}/paper/search?query=${encodeURIComponent(query)}&limit=1&fields=title,authors,year,venue,journal,citationCount,url,externalIds`;

    const headers: Record<string, string> = {};
    if (apiKey) {
      headers['x-api-key'] = apiKey;
    }

    const response = await fetch(url, { headers });

    if (!response.ok) {
      // Rate limited or API error
      if (response.status === 429) {
        return { query, found: false, error: 'Rate limited - try again later' };
      }
      return { query, found: false, error: `API error: ${response.status}` };
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return { query, found: false };
    }

    const paper = data.data[0];

    // Format authors
    const authorNames = paper.authors
      ?.map((a: { name: string }) => a.name)
      .slice(0, 3)
      .join(', ') || 'Unknown';

    const authorsFormatted = paper.authors?.length > 3
      ? `${authorNames}, et al.`
      : authorNames;

    // Format as APA style
    const venue = paper.journal?.name || paper.venue || 'Retrieved from Semantic Scholar';
    const apaReference = `${authorsFormatted} (${paper.year || 'n.d.'}). ${paper.title}. ${venue}.`;

    // Build URL
    const paperId = paper.externalIds?.DOI
      ? `https://doi.org/${paper.externalIds.DOI}`
      : `https://www.semanticscholar.org/paper/${paper.paperId}`;

    return {
      query,
      found: true,
      paper: {
        title: paper.title,
        authors: authorsFormatted,
        year: paper.year,
        venue: venue,
        citationCount: paper.citationCount || 0,
        url: paperId,
        apaReference
      }
    };
  } catch (error) {
    console.error(`[SemanticScholar] Error searching for "${query}":`, error);
    return { query, found: false, error: 'Search failed' };
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // SECURITY: Restrict CORS to known origins only
  const corsOrigin = getCorsOrigin(req);
  res.setHeader('Access-Control-Allow-Origin', corsOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body: SearchRequest = req.body;

    if (!body.queries || !Array.isArray(body.queries) || body.queries.length === 0) {
      return res.status(400).json({ error: 'queries array required' });
    }

    // Limit to 10 queries to prevent abuse
    const queries = body.queries.slice(0, 10);

    const apiKey = process.env.SEMANTIC_SCHOLAR_API_KEY;

    console.log(`[SemanticScholar] Searching for ${queries.length} references`);

    // Search for each query with a small delay to avoid rate limiting
    const results: PaperResult[] = [];
    for (const query of queries) {
      if (query.trim()) {
        const result = await searchPaper(query.trim(), apiKey);
        results.push(result);
        // Small delay between requests to avoid rate limiting
        if (queries.indexOf(query) < queries.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      }
    }

    const foundCount = results.filter(r => r.found).length;
    console.log(`[SemanticScholar] Found ${foundCount}/${results.length} references`);

    return res.status(200).json({
      success: true,
      results
    });

  } catch (error) {
    console.error('[SemanticScholar] Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
