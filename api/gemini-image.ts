/**
 * Vercel Serverless Function: Gemini Image Generation Proxy
 *
 * Securely proxies requests to Google Gemini Image Generation API
 * API key stored in Vercel environment variables (never exposed to client)
 *
 * Endpoint: POST /api/gemini-image
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  // Using Node.js runtime (not edge) to support longer timeout for image generation
  maxDuration: 120, // 2 minutes for image generation
};

interface GeminiImageRequest {
  prompt: string;
  model?: string;
  aspectRatio?: string;
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

  // Get API key from environment
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[Gemini Image Proxy] GEMINI_API_KEY not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const body: GeminiImageRequest = req.body;

    // Validate request
    if (!body.prompt || typeof body.prompt !== 'string') {
      return res.status(400).json({ error: 'Invalid request: prompt string required' });
    }

    // Use model from request or default to gemini-3-pro-image-preview (Nano Banana Pro)
    const model = body.model || 'gemini-3-pro-image-preview';
    const aspectRatio = body.aspectRatio || '16:9';

    const baseUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    // Build Gemini image generation request
    const geminiRequest = {
      contents: [{
        parts: [{ text: body.prompt }]
      }],
      generationConfig: {
        responseModalities: ['TEXT', 'IMAGE'],
        imageConfig: {
          aspectRatio: aspectRatio
        }
      }
    };

    console.log(`[Gemini Image Proxy] Calling ${model} for image generation...`);

    // Call Gemini Image Generation API
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[Gemini Image Proxy] API Error:', response.status, errorData);
      return res.status(response.status).json({
        success: false,
        error: 'Gemini API error',
        status: response.status,
        details: (errorData as any).error?.message || 'Unknown error'
      });
    }

    const data = await response.json();

    // Extract image from response
    const parts = data.candidates?.[0]?.content?.parts;
    if (!parts || !Array.isArray(parts)) {
      console.error('[Gemini Image Proxy] No parts in response');
      return res.status(500).json({
        success: false,
        error: 'No content parts in response'
      });
    }

    // Find the image part
    for (const part of parts) {
      if (part.inlineData) {
        console.log('[Gemini Image Proxy] Successfully generated image');
        return res.status(200).json({
          success: true,
          image: part.inlineData.data,
          mimeType: part.inlineData.mimeType || 'image/png'
        });
      }
    }

    // No image found in response
    console.error('[Gemini Image Proxy] No image data in response parts');
    return res.status(500).json({
      success: false,
      error: 'No image data in response'
    });

  } catch (error) {
    console.error('[Gemini Image Proxy] Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
