/**
 * Vercel Serverless Function: Semantic Scholar Reference API
 *
 * Enhanced API for reference validation and discovery:
 * - validate: Validate BibTeX references against Semantic Scholar
 * - search: Keyword search with filters for paper discovery
 * - citations: Get references/citations of a paper for graph traversal
 * - queries: Legacy batch search (backwards compatible)
 *
 * Endpoint: POST /api/semantic-scholar
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 60,  // Increased for batch validation
};

const SEMANTIC_SCHOLAR_BASE_URL = 'https://api.semanticscholar.org/graph/v1';

// Standard fields to request from SS API
const PAPER_FIELDS = 'paperId,title,authors,year,venue,journal,citationCount,influentialCitationCount,externalIds,url,abstract,fieldsOfStudy,openAccessPdf';

// ============================================================
// Types
// ============================================================

interface LegacySearchRequest {
  queries: string[];
}

interface ValidateRequest {
  action: 'validate';
  references: { title: string; authors?: string[]; year?: number; bibKey: string }[];
}

interface SearchRequest {
  action: 'search';
  keywords: string[];
  fieldsOfStudy?: string[];
  yearMin?: number;
  yearMax?: number;
  limit?: number;
}

interface CitationsRequest {
  action: 'citations';
  paperId: string;
  type: 'references' | 'citations';
  limit?: number;
}

type RequestBody = LegacySearchRequest | ValidateRequest | SearchRequest | CitationsRequest;

interface SSPaper {
  paperId: string;
  title: string;
  authors?: { authorId: string; name: string }[];
  year?: number;
  venue?: string;
  journal?: { name: string; volume?: string; pages?: string };
  citationCount?: number;
  influentialCitationCount?: number;
  externalIds?: { DOI?: string; ArXiv?: string };
  url?: string;
  abstract?: string;
  fieldsOfStudy?: string[];
  openAccessPdf?: { url: string };
}

interface ValidationResult {
  bibKey: string;
  originalTitle: string;
  found: boolean;
  confidence: number;
  status: 'VERIFIED' | 'PARTIAL' | 'UNVERIFIED';
  paper?: SSPaper;
  discrepancies?: string[];
}

interface LegacyPaperResult {
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

// ============================================================
// CORS Configuration
// ============================================================

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

// ============================================================
// String Similarity (for title matching)
// ============================================================

function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b(the|a|an|of|and|in|on|for|to|with)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

function titleSimilarity(title1: string, title2: string): number {
  const norm1 = normalizeString(title1);
  const norm2 = normalizeString(title2);

  if (norm1 === norm2) return 1.0;
  if (norm1.length === 0 || norm2.length === 0) return 0.0;

  // Check if main titles match (before colon)
  const main1 = norm1.split(/[:\-–—]/)[0].trim();
  const main2 = norm2.split(/[:\-–—]/)[0].trim();
  if (main1 === main2 && main1.length > 10) return 0.95;

  const distance = levenshteinDistance(norm1, norm2);
  const maxLen = Math.max(norm1.length, norm2.length);
  const similarity = 1 - (distance / maxLen);

  // Boost if one contains the other
  if (norm1.includes(norm2) || norm2.includes(norm1)) {
    return Math.max(similarity, 0.85);
  }

  return similarity;
}

function extractLastName(author: string): string {
  const cleaned = author.trim();
  if (cleaned.includes(',')) {
    return cleaned.split(',')[0].trim().toLowerCase();
  }
  const parts = cleaned.split(/\s+/);
  return parts.length >= 2 ? parts[parts.length - 1].toLowerCase() : cleaned.toLowerCase();
}

// ============================================================
// API Helper Functions
// ============================================================

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 3
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      if (response.status === 429) {
        // Rate limited - exponential backoff
        const waitTime = Math.pow(2, attempt) * 1000;
        console.log(`[SemanticScholar] Rate limited, waiting ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }

      return response;
    } catch (error) {
      lastError = error as Error;
      console.error(`[SemanticScholar] Fetch attempt ${attempt + 1} failed:`, error);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  throw lastError || new Error('Max retries exceeded');
}

function buildHeaders(apiKey?: string): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };
  if (apiKey) {
    headers['x-api-key'] = apiKey;
  }
  return headers;
}

// ============================================================
// Action Handlers
// ============================================================

/**
 * Validate references against Semantic Scholar
 */
async function handleValidate(
  refs: { title: string; authors?: string[]; year?: number; bibKey: string }[],
  apiKey?: string
): Promise<{ success: boolean; results: ValidationResult[] }> {
  const results: ValidationResult[] = [];

  console.log(`[SemanticScholar] Validating ${refs.length} references`);

  for (const ref of refs) {
    try {
      // Search by title
      const searchUrl = `${SEMANTIC_SCHOLAR_BASE_URL}/paper/search?query=${encodeURIComponent(ref.title)}&limit=3&fields=${PAPER_FIELDS}`;
      const response = await fetchWithRetry(searchUrl, { headers: buildHeaders(apiKey) });

      if (!response.ok) {
        results.push({
          bibKey: ref.bibKey,
          originalTitle: ref.title,
          found: false,
          confidence: 0,
          status: 'UNVERIFIED',
          discrepancies: [`API error: ${response.status}`]
        });
        continue;
      }

      const data = await response.json();
      const papers: SSPaper[] = data.data || [];

      if (papers.length === 0) {
        results.push({
          bibKey: ref.bibKey,
          originalTitle: ref.title,
          found: false,
          confidence: 0,
          status: 'UNVERIFIED'
        });
        continue;
      }

      // Find best match
      let bestMatch: SSPaper | null = null;
      let bestConfidence = 0;
      const discrepancies: string[] = [];

      for (const paper of papers) {
        const titleSim = titleSimilarity(ref.title, paper.title);
        let confidence = titleSim * 0.6;

        // Author matching
        if (ref.authors && ref.authors.length > 0 && paper.authors && paper.authors.length > 0) {
          const refLastNames = ref.authors.map(extractLastName);
          const ssLastNames = paper.authors.map(a => extractLastName(a.name));
          const firstAuthorMatch = refLastNames[0] === ssLastNames[0];
          const matchCount = refLastNames.filter(n => ssLastNames.includes(n)).length;
          const authorSim = firstAuthorMatch ? 0.5 + (matchCount / Math.max(refLastNames.length, ssLastNames.length)) * 0.5 : matchCount / Math.max(refLastNames.length, ssLastNames.length) * 0.8;
          confidence += authorSim * 0.25;
        } else {
          confidence += 0.125;  // Neutral if no authors
        }

        // Year matching
        if (ref.year && paper.year) {
          if (ref.year === paper.year) {
            confidence += 0.15;
          } else if (Math.abs(ref.year - paper.year) === 1) {
            confidence += 0.1;
          }
        } else {
          confidence += 0.075;  // Neutral if no year
        }

        if (confidence > bestConfidence) {
          bestConfidence = confidence;
          bestMatch = paper;
        }
      }

      if (bestMatch && bestConfidence > 0.5) {
        // Check for discrepancies
        if (ref.year && bestMatch.year && ref.year !== bestMatch.year) {
          discrepancies.push(`Year: ${ref.year} vs ${bestMatch.year}`);
        }
        if (titleSimilarity(ref.title, bestMatch.title) < 0.95) {
          discrepancies.push(`Title similarity: ${(titleSimilarity(ref.title, bestMatch.title) * 100).toFixed(0)}%`);
        }

        const status = bestConfidence >= 0.85 ? 'VERIFIED' :
                       bestConfidence >= 0.65 ? 'PARTIAL' : 'UNVERIFIED';

        results.push({
          bibKey: ref.bibKey,
          originalTitle: ref.title,
          found: true,
          confidence: bestConfidence,
          status,
          paper: bestMatch,
          discrepancies: discrepancies.length > 0 ? discrepancies : undefined
        });
      } else {
        results.push({
          bibKey: ref.bibKey,
          originalTitle: ref.title,
          found: false,
          confidence: bestConfidence,
          status: 'UNVERIFIED'
        });
      }

      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 150));

    } catch (error) {
      console.error(`[SemanticScholar] Error validating "${ref.title}":`, error);
      results.push({
        bibKey: ref.bibKey,
        originalTitle: ref.title,
        found: false,
        confidence: 0,
        status: 'UNVERIFIED',
        discrepancies: [`Error: ${error instanceof Error ? error.message : 'Unknown'}`]
      });
    }
  }

  const verified = results.filter(r => r.status === 'VERIFIED').length;
  const partial = results.filter(r => r.status === 'PARTIAL').length;
  console.log(`[SemanticScholar] Validation complete: ${verified} verified, ${partial} partial, ${results.length - verified - partial} unverified`);

  return { success: true, results };
}

/**
 * Search for papers by keywords with filters
 */
async function handleSearch(
  keywords: string[],
  options: { fieldsOfStudy?: string[]; yearMin?: number; yearMax?: number; limit?: number },
  apiKey?: string
): Promise<{ success: boolean; papers: SSPaper[] }> {
  const limit = Math.min(options.limit || 20, 50);
  const query = keywords.join(' ');

  console.log(`[SemanticScholar] Searching for "${query}" (limit: ${limit})`);

  let url = `${SEMANTIC_SCHOLAR_BASE_URL}/paper/search?query=${encodeURIComponent(query)}&limit=${limit}&fields=${PAPER_FIELDS}`;

  // Add year filter if specified
  if (options.yearMin || options.yearMax) {
    const yearFilter = `${options.yearMin || 1900}-${options.yearMax || 2030}`;
    url += `&year=${yearFilter}`;
  }

  // Add fields of study filter
  if (options.fieldsOfStudy && options.fieldsOfStudy.length > 0) {
    url += `&fieldsOfStudy=${options.fieldsOfStudy.join(',')}`;
  }

  try {
    const response = await fetchWithRetry(url, { headers: buildHeaders(apiKey) });

    if (!response.ok) {
      console.error(`[SemanticScholar] Search failed: ${response.status}`);
      return { success: false, papers: [] };
    }

    const data = await response.json();
    const papers: SSPaper[] = data.data || [];

    console.log(`[SemanticScholar] Found ${papers.length} papers`);
    return { success: true, papers };

  } catch (error) {
    console.error('[SemanticScholar] Search error:', error);
    return { success: false, papers: [] };
  }
}

/**
 * Get references or citations of a paper for graph traversal
 */
async function handleCitations(
  paperId: string,
  type: 'references' | 'citations',
  limit: number = 10,
  apiKey?: string
): Promise<{ success: boolean; papers: SSPaper[] }> {
  console.log(`[SemanticScholar] Getting ${type} for paper ${paperId}`);

  const url = `${SEMANTIC_SCHOLAR_BASE_URL}/paper/${paperId}/${type}?limit=${Math.min(limit, 100)}&fields=paperId,title,authors,year,venue,citationCount`;

  try {
    const response = await fetchWithRetry(url, { headers: buildHeaders(apiKey) });

    if (!response.ok) {
      console.error(`[SemanticScholar] Citations fetch failed: ${response.status}`);
      return { success: false, papers: [] };
    }

    const data = await response.json();

    // Response format is { data: [ { citingPaper/citedPaper: {...} } ] }
    const papers: SSPaper[] = (data.data || [])
      .map((item: any) => type === 'citations' ? item.citingPaper : item.citedPaper)
      .filter((p: any) => p && p.paperId);

    console.log(`[SemanticScholar] Found ${papers.length} ${type}`);
    return { success: true, papers };

  } catch (error) {
    console.error(`[SemanticScholar] Citations error:`, error);
    return { success: false, papers: [] };
  }
}

/**
 * Legacy search handler for backwards compatibility
 */
async function handleLegacySearch(
  queries: string[],
  apiKey?: string
): Promise<{ success: boolean; results: LegacyPaperResult[] }> {
  const results: LegacyPaperResult[] = [];

  console.log(`[SemanticScholar] Legacy search for ${queries.length} queries`);

  for (const query of queries.slice(0, 10)) {
    if (!query.trim()) continue;

    try {
      const url = `${SEMANTIC_SCHOLAR_BASE_URL}/paper/search?query=${encodeURIComponent(query)}&limit=1&fields=title,authors,year,venue,journal,citationCount,url,externalIds`;
      const response = await fetchWithRetry(url, { headers: buildHeaders(apiKey) });

      if (!response.ok) {
        results.push({
          query,
          found: false,
          error: response.status === 429 ? 'Rate limited' : `API error: ${response.status}`
        });
        continue;
      }

      const data = await response.json();
      if (!data.data || data.data.length === 0) {
        results.push({ query, found: false });
        continue;
      }

      const paper = data.data[0];
      const authorNames = paper.authors?.map((a: any) => a.name).slice(0, 3).join(', ') || 'Unknown';
      const authorsFormatted = paper.authors?.length > 3 ? `${authorNames}, et al.` : authorNames;
      const venue = paper.journal?.name || paper.venue || 'Retrieved from Semantic Scholar';
      const paperId = paper.externalIds?.DOI
        ? `https://doi.org/${paper.externalIds.DOI}`
        : `https://www.semanticscholar.org/paper/${paper.paperId}`;

      results.push({
        query,
        found: true,
        paper: {
          title: paper.title,
          authors: authorsFormatted,
          year: paper.year,
          venue,
          citationCount: paper.citationCount || 0,
          url: paperId,
          apaReference: `${authorsFormatted} (${paper.year || 'n.d.'}). ${paper.title}. ${venue}.`
        }
      });

      await new Promise(resolve => setTimeout(resolve, 200));

    } catch (error) {
      results.push({ query, found: false, error: 'Search failed' });
    }
  }

  const foundCount = results.filter(r => r.found).length;
  console.log(`[SemanticScholar] Found ${foundCount}/${results.length} references`);

  return { success: true, results };
}

// ============================================================
// Main Handler
// ============================================================

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
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
    const body: RequestBody = req.body;
    const apiKey = process.env.SEMANTIC_SCHOLAR_API_KEY;

    // Determine action type
    if ('action' in body) {
      switch (body.action) {
        case 'validate': {
          const { references } = body as ValidateRequest;
          if (!references || !Array.isArray(references)) {
            return res.status(400).json({ error: 'references array required' });
          }
          const result = await handleValidate(references.slice(0, 50), apiKey);
          return res.status(200).json(result);
        }

        case 'search': {
          const { keywords, fieldsOfStudy, yearMin, yearMax, limit } = body as SearchRequest;
          if (!keywords || !Array.isArray(keywords) || keywords.length === 0) {
            return res.status(400).json({ error: 'keywords array required' });
          }
          const result = await handleSearch(keywords, { fieldsOfStudy, yearMin, yearMax, limit }, apiKey);
          return res.status(200).json(result);
        }

        case 'citations': {
          const { paperId, type, limit } = body as CitationsRequest;
          if (!paperId || !type) {
            return res.status(400).json({ error: 'paperId and type required' });
          }
          const result = await handleCitations(paperId, type, limit, apiKey);
          return res.status(200).json(result);
        }

        default:
          return res.status(400).json({ error: 'Unknown action' });
      }
    }

    // Legacy format: { queries: [...] }
    if ('queries' in body) {
      const { queries } = body as LegacySearchRequest;
      if (!queries || !Array.isArray(queries) || queries.length === 0) {
        return res.status(400).json({ error: 'queries array required' });
      }
      const result = await handleLegacySearch(queries, apiKey);
      return res.status(200).json(result);
    }

    return res.status(400).json({ error: 'Invalid request format' });

  } catch (error) {
    console.error('[SemanticScholar] Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
