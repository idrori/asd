/**
 * Participant Management Types
 * For tracking research study participants through the ICIScopilot workflow
 *
 * Research Workflow Stages:
 * 1. Voice Interview → 2. Setup → 3. Builder → 4. Reviewer →
 * 5. Supervisor (Group 1 only) → 6. Reviser → 7. Finalize → 8. Survey
 */

export type ParticipantStatus =
  // Initial registration
  | 'registered'
  // ICIScopilot workflow stages (matches app stages)
  | 'interview_completed'    // Voice interview done
  | 'setup_completed'        // Setup stage done
  | 'builder_completed'      // Builder stage - paper generated
  | 'reviewer_completed'     // Reviewer stage - AI review done
  | 'supervisor_completed'   // Supervisor stage - human oversight (Group 1 only)
  | 'reviser_completed'      // Reviser stage - revisions applied
  | 'finalize_completed'     // Finalize stage - paper ready
  // Post-workflow
  | 'paper_sent'             // Final paper sent to participant
  | 'survey_sent'            // Survey link sent
  | 'survey_completed'       // Survey completed - study done
  | 'dropped_out';           // Participant dropped out

export type GroupId = 1 | 2 | null; // 1 = With Oversight, 2 = Control, null = Unassigned

export interface Participant {
  id: string;
  email: string;  // Only PII stored - for contact purposes
  group_id: GroupId;
  status: ParticipantStatus;
  registered_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
  paper_link?: string;
  oversight_paths?: string[];  // Paths to oversight_v1.json, oversight_v2.json, etc.
  feedback_paths?: string[];   // Paths to feedback_v1.json, feedback_v2.json, etc.
}

export interface ActivityLogEntry {
  id: string;
  participant_id: string;
  status_from: ParticipantStatus | null;
  status_to: ParticipantStatus;
  timestamp: string; // ISO timestamp
  note: string;
}

export interface ResearchStats {
  total: number;
  active: number;
  surveysCompleted: number;
  surveysSent: number;
  completionRate: number;
  funnel: FunnelData;
  groups: GroupStats;
  alerts: Alert[];
}

export interface FunnelData {
  // Funnel stages match ICIScopilot research workflow
  registered: number;
  interview_completed: number;
  setup_completed: number;
  builder_completed: number;
  reviewer_completed: number;
  supervisor_completed: number;  // Group 1 only
  reviser_completed: number;
  finalize_completed: number;
  paper_sent: number;
  survey_sent: number;
  survey_completed: number;
  dropped_out: number;
}

export interface GroupStats {
  group1: GroupMetrics;
  group2: GroupMetrics;
  unassigned: number;
}

export interface GroupMetrics {
  total: number;
  interviewRate: number;
  completionRate: number;
  dropRate: number;
}

export interface Alert {
  type: 'stuck' | 'pending_survey' | 'pending_review';
  message: string;
  participantIds: string[]; // participant IDs (no PII)
}

// API Request/Response types
// Only email stored as PII - for contact purposes
export interface CreateParticipantRequest {
  email: string;
}

export interface UpdateParticipantRequest {
  email: string;
  status?: ParticipantStatus;
  group_id?: GroupId;
  paper_link?: string;
}

export interface ParticipantsResponse {
  success: boolean;
  participants?: Participant[];
  error?: string;
}

export interface ParticipantResponse {
  success: boolean;
  participant?: Participant;
  error?: string;
}

export interface StatsResponse {
  success: boolean;
  stats?: ResearchStats;
  error?: string;
}

// Status display helpers - matches ICIScopilot workflow stages
export const STATUS_LABELS: Record<ParticipantStatus, string> = {
  registered: 'Registered',
  interview_completed: 'Interview Done',
  setup_completed: 'Setup Done',
  builder_completed: 'Paper Built',
  reviewer_completed: 'Review Done',
  supervisor_completed: 'Oversight Done',
  reviser_completed: 'Revisions Done',
  finalize_completed: 'Finalized',
  paper_sent: 'Paper Sent',
  survey_sent: 'Survey Sent',
  survey_completed: 'Completed',
  dropped_out: 'Dropped Out'
};

export const STATUS_COLORS: Record<ParticipantStatus, string> = {
  registered: 'bg-gray-500',
  interview_completed: 'bg-blue-500',
  setup_completed: 'bg-sky-500',
  builder_completed: 'bg-amber-500',
  reviewer_completed: 'bg-orange-500',
  supervisor_completed: 'bg-purple-500',
  reviser_completed: 'bg-indigo-500',
  finalize_completed: 'bg-teal-500',
  paper_sent: 'bg-cyan-500',
  survey_sent: 'bg-violet-500',
  survey_completed: 'bg-green-500',
  dropped_out: 'bg-red-500'
};

export const GROUP_LABELS: Record<number, string> = {
  1: 'With Oversight',
  2: 'Control (No Oversight)'
};
