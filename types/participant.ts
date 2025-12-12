/**
 * Participant Management Types
 * For tracking research study participants through the ICIScopilot workflow
 */

export type ParticipantStatus =
  | 'registered'
  | 'confirmed_via_email'
  | 'interview_completed'
  | 'processing'
  | 'paper_link_sent'
  | 'survey_sent'
  | 'review_email_sent'
  | 'survey_completed'
  | 'dropped_out';

export type GroupId = 1 | 2 | null; // 1 = With Oversight, 2 = Control, null = Unassigned

export interface Participant {
  id: string;
  name: string;
  email: string;
  group_id: GroupId;
  interviewer: string | null;
  status: ParticipantStatus;
  registered_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
  notes: string;
  // Optional fields for tracking
  paper_link?: string;
  transcript_path?: string;
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
  registered: number;
  confirmed_via_email: number;
  interview_completed: number;
  processing: number;
  paper_link_sent: number;
  survey_sent: number;
  review_email_sent: number;
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
  participants: string[]; // participant names
}

// API Request/Response types
export interface CreateParticipantRequest {
  name?: string;
  email: string;
  interviewer?: string;
  notes?: string;
}

export interface UpdateParticipantRequest {
  email: string;
  name?: string;
  status?: ParticipantStatus;
  group_id?: GroupId;
  interviewer?: string;
  notes?: string;
  paper_link?: string;
  transcript?: string; // Will be saved to separate file
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

// Status display helpers
export const STATUS_LABELS: Record<ParticipantStatus, string> = {
  registered: 'Registered',
  confirmed_via_email: 'Confirmed via Email',
  interview_completed: 'Interview Completed',
  processing: 'Processing',
  paper_link_sent: 'Paper & Link Sent',
  survey_sent: 'Survey Sent',
  review_email_sent: 'Review Email Sent',
  survey_completed: 'Survey Completed',
  dropped_out: 'Dropped Out'
};

export const STATUS_COLORS: Record<ParticipantStatus, string> = {
  registered: 'bg-gray-500',
  confirmed_via_email: 'bg-blue-500',
  interview_completed: 'bg-emerald-500',
  processing: 'bg-yellow-500',
  paper_link_sent: 'bg-purple-500',
  survey_sent: 'bg-cyan-500',
  review_email_sent: 'bg-indigo-500',
  survey_completed: 'bg-green-500',
  dropped_out: 'bg-red-500'
};

export const GROUP_LABELS: Record<number, string> = {
  1: 'With Oversight',
  2: 'Control (No Oversight)'
};
