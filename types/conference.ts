/**
 * Conference Configuration Types
 *
 * This module defines the configuration schema for supporting multiple academic conferences.
 * Each conference has its own formatting requirements, review criteria, and prompts.
 */

/**
 * Citation style formats supported
 */
export type CitationStyle = 'apa7' | 'apa6' | 'ieee' | 'acm' | 'chicago' | 'mla';

/**
 * Paper format templates
 */
export type FormatStyle = 'icis' | 'ecis' | 'acm-sigconf' | 'acm-chi' | 'ieee' | 'aaai' | 'neurips' | 'aom' | 'informs';

/**
 * Conference tier indicating similarity to ICIS and adaptation required
 */
export type ConferenceTier = 1 | 2 | 3;

/**
 * Research domains/fields
 */
export type ResearchDomain =
  | 'information-systems'
  | 'management'
  | 'operations-research'
  | 'decision-sciences'
  | 'human-computer-interaction'
  | 'machine-learning'
  | 'artificial-intelligence';

/**
 * Paper structure configuration
 */
export interface PaperStructure {
  /** Required sections in order */
  sections: string[];
  /** Whether abstract is required */
  abstractRequired: boolean;
  /** Abstract word limit */
  abstractMaxWords: number;
  /** Whether keywords are required */
  keywordsRequired: boolean;
  /** Number of keywords required */
  keywordsCount?: { min: number; max: number };
  /** Whether appendices are allowed */
  appendicesAllowed: boolean;
  /** Whether supplementary materials are allowed */
  supplementaryAllowed: boolean;
}

/**
 * Paper limits configuration
 */
export interface PaperLimits {
  /** Minimum page count */
  minPages: number;
  /** Maximum page count (excluding references) */
  maxPages: number;
  /** Whether references count toward page limit */
  referencesCountTowardLimit: boolean;
  /** Maximum word count (alternative to pages) */
  maxWords?: number;
  /** Minimum references required */
  minReferences?: number;
  /** Maximum references allowed */
  maxReferences?: number;
}

/**
 * Template formatting configuration
 */
export interface TemplateConfig {
  /** Format style identifier */
  formatStyle: FormatStyle;
  /** Primary font family */
  fontFamily: string;
  /** Body text font size in points */
  fontSize: number;
  /** Citation style */
  citationStyle: CitationStyle;
  /** Line spacing (1.0, 1.5, 2.0) */
  lineSpacing: number;
  /** Margin size in inches */
  marginInches: number;
  /** Paper size */
  paperSize: 'letter' | 'a4';
  /** Whether to use two-column layout */
  twoColumn: boolean;
  /** Whether anonymous submission is required */
  anonymousSubmission: boolean;
}

/**
 * Review configuration
 */
export interface ReviewConfig {
  /** Path to review criteria file (relative to conference directory) */
  criteriaFile: string;
  /** Minimum average score for approval (1-5 scale) */
  minScoreForApproval: number;
  /** Maximum revision rounds allowed */
  maxRevisionRounds: number;
  /** Review dimensions to evaluate */
  dimensions: string[];
  /** Whether trustworthiness assessment is included */
  includeTrustworthiness: boolean;
}

/**
 * Prompt file paths configuration
 */
export interface PromptsConfig {
  /** Builder prompt file */
  builder: string;
  /** Reviewer prompt file */
  reviewer: string;
  /** Supervisor prompt file */
  supervisor: string;
  /** Reviser prompt file */
  reviser: string;
  /** Finalize prompt file */
  finalize: string;
  /** Setup prompt file */
  setup: string;
  /** Paper template file */
  template: string;
  /** Infographic/conceptual figure prompt (optional) */
  infographic?: string;
  /** Data table prompt (optional) */
  dataTable?: string;
}

/**
 * Calibration configuration
 */
export interface CalibrationConfig {
  /** Description of calibration approach */
  description: string;
  /** Number of exemplar papers used for calibration */
  exemplarCount: number;
  /** Related top-tier journals for reference quality */
  topJournals: string[];
  /** Related top-tier conferences */
  topConferences: string[];
  /** Key methodological approaches emphasized */
  methodologyEmphasis: string[];
}

/**
 * Official conference links
 */
export interface OfficialLinks {
  /** Call for papers URL */
  callForPapers?: string;
  /** Submission instructions URL */
  submissionInstructions?: string;
  /** Reviewer guidelines URL */
  reviewerGuidelines?: string;
  /** Style files / author kit URL */
  styleFiles?: string;
  /** Author kit URL (alternative to styleFiles) */
  authorKit?: string;
  /** Submission portal URL */
  submissionPortal?: string;
  /** OpenReview URL (for ICLR, etc.) */
  openReview?: string;
}

/**
 * Main conference configuration interface
 */
export interface ConferenceConfig {
  /** Unique conference identifier (lowercase, no spaces) */
  id: string;
  /** Full conference name */
  name: string;
  /** Conference acronym */
  acronym: string;
  /** Conference year */
  year: number;
  /** Conference tier (1=most similar to ICIS, 3=requires most adaptation) */
  tier: ConferenceTier;
  /** Research domain */
  domain: ResearchDomain;
  /** Conference website (for reference, not used programmatically) */
  website: string;
  /** Brief description of the conference */
  description: string;

  /** Official conference links (call for papers, submission instructions, etc.) */
  officialLinks?: OfficialLinks;

  /** Paper requirements */
  paperLimits: PaperLimits;

  /** Paper structure requirements */
  paperStructure: PaperStructure;

  /** Formatting configuration */
  template: TemplateConfig;

  /** Review configuration */
  review: ReviewConfig;

  /** Prompt file paths */
  prompts: PromptsConfig;

  /** Calibration configuration */
  calibration: CalibrationConfig;

  /** Conference-specific notes for paper generation */
  notes?: string[];

  /** Whether this conference configuration is fully verified */
  verified: boolean;

  /** Last updated timestamp */
  lastUpdated: string;
}

/**
 * Conference registry - maps conference IDs to their configurations
 */
export interface ConferenceRegistry {
  /** Available conferences */
  conferences: Record<string, ConferenceConfig>;
  /** Default conference ID */
  defaultConference: string;
  /** Version of the registry schema */
  schemaVersion: string;
}

/**
 * Supported conference IDs
 */
export type ConferenceId =
  // Tier 1: Information Systems
  | 'icis'
  | 'ecis'
  | 'pacis'
  | 'amcis'
  | 'hicss'
  // Tier 2: Management/Business
  | 'aom'
  | 'informs'
  | 'dsi'
  // Tier 3: Computer Science
  | 'chi'
  | 'neurips'
  | 'icml'
  | 'iclr'
  | 'aaai';

/**
 * Conference metadata for UI display
 */
export interface ConferenceMetadata {
  id: ConferenceId;
  name: string;
  acronym: string;
  tier: ConferenceTier;
  domain: ResearchDomain;
  description: string;
  verified: boolean;
}
