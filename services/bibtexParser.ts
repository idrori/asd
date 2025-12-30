/**
 * BibTeX Parser for Reference Validation
 *
 * Parses BibTeX strings into structured objects for validation
 * against Semantic Scholar.
 */

export interface ParsedBibTeXEntry {
  type: 'article' | 'inproceedings' | 'book' | 'incollection' | 'misc' | 'phdthesis' | 'techreport';
  key: string;           // Citation key (e.g., "davis1989perceived")
  title: string;
  authors: string[];     // Parsed author list
  year?: number;
  journal?: string;      // For @article
  booktitle?: string;    // For @inproceedings
  publisher?: string;    // For @book
  volume?: string;
  number?: string;
  pages?: string;
  doi?: string;
  url?: string;
  relevanceComment?: string;  // Extracted from % Relevance: comment
  rawEntry: string;      // Original BibTeX string
}

export interface ParsedBibTeX {
  entries: ParsedBibTeXEntry[];
  errors: string[];
  rawContent: string;
}

/**
 * Parse author string into array of individual authors
 * Handles: "Last, First and Last2, First2" or "First Last and First2 Last2"
 */
function parseAuthors(authorString: string): string[] {
  if (!authorString) return [];

  // Split by " and " (case insensitive)
  const authors = authorString
    .split(/\s+and\s+/i)
    .map(a => a.trim())
    .filter(a => a.length > 0);

  return authors;
}

/**
 * Extract field value from BibTeX entry
 * Handles: field = {value}, field = "value", field = value
 */
function extractField(entry: string, fieldName: string): string | undefined {
  // Pattern: fieldname = {value} or fieldname = "value" or fieldname = value
  const patterns = [
    new RegExp(`${fieldName}\\s*=\\s*\\{([^}]*)\\}`, 'i'),
    new RegExp(`${fieldName}\\s*=\\s*"([^"]*)"`, 'i'),
    new RegExp(`${fieldName}\\s*=\\s*(\\d+)`, 'i'),  // For bare numbers like year = 2023
  ];

  for (const pattern of patterns) {
    const match = entry.match(pattern);
    if (match) {
      return match[1].trim();
    }
  }

  return undefined;
}

/**
 * Extract relevance comment from preceding line
 * Looks for: % Relevance: Some explanation
 */
function extractRelevanceComment(precedingText: string): string | undefined {
  const match = precedingText.match(/%\s*Relevance:\s*(.+?)(?:\n|$)/i);
  return match ? match[1].trim() : undefined;
}

/**
 * Parse a single BibTeX entry
 */
function parseSingleEntry(entryText: string, precedingText: string = ''): ParsedBibTeXEntry | null {
  // Match entry type and key: @article{davis1989perceived,
  const headerMatch = entryText.match(/@(\w+)\s*\{\s*([^,\s]+)\s*,/i);
  if (!headerMatch) return null;

  const type = headerMatch[1].toLowerCase() as ParsedBibTeXEntry['type'];
  const key = headerMatch[2];

  // Extract fields
  const title = extractField(entryText, 'title') || '';
  const authorStr = extractField(entryText, 'author') || '';
  const yearStr = extractField(entryText, 'year');
  const journal = extractField(entryText, 'journal');
  const booktitle = extractField(entryText, 'booktitle');
  const publisher = extractField(entryText, 'publisher');
  const volume = extractField(entryText, 'volume');
  const number = extractField(entryText, 'number');
  const pages = extractField(entryText, 'pages');
  const doi = extractField(entryText, 'doi');
  const url = extractField(entryText, 'url');

  // Parse year
  const year = yearStr ? parseInt(yearStr, 10) : undefined;

  // Parse authors
  const authors = parseAuthors(authorStr);

  // Extract relevance comment
  const relevanceComment = extractRelevanceComment(precedingText);

  // Clean title (remove LaTeX formatting)
  const cleanTitle = title
    .replace(/\{([^}]*)\}/g, '$1')  // Remove braces around proper nouns
    .replace(/\\&/g, '&')           // Unescape ampersand
    .replace(/\\/g, '')             // Remove other escapes
    .trim();

  return {
    type,
    key,
    title: cleanTitle,
    authors,
    year: isNaN(year!) ? undefined : year,
    journal,
    booktitle,
    publisher,
    volume,
    number,
    pages,
    doi,
    url,
    relevanceComment,
    rawEntry: entryText.trim()
  };
}

/**
 * Parse complete BibTeX content into structured entries
 */
export function parseBibTeX(bibtexContent: string): ParsedBibTeX {
  const entries: ParsedBibTeXEntry[] = [];
  const errors: string[] = [];

  // Split into individual entries, preserving preceding comments
  // Match @type{key, ... } with proper brace counting
  const entryRegex = /@(\w+)\s*\{/gi;
  let match;
  const entryStarts: number[] = [];

  while ((match = entryRegex.exec(bibtexContent)) !== null) {
    entryStarts.push(match.index);
  }

  for (let i = 0; i < entryStarts.length; i++) {
    const startIdx = entryStarts[i];
    const endIdx = i < entryStarts.length - 1 ? entryStarts[i + 1] : bibtexContent.length;

    // Get the entry text (need to find matching closing brace)
    let braceCount = 0;
    let entryEnd = startIdx;
    let foundOpen = false;

    for (let j = startIdx; j < bibtexContent.length; j++) {
      const char = bibtexContent[j];
      if (char === '{') {
        braceCount++;
        foundOpen = true;
      } else if (char === '}') {
        braceCount--;
        if (foundOpen && braceCount === 0) {
          entryEnd = j + 1;
          break;
        }
      }
    }

    const entryText = bibtexContent.substring(startIdx, entryEnd);

    // Get preceding text for relevance comment
    const precedingStart = i > 0 ? entryStarts[i - 1] : 0;
    const precedingText = bibtexContent.substring(
      Math.max(0, startIdx - 200),
      startIdx
    );

    try {
      const entry = parseSingleEntry(entryText, precedingText);
      if (entry) {
        if (!entry.title) {
          errors.push(`Entry "${entry.key}" has no title`);
        } else {
          entries.push(entry);
        }
      }
    } catch (e) {
      errors.push(`Failed to parse entry at position ${startIdx}: ${e}`);
    }
  }

  return {
    entries,
    errors,
    rawContent: bibtexContent
  };
}

/**
 * Generate BibTeX string from a parsed entry (with optional updates)
 */
export function generateBibTeXEntry(entry: ParsedBibTeXEntry, updates?: Partial<ParsedBibTeXEntry>): string {
  const merged = { ...entry, ...updates };

  const lines: string[] = [];

  // Header
  lines.push(`@${merged.type}{${merged.key},`);

  // Author
  if (merged.authors && merged.authors.length > 0) {
    lines.push(`  author = {${merged.authors.join(' and ')}},`);
  }

  // Title
  lines.push(`  title = {${merged.title}},`);

  // Venue (journal or booktitle)
  if (merged.journal) {
    lines.push(`  journal = {${merged.journal}},`);
  }
  if (merged.booktitle) {
    lines.push(`  booktitle = {${merged.booktitle}},`);
  }
  if (merged.publisher) {
    lines.push(`  publisher = {${merged.publisher}},`);
  }

  // Year
  if (merged.year) {
    lines.push(`  year = {${merged.year}},`);
  }

  // Optional fields
  if (merged.volume) {
    lines.push(`  volume = {${merged.volume}},`);
  }
  if (merged.number) {
    lines.push(`  number = {${merged.number}},`);
  }
  if (merged.pages) {
    lines.push(`  pages = {${merged.pages}},`);
  }
  if (merged.doi) {
    lines.push(`  doi = {${merged.doi}},`);
  }
  if (merged.url) {
    lines.push(`  url = {${merged.url}},`);
  }

  // Remove trailing comma from last field
  const lastLine = lines[lines.length - 1];
  lines[lines.length - 1] = lastLine.replace(/,$/, '');

  lines.push('}');

  return lines.join('\n');
}

/**
 * Generate citation key from title and year
 * Format: firstauthorYYYYfirstword
 */
export function generateCitationKey(
  firstAuthor: string,
  year: number | undefined,
  title: string
): string {
  const lastName = firstAuthor
    .split(/[,\s]+/)[0]
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  const yearStr = year ? year.toString() : 'nd';

  const firstWord = title
    .toLowerCase()
    .replace(/^(the|a|an)\s+/i, '')
    .split(/\s+/)[0]
    .replace(/[^a-z]/g, '');

  return `${lastName}${yearStr}${firstWord}`;
}

/**
 * Validate BibTeX syntax without full parsing
 * Returns list of syntax issues
 */
export function validateBibTeXSyntax(bibtexContent: string): string[] {
  const issues: string[] = [];

  // Check brace balance
  let braceCount = 0;
  for (const char of bibtexContent) {
    if (char === '{') braceCount++;
    if (char === '}') braceCount--;
    if (braceCount < 0) {
      issues.push('Unmatched closing brace found');
      break;
    }
  }
  if (braceCount > 0) {
    issues.push(`Missing ${braceCount} closing brace(s)`);
  }

  // Check for common issues
  if (bibtexContent.includes('\\cite{')) {
    issues.push('Contains \\cite{} command instead of reference entry');
  }

  if (bibtexContent.includes('[To be')) {
    issues.push('Contains placeholder text "[To be...]"');
  }

  return issues;
}
