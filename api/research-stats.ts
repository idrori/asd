/**
 * Vercel Serverless Function: Research Statistics
 *
 * Computes dashboard metrics from participant data
 *
 * Endpoint: GET /api/research-stats
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { list } from '@vercel/blob';

export const config = {
  maxDuration: 30,
};

// Types
type ParticipantStatus =
  | 'registered'
  | 'confirmed_via_email'
  | 'interview_completed'
  | 'processing'
  | 'paper_link_sent'
  | 'survey_sent'
  | 'review_email_sent'
  | 'survey_completed'
  | 'dropped_out';

type GroupId = 1 | 2 | null;

interface Participant {
  id: string;
  name: string;
  email: string;
  group_id: GroupId;
  interviewer: string | null;
  status: ParticipantStatus;
  registered_at: string;
  updated_at: string;
  notes: string;
}

interface ActivityLogEntry {
  id: string;
  participant_id: string;
  status_from: ParticipantStatus | null;
  status_to: ParticipantStatus;
  timestamp: string;
  note: string;
}

interface ParticipantsData {
  participants: Participant[];
  activity_log: ActivityLogEntry[];
}

const PARTICIPANTS_FILE = 'research/participants.json';

// Status progression order for funnel
const STATUS_ORDER: ParticipantStatus[] = [
  'registered',
  'confirmed_via_email',
  'interview_completed',
  'processing',
  'paper_link_sent',
  'survey_sent',
  'review_email_sent',
  'survey_completed',
  'dropped_out'
];

// Read participants data from Blob
async function readParticipantsData(): Promise<ParticipantsData> {
  try {
    const { blobs } = await list({ prefix: 'research/' });
    const participantsBlob = blobs.find(b => b.pathname === PARTICIPANTS_FILE);

    if (!participantsBlob) {
      return { participants: [], activity_log: [] };
    }

    const response = await fetch(participantsBlob.url);
    const data = await response.json();
    return data as ParticipantsData;
  } catch (error) {
    console.error('[Research Stats] Error reading data:', error);
    return { participants: [], activity_log: [] };
  }
}

// Check if participant is "stuck" (no activity in 7 days while in processing state)
function isStuck(participant: Participant): boolean {
  if (participant.status !== 'processing') return false;

  const lastUpdate = new Date(participant.updated_at);
  const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
  return daysSinceUpdate > 7;
}

// Check if participant has pending survey
function hasPendingSurvey(participant: Participant): boolean {
  return participant.status === 'survey_sent';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check Blob storage is configured
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(503).json({
      success: false,
      error: 'Blob storage not configured'
    });
  }

  try {
    const data = await readParticipantsData();
    const { participants, activity_log } = data;

    // Basic counts
    const total = participants.length;
    const active = participants.filter(p => p.status !== 'dropped_out').length;
    const surveysCompleted = participants.filter(p => p.status === 'survey_completed').length;
    const surveysSent = participants.filter(p =>
      ['survey_sent', 'survey_completed'].includes(p.status)
    ).length;

    // Completion rate (surveys completed / surveys sent)
    const completionRate = surveysSent > 0
      ? Math.round((surveysCompleted / surveysSent) * 100)
      : 0;

    // Funnel data (count at each status)
    const funnel = {
      registered: participants.filter(p => p.status === 'registered').length,
      confirmed_via_email: participants.filter(p => p.status === 'confirmed_via_email').length,
      interview_completed: participants.filter(p => p.status === 'interview_completed').length,
      processing: participants.filter(p => p.status === 'processing').length,
      paper_link_sent: participants.filter(p => p.status === 'paper_link_sent').length,
      survey_sent: participants.filter(p => p.status === 'survey_sent').length,
      review_email_sent: participants.filter(p => p.status === 'review_email_sent').length,
      survey_completed: participants.filter(p => p.status === 'survey_completed').length,
      dropped_out: participants.filter(p => p.status === 'dropped_out').length
    };

    // Group stats
    const group1 = participants.filter(p => p.group_id === 1);
    const group2 = participants.filter(p => p.group_id === 2);
    const unassigned = participants.filter(p => p.group_id === null);

    const calculateGroupMetrics = (group: Participant[]) => {
      const total = group.length;
      if (total === 0) return { total: 0, interviewRate: 0, completionRate: 0, dropRate: 0 };

      const interviewed = group.filter(p =>
        STATUS_ORDER.indexOf(p.status) >= STATUS_ORDER.indexOf('interview_completed')
      ).length;
      const completed = group.filter(p => p.status === 'survey_completed').length;
      const dropped = group.filter(p => p.status === 'dropped_out').length;

      return {
        total,
        interviewRate: Math.round((interviewed / total) * 100),
        completionRate: Math.round((completed / total) * 100),
        dropRate: Math.round((dropped / total) * 100)
      };
    };

    const groups = {
      group1: calculateGroupMetrics(group1),
      group2: calculateGroupMetrics(group2),
      unassigned: unassigned.length
    };

    // Alerts
    const alerts: { type: string; message: string; participants: string[] }[] = [];

    // Stuck participants
    const stuckParticipants = participants.filter(isStuck);
    if (stuckParticipants.length > 0) {
      alerts.push({
        type: 'stuck',
        message: `${stuckParticipants.length} stuck participant(s)`,
        participants: stuckParticipants.map(p => p.name || p.email)
      });
    }

    // Pending surveys
    const pendingSurveys = participants.filter(hasPendingSurvey);
    if (pendingSurveys.length > 0) {
      alerts.push({
        type: 'pending_survey',
        message: `${pendingSurveys.length} pending survey(s)`,
        participants: pendingSurveys.map(p => p.name || p.email)
      });
    }

    // Recent activity (last 10 entries)
    const recentActivity = activity_log
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10)
      .map(entry => {
        const participant = participants.find(p => p.id === entry.participant_id);
        return {
          ...entry,
          participant_name: participant?.name || participant?.email || 'Unknown'
        };
      });

    return res.status(200).json({
      success: true,
      stats: {
        total,
        active,
        surveysCompleted,
        surveysSent,
        completionRate,
        funnel,
        groups,
        alerts,
        recentActivity
      }
    });
  } catch (error) {
    console.error('[Research Stats] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}
