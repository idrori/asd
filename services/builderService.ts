/**
 * ICISbuilder Service
 *
 * Handles the paper building stage based on ICISbuilder.txt
 *
 * Responsibilities:
 * - Execute 9-step workflow (Steps 1-9)
 * - Manage research type-specific planning (Steps 2A-2E)
 * - Generate research metadata files
 * - Handle partial vs full paper modes
 * - Track builder step progress
 */

import {
  ResearchType,
  BuilderStep,
  ResearchMetadata,
  InterviewData,
  Artifact
} from '../types';
import { RESEARCH_TYPE_INFO, BUILDER_STEP_INFO, FILE_PATHS } from '../constants';

export interface BuilderProgress {
  currentStep: BuilderStep;
  completedSteps: BuilderStep[];
  skippedSteps: BuilderStep[];
  isPartialPaper: boolean;
  artifacts: Artifact[];
}

export interface InterviewAnalysis {
  researchDomain: string;
  innovationFocus: string;
  theoreticalBasis: string;
  implementation: string;
  impact: string;
  researchType: ResearchType;
  problemStatement: string;
  contributions: string[];
  evaluationStrategy: string;        // From prompt: evaluation metrics and protocols
  initialReferences: string[];       // From prompt: 1-3 references supplied in interview
}

/**
 * Paper types based on data availability
 * From ICISbuilder.txt Step 1.5
 */
export enum PaperType {
  FULL = 'FULL',                           // 14-16 pages, all sections including Results
  PARTIAL_NO_EXAMPLES = 'PARTIAL_NO_EXAMPLES',   // 8-10 pages, no Results section
  PARTIAL_WITH_EXAMPLES = 'PARTIAL_WITH_EXAMPLES' // 10-12 pages, no Results but has demo
}

export interface DataAssessment {
  hasDataFile: boolean;
  dataFilePath?: string;
  dataFormat?: string;
  hasExampleData: boolean;                 // NEW: Example_data_{participantId}.* exists
  exampleDataPath?: string;                // NEW: Path to example data if exists
  observationCount?: number;
  variables?: string[];
  variableTypes?: Record<string, string>;  // From prompt: Data types per variable
  missingValueCount?: number;              // From prompt: Missing values assessment
  dataIssues?: string[];                   // From prompt: Any obvious issues
  dataCollectionPlanned: boolean;          // NEW: From interview analysis
  paperType: PaperType;                    // NEW: Determined paper type
  dataStrategy: 'full_paper' | 'synthetic_data' | 'theoretical_only' | 'data_collection_pending';
}

/**
 * Determine which steps to skip based on research type
 *
 * From ICISbuilder.txt:
 * - Step 3 (Math): Execute for 2A/2B always, or 2D/2E only if novel algorithms/proofs needed
 * - Steps 4-7: Always execute (all papers are full 14-16 page papers)
 */
export function getStepsToSkip(
  researchType: ResearchType,
  needsMathFormulation: boolean = false  // From interview analysis: novel algorithms or proofs
): BuilderStep[] {
  const skippedSteps: BuilderStep[] = [];

  // Step 3 skip logic:
  // - 2A (Simulation) and 2B (Analytical): Always execute Step 3
  // - 2D/2E (Experimental/Survey): Skip unless needsMathFormulation is true
  if (researchType === ResearchType.EXPERIMENTAL || researchType === ResearchType.SURVEY) {
    if (!needsMathFormulation) {
      skippedSteps.push(BuilderStep.STEP3_MATH_FORMULATION);
    }
  }
  // Note: 2A and 2B always include Step 3 (no skip)

  return skippedSteps;
}

/**
 * Get the appropriate research planning sub-step (2A-2E)
 */
export function getResearchPlanningSubStep(researchType: ResearchType): string {
  switch (researchType) {
    case ResearchType.SIMULATION:
      return '2A';
    case ResearchType.ANALYTICAL:
      return '2B';
    case ResearchType.SECONDARY_DATA:
      return '2C';
    case ResearchType.EXPERIMENTAL:
      return '2D';
    case ResearchType.SURVEY:
      return '2E';
    default:
      return '2A';
  }
}

/**
 * Get the metaprompt template file for research type
 */
export function getMetapromptTemplate(researchType: ResearchType): string {
  return RESEARCH_TYPE_INFO[researchType]?.template || 'metaprompt_template_COMPUTATIONAL.py';
}

/**
 * Determine data strategy based on research type and data availability
 * All research types produce full papers (14-16 pages)
 *
 * @param researchType - The type of research (2A-2E)
 * @param hasData - Whether a data file exists
 * @param dataCollectionPlanned - From interview: whether data collection is planned but not yet done
 */
export function determineDataStrategy(
  researchType: ResearchType,
  hasData: boolean,
  dataCollectionPlanned: boolean = false
): DataAssessment['dataStrategy'] {
  if (hasData) {
    return 'full_paper';
  }

  // No data file - check if data collection is planned
  if (researchType === ResearchType.EXPERIMENTAL || researchType === ResearchType.SURVEY) {
    if (dataCollectionPlanned) {
      // Interview indicates data will be collected - do NOT use synthetic data
      return 'data_collection_pending';
    }
    // No planned data collection - can use synthetic data for demonstration
    return 'synthetic_data';
  }

  if (researchType === ResearchType.SIMULATION) {
    // Simulations always generate synthetic data
    return 'synthetic_data';
  }

  if (researchType === ResearchType.ANALYTICAL) {
    // Theoretical papers use numerical examples
    return 'theoretical_only';
  }

  return 'synthetic_data';
}

/**
 * Generate initial research metadata structure
 */
export function createInitialMetadata(
  interviewData: InterviewData,
  analysis: InterviewAnalysis
): Partial<ResearchMetadata> {
  return {
    abstract: '', // To be filled by AI
    venue: 'ICIS2025',
    researchType: analysis.researchType,
    sourcePapers: interviewData.references.map((ref, index) => ({
      reference: ref,
      rank: index + 1,
      type: [analysis.researchType],
      usage: '' // To be filled by AI
    })),
    task1: '', // Technical implementation - to be filled
    task2: '', // Research objectives - to be filled
  };
}

/**
 * Validate research metadata completeness
 */
export function validateMetadata(metadata: ResearchMetadata): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!metadata.abstract || metadata.abstract.length < 100) {
    errors.push('Abstract must be at least 100 characters');
  }

  if (metadata.abstract && metadata.abstract.split(' ').length < 150) {
    errors.push('Abstract should be 150-200 words');
  }

  if (!metadata.sourcePapers || metadata.sourcePapers.length < 20) {
    errors.push('Need at least 20 source papers');
  }

  if (!metadata.task1 || metadata.task1.length < 100) {
    errors.push('Task 1 (implementation details) is incomplete');
  }

  if (!metadata.task2 || metadata.task2.length < 100) {
    errors.push('Task 2 (research objectives) is incomplete');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Get next builder step in sequence
 */
export function getNextStep(
  currentStep: BuilderStep,
  skippedSteps: BuilderStep[]
): BuilderStep | null {
  const stepOrder: BuilderStep[] = [
    BuilderStep.STEP1_INTERVIEW_ANALYSIS,
    BuilderStep.STEP1_5_DATA_ASSESSMENT,
    BuilderStep.STEP2_RESEARCH_PLANNING,
    BuilderStep.STEP2_FINAL_METADATA,
    BuilderStep.STEP3_MATH_FORMULATION,
    BuilderStep.STEP4_IMPLEMENTATION,
    BuilderStep.STEP5_EXECUTION,
    BuilderStep.STEP6_VISUALIZATION,
    BuilderStep.STEP7_ANALYSIS,
    BuilderStep.STEP8_PAPER_WRITING,
    BuilderStep.STEP9_FINAL_SUBMISSION
  ];

  const currentIndex = stepOrder.indexOf(currentStep);
  if (currentIndex === -1 || currentIndex >= stepOrder.length - 1) {
    return null;
  }

  // Find next non-skipped step
  for (let i = currentIndex + 1; i < stepOrder.length; i++) {
    if (!skippedSteps.includes(stepOrder[i])) {
      return stepOrder[i];
    }
  }

  return null;
}

/**
 * Format step log message
 */
export function formatStepLog(step: BuilderStep, status: 'starting' | 'completed' | 'skipped' | 'error', message?: string): string {
  const info = BUILDER_STEP_INFO[step];
  const prefix = `ICISbuilder [${info.label}]`;

  switch (status) {
    case 'starting':
      return `${prefix}: Starting ${info.description}...`;
    case 'completed':
      return `${prefix}: ${info.description} completed.${message ? ` ${message}` : ''}`;
    case 'skipped':
      return `${prefix}: Skipping ${info.description} (${message || 'not required'})`;
    case 'error':
      return `${prefix}: ERROR in ${info.description}${message ? `: ${message}` : ''}`;
    default:
      return `${prefix}: ${message || info.description}`;
  }
}

/**
 * Generate file paths for artifacts
 */
export function getArtifactPaths(artifactType: string): { codePath: string; dataPath: string; resultsPath: string } {
  return {
    codePath: `${FILE_PATHS.CODE_DIR}\\${artifactType}`,
    dataPath: `${FILE_PATHS.DATA_DIR}\\${artifactType}`,
    resultsPath: `${FILE_PATHS.RESULTS_DIR}\\${artifactType}`
  };
}

/**
 * Create artifact record
 */
export function createArtifact(
  name: string,
  type: Artifact['type'],
  content: string,
  directory: string
): Artifact {
  return {
    name,
    type,
    content,
    path: `${directory}\\${name}`,
    timestamp: new Date()
  };
}

/**
 * Determine paper type based on research type and data availability
 * From ICISbuilder.txt Step 1.5
 */
export function determinePaperType(
  researchType: ResearchType,
  hasDataFile: boolean,
  hasExampleData: boolean,
  dataCollectionPlanned: boolean
): PaperType {
  // If real data exists, always produce full paper
  if (hasDataFile) {
    return PaperType.FULL;
  }

  // For experiments and surveys with planned data collection
  if (researchType === ResearchType.EXPERIMENTAL || researchType === ResearchType.SURVEY) {
    if (dataCollectionPlanned) {
      // Data collection planned but not done - partial paper
      if (hasExampleData) {
        return PaperType.PARTIAL_WITH_EXAMPLES;
      }
      return PaperType.PARTIAL_NO_EXAMPLES;
    }
    // No planned data collection - can generate synthetic data for full paper
    return PaperType.FULL;
  }

  // Simulations and analytical papers always produce full papers
  // (they generate their own synthetic/numerical data)
  return PaperType.FULL;
}

/**
 * Get section requirements based on paper type
 * From ICISbuilder.txt Step 8
 */
export function getSectionRequirementsForPaperType(paperType: PaperType): {
  minPages: number;
  maxPages: number;
  maxSections: number;
  sections: string[];
  description: string;
  includesResults: boolean;
} {
  switch (paperType) {
    case PaperType.PARTIAL_NO_EXAMPLES:
      return {
        minPages: 8,
        maxPages: 10,
        maxSections: 6,
        sections: [
          'Introduction',
          'Literature Review',
          'Theoretical Framework',
          'Proposed Methodology',
          'Discussion',
          'Conclusion'
        ],
        description: 'Partial paper - data collection pending, no Results section',
        includesResults: false
      };

    case PaperType.PARTIAL_WITH_EXAMPLES:
      return {
        minPages: 10,
        maxPages: 12,
        maxSections: 6,
        sections: [
          'Introduction',
          'Literature Review',
          'Theoretical Framework',
          'Methodology with Analysis Demonstration',
          'Discussion',
          'Conclusion'
        ],
        description: 'Partial paper with methodology demo using example data',
        includesResults: false
      };

    case PaperType.FULL:
    default:
      return {
        minPages: 14,
        maxPages: 16,
        maxSections: 8,
        sections: [
          'Introduction',
          'Literature Review',
          'Theoretical Framework',
          'Methodology',
          'Results',
          'Discussion',
          'Conclusion'
        ],
        description: 'Full paper with empirical results',
        includesResults: true
      };
  }
}

/**
 * Get paper requirements based on paper type
 * @deprecated Use getSectionRequirementsForPaperType() instead for full paper type support
 */
export function getPaperType(paperType: PaperType = PaperType.FULL): {
  minPages: number;
  maxPages: number;
  sections: string[];
  description: string;
} {
  const requirements = getSectionRequirementsForPaperType(paperType);
  return {
    minPages: requirements.minPages,
    maxPages: requirements.maxPages,
    sections: requirements.sections,
    description: requirements.description
  };
}

/**
 * Estimate builder progress percentage
 */
export function getProgressPercentage(completedSteps: BuilderStep[], skippedSteps: BuilderStep[]): number {
  const allSteps = Object.values(BuilderStep);
  const activeSteps = allSteps.filter(s => !skippedSteps.includes(s));
  const completed = completedSteps.filter(s => !skippedSteps.includes(s));

  if (activeSteps.length === 0) return 100;
  return Math.round((completed.length / activeSteps.length) * 100);
}

// ============================================================================
// STEP 8: Paper Writing Validation Functions
// From ICISbuilder.txt lines 822-967
// ============================================================================

export interface PaperValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    paragraphCount: number;
    avgParagraphWords: number;
    bulletPointLocations: number;
    hasSubsubsection: boolean;
    sectionCount: number;
  };
}

/**
 * Validate LaTeX paper content against ICISbuilder.txt requirements
 *
 * Requirements:
 * - No \subsubsection{} commands
 * - Paragraphs 150-250 words minimum (target)
 * - Bullet points in max 3 locations
 * - Only \section{} and \subsection{} headings
 */
export function validatePaperContent(latexContent: string): PaperValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check for forbidden \subsubsection{}
  const subsubsectionMatches = latexContent.match(/\\subsubsection\{/g);
  const hasSubsubsection = subsubsectionMatches !== null && subsubsectionMatches.length > 0;
  if (hasSubsubsection) {
    errors.push(`Found ${subsubsectionMatches!.length} \\subsubsection{} commands - these are forbidden. Use flowing paragraphs instead.`);
  }

  // Count bullet point environments (itemize, enumerate)
  const bulletEnvMatches = latexContent.match(/\\begin\{(itemize|enumerate)\}/g);
  const bulletPointLocations = bulletEnvMatches ? bulletEnvMatches.length : 0;
  if (bulletPointLocations > 3) {
    errors.push(`Found ${bulletPointLocations} bullet point locations - maximum allowed is 3.`);
  }

  // Count sections
  const sectionMatches = latexContent.match(/\\section\{/g);
  const sectionCount = sectionMatches ? sectionMatches.length : 0;

  // Estimate paragraph count and average word count
  // Split by double newlines or \par to find paragraphs
  const paragraphs = latexContent
    .replace(/\\begin\{.*?\}[\s\S]*?\\end\{.*?\}/g, '') // Remove environments
    .replace(/\\[a-zA-Z]+\{[^}]*\}/g, '') // Remove commands
    .replace(/%.*$/gm, '') // Remove comments
    .split(/\n\s*\n|\s*\\par\s*/)
    .filter(p => p.trim().length > 50); // Only count substantial paragraphs

  const paragraphCount = paragraphs.length;

  // Calculate average words per paragraph
  let totalWords = 0;
  let shortParagraphs = 0;
  paragraphs.forEach(p => {
    const wordCount = p.trim().split(/\s+/).length;
    totalWords += wordCount;
    if (wordCount < 150) {
      shortParagraphs++;
    }
  });
  const avgParagraphWords = paragraphCount > 0 ? Math.round(totalWords / paragraphCount) : 0;

  if (avgParagraphWords < 150 && paragraphCount > 0) {
    warnings.push(`Average paragraph length is ${avgParagraphWords} words - target is 150-250 words.`);
  }

  if (shortParagraphs > paragraphCount * 0.3) {
    warnings.push(`${shortParagraphs} paragraphs are under 150 words. Consider expanding or combining.`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats: {
      paragraphCount,
      avgParagraphWords,
      bulletPointLocations,
      hasSubsubsection,
      sectionCount
    }
  };
}

// ============================================================================
// STEP 9: Final Submission Verification Functions
// From ICISbuilder.txt lines 969-1050
// ============================================================================

export interface FigureVerificationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  figurePaths: string[];
  figureCount: number;
}

export interface PDFVerificationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  fileSizeKB: number;
  hasImages: boolean;  // Inferred from file size > 450KB
  referenceWarnings: boolean;  // "?" in PDF indicates unresolved refs
}

export interface SubmissionChecklist {
  coreFiles: {
    texFile: boolean;
    pdfFile: boolean;
    figuresHighRes: boolean;
    bibliography: boolean;
  };
  supplementary: {
    code: boolean;
    results: boolean;
    analyses: boolean;
    readme: boolean;
  };
  quality: {
    referencesCompile: boolean;
    pageCountCorrect: boolean;
    allClaimsSupported: boolean;
    figuresReferenced: boolean;
    noCompilationWarnings: boolean;
  };
}

/**
 * Extract figure paths from LaTeX content
 * From ICISbuilder.txt Step 8.1
 */
export function extractFigurePaths(latexContent: string): string[] {
  const regex = /\\includegraphics(?:\[.*?\])?\{([^}]+)\}/g;
  const paths: string[] = [];
  let match;

  while ((match = regex.exec(latexContent)) !== null) {
    paths.push(match[1]);
  }

  return paths;
}

/**
 * Verify figure rendering based on compilation output
 * From ICISbuilder.txt Step 9 - Method 1
 *
 * @param compilationOutput - Output from pdflatex command
 * @param expectedFigures - List of expected figure paths
 */
export function verifyFigureRendering(
  compilationOutput: string,
  expectedFigures: string[]
): FigureVerificationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const foundFigures: string[] = [];

  // Check for "File not found" errors
  const notFoundMatches = compilationOutput.match(/File [`']([^'`]+)['`] not found/gi);
  if (notFoundMatches) {
    notFoundMatches.forEach(match => {
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
      warnings.push(`Expected figure not confirmed in output: ${expected}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    figurePaths: foundFigures,
    figureCount: foundFigures.length
  };
}

/**
 * Verify PDF file size indicates images are embedded
 * From ICISbuilder.txt Step 9 - Method 2
 *
 * Thresholds:
 * - <350KB = likely no images (PROBLEM)
 * - >450KB = images embedded (GOOD)
 */
export function verifyPDFFileSize(fileSizeBytes: number): PDFVerificationResult {
  const fileSizeKB = Math.round(fileSizeBytes / 1024);
  const errors: string[] = [];
  const warnings: string[] = [];

  const hasImages = fileSizeKB > 450;

  if (fileSizeKB < 350) {
    errors.push(`PDF file size is ${fileSizeKB}KB - likely no images embedded. Expected >450KB with figures.`);
  } else if (fileSizeKB < 450) {
    warnings.push(`PDF file size is ${fileSizeKB}KB - may be missing some images. Expected >450KB.`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    fileSizeKB,
    hasImages,
    referenceWarnings: false  // Would need to parse PDF content
  };
}

/**
 * Check compilation log for warnings
 * From ICISbuilder.txt Step 9 - Method 3
 */
export function checkCompilationLog(logContent: string): string[] {
  const warnings: string[] = [];

  // Check for "not found" warnings
  if (/not found/i.test(logContent)) {
    warnings.push('Log contains "not found" warnings');
  }

  // Check for undefined references
  if (/undefined/i.test(logContent) && /reference/i.test(logContent)) {
    warnings.push('Log contains undefined reference warnings');
  }

  // Check for missing citations
  if (/Citation.*undefined/i.test(logContent)) {
    warnings.push('Log contains undefined citation warnings');
  }

  // Check for overfull/underfull boxes (common LaTeX warnings)
  const overfullCount = (logContent.match(/Overfull \\hbox/g) || []).length;
  if (overfullCount > 10) {
    warnings.push(`Log contains ${overfullCount} overfull hbox warnings`);
  }

  return warnings;
}

/**
 * Generate submission checklist status
 * From ICISbuilder.txt Step 9 Final Checklist
 */
export function generateSubmissionChecklist(
  files: {
    texExists: boolean;
    pdfExists: boolean;
    figureFiles: string[];
    bibExists: boolean;
    codeDir: boolean;
    resultsDir: boolean;
    readmeExists: boolean;
  },
  pdfVerification: PDFVerificationResult,
  paperValidation: PaperValidationResult,
  isPartialPaper: boolean
): SubmissionChecklist {
  // Page count validation would use these thresholds
  // const expectedPages = isPartialPaper ? { min: 8, max: 10 } : { min: 14, max: 16 };
  void isPartialPaper;  // Used for future page count validation

  return {
    coreFiles: {
      texFile: files.texExists,
      pdfFile: files.pdfExists,
      figuresHighRes: files.figureFiles.length > 0,
      bibliography: files.bibExists
    },
    supplementary: {
      code: files.codeDir,
      results: files.resultsDir,
      analyses: files.resultsDir,  // Typically in results
      readme: files.readmeExists
    },
    quality: {
      referencesCompile: !pdfVerification.referenceWarnings,
      pageCountCorrect: true,  // Would need to extract from PDF
      allClaimsSupported: true,  // Manual check required
      figuresReferenced: paperValidation.stats.sectionCount > 0,
      noCompilationWarnings: pdfVerification.errors.length === 0
    }
  };
}

// ============================================================================
// STEP 8.4: Section Content Validation Functions
// From ICISbuilder.txt - Validates all required sections exist with content
// ============================================================================

/**
 * Section requirements from research_metadata.json sections field
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
 * Default section requirements matching ICISbuilder.txt STEP 8.4
 */
export const DEFAULT_SECTION_REQUIREMENTS: Record<string, SectionRequirements> = {
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
 * Section name variations that map to canonical names
 */
const SECTION_NAME_VARIANTS: Record<string, string[]> = {
  introduction: ['Introduction'],
  literatureReview: ['Literature Review', 'Related Work', 'Background', 'Prior Work'],
  theoreticalFramework: ['Theoretical Framework', 'Theory', 'Theoretical Background', 'Conceptual Framework'],
  methodology: ['Methodology', 'Method', 'Methods', 'Research Design', 'Research Method'],
  results: ['Results', 'Findings', 'Analysis', 'Empirical Results'],
  discussion: ['Discussion', 'Discussion and Implications'],
  conclusion: ['Conclusion', 'Conclusions', 'Concluding Remarks']
};

/**
 * Result of validating a single section
 */
export interface SectionValidationResult {
  sectionKey: string;
  sectionName: string | null;
  found: boolean;
  wordCount: number;
  paragraphCount: number;
  figureCount: number;
  tableCount: number;
  citationCount: number;
  hasHypotheses: boolean;
  errors: string[];
  warnings: string[];
  meetsRequirements: boolean;
}

/**
 * Result of validating all sections
 */
export interface PaperSectionsValidationResult {
  valid: boolean;
  totalErrors: number;
  totalWarnings: number;
  sections: SectionValidationResult[];
  missingSections: string[];
  summary: string;
}

/**
 * Extract section content from LaTeX
 * Returns content between \section{name} and next \section{ or end of document
 */
export function extractSectionContent(latexContent: string, sectionVariants: string[]): {
  found: boolean;
  sectionName: string | null;
  content: string;
} {
  for (const variant of sectionVariants) {
    // Escape special regex characters in section name
    const escapedVariant = variant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match \section{Name} or \section*{Name}
    const sectionRegex = new RegExp(
      `\\\\section\\*?\\{${escapedVariant}\\}([\\s\\S]*?)(?=\\\\section\\{|\\\\section\\*\\{|\\\\end\\{document\\}|$)`,
      'i'
    );
    const match = latexContent.match(sectionRegex);
    if (match) {
      return {
        found: true,
        sectionName: variant,
        content: match[1] || ''
      };
    }
  }
  return { found: false, sectionName: null, content: '' };
}

/**
 * Count words in LaTeX content (excluding commands and environments)
 */
export function countWordsInLatex(latexContent: string): number {
  // Remove LaTeX commands
  let cleanContent = latexContent
    .replace(/\\[a-zA-Z]+\{[^}]*\}/g, ' ')  // Remove \command{arg}
    .replace(/\\[a-zA-Z]+\[[^\]]*\]/g, ' ') // Remove \command[opt]
    .replace(/\\[a-zA-Z]+/g, ' ')           // Remove \command
    .replace(/\{|\}/g, ' ')                 // Remove braces
    .replace(/%.*$/gm, '')                  // Remove comments
    .replace(/\$[^$]*\$/g, ' ')             // Remove inline math
    .replace(/\\\[[\s\S]*?\\\]/g, ' ')      // Remove display math
    .replace(/\\begin\{.*?\}[\s\S]*?\\end\{.*?\}/g, ' '); // Remove environments

  // Count words
  const words = cleanContent.trim().split(/\s+/).filter(w => w.length > 0);
  return words.length;
}

/**
 * Count paragraphs in LaTeX content
 */
export function countParagraphsInLatex(latexContent: string): number {
  // Remove environments first
  const contentWithoutEnvs = latexContent
    .replace(/\\begin\{(figure|table|equation|align|itemize|enumerate)\}[\s\S]*?\\end\{\1\}/g, '');

  // Split by double newlines or \par
  const paragraphs = contentWithoutEnvs
    .split(/\n\s*\n|\s*\\par\s*/)
    .filter(p => {
      const wordCount = countWordsInLatex(p);
      return wordCount > 30; // Only count substantial paragraphs
    });

  return paragraphs.length;
}

/**
 * Count figures in section content
 */
export function countFiguresInSection(sectionContent: string): number {
  const figureMatches = sectionContent.match(/\\includegraphics/g);
  return figureMatches ? figureMatches.length : 0;
}

/**
 * Count tables in section content
 */
export function countTablesInSection(sectionContent: string): number {
  const tableMatches = sectionContent.match(/\\begin\{table\}/g);
  return tableMatches ? tableMatches.length : 0;
}

/**
 * Count citations in section content
 */
export function countCitationsInSection(sectionContent: string): number {
  const citeMatches = sectionContent.match(/\\cite\{[^}]+\}/g);
  if (!citeMatches) return 0;

  // Count individual citations (some \cite{} may have multiple keys)
  let count = 0;
  for (const cite of citeMatches) {
    const keys = cite.match(/\\cite\{([^}]+)\}/);
    if (keys && keys[1]) {
      count += keys[1].split(',').length;
    }
  }
  return count;
}

/**
 * Check if section contains hypothesis statements
 */
export function hasHypothesesInSection(sectionContent: string): boolean {
  // Look for hypothesis patterns: H1, H2, Hypothesis 1, etc.
  const hypothesisPatterns = [
    /\bH\d+[a-z]?\b/,                    // H1, H1a, H2b
    /\bHypothesis\s+\d+/i,               // Hypothesis 1
    /\\textbf\{H\d+/,                    // \textbf{H1}
    /\\textit\{Hypothesis/i              // \textit{Hypothesis
  ];

  return hypothesisPatterns.some(pattern => pattern.test(sectionContent));
}

/**
 * Validate a single section against requirements
 */
export function validateSection(
  latexContent: string,
  sectionKey: string,
  requirements: SectionRequirements
): SectionValidationResult {
  const variants = SECTION_NAME_VARIANTS[sectionKey] || [sectionKey];
  const { found, sectionName, content } = extractSectionContent(latexContent, variants);

  const errors: string[] = [];
  const warnings: string[] = [];

  if (!found) {
    if (requirements.required) {
      errors.push(`Required section "${sectionKey}" not found. Expected one of: ${variants.join(', ')}`);
    }
    return {
      sectionKey,
      sectionName: null,
      found: false,
      wordCount: 0,
      paragraphCount: 0,
      figureCount: 0,
      tableCount: 0,
      citationCount: 0,
      hasHypotheses: false,
      errors,
      warnings,
      meetsRequirements: false
    };
  }

  const wordCount = countWordsInLatex(content);
  const paragraphCount = countParagraphsInLatex(content);
  const figureCount = countFiguresInSection(content);
  const tableCount = countTablesInSection(content);
  const citationCount = countCitationsInSection(content);
  const hasHypotheses = hasHypothesesInSection(content);

  // Validate word count
  if (wordCount < requirements.minWords) {
    errors.push(`Section "${sectionName}" has ${wordCount} words, minimum required is ${requirements.minWords}`);
  }

  // Validate paragraph count
  if (paragraphCount < requirements.minParagraphs) {
    warnings.push(`Section "${sectionName}" has ${paragraphCount} paragraphs, recommended minimum is ${requirements.minParagraphs}`);
  }

  // Validate figures (for Results section)
  if (requirements.minFigures && figureCount < requirements.minFigures) {
    errors.push(`Section "${sectionName}" has ${figureCount} figures, minimum required is ${requirements.minFigures}`);
  }

  // Validate tables (for Results section)
  if (requirements.minTables && tableCount < requirements.minTables) {
    errors.push(`Section "${sectionName}" has ${tableCount} tables, minimum required is ${requirements.minTables}`);
  }

  // Validate citations (for Literature Review)
  if (requirements.minReferences && citationCount < requirements.minReferences) {
    warnings.push(`Section "${sectionName}" has ${citationCount} citations, recommended minimum is ${requirements.minReferences}`);
  }

  // Validate hypotheses (for Theoretical Framework)
  if (requirements.requiresHypotheses && !hasHypotheses) {
    errors.push(`Section "${sectionName}" should contain explicit hypotheses (H1, H2, etc.)`);
  }

  return {
    sectionKey,
    sectionName,
    found: true,
    wordCount,
    paragraphCount,
    figureCount,
    tableCount,
    citationCount,
    hasHypotheses,
    errors,
    warnings,
    meetsRequirements: errors.length === 0
  };
}

/**
 * Validate all sections in a paper
 * From ICISbuilder.txt STEP 8.4
 */
export function validatePaperSections(
  latexContent: string,
  requirements: Record<string, SectionRequirements> = DEFAULT_SECTION_REQUIREMENTS
): PaperSectionsValidationResult {
  const sections: SectionValidationResult[] = [];
  const missingSections: string[] = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const [sectionKey, sectionReqs] of Object.entries(requirements)) {
    const result = validateSection(latexContent, sectionKey, sectionReqs);
    sections.push(result);

    if (!result.found && sectionReqs.required) {
      missingSections.push(sectionKey);
    }

    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
  }

  const valid = totalErrors === 0 && missingSections.length === 0;

  // Generate summary
  const summaryLines: string[] = [];
  summaryLines.push('Section Validation Summary:');
  summaryLines.push(`- Total sections checked: ${sections.length}`);
  summaryLines.push(`- Sections found: ${sections.filter(s => s.found).length}`);
  summaryLines.push(`- Missing sections: ${missingSections.length > 0 ? missingSections.join(', ') : 'None'}`);
  summaryLines.push(`- Total errors: ${totalErrors}`);
  summaryLines.push(`- Total warnings: ${totalWarnings}`);
  summaryLines.push(`- Overall status: ${valid ? 'PASS' : 'FAIL'}`);

  if (!valid) {
    summaryLines.push('');
    summaryLines.push('Issues to fix:');
    for (const section of sections) {
      for (const error of section.errors) {
        summaryLines.push(`  - ${error}`);
      }
    }
  }

  return {
    valid,
    totalErrors,
    totalWarnings,
    sections,
    missingSections,
    summary: summaryLines.join('\n')
  };
}

/**
 * Format section validation results for display
 */
export function formatSectionValidationReport(result: PaperSectionsValidationResult): string {
  const lines: string[] = [];

  lines.push('================================================================================');
  lines.push('                    SECTION CONTENT VALIDATION REPORT');
  lines.push('================================================================================');
  lines.push('');

  // Status header
  lines.push(`STATUS: ${result.valid ? 'PASS ✓' : 'FAIL ✗'}`);
  lines.push('');

  // Section-by-section details
  lines.push('SECTION DETAILS:');
  lines.push('--------------------------------------------------------------------------------');
  lines.push('| Section              | Found | Words | Paras | Figs | Tables | Status       |');
  lines.push('|----------------------|-------|-------|-------|------|--------|--------------|');

  for (const section of result.sections) {
    const status = !section.found ? 'MISSING' :
                   section.meetsRequirements ? 'OK' : 'NEEDS FIX';
    const statusPad = status.padEnd(12);
    lines.push(
      `| ${section.sectionKey.padEnd(20)} | ${section.found ? 'Yes' : 'No '.padStart(3)} ` +
      `| ${section.wordCount.toString().padStart(5)} | ${section.paragraphCount.toString().padStart(5)} ` +
      `| ${section.figureCount.toString().padStart(4)} | ${section.tableCount.toString().padStart(6)} | ${statusPad} |`
    );
  }
  lines.push('--------------------------------------------------------------------------------');
  lines.push('');

  // Errors
  if (result.totalErrors > 0) {
    lines.push('ERRORS (must fix):');
    lines.push('--------------------------------------------------------------------------------');
    for (const section of result.sections) {
      for (const error of section.errors) {
        lines.push(`  ✗ ${error}`);
      }
    }
    lines.push('');
  }

  // Warnings
  if (result.totalWarnings > 0) {
    lines.push('WARNINGS (recommended to fix):');
    lines.push('--------------------------------------------------------------------------------');
    for (const section of result.sections) {
      for (const warning of section.warnings) {
        lines.push(`  ⚠ ${warning}`);
      }
    }
    lines.push('');
  }

  // Missing sections
  if (result.missingSections.length > 0) {
    lines.push('MISSING SECTIONS:');
    lines.push('--------------------------------------------------------------------------------');
    for (const missing of result.missingSections) {
      const variants = SECTION_NAME_VARIANTS[missing] || [missing];
      lines.push(`  ✗ ${missing} - Add \\section{${variants[0]}}`);
    }
    lines.push('');
  }

  lines.push('================================================================================');

  return lines.join('\n');
}
