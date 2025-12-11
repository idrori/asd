/**
 * ICISsupervisor Service
 *
 * Handles the human-in-the-loop supervisor stage based on ICISsupervisor1.txt
 *
 * Responsibilities:
 * - Read oversight data from ICISreview (status comes from oversight file)
 * - Generate supervisor dashboard (Step 2)
 * - Present decision options to human supervisor (Step 3)
 * - Execute and record decisions (Step 4)
 * - Verify completion (Step 5)
 *
 * Note: Status (ON_TRACK/ATTENTION_NEEDED) is determined by ICISreview
 * and passed through the oversight file - NOT calculated here.
 */

import { ReviewScores, TrustworthinessScores, ErrorCounts } from '../types';

// ============================================================================
// Enums and Constants
// ============================================================================

export enum SupervisorDecision {
  CONTINUE_REVISION = 'continue',
  FINALIZE = 'finalize',
  ABORT = 'abort',
}

export enum SupervisorStatus {
  ON_TRACK = 'ON_TRACK',
  ATTENTION_NEEDED = 'ATTENTION_NEEDED',
}

/**
 * Configuration from ICISsupervisor.txt Notes
 */
export const SUPERVISOR_CONFIG = {
  MAX_RECOMMENDED_CYCLES: 3,  // Warn if approaching this (from Notes section)
};

// ============================================================================
// Interfaces
// ============================================================================

/**
 * Full supervisor input matching ICISsupervisor.txt Step 1
 * Data extracted from oversight file created by ICISreview
 */
export interface SupervisorInput {
  roundNumber: number;
  reviewScores: ReviewScores;           // All 5 criteria (1-5 scale)
  trustworthinessScores: TrustworthinessScores;  // All 3 dimensions (1-7 scale)
  errorCounts: ErrorCounts;             // Major and minor counts
  criticalAlerts: string[];             // From oversight file CRITICAL ALERTS section
  feedbackSummary: string;              // From oversight file LATEST FEEDBACK section
  status: SupervisorStatus;             // Status from oversight file (ON_TRACK or ATTENTION_NEEDED)
  statusReasons?: string[];             // Reasons for ATTENTION_NEEDED status (from oversight)
  // History for progression tables (from TABLE 1 and TABLE 2 version columns)
  scoresHistory?: ReviewScores[];
  errorsHistory?: ErrorCounts[];
}

/**
 * Supervisor output with decision and directives
 */
export interface SupervisorOutput {
  decision: SupervisorDecision;
  directives: string;                   // Human's specific instructions
  priorityActions: string[];            // Up to 3 priority items
  cycle: number;
  timestamp: Date;
}

/**
 * Complete supervision record
 */
export interface SupervisionRecord {
  roundNumber: number;
  input: SupervisorInput;
  output: SupervisorOutput;
  status: SupervisorStatus;
}

/**
 * Dashboard structure matching ICISsupervisor.txt Step 2
 */
export interface SupervisorDashboard {
  cycle: number;
  status: SupervisorStatus;
  statusReasons: string[];

  // TABLE 1: Review Scores Progression
  scoresTable: {
    criteria: string;
    versions: number[];
    latestComment: string;
  }[];
  scoresAverage: number[];
  scoresTrend: string;

  // TABLE 2: Error Counts Progression
  errorsTable: {
    category: string;
    versions: number[];
    remainingIssues: string;
  }[];
  totalErrors: number[];
  errorReduction: string;

  // TABLE 3: Trustworthiness Assessment
  trustworthinessTable: {
    dimension: string;
    score: number;
    rationale: string;
  }[];

  // Critical Alerts
  criticalAlerts: string[];

  // Latest Feedback
  feedbackSummary: string;

  // Recommendation
  recommendation: SupervisorDecision;
  recommendationReason: string;
  priorityActions: string[];
}


// ============================================================================
// Dashboard Generation Functions
// ============================================================================

/**
 * Generate the full supervisor dashboard
 * From ICISsupervisor.txt Step 2
 * Status comes from the oversight file (input), not calculated here
 */
export function generateDashboard(
  input: SupervisorInput,
  scoresHistory: ReviewScores[] = [],
  errorsHistory: ErrorCounts[] = []
): SupervisorDashboard {
  // Status comes directly from oversight file, not calculated
  const status = input.status;
  const reasons = input.statusReasons || [];

  // Include current scores in history
  const allScores = [...scoresHistory, input.reviewScores];
  const allErrors = [...errorsHistory, input.errorCounts];

  // TABLE 1: Review Scores Progression
  const scoresTable = [
    { criteria: 'Novelty', key: 'novelty' as const },
    { criteria: 'Significance', key: 'significance' as const },
    { criteria: 'Methodological Rigor', key: 'methodologicalRigor' as const },
    { criteria: 'Clarity', key: 'clarity' as const },
    { criteria: 'Relevance', key: 'relevance' as const },
  ].map(({ criteria, key }) => ({
    criteria,
    versions: allScores.map(s => s[key]),
    latestComment: getScoreComment(input.reviewScores[key])
  }));

  // Calculate averages per version
  const scoresAverage = allScores.map(s =>
    (s.novelty + s.significance + s.methodologicalRigor + s.clarity + s.relevance) / 5
  );

  // Determine trend
  const scoresTrend = scoresAverage.length > 1
    ? scoresAverage[scoresAverage.length - 1] > scoresAverage[0]
      ? `Improving (+${(scoresAverage[scoresAverage.length - 1] - scoresAverage[0]).toFixed(1)})`
      : scoresAverage[scoresAverage.length - 1] < scoresAverage[0]
        ? `Declining (${(scoresAverage[scoresAverage.length - 1] - scoresAverage[0]).toFixed(1)})`
        : 'Stable'
    : `Initial: ${scoresAverage[0]?.toFixed(1) || 'N/A'}`;

  // TABLE 2: Error Counts Progression
  const errorsTable = [
    {
      category: 'Major Errors',
      versions: allErrors.map(e => e.majorErrors),
      remainingIssues: input.errorCounts.majorErrors > 0
        ? 'Computational errors, logical flaws'
        : 'None'
    },
    {
      category: 'Minor Errors',
      versions: allErrors.map(e => e.minorErrors),
      remainingIssues: input.errorCounts.minorErrors > 0
        ? 'Typos, formatting, missing refs'
        : 'None'
    }
  ];

  const totalErrors = allErrors.map(e => e.majorErrors + e.minorErrors);
  const errorReduction = totalErrors.length > 1 && totalErrors[0] > 0
    ? `${Math.round((1 - totalErrors[totalErrors.length - 1] / totalErrors[0]) * 100)}% reduction from v1`
    : 'N/A';

  // TABLE 3: Trustworthiness Assessment
  const trustworthinessTable = [
    {
      dimension: 'Reliability',
      score: input.trustworthinessScores.reliability,
      rationale: getTrustworthinessRationale('reliability', input.trustworthinessScores.reliability)
    },
    {
      dimension: 'Benevolence',
      score: input.trustworthinessScores.benevolence,
      rationale: getTrustworthinessRationale('benevolence', input.trustworthinessScores.benevolence)
    },
    {
      dimension: 'Goal Alignment',
      score: input.trustworthinessScores.goalAlignment,
      rationale: getTrustworthinessRationale('goalAlignment', input.trustworthinessScores.goalAlignment)
    }
  ];

  // Generate recommendation
  const isOnTrack = status === SupervisorStatus.ON_TRACK;
  const recommendation = isOnTrack
    ? SupervisorDecision.FINALIZE
    : SupervisorDecision.CONTINUE_REVISION;

  const avgScore = scoresAverage[scoresAverage.length - 1] || 0;
  const recommendationReason = isOnTrack
    ? `All quality thresholds met. Average review score: ${avgScore.toFixed(1)}/5`
    : `Issues requiring attention: ${reasons.slice(0, 3).join('; ')}`;

  // Priority actions (top 3 issues)
  const priorityActions = reasons.slice(0, 3).map((reason, i) =>
    `${i + 1}. Address: ${reason}`
  );

  return {
    cycle: input.roundNumber,
    status,
    statusReasons: reasons,
    scoresTable,
    scoresAverage,
    scoresTrend,
    errorsTable,
    totalErrors,
    errorReduction,
    trustworthinessTable,
    criticalAlerts: input.criticalAlerts,
    feedbackSummary: input.feedbackSummary,
    recommendation,
    recommendationReason,
    priorityActions
  };
}

/**
 * Get comment for a review score
 */
function getScoreComment(score: number): string {
  if (score >= 4.5) return 'Excellent';
  if (score >= 4) return 'Good - meets threshold';
  if (score >= 3) return 'Needs improvement';
  if (score >= 2) return 'Significant concerns';
  return 'Critical - requires major revision';
}

/**
 * Get rationale for trustworthiness dimension
 * Provides descriptive text based on score level (1-7 scale)
 */
function getTrustworthinessRationale(dimension: string, score: number): string {
  if (score >= 6) {
    return `High ${dimension} demonstrated throughout the process`;
  } else if (score >= 5) {
    return `Good ${dimension} - solid performance`;
  } else if (score >= 4) {
    return `Moderate ${dimension} - some concerns`;
  } else {
    return `Low ${dimension} - review needed`;
  }
}

// ============================================================================
// Dashboard Formatting Functions
// ============================================================================

/**
 * Format dashboard as text for display
 * Matches ICISsupervisor.txt Step 2 format
 */
export function formatDashboardText(dashboard: SupervisorDashboard): string {
  const lines: string[] = [];

  lines.push('================================================================================');
  lines.push('                        SUPERVISOR DASHBOARD');
  lines.push(`                        Revision Cycle: ${dashboard.cycle}`);
  lines.push('================================================================================');
  lines.push('');
  lines.push(`STATUS: ${dashboard.status === SupervisorStatus.ON_TRACK ? 'ON TRACK' : 'ATTENTION NEEDED'}`);
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // TABLE 1: Review Scores Progression
  lines.push('TABLE 1: REVIEW SCORES PROGRESSION');
  lines.push('------------------------------------------------------------------------');

  const versionHeaders = dashboard.scoresTable[0]?.versions.map((_, i) => `v${i + 1}`).join(' | ') || '';
  lines.push(`| Criteria              | ${versionHeaders} | Latest Comment            |`);
  lines.push('|-----------------------|' + '----|'.repeat(dashboard.scoresTable[0]?.versions.length || 1) + '---------------------------|');

  for (const row of dashboard.scoresTable) {
    const versions = row.versions.map(v => v.toString().padStart(3)).join(' | ');
    lines.push(`| ${row.criteria.padEnd(21)} | ${versions} | ${row.latestComment.padEnd(25)} |`);
  }

  const avgVersions = dashboard.scoresAverage.map(v => v.toFixed(1).padStart(3)).join(' | ');
  lines.push('|-----------------------|' + '----|'.repeat(dashboard.scoresAverage.length) + '---------------------------|');
  lines.push(`| AVERAGE               | ${avgVersions} | ${dashboard.scoresTrend.padEnd(25)} |`);
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // TABLE 2: Error Counts Progression
  lines.push('TABLE 2: ERROR COUNTS PROGRESSION');
  lines.push('------------------------------------------------------------------------');

  const errorHeaders = dashboard.errorsTable[0]?.versions.map((_, i) => `v${i + 1}`).join(' | ') || '';
  lines.push(`| Category        | ${errorHeaders} | Remaining Issues              |`);
  lines.push('|-----------------|' + '----|'.repeat(dashboard.errorsTable[0]?.versions.length || 1) + '-------------------------------|');

  for (const row of dashboard.errorsTable) {
    const versions = row.versions.map(v => v.toString().padStart(3)).join(' | ');
    lines.push(`| ${row.category.padEnd(15)} | ${versions} | ${row.remainingIssues.padEnd(29)} |`);
  }

  const totalVersions = dashboard.totalErrors.map(v => v.toString().padStart(3)).join(' | ');
  lines.push('|-----------------|' + '----|'.repeat(dashboard.totalErrors.length) + '-------------------------------|');
  lines.push(`| TOTAL           | ${totalVersions} | ${dashboard.errorReduction.padEnd(29)} |`);
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // TABLE 3: Trustworthiness Assessment
  lines.push('TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)');
  lines.push('------------------------------------------------------------------------');
  lines.push('| Dimension       | Score | Rationale                               |');
  lines.push('|-----------------|-------|-----------------------------------------|');

  for (const row of dashboard.trustworthinessTable) {
    lines.push(`| ${row.dimension.padEnd(15)} | ${row.score.toString().padStart(5)} | ${row.rationale.padEnd(39)} |`);
  }
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // Critical Alerts
  lines.push('CRITICAL ALERTS:');
  lines.push('------------------------------------------------------------------------');
  if (dashboard.criticalAlerts.length > 0) {
    dashboard.criticalAlerts.forEach(alert => {
      lines.push(`  - ${alert}`);
    });
  } else {
    lines.push('None - paper is progressing well');
  }
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // Latest Feedback Summary
  lines.push('LATEST FEEDBACK SUMMARY:');
  lines.push('------------------------------------------------------------------------');
  lines.push(dashboard.feedbackSummary || 'No feedback summary available');
  lines.push('------------------------------------------------------------------------');
  lines.push('');

  // Recommendation
  lines.push('RECOMMENDATION:');
  lines.push('------------------------------------------------------------------------');
  if (dashboard.recommendation === SupervisorDecision.FINALIZE) {
    lines.push('Paper is ready for finalization');
  } else {
    lines.push(`Continue to revision cycle ${dashboard.cycle + 1}`);
  }
  lines.push(`Reason: ${dashboard.recommendationReason}`);
  if (dashboard.priorityActions.length > 0) {
    lines.push('');
    lines.push('Priority actions:');
    dashboard.priorityActions.forEach(action => lines.push(`  ${action}`));
  }
  lines.push('------------------------------------------------------------------------');

  return lines.join('\n');
}

// ============================================================================
// Decision Recording Functions
// ============================================================================

/**
 * Format supervisor directives section for appending to feedback file
 * From ICISsupervisor.txt Step 5 (CONTINUE TO REVISION)
 */
export function formatDirectivesSection(
  cycle: number,
  directives: string,
  timestamp: Date = new Date()
): string {
  const lines: string[] = [];

  lines.push('');
  lines.push('================================================================================');
  lines.push(`SUPERVISOR DIRECTIVES (Cycle ${cycle})`);
  lines.push('================================================================================');
  lines.push(directives);
  lines.push('');
  lines.push(`Timestamp: ${timestamp.toISOString()}`);
  lines.push('================================================================================');

  return lines.join('\n');
}

/**
 * Create content for supervisor_decision.txt file
 * From ICISsupervisor.txt Step 5 (FINALIZE PAPER)
 */
export function createDecisionFileContent(
  decision: SupervisorDecision,
  cycle: number,
  dashboard: SupervisorDashboard,
  timestamp: Date = new Date()
): string {
  const lines: string[] = [];

  lines.push(`Decision: ${decision === SupervisorDecision.FINALIZE ? 'FINALIZE' : 'CONTINUE'}`);
  lines.push(`Cycle: ${cycle}`);
  lines.push(`Timestamp: ${timestamp.toISOString()}`);
  lines.push('');
  lines.push('Final Scores:');
  lines.push(`  Average Review Score: ${dashboard.scoresAverage[dashboard.scoresAverage.length - 1]?.toFixed(1) || 'N/A'}/5`);
  lines.push(`  Trustworthiness: Reliability=${dashboard.trustworthinessTable[0]?.score}, Benevolence=${dashboard.trustworthinessTable[1]?.score}, GoalAlignment=${dashboard.trustworthinessTable[2]?.score}`);
  lines.push(`  Major Errors: ${dashboard.errorsTable[0]?.versions[dashboard.errorsTable[0].versions.length - 1] || 0}`);
  lines.push(`  Minor Errors: ${dashboard.errorsTable[1]?.versions[dashboard.errorsTable[1].versions.length - 1] || 0}`);
  lines.push('');
  lines.push(`Status: ${dashboard.status}`);
  if (dashboard.statusReasons.length > 0) {
    lines.push('Status Reasons:');
    dashboard.statusReasons.forEach(reason => lines.push(`  - ${reason}`));
  }

  return lines.join('\n');
}

/**
 * Check if approaching maximum recommended cycles
 * From ICISsupervisor.txt Notes: Maximum recommended cycles: 3
 */
export function checkCycleWarning(cycle: number): {
  warn: boolean;
  message: string;
} {
  if (cycle >= SUPERVISOR_CONFIG.MAX_RECOMMENDED_CYCLES) {
    return {
      warn: true,
      message: `Warning: At maximum recommended cycles (${SUPERVISOR_CONFIG.MAX_RECOMMENDED_CYCLES}). Consider finalizing.`
    };
  }
  if (cycle >= SUPERVISOR_CONFIG.MAX_RECOMMENDED_CYCLES - 1) {
    return {
      warn: true,
      message: `Warning: Approaching maximum recommended cycles (${cycle}/${SUPERVISOR_CONFIG.MAX_RECOMMENDED_CYCLES}).`
    };
  }
  return { warn: false, message: '' };
}

// ============================================================================
// Legacy Support and Record Keeping
// ============================================================================

/**
 * Record supervisor decision
 */
export function recordSupervision(record: SupervisionRecord): void {
  // Log for now - in production would persist to state/storage
  console.log('Supervision recorded:', {
    cycle: record.roundNumber,
    decision: record.output.decision,
    status: record.status
  });
}

/**
 * Get supervision history for project
 */
export async function getSupervisionHistory(_projectId: string): Promise<SupervisionRecord[]> {
  // Placeholder - projectId will be used to retrieve from storage
  return [];
}

/**
 * Generate supervisor guidance based on review (legacy support + enhancement)
 * Status comes from oversight file, not calculated
 */
export function generateSupervisorGuidance(input: SupervisorInput): {
  recommendation: SupervisorDecision;
  suggestedComments: string;
  keyIssues: string[];
} {
  // Status comes directly from oversight file
  const isOnTrack = input.status === SupervisorStatus.ON_TRACK;
  const reasons = input.statusReasons || [];

  return {
    recommendation: isOnTrack ? SupervisorDecision.FINALIZE : SupervisorDecision.CONTINUE_REVISION,
    suggestedComments: isOnTrack
      ? 'Paper meets quality standards. Ready for finalization.'
      : `Please address the following issues: ${reasons.slice(0, 2).join('; ')}`,
    keyIssues: reasons.slice(0, 3)
  };
}
