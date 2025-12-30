/**
 * String Similarity Utilities for Reference Validation
 *
 * Provides fuzzy matching for titles and authors to validate
 * LLM-generated references against Semantic Scholar data.
 */

/**
 * Calculate Levenshtein distance between two strings
 */
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

/**
 * Normalize a string for comparison
 * - Lowercase
 * - Remove punctuation except hyphens
 * - Collapse whitespace
 * - Remove common articles
 */
export function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')  // Remove punctuation except hyphens
    .replace(/\s+/g, ' ')        // Collapse whitespace
    .replace(/\b(the|a|an|of|and|in|on|for|to|with)\b/g, '') // Remove articles
    .replace(/\s+/g, ' ')        // Collapse again after removing articles
    .trim();
}

/**
 * Calculate similarity ratio between two strings (0-1)
 * Uses Levenshtein distance normalized by max length
 */
export function stringSimilarity(str1: string, str2: string): number {
  const norm1 = normalizeString(str1);
  const norm2 = normalizeString(str2);

  if (norm1 === norm2) return 1.0;
  if (norm1.length === 0 || norm2.length === 0) return 0.0;

  const distance = levenshteinDistance(norm1, norm2);
  const maxLen = Math.max(norm1.length, norm2.length);

  return 1 - (distance / maxLen);
}

/**
 * Calculate title similarity with special handling for academic titles
 * - Handles subtitle variations (with/without colon)
 * - Handles case variations
 * - Handles punctuation differences
 */
export function titleSimilarity(title1: string, title2: string): number {
  // First try exact normalized match
  const norm1 = normalizeString(title1);
  const norm2 = normalizeString(title2);

  if (norm1 === norm2) return 1.0;

  // Try matching just the main title (before colon/dash)
  const main1 = norm1.split(/[:\-–—]/)[0].trim();
  const main2 = norm2.split(/[:\-–—]/)[0].trim();

  if (main1 === main2 && main1.length > 10) {
    return 0.95; // High similarity if main titles match
  }

  // Calculate general string similarity
  const baseSimilarity = stringSimilarity(title1, title2);

  // Boost if one contains the other (common with subtitle variations)
  if (norm1.includes(norm2) || norm2.includes(norm1)) {
    return Math.max(baseSimilarity, 0.85);
  }

  return baseSimilarity;
}

/**
 * Extract last name from author string
 * Handles formats: "Last, First", "First Last", "Last, F."
 */
export function extractLastName(author: string): string {
  const cleaned = author.trim();

  // Format: "Last, First" or "Last, F."
  if (cleaned.includes(',')) {
    return cleaned.split(',')[0].trim().toLowerCase();
  }

  // Format: "First Last" or "F. Last"
  const parts = cleaned.split(/\s+/);
  if (parts.length >= 2) {
    return parts[parts.length - 1].toLowerCase();
  }

  return cleaned.toLowerCase();
}

/**
 * Compare author lists for similarity
 * Returns similarity score (0-1) based on matching last names
 */
export function authorsSimilarity(authors1: string[], authors2: string[]): number {
  if (authors1.length === 0 || authors2.length === 0) return 0;

  const lastNames1 = authors1.map(extractLastName);
  const lastNames2 = authors2.map(extractLastName);

  // Check first author match (most important)
  const firstAuthorMatch = lastNames1[0] === lastNames2[0];

  // Count matching authors
  const matches = lastNames1.filter(name => lastNames2.includes(name)).length;
  const maxAuthors = Math.max(lastNames1.length, lastNames2.length);
  const matchRatio = matches / maxAuthors;

  // Weight first author more heavily
  if (firstAuthorMatch) {
    return 0.5 + (0.5 * matchRatio);
  }

  return matchRatio * 0.8; // Penalize if first author doesn't match
}

/**
 * Check if two references likely refer to the same paper
 */
export function isSamePaper(
  ref1: { title: string; authors?: string[]; year?: number; doi?: string },
  ref2: { title: string; authors?: string[]; year?: number; doi?: string }
): boolean {
  // Exact DOI match is definitive
  if (ref1.doi && ref2.doi) {
    const doi1 = ref1.doi.toLowerCase().replace(/^https?:\/\/doi\.org\//i, '');
    const doi2 = ref2.doi.toLowerCase().replace(/^https?:\/\/doi\.org\//i, '');
    if (doi1 === doi2) return true;
  }

  const titleSim = titleSimilarity(ref1.title, ref2.title);

  // Very high title similarity is strong evidence
  if (titleSim > 0.95) return true;

  // High title similarity + same year
  if (titleSim > 0.85 && ref1.year && ref2.year && ref1.year === ref2.year) {
    return true;
  }

  // Moderate title similarity + matching authors + same year
  if (titleSim > 0.75 && ref1.authors && ref2.authors && ref1.year && ref2.year) {
    const authorSim = authorsSimilarity(ref1.authors, ref2.authors);
    if (authorSim > 0.5 && Math.abs(ref1.year - ref2.year) <= 1) {
      return true;
    }
  }

  return false;
}

/**
 * Calculate overall match confidence for validation
 * Returns object with score and discrepancies
 */
export function calculateMatchConfidence(
  llmRef: { title: string; authors?: string[]; year?: number },
  ssRef: { title: string; authors?: string[]; year?: number }
): { confidence: number; discrepancies: string[] } {
  const discrepancies: string[] = [];
  let score = 0;

  // Title match (50% weight)
  const titleSim = titleSimilarity(llmRef.title, ssRef.title);
  score += titleSim * 0.5;

  if (titleSim < 0.9) {
    discrepancies.push(`Title similarity: ${(titleSim * 100).toFixed(0)}%`);
  }

  // Author match (30% weight)
  if (llmRef.authors && ssRef.authors && llmRef.authors.length > 0 && ssRef.authors.length > 0) {
    const authorSim = authorsSimilarity(llmRef.authors, ssRef.authors);
    score += authorSim * 0.3;

    if (authorSim < 0.8) {
      discrepancies.push(`Author mismatch`);
    }
  } else {
    score += 0.15; // Neutral if authors not available
  }

  // Year match (20% weight)
  if (llmRef.year && ssRef.year) {
    if (llmRef.year === ssRef.year) {
      score += 0.2;
    } else if (Math.abs(llmRef.year - ssRef.year) === 1) {
      score += 0.15;
      discrepancies.push(`Year: ${llmRef.year} vs ${ssRef.year}`);
    } else {
      discrepancies.push(`Year mismatch: ${llmRef.year} vs ${ssRef.year}`);
    }
  } else {
    score += 0.1; // Neutral if year not available
  }

  return { confidence: score, discrepancies };
}
