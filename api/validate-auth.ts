/**
 * Vercel Serverless Function: Validate Authentication
 *
 * Validates username/password against environment variables
 * Used by static HTML pages that can't access Vite env vars
 *
 * Endpoint: POST /api/validate-auth
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  maxDuration: 10,
};

// SECURITY: Credentials from environment variables only
const AUTH_USERNAME = process.env.VITE_AUTH_USERNAME;
const AUTH_PASSWORD = process.env.VITE_AUTH_PASSWORD;

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

  try {
    const { username, password } = req.body;

    if (!AUTH_USERNAME || !AUTH_PASSWORD) {
      console.error('[Auth] Authentication not configured');
      return res.status(503).json({
        success: false,
        error: 'Authentication not configured'
      });
    }

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: 'Username and password required'
      });
    }

    if (username === AUTH_USERNAME && password === AUTH_PASSWORD) {
      return res.status(200).json({
        success: true
      });
    } else {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

  } catch (error) {
    console.error('[Auth] Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Authentication failed'
    });
  }
}
