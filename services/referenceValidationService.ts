/**
 * Reference Validation Service
 *
 * Orchestrates the hybrid LLM + Semantic Scholar reference pipeline:
 * - Phase 2: Validate LLM-generated references against SS
 * - Phase 3: Discover additional relevant papers via SS search
 * - Phase 4: Merge and deduplicate all references
 * - Phase 5: Generate final validated BibTeX
 *
 * Based on research findings from:
 * - LLMs for Automated Literature Review (Dec 2024)
 * - LitLLM (ServiceNow)
 * - NVIDIA Citation Validation Tool
 */

import { parseBibTeX, generateBibTeXEntry, generateCitationKey, type ParsedBibTeXEntry } from './bibtexParser';
import { titleSimilarity, isSamePaper } from './stringSimilarity';
import {
  ReferenceValidationStatus,
  type ReferenceValidationResult,
  type ReferenceValidationReport,
  type SemanticScholarPaper
} from '../types';

// ============================================================
// Configuration
// ============================================================

const API_BASE_URL = typeof window !== 'undefined'
  ? ''  // Browser: relative URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

const SS_ENDPOINT = `${API_BASE_URL}/api/semantic-scholar`;

// Validation thresholds
const CONFIDENCE_VERIFIED = 0.85;
const CONFIDENCE_PARTIAL = 0.65;
const RECENCY_YEAR_MIN = 2020;
const RECENCY_YEAR_MAX = 2025;

// Discovery settings
const DISCOVERY_KEYWORDS_LIMIT = 5;
const DISCOVERY_PAPERS_LIMIT = 10;
const CITATION_GRAPH_LIMIT = 5;

// ============================================================
// API Helpers
// ============================================================

interface SSValidateResponse {
  success: boolean;
  results: Array<{
    bibKey: string;
    originalTitle: string;
    found: boolean;
    confidence: number;
    status: 'VERIFIED' | 'PARTIAL' | 'UNVERIFIED';
    paper?: SemanticScholarPaper;
    discrepancies?: string[];
  }>;
}

interface SSSearchResponse {
  success: boolean;
  papers: SemanticScholarPaper[];
}

async function callSSValidate(
  references: { title: string; authors?: string[]; year?: number; bibKey: string }[]
): Promise<SSValidateResponse> {
  try {
    const response = await fetch(SS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'validate', references })
    });

    if (!response.ok) {
      console.error(`[RefValidation] SS validate failed: ${response.status}`);
      return { success: false, results: [] };
    }

    return await response.json();
  } catch (error) {
    console.error('[RefValidation] SS validate error:', error);
    return { success: false, results: [] };
  }
}

async function callSSSearch(
  keywords: string[],
  options?: { yearMin?: number; yearMax?: number; limit?: number }
): Promise<SSSearchResponse> {
  try {
    const response = await fetch(SS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'search',
        keywords,
        fieldsOfStudy: ['Computer Science'],
        yearMin: options?.yearMin || RECENCY_YEAR_MIN,
        yearMax: options?.yearMax || RECENCY_YEAR_MAX,
        limit: options?.limit || DISCOVERY_PAPERS_LIMIT
      })
    });

    if (!response.ok) {
      console.error(`[RefValidation] SS search failed: ${response.status}`);
      return { success: false, papers: [] };
    }

    return await response.json();
  } catch (error) {
    console.error('[RefValidation] SS search error:', error);
    return { success: false, papers: [] };
  }
}

async function callSSCitations(
  paperId: string,
  type: 'references' | 'citations'
): Promise<SSSearchResponse> {
  try {
    const response = await fetch(SS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'citations',
        paperId,
        type,
        limit: CITATION_GRAPH_LIMIT
      })
    });

    if (!response.ok) {
      return { success: false, papers: [] };
    }

    return await response.json();
  } catch (error) {
    console.error('[RefValidation] SS citations error:', error);
    return { success: false, papers: [] };
  }
}

// ============================================================
// Phase 2: Validate LLM References
// ============================================================

async function validateLLMReferences(
  parsedRefs: ParsedBibTeXEntry[]
): Promise<ReferenceValidationResult[]> {
  console.log(`[RefValidation] Phase 2: Validating ${parsedRefs.length} LLM references`);

  const refsToValidate = parsedRefs.map(ref => ({
    bibKey: ref.key,
    title: ref.title,
    authors: ref.authors,
    year: ref.year
  }));

  const response = await callSSValidate(refsToValidate);

  if (!response.success) {
    // Return all as UNVERIFIED if API fails
    return parsedRefs.map(ref => ({
      bibKey: ref.key,
      originalTitle: ref.title,
      originalAuthors: ref.authors,
      originalYear: ref.year,
      status: ReferenceValidationStatus.UNVERIFIED,
      confidence: 0,
      source: 'LLM' as const
    }));
  }

  // Map API results to our format
  return response.results.map(result => {
    const originalRef = parsedRefs.find(r => r.key === result.bibKey);

    return {
      bibKey: result.bibKey,
      originalTitle: result.originalTitle,
      originalAuthors: originalRef?.authors,
      originalYear: originalRef?.year,
      status: result.status === 'VERIFIED' ? ReferenceValidationStatus.VERIFIED :
              result.status === 'PARTIAL' ? ReferenceValidationStatus.PARTIAL :
              ReferenceValidationStatus.UNVERIFIED,
      confidence: result.confidence,
      ssMatch: result.paper,
      discrepancies: result.discrepancies,
      source: 'LLM' as const
    };
  });
}

// ============================================================
// Phase 3: Discover Additional Papers
// ============================================================

/**
 * Extract key research concepts from interview transcript
 */
function extractKeywords(interviewText: string): string[] {
  // Simple keyword extraction - could be enhanced with LLM
  const text = interviewText.toLowerCase();

  // Common IS research terms to look for
  const researchTerms = [
    'information systems', 'digital transformation', 'artificial intelligence',
    'machine learning', 'technology adoption', 'user acceptance',
    'blockchain', 'social media', 'cybersecurity', 'data analytics',
    'cloud computing', 'e-commerce', 'digital platform', 'IT governance',
    'knowledge management', 'business intelligence', 'enterprise systems',
    'human-computer interaction', 'technology acceptance model', 'TAM',
    'UTAUT', 'IS success', 'digital innovation', 'IT investment',
    'software development', 'agile', 'devops', 'healthcare IT',
    'fintech', 'smart city', 'IoT', 'internet of things'
  ];

  const foundTerms: string[] = [];
  for (const term of researchTerms) {
    if (text.includes(term.toLowerCase())) {
      foundTerms.push(term);
    }
  }

  // Also extract potential topic phrases (2-3 word combinations)
  const words = text.split(/\s+/).filter(w => w.length > 4);
  const uniqueWords = [...new Set(words)];

  // Return top keywords
  return foundTerms.slice(0, DISCOVERY_KEYWORDS_LIMIT);
}

async function discoverAdditionalPapers(
  interviewText: string,
  validatedRefs: ReferenceValidationResult[]
): Promise<ReferenceValidationResult[]> {
  console.log('[RefValidation] Phase 3: Discovering additional papers');

  const discovered: ReferenceValidationResult[] = [];
  const existingTitles = new Set(validatedRefs.map(r => r.originalTitle.toLowerCase()));

  // Method 1: Keyword search
  const keywords = extractKeywords(interviewText);
  if (keywords.length > 0) {
    console.log(`[RefValidation] Searching with keywords: ${keywords.join(', ')}`);

    const searchResult = await callSSSearch(keywords, {
      yearMin: RECENCY_YEAR_MIN,
      yearMax: RECENCY_YEAR_MAX,
      limit: DISCOVERY_PAPERS_LIMIT
    });

    if (searchResult.success) {
      for (const paper of searchResult.papers) {
        // Skip if already in validated refs
        if (existingTitles.has(paper.title.toLowerCase())) continue;

        // Skip low citation papers (quality filter)
        if ((paper.citationCount || 0) < 5) continue;

        discovered.push({
          bibKey: generateCitationKey(
            paper.authors?.[0]?.name || 'unknown',
            paper.year,
            paper.title
          ),
          originalTitle: paper.title,
          originalAuthors: paper.authors?.map(a => a.name),
          originalYear: paper.year,
          status: ReferenceValidationStatus.DISCOVERED,
          confidence: 1.0,  // SS papers are verified by definition
          ssMatch: paper,
          source: 'SS_SEARCH' as const
        });

        existingTitles.add(paper.title.toLowerCase());
      }
    }
  }

  // Method 2: Citation graph traversal
  const verifiedRefs = validatedRefs.filter(
    r => r.status === ReferenceValidationStatus.VERIFIED && r.ssMatch?.paperId
  );

  if (verifiedRefs.length > 0) {
    // Get citations from up to 3 verified papers
    for (const ref of verifiedRefs.slice(0, 3)) {
      if (!ref.ssMatch?.paperId) continue;

      const citationsResult = await callSSCitations(ref.ssMatch.paperId, 'citations');

      if (citationsResult.success) {
        for (const paper of citationsResult.papers) {
          if (existingTitles.has(paper.title.toLowerCase())) continue;
          if ((paper.citationCount || 0) < 10) continue;  // Higher threshold for citation graph
          if (!paper.year || paper.year < RECENCY_YEAR_MIN) continue;

          discovered.push({
            bibKey: generateCitationKey(
              paper.authors?.[0]?.name || 'unknown',
              paper.year,
              paper.title
            ),
            originalTitle: paper.title,
            originalAuthors: paper.authors?.map(a => a.name),
            originalYear: paper.year,
            status: ReferenceValidationStatus.DISCOVERED,
            confidence: 1.0,
            ssMatch: paper,
            source: 'SS_CITATION_GRAPH' as const
          });

          existingTitles.add(paper.title.toLowerCase());
        }
      }
    }
  }

  console.log(`[RefValidation] Discovered ${discovered.length} additional papers`);
  return discovered;
}

// ============================================================
// Phase 4: Merge and Deduplicate
// ============================================================

function mergeAndDeduplicate(
  validatedRefs: ReferenceValidationResult[],
  discoveredRefs: ReferenceValidationResult[],
  targetCount: { min: number; max: number }
): ReferenceValidationResult[] {
  console.log('[RefValidation] Phase 4: Merging and deduplicating');

  // Sort validated refs by status (VERIFIED > PARTIAL > UNVERIFIED)
  const sortedValidated = [...validatedRefs].sort((a, b) => {
    const statusOrder = {
      [ReferenceValidationStatus.VERIFIED]: 0,
      [ReferenceValidationStatus.PARTIAL]: 1,
      [ReferenceValidationStatus.UNVERIFIED]: 2,
      [ReferenceValidationStatus.REJECTED]: 3,
      [ReferenceValidationStatus.DISCOVERED]: 4
    };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  // Start with all non-rejected validated refs
  const merged = sortedValidated.filter(
    r => r.status !== ReferenceValidationStatus.REJECTED
  );

  // Add discovered refs until we hit target max
  const usedTitles = new Set(merged.map(r => r.originalTitle.toLowerCase()));

  for (const ref of discoveredRefs) {
    if (merged.length >= targetCount.max) break;

    // Check for duplicates
    const isDupe = merged.some(existing =>
      isSamePaper(
        { title: existing.originalTitle, authors: existing.originalAuthors, year: existing.originalYear },
        { title: ref.originalTitle, authors: ref.originalAuthors, year: ref.originalYear }
      )
    );

    if (!isDupe) {
      merged.push(ref);
      usedTitles.add(ref.originalTitle.toLowerCase());
    }
  }

  console.log(`[RefValidation] Merged: ${merged.length} references (${validatedRefs.length} LLM + ${merged.length - validatedRefs.filter(r => r.status !== ReferenceValidationStatus.REJECTED).length} discovered)`);

  return merged;
}

// ============================================================
// Phase 5: Generate Final BibTeX
// ============================================================

function generateFinalBibTeX(
  mergedRefs: ReferenceValidationResult[],
  originalParsed: ParsedBibTeXEntry[],
  report: ReferenceValidationReport
): string {
  console.log('[RefValidation] Phase 5: Generating final BibTeX');

  const lines: string[] = [];

  // Add validation report as comments
  lines.push('% === REFERENCE VALIDATION REPORT ===');
  lines.push(`% Timestamp: ${report.timestamp}`);
  lines.push(`% Total references: ${report.totalReferences}`);
  lines.push(`% Verified: ${report.verified} (${(report.verified / report.totalReferences * 100).toFixed(0)}%)`);
  lines.push(`% Partial: ${report.partial} (${(report.partial / report.totalReferences * 100).toFixed(0)}%)`);
  lines.push(`% Unverified: ${report.unverified} (${(report.unverified / report.totalReferences * 100).toFixed(0)}%)`);
  lines.push(`% Discovered: ${report.discovered} (${(report.discovered / report.totalReferences * 100).toFixed(0)}%)`);
  lines.push(`% Recency (${RECENCY_YEAR_MIN}-${RECENCY_YEAR_MAX}): ${(report.recencyScore * 100).toFixed(0)}%`);
  lines.push(`% Verification rate: ${(report.verificationRate * 100).toFixed(0)}%`);
  lines.push('% =====================================');
  lines.push('');

  // Generate BibTeX for each reference
  for (const ref of mergedRefs) {
    // Add status comment
    lines.push(`% Status: ${ref.status} | Source: ${ref.source}${ref.confidence < 1 ? ` | Confidence: ${(ref.confidence * 100).toFixed(0)}%` : ''}`);

    if (ref.discrepancies && ref.discrepancies.length > 0) {
      lines.push(`% Discrepancies: ${ref.discrepancies.join('; ')}`);
    }

    // Find original entry or generate from SS data
    const originalEntry = originalParsed.find(e => e.key === ref.bibKey);

    if (originalEntry && (ref.status === ReferenceValidationStatus.VERIFIED || ref.status === ReferenceValidationStatus.PARTIAL)) {
      // Use original entry with updated metadata from SS
      const updates: Partial<ParsedBibTeXEntry> = {};

      if (ref.ssMatch) {
        if (ref.ssMatch.doi) {
          updates.doi = ref.ssMatch.doi;
        }
        if (ref.ssMatch.url) {
          updates.url = ref.ssMatch.url;
        }
      }

      lines.push(generateBibTeXEntry(originalEntry, updates));
    } else if (ref.ssMatch) {
      // Generate new entry from SS data
      const entry: ParsedBibTeXEntry = {
        type: ref.ssMatch.venue?.includes('Conference') || ref.ssMatch.venue?.includes('Proceedings')
          ? 'inproceedings' : 'article',
        key: ref.bibKey,
        title: ref.ssMatch.title,
        authors: ref.ssMatch.authors?.map(a => a.name) || [],
        year: ref.ssMatch.year,
        journal: ref.ssMatch.journal?.name,
        booktitle: ref.ssMatch.venue,
        doi: ref.ssMatch.doi,
        url: ref.ssMatch.url,
        rawEntry: ''
      };

      lines.push(generateBibTeXEntry(entry));
    } else if (originalEntry) {
      // Use original entry as-is (UNVERIFIED)
      lines.push(generateBibTeXEntry(originalEntry));
    }

    lines.push('');
  }

  return lines.join('\n');
}

// ============================================================
// Main Orchestration Function
// ============================================================

/**
 * Validate and enrich references from LLM-generated BibTeX
 *
 * @param bibtexContent - Raw BibTeX content from LLM
 * @param interviewTranscript - Original interview text for keyword extraction
 * @param options - Configuration options
 * @returns Validated BibTeX content and report
 */
export async function validateAndEnrichReferences(
  bibtexContent: string,
  interviewTranscript: string,
  options?: {
    targetMin?: number;
    targetMax?: number;
    skipDiscovery?: boolean;
  }
): Promise<{ bibtex: string; report: ReferenceValidationReport }> {
  const targetMin = options?.targetMin || 15;
  const targetMax = options?.targetMax || 35;

  console.log('[RefValidation] Starting reference validation pipeline');

  // Parse the BibTeX
  const parsed = parseBibTeX(bibtexContent);

  if (parsed.errors.length > 0) {
    console.warn('[RefValidation] BibTeX parse errors:', parsed.errors);
  }

  if (parsed.entries.length === 0) {
    console.error('[RefValidation] No valid BibTeX entries found');
    return {
      bibtex: bibtexContent,
      report: {
        timestamp: new Date().toISOString(),
        totalReferences: 0,
        verified: 0,
        partial: 0,
        unverified: 0,
        rejected: 0,
        discovered: 0,
        recencyScore: 0,
        verificationRate: 0,
        hallucinationRate: 0,
        validatedReferences: [],
        discoveredReferences: [],
        errors: ['No valid BibTeX entries found']
      }
    };
  }

  console.log(`[RefValidation] Parsed ${parsed.entries.length} BibTeX entries`);

  // Phase 2: Validate against Semantic Scholar
  const validatedRefs = await validateLLMReferences(parsed.entries);

  // Phase 3: Discover additional papers (if enabled)
  let discoveredRefs: ReferenceValidationResult[] = [];
  if (!options?.skipDiscovery) {
    discoveredRefs = await discoverAdditionalPapers(interviewTranscript, validatedRefs);
  }

  // Phase 4: Merge and deduplicate
  const mergedRefs = mergeAndDeduplicate(
    validatedRefs,
    discoveredRefs,
    { min: targetMin, max: targetMax }
  );

  // Calculate metrics
  const verified = mergedRefs.filter(r => r.status === ReferenceValidationStatus.VERIFIED).length;
  const partial = mergedRefs.filter(r => r.status === ReferenceValidationStatus.PARTIAL).length;
  const unverified = mergedRefs.filter(r => r.status === ReferenceValidationStatus.UNVERIFIED).length;
  const rejected = validatedRefs.filter(r => r.status === ReferenceValidationStatus.REJECTED).length;
  const discovered = mergedRefs.filter(r => r.status === ReferenceValidationStatus.DISCOVERED).length;

  const recentCount = mergedRefs.filter(r =>
    r.originalYear && r.originalYear >= RECENCY_YEAR_MIN && r.originalYear <= RECENCY_YEAR_MAX
  ).length;

  const report: ReferenceValidationReport = {
    timestamp: new Date().toISOString(),
    totalReferences: mergedRefs.length,
    verified,
    partial,
    unverified,
    rejected,
    discovered,
    recencyScore: mergedRefs.length > 0 ? recentCount / mergedRefs.length : 0,
    verificationRate: mergedRefs.length > 0 ? (verified + partial) / mergedRefs.length : 0,
    hallucinationRate: validatedRefs.length > 0 ? rejected / validatedRefs.length : 0,
    validatedReferences: validatedRefs,
    discoveredReferences: discoveredRefs,
    errors: parsed.errors
  };

  // Phase 5: Generate final BibTeX
  const finalBibtex = generateFinalBibTeX(mergedRefs, parsed.entries, report);

  console.log(`[RefValidation] Complete: ${mergedRefs.length} refs, ${(report.verificationRate * 100).toFixed(0)}% verified, ${(report.recencyScore * 100).toFixed(0)}% recent`);

  return { bibtex: finalBibtex, report };
}

/**
 * Quick validation without discovery (for testing or fast mode)
 */
export async function quickValidateReferences(
  bibtexContent: string
): Promise<{ bibtex: string; report: ReferenceValidationReport }> {
  return validateAndEnrichReferences(bibtexContent, '', { skipDiscovery: true });
}
