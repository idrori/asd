/**
 * File Service
 *
 * Handles reading and writing of oversight and feedback files
 * as specified in the ICISreview and ICISsupervisor prompts.
 *
 * In browser environment, uses localStorage to simulate file storage.
 * Files are stored with keys like 'icis/Data/oversight_v1.txt'
 */

import { ReviewScores, TrustworthinessScores, ErrorCounts } from '../types';

// Storage key prefix
const STORAGE_PREFIX = 'icis_files_';

/**
 * Oversight file structure matching ICISreview.txt prompt requirements
 */
export interface OversightFileData {
  version: number;
  paperId: string;
  timestamp: string;

  // TABLE 1: Review Scores Progression
  reviewScores: {
    novelty: number;
    significance: number;
    methodologicalRigor: number;
    clarity: number;
    relevance: number;
  };
  reviewComments: {
    novelty: string;
    significance: string;
    methodologicalRigor: string;
    clarity: string;
    relevance: string;
  };
  averageScore: number;

  // TABLE 2: Error Counts
  errorCounts: {
    majorErrors: number;
    minorErrors: number;
  };
  errorDetails: {
    majorErrors: string[];
    minorErrors: string[];
  };

  // TABLE 3: Trustworthiness Assessment
  trustworthiness: {
    reliability: number;
    reliabilityRationale: string;
    benevolence: number;
    benevolenceRationale: string;
    goalAlignment: number;
    goalAlignmentRationale: string;
  };

  // Critical Alerts
  criticalAlerts: {
    number: number;
    title: string;
    status: string;
    impact: string;
    details: string;
    actionRequired: string;
    consequence: string;
  }[];

  // History for progression display
  previousVersions?: {
    version: number;
    reviewScores: ReviewScores;
    errorCounts: ErrorCounts;
  }[];

  // Convergence assessment - can the paper be further improved?
  canImprove?: boolean;
  improvementPotential?: 'high' | 'medium' | 'low' | 'exhausted';
  convergenceReason?: string;
}

/**
 * Feedback file structure matching ICISreview.txt prompt requirements
 */
export interface FeedbackFileData {
  version: number;
  paperId: string;
  timestamp: string;

  // Structured feedback sections
  researchQuestion: string;
  method: string;
  potentialImpact: string;
  writing: string;

  // Categorized issues
  majorConcerns: string[];
  minorCorrections: string[];

  // Overall assessment
  overallAssessment: string;

  // Supervisor directives (added when supervisor continues to revision)
  supervisorDirectives?: {
    cycle: number;
    directives: string;
    timestamp: string;
  }[];
}

// Storage error types
export enum StorageErrorType {
  QUOTA_EXCEEDED = 'QUOTA_EXCEEDED',
  STORAGE_UNAVAILABLE = 'STORAGE_UNAVAILABLE',
  READ_ERROR = 'READ_ERROR',
  WRITE_ERROR = 'WRITE_ERROR'
}

export class StorageError extends Error {
  constructor(
    public type: StorageErrorType,
    public userMessage: string,
    public technicalDetails: string
  ) {
    super(userMessage);
    this.name = 'StorageError';
  }
}

// Check if localStorage is available
function isStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * Write a file to localStorage (simulating file system)
 * @throws StorageError if storage is unavailable or quota exceeded
 */
export function writeFile(path: string, content: string): void {
  if (!isStorageAvailable()) {
    throw new StorageError(
      StorageErrorType.STORAGE_UNAVAILABLE,
      'Local storage is not available. Your browser may be in private mode or storage is disabled.',
      'localStorage unavailable'
    );
  }

  const key = STORAGE_PREFIX + path.replace(/\\/g, '/');

  try {
    localStorage.setItem(key, content);
    console.log(`File written: ${path}`);
  } catch (error) {
    const err = error as Error;
    if (err.name === 'QuotaExceededError' || err.message?.includes('quota')) {
      throw new StorageError(
        StorageErrorType.QUOTA_EXCEEDED,
        'Storage quota exceeded. Please clear some space by deleting old data.',
        err.message
      );
    }
    throw new StorageError(
      StorageErrorType.WRITE_ERROR,
      `Failed to save file: ${path}`,
      err.message
    );
  }
}

/**
 * Read a file from localStorage
 * Returns null if file doesn't exist, throws on actual errors
 */
export function readFile(path: string): string | null {
  if (!isStorageAvailable()) {
    console.warn('localStorage unavailable, returning null for read');
    return null;
  }

  const key = STORAGE_PREFIX + path.replace(/\\/g, '/');

  try {
    return localStorage.getItem(key);
  } catch (error) {
    const err = error as Error;
    console.error(`Error reading file ${path}:`, err);
    throw new StorageError(
      StorageErrorType.READ_ERROR,
      `Failed to read file: ${path}`,
      err.message
    );
  }
}

/**
 * Check if a file exists
 */
export function fileExists(path: string): boolean {
  if (!isStorageAvailable()) {
    return false;
  }

  const key = STORAGE_PREFIX + path.replace(/\\/g, '/');

  try {
    return localStorage.getItem(key) !== null;
  } catch {
    return false;
  }
}

/**
 * List files matching a pattern (simple glob simulation)
 */
export function globFiles(pattern: string): string[] {
  const files: string[] = [];
  const regex = new RegExp(
    pattern
      .replace(/\*/g, '.*')
      .replace(/\//g, '\\/')
  );

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX)) {
      const path = key.substring(STORAGE_PREFIX.length);
      if (regex.test(path)) {
        files.push(path);
      }
    }
  }

  return files.sort();
}

/**
 * Get the latest version number for a file pattern
 */
export function getLatestVersion(pattern: string): number {
  const files = globFiles(pattern);
  let maxVersion = 0;

  for (const file of files) {
    const match = file.match(/_v(\d+)\./);
    if (match) {
      const version = parseInt(match[1], 10);
      if (version > maxVersion) {
        maxVersion = version;
      }
    }
  }

  return maxVersion;
}

/**
 * Write oversight file as specified in ICISreview.txt
 */
export function writeOversightFile(data: OversightFileData): string {
  const path = `icis/Data/oversight_v${data.version}.txt`;

  // Build the oversight content in the dashboard format specified in the prompt
  const content = buildOversightContent(data);

  writeFile(path, content);

  // Also store as JSON for programmatic access
  writeFile(path + '.json', JSON.stringify(data, null, 2));

  return path;
}

/**
 * Build oversight file content matching the prompt's dashboard format
 */
function buildOversightContent(data: OversightFileData): string {
  const lines: string[] = [];

  lines.push(`ID=${data.paperId}`);
  lines.push(`Version: ${data.version}`);
  lines.push(`Timestamp: ${data.timestamp}`);
  lines.push('');
  lines.push('================================================================================');
  lines.push('                     OVERSIGHT DASHBOARD');
  lines.push('================================================================================');
  lines.push('');

  // TABLE 1: Review Scores Progression
  lines.push('TABLE 1 - Review Scores Progression:');
  lines.push('------------------------------------------------------------------------');
  lines.push('| Criteria              | Score | Comment                              |');
  lines.push('|-----------------------|-------|--------------------------------------|');
  lines.push(`| Novelty               | ${data.reviewScores.novelty}     | ${data.reviewComments.novelty.substring(0, 36).padEnd(36)} |`);
  lines.push(`| Significance          | ${data.reviewScores.significance}     | ${data.reviewComments.significance.substring(0, 36).padEnd(36)} |`);
  lines.push(`| Methodological Rigor  | ${data.reviewScores.methodologicalRigor}     | ${data.reviewComments.methodologicalRigor.substring(0, 36).padEnd(36)} |`);
  lines.push(`| Clarity               | ${data.reviewScores.clarity}     | ${data.reviewComments.clarity.substring(0, 36).padEnd(36)} |`);
  lines.push(`| Relevance             | ${data.reviewScores.relevance}     | ${data.reviewComments.relevance.substring(0, 36).padEnd(36)} |`);
  lines.push('|-----------------------|-------|--------------------------------------|');
  lines.push(`| AVERAGE               | ${data.averageScore.toFixed(1)}   |                                      |`);
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // TABLE 2: Error Counts
  lines.push('TABLE 2 - Error Counts:');
  lines.push('------------------------------------------------------------------------');
  lines.push('| Category        | Count | Details                                  |');
  lines.push('|-----------------|-------|------------------------------------------|');
  const majorDetail = data.errorDetails.majorErrors.length > 0
    ? data.errorDetails.majorErrors[0].substring(0, 40)
    : 'None';
  const minorDetail = data.errorDetails.minorErrors.length > 0
    ? data.errorDetails.minorErrors[0].substring(0, 40)
    : 'None';
  lines.push(`| Major Errors    | ${String(data.errorCounts.majorErrors).padStart(5)} | ${majorDetail.padEnd(40)} |`);
  lines.push(`| Minor Errors    | ${String(data.errorCounts.minorErrors).padStart(5)} | ${minorDetail.padEnd(40)} |`);
  lines.push('|-----------------|-------|------------------------------------------|');
  lines.push(`| TOTAL           | ${String(data.errorCounts.majorErrors + data.errorCounts.minorErrors).padStart(5)} |                                          |`);
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // TABLE 3: Trustworthiness Assessment
  lines.push('TABLE 3 - Trustworthiness Assessment (1-7 scale):');
  lines.push('------------------------------------------------------------------------');
  lines.push('| Dimension       | Score | Rationale                               |');
  lines.push('|-----------------|-------|-----------------------------------------|');
  lines.push(`| Reliability     | ${data.trustworthiness.reliability}     | ${data.trustworthiness.reliabilityRationale.substring(0, 39).padEnd(39)} |`);
  lines.push(`| Benevolence     | ${data.trustworthiness.benevolence}     | ${data.trustworthiness.benevolenceRationale.substring(0, 39).padEnd(39)} |`);
  lines.push(`| Goal Alignment  | ${data.trustworthiness.goalAlignment}     | ${data.trustworthiness.goalAlignmentRationale.substring(0, 39).padEnd(39)} |`);
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // Critical Alerts
  lines.push('CRITICAL ALERTS:');
  lines.push('------------------------------------------------------------------------');
  if (data.criticalAlerts.length === 0) {
    lines.push('None - paper is progressing well');
  } else {
    for (const alert of data.criticalAlerts) {
      lines.push(`CRITICAL ALERT ${alert.number}: ${alert.title} (BLOCKING ISSUE)`);
      lines.push(`  Status: ${alert.status}`);
      lines.push(`  Impact: ${alert.impact}`);
      lines.push(`  Details: ${alert.details}`);
      lines.push(`  Action Required: ${alert.actionRequired}`);
      lines.push(`  Consequence if Unfixed: ${alert.consequence}`);
      lines.push('');
    }
  }
  lines.push('------------------------------------------------------------------------');
  lines.push('');
  lines.push('================================================================================');

  return lines.join('\n');
}

/**
 * Write feedback file as specified in ICISreview.txt
 */
export function writeFeedbackFile(data: FeedbackFileData): string {
  const path = `icis/Data/feedback_v${data.version}.txt`;

  const lines: string[] = [];

  lines.push(`ID=${data.paperId}`);
  lines.push(`Version: ${data.version}`);
  lines.push(`Timestamp: ${data.timestamp}`);
  lines.push('');
  lines.push('================================================================================');
  lines.push('                     CONSTRUCTIVE FEEDBACK');
  lines.push('================================================================================');
  lines.push('');

  lines.push('## Research Question and Contribution');
  lines.push(data.researchQuestion);
  lines.push('');

  lines.push('## Method');
  lines.push(data.method);
  lines.push('');

  lines.push('## Potential Impact');
  lines.push(data.potentialImpact);
  lines.push('');

  lines.push('## Writing Quality');
  lines.push(data.writing);
  lines.push('');

  lines.push('## Major Concerns');
  data.majorConcerns.forEach((concern, i) => {
    lines.push(`${i + 1}. ${concern}`);
  });
  lines.push('');

  lines.push('## Minor Corrections');
  data.minorCorrections.forEach((correction, i) => {
    lines.push(`${i + 1}. ${correction}`);
  });
  lines.push('');

  lines.push('## Overall Assessment');
  lines.push(data.overallAssessment);
  lines.push('');

  // Add supervisor directives if present
  if (data.supervisorDirectives && data.supervisorDirectives.length > 0) {
    lines.push('================================================================================');
    lines.push('                     SUPERVISOR DIRECTIVES');
    lines.push('================================================================================');
    for (const directive of data.supervisorDirectives) {
      lines.push('');
      lines.push(`Cycle ${directive.cycle} - ${directive.timestamp}`);
      lines.push('------------------------------------------------------------------------');
      lines.push(directive.directives);
    }
  }

  lines.push('');
  lines.push('================================================================================');

  const content = lines.join('\n');
  writeFile(path, content);

  // Also store as JSON for programmatic access
  writeFile(path + '.json', JSON.stringify(data, null, 2));

  return path;
}

/**
 * Read oversight file and parse it
 */
export function readOversightFile(version: number): OversightFileData | null {
  const jsonPath = `icis/Data/oversight_v${version}.txt.json`;
  const jsonContent = readFile(jsonPath);

  if (jsonContent) {
    try {
      return JSON.parse(jsonContent);
    } catch (e) {
      console.error('Failed to parse oversight JSON:', e);
    }
  }

  return null;
}

/**
 * Read feedback file and parse it
 */
export function readFeedbackFile(version: number): FeedbackFileData | null {
  const jsonPath = `icis/Data/feedback_v${version}.txt.json`;
  const jsonContent = readFile(jsonPath);

  if (jsonContent) {
    try {
      return JSON.parse(jsonContent);
    } catch (e) {
      console.error('Failed to parse feedback JSON:', e);
    }
  }

  return null;
}

/**
 * Get all oversight data for progression display
 */
export function getOversightProgression(): OversightFileData[] {
  const files = globFiles('icis/Data/oversight_v.*\\.txt\\.json');
  const data: OversightFileData[] = [];

  for (const file of files) {
    const content = readFile(file);
    if (content) {
      try {
        data.push(JSON.parse(content));
      } catch (e) {
        console.error('Failed to parse oversight file:', file, e);
      }
    }
  }

  return data.sort((a, b) => a.version - b.version);
}

/**
 * Append supervisor directives to feedback file
 */
export function appendSupervisorDirectives(
  version: number,
  cycle: number,
  directives: string
): void {
  const data = readFeedbackFile(version);
  if (data) {
    if (!data.supervisorDirectives) {
      data.supervisorDirectives = [];
    }
    data.supervisorDirectives.push({
      cycle,
      directives,
      timestamp: new Date().toISOString()
    });
    writeFeedbackFile(data);
  }
}

/**
 * Write supervisor decision file as specified in ICISsupervisor.txt
 */
export function writeSupervisorDecision(
  decision: 'CONTINUE' | 'FINALIZE',
  cycle: number,
  finalScores?: {
    averageReviewScore: number;
    trustworthiness: TrustworthinessScores;
    majorErrors: number;
  }
): string {
  const path = 'icis/Data/supervisor_decision.txt';

  const lines: string[] = [];
  lines.push(`Decision: ${decision}`);
  lines.push(`Cycle: ${cycle}`);
  lines.push(`Timestamp: ${new Date().toISOString()}`);

  if (finalScores) {
    lines.push('');
    lines.push('Final Scores:');
    lines.push(`  Average Review Score: ${finalScores.averageReviewScore.toFixed(1)}/5`);
    lines.push(`  Reliability: ${finalScores.trustworthiness.reliability}/7`);
    lines.push(`  Benevolence: ${finalScores.trustworthiness.benevolence}/7`);
    lines.push(`  Goal Alignment: ${finalScores.trustworthiness.goalAlignment}/7`);
    lines.push(`  Major Errors: ${finalScores.majorErrors}`);
  }

  writeFile(path, lines.join('\n'));
  return path;
}

/**
 * Clear all stored files (for testing/reset)
 */
export function clearAllFiles(): void {
  const keysToRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX)) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach(key => localStorage.removeItem(key));
  console.log(`Cleared ${keysToRemove.length} files`);
}

// --- Paper File Management ---

/**
 * Write paper content to storage
 * Creates both .tex and readable versions
 */
export function writePaperFile(version: number, content: string, paperId: string = 'icis_paper'): string {
  const texPath = `icis/Paper/${paperId}_v${version}.tex`;

  writeFile(texPath, content);
  console.log(`Paper saved: ${texPath}`);

  return texPath;
}

/**
 * Read paper content from storage
 */
export function readPaperFile(version: number, paperId: string = 'icis_paper'): string | null {
  const texPath = `icis/Paper/${paperId}_v${version}.tex`;
  return readFile(texPath);
}

/**
 * Get all paper versions from storage
 */
export function getPaperVersions(paperId: string = 'icis_paper'): number[] {
  const files = globFiles(`icis/Paper/${paperId}_v.*\\.tex`);
  const versions: number[] = [];

  for (const file of files) {
    const match = file.match(/_v(\d+)\.tex$/);
    if (match) {
      versions.push(parseInt(match[1], 10));
    }
  }

  return versions.sort((a, b) => a - b);
}

/**
 * Get the latest paper version number
 */
export function getLatestPaperVersion(paperId: string = 'icis_paper'): number {
  const versions = getPaperVersions(paperId);
  return versions.length > 0 ? Math.max(...versions) : 0;
}

/**
 * Download paper as a file (browser download)
 * This triggers an actual file download for the user
 */
export function downloadPaper(version: number, paperId: string = 'icis_paper'): void {
  const content = readPaperFile(version, paperId);
  if (!content) {
    console.error(`Paper version ${version} not found`);
    return;
  }

  const filename = `${paperId}_v${version}.tex`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
  console.log(`Downloaded: ${filename}`);
}

/**
 * Export all paper versions as a zip (for final submission)
 * Note: In a real implementation, this would use a library like JSZip
 */
export function exportAllPapers(paperId: string = 'icis_paper'): void {
  const versions = getPaperVersions(paperId);
  console.log(`Exporting ${versions.length} paper versions for ${paperId}`);

  // For now, just download the latest version
  if (versions.length > 0) {
    downloadPaper(Math.max(...versions), paperId);
  }
}
