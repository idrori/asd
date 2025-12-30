/**
 * ICIS Copilot Types
 *
 * Workflow stages aligned with prompt files:
 * - ICISsetup: Verify files, initialize project
 * - ICISbuilder: Build paper from interview (ICISbuilder.txt - Steps 1-9)
 * - ICISreviewer: Review paper (ICISreview.txt)
 * - ICISsupervisor: Human oversight decision
 * - ICISreviser: Revise paper based on feedback (ICISreviser.txt)
 * - ICISfinalize: Final submission preparation
 */

// Workflow Stages - matches the 6-stage pipeline
export enum Stage {
  SETUP = 'ICISsetup',
  BUILDER = 'ICISbuilder',
  REVIEWER = 'ICISreviewer',
  SUPERVISOR = 'ICISsupervisor',
  REVISER = 'ICISreviser',
  FINALIZE = 'ICISfinalize'
}

export enum StageStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  ERROR = 'error',
  SKIPPED = 'skipped'
}

// Research types from ICISbuilder.txt Step 1
export enum ResearchType {
  SIMULATION = 'Simulation & Computational Modeling',
  ANALYTICAL = 'Analytical & Theoretical Modeling (with or without data)',
  SECONDARY_DATA = 'Secondary data analysis',
  EXPERIMENTAL = 'Laboratory & field experiments',
  SURVEY = 'Survey research'
}

// Builder sub-steps (ICISbuilder.txt Steps 1-9)
export enum BuilderStep {
  STEP1_INTERVIEW_ANALYSIS = 'Step 1: Research Interview Analysis',
  STEP1_5_DATA_ASSESSMENT = 'Step 1.5: Data File Assessment',
  STEP2_RESEARCH_PLANNING = 'Step 2: Research Type Planning',
  STEP2_FINAL_METADATA = 'Step 2 Final: Generate Metadata Files',
  STEP3_MATH_FORMULATION = 'Step 3: Mathematical Formulation',
  STEP4_IMPLEMENTATION = 'Step 4: Experimental Implementation',
  STEP5_EXECUTION = 'Step 5: Experiment Execution',
  STEP6_VISUALIZATION = 'Step 6: Results Visualization',
  STEP7_ANALYSIS = 'Step 7: Results Analysis',
  STEP8_PAPER_WRITING = 'Step 8: Paper Writing',
  STEP9_FINAL_SUBMISSION = 'Step 9: Final Submission Preparation'
}

// Review scores from ICISreview.txt
export interface ReviewScores {
  novelty: number;          // 1-5
  significance: number;     // 1-5
  methodologicalRigor: number; // 1-5
  clarity: number;          // 1-5
  relevance: number;        // 1-5
}

// Trustworthiness scores from ICISreview.txt Step 3
export interface TrustworthinessScores {
  reliability: number;      // 1-7: Process reliability
  benevolence: number;      // 1-7: ASD integrity/transparency
  goalAlignment: number;    // 1-7: Alignment with research objectives
}

// Error counts from ICISreview.txt oversight
export interface ErrorCounts {
  majorErrors: number;
  minorErrors: number;
}

// Round data combining review, oversight, and trustworthiness
export interface RoundScore {
  roundId: number;
  // Legacy scores (for backwards compatibility)
  reviewScore: number;
  reliabilityScore: number;
  alignmentScore: number;
  errorsDetected: number;
  // New detailed scores
  reviewScores?: ReviewScores;
  trustworthinessScores?: TrustworthinessScores;
  errorCounts?: ErrorCounts;
  // Feedback and comments
  feedback?: string;  // Summary feedback for Reviser to use
  constructiveFeedback?: string;
  supervisorComment?: string;
  criticalAlerts?: string[];
}

// Chat/Message types
export enum Role {
  USER = 'user',
  BOT = 'bot',
}

export interface ChartConfig {
  type: 'line' | 'bar' | 'area';
  data: any[];
  xAxisKey: string;
  seriesKey: string;
  title: string;
}

export interface GroundingUrl {
  uri: string;
  title?: string;
}

export interface Message {
  role: Role;
  text: string;
  timestamp: Date;
  groundingUrls?: GroundingUrl[];
  chartData?: ChartConfig;
}

// Interview data (loaded from existing transcript file)
export interface InterviewData {
  participantEmail: string;
  references: string[];
  researchType: ResearchType | null;
  hasData: boolean;
  dataDescription?: string;
  transcript: string;
  timestamp: Date;
}

// Research metadata from ICISbuilder.txt Step 2 Final
export interface ResearchMetadata {
  abstract: string;
  venue: string;
  researchType: ResearchType;
  sourcePapers: {
    reference: string;
    rank: number;
    type: string[];
    usage: string;
  }[];
  task1: string;  // Technical implementation details
  task2: string;  // Research objectives and expected outcomes
  citationValidation?: {
    validated: boolean;
    validationDate: string;
    totalPapers: number;
    highCitationPapers: number;
    topTierJournalPapers: number;
    recentQualityPapers: number;
    papersReplaced: number;
    apiKeyUsed: boolean;  // From prompt: Whether Semantic Scholar API key was used
  };
}

// File verification from ICISsetup
export interface FileVerification {
  interview: boolean;
  template: boolean;
  examples: boolean;
  dataFile: boolean;
  paperPdf: boolean;
  interviewPath?: string;
  templatePath?: string;
  dataFilePath?: string;
}

// Paper version tracking
export interface PaperVersion {
  version: number;
  filePath: string;
  timestamp: Date;
  pageCount?: number;
  figureCount?: number;
  tableCount?: number;
}

// Artifact storage
export interface Artifact {
  name: string;
  type: 'json' | 'csv' | 'tex' | 'py' | 'txt' | 'pdf' | 'png' | 'md';
  content: string;
  path: string;
  timestamp: Date;
}

// Main application state
export interface SimulationState {
  // Current workflow position
  currentStage: Stage;
  currentBuilderStep?: BuilderStep;
  stages: Record<Stage, StageStatus>;

  // Project/Participant info
  projectId?: string;
  projectName?: string;
  participantId: string;  // Required - derived from email, used in all filenames
  sessionTimestamp: string;  // ISO timestamp when session started

  // Interview data
  interviewData?: InterviewData;

  // Research planning
  researchType?: ResearchType;
  researchMetadata?: ResearchMetadata;
  hasDataFile: boolean;
  isPartialPaper: boolean;  // True for 2D/2E without data

  // Paper versions
  paperVersions: PaperVersion[];
  currentPaperVersion: number;
  paperContent: string;

  // Review loop
  rounds: RoundScore[];
  currentRound: number;
  lastFeedback: string;

  // Files
  files: FileVerification;
  artifacts: Artifact[];

  // Data alerts and summary (for supervisor)
  dataAlert?: string;  // Alert if data issues occurred during visualization
  dataSummary?: string;  // Summary of data analysis (dataset size, columns, distributions)

  // Logs
  logs: string[];
}

// Generate a session timestamp in format YYYYMMDD_HHMMSS
function generateSessionTimestamp(): string {
  const now = new Date();
  return now.toISOString().replace(/[-:]/g, '').replace('T', '_').substring(0, 15);
}

// Initial state
export const INITIAL_STATE: SimulationState = {
  currentStage: Stage.SETUP,
  currentBuilderStep: undefined,
  stages: {
    [Stage.SETUP]: StageStatus.ACTIVE,
    [Stage.BUILDER]: StageStatus.PENDING,
    [Stage.REVIEWER]: StageStatus.PENDING,
    [Stage.SUPERVISOR]: StageStatus.PENDING,
    [Stage.REVISER]: StageStatus.PENDING,
    [Stage.FINALIZE]: StageStatus.PENDING,
  },
  projectId: undefined,
  projectName: undefined,
  participantId: 'unknown',  // Will be set from interview file
  sessionTimestamp: generateSessionTimestamp(),
  interviewData: undefined,
  researchType: undefined,
  researchMetadata: undefined,
  hasDataFile: false,
  isPartialPaper: false,
  paperVersions: [],
  currentPaperVersion: 0,
  paperContent: "",
  rounds: [],
  currentRound: 1,
  lastFeedback: "",
  files: {
    interview: false,
    template: false,
    examples: false,
    dataFile: false,
    paperPdf: false,
  },
  artifacts: [],
  logs: [],
};

// Stage transition rules
export const STAGE_TRANSITIONS: Record<Stage, Stage[]> = {
  [Stage.SETUP]: [Stage.BUILDER],
  [Stage.BUILDER]: [Stage.REVIEWER],
  [Stage.REVIEWER]: [Stage.SUPERVISOR],
  [Stage.SUPERVISOR]: [Stage.REVISER, Stage.FINALIZE],  // Human decision point
  [Stage.REVISER]: [Stage.REVIEWER],  // Loop back for another review
  [Stage.FINALIZE]: [],  // Terminal state
};

// ============================================================
// Reference Validation Types (Semantic Scholar Integration)
// ============================================================

/**
 * Validation status for a reference
 * Based on NVIDIA citation validation best practices
 */
export enum ReferenceValidationStatus {
  VERIFIED = 'VERIFIED',       // Full match in Semantic Scholar (title + authors + year)
  PARTIAL = 'PARTIAL',         // Title matches, minor discrepancies
  UNVERIFIED = 'UNVERIFIED',   // No match found, but reference appears well-formed
  REJECTED = 'REJECTED',       // Contradicts SS data or clearly hallucinated
  DISCOVERED = 'DISCOVERED'    // Found via Semantic Scholar search (not from LLM)
}

/**
 * Semantic Scholar paper data
 */
export interface SemanticScholarPaper {
  paperId: string;
  title: string;
  authors: { authorId: string; name: string }[];
  year?: number;
  venue?: string;
  journal?: { name: string; volume?: string; pages?: string };
  citationCount?: number;
  influentialCitationCount?: number;
  doi?: string;
  url?: string;
  abstract?: string;
  fieldsOfStudy?: string[];
  openAccessPdf?: { url: string };
}

/**
 * Result of validating a single reference
 */
export interface ReferenceValidationResult {
  bibKey: string;                           // Citation key from BibTeX
  originalTitle: string;                    // Title from LLM-generated reference
  originalAuthors?: string[];               // Authors from LLM-generated reference
  originalYear?: number;                    // Year from LLM-generated reference
  status: ReferenceValidationStatus;
  confidence: number;                       // 0-1 confidence score
  ssMatch?: SemanticScholarPaper;           // Matched paper from Semantic Scholar
  discrepancies?: string[];                 // List of differences found
  source: 'LLM' | 'SS_SEARCH' | 'SS_CITATION_GRAPH';
}

/**
 * Complete validation report for all references
 */
export interface ReferenceValidationReport {
  timestamp: string;
  totalReferences: number;
  verified: number;
  partial: number;
  unverified: number;
  rejected: number;
  discovered: number;
  recencyScore: number;                     // % from 2020-2025
  verificationRate: number;                 // % VERIFIED or PARTIAL
  hallucinationRate: number;                // % REJECTED
  validatedReferences: ReferenceValidationResult[];
  discoveredReferences: ReferenceValidationResult[];
  errors: string[];
}

/**
 * Request to Semantic Scholar API for validation
 */
export interface SSValidateRequest {
  action: 'validate';
  bibtex: string;
}

/**
 * Request to Semantic Scholar API for keyword search
 */
export interface SSSearchRequest {
  action: 'search';
  keywords: string[];
  fieldsOfStudy?: string[];
  yearMin?: number;
  yearMax?: number;
  limit?: number;
}

/**
 * Request to Semantic Scholar API for citation graph traversal
 */
export interface SSCitationsRequest {
  action: 'citations';
  paperId: string;
  type: 'references' | 'citations';
  limit?: number;
}

/**
 * Union type for all Semantic Scholar API requests
 */
export type SSRequest = SSValidateRequest | SSSearchRequest | SSCitationsRequest;
