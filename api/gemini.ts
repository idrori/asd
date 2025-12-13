/**
 * Vercel Serverless Function: Gemini Proxy
 *
 * Securely proxies requests to Google Gemini API
 * API key stored in Vercel environment variables (never exposed to client)
 *
 * Endpoint: POST /api/gemini
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  // Using Node.js runtime (not edge) to support 300s timeout
  // Edge functions max out at 30 seconds
  maxDuration: 300, // 5 minutes (Vercel Pro plan)
};

interface GeminiRequest {
  contents: Array<{
    role?: string;
    parts: Array<{
      text?: string;
      inline_data?: {
        mime_type: string;
        data: string;
      };
    }>;
  }>;
  generationConfig?: {
    temperature?: number;
    topK?: number;
    topP?: number;
    maxOutputTokens?: number;
    responseMimeType?: string;
  };
  systemInstruction?: {
    parts: Array<{ text: string }>;
  };
  model?: string;
}

// SECURITY: Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://iciscopilot.vercel.app',
  'https://idrori.github.io',
  'http://localhost:5173',  // Local dev
  'http://localhost:3000'   // Local dev
];

function getCorsOrigin(req: VercelRequest): string {
  const origin = req.headers.origin as string;
  if (origin && ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed))) {
    return origin;
  }
  return ALLOWED_ORIGINS[0]; // Default to production
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // SECURITY: Restrict CORS to known origins only
  const corsOrigin = getCorsOrigin(req);
  res.setHeader('Access-Control-Allow-Origin', corsOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Internal-Secret');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Max-Age', '86400');
    return res.status(204).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // NOTE: This is a user-facing endpoint called by the frontend for paper generation.
  // Authentication is via CORS (restricted origins) - the API key stays server-side.

  // Get API key from environment
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[Gemini Proxy] GEMINI_API_KEY not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const body: GeminiRequest = req.body;

    // Validate request
    if (!body.contents || !Array.isArray(body.contents)) {
      return res.status(400).json({ error: 'Invalid request: contents array required' });
    }

    // Use model from request or default
    const model = body.model || process.env.GEMINI_MODEL || 'gemini-3-pro-preview';
    const baseUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    // Build Gemini request (remove model from body as it's in URL)
    const { model: _, ...geminiBody } = body;
    const geminiRequest = {
      ...geminiBody,
      generationConfig: body.generationConfig || {
        temperature: 0.7,
        maxOutputTokens: 8192,
      },
    };

    console.log(`[Gemini Proxy] Calling ${model}...`);

    // Call Gemini
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[Gemini Proxy] API Error:', response.status, errorData);
      return res.status(response.status).json({
        error: 'Gemini API error',
        status: response.status,
        details: (errorData as any).error?.message || 'Unknown error'
      });
    }

    const data = await response.json();
    console.log('[Gemini Proxy] Success');

    return res.status(200).json(data);

  } catch (error) {
    console.error('[Gemini Proxy] Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
