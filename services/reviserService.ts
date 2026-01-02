/**
 * ICISreviser Service
 *
 * Handles the paper revision stage based on ICISreviser.txt
 *
 * Responsibilities:
 * - Preserve previous version content (GOLDEN RULE)
 * - Analyze constructive feedback
 * - Plan revision strategy
 * - Track content preservation
 * - Manage paper versions
 */

import { PaperVersion } from '../types';

export interface RevisionPlan {
  contentAdditions: string[];
  contentImprovements: string[];
  preservationCommitments: string[];
  feedbackAddressed: FeedbackItem[];
}

export interface FeedbackItem {
  type: 'major' | 'minor' | 'suggestion';
  description: string;
  status: 'pending' | 'addressed' | 'declined';
  response?: string;
}

export interface ContentInventory {
  tableCount: number;
  figureCount: number;
  sectionCount: number;
  pageCount: number;
  tables: string[];
  figures: string[];
  sections: string[];
}

export interface PreservationCheck {
  passed: boolean;
  previousInventory: ContentInventory;
  currentInventory: ContentInventory;
  issues: string[];
}

/**
 * Parse LaTeX file to create content inventory
 */
export function createContentInventory(latexContent: string): ContentInventory {
  const tables: string[] = [];
  const figures: string[] = [];
  const sections: string[] = [];

  // Find table labels
  const tableMatches = latexContent.matchAll(/\\label\{tab:([^}]+)\}/g);
  for (const match of tableMatches) {
    tables.push(match[1]);
  }

  // Find figure labels
  const figureMatches = latexContent.matchAll(/\\label\{fig:([^}]+)\}/g);
  for (const match of figureMatches) {
    figures.push(match[1]);
  }

  // Find sections
  const sectionMatches = latexContent.matchAll(/\\section\{([^}]+)\}/g);
  for (const match of sectionMatches) {
    sections.push(match[1]);
  }

  // Estimate page count (rough: ~3000 chars per page)
  const cleanContent = latexContent.replace(/%.*/g, '').replace(/\\[a-zA-Z]+/g, '');
  const pageCount = Math.ceil(cleanContent.length / 3000);

  return {
    tableCount: tables.length,
    figureCount: figures.length,
    sectionCount: sections.length,
    pageCount,
    tables,
    figures,
    sections
  };
}

/**
 * Compare inventories to verify preservation
 */
export function verifyPreservation(
  previous: ContentInventory,
  current: ContentInventory
): PreservationCheck {
  const issues: string[] = [];

  // Check tables preserved
  for (const table of previous.tables) {
    if (!current.tables.includes(table)) {
      issues.push(`Table '${table}' was removed`);
    }
  }

  // Check figures preserved
  for (const figure of previous.figures) {
    if (!current.figures.includes(figure)) {
      issues.push(`Figure '${figure}' was removed`);
    }
  }

  // Check sections preserved
  for (const section of previous.sections) {
    if (!current.sections.includes(section)) {
      issues.push(`Section '${section}' was removed or renamed`);
    }
  }

  // Check page count didn't decrease significantly
  if (current.pageCount < previous.pageCount - 1) {
    issues.push(`Page count decreased from ${previous.pageCount} to ${current.pageCount}`);
  }

  return {
    passed: issues.length === 0,
    previousInventory: previous,
    currentInventory: current,
    issues
  };
}

/**
 * Extract figure paths from LaTeX
 */
export function extractFigurePaths(latexContent: string): string[] {
  const paths: string[] = [];
  const matches = latexContent.matchAll(/\\includegraphics(?:\[[^\]]*\])?\{([^}]+)\}/g);

  for (const match of matches) {
    paths.push(match[1]);
  }

  return paths;
}

/**
 * Analyze feedback and categorize into actionable items
 */
export function analyzeFeedback(feedbackContent: string): FeedbackItem[] {
  const items: FeedbackItem[] = [];

  // Look for major/critical issues
  const majorPatterns = [
    /major (?:concern|issue|problem)[:.]?\s*([^.]+)/gi,
    /critical(?:ly)?[:.]?\s*([^.]+)/gi,
    /must (?:be )?(?:address|fix|revise)(?:ed)?[:.]?\s*([^.]+)/gi,
  ];

  for (const pattern of majorPatterns) {
    const matches = feedbackContent.matchAll(pattern);
    for (const match of matches) {
      items.push({
        type: 'major',
        description: match[1].trim(),
        status: 'pending'
      });
    }
  }

  // Look for minor issues
  const minorPatterns = [
    /minor (?:concern|issue|correction)[:.]?\s*([^.]+)/gi,
    /typo[:.]?\s*([^.]+)/gi,
    /formatting[:.]?\s*([^.]+)/gi,
  ];

  for (const pattern of minorPatterns) {
    const matches = feedbackContent.matchAll(pattern);
    for (const match of matches) {
      items.push({
        type: 'minor',
        description: match[1].trim(),
        status: 'pending'
      });
    }
  }

  // Look for suggestions
  const suggestionPatterns = [
    /suggest(?:ion)?[:.]?\s*([^.]+)/gi,
    /consider[:.]?\s*([^.]+)/gi,
    /could (?:also )?(?:include|add)[:.]?\s*([^.]+)/gi,
  ];

  for (const pattern of suggestionPatterns) {
    const matches = feedbackContent.matchAll(pattern);
    for (const match of matches) {
      items.push({
        type: 'suggestion',
        description: match[1].trim(),
        status: 'pending'
      });
    }
  }

  return items;
}

/**
 * Create revision plan from feedback
 */
export function createRevisionPlan(
  feedbackItems: FeedbackItem[],
  previousInventory: ContentInventory
): RevisionPlan {
  const plan: RevisionPlan = {
    contentAdditions: [],
    contentImprovements: [],
    preservationCommitments: [],
    feedbackAddressed: feedbackItems
  };

  // Preservation commitments
  plan.preservationCommitments.push(`Preserve all ${previousInventory.tableCount} existing tables`);
  plan.preservationCommitments.push(`Preserve all ${previousInventory.figureCount} existing figures`);
  plan.preservationCommitments.push(`Maintain all ${previousInventory.sectionCount} existing sections`);
  plan.preservationCommitments.push('Use Edit tool exclusively (never Write tool)');

  // Categorize feedback into additions vs improvements
  for (const item of feedbackItems) {
    if (item.description.toLowerCase().includes('add') ||
        item.description.toLowerCase().includes('include') ||
        item.description.toLowerCase().includes('missing')) {
      plan.contentAdditions.push(item.description);
    } else {
      plan.contentImprovements.push(item.description);
    }
  }

  return plan;
}

/**
 * Generate new paper version filename
 */
export function generateVersionFilename(currentVersion: number): string {
  const newVersion = currentVersion + 1;
  return `icis_paper_v${newVersion}.tex`;
}

/**
 * Create paper version record
 */
export function createPaperVersion(
  version: number,
  filePath: string,
  inventory: ContentInventory
): PaperVersion {
  return {
    version,
    filePath,
    timestamp: new Date(),
    pageCount: inventory.pageCount,
    figureCount: inventory.figureCount,
    tableCount: inventory.tableCount
  };
}

/**
 * Format revision log message
 */
export function formatRevisionLog(
  step: string,
  status: 'starting' | 'completed' | 'error',
  details?: string
): string {
  const prefix = `ICISreviser [${step}]`;

  switch (status) {
    case 'starting':
      return `${prefix}: Starting...`;
    case 'completed':
      return `${prefix}: Completed.${details ? ` ${details}` : ''}`;
    case 'error':
      return `${prefix}: ERROR${details ? ` - ${details}` : ''}`;
    default:
      return `${prefix}: ${details || ''}`;
  }
}

/**
 * Check if revision addressed feedback adequately
 */
export function checkFeedbackAddressed(
  plan: RevisionPlan,
  _currentInventory: ContentInventory
): { addressed: number; total: number; percentage: number } {
  // currentInventory reserved for future content verification
  const total = plan.feedbackAddressed.length;
  const addressed = plan.feedbackAddressed.filter(f => f.status === 'addressed').length;

  return {
    addressed,
    total,
    percentage: total > 0 ? Math.round((addressed / total) * 100) : 100
  };
}

/**
 * Get revision summary for supervisor
 */
export function getRevisionSummary(
  previousVersion: PaperVersion,
  currentVersion: PaperVersion,
  plan: RevisionPlan
): string {
  const lines: string[] = [];

  lines.push('## Revision Summary');
  lines.push('');
  lines.push(`Version: v${previousVersion.version} → v${currentVersion.version}`);
  lines.push('');

  lines.push('### Content Changes');
  lines.push(`- Tables: ${previousVersion.tableCount} → ${currentVersion.tableCount}`);
  lines.push(`- Figures: ${previousVersion.figureCount} → ${currentVersion.figureCount}`);
  lines.push(`- Pages: ${previousVersion.pageCount} → ${currentVersion.pageCount}`);
  lines.push('');

  lines.push('### Feedback Addressed');
  const majorAddressed = plan.feedbackAddressed.filter(f => f.type === 'major' && f.status === 'addressed').length;
  const minorAddressed = plan.feedbackAddressed.filter(f => f.type === 'minor' && f.status === 'addressed').length;
  lines.push(`- Major issues: ${majorAddressed} addressed`);
  lines.push(`- Minor issues: ${minorAddressed} addressed`);
  lines.push('');

  lines.push('### Preservation Verified');
  plan.preservationCommitments.forEach(c => {
    lines.push(`- ${c}`);
  });

  return lines.join('\n');
}

// ============================================================================
// STEP 0 & 8: Verification Functions
// From ICISreviser.txt - reusing patterns from builderService
// ============================================================================

export interface VerificationChecklist {
  previousVersionRead: boolean;
  editToolUsed: boolean;  // never Write tool
  figuresPreserved: boolean;
  tablesPreserved: boolean;
  resultsPreserved: boolean;
  newContentAdded: boolean;
  pageCountValid: boolean;
  bulletPointsLimited: boolean;
  paragraphLengthValid: boolean;
  noSubsubsection: boolean;
  narrativeFlowSmooth: boolean;
  figuresCompile: boolean;
}

/**
 * Verify figure rendering based on compilation output
 * From ICISreviser.txt Step 0 Check 2 and Step 8 Check 2
 */
export function verifyFigureRendering(
  compilationOutput: string,
  expectedFigures: string[]
): { valid: boolean; errors: string[]; foundFigures: string[] } {
  const errors: string[] = [];
  const foundFigures: string[] = [];

  // Check for "File not found" errors
  if (/File [`']([^'`]+)['`] not found/i.test(compilationOutput)) {
    const matches = compilationOutput.match(/File [`']([^'`]+)['`] not found/gi) || [];
    matches.forEach(match => {
      errors.push(`Figure file not found: ${match}`);
    });
  }

  // Check for successful figure inclusions: [page <path>]
  const inclusionRegex = /\[\d+\s*<([^>]+)>\]/g;
  let match;
  while ((match = inclusionRegex.exec(compilationOutput)) !== null) {
    foundFigures.push(match[1]);
  }

  // Check if all expected figures were found
  expectedFigures.forEach(expected => {
    const found = foundFigures.some(f =>
      f.includes(expected) || expected.includes(f.replace(/\.\w+$/, ''))
    );
    if (!found) {
      errors.push(`Expected figure not confirmed in output: ${expected}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    foundFigures
  };
}

/**
 * Verify PDF file size indicates images are embedded
 * From ICISreviser.txt Step 0 Check 3 and Step 8 Check 2
 *
 * Thresholds (from prompt lines 89-94):
 * - WITHOUT images: 250-350 KB
 * - WITH images: 450-600 KB
 * - If <350 KB with 2+ figures: Images NOT embedded
 */
export function verifyPDFFileSize(
  fileSizeBytes: number,
  expectedFigureCount: number
): { valid: boolean; warning: string | null; fileSizeKB: number } {
  const fileSizeKB = Math.round(fileSizeBytes / 1024);
  let warning: string | null = null;

  if (expectedFigureCount >= 2 && fileSizeKB < 350) {
    return {
      valid: false,
      warning: `PDF is ${fileSizeKB}KB with ${expectedFigureCount} figures - images likely NOT embedded. Expected >450KB.`,
      fileSizeKB
    };
  }

  if (expectedFigureCount >= 2 && fileSizeKB < 450) {
    warning = `PDF is ${fileSizeKB}KB - may be missing some images. Expected 450-600KB with figures.`;
  }

  return {
    valid: fileSizeKB >= 350 || expectedFigureCount < 2,
    warning,
    fileSizeKB
  };
}

/**
 * Compare figure counts between versions
 * From ICISreviser.txt Step 8 Check 1
 */
export function compareFigureCounts(
  previous: ContentInventory,
  current: ContentInventory
): { preserved: boolean; message: string } {
  if (current.figureCount < previous.figureCount) {
    return {
      preserved: false,
      message: `Figure count DECREASED: ${previous.figureCount} → ${current.figureCount}. Revision should ADD, not remove.`
    };
  }

  if (current.figureCount > previous.figureCount) {
    return {
      preserved: true,
      message: `Figure count INCREASED: ${previous.figureCount} → ${current.figureCount}. New figures added.`
    };
  }

  return {
    preserved: true,
    message: `Figure count PRESERVED: ${current.figureCount} figures.`
  };
}

/**
 * Compare table counts between versions
 * From ICISreviser.txt Step 8 Check 1
 */
export function compareTableCounts(
  previous: ContentInventory,
  current: ContentInventory
): { preserved: boolean; message: string } {
  if (current.tableCount < previous.tableCount) {
    return {
      preserved: false,
      message: `Table count DECREASED: ${previous.tableCount} → ${current.tableCount}. Revision should ADD, not remove.`
    };
  }

  if (current.tableCount > previous.tableCount) {
    return {
      preserved: true,
      message: `Table count INCREASED: ${previous.tableCount} → ${current.tableCount}. New tables added.`
    };
  }

  return {
    preserved: true,
    message: `Table count PRESERVED: ${current.tableCount} tables.`
  };
}

/**
 * Generate comprehensive verification report
 * From ICISreviser.txt Step 8 verification
 */
export function generateVerificationReport(
  previous: ContentInventory,
  current: ContentInventory,
  plan: RevisionPlan,
  pdfSizeBytes?: number
): {
  passed: boolean;
  report: string;
  issues: string[];
} {
  const issues: string[] = [];
  const lines: string[] = [];

  lines.push('## Revision Verification Report');
  lines.push('');

  // Check 1 - Content Preservation
  lines.push('### Check 1: Content Preservation');
  const figureCheck = compareFigureCounts(previous, current);
  const tableCheck = compareTableCounts(previous, current);

  lines.push(`- Figures: ${previous.figureCount} → ${current.figureCount} ${figureCheck.preserved ? '✓' : '✗'}`);
  lines.push(`- Tables: ${previous.tableCount} → ${current.tableCount} ${tableCheck.preserved ? '✓' : '✗'}`);
  lines.push(`- Pages: ${previous.pageCount} → ${current.pageCount}`);

  if (!figureCheck.preserved) issues.push(figureCheck.message);
  if (!tableCheck.preserved) issues.push(tableCheck.message);

  // Check 2 - PDF Size (if provided)
  if (pdfSizeBytes !== undefined) {
    lines.push('');
    lines.push('### Check 2: PDF File Size');
    const sizeCheck = verifyPDFFileSize(pdfSizeBytes, current.figureCount);
    lines.push(`- Size: ${sizeCheck.fileSizeKB}KB ${sizeCheck.valid ? '✓' : '✗'}`);
    if (sizeCheck.warning) {
      lines.push(`- Warning: ${sizeCheck.warning}`);
      if (!sizeCheck.valid) issues.push(sizeCheck.warning);
    }
  }

  // Check 3 - Feedback Addressed
  lines.push('');
  lines.push('### Check 3: Feedback Addressed');
  const feedbackStatus = checkFeedbackAddressed(plan, current);
  lines.push(`- Addressed: ${feedbackStatus.addressed}/${feedbackStatus.total} (${feedbackStatus.percentage}%)`);

  const majorPending = plan.feedbackAddressed.filter(f => f.type === 'major' && f.status === 'pending');
  if (majorPending.length > 0) {
    issues.push(`${majorPending.length} major issues still pending`);
    lines.push(`- ⚠️ ${majorPending.length} major issues still pending`);
  }

  // Summary
  lines.push('');
  lines.push('### Summary');
  lines.push(issues.length === 0 ? '✓ All checks passed' : `✗ ${issues.length} issue(s) found`);

  return {
    passed: issues.length === 0,
    report: lines.join('\n'),
    issues
  };
}

// ============================================================================
// Section Content Validation for Reviser
// Ensures revisions don't remove required sections or reduce content
// ============================================================================

/**
 * Section requirements - imported logic from builderService
 * These match the requirements defined in ICISbuilder.txt STEP 8.4
 */
export interface SectionRequirements {
  required: boolean;
  minWords: number;
  minParagraphs: number;
  minFigures?: number;
  minTables?: number;
  minReferences?: number;
  requiresHypotheses?: boolean;
  description: string;
}

/**
 * Default section requirements for revision validation
 */
export const SECTION_REQUIREMENTS: Record<string, SectionRequirements> = {
  introduction: {
    required: true,
    minWords: 500,
    minParagraphs: 3,
    description: 'Problem statement, research gap, contributions, paper structure'
  },
  literatureReview: {
    required: true,
    minWords: 800,
    minParagraphs: 5,
    minReferences: 15,
    description: 'Prior work organized by themes, research gap identification'
  },
  theoreticalFramework: {
    required: true,
    minWords: 600,
    minParagraphs: 4,
    requiresHypotheses: true,
    description: 'Theory basis, constructs, hypotheses with theoretical justification'
  },
  methodology: {
    required: true,
    minWords: 600,
    minParagraphs: 4,
    description: 'Research design, data collection, measures, analysis approach'
  },
  results: {
    required: true,
    minWords: 500,
    minParagraphs: 3,
    minFigures: 2,
    minTables: 1,
    description: 'Findings with figures/tables, statistical results, hypothesis outcomes'
  },
  discussion: {
    required: true,
    minWords: 400,
    minParagraphs: 3,
    description: 'Interpretation, theoretical implications, practical implications, limitations'
  },
  conclusion: {
    required: true,
    minWords: 200,
    minParagraphs: 2,
    description: 'Summary, contributions, future research directions'
  }
};

/**
 * Section name variations
 */
const SECTION_VARIANTS: Record<string, string[]> = {
  introduction: ['Introduction'],
  literatureReview: ['Literature Review', 'Related Work', 'Background', 'Prior Work'],
  theoreticalFramework: ['Theoretical Framework', 'Theory', 'Theoretical Background', 'Conceptual Framework'],
  methodology: ['Methodology', 'Method', 'Methods', 'Research Design', 'Research Method'],
  results: ['Results', 'Findings', 'Analysis', 'Empirical Results'],
  discussion: ['Discussion', 'Discussion and Implications'],
  conclusion: ['Conclusion', 'Conclusions', 'Concluding Remarks']
};

/**
 * Result of section validation
 */
export interface SectionValidationResult {
  sectionKey: string;
  found: boolean;
  wordCount: number;
  figureCount: number;
  tableCount: number;
  meetsRequirements: boolean;
  errors: string[];
}

/**
 * Extract section content from LaTeX
 */
export function extractSectionContent(latexContent: string, sectionVariants: string[]): {
  found: boolean;
  content: string;
} {
  for (const variant of sectionVariants) {
    const escapedVariant = variant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const sectionRegex = new RegExp(
      `\\\\section\\*?\\{${escapedVariant}\\}([\\s\\S]*?)(?=\\\\section\\{|\\\\section\\*\\{|\\\\end\\{document\\}|$)`,
      'i'
    );
    const match = latexContent.match(sectionRegex);
    if (match) {
      return { found: true, content: match[1] || '' };
    }
  }
  return { found: false, content: '' };
}

/**
 * Count words in LaTeX content
 */
export function countWordsInLatex(latexContent: string): number {
  const cleanContent = latexContent
    .replace(/\\[a-zA-Z]+\{[^}]*\}/g, ' ')
    .replace(/\\[a-zA-Z]+\[[^\]]*\]/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/\{|\}/g, ' ')
    .replace(/%.*$/gm, '')
    .replace(/\$[^$]*\$/g, ' ')
    .replace(/\\\[[\s\S]*?\\\]/g, ' ')
    .replace(/\\begin\{.*?\}[\s\S]*?\\end\{.*?\}/g, ' ');

  const words = cleanContent.trim().split(/\s+/).filter(w => w.length > 0);
  return words.length;
}

/**
 * Count figures in section
 */
export function countFiguresInSection(content: string): number {
  const matches = content.match(/\\includegraphics/g);
  return matches ? matches.length : 0;
}

/**
 * Count tables in section
 */
export function countTablesInSection(content: string): number {
  const matches = content.match(/\\begin\{table\}/g);
  return matches ? matches.length : 0;
}

/**
 * Check if section has hypotheses
 */
export function hasHypotheses(content: string): boolean {
  const patterns = [/\bH\d+[a-z]?\b/, /\bHypothesis\s+\d+/i];
  return patterns.some(p => p.test(content));
}

/**
 * Validate a single section
 */
export function validateSectionContent(
  latexContent: string,
  sectionKey: string,
  requirements: SectionRequirements
): SectionValidationResult {
  const variants = SECTION_VARIANTS[sectionKey] || [sectionKey];
  const { found, content } = extractSectionContent(latexContent, variants);
  const errors: string[] = [];

  if (!found) {
    if (requirements.required) {
      errors.push(`Required section "${sectionKey}" not found`);
    }
    return {
      sectionKey,
      found: false,
      wordCount: 0,
      figureCount: 0,
      tableCount: 0,
      meetsRequirements: false,
      errors
    };
  }

  const wordCount = countWordsInLatex(content);
  const figureCount = countFiguresInSection(content);
  const tableCount = countTablesInSection(content);

  if (wordCount < requirements.minWords) {
    errors.push(`Section "${sectionKey}" has ${wordCount} words, minimum is ${requirements.minWords}`);
  }

  if (requirements.minFigures && figureCount < requirements.minFigures) {
    errors.push(`Section "${sectionKey}" has ${figureCount} figures, minimum is ${requirements.minFigures}`);
  }

  if (requirements.minTables && tableCount < requirements.minTables) {
    errors.push(`Section "${sectionKey}" has ${tableCount} tables, minimum is ${requirements.minTables}`);
  }

  if (requirements.requiresHypotheses && !hasHypotheses(content)) {
    errors.push(`Section "${sectionKey}" should contain explicit hypotheses (H1, H2, etc.)`);
  }

  return {
    sectionKey,
    found: true,
    wordCount,
    figureCount,
    tableCount,
    meetsRequirements: errors.length === 0,
    errors
  };
}

/**
 * Validate all sections in revised paper
 * From ICISreviser.txt - ensures revisions maintain required content
 */
export function validateAllSections(
  latexContent: string,
  requirements: Record<string, SectionRequirements> = SECTION_REQUIREMENTS
): {
  valid: boolean;
  sections: SectionValidationResult[];
  missingSections: string[];
  errors: string[];
} {
  const sections: SectionValidationResult[] = [];
  const missingSections: string[] = [];
  const allErrors: string[] = [];

  for (const [key, reqs] of Object.entries(requirements)) {
    const result = validateSectionContent(latexContent, key, reqs);
    sections.push(result);

    if (!result.found && reqs.required) {
      missingSections.push(key);
    }

    allErrors.push(...result.errors);
  }

  return {
    valid: allErrors.length === 0,
    sections,
    missingSections,
    errors: allErrors
  };
}

/**
 * Compare sections between versions to ensure no content loss
 */
export function compareSectionContent(
  previousLatex: string,
  currentLatex: string
): {
  passed: boolean;
  issues: string[];
  improvements: string[];
} {
  const issues: string[] = [];
  const improvements: string[] = [];

  for (const [key, variants] of Object.entries(SECTION_VARIANTS)) {
    const prevSection = extractSectionContent(previousLatex, variants);
    const currSection = extractSectionContent(currentLatex, variants);

    if (prevSection.found && !currSection.found) {
      issues.push(`Section "${key}" was removed during revision`);
      continue;
    }

    if (prevSection.found && currSection.found) {
      const prevWords = countWordsInLatex(prevSection.content);
      const currWords = countWordsInLatex(currSection.content);

      // Content loss check (more than 20% reduction is concerning)
      if (currWords < prevWords * 0.8) {
        issues.push(`Section "${key}" lost significant content: ${prevWords} -> ${currWords} words`);
      } else if (currWords > prevWords) {
        improvements.push(`Section "${key}" expanded: ${prevWords} -> ${currWords} words`);
      }

      // Figure loss check for Results section
      if (key === 'results') {
        const prevFigs = countFiguresInSection(prevSection.content);
        const currFigs = countFiguresInSection(currSection.content);
        if (currFigs < prevFigs) {
          issues.push(`Results section lost figures: ${prevFigs} -> ${currFigs}`);
        }

        const prevTables = countTablesInSection(prevSection.content);
        const currTables = countTablesInSection(currSection.content);
        if (currTables < prevTables) {
          issues.push(`Results section lost tables: ${prevTables} -> ${currTables}`);
        }
      }
    }
  }

  return {
    passed: issues.length === 0,
    issues,
    improvements
  };
}

/**
 * Generate section validation report for revision
 */
export function formatRevisionSectionReport(
  validationResult: ReturnType<typeof validateAllSections>,
  comparisonResult?: ReturnType<typeof compareSectionContent>
): string {
  const lines: string[] = [];

  lines.push('================================================================================');
  lines.push('              SECTION CONTENT VALIDATION (REVISION)');
  lines.push('================================================================================');
  lines.push('');

  lines.push(`STATUS: ${validationResult.valid ? 'PASS' : 'FAIL'}`);
  lines.push('');

  // Section table
  lines.push('SECTION STATUS:');
  lines.push('--------------------------------------------------------------------------------');
  lines.push('| Section              | Found | Words | Figs | Tables | Status    |');
  lines.push('|----------------------|-------|-------|------|--------|-----------|');

  for (const section of validationResult.sections) {
    const status = !section.found ? 'MISSING' :
                   section.meetsRequirements ? 'OK' : 'NEEDS FIX';
    lines.push(
      `| ${section.sectionKey.padEnd(20)} | ${section.found ? 'Yes' : 'No '} ` +
      `| ${section.wordCount.toString().padStart(5)} | ${section.figureCount.toString().padStart(4)} ` +
      `| ${section.tableCount.toString().padStart(6)} | ${status.padEnd(9)} |`
    );
  }
  lines.push('--------------------------------------------------------------------------------');

  // Errors
  if (validationResult.errors.length > 0) {
    lines.push('');
    lines.push('ERRORS:');
    for (const error of validationResult.errors) {
      lines.push(`  - ${error}`);
    }
  }

  // Comparison results if provided
  if (comparisonResult) {
    lines.push('');
    lines.push('COMPARISON WITH PREVIOUS VERSION:');
    lines.push('--------------------------------------------------------------------------------');

    if (comparisonResult.issues.length > 0) {
      lines.push('Issues (content loss):');
      for (const issue of comparisonResult.issues) {
        lines.push(`  - ${issue}`);
      }
    }

    if (comparisonResult.improvements.length > 0) {
      lines.push('Improvements:');
      for (const imp of comparisonResult.improvements) {
        lines.push(`  + ${imp}`);
      }
    }

    if (comparisonResult.issues.length === 0 && comparisonResult.improvements.length === 0) {
      lines.push('  No significant changes detected');
    }
  }

  lines.push('================================================================================');

  return lines.join('\n');
}
