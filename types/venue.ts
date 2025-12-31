/**
 * Venue Configuration Types
 *
 * Types for supporting the full Google Scholar academic venue taxonomy.
 * Supports both journals and conferences across 8 major categories.
 */

/**
 * Google Scholar primary categories (8 total)
 */
export type ScholarCategory =
  | 'business-economics-management'
  | 'chemical-material-sciences'
  | 'engineering-computer-science'
  | 'health-medical-sciences'
  | 'humanities-literature-arts'
  | 'life-sciences-earth-sciences'
  | 'physics-mathematics'
  | 'social-sciences';

/**
 * Subcategory is a dynamic string (200+ possible values)
 */
export type ScholarSubcategory = string;

/**
 * Venue type - journal or conference
 */
export type VenueType = 'journal' | 'conference';

/**
 * Dynamic venue ID (no longer a hard-coded union)
 */
export type VenueId = string;

/**
 * Citation style formats supported
 */
export type CitationStyle = 'apa7' | 'apa6' | 'ieee' | 'acm' | 'chicago' | 'mla' | 'nature' | 'vancouver';

/**
 * Paper format templates
 */
export type FormatStyle =
  | 'icis'
  | 'ecis'
  | 'acm-sigconf'
  | 'acm-chi'
  | 'ieee'
  | 'aaai'
  | 'neurips'
  | 'aom'
  | 'informs'
  | 'elsevier'
  | 'springer'
  | 'nature'
  | 'science'
  | 'plos';

/**
 * Category metadata for UI display
 */
export interface CategoryMetadata {
  id: ScholarCategory;
  name: string;
  description: string;
  icon: string;  // Lucide icon name
  color: string; // Tailwind color class
  subcategoryCount: number;
  venueCount: number;
}

/**
 * Subcategory metadata for UI display
 */
export interface SubcategoryMetadata {
  id: string;
  name: string;
  category: ScholarCategory;
  venueCount: number;
}

/**
 * Basic venue metadata for lists/selection
 */
export interface VenueMetadata {
  id: VenueId;
  name: string;
  acronym: string;
  category: ScholarCategory;
  subcategory: ScholarSubcategory;
  venueType: VenueType;
  description: string;
  verified: boolean;
  h5Index?: number;  // Google Scholar h5-index
  h5Median?: number; // Google Scholar h5-median
}

/**
 * Paper structure configuration
 */
export interface PaperStructure {
  sections: string[];
  abstractRequired: boolean;
  abstractMaxWords: number;
  keywordsRequired: boolean;
  keywordsCount?: { min: number; max: number };
  appendicesAllowed: boolean;
  supplementaryAllowed: boolean;
}

/**
 * Paper limits configuration
 */
export interface PaperLimits {
  minPages: number;
  maxPages: number;
  referencesCountTowardLimit: boolean;
  maxWords?: number;
  minReferences?: number;
  maxReferences?: number;
}

/**
 * Template formatting configuration
 */
export interface TemplateConfig {
  formatStyle: FormatStyle;
  fontFamily: string;
  fontSize: number;
  citationStyle: CitationStyle;
  lineSpacing: number;
  marginInches: number;
  paperSize: 'letter' | 'a4';
  twoColumn: boolean;
  anonymousSubmission: boolean;
}

/**
 * Review configuration
 */
export interface ReviewConfig {
  criteriaFile: string;
  minScoreForApproval: number;
  maxRevisionRounds: number;
  dimensions: string[];
  includeTrustworthiness: boolean;
}

/**
 * Prompt file paths configuration
 */
export interface PromptsConfig {
  builder: string;
  reviewer: string;
  supervisor: string;
  reviser: string;
  finalize: string;
  setup: string;
  template: string;
  infographic?: string;
  dataTable?: string;
}

/**
 * Calibration configuration
 */
export interface CalibrationConfig {
  description: string;
  exemplarCount: number;
  topJournals: string[];
  topConferences: string[];
  methodologyEmphasis: string[];
}

/**
 * Official venue links
 */
export interface OfficialLinks {
  callForPapers?: string;
  submissionInstructions?: string;
  reviewerGuidelines?: string;
  styleFiles?: string;
  authorKit?: string;
  submissionPortal?: string;
  openReview?: string;
  website?: string;
}

/**
 * Base venue configuration (shared between journals and conferences)
 */
export interface BaseVenueConfig extends VenueMetadata {
  year: number;
  website: string;
  officialLinks?: OfficialLinks;
  paperLimits: PaperLimits;
  paperStructure: PaperStructure;
  template: TemplateConfig;
  review: ReviewConfig;
  prompts: PromptsConfig;
  calibration: CalibrationConfig;
  notes?: string[];
  lastUpdated: string;
}

/**
 * Conference-specific configuration
 */
export interface ConferenceVenueConfig extends BaseVenueConfig {
  venueType: 'conference';
  submissionDeadline?: string;
  notificationDate?: string;
  conferenceDate?: string;
  location?: string;
}

/**
 * Journal-specific configuration
 */
export interface JournalVenueConfig extends BaseVenueConfig {
  venueType: 'journal';
  impactFactor?: number;
  publisher: string;
  openAccess: boolean;
  publicationFrequency?: string;  // e.g., "quarterly", "monthly"
  averageReviewTime?: string;     // e.g., "8-12 weeks"
}

/**
 * Union type for any venue config
 */
export type VenueConfig = ConferenceVenueConfig | JournalVenueConfig;

/**
 * Venues registry structure
 */
export interface VenuesRegistry {
  schemaVersion: string;
  defaultVenue: VenueId;
  lastUpdated: string;
  categories: Record<ScholarCategory, CategoryRegistryEntry>;
  venues: Record<VenueId, VenueRegistryEntry>;
}

/**
 * Category entry in registry
 */
export interface CategoryRegistryEntry {
  name: string;
  icon: string;
  color: string;
  subcategories: Record<string, SubcategoryRegistryEntry>;
}

/**
 * Subcategory entry in registry
 */
export interface SubcategoryRegistryEntry {
  name: string;
  venues: VenueId[];
}

/**
 * Venue entry in registry (lightweight)
 */
export interface VenueRegistryEntry {
  type: VenueType;
  category: ScholarCategory;
  subcategory: string;
  name: string;
  acronym: string;
  verified: boolean;
  h5Index?: number;
}

/**
 * Search result for venues
 */
export interface VenueSearchResult {
  venue: VenueMetadata;
  matchType: 'name' | 'acronym' | 'description' | 'category';
  score: number;
}

/**
 * User preferences for venue selection
 */
export interface VenuePreferences {
  favorites: VenueId[];
  recent: VenueId[];
  defaultCategory?: ScholarCategory;
  showJournals: boolean;
  showConferences: boolean;
}
