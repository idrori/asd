/**
 * Vercel Serverless Function: OpenAI Realtime API Ephemeral Token
 *
 * Creates an ephemeral client secret for secure client-side WebRTC connections
 * to OpenAI's Realtime API (gpt-realtime model)
 *
 * Best Practices from OpenAI docs:
 * - Use WebRTC for browser connections (lower latency, better performance)
 * - Use gpt-realtime model (GA version)
 * - Use marin or cedar voices for best quality
 * - Configure server_vad for turn detection
 *
 * Endpoint: POST /api/openai-realtime-token
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 30,
};

// Interview prompt for research conversations
const INTERVIEW_INSTRUCTIONS = `You are conducting a structured research interview for automated scientific discovery. Your goal is to understand the participant's research needs, data, and goals.

INTERVIEW STRUCTURE (Target: 9 minutes total):

1. INTRODUCTION (30 sec)
- Greet warmly and introduce yourself as a research assistant
- Explain the interview will help understand their research needs
- Ask them to speak naturally

2. RESEARCH BACKGROUND * (1 min)
- What is your field of research?
- What specific problem are you trying to solve?

3. DATA DESCRIPTION * (1.5 min)
- What data do you have or plan to collect?
- What format is your data in (CSV, surveys, experiments)?
- How many observations/participants do you have?

4. RESEARCH QUESTIONS * (1.5 min)
- What is your main research question or hypothesis?
- Are there secondary questions you want to explore?

5. METHODOLOGY PREFERENCES (1 min)
- Do you have specific statistical methods in mind?
- Any constraints on the analysis approach?

6. EXPECTED OUTCOMES * (1 min)
- What would a successful result look like?
- How will you use the findings?

7. TIMELINE AND CONSTRAINTS (30 sec)
- Any deadlines or time constraints?
- Resource limitations?

8. RELATED WORK (30 sec)
- Are there similar studies you're building on?
- Key papers that inspire this work?

9. ADDITIONAL CONTEXT (30 sec)
- Anything else important for understanding your research?

10. WRAP-UP (30 sec)
- Summarize key points
- Thank them for their time

GUIDELINES:
- Questions marked with * are mandatory - must be covered
- Use Voice Activity Detection - wait for natural pauses before responding
- Be conversational and supportive, not interrogative
- Ask follow-up questions when answers are unclear
- Keep track of time and gently move forward if running long
- At the end, provide a brief summary of what you learned

IMPORTANT: This is a voice conversation. Speak naturally and conversationally. Do not use markdown, bullet points, or formatting - just natural speech.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('[OpenAI Realtime] OPENAI_API_KEY not configured');
    return res.status(500).json({
      success: false,
      error: 'OpenAI API key not configured'
    });
  }

  try {
    // Request client secret from OpenAI Realtime GA API
    // GA API format requires wrapping config in 'session' object with 'type' field
    const response = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expires_after: {
          anchor: 'created_at',
          seconds: 600  // 10 minute TTL
        },
        session: {
          type: 'realtime',
          model: 'gpt-realtime',  // GA model (recommended)
          instructions: INTERVIEW_INSTRUCTIONS,
          // Lock output to audio only
          output_modalities: ['audio'],
          audio: {
            input: {
              format: {
                type: 'audio/pcm',
                rate: 24000
              },
              turn_detection: {
                type: 'semantic_vad'  // semantic_vad works better for natural conversation
              },
              transcription: {
                model: 'gpt-4o-transcribe'  // Better transcription model
              }
            },
            output: {
              format: {
                type: 'audio/pcm'
              },
              voice: 'marin'  // New high-quality voice (marin or cedar recommended)
            }
          }
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[OpenAI Realtime] Token request failed:', response.status, errorText);
      return res.status(response.status).json({
        success: false,
        error: `OpenAI API error: ${response.status}`,
        details: errorText
      });
    }

    const data = await response.json();

    console.log('[OpenAI Realtime] Client secret created successfully:', JSON.stringify(data).slice(0, 300));

    // GA API response format: { value: "ek_xxx", expires_at: ..., session: {...} }
    // Return in a format the client expects
    return res.status(200).json({
      success: true,
      client_secret: {
        value: data.value  // GA API returns value directly at top level
      },
      session_id: data.session?.id,
      expires_at: data.expires_at
    });

  } catch (error) {
    console.error('[OpenAI Realtime] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create session'
    });
  }
}
