/**
 * Vercel Serverless Function: Get Interview Token
 *
 * SECURITY: This endpoint has been disabled.
 * Never return API keys to the client - use server-side proxies instead.
 *
 * Endpoint: GET /api/get-interview-token
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 10,
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // This endpoint has been disabled for security reasons.
  // API keys should never be sent to clients.
  // Use the /api/gemini proxy endpoint instead.

  return res.status(410).json({
    success: false,
    error: 'This endpoint has been disabled for security reasons. Use server-side proxy endpoints instead.'
  });
}
