/**
 * Vercel Serverless Function: Get Interview Token
 *
 * Returns the Gemini API key for the interview page to use with Gemini Live API.
 * The key is kept on the server and only returned to authenticated requests.
 *
 * Endpoint: GET /api/get-interview-token
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 10,
};

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

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(503).json({
        success: false,
        error: 'Gemini API key not configured'
      });
    }

    // Return the API key for the client to use with WebSocket
    return res.status(200).json({
      success: true,
      apiKey
    });

  } catch (error) {
    console.error('[Interview Token] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to get token'
    });
  }
}
