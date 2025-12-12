/**
 * Vercel Serverless Function: Participants Management
 *
 * CRUD operations for research study participants
 * Uses Vercel Blob for storage
 *
 * Endpoints:
 * - GET /api/participants - List all participants
 * - POST /api/participants - Create new participant
 * - PATCH /api/participants - Update participant
 * - DELETE /api/participants - Delete participant
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put, list, del } from '@vercel/blob';

export const config = {
  maxDuration: 30,
};

// Types (inline to avoid import issues in serverless)
// Matches ICIScopilot workflow stages
type ParticipantStatus =
  | 'registered'
  | 'interview_completed'
  | 'setup_completed'
  | 'builder_completed'
  | 'reviewer_completed'
  | 'supervisor_completed'
  | 'reviser_completed'
  | 'finalize_completed'
  | 'paper_sent'
  | 'survey_sent'
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
  paper_link?: string;
  transcript_path?: string;
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

// SECURITY: Use cryptographically secure UUID generation
function generateId(): string {
  return crypto.randomUUID();
}

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
    console.error('[Participants] Error reading data:', error);
    return { participants: [], activity_log: [] };
  }
}

// Write participants data to Blob (private storage for PII protection)
async function writeParticipantsData(data: ParticipantsData): Promise<void> {
  // SECURITY: Store participant data privately - contains PII (names, emails, notes)
  await put(PARTICIPANTS_FILE, JSON.stringify(data, null, 2), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false
  });
}

// Add activity log entry
function addActivityLog(
  data: ParticipantsData,
  participantId: string,
  statusFrom: ParticipantStatus | null,
  statusTo: ParticipantStatus,
  note: string
): void {
  data.activity_log.push({
    id: generateId(),
    participant_id: participantId,
    status_from: statusFrom,
    status_to: statusTo,
    timestamp: new Date().toISOString(),
    note
  });
}

// Auto-assign group (alternating for balance)
function assignGroup(participants: Participant[]): GroupId {
  const assigned = participants.filter(p => p.group_id !== null);
  const group1Count = assigned.filter(p => p.group_id === 1).length;
  const group2Count = assigned.filter(p => p.group_id === 2).length;

  // Assign to smaller group, or group 1 if equal
  return group1Count <= group2Count ? 1 : 2;
}

// SECURITY: Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://iciscopilot.vercel.app',
  'https://idrori.github.io',
  'http://localhost:5173',
  'http://localhost:3000'
];

function getCorsOrigin(req: VercelRequest): string {
  const origin = req.headers.origin as string;
  if (origin && ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed))) {
    return origin;
  }
  return ALLOWED_ORIGINS[0];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // SECURITY: Restrict CORS to known origins only
  const corsOrigin = getCorsOrigin(req);
  res.setHeader('Access-Control-Allow-Origin', corsOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Internal-Secret');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // SECURITY: Verify internal API secret for PII-accessing endpoints
  const apiSecret = process.env.INTERNAL_API_SECRET;
  if (apiSecret) {
    const providedSecret = req.headers['x-internal-secret'];
    if (providedSecret !== apiSecret) {
      console.warn('[Participants] Unauthorized request blocked');
      return res.status(401).json({ success: false, error: 'Unauthorized' });
    }
  }

  // Check Blob storage is configured
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(503).json({
      success: false,
      error: 'Blob storage not configured'
    });
  }

  try {
    switch (req.method) {
      case 'GET': {
        // GET /api/participants - List all participants
        const data = await readParticipantsData();

        // Optional filtering
        const { status, group_id, email } = req.query;
        let filtered = data.participants;

        if (status) {
          filtered = filtered.filter(p => p.status === status);
        }
        if (group_id) {
          filtered = filtered.filter(p => p.group_id === Number(group_id));
        }
        if (email) {
          filtered = filtered.filter(p => p.email === email);
        }

        return res.status(200).json({
          success: true,
          participants: filtered,
          total: data.participants.length
        });
      }

      case 'POST': {
        // POST /api/participants - Create new participant
        const { name, email, interviewer, notes, auto_assign_group } = req.body;

        if (!email) {
          return res.status(400).json({
            success: false,
            error: 'Email is required'
          });
        }

        const data = await readParticipantsData();

        // Check if participant already exists
        const existing = data.participants.find(p => p.email.toLowerCase() === email.toLowerCase());
        if (existing) {
          return res.status(200).json({
            success: true,
            participant: existing,
            message: 'Participant already exists'
          });
        }

        const now = new Date().toISOString();
        const newParticipant: Participant = {
          id: generateId(),
          name: name || '',
          email: email.toLowerCase(),
          group_id: auto_assign_group ? assignGroup(data.participants) : null,
          interviewer: interviewer || null,
          status: 'registered',
          registered_at: now,
          updated_at: now,
          notes: notes || ''
        };

        data.participants.push(newParticipant);
        addActivityLog(data, newParticipant.id, null, 'registered', 'Participant registered');

        await writeParticipantsData(data);

        console.log(`[Participants] Created: ${email}`);

        return res.status(201).json({
          success: true,
          participant: newParticipant
        });
      }

      case 'PATCH': {
        // PATCH /api/participants - Update participant
        const { email, name, status, group_id, interviewer, notes, paper_link, transcript } = req.body;

        if (!email) {
          return res.status(400).json({
            success: false,
            error: 'Email is required'
          });
        }

        const data = await readParticipantsData();
        const idx = data.participants.findIndex(p => p.email.toLowerCase() === email.toLowerCase());

        if (idx === -1) {
          return res.status(404).json({
            success: false,
            error: 'Participant not found'
          });
        }

        const participant = data.participants[idx];
        const oldStatus = participant.status;

        // Update fields if provided
        if (name !== undefined) participant.name = name;
        if (status !== undefined) participant.status = status;
        if (group_id !== undefined) participant.group_id = group_id;
        if (interviewer !== undefined) participant.interviewer = interviewer;
        if (notes !== undefined) participant.notes = notes;
        if (paper_link !== undefined) participant.paper_link = paper_link;
        participant.updated_at = new Date().toISOString();

        // Save transcript to separate file if provided
        if (transcript) {
          const transcriptPath = `research/transcripts/${participant.id}.txt`;
          // SECURITY: Store transcripts privately - contains interview content
          await put(transcriptPath, transcript, {
            access: 'private',
            contentType: 'text/plain',
            addRandomSuffix: false
          });
          participant.transcript_path = transcriptPath;
        }

        // Log status change
        if (status && status !== oldStatus) {
          addActivityLog(data, participant.id, oldStatus, status, `Status changed to ${status}`);
        }

        data.participants[idx] = participant;
        await writeParticipantsData(data);

        console.log(`[Participants] Updated: ${email} -> ${status || 'no status change'}`);

        return res.status(200).json({
          success: true,
          participant
        });
      }

      case 'DELETE': {
        // DELETE /api/participants - Delete participant
        const { email } = req.body;

        if (!email) {
          return res.status(400).json({
            success: false,
            error: 'Email is required'
          });
        }

        const data = await readParticipantsData();
        const idx = data.participants.findIndex(p => p.email.toLowerCase() === email.toLowerCase());

        if (idx === -1) {
          return res.status(404).json({
            success: false,
            error: 'Participant not found'
          });
        }

        const participant = data.participants[idx];

        // Remove participant
        data.participants.splice(idx, 1);

        // Remove related activity logs
        data.activity_log = data.activity_log.filter(l => l.participant_id !== participant.id);

        await writeParticipantsData(data);

        // Delete transcript if exists
        if (participant.transcript_path) {
          try {
            await del(participant.transcript_path);
          } catch (e) {
            console.warn('[Participants] Failed to delete transcript:', e);
          }
        }

        console.log(`[Participants] Deleted: ${email}`);

        return res.status(200).json({
          success: true,
          message: 'Participant deleted'
        });
      }

      default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('[Participants] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}
