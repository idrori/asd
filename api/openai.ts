/**
 * Vercel Serverless Function: OpenAI Proxy
 *
 * Securely proxies requests to OpenAI API
 * API key stored in Vercel environment variables (never exposed to client)
 *
 * Endpoint: POST /api/openai
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  // Using Node.js runtime (not edge) to support 300s timeout
  // Edge functions max out at 30 seconds
  maxDuration: 300, // 5 minutes (Vercel Pro plan)
};

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

interface OpenAIRequest {
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
  model?: string;
  temperature?: number;
  max_tokens?: number;
  max_completion_tokens?: number;
  response_format?: {
    type: 'json_object' | 'text';
  };
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

  // SECURITY: Verify internal API secret if configured
  const apiSecret = process.env.INTERNAL_API_SECRET;
  if (apiSecret) {
    const providedSecret = req.headers['x-internal-secret'];
    if (providedSecret !== apiSecret) {
      console.warn('[OpenAI Proxy] Unauthorized request blocked');
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  // Get API key from environment (secure - never sent to client)
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('[OpenAI Proxy] OPENAI_API_KEY not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const body: OpenAIRequest = req.body;

    // Validate request
    if (!body.messages || !Array.isArray(body.messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array required' });
    }

    // Build OpenAI request
    const openaiRequest: Record<string, any> = {
      model: body.model || process.env.OPENAI_MODEL || 'gpt-5.2',
      messages: body.messages,
      temperature: body.temperature ?? 0.7,
      max_completion_tokens: body.max_completion_tokens || body.max_tokens || 16000,
    };

    // Add response_format if specified
    if (body.response_format) {
      openaiRequest.response_format = body.response_format;
    }

    console.log(`[OpenAI Proxy] Calling ${openaiRequest.model}...`);

    // Call OpenAI
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(openaiRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[OpenAI Proxy] API Error:', response.status, errorData);
      return res.status(response.status).json({
        error: 'OpenAI API error',
        status: response.status,
        details: (errorData as any).error?.message || 'Unknown error'
      });
    }

    const data = await response.json();
    console.log('[OpenAI Proxy] Success');

    return res.status(200).json(data);

  } catch (error) {
    console.error('[OpenAI Proxy] Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
