/**
 * ICISreviewer Service
 *
 * Handles the paper review stage based on ICISreview.txt
 *
 * Responsibilities:
 * - Generate constructive feedback (Step 1)
 * - Produce oversight dashboard with scores (Step 2)
 * - Assess trustworthiness scores (Step 3)
 * - Track review rounds and progression
 */

import {
  ReviewScores,
  TrustworthinessScores,
  ErrorCounts,
  RoundScore
} from '../types';
import { REVIEW_THRESHOLDS, TRUSTWORTHINESS_THRESHOLDS } from '../constants';

export interface ConstructiveFeedback {
  // Structured feedback by criteria (from ICISreview.txt Step 1)
  researchQuestion: string;   // Is question clear? Important? What contribution?
  method: string;             // Is method justified? Applied convincingly? Robust results?
  potentialImpact: string;    // Managerial/IS implications? Method innovation?
  writing: string;            // Clarity, articulation, logic, exposition
  // Lists of specific issues
  majorConcerns: string[];    // Must be addressed
  minorCorrections: string[]; // Typos, missing references, etc.
  overallAssessment: string;  // Brief summary of paper quality
}

export interface OversightDashboard {
  scoresProgression: {
    criterion: string;
    versions: number[];
    latestComment: string;
  }[];
  errorProgression: {
    category: string;
    versions: number[];
    details: string;
  }[];
  criticalAlerts: CriticalAlert[];
  overallTrend: string;
}

export interface CriticalAlert {
  number: number;
  title: string;
  status: string;
  impact: string;
  details: string;
  actionRequired: string;
  consequence: string;
}

/**
 * Calculate average review score
 */
export function calculateAverageScore(scores: ReviewScores): number {
  const values = [
    scores.novelty,
    scores.significance,
    scores.methodologicalRigor,
    scores.clarity,
    scores.relevance
  ];
  return values.reduce((a, b) => a + b, 0) / values.length;
}

/**
 * Check if scores meet auto-approval threshold
 */
export function meetsApprovalThreshold(scores: ReviewScores): boolean {
  return (
    scores.novelty >= REVIEW_THRESHOLDS.AUTO_APPROVE_MIN &&
    scores.significance >= REVIEW_THRESHOLDS.AUTO_APPROVE_MIN &&
    scores.methodologicalRigor >= REVIEW_THRESHOLDS.AUTO_APPROVE_MIN &&
    scores.clarity >= REVIEW_THRESHOLDS.AUTO_APPROVE_MIN &&
    scores.relevance >= REVIEW_THRESHOLDS.AUTO_APPROVE_MIN
  );
}

/**
 * Check if any score is below minimum threshold
 */
export function hasCriticalScores(scores: ReviewScores): boolean {
  return (
    scores.novelty < REVIEW_THRESHOLDS.NOVELTY_MIN ||
    scores.significance < REVIEW_THRESHOLDS.SIGNIFICANCE_MIN ||
    scores.methodologicalRigor < REVIEW_THRESHOLDS.RIGOR_MIN ||
    scores.clarity < REVIEW_THRESHOLDS.CLARITY_MIN ||
    scores.relevance < REVIEW_THRESHOLDS.RELEVANCE_MIN
  );
}

/**
 * Get weak areas that need improvement
 */
export function getWeakAreas(scores: ReviewScores): string[] {
  const weakAreas: string[] = [];

  if (scores.novelty < REVIEW_THRESHOLDS.AUTO_APPROVE_MIN) {
    weakAreas.push('Novelty');
  }
  if (scores.significance < REVIEW_THRESHOLDS.AUTO_APPROVE_MIN) {
    weakAreas.push('Significance');
  }
  if (scores.methodologicalRigor < REVIEW_THRESHOLDS.AUTO_APPROVE_MIN) {
    weakAreas.push('Methodological Rigor');
  }
  if (scores.clarity < REVIEW_THRESHOLDS.AUTO_APPROVE_MIN) {
    weakAreas.push('Clarity');
  }
  if (scores.relevance < REVIEW_THRESHOLDS.AUTO_APPROVE_MIN) {
    weakAreas.push('Relevance');
  }

  return weakAreas;
}

/**
 * Check trustworthiness thresholds
 */
export function checkTrustworthiness(scores: TrustworthinessScores): {
  overallTrust: 'high' | 'medium' | 'low';
  alerts: string[];
} {
  const alerts: string[] = [];

  if (scores.reliability < TRUSTWORTHINESS_THRESHOLDS.ALERT_THRESHOLD) {
    alerts.push('Low reliability score - review ASD process quality');
  }
  if (scores.benevolence < TRUSTWORTHINESS_THRESHOLDS.ALERT_THRESHOLD) {
    alerts.push('Low benevolence score - review ASD transparency');
  }
  if (scores.goalAlignment < TRUSTWORTHINESS_THRESHOLDS.ALERT_THRESHOLD) {
    alerts.push('Low goal alignment - paper may not match interview objectives');
  }

  const avgScore = (scores.reliability + scores.benevolence + scores.goalAlignment) / 3;

  let overallTrust: 'high' | 'medium' | 'low';
  if (avgScore >= 5.5) {
    overallTrust = 'high';
  } else if (avgScore >= 4) {
    overallTrust = 'medium';
  } else {
    overallTrust = 'low';
  }

  return { overallTrust, alerts };
}

/**
 * Calculate score improvement between rounds
 */
export function calculateImprovement(
  previousScores: ReviewScores,
  currentScores: ReviewScores
): { improved: boolean; delta: number; details: string[] } {
  const details: string[] = [];
  let totalDelta = 0;

  const criteria = [
    { name: 'Novelty', prev: previousScores.novelty, curr: currentScores.novelty },
    { name: 'Significance', prev: previousScores.significance, curr: currentScores.significance },
    { name: 'Methodological Rigor', prev: previousScores.methodologicalRigor, curr: currentScores.methodologicalRigor },
    { name: 'Clarity', prev: previousScores.clarity, curr: currentScores.clarity },
    { name: 'Relevance', prev: previousScores.relevance, curr: currentScores.relevance },
  ];

  for (const c of criteria) {
    const delta = c.curr - c.prev;
    totalDelta += delta;

    if (delta > 0) {
      details.push(`${c.name}: +${delta} (improved)`);
    } else if (delta < 0) {
      details.push(`${c.name}: ${delta} (declined)`);
    }
  }

  return {
    improved: totalDelta > 0,
    delta: totalDelta,
    details
  };
}

/**
 * Generate oversight dashboard from round history
 */
export function generateOversightDashboard(rounds: RoundScore[]): OversightDashboard {
  const criteria = ['Novelty', 'Significance', 'Methodological Rigor', 'Clarity', 'Relevance'];

  const scoresProgression = criteria.map(criterion => {
    const versions = rounds.map(r => {
      if (!r.reviewScores) return r.reviewScore; // Legacy fallback
      switch (criterion) {
        case 'Novelty': return r.reviewScores.novelty;
        case 'Significance': return r.reviewScores.significance;
        case 'Methodological Rigor': return r.reviewScores.methodologicalRigor;
        case 'Clarity': return r.reviewScores.clarity;
        case 'Relevance': return r.reviewScores.relevance;
        default: return 0;
      }
    });

    const latest = versions[versions.length - 1] || 0;
    let latestComment = '';
    if (latest >= 4) {
      latestComment = 'Acceptable';
    } else if (latest >= 3) {
      latestComment = 'Needs improvement';
    } else {
      latestComment = 'Critical - requires revision';
    }

    return { criterion, versions, latestComment };
  });

  const errorProgression = [
    {
      category: 'Major Errors',
      versions: rounds.map(r => r.errorCounts?.majorErrors || 0),
      details: 'Computational errors, logical flaws'
    },
    {
      category: 'Minor Errors',
      versions: rounds.map(r => r.errorCounts?.minorErrors || r.errorsDetected || 0),
      details: 'Typos, formatting, missing refs'
    }
  ];

  // Generate critical alerts from latest round
  const criticalAlerts: CriticalAlert[] = [];
  const latestRound = rounds[rounds.length - 1];
  if (latestRound?.criticalAlerts) {
    latestRound.criticalAlerts.forEach((alert, i) => {
      criticalAlerts.push({
        number: i + 1,
        title: alert,
        status: 'Open',
        impact: 'High',
        details: alert,
        actionRequired: 'Address in next revision',
        consequence: 'Paper may be rejected if unfixed'
      });
    });
  }

  // Calculate overall trend
  const avgFirst = rounds.length > 0 ? calculateAverageScore(rounds[0].reviewScores || {
    novelty: rounds[0].reviewScore,
    significance: rounds[0].reliabilityScore,
    methodologicalRigor: rounds[0].alignmentScore,
    clarity: 3,
    relevance: 3
  }) : 0;

  const avgLast = rounds.length > 0 ? calculateAverageScore(latestRound.reviewScores || {
    novelty: latestRound.reviewScore,
    significance: latestRound.reliabilityScore,
    methodologicalRigor: latestRound.alignmentScore,
    clarity: 3,
    relevance: 3
  }) : 0;

  let overallTrend = 'No data';
  if (rounds.length > 1) {
    if (avgLast > avgFirst) {
      overallTrend = `Improving (+${(avgLast - avgFirst).toFixed(1)} avg)`;
    } else if (avgLast < avgFirst) {
      overallTrend = `Declining (${(avgLast - avgFirst).toFixed(1)} avg)`;
    } else {
      overallTrend = 'Stable';
    }
  } else if (rounds.length === 1) {
    overallTrend = `Initial review: ${avgLast.toFixed(1)} avg`;
  }

  return {
    scoresProgression,
    errorProgression,
    criticalAlerts,
    overallTrend
  };
}

/**
 * Convert legacy round score to new format
 */
export function convertLegacyScore(legacyScore: RoundScore): RoundScore {
  if (legacyScore.reviewScores) {
    return legacyScore; // Already new format
  }

  return {
    ...legacyScore,
    reviewScores: {
      novelty: legacyScore.reviewScore,
      significance: Math.round((legacyScore.reviewScore + legacyScore.reliabilityScore) / 2),
      methodologicalRigor: legacyScore.alignmentScore,
      clarity: 3, // Default middle value
      relevance: 3
    },
    errorCounts: {
      majorErrors: Math.floor(legacyScore.errorsDetected / 2),
      minorErrors: Math.ceil(legacyScore.errorsDetected / 2)
    }
  };
}

/**
 * Format feedback for display
 */
export function formatFeedbackSummary(feedback: ConstructiveFeedback): string {
  const lines: string[] = [];

  lines.push('## Constructive Feedback Summary');
  lines.push('');

  if (feedback.majorConcerns.length > 0) {
    lines.push('### Major Concerns');
    feedback.majorConcerns.forEach((concern, i) => {
      lines.push(`${i + 1}. ${concern}`);
    });
    lines.push('');
  }

  if (feedback.minorCorrections.length > 0) {
    lines.push('### Minor Corrections');
    feedback.minorCorrections.forEach((correction, i) => {
      lines.push(`${i + 1}. ${correction}`);
    });
    lines.push('');
  }

  lines.push('### Overall Assessment');
  lines.push(feedback.overallAssessment);

  return lines.join('\n');
}

/**
 * Generate review status badge
 */
export function getReviewStatus(scores: ReviewScores, errors: ErrorCounts): {
  status: 'pass' | 'revise' | 'critical';
  label: string;
  color: string;
} {
  if (meetsApprovalThreshold(scores) && errors.majorErrors === 0) {
    return { status: 'pass', label: 'Ready for Finalization', color: 'green' };
  }

  if (hasCriticalScores(scores) || errors.majorErrors > 2) {
    return { status: 'critical', label: 'Major Revision Required', color: 'red' };
  }

  return { status: 'revise', label: 'Minor Revision Needed', color: 'yellow' };
}

// ============================================================================
// File Naming Helpers (from ICISreview.txt Deliverables)
// ============================================================================

/**
 * Extract participantId from INTERVIEW filename
 * Format: INTERVIEW_{participantId}_{timestamp}.txt
 * Example: INTERVIEW_maayan_university_edu_20241115_091230.txt -> maayan_university_edu
 */
export function extractParticipantId(interviewFilename: string): string {
  // Remove path if present
  const basename = interviewFilename.replace(/^.*[\\\/]/, '');

  // Match pattern: INTERVIEW_{participantId}_{timestamp}.txt
  // Timestamp format: YYYYMMDD_HHMMSS (14 digits with underscore)
  const match = basename.match(/^INTERVIEW_(.+)_(\d{8}_\d{6})\.txt$/);

  if (match) {
    return match[1];
  }

  // Fallback: try to extract from other file patterns
  const paperMatch = basename.match(/^icis_paper_(.+)_v\d+\.tex$/);
  if (paperMatch) {
    return paperMatch[1];
  }

  throw new Error(`Cannot extract participantId from filename: ${interviewFilename}`);
}

/**
 * Generate feedback filename for given participant and version
 * Output: feedback_{participantId}_v{N}.txt stored in icis\Data
 */
export function generateFeedbackFilename(participantId: string, version: number): string {
  return `feedback_${participantId}_v${version}.txt`;
}

/**
 * Generate oversight filename for given participant and version
 * Output: oversight_{participantId}_v{N}.txt stored in icis\Data
 */
export function generateOversightFilename(participantId: string, version: number): string {
  return `oversight_${participantId}_v${version}.txt`;
}

/**
 * Generate paper filename for given participant and version
 * Output: icis_paper_{participantId}_v{N}.tex stored in icis\Paper
 */
export function generatePaperFilename(participantId: string, version: number, extension: 'tex' | 'pdf' = 'tex'): string {
  return `icis_paper_${participantId}_v${version}.${extension}`;
}

/**
 * Generate supervisor decision filename for given participant
 * Output: supervisor_decision_{participantId}.txt stored in icis\Data
 */
export function generateSupervisorDecisionFilename(participantId: string): string {
  return `supervisor_decision_${participantId}.txt`;
}

/**
 * Get full path for review files
 */
export function getReviewFilePath(baseDir: string, filename: string): string {
  return `${baseDir}/Data/${filename}`;
}

/**
 * Get full path for paper files
 */
export function getPaperFilePath(baseDir: string, filename: string): string {
  return `${baseDir}/Paper/${filename}`;
}
