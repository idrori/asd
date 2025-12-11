/**
 * Vercel Serverless Function: Gemini Proxy
 *
 * Securely proxies requests to Google Gemini API
 * API key stored in Vercel environment variables (never exposed to client)
 *
 * Endpoint: POST /api/gemini
 */

export const config = {
  runtime: 'edge',
  // Gemini responses can be large and take time (especially thinking models)
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

export default async function handler(request: Request): Promise<Response> {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // Only allow POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Get API key from environment
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[Gemini Proxy] GEMINI_API_KEY not configured');
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const body: GeminiRequest = await request.json();

    // Validate request
    if (!body.contents || !Array.isArray(body.contents)) {
      return new Response(JSON.stringify({ error: 'Invalid request: contents array required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // Use model from request or default
    const model = body.model || process.env.GEMINI_MODEL || 'gemini-2.0-flash';
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
      return new Response(JSON.stringify({
        error: 'Gemini API error',
        status: response.status,
        details: errorData.error?.message || 'Unknown error'
      }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const data = await response.json();
    console.log('[Gemini Proxy] Success');

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('[Gemini Proxy] Error:', error);
    return new Response(JSON.stringify({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
