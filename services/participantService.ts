/**
 * Participant Service
 * Client-side service for managing research participants
 */

import type {
  Participant,
  ParticipantStatus,
  GroupId,
  ResearchStats,
  CreateParticipantRequest,
  UpdateParticipantRequest
} from '../types/participant';

// Get API base URL
function getApiUrl(): string {
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    return 'https://icis-deploy-12-10-2025.vercel.app';
  }
  return '';
}

// SECURITY: Internal API secret for authenticated requests
const INTERNAL_API_SECRET = import.meta.env.VITE_INTERNAL_API_SECRET || '';

// Helper to get auth headers for API requests
function getAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };
  if (INTERNAL_API_SECRET) {
    headers['X-Internal-Secret'] = INTERNAL_API_SECRET;
  }
  return headers;
}

/**
 * Fetch all participants
 */
export async function getParticipants(filters?: {
  status?: ParticipantStatus;
  group_id?: GroupId;
  email?: string;
}): Promise<Participant[]> {
  const apiUrl = getApiUrl();
  const params = new URLSearchParams();

  if (filters?.status) params.set('status', filters.status);
  if (filters?.group_id !== undefined) params.set('group_id', String(filters.group_id));
  if (filters?.email) params.set('email', filters.email);

  const url = `${apiUrl}/api/participants${params.toString() ? `?${params}` : ''}`;

  const response = await fetch(url, { headers: getAuthHeaders() });
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Failed to fetch participants');
  }

  return data.participants;
}

/**
 * Get a single participant by email
 */
export async function getParticipantByEmail(email: string): Promise<Participant | null> {
  const participants = await getParticipants({ email });
  return participants.length > 0 ? participants[0] : null;
}

/**
 * Create a new participant
 */
export async function createParticipant(
  request: CreateParticipantRequest,
  autoAssignGroup = false
): Promise<Participant> {
  const apiUrl = getApiUrl();

  const response = await fetch(`${apiUrl}/api/participants`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      ...request,
      auto_assign_group: autoAssignGroup
    })
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Failed to create participant');
  }

  return data.participant;
}

/**
 * Update a participant
 */
export async function updateParticipant(
  request: UpdateParticipantRequest
): Promise<Participant> {
  const apiUrl = getApiUrl();

  const response = await fetch(`${apiUrl}/api/participants`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify(request)
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Failed to update participant');
  }

  return data.participant;
}

/**
 * Update participant status
 */
export async function updateParticipantStatus(
  email: string,
  status: ParticipantStatus
): Promise<Participant> {
  return updateParticipant({ email, status });
}

/**
 * Assign participant to a group
 */
export async function assignParticipantToGroup(
  email: string,
  groupId: GroupId
): Promise<Participant> {
  return updateParticipant({ email, group_id: groupId });
}

/**
 * Delete a participant
 */
export async function deleteParticipant(email: string): Promise<void> {
  const apiUrl = getApiUrl();

  const response = await fetch(`${apiUrl}/api/participants`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
    body: JSON.stringify({ email })
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Failed to delete participant');
  }
}

/**
 * Fetch research statistics
 */
export async function getResearchStats(): Promise<ResearchStats> {
  const apiUrl = getApiUrl();

  const response = await fetch(`${apiUrl}/api/research-stats`, { headers: getAuthHeaders() });
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'Failed to fetch research stats');
  }

  return data.stats;
}

/**
 * Register participant from interview
 * Called when a user starts a voice interview
 */
export async function registerFromInterview(
  email: string
): Promise<Participant> {
  return createParticipant(
    { email },
    true // auto-assign to group
  );
}

/**
 * Complete interview for participant
 * Called when a voice interview ends
 * Note: Transcript is downloaded locally, not stored on server
 */
export async function completeInterview(
  email: string
): Promise<Participant> {
  return updateParticipant({
    email,
    status: 'interview_completed'
  });
}

/**
 * Mark paper as sent
 * Called when paper link is created and sent
 */
export async function markPaperSent(
  email: string,
  paperLink: string
): Promise<Participant> {
  return updateParticipant({
    email,
    status: 'paper_sent',
    paper_link: paperLink
  });
}

/**
 * Mark survey as sent
 */
export async function markSurveySent(email: string): Promise<Participant> {
  return updateParticipantStatus(email, 'survey_sent');
}

/**
 * Mark survey as completed
 */
export async function markSurveyCompleted(email: string): Promise<Participant> {
  return updateParticipantStatus(email, 'survey_completed');
}

/**
 * Mark participant as starting the builder stage (setup completed)
 */
export async function markSetupCompleted(email: string): Promise<Participant> {
  return updateParticipantStatus(email, 'setup_completed');
}
