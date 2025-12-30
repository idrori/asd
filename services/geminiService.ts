/**
 * Gemini Service
 *
 * Handles all AI interactions for the ICIS workflow
 * Uses direct fetch API calls to Gemini
 * Loads prompts dynamically from prompts/ folder
 */

import { loadPrompt } from './promptService';
import { TrustworthinessScores } from '../types';
import {
  OversightFileData,
  FeedbackFileData,
  writeOversightFile,
  writeFeedbackFile
} from './fileService';
import { saveDataFile, executePythonScript, listGeneratedFigures, readPdfFile, getDataFilePreview, getCloudDataFile, analyzeDataWithPython, CloudAnalysisResult, storeBibliography } from './fileApi';

// API Configuration
// Supports three modes (in priority order):
// 1. Vercel serverless proxy (VITE_API_URL) - most secure for production
// 2. Local backend proxy (localhost:3001) - for local development
// 3. Direct API calls (VITE_*_API_KEY) - fallback, less secure

const API_BASE_URL = import.meta.env.VITE_API_URL || ''; // e.g., 'https://your-app.vercel.app'
const LOCAL_BACKEND_URL = 'http://localhost:3001';

// SECURITY: Internal API secret for authenticated requests
const INTERNAL_API_SECRET = import.meta.env.VITE_INTERNAL_API_SECRET || '';

// Helper to get auth headers for API requests
export function getAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };
  if (INTERNAL_API_SECRET) {
    headers['X-Internal-Secret'] = INTERNAL_API_SECRET;
  }
  return headers;
}

// Gemini configuration
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// OpenAI configuration
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';

// Paper mode: 'draft' uses fast models, 'research' uses powerful models
type PaperMode = 'draft' | 'research';
let currentPaperMode: PaperMode = 'research';

// Model selection based on paper mode
const MODEL_CONFIG = {
  draft: {
    gemini: 'gemini-2.0-flash-exp',
    openai: 'gpt-4o-mini'
  },
  research: {
    gemini: 'gemini-3-pro-preview',
    openai: 'gpt-5.2'
  }
};

// Dynamic model getters
function getGeminiModel(): string {
  return MODEL_CONFIG[currentPaperMode].gemini;
}

function getOpenAIModel(): string {
  return MODEL_CONFIG[currentPaperMode].openai;
}

/**
 * Set the paper mode (draft or research)
 * Draft mode: Uses fast models (gemini-2.0-flash-exp, gpt-4o-mini)
 * Research mode: Uses powerful models (gemini-3-pro-preview, gpt-5.2)
 */
export function setPaperMode(mode: PaperMode): void {
  currentPaperMode = mode;
  console.log(`[GeminiService] Paper mode set to: ${mode}`);
  console.log(`[GeminiService] Using Gemini model: ${getGeminiModel()}`);
  console.log(`[GeminiService] Using OpenAI model: ${getOpenAIModel()}`);
}

// Dynamic API URL getter for Gemini
function getGeminiDirectUrl(): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/${getGeminiModel()}:generateContent?key=${GEMINI_API_KEY}`;
}
const OPENAI_DIRECT_URL = 'https://api.openai.com/v1/chat/completions';

// Legacy compatibility
const API_KEY = GEMINI_API_KEY;

// Log configuration status (no sensitive data)
if (!API_BASE_URL && !GEMINI_API_KEY) {
  console.error('[Gemini] No API configuration found. Set VITE_API_URL or VITE_GEMINI_API_KEY.');
} else if (API_BASE_URL) {
  console.log('[API] Using Vercel proxy:', API_BASE_URL);
} else {
  console.log('[API] Using direct API calls (development mode)');
}

// ============================================================================
// Example Papers for Research Mode
// ============================================================================

interface ExamplePaper {
  filename: string;
  base64: string;
  mimeType: string;
  size: number;
}

// Cache for loaded example papers (to avoid repeated fetches)
let cachedExamplePapers: ExamplePaper[] | null = null;
let examplePapersLoadPromise: Promise<ExamplePaper[]> | null = null;

/**
 * Load ICIS 2024 example papers for use as exemplars in research mode
 * Papers are cached after first load to avoid repeated API calls
 *
 * @param count - Number of papers to load (default: 10, max: 11)
 * @returns Array of example papers with base64-encoded PDF content
 */
async function loadExamplePapers(count: number = 10): Promise<ExamplePaper[]> {
  // Return cached papers if available
  if (cachedExamplePapers && cachedExamplePapers.length >= count) {
    console.log(`[ExamplePapers] Using cached papers (${cachedExamplePapers.length} available)`);
    return cachedExamplePapers.slice(0, count);
  }

  // If a load is already in progress, wait for it
  if (examplePapersLoadPromise) {
    console.log('[ExamplePapers] Load already in progress, waiting...');
    const papers = await examplePapersLoadPromise;
    return papers.slice(0, count);
  }

  // Start loading
  console.log(`[ExamplePapers] Loading ${count} example papers...`);

  examplePapersLoadPromise = (async () => {
    try {
      // Determine API URL
      const apiUrl = API_BASE_URL
        ? `${API_BASE_URL}/api/example-papers?count=${count}`
        : `${LOCAL_BACKEND_URL}/api/example-papers?count=${count}`;

      console.log(`[ExamplePapers] Fetching from: ${apiUrl}`);

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error(`Failed to load example papers: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.success || !data.papers) {
        throw new Error(data.error || 'Invalid response from example papers API');
      }

      cachedExamplePapers = data.papers;
      console.log(`[ExamplePapers] Loaded ${data.papers.length} papers (${Math.round(data.totalSize / 1024 / 1024)}MB total)`);

      return data.papers;
    } catch (error) {
      console.error('[ExamplePapers] Failed to load:', error);
      // Don't cache the failure
      examplePapersLoadPromise = null;
      throw error;
    }
  })();

  return examplePapersLoadPromise;
}

/**
 * Extract all text content from Gemini response parts.
 * Gemini can return multiple parts when responses are long - concatenate them all.
 */
function extractAllTextParts(data: any): string | null {
  const parts = data.candidates?.[0]?.content?.parts;
  if (!parts || !Array.isArray(parts)) {
    return null;
  }

  const textParts = parts
    .filter((part: any) => part.text)
    .map((part: any) => part.text);

  if (textParts.length === 0) {
    return null;
  }

  if (textParts.length > 1) {
    console.log(`[Gemini] Concatenating ${textParts.length} text parts`);
  }

  return textParts.join('');
}

/**
 * Call Gemini with example papers as context (research mode only)
 * Includes up to 10 ICIS 2024 exemplar papers as multimodal PDF content
 *
 * @param prompt - The text prompt
 * @param systemInstruction - System instruction for the model
 * @param examplePapers - Array of example papers to include
 * @returns The model's response text
 */
async function callGeminiWithExamples(
  prompt: string,
  systemInstruction: string,
  examplePapers: ExamplePaper[]
): Promise<string> {
  // Build content parts: first the PDFs, then the text prompt
  const parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }> = [];

  // Add each example paper as inline PDF data
  for (const paper of examplePapers) {
    parts.push({
      inlineData: {
        mimeType: paper.mimeType,
        data: paper.base64
      }
    });
  }

  // Add instruction about the examples
  const exampleInstruction = `
You have been provided with ${examplePapers.length} exemplar ICIS (International Conference on Information Systems) papers as PDFs above.
These are high-quality, published papers that represent the standard of excellence for ICIS publications.

CRITICAL INSTRUCTION: Use these papers as examples of:
1. Academic writing style and tone appropriate for top-tier IS venues
2. Paper structure and section organization
3. Depth and rigor of theoretical development
4. Quality of literature review and citation practices
5. Methodology presentation standards
6. Results presentation and interpretation
7. Discussion and contribution articulation

Your output should match the quality, depth, and academic rigor of these exemplar papers.

`;

  // Add the actual prompt with the example instruction
  parts.push({
    text: exampleInstruction + prompt
  });

  const body = {
    contents: [{ parts }],
    systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
    generationConfig: {
      maxOutputTokens: 8192,
      temperature: 0.7
    }
  };

  console.log(`[Gemini] Calling with ${examplePapers.length} example papers...`);
  console.log(`[Gemini] Using model: ${getGeminiModel()}`);
  console.log(`[Gemini] Total parts: ${parts.length} (${examplePapers.length} PDFs + 1 text)`);

  // Check for proxy availability first (like callGemini does)
  const endpoint = await getApiEndpoint();

  // Use a longer timeout for multimodal requests
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    console.log('[Gemini] Request timeout - aborting after 5 minutes');
    controller.abort();
  }, 300000); // 5 minute timeout for large multimodal requests

  try {
    let response: Response;

    if (endpoint.type === 'vercel') {
      // Use Vercel proxy (recommended - keeps API key secure)
      const proxyUrl = `${endpoint.baseUrl}/api/gemini`;
      console.log(`[Gemini] Using Vercel proxy for multimodal request: ${proxyUrl}`);

      response = await fetch(proxyUrl, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ ...body, model: getGeminiModel() }),
        signal: controller.signal
      });
    } else {
      // Direct API call (requires API key)
      if (!API_KEY) {
        throw new GeminiError(
          GeminiErrorType.API_KEY_INVALID,
          'Gemini API key is not configured and no proxy available',
          'Missing VITE_GEMINI_API_KEY',
          false
        );
      }

      console.log('[Gemini] Using direct API for multimodal request');
      response = await fetch(getGeminiDirectUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal
      });
    }

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw parseApiError(response.status, errorText);
    }

    const data = await response.json();
    const content = extractAllTextParts(data);
    const finishReason = data.candidates?.[0]?.finishReason;

    // Log finish reason to diagnose truncation issues
    if (finishReason && finishReason !== 'STOP') {
      console.warn(`[Gemini] Response finished with reason: ${finishReason} (content length: ${content?.length || 0})`);
    }

    if (!content) {
      if (finishReason === 'SAFETY') {
        throw new GeminiError(
          GeminiErrorType.CONTENT_FILTERED,
          'Response was filtered due to safety settings.',
          `Finish reason: ${finishReason}`,
          false
        );
      }
      if (finishReason === 'RECITATION') {
        // RECITATION means Gemini detected potential copyright issues with example papers
        // This is retryable - the caller should retry without example papers
        console.warn('[Gemini] RECITATION detected - example papers may have triggered copyright filter');
        throw new GeminiError(
          GeminiErrorType.CONTENT_FILTERED,
          'Response blocked due to similarity to training data (RECITATION). Retrying without example papers.',
          `Finish reason: ${finishReason}`,
          true  // Mark as retryable
        );
      }
      throw new GeminiError(
        GeminiErrorType.INVALID_RESPONSE,
        'Empty response from AI with examples.',
        JSON.stringify(data).substring(0, 200),
        true
      );
    }

    console.log(`[Gemini] Response received with examples (${content.length} chars)`);
    return content;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof GeminiError) {
      throw error;
    }

    const networkError = error as Error;
    if (networkError.name === 'AbortError') {
      throw new GeminiError(
        GeminiErrorType.NETWORK_ERROR,
        'Request timed out (5 min). The request with example papers may be too large.',
        'AbortError: Request timeout',
        false
      );
    }

    throw new GeminiError(
      GeminiErrorType.UNKNOWN,
      `Error with example papers: ${networkError.message}`,
      networkError.stack || networkError.message,
      false
    );
  }
}

// Retry configuration
const RETRY_CONFIG = {
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 10000,
  retryableStatusCodes: [503, 429, 500, 502, 504]
};

// Structured error types for better error handling
export enum GeminiErrorType {
  API_KEY_INVALID = 'API_KEY_INVALID',
  RATE_LIMITED = 'RATE_LIMITED',
  MODEL_OVERLOADED = 'MODEL_OVERLOADED',
  NETWORK_ERROR = 'NETWORK_ERROR',
  INVALID_RESPONSE = 'INVALID_RESPONSE',
  CONTENT_FILTERED = 'CONTENT_FILTERED',
  UNKNOWN = 'UNKNOWN'
}

export class GeminiError extends Error {
  constructor(
    public type: GeminiErrorType,
    public userMessage: string,
    public technicalDetails: string,
    public retryable: boolean = false,
    public statusCode?: number
  ) {
    super(userMessage);
    this.name = 'GeminiError';
  }
}

/**
 * Callback type for data file confirmation
 * Shows preview to user and returns true if user confirms, false to cancel
 */
export type DataFileConfirmCallback = (preview: {
  filename: string;
  firstLine: string;
  totalLines: number;
}) => Promise<boolean>;

// Parse API error response into structured error
function parseApiError(statusCode: number, errorText: string): GeminiError {
  // Try to parse JSON error response
  let errorData: { error?: { message?: string; code?: number; status?: string } } = {};
  try {
    errorData = JSON.parse(errorText);
  } catch {
    // Not JSON, use raw text
  }

  const message = errorData.error?.message || errorText;
  const status = errorData.error?.status || '';

  switch (statusCode) {
    case 401:
    case 403:
      return new GeminiError(
        GeminiErrorType.API_KEY_INVALID,
        'API key is invalid or missing. Please check your configuration.',
        message,
        false,
        statusCode
      );
    case 429:
      return new GeminiError(
        GeminiErrorType.RATE_LIMITED,
        'Rate limit exceeded. Please wait a moment before trying again.',
        message,
        true,
        statusCode
      );
    case 503:
      if (status === 'UNAVAILABLE' || message.includes('overloaded')) {
        return new GeminiError(
          GeminiErrorType.MODEL_OVERLOADED,
          'The AI model is temporarily overloaded. Retrying automatically...',
          message,
          true,
          statusCode
        );
      }
      return new GeminiError(
        GeminiErrorType.UNKNOWN,
        'Service temporarily unavailable. Retrying...',
        message,
        true,
        statusCode
      );
    case 500:
    case 502:
    case 504:
      return new GeminiError(
        GeminiErrorType.UNKNOWN,
        'Server error. Retrying automatically...',
        message,
        true,
        statusCode
      );
    default:
      return new GeminiError(
        GeminiErrorType.UNKNOWN,
        `API error (${statusCode}): ${message.substring(0, 100)}`,
        message,
        false,
        statusCode
      );
  }
}

// Helper function to delay execution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to call Gemini API directly with retry logic
/**
 * Call Gemini via Vercel or local proxy
 */
async function callGeminiViaProxy(
  body: Record<string, unknown>,
  baseUrl: string
): Promise<string> {
  const proxyUrl = baseUrl === LOCAL_BACKEND_URL
    ? `${baseUrl}/api/gemini/chat`  // Local backend (if exists)
    : `${baseUrl}/api/gemini`;       // Vercel function

  console.log(`[Gemini] Calling via proxy: ${proxyUrl}`);

  // Add model to request body for proxy
  const requestBody = {
    ...body,
    model: getGeminiModel()
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    console.log('[Gemini] Proxy request timeout - aborting after 3 minutes');
    controller.abort();
  }, 180000);

  const response = await fetch(proxyUrl, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(requestBody),
    signal: controller.signal
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new GeminiError(
      GeminiErrorType.UNKNOWN,
      `Gemini proxy error: ${errorData.error || errorData.details || 'Unknown error'}`,
      JSON.stringify(errorData),
      response.status >= 500
    );
  }

  const data = await response.json();
  const content = extractAllTextParts(data);
  const finishReason = data.candidates?.[0]?.finishReason;

  // Log finish reason to diagnose truncation issues
  if (finishReason && finishReason !== 'STOP') {
    console.warn(`[Gemini Proxy] Response finished with reason: ${finishReason} (content length: ${content?.length || 0})`);
  }

  if (!content) {
    throw new GeminiError(
      GeminiErrorType.INVALID_RESPONSE,
      'Received empty response from AI proxy.',
      JSON.stringify(data).substring(0, 200),
      true
    );
  }

  return content;
}

async function callGemini(prompt: string, systemInstruction?: string): Promise<string> {
  const body: Record<string, unknown> = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      maxOutputTokens: 8192,
      temperature: 0.7
    }
  };

  if (systemInstruction) {
    body.systemInstruction = { parts: [{ text: systemInstruction }] };
  }

  // Check for proxy availability first
  const endpoint = await getApiEndpoint();

  // Use proxy if available (more secure)
  if (endpoint.type === 'vercel') {
    console.log('[Gemini] Using Vercel proxy...');
    return callGeminiViaProxy(body, endpoint.baseUrl);
  }

  // For local development, fall through to direct API call
  // (local backend doesn't have Gemini proxy by default)

  // Direct API call requires API key
  if (!API_KEY) {
    throw new GeminiError(
      GeminiErrorType.API_KEY_INVALID,
      'API key not configured. Set VITE_API_URL for production or VITE_GEMINI_API_KEY for development.',
      'Missing API key and no proxy available',
      false
    );
  }

  let lastError: GeminiError | null = null;

  for (let attempt = 0; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
    try {
      // Add timeout to fetch (3 minutes for large requests like paper revision)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        console.log('[Gemini] Request timeout - aborting after 3 minutes');
        controller.abort();
      }, 180000); // 3 minute timeout

      console.log(`[Gemini] Starting direct API call (attempt ${attempt + 1}/${RETRY_CONFIG.maxRetries + 1})...`);
      console.log(`[Gemini] Prompt length: ${prompt.length} characters`);
      console.log(`[Gemini] Using model: ${getGeminiModel()}`);

      const response = await fetch(getGeminiDirectUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      console.log(`[Gemini] Response received: status ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        const error = parseApiError(response.status, errorText);

        // Check if this is a retryable error
        if (error.retryable && attempt < RETRY_CONFIG.maxRetries) {
          const delayMs = Math.min(
            RETRY_CONFIG.initialDelayMs * Math.pow(2, attempt),
            RETRY_CONFIG.maxDelayMs
          );
          console.log(`[Gemini] ${error.type}: ${error.userMessage} Retrying in ${delayMs}ms (attempt ${attempt + 1}/${RETRY_CONFIG.maxRetries})...`);
          await delay(delayMs);
          lastError = error;
          continue;
        }

        throw error;
      }

      const data = await response.json();
      const content = extractAllTextParts(data);
      const finishReason = data.candidates?.[0]?.finishReason;

      // Log finish reason to diagnose truncation issues
      if (finishReason && finishReason !== 'STOP') {
        console.warn(`[Gemini Direct] Response finished with reason: ${finishReason} (content length: ${content?.length || 0})`);
      }

      if (!content) {
        // Check for content filtering
        if (finishReason === 'SAFETY') {
          throw new GeminiError(
            GeminiErrorType.CONTENT_FILTERED,
            'Response was filtered due to safety settings. Please try rephrasing your request.',
            `Finish reason: ${finishReason}`,
            false
          );
        }
        throw new GeminiError(
          GeminiErrorType.INVALID_RESPONSE,
          'Received empty response from AI. Please try again.',
          JSON.stringify(data).substring(0, 200),
          true
        );
      }

      return content;
    } catch (error) {
      // If it's already a GeminiError, handle it
      if (error instanceof GeminiError) {
        if (error.retryable && attempt < RETRY_CONFIG.maxRetries) {
          lastError = error;
          continue;
        }
        throw error;
      }

      const networkError = error as Error;

      // Handle abort/timeout errors
      if (networkError.name === 'AbortError' || networkError.message?.includes('aborted')) {
        console.log('[Gemini] Request was aborted (timeout)');
        throw new GeminiError(
          GeminiErrorType.NETWORK_ERROR,
          'Request timed out after 3 minutes. The paper may be too large. Try again or simplify the content.',
          'AbortError: Request timeout',
          false  // Don't retry timeouts - likely a payload size issue
        );
      }

      // Network errors
      if (networkError.message?.includes('fetch') || networkError.message?.includes('network') || networkError.message?.includes('Failed to fetch')) {
        const geminiError = new GeminiError(
          GeminiErrorType.NETWORK_ERROR,
          'Network error. Please check your internet connection.',
          networkError.message,
          true
        );

        if (attempt < RETRY_CONFIG.maxRetries) {
          const delayMs = Math.min(
            RETRY_CONFIG.initialDelayMs * Math.pow(2, attempt),
            RETRY_CONFIG.maxDelayMs
          );
          console.log(`[Gemini] Network error, retrying in ${delayMs}ms (attempt ${attempt + 1}/${RETRY_CONFIG.maxRetries})...`);
          await delay(delayMs);
          lastError = geminiError;
          continue;
        }
        throw geminiError;
      }

      // Unknown error
      console.log(`[Gemini] Unknown error: ${networkError.name} - ${networkError.message}`);
      throw new GeminiError(
        GeminiErrorType.UNKNOWN,
        `Unexpected error: ${networkError.message}`,
        networkError.stack || networkError.message,
        false
      );
    }
  }

  throw lastError || new GeminiError(
    GeminiErrorType.UNKNOWN,
    'Max retries exceeded',
    'All retry attempts failed',
    false
  );
}

/**
 * Clean LaTeX output from Gemini - remove any non-LaTeX content
 * Gemini sometimes includes code blocks, explanations, verification steps, etc.
 */
function cleanLatexOutput(content: string): string {
  let cleaned = content;

  // If the content is wrapped in a LaTeX code block, extract it
  const latexBlockMatch = cleaned.match(/```latex\s*([\s\S]*?)\s*```/);
  if (latexBlockMatch) {
    cleaned = latexBlockMatch[1];
  }

  // Find where \end{document} is and truncate everything after it
  const endDocIndex = cleaned.indexOf('\\end{document}');
  if (endDocIndex !== -1) {
    cleaned = cleaned.substring(0, endDocIndex + '\\end{document}'.length);
  }

  // Remove any JavaScript/code blocks that might be in the content
  cleaned = cleaned.replace(/```javascript[\s\S]*?```/g, '');
  cleaned = cleaned.replace(/```js[\s\S]*?```/g, '');
  cleaned = cleaned.replace(/```python[\s\S]*?```/g, '');
  cleaned = cleaned.replace(/```[\s\S]*?```/g, '');

  // Remove any "STEP X:" or verification report sections that might appear
  cleaned = cleaned.replace(/\*\*STEP \d+:[\s\S]*?(?=\\section|\\end{document}|$)/gi, '');
  cleaned = cleaned.replace(/Verification Report:[\s\S]*$/gi, '');
  cleaned = cleaned.replace(/Check \d+ -[\s\S]*?(?=\\section|\\end{document}|$)/gi, '');

  // Remove console.log or other JS-like statements
  cleaned = cleaned.replace(/console\.log\([\s\S]*?\);/g, '');
  cleaned = cleaned.replace(/const \w+ = \{[\s\S]*?\};/g, '');

  // Clean up any trailing whitespace
  cleaned = cleaned.trim();

  console.log(`[cleanLatexOutput] Cleaned content from ${content.length} to ${cleaned.length} characters`);

  return cleaned;
}

// Helper function to call Gemini API with JSON response
async function callGeminiJson<T>(prompt: string): Promise<T> {
  const jsonPrompt = `${prompt}\n\nRespond ONLY with valid JSON, no other text.`;
  const text = await callGemini(jsonPrompt);

  // Extract JSON from response (handle markdown code blocks)
  let jsonStr = text;
  const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/```\s*([\s\S]*?)\s*```/);
  if (jsonMatch) {
    jsonStr = jsonMatch[1];
  }

  return JSON.parse(jsonStr.trim());
}

// Helper function to call Gemini with multimodal content (PDF + text)
async function callGeminiWithPdf(
  prompt: string,
  pdfBase64: string,
  pdfMimeType: string = 'application/pdf'
): Promise<string> {
  if (!API_KEY) {
    throw new GeminiError(
      GeminiErrorType.API_KEY_INVALID,
      'Gemini API key is not configured',
      'Missing VITE_GEMINI_API_KEY',
      false
    );
  }

  const body = {
    contents: [{
      parts: [
        {
          inlineData: {
            mimeType: pdfMimeType,
            data: pdfBase64
          }
        },
        {
          text: prompt
        }
      ]
    }],
    generationConfig: {
      maxOutputTokens: 8192,  // Safe limit for most Gemini models
      temperature: 0.7
    }
  };

  console.log('[Gemini] Calling API with PDF content...');
  console.log(`[Gemini] Using model: ${getGeminiModel()}`);

  const response = await fetch(getGeminiDirectUrl(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw parseApiError(response.status, errorText);
  }

  const data = await response.json();
  const content = extractAllTextParts(data);
  const finishReason = data.candidates?.[0]?.finishReason;

  // Log finish reason to diagnose truncation issues
  if (finishReason && finishReason !== 'STOP') {
    console.warn(`[Gemini PDF] Response finished with reason: ${finishReason} (content length: ${content?.length || 0})`);
  }

  if (!content) {
    throw new GeminiError(
      GeminiErrorType.INVALID_RESPONSE,
      'Empty response when processing PDF',
      JSON.stringify(data).substring(0, 200),
      true
    );
  }

  return content;
}

// --- Builder Functions ---

/**
 * Paper sections for generation
 */
interface PaperSection {
  name: string;
  key: string;
  prompt: string;
  minWords: number;
}

/**
 * Progress callback for section generation
 */
type ProgressCallback = (section: string, status: 'starting' | 'completed' | 'error') => void;

/**
 * Get paper sections based on whether it's a full or partial paper
 */
function getPaperSections(isPartialPaper: boolean): PaperSection[] {
  const baseSections: PaperSection[] = [
    {
      name: 'Title',
      key: 'title',
      prompt: `Generate a compelling academic title for this ICIS research paper that:
1. Is concise (10-15 words maximum)
2. Clearly indicates the research focus and contribution
3. Uses appropriate academic terminology for Information Systems
4. Avoids colons if possible, but can use them if needed for clarity
5. Does NOT include any LaTeX commands - just return the plain text title
Return ONLY the title text, nothing else.`,
      minWords: 5
    },
    {
      name: 'Abstract',
      key: 'abstract',
      prompt: `Write a 150-200 word abstract that:
1. Align with the paper title provided in the previous sections
2. States the research problem clearly
3. Describes the methodology/approach
4. Highlights key theoretical contributions
5. Summarizes main findings
6. Notes practical implications`,
      minWords: 150
    },
    {
      name: 'Introduction',
      key: 'introduction',
      prompt: `Write a comprehensive Introduction section (800-1000 words) that:
1. Opens with a compelling hook that connects to the paper title
2. Establishes the importance and timeliness of the research
3. Identifies the research gap in existing literature
4. States the research question(s) clearly (aligned with the title)
5. Previews the theoretical contribution
6. Outlines the paper structure
Use flowing paragraphs (150-250 words each). No bullet points.`,
      minWords: 800
    },
    {
      name: 'Literature Review',
      key: 'literature_review',
      prompt: `Write a Literature Review section (1200-1500 words) that:
1. Reviews relevant theoretical foundations
2. Synthesizes prior empirical work
3. Identifies gaps and tensions in existing research
4. Positions this study within the broader literature
5. Builds toward the theoretical framework
Include at least 15-20 citations. Use flowing paragraphs.`,
      minWords: 1200
    },
    {
      name: 'Theoretical Framework',
      key: 'theory',
      prompt: `Write a Theory/Theoretical Framework section (1000-1200 words) that:
1. Presents the theoretical foundation
2. Develops hypotheses or propositions with clear rationale
3. Explains the mechanisms and relationships
4. Includes a research model or conceptual framework
5. Links back to the literature review
Use formal academic language with clear logical flow.`,
      minWords: 1000
    },
    {
      name: 'Methodology',
      key: 'methodology',
      prompt: `Write a Method section (1000-1200 words) that:
1. Describes the research design and justification
2. Explains data collection procedures
3. Details the sample and sampling approach
4. Describes measures and operationalization
5. Outlines the analysis approach
Be specific and detailed enough for replication.`,
      minWords: 1000
    }
  ];

  if (isPartialPaper) {
    // For partial papers, add a note about pending data collection
    baseSections.push(
      {
        name: 'Conclusion',
        key: 'conclusion',
        prompt: `Write a brief Conclusion section (400-500 words) for a research-in-progress paper that:
1. Summarizes the theoretical contribution
2. Notes that data collection is pending
3. Discusses expected contributions once complete
4. Outlines next steps`,
        minWords: 400
      },
      {
        name: 'References',
        key: 'references',
        prompt: `Generate a BibTeX bibliography with 15-20 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

FORMAT: BibTeX entries. Output ONLY valid BibTeX, no explanatory text.

@article{davis1989perceived,
  author = {Davis, Fred D.},
  title = {Perceived usefulness, perceived ease of use, and user acceptance of information technology},
  journal = {MIS Quarterly},
  volume = {13},
  number = {3},
  pages = {319--340},
  year = {1989}
}

@article{delone2003delone,
  author = {DeLone, William H. and McLean, Ephraim R.},
  title = {The {DeLone} and {McLean} model of information systems success: A ten-year update},
  journal = {Journal of Management Information Systems},
  volume = {19},
  number = {4},
  pages = {9--30},
  year = {2003}
}

@article{venkatesh2003user,
  author = {Venkatesh, Viswanath and Morris, Michael G. and Davis, Gordon B. and Davis, Fred D.},
  title = {User acceptance of information technology: Toward a unified view},
  journal = {MIS Quarterly},
  volume = {27},
  number = {3},
  pages = {425--478},
  year = {2003}
}

BIBTEX FORMAT RULES:
1. Use @article for journal papers, @inproceedings for conference papers, @book for books
2. Citation key format: authorYYYYfirstword (e.g., davis1989perceived)
3. Author format: LastName, FirstName and LastName, FirstName
4. Use double dashes for page ranges: pages = {123--145}
5. Protect proper nouns with braces: title = {The {DeLone} and {McLean} model}
6. Include: author, title, journal/booktitle, year, volume, number, pages

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods, Academy of Management Review
- Yin (2018) - Case study research design (book)

Requirements:
1. Output ONLY BibTeX entries, no other text
2. ONLY include papers you are confident exist
3. Citation keys must match the \\cite{} commands used in the paper
4. Sort entries alphabetically by citation key`,
        minWords: 300
      }
    );
  } else {
    // Full paper includes Results, Discussion, and Conclusion
    baseSections.push(
      {
        name: 'Results',
        key: 'results',
        prompt: `Write a COMPLETE Results section (1200-1500 words) that:
1. Presents findings systematically based on the methodology described
2. Reports statistical results with effect sizes (generate plausible values consistent with the research design)
3. Addresses each hypothesis or research question from the theory section
4. References tables and figures (e.g., "As shown in Figure 1...", "Table 1 presents...")
5. Reports both significant and non-significant findings
6. If this is a simulation/computational study, report simulation outcomes and model performance metrics
7. If this is qualitative research, present themes and key findings from the analysis

CRITICAL: Do NOT use placeholder text like "[To be completed]" or "[Results pending]".
You MUST generate realistic, plausible findings that are consistent with the research design and methodology.
Use objective, factual language throughout.`,
        minWords: 1200
      },
      {
        name: 'Discussion',
        key: 'discussion',
        prompt: `Write a Discussion section (1000-1200 words) that:
1. Interprets key findings in light of theory
2. Compares results to prior research
3. Explains unexpected findings
4. Discusses theoretical implications
5. Addresses practical implications
6. Acknowledges limitations
7. Suggests future research directions`,
        minWords: 1000
      },
      {
        name: 'Conclusion',
        key: 'conclusion',
        prompt: `Write a Conclusion section (400-500 words) that:
1. Summarizes the main contribution
2. Restates key findings
3. Emphasizes theoretical and practical significance
4. Ends with a strong closing statement`,
        minWords: 400
      },
      {
        name: 'References',
        key: 'references',
        prompt: `Generate a BibTeX bibliography with 20-30 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

FORMAT: BibTeX entries. Output ONLY valid BibTeX, no explanatory text.

@article{davis1989perceived,
  author = {Davis, Fred D.},
  title = {Perceived usefulness, perceived ease of use, and user acceptance of information technology},
  journal = {MIS Quarterly},
  volume = {13},
  number = {3},
  pages = {319--340},
  year = {1989}
}

@article{delone2003delone,
  author = {DeLone, William H. and McLean, Ephraim R.},
  title = {The {DeLone} and {McLean} model of information systems success: A ten-year update},
  journal = {Journal of Management Information Systems},
  volume = {19},
  number = {4},
  pages = {9--30},
  year = {2003}
}

@inproceedings{smith2020icis,
  author = {Smith, John and Jones, Mary},
  title = {Example conference paper title},
  booktitle = {Proceedings of the International Conference on Information Systems (ICIS)},
  year = {2020},
  pages = {1--15}
}

@book{yin2018case,
  author = {Yin, Robert K.},
  title = {Case Study Research and Applications: Design and Methods},
  publisher = {Sage Publications},
  year = {2018},
  edition = {6th}
}

BIBTEX FORMAT RULES:
1. Use @article for journals, @inproceedings for conferences, @book for books
2. Citation key format: authorYYYYfirstword (e.g., davis1989perceived)
3. Author format: LastName, FirstName and LastName, FirstName
4. Use double dashes for page ranges: pages = {123--145}
5. Protect proper nouns with braces: title = {The {DeLone} and {McLean} model}
6. Include: author, title, journal/booktitle, year, volume, number, pages

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods, Academy of Management Review
- Yin (2018) - Case study research design (book)
- Rogers (2003) - Diffusion of Innovations (book)
- Straub et al. (2004) - Validation guidelines, MIS Quarterly

Requirements:
1. Output ONLY BibTeX entries, no other text
2. ONLY include papers you are confident exist
3. Include mix of: @article, @inproceedings (ICIS, ECIS, AMCIS), @book
4. Citation keys must match the \\cite{} commands used in the paper
5. Sort entries alphabetically by citation key`,
        minWords: 500
      }
    );
  }

  return baseSections;
}

/**
 * Generate a single paper section
 * In research mode with example papers, uses multimodal Gemini call with PDF exemplars
 */
async function generateSection(
  section: PaperSection,
  context: {
    interviewTranscript: string;
    previousSections: Record<string, string>;
    researchType?: string;
    dataSummary?: string;  // Data analysis summary to inform Methodology and Results
    examplePapers?: ExamplePaper[];  // ICIS exemplar papers for research mode
  }
): Promise<string> {
  const previousContent = Object.entries(context.previousSections)
    .map(([key, content]) => `[${key}]\n${content.substring(0, 500)}...`)
    .join('\n\n');

  // For References section: Extract ALL citation keys from previous sections
  // This ensures bibitem keys match the cite{} commands used in the paper
  let citationKeysContext = '';
  if (section.key === 'references') {
    const allPreviousText = Object.values(context.previousSections).join('\n');
    // Extract inline APA citations like "(Author, Year)" or "(Author & Author, Year)" or "(Author et al., Year)"
    // Match patterns like: (Davis, 1989), (Jensen & Meckling, 1976), (Venkatesh et al., 2003)
    const citationPattern = /\(([A-Z][a-zA-Z]+(?:\s+(?:&|and)\s+[A-Z][a-zA-Z]+)?(?:\s+et\s+al\.)?),?\s*(\d{4})\)/g;
    const citations = new Set<string>();
    let match;
    while ((match = citationPattern.exec(allPreviousText)) !== null) {
      const author = match[1].replace(/\s+&\s+/g, ' & ').replace(/\s+and\s+/g, ' & ');
      const year = match[2];
      citations.add(`${author} (${year})`);
    }

    if (citations.size > 0) {
      const citationsList = [...citations].sort().join('\n- ');
      console.log(`[generateSection] Found ${citations.size} inline citations in paper`);
      citationKeysContext = `
CITATIONS USED IN PAPER:
The following citations were used in the paper body. Ensure you include matching references:
- ${citationsList}

Generate complete APA references for each of these citations.
`;
    }
  }

  // Add data summary context for sections that need empirical data awareness
  // Include in: abstract, introduction, methodology, results, discussion, conclusion
  let dataContext = '';
  const sectionsNeedingDataContext = ['abstract', 'introduction', 'methodology', 'results', 'discussion', 'conclusion'];

  if (context.dataSummary && sectionsNeedingDataContext.includes(section.key)) {
    console.log(`[generateSection] Adding data summary to ${section.key} section (${context.dataSummary.length} chars)`);

    if (section.key === 'methodology' || section.key === 'results') {
      // Full data context for methodology and results
      dataContext = `
ACTUAL DATA FILE ANALYSIS:
The following is a summary of the actual data file that will be used in this research.
You MUST incorporate these specific details into your writing:

${context.dataSummary}

IMPORTANT: Use the ACTUAL column names, sample sizes, and statistics from the data summary above.
Do NOT use generic placeholders or made-up values - use the real data characteristics.
`;
    } else {
      // Summary context for other sections to establish this is an EMPIRICAL study
      dataContext = `
EMPIRICAL STUDY CONTEXT:
This research includes EMPIRICAL DATA analysis. A real dataset has been provided with the following characteristics:
${context.dataSummary.substring(0, 1000)}

IMPORTANT FOR ${section.key.toUpperCase()}:
- This is an EMPIRICAL study with real data, NOT a purely theoretical paper
- Mention the empirical nature of the research appropriately for this section
- Reference the data-driven approach where relevant
`;
    }
  } else if (context.dataSummary) {
    console.log(`[generateSection] Data summary available but not used for ${section.key} section`);
  }

  const prompt = `You are writing an academic research paper for ICIS (International Conference on Information Systems).

RESEARCH CONTEXT (from interview):
${context.interviewTranscript.substring(0, 3000)}
${dataContext}
${citationKeysContext}
${previousContent ? `PREVIOUSLY WRITTEN SECTIONS (for continuity and alignment):\n${previousContent}\n\nIMPORTANT: If a TITLE has been generated above, ensure your content aligns with and supports that title.\n\n` : ''}

NOW WRITE THE ${section.name.toUpperCase()} SECTION:

${section.prompt}

IMPORTANT:
- Write in formal academic style
- Use flowing paragraphs (150-250 words each)
- Minimum ${section.minWords} words
- No bullet points in the main narrative
- Maintain consistency with previous sections
- Align content with the paper TITLE (if already generated)
- Do NOT include section headers in your response - just the content paragraphs
- Do NOT repeat the section name at the start (no "**Introduction**", "# Introduction", etc.)
- For SUBSECTIONS within a section, use LaTeX format: \\subsection{Subsection Title}
- Do NOT use markdown bold **Subsection Title** for subsections - use \\subsection{} instead
- NEVER use placeholder text like "[To be completed]", "[TBD]", "[Insert X here]", or "[Reference to be completed]"
- ALL references in the bibliography MUST be complete with real author names, paper titles, journal/venue names, and publication years
- Generate complete, realistic content based on the research context provided${context.dataSummary ? '\n- This is an EMPIRICAL study with real data - make this clear in your writing\n- For Methodology/Results: USE the actual data characteristics from the DATA FILE ANALYSIS above\n- Reference the data-driven nature of the research where appropriate' : ''}

CITATION FORMAT (CRITICAL - Inline APA 7th Edition Style):
- Write citations INLINE using plain text author-year format, NOT LaTeX \\cite{} commands
- Parenthetical citation: "prior research has shown this effect (Jensen \\& Meckling, 1976)"
- Narrative citation: "Jensen and Meckling (1976) demonstrated that..."
- Two authors: Always include both names: "(Davis \\& Bagozzi, 1989)"
- Three or more authors: Use "et al." after first author: "(Venkatesh et al., 2003)"
- Multiple citations: Separate with semicolons, alphabetical order: "(Davis, 1989; Venkatesh et al., 2003)"
- Use \\& for ampersand in parenthetical citations, "and" in narrative citations
- Do NOT use \\cite{} or \\citep{} commands - write the author names and year directly
- NEVER include a "References:" section, bibliography, or reference list at the end of your content
- NEVER list out the references you cited - just use inline citations
- Your output should contain ONLY the section content, ending with the last paragraph of prose
- References are generated separately and will appear at the end of the full paper`;

  const systemInstruction = "You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards.";

  // Use example papers in research mode for higher quality output
  let content: string;
  if (context.examplePapers && context.examplePapers.length > 0 && currentPaperMode === 'research') {
    console.log(`[generateSection] Using ${context.examplePapers.length} example papers for ${section.name} (research mode)`);
    try {
      content = await callGeminiWithExamples(prompt, systemInstruction, context.examplePapers);
    } catch (error) {
      // If RECITATION error (copyright filter), retry without example papers
      if (error instanceof GeminiError && error.details?.includes('RECITATION')) {
        console.warn(`[generateSection] RECITATION error for ${section.name} - retrying without example papers`);
        content = await callGemini(prompt, systemInstruction);
      } else {
        throw error;
      }
    }
  } else {
    content = await callGemini(prompt, systemInstruction);
  }

  // Convert markdown subsection headers to LaTeX and strip main section headers
  content = content
    // Convert standalone **Header** lines to \subsection{Header}
    .replace(/^\s*\*\*([^*\n]+)\*\*\s*$/gm, '\\subsection{$1}')
    // Remove # Header lines (main section duplicates)
    .replace(/^\s*#{1,3}\s+.+\n/gm, '')
    .trim();

  return content;
}

/**
 * Result of paper building including alerts
 */
export interface BuilderResult {
  paperContent: string;
  dataAlert?: string;  // Alert for supervisor if data issues occurred
  usedSyntheticData: boolean;
  dataSummary?: string;  // Summary of data analysis (dataset size, columns, distributions)
  // Compilation warnings (populated after PDF compilation)
  pageCount?: number;      // Number of pages in compiled PDF
  exceedsPageLimit?: boolean;  // True if paper exceeds ICIS 16-page limit
  warnings?: string[];     // List of warnings to display to user
  // Generated assets for download
  infographicBase64?: string;  // Base64 PNG of generated infographic
  dataTableCsv?: string;       // CSV content of extracted data table
}

/**
 * Generate paper content from interview transcript - SECTION BY SECTION
 * This approach avoids token limits by generating each section separately
 */
export const runBuilder = async (
  interviewTranscript: string = "Mock transcript content...",
  isPartialPaper: boolean = false,
  onProgress?: ProgressCallback,
  dataFileName?: string,
  onDataFileConfirm?: DataFileConfirmCallback
): Promise<BuilderResult> => {
  console.log(`[runBuilder] ENTRY - dataFileName="${dataFileName}" (type: ${typeof dataFileName})`);
  const sections = getPaperSections(isPartialPaper);
  const generatedSections: Record<string, string> = {};

  console.log(`[Builder] Starting section-by-section generation (${sections.length} sections, ${isPartialPaper ? 'partial' : 'full'} paper)`);

  // STEP 1: Analyze data file FIRST (for ALL research types when data exists)
  // This provides the data summary that informs Methodology and Results sections
  let dataSummary: string | undefined;
  let dataAlert: string | undefined;

  if (dataFileName) {
    console.log(`[Builder] Data file provided: ${dataFileName} - analyzing for ALL research types`);
    onProgress?.('Data Analysis', 'starting');

    try {
      const analysisResult = await analyzeDataFile(
        dataFileName,
        (msg) => console.log(`[Builder] ${msg}`),
        onDataFileConfirm
      );

      console.log(`[Builder] Data analysis result:`, {
        success: analysisResult.success,
        dataFileFound: analysisResult.dataFileFound,
        hasSummary: !!analysisResult.dataSummary,
        summaryLength: analysisResult.dataSummary?.length || 0,
        error: analysisResult.error
      });

      if (analysisResult.success && analysisResult.dataSummary) {
        dataSummary = analysisResult.dataSummary;
        console.log('[Builder] Data analysis complete - summary available for paper generation');
        console.log('[Builder] Data summary preview:', dataSummary.substring(0, 500));
        onProgress?.('Data Analysis', 'completed');
      } else {
        dataAlert = `*** DATA ALERT: Could not analyze data file "${dataFileName}". ${analysisResult.error || 'File may be missing or unreadable.'}`;
        console.warn(`[Builder] ${dataAlert}`);
        onProgress?.('Data Analysis', 'error');
      }
    } catch (error) {
      dataAlert = `*** DATA ALERT: Error analyzing data file: ${(error as Error).message}`;
      console.error(`[Builder] ${dataAlert}`);
      onProgress?.('Data Analysis', 'error');
    }
  } else {
    console.log('[Builder] No data file provided - proceeding without data analysis');
  }

  // STEP 2: Load example papers for research mode
  // These are used as exemplars for Gemini to match quality and style
  let examplePapers: ExamplePaper[] = [];
  if (currentPaperMode === 'research') {
    try {
      onProgress?.('Loading Examples', 'starting');
      console.log('[Builder] Research mode - loading ICIS 2024 example papers...');
      examplePapers = await loadExamplePapers(5);  // Load 5 smallest exemplar papers (~2.6MB raw, ~3.5MB base64)
      console.log(`[Builder] Loaded ${examplePapers.length} example papers for quality calibration`);
      onProgress?.('Loading Examples', 'completed');
    } catch (error) {
      console.warn('[Builder] Could not load example papers:', (error as Error).message);
      console.warn('[Builder] Proceeding without example papers - quality may be lower');
      onProgress?.('Loading Examples', 'error');
      // Continue without example papers - don't fail the build
    }
  } else {
    console.log('[Builder] Draft mode - skipping example papers for faster generation');
  }

  // Generate visualizations BEFORE Results section (for full papers)
  // This allows the Results section to reference the actual figures
  // Figures are generated regardless of whether data is available:
  // - With data: data-driven charts via QuickChart.io (PNG images)
  // - Without data: AI-generated conceptual charts via QuickChart.io (PNG images)
  let generatedFigures: GeneratedFigure[] = [];
  let usedSyntheticData = false;
  let figuresInfoForResults = '';

  if (!isPartialPaper) {
    try {
      onProgress?.('Visualizations', 'starting');
      console.log('[Builder] Generating visualizations BEFORE Results section...');
      console.log(`[Builder] Data summary available: ${!!dataSummary}, Data file: ${dataFileName || 'none'}`);

      // Create research context from interview (we don't have sections yet)
      const researchContext = `Research Interview: ${interviewTranscript.substring(0, 2000)}`;

      const vizResult = await generateVisualizations(
        interviewTranscript,
        researchContext,
        dataFileName,
        (msg) => console.log(`[Builder] ${msg}`),
        dataSummary
      );

      generatedFigures = vizResult.figures;
      usedSyntheticData = vizResult.usedSyntheticData;

      // Build figure info string for Results section prompt
      if (generatedFigures.length > 0) {
        figuresInfoForResults = '\n\nGENERATED FIGURES (reference these in your Results section):\n';
        generatedFigures.forEach((fig, i) => {
          figuresInfoForResults += `- Figure ${i + 1} (\\ref{fig:fig${i + 1}}): ${fig.description}\n`;
        });
        figuresInfoForResults += '\nIMPORTANT: Reference each figure in the text using Figure~\\ref{fig:fig1}, Figure~\\ref{fig:fig2}, etc.\n';
        figuresInfoForResults += 'Example: "As shown in Figure~\\ref{fig:fig1}, the distribution of..."\n';
      }

      // Merge visualization alerts with data analysis alerts
      if (vizResult.dataAlert) {
        dataAlert = dataAlert
          ? `${dataAlert}\n${vizResult.dataAlert}`
          : vizResult.dataAlert;
      }

      onProgress?.('Visualizations', 'completed');
      console.log(`[Builder] Generated ${generatedFigures.length} figures before Results section`);
    } catch (error) {
      console.error('[Builder] Visualization generation failed:', error);
      onProgress?.('Visualizations', 'error');
      const vizError = `*** VISUALIZATION ERROR: ${(error as Error).message}`;
      dataAlert = dataAlert ? `${dataAlert}\n${vizError}` : vizError;
      usedSyntheticData = true;
    }
  }

  for (const section of sections) {
    try {
      onProgress?.(section.name, 'starting');
      console.log(`[Builder] Generating: ${section.name}...`);

      // For Results section, include figure information
      const sectionDataSummary = section.key === 'results' && figuresInfoForResults
        ? (dataSummary || '') + figuresInfoForResults
        : dataSummary;

      const content = await generateSection(section, {
        interviewTranscript,
        previousSections: generatedSections,
        dataSummary: sectionDataSummary,  // Pass data summary + figure info for Results
        examplePapers  // ICIS exemplar papers for research mode quality calibration
      });

      generatedSections[section.key] = content;
      onProgress?.(section.name, 'completed');
      console.log(`[Builder] Completed: ${section.name} (${content.split(/\s+/).length} words)`);

      // Small delay between sections to avoid rate limiting
      await delay(500);
    } catch (error) {
      onProgress?.(section.name, 'error');
      console.error(`[Builder] Error generating ${section.name}:`, error);
      throw new Error(`Failed to generate ${section.name}: ${(error as Error).message}`);
    }
  }

  // If we didn't generate figures earlier (no dataSummary), try now
  if (!isPartialPaper && generatedFigures.length === 0) {
    try {
      onProgress?.('Visualizations', 'starting');
      console.log('[Builder] Generating visualizations (post-sections fallback)...');

      const researchContext = `
Abstract: ${generatedSections.abstract?.substring(0, 500) || ''}
Research Focus: ${generatedSections.introduction?.substring(0, 500) || ''}
Methodology: ${generatedSections.methodology?.substring(0, 500) || ''}
`;

      const vizResult = await generateVisualizations(
        interviewTranscript,
        researchContext,
        dataFileName,
        (msg) => console.log(`[Builder] ${msg}`),
        dataSummary
      );

      generatedFigures = vizResult.figures;
      usedSyntheticData = vizResult.usedSyntheticData;

      if (vizResult.dataAlert) {
        dataAlert = dataAlert
          ? `${dataAlert}\n${vizResult.dataAlert}`
          : vizResult.dataAlert;
      }

      if (!dataSummary && vizResult.dataSummary) {
        dataSummary = vizResult.dataSummary;
      }

      onProgress?.('Visualizations', 'completed');
      console.log(`[Builder] Generated ${generatedFigures.length} figures (fallback)`);
    } catch (error) {
      console.error('[Builder] Visualization generation failed:', error);
      onProgress?.('Visualizations', 'error');
      usedSyntheticData = true;
    }
  }

  // STEP 4: Generate infographic from the paper content (full papers only)
  // This creates a visual summary using Gemini image generation
  let infographicBase64: string | undefined;
  if (!isPartialPaper) {
    try {
      onProgress?.('Infographic', 'starting');
      console.log('[Builder] Generating research infographic...');

      const infographicResult = await generateInfographic(
        generatedSections,
        (msg) => console.log(`[Builder] ${msg}`)
      );

      if (infographicResult.success && infographicResult.figure) {
        // Add infographic to the figures array
        generatedFigures.push(infographicResult.figure);

        // Store the infographic PNG for LaTeX compilation
        const { storePngFiguresForCompilation, getPngFiguresForCompilation } = await import('./fileApi');
        const existingPngs = getPngFiguresForCompilation();
        storePngFiguresForCompilation([
          ...existingPngs,
          {
            filename: infographicResult.figure.filename,
            base64: infographicResult.figure.base64 || ''
          }
        ]);

        // Store base64 for zip download
        infographicBase64 = infographicResult.figure.base64;

        // Store in fileApi for later retrieval
        if (infographicBase64) {
          const { storeInfographic } = await import('./fileApi');
          storeInfographic(infographicBase64);
        }

        console.log('[Builder] Infographic added to figures');
        onProgress?.('Infographic', 'completed');
      } else {
        console.warn('[Builder] Infographic generation failed:', infographicResult.error);
        onProgress?.('Infographic', 'error');
      }
    } catch (error) {
      console.error('[Builder] Infographic generation error:', error);
      onProgress?.('Infographic', 'error');
      // Non-fatal - continue without infographic
    }
  }

  // STEP 5: Generate structured data table from the paper (full papers only)
  // Uses GPT-5.2 to extract key structured information as CSV
  let dataTableCsv: string | undefined;
  let generatedTable: string | undefined;
  if (!isPartialPaper) {
    try {
      onProgress?.('DataTable', 'starting');
      console.log('[Builder] Generating structured data table with GPT-5.2...');

      const tableResult = await generateDataTable(
        generatedSections,
        (msg) => console.log(`[Builder] ${msg}`)
      );

      if (tableResult.success && tableResult.latexTable) {
        generatedTable = tableResult.latexTable;
        dataTableCsv = tableResult.csvContent;

        // Store in fileApi for later retrieval
        if (dataTableCsv) {
          const { storeDataTableCsv } = await import('./fileApi');
          storeDataTableCsv(dataTableCsv);
        }

        console.log('[Builder] Data table generated successfully');
        onProgress?.('DataTable', 'completed');
      } else {
        console.warn('[Builder] Data table generation failed:', tableResult.error);
        onProgress?.('DataTable', 'error');
      }
    } catch (error) {
      console.error('[Builder] Data table generation error:', error);
      onProgress?.('DataTable', 'error');
      // Non-fatal - continue without data table
    }
  }

  // Combine all sections into final paper, including figures, table, and data source notice
  const paperContent = assemblePaper(generatedSections, isPartialPaper, generatedFigures, usedSyntheticData, generatedTable);

  const totalWords = paperContent.split(/\s+/).length;
  console.log(`[Builder] Paper complete: ${totalWords} words, ${generatedFigures.length} figures`);

  return {
    paperContent,
    dataAlert,
    usedSyntheticData,
    dataSummary,
    infographicBase64,
    dataTableCsv
  };
};

/**
 * Clean up References section that may have been wrapped in markdown code fences
 * or a full LaTeX document structure by Gemini.
 * Now handles simple APA-style list format (no \bibitem{} required).
 */
function cleanReferencesSection(content: string): string {
  let cleaned = content;

  // Remove markdown code fences (```latex, ```tex, ```)
  cleaned = cleaned.replace(/^```(?:latex|tex)?\s*\n?/i, '');
  cleaned = cleaned.replace(/\n?```\s*$/i, '');

  // Remove full LaTeX document wrapper if present
  // This handles cases where Gemini returns a complete document with \documentclass
  if (cleaned.includes('\\documentclass')) {
    console.log('[assemblePaper] Cleaning up References: removing nested LaTeX document structure');

    // Try to extract thebibliography environment first (old format)
    const bibMatch = cleaned.match(/\\begin\{thebibliography\}[\s\S]*?\\end\{thebibliography\}/);
    if (bibMatch) {
      cleaned = bibMatch[0];
    } else {
      // Try to extract content between \begin{document} and \end{document}
      const docMatch = cleaned.match(/\\begin\{document\}([\s\S]*?)\\end\{document\}/);
      if (docMatch) {
        cleaned = docMatch[1].trim();
        // Remove any \maketitle, \section*{References} etc.
        cleaned = cleaned.replace(/\\maketitle\s*/g, '');
        cleaned = cleaned.replace(/\\section\*?\{References\}\s*/g, '');
      }
    }
  }

  // Remove any section headers that might have been included
  cleaned = cleaned.replace(/^\\section\*?\{References\}\s*/im, '');

  // For the new APA style format (simple list, no \bibitem), we don't need thebibliography wrapper
  // But we should keep backward compatibility with old format
  if (cleaned.includes('\\bibitem{')) {
    // Old format with \bibitem - ensure it has wrapper
    if (!cleaned.includes('\\begin{thebibliography}')) {
      console.log('[assemblePaper] Adding missing thebibliography wrapper');
      cleaned = `\\begin{thebibliography}{99}\n${cleaned}\n\\end{thebibliography}`;
    }
  }
  // New format: simple APA list without \bibitem - no wrapper needed

  return cleaned.trim();
}

/**
 * Clean up BibTeX content that may have been wrapped in markdown code fences
 * or contain extraneous text from Gemini.
 */
function cleanBibTeXContent(content: string): string {
  let cleaned = content;

  // Remove markdown code fences (```bibtex, ```bib, ```)
  cleaned = cleaned.replace(/^```(?:bibtex|bib|latex|tex)?\s*\n?/i, '');
  cleaned = cleaned.replace(/\n?```\s*$/i, '');

  // Remove any explanatory text before the first @entry
  const firstEntry = cleaned.search(/@\w+\s*\{/);
  if (firstEntry > 0) {
    cleaned = cleaned.substring(firstEntry);
  }

  // Remove any trailing explanatory text after the last closing brace
  // Find the last } that closes a BibTeX entry
  let braceCount = 0;
  let lastValidPos = cleaned.length;
  for (let i = 0; i < cleaned.length; i++) {
    if (cleaned[i] === '{') braceCount++;
    if (cleaned[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        lastValidPos = i + 1;
      }
    }
  }
  if (lastValidPos < cleaned.length) {
    cleaned = cleaned.substring(0, lastValidPos);
  }

  // Ensure proper formatting
  cleaned = cleaned.trim();

  // Add header comment
  const header = `% Bibliography generated by ICIScopilot
% ${new Date().toISOString()}

`;

  console.log(`[BibTeX] Cleaned content: ${cleaned.length} chars, ${(cleaned.match(/@\w+\{/g) || []).length} entries`);

  return header + cleaned;
}

/**
 * Fix common LaTeX escaping issues in AI-generated content.
 * Escapes special characters that appear in prose text but preserves LaTeX commands.
 */
function fixLatexEscaping(content: string): string {
  let fixed = content;

  // Fix unescaped underscores in variable/file names (not in LaTeX commands or math)
  // Pattern: word_word outside of math mode ($...$) and not part of commands
  // This handles cases like: fileOfir.csv should become file\_Ofir.csv
  fixed = fixed.replace(/([a-zA-Z0-9])_([a-zA-Z0-9])/g, '$1\\_$2');

  // Fix unescaped % (comments in LaTeX) - but not at start of line (actual comments)
  fixed = fixed.replace(/([^\\])%/g, '$1\\%');

  // Fix unescaped & outside of tables (detected by being in regular text)
  // Keep & in tabular/align environments
  fixed = fixed.replace(/([^\\])& /g, '$1\\& ');

  // Fix unescaped #
  fixed = fixed.replace(/([^\\])#/g, '$1\\#');

  // Fix unescaped $ that's not starting/ending math mode
  // This is tricky - we want to keep math mode $...$ intact
  // Only escape lone $ not followed by math content
  // Skip this as it's too complex and could break math

  // Fix asterisks used as bullets or emphasis outside of LaTeX commands
  // Pattern: * at start of line or after space that's not \item
  fixed = fixed.replace(/^(\s*)\*\s/gm, '$1$\\bullet$ ');
  fixed = fixed.replace(/ \*([^*\s])/g, ' $\\ast$$1');
  fixed = fixed.replace(/([^*\s])\* /g, '$1$\\ast$ ');

  // Fix double underscores that become subscript issues
  fixed = fixed.replace(/__/g, '\\_\\_');

  // Fix curly quotes that may appear
  fixed = fixed.replace(/"/g, "''");
  fixed = fixed.replace(/"/g, '``');
  fixed = fixed.replace(/'/g, "'");
  fixed = fixed.replace(/'/g, '`');

  return fixed;
}

/**
 * Remove embedded references sections from content.
 * The AI sometimes generates a "References:" section within the body of a section.
 * This strips it out since we handle references separately via BibTeX.
 */
function stripEmbeddedReferences(content: string): string {
  // Pattern 1: "References:" followed by bibliography-style entries until end or next section
  // This catches cases like:
  //   References:
  //   Braun, V., & Clarke, V. (2006). Using thematic analysis...
  let cleaned = content.replace(/\n*References:\s*\n([\s\S]*?)(?=\\section|$)/gi, '');

  // Pattern 2: \section{References} or \section*{References} that shouldn't be in body sections
  cleaned = cleaned.replace(/\\section\*?\{References\}[\s\S]*?(?=\\section|$)/gi, '');

  // Pattern 3: Plain "References" on its own line followed by citation-like text
  cleaned = cleaned.replace(/\n\nReferences\n\n((?:[A-Z][^\\]*?\(\d{4}\)[^\n]*\n*)+)/gi, '');

  // Trim trailing whitespace
  cleaned = cleaned.trim();

  return cleaned;
}

/**
 * ICIS LaTeX preamble for compilable documents
 */
const ICIS_PREAMBLE = `\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{graphicx}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{hyperref}
\\usepackage[margin=1in]{geometry}
\\usepackage{setspace}
\\usepackage{natbib}
\\usepackage{booktabs}
\\usepackage{float}

% ICIS Conference Paper Format
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{1em}
\\doublespacing

\\begin{document}

`;

const ICIS_POSTAMBLE = `
\\end{document}
`;

/**
 * Assemble generated sections into a complete paper
 */
function assemblePaper(
  sections: Record<string, string>,
  isPartialPaper: boolean,
  figures: GeneratedFigure[] = [],
  usedSyntheticData: boolean = false,
  dataTable?: string  // LaTeX table generated by GPT-5.2
): string {
  const sectionOrder = isPartialPaper
    ? ['title', 'abstract', 'introduction', 'literature_review', 'theory', 'methodology', 'conclusion', 'references']
    : ['title', 'abstract', 'introduction', 'literature_review', 'theory', 'methodology', 'results', 'discussion', 'conclusion', 'references'];

  const sectionTitles: Record<string, string> = {
    title: 'Title',
    abstract: 'Abstract',
    introduction: 'Introduction',
    literature_review: 'Literature Review',
    theory: 'Theoretical Framework',
    methodology: 'Methodology',
    results: 'Results',
    discussion: 'Discussion',
    conclusion: 'Conclusion',
    references: 'References'
  };

  // Start with the ICIS preamble
  let paper = ICIS_PREAMBLE;

  // Add AI-generated data notice at the beginning if synthetic data was used
  if (usedSyntheticData && !isPartialPaper) {
    paper += `% ============================================================================
% IMPORTANT NOTICE
% ============================================================================
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{\\large NOTICE: AI-Generated Data}\\\\[0.5em]
The data, figures, and visualizations in this paper were generated by AI and do not represent actual empirical findings. This paper is a draft produced by ICIScopilot and requires verification of all data before submission.
}}
\\end{center}
\\vspace{1em}

`;
  }

  for (const key of sectionOrder) {
    if (sections[key]) {
      // Fix LaTeX escaping issues in the content
      let fixedContent = fixLatexEscaping(sections[key]);

      // Strip any embedded references from body sections (not the references section itself)
      if (key !== 'references') {
        fixedContent = stripEmbeddedReferences(fixedContent);
      }

      if (key === 'title') {
        // Title is handled via \title{} and \maketitle in the preamble
        // Store it for later use but don't add section header
        paper += `\\title{${fixedContent}}\n\\maketitle\n\n`;
      } else if (key === 'abstract') {
        paper += `\\begin{abstract}\n${fixedContent}\n\\end{abstract}\n\n`;
      } else if (key === 'references') {
        // Store the bibliography as a separate .bib file and use \bibliography command
        const bibContent = cleanBibTeXContent(sections[key]);
        storeBibliography('references.bib', bibContent);
        // Add bibliography commands (apalike style auto-generates "References" header)
        // \nocite{*} prints all entries since we use inline (Author, Year) citations, not \cite{} commands
        paper += `\\nocite{*}\n\\bibliographystyle{apalike}\n\\bibliography{references}\n`;
      } else if (key === 'results') {
        // Separate data figures from infographic
        const dataFigures = figures.filter(f => f.filename !== 'research_infographic.png');

        // Insert data figures at the beginning of Results section
        paper += `\\section{${sectionTitles[key]}}\n\n`;
        // Add data source notice within Results section
        if (usedSyntheticData && dataFigures.length > 0) {
          paper += `\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]\n\n`;
        }
        if (dataFigures.length > 0) {
          paper += generateFigureLatex(dataFigures);
        }

        // Add the generated data table if available
        if (dataTable) {
          paper += `\n\\subsection{Summary Data Table}\n\n`;
          paper += `The following table presents key structured data extracted from this research. The complete dataset is available in the accompanying CSV file (datatable.csv). See Table~\\ref{tab:datatable} for details.\n\n`;
          paper += dataTable;
          paper += `\n\n`;
        }

        paper += `\n${fixedContent}\n\n`;
      } else if (key === 'discussion') {
        // Insert infographic at the end of Discussion section
        const infographic = figures.find(f => f.filename === 'research_infographic.png');

        paper += `\\section{${sectionTitles[key]}}\n\n${fixedContent}\n\n`;

        // Add the infographic with a subsection if it exists
        if (infographic) {
          paper += `\\subsection*{Visual Summary}\n\n`;
          paper += `The following infographic provides a visual summary of the key findings, frameworks, and practical implications presented in this research.\n\n`;
          paper += generateFigureLatex([infographic]);
        }
      } else {
        paper += `\\section{${sectionTitles[key]}}\n\n${fixedContent}\n\n`;
      }
    }
  }

  // Add the document closing
  paper += ICIS_POSTAMBLE;

  return paper;
}

// --- Visualization Functions ---

/**
 * Generated figure info
 */
export interface GeneratedFigure {
  filename: string;
  description: string;
  latexRef: string;
  base64?: string;  // Raw PNG data for upload to blob storage
}

/**
 * Result of visualization generation including data status
 */
export interface VisualizationResult {
  figures: GeneratedFigure[];
  usedSyntheticData: boolean;
  dataFileFound: boolean;
  dataAlert?: string;  // Alert message for supervisor if data issues occurred
  dataSummary?: string;  // Summary of data analysis from Python stdout
}

/**
 * Result of data analysis (separate from visualization)
 */
export interface DataAnalysisResult {
  success: boolean;
  dataSummary?: string;
  dataFileFound: boolean;
  error?: string;
}

/**
 * Analyze data file to extract summary for paper content
 * This runs for ALL research types when a data file exists
 *
 * @param dataFileName - Name of the data file to analyze
 * @param onProgress - Optional callback for progress updates
 * @param onConfirm - Optional callback to confirm data file before analysis
 *                    If provided, shows first line and waits for user confirmation
 */
/**
 * Use Gemini to analyze CSV content directly
 * This is the simplest approach - no Python needed at all
 */
async function analyzeCSVWithGemini(
  csvContent: string,
  dataFileName: string,
  onProgress?: (message: string) => void
): Promise<DataAnalysisResult> {
  console.log('[DataAnalysis] Using Gemini to analyze CSV content...');
  onProgress?.('Analyzing data with AI...');

  // Limit CSV content to avoid token limits (first 100 rows + header)
  const lines = csvContent.split('\n');
  const sampleContent = lines.slice(0, 101).join('\n');

  const prompt = `You are a data analyst. Analyze this CSV data and provide a structured summary.

CSV FILE: ${dataFileName}
TOTAL ROWS (estimate): ${lines.length - 1}

DATA SAMPLE (first 100 rows):
\`\`\`
${sampleContent}
\`\`\`

Provide a comprehensive analysis in the following format:

File: ${dataFileName}
Dataset shape: [X] rows x [Y] columns

COLUMN NAMES AND TYPES:
  - [column_name]: [numeric/categorical] ([description])

NUMERIC COLUMNS STATISTICS:
  [column_name]:
    min=[value], max=[value], mean=[value], std=[value]
    [any notable patterns or distributions]

CATEGORICAL COLUMNS VALUE COUNTS:
  [column_name]: [X] unique values
    Values: {"value1": count1, "value2": count2, ...}

KEY INSIGHTS:
  - [Notable patterns, correlations, or data quality issues]
  - [Recommendations for analysis]

Be precise with column names (they may contain Hebrew or special characters - use them exactly as they appear).
Calculate statistics from the actual data shown. If the full dataset has more rows, note that statistics are based on the sample.`;

  try {
    const response = await callGemini(prompt, 'Analyze CSV data');

    if (response) {
      console.log('[DataAnalysis] Gemini analysis complete');
      onProgress?.('AI data analysis complete');
      return {
        success: true,
        dataSummary: response,
        dataFileFound: true
      };
    }
  } catch (error) {
    console.error('[DataAnalysis] Gemini analysis failed:', error);
  }

  return {
    success: false,
    dataFileFound: true,
    error: 'AI analysis failed'
  };
}

export async function analyzeDataFile(
  dataFileName: string,
  onProgress?: (message: string) => void,
  onConfirm?: DataFileConfirmCallback
): Promise<DataAnalysisResult> {
  console.log(`[DataAnalysis] analyzeDataFile called with: "${dataFileName}" (type: ${typeof dataFileName})`);

  // STEP 1: Verify data file with user before proceeding
  if (onConfirm) {
    onProgress?.('Loading data file preview for verification...');

    const preview = await getDataFilePreview(dataFileName);

    if (!preview.success) {
      console.error(`[DataAnalysis] Failed to get file preview: ${preview.error}`);
      return {
        success: false,
        dataFileFound: false,
        error: `Could not read data file for verification: ${preview.error}`
      };
    }

    console.log(`[DataAnalysis] Showing preview for confirmation - File: ${preview.filename}, First line: ${preview.firstLine?.substring(0, 100)}...`);
    onProgress?.(`Data file found: ${dataFileName} (${preview.totalLines} lines). Awaiting confirmation...`);

    // Ask user to confirm this is the correct data file
    const confirmed = await onConfirm({
      filename: preview.filename!,
      firstLine: preview.firstLine!,
      totalLines: preview.totalLines!
    });

    if (!confirmed) {
      console.log(`[DataAnalysis] User cancelled data file analysis`);
      onProgress?.('Data file analysis cancelled by user');
      return {
        success: false,
        dataFileFound: true,
        error: 'Data file analysis cancelled by user'
      };
    }

    console.log(`[DataAnalysis] User confirmed data file, proceeding with analysis`);
    onProgress?.('Data file confirmed. Starting analysis...');
  }

  onProgress?.('Analyzing data file...');

  // STEP 2: Try Gemini analysis first (simplest - no Python needed)
  const cloudData = getCloudDataFile();
  if (cloudData?.content) {
    console.log('[DataAnalysis] Trying Gemini analysis (no Python needed)...');
    const geminiResult = await analyzeCSVWithGemini(cloudData.content, dataFileName, onProgress);
    if (geminiResult.success) {
      return geminiResult;
    }
  }

  // STEP 3: Try cloud Python analysis (uses lightweight standard library)
  if (cloudData?.content) {
    console.log('[DataAnalysis] Trying cloud Python analysis (lightweight)...');
    onProgress?.('Using cloud data analysis...');

    try {
      const cloudResult = await analyzeDataWithPython(cloudData.content, 'full');

      if (cloudResult.success && cloudResult.text_summary) {
        console.log('[DataAnalysis] Cloud analysis successful!');

        // Format the summary in a similar way to the old Python output
        let dataSummary = `File: ${dataFileName}\n`;
        dataSummary += `Dataset shape: ${cloudResult.summary?.shape.rows} rows x ${cloudResult.summary?.shape.columns} columns\n\n`;

        dataSummary += 'COLUMN NAMES AND TYPES:\n';
        cloudResult.summary?.columns.forEach(col => {
          const isNumeric = cloudResult.summary?.numeric_columns.includes(col);
          dataSummary += `  - ${col}: ${isNumeric ? 'numeric' : 'categorical'}\n`;
        });
        dataSummary += '\n';

        if (cloudResult.summary?.numeric_columns.length) {
          dataSummary += 'NUMERIC COLUMNS STATISTICS:\n';
          for (const col of cloudResult.summary.numeric_columns.slice(0, 10)) {
            const stats = cloudResult.summary.descriptive_stats?.[col];
            if (stats) {
              dataSummary += `  ${col}:\n`;
              dataSummary += `    min=${stats.min}, max=${stats.max}, mean=${stats.mean}, std=${stats.std}\n`;
            }
          }
          dataSummary += '\n';
        }

        if (cloudResult.summary?.categorical_columns.length) {
          dataSummary += 'CATEGORICAL COLUMNS VALUE COUNTS:\n';
          for (const col of cloudResult.summary.categorical_columns.slice(0, 5)) {
            const values = cloudResult.summary.categorical_summary?.[col];
            if (values) {
              const uniqueCount = Object.keys(values).length;
              dataSummary += `  ${col}: ${uniqueCount} unique values\n`;
              if (uniqueCount <= 10) {
                dataSummary += `    Values: ${JSON.stringify(values)}\n`;
              }
            }
          }
        }

        onProgress?.('Cloud data analysis complete');
        return {
          success: true,
          dataSummary,
          dataFileFound: true
        };
      }
    } catch (error) {
      console.warn('[DataAnalysis] Cloud analysis failed, falling back to local Python:', error);
    }
  }

  // STEP 4: Fall back to local Python with pandas (if available)
  console.log('[DataAnalysis] Falling back to local Python analysis...');
  onProgress?.('Using local Python for analysis...');

  const analysisCode = `import os
import pandas as pd
import numpy as np

DATA_FILE = os.environ.get('DATA_FILE', '')

if DATA_FILE and os.path.exists(DATA_FILE):
    try:
        # Try to load the data file
        if DATA_FILE.endswith('.csv'):
            df = pd.read_csv(DATA_FILE)
        elif DATA_FILE.endswith('.xlsx') or DATA_FILE.endswith('.xls'):
            df = pd.read_excel(DATA_FILE)
        elif DATA_FILE.endswith('.json'):
            df = pd.read_json(DATA_FILE)
        else:
            df = pd.read_csv(DATA_FILE)  # Default to CSV

        # Print comprehensive data summary
        print("=" * 60)
        print("DATA SUMMARY")
        print("=" * 60)
        print(f"File: {DATA_FILE}")
        print(f"Dataset shape: {df.shape[0]} rows x {df.shape[1]} columns")
        print()
        print("COLUMN NAMES AND TYPES:")
        for col in df.columns:
            dtype = df[col].dtype
            non_null = df[col].count()
            null_pct = (1 - non_null/len(df)) * 100 if len(df) > 0 else 0
            print(f"  - {col}: {dtype} ({non_null} non-null, {null_pct:.1f}% missing)")
        print()

        # Numeric columns summary
        numeric_cols = df.select_dtypes(include=[np.number]).columns
        if len(numeric_cols) > 0:
            print("NUMERIC COLUMNS STATISTICS:")
            for col in numeric_cols[:10]:  # Limit to first 10
                print(f"  {col}:")
                print(f"    min={df[col].min():.4f}, max={df[col].max():.4f}, mean={df[col].mean():.4f}, std={df[col].std():.4f}")
            print()

        # Categorical columns summary
        cat_cols = df.select_dtypes(include=['object', 'category', 'bool']).columns
        if len(cat_cols) > 0:
            print("CATEGORICAL COLUMNS VALUE COUNTS:")
            for col in cat_cols[:5]:  # Limit to first 5
                unique_vals = df[col].nunique()
                print(f"  {col}: {unique_vals} unique values")
                if unique_vals <= 10:
                    print(f"    Values: {df[col].value_counts().head(10).to_dict()}")
            print()

        # Sample data
        print("SAMPLE DATA (first 3 rows):")
        print(df.head(3).to_string())
        print()
        print("=" * 60)
        print("DATA ANALYSIS COMPLETE")

    except Exception as e:
        print(f"Error loading data: {e}")
        print("DATA FILE NOT READABLE")
else:
    print("DATA FILE NOT FOUND")
    print(f"Expected path: {DATA_FILE}")
`;

  try {
    const result = await executePythonScript('analyze_data.py', analysisCode, dataFileName);

    console.log('[DataAnalysis] Python execution result:', {
      success: result.success,
      dataFileFound: result.dataFileFound,
      stdoutLength: result.stdout?.length || 0,
      stderrLength: result.stderr?.length || 0
    });

    if (result.stdout) {
      console.log('[DataAnalysis] Python stdout (first 1000 chars):', result.stdout.substring(0, 1000));
    }
    if (result.stderr) {
      console.log('[DataAnalysis] Python stderr:', result.stderr);
    }

    if (!result.success) {
      console.error('[DataAnalysis] Python execution failed:', result.error);
      return {
        success: false,
        dataFileFound: false,
        error: result.error
      };
    }

    // Extract data summary from stdout
    let dataSummary: string | undefined;
    const dataFileFound = result.dataFileFound ?? false;

    if (result.stdout) {
      // Regex to extract content between DATA SUMMARY header and DATA ANALYSIS COMPLETE
      // Format: ===...=== \r\n DATA SUMMARY \r\n ===...=== \r\n ...content... \r\n ===...=== \r\n DATA ANALYSIS COMPLETE
      // Handle both \n and \r\n line endings
      const summaryMatch = result.stdout.match(/DATA SUMMARY\s*[\r\n]+=+\s*[\r\n]+([\s\S]*?)[\r\n]+=+\s*[\r\n]+DATA ANALYSIS COMPLETE/);
      if (summaryMatch) {
        dataSummary = summaryMatch[1].trim();
        console.log('[DataAnalysis] Summary extracted successfully!');
        console.log('[DataAnalysis] Summary preview (first 500 chars):', dataSummary.substring(0, 500));
      } else if (result.stdout.includes('DATA FILE NOT FOUND') || result.stdout.includes('DATA FILE NOT READABLE')) {
        console.log('[DataAnalysis] Data file not found or not readable');
        return {
          success: false,
          dataFileFound: false,
          error: 'Data file could not be read'
        };
      } else {
        console.log('[DataAnalysis] Could not extract summary - regex did not match');
        console.log('[DataAnalysis] Looking for "DATA SUMMARY" in stdout:', result.stdout.includes('DATA SUMMARY'));
        console.log('[DataAnalysis] Looking for "DATA ANALYSIS COMPLETE" in stdout:', result.stdout.includes('DATA ANALYSIS COMPLETE'));
      }
    } else {
      console.log('[DataAnalysis] No stdout from Python script');
    }

    onProgress?.('Data analysis complete');
    return {
      success: true,
      dataSummary,
      dataFileFound
    };
  } catch (error) {
    console.error('[DataAnalysis] Error:', error);
    return {
      success: false,
      dataFileFound: false,
      error: (error as Error).message
    };
  }
}

/**
 * Generate Python matplotlib code for serverless execution
 * This code runs in a sandboxed Python environment with:
 * - df: pandas DataFrame already loaded with CSV data
 * - plt, sns, pd, np: pre-imported visualization libraries
 * - save_figure(fig, filename, description): helper to save figures
 *
 * The AI generates custom visualization code based on:
 * - The research context and questions
 * - The actual data columns and types
 * - What figures would be most meaningful for the paper
 */
async function generateServerlessFigureCode(
  interviewTranscript: string,
  researchContext: string,
  dataSummary: string
): Promise<string> {
  const prompt = `You are generating Python code to create publication-quality figures for an academic research paper.

RESEARCH CONTEXT:
${researchContext.substring(0, 2000)}

INTERVIEW/DATA CONTEXT:
${interviewTranscript.substring(0, 1500)}

DATA ANALYSIS SUMMARY (ACTUAL DATA):
${dataSummary}

EXECUTION ENVIRONMENT:
Your code will run in a sandboxed Python environment with:
- \`df\`: pandas DataFrame already loaded with the CSV data
- \`plt\`: matplotlib.pyplot (pre-imported)
- \`sns\`: seaborn (pre-imported)
- \`pd\`: pandas (pre-imported)
- \`np\`: numpy (pre-imported)
- \`save_figure(fig, filename, description)\`: helper function to save figures

CRITICAL RULES:
1. Do NOT import any modules - they are pre-imported
2. Do NOT load the data - \`df\` is already available
3. Do NOT use plt.savefig() - use save_figure(fig, filename, description) instead
4. Generate 3-6 meaningful figures that tell the story of this research
5. Use the ACTUAL column names from the data summary above
6. Create publication-quality visualizations (appropriate for academic papers)

FIGURE TYPES TO CONSIDER (based on data types):
- For numeric columns: histograms with KDE, box plots, violin plots
- For categorical columns: bar charts, count plots
- For relationships: scatter plots with regression, correlation heatmaps
- For comparisons: grouped bar charts, side-by-side distributions
- For trends: line plots if time-series data exists

CODE STRUCTURE:
\`\`\`python
# Figure 1: [Description]
fig, ax = plt.subplots(figsize=(8, 5))
# ... plotting code using actual column names from df ...
save_figure(fig, 'fig1_descriptive_name.png', 'SELF-EXPLANATORY CAPTION HERE')

# Figure 2: [Description]
fig, ax = plt.subplots(figsize=(8, 5))
# ... more plotting code ...
save_figure(fig, 'fig2_descriptive_name.png', 'SELF-EXPLANATORY CAPTION HERE')

# Continue for all figures...
\`\`\`

CAPTION REQUIREMENTS (CRITICAL):
Each figure caption MUST be self-explanatory and follow academic standards:
- Start with what the figure shows (e.g., "Distribution of response times...")
- Include the variable/metric being displayed
- Include sample size if relevant (e.g., "n=150")
- Include key statistics where appropriate (e.g., "mean=3.42, SD=0.87")
- Mention the data source context (e.g., "from survey responses")
- Be detailed enough that a reader can understand the figure without reading the paper body

Example captions:
- "Distribution of participant response times (n=150, mean=3.42s, SD=0.87s). The histogram shows a right-skewed distribution typical of reaction time data."
- "Correlation matrix of key study variables. Darker colors indicate stronger correlations; asterisks denote significance at p<0.05."
- "Comparison of satisfaction scores across three system types (n=50 per group). Error bars represent 95\\% confidence intervals."

IMPORTANT:
- Use \`plt.style.use('seaborn-v0_8-whitegrid')\` for consistent styling
- Add clear titles, axis labels, and legends
- Use professional color schemes
- Handle missing data gracefully with .dropna()
- Generate figures that would be appropriate for an ICIS conference paper

Generate the Python code now. Return ONLY the code, no explanations.`;

  const code = await callGemini(prompt,
    "You are an expert data visualization specialist. Generate clean, professional Python code for academic figures."
  );

  // Extract code from markdown if present
  let cleanCode = code;
  const codeMatch = code.match(/```python\s*([\s\S]*?)\s*```/) || code.match(/```\s*([\s\S]*?)\s*```/);
  if (codeMatch) {
    cleanCode = codeMatch[1];
  }

  return cleanCode.trim();
}

/**
 * Generate Python visualization code based on research context
 * @deprecated Use generateServerlessFigureCode for cloud execution
 */
async function generateVisualizationCode(
  interviewTranscript: string,
  researchContext: string,
  dataFileName?: string,
  dataSummary?: string
): Promise<string> {
  // Build comprehensive data information including actual column names if available
  let dataFileInfo: string;
  if (dataFileName) {
    dataFileInfo = `A data file is available: ${dataFileName}. The path will be provided via DATA_FILE environment variable.

CRITICAL: You MUST use the ACTUAL data from this file:
1. Load the data with pandas
2. Print a DATA SUMMARY including: number of rows, column names, data types, value distributions
3. Use the REAL column names and values from the data - do NOT use hardcoded/simulated values
4. Create visualizations that reflect the ACTUAL data structure and content`;

    // If we already have the data summary with column names, include it in the prompt
    if (dataSummary) {
      dataFileInfo += `

ACTUAL DATA FILE ANALYSIS (use these EXACT column names):
${dataSummary}

IMPORTANT: The column names above are the ACTUAL columns in the data file.
- Use these EXACT column names in your code (they may include Hebrew characters or special formatting)
- Do NOT assume or invent column names like 'model_score', 'regulatory_flag', etc.
- Create visualizations appropriate for the data types shown (numeric vs categorical)
- If a column contains Hebrew text, you can still create visualizations (e.g., value counts for categorical)`;
    }
  } else {
    dataFileInfo = 'No data file is available. Generate synthetic/illustrative data for the visualizations.';
  }

  const prompt = `You are generating Python visualization code for an ICIS research paper.

RESEARCH CONTEXT:
${researchContext.substring(0, 2000)}

INTERVIEW EXCERPT:
${interviewTranscript.substring(0, 1500)}

DATA AVAILABILITY:
${dataFileInfo}

Generate a complete Python script that creates publication-quality figures using matplotlib.

CRITICAL REQUIREMENTS FOR DATA FILES:
If a data file is provided, your code MUST:
1. Load the actual data file using pandas
2. Print a detailed DATA SUMMARY at the start:
   - Number of rows and columns
   - Column names and their data types
   - For numeric columns: min, max, mean, std
   - For categorical columns: unique values and their counts
   - Any notable patterns or distributions
3. Use the ACTUAL column names from the data (not assumed names)
4. Create visualizations based on the REAL data values
5. NEVER use hardcoded "simulated" or "example" values when real data is available
6. Include error handling to show what columns actually exist if there's a mismatch

GENERAL REQUIREMENTS:
1. Import only standard libraries: numpy, pandas, matplotlib, seaborn (if needed)
2. Use environment variables for paths:
   - os.environ.get('ICIS_RESULTS_DIR', '.') for saving figures
   - os.environ.get('DATA_FILE', '') for data file path (if available)
3. Create 2-4 relevant figures based on the research:
   - If empirical research: show data distributions, relationships, model results
   - If theoretical: show conceptual model, framework diagram, process flow
   - If simulation: show simulation results, comparisons, trends
4. Save figures as PNG (300 DPI) to the Results directory
5. Use professional styling: clear labels, appropriate fonts, good colors
6. Name files descriptively: fig1_research_model.png, fig2_results_comparison.png, etc.

OUTPUT FORMAT:
Return ONLY the Python code, no explanations. The code must be complete and executable.

Example structure when data file is available:
\`\`\`python
import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Get output directory from environment
RESULTS_DIR = os.environ.get('ICIS_RESULTS_DIR', '.')
DATA_FILE = os.environ.get('DATA_FILE', '')

# Set publication style for proper page fit
plt.style.use('seaborn-v0_8-whitegrid')
plt.rcParams['font.size'] = 10
plt.rcParams['figure.dpi'] = 150  # Lower DPI to avoid oversized figures
plt.rcParams['figure.figsize'] = (6, 4)  # Standard size that fits in columns
plt.rcParams['savefig.bbox'] = 'tight'
plt.rcParams['savefig.pad_inches'] = 0.1

# Load and analyze data
if DATA_FILE and os.path.exists(DATA_FILE):
    df = pd.read_csv(DATA_FILE)

    # Print comprehensive data summary
    print("=" * 60)
    print("DATA SUMMARY")
    print("=" * 60)
    print(f"Dataset shape: {df.shape[0]} rows x {df.shape[1]} columns")
    print(f"\\nColumn names: {list(df.columns)}")
    print(f"\\nData types:\\n{df.dtypes}")
    print(f"\\nNumeric summary:\\n{df.describe()}")
    print(f"\\nFirst 5 rows:\\n{df.head()}")
    print("=" * 60)

    # Now create visualizations using ACTUAL column names and values
    # Figure 1: Distribution of key variable (use actual column name)
    # ...
else:
    print("No data file available - using synthetic data")

print("Generated figures successfully")
\`\`\``;

  const code = await callGemini(prompt,
    "You are an expert data visualization specialist. Generate clean, professional Python code using matplotlib."
  );

  // Extract code from markdown if present
  let cleanCode = code;
  const codeMatch = code.match(/```python\s*([\s\S]*?)\s*```/) || code.match(/```\s*([\s\S]*?)\s*```/);
  if (codeMatch) {
    cleanCode = codeMatch[1];
  }

  return cleanCode.trim();
}

/**
 * Generate visualizations for the paper
 * Returns list of generated figures and data usage status for inclusion in the paper
 *
 * All figures are PNG images generated via QuickChart.io:
 * - With data: chart_data from data analysis
 * - Without data: AI-generated conceptual chart_data (no hallucinated numbers)
 */
export async function generateVisualizations(
  interviewTranscript: string,
  researchContext: string,
  dataFileName?: string,
  onProgress?: (message: string) => void,
  dataSummary?: string  // Pre-analyzed data summary with actual column names
): Promise<VisualizationResult> {
  const cloudData = getCloudDataFile();

  // STEP 1: Use QuickChart.io (PRIMARY METHOD)
  // This works reliably with Vercel's 250MB limit - no Python dependencies
  if (cloudData?.content) {
    console.log('[Visualizations] Using QuickChart.io for figure generation...');
    onProgress?.('Analyzing data for visualization...');

    try {
      // Step 1a: Analyze data to get chart configurations
      const cloudResult = await analyzeDataWithPython(cloudData.content, 'full');

      if (cloudResult.success && cloudResult.chart_data && cloudResult.chart_data.length > 0) {
        console.log(`[Visualizations] Data analysis returned ${cloudResult.chart_data.length} chart configs`);
        onProgress?.(`Generating ${cloudResult.chart_data.length} PNG figures via QuickChart.io...`);

        // Step 1b: Generate PNG figures via QuickChart.io
        const { generateQuickChartFigures } = await import('./fileApi');
        const quickchartResult = await generateQuickChartFigures(cloudResult.chart_data);

        if (quickchartResult.success && quickchartResult.figures && quickchartResult.figures.length > 0) {
          // Convert to GeneratedFigure format for LaTeX
          // Store base64 PNGs - they'll be embedded or uploaded later
          const pngFigures: GeneratedFigure[] = quickchartResult.figures.map((fig) => ({
            filename: fig.filename,
            description: fig.description,
            latexRef: fig.filename,  // Use filename - will be uploaded as separate resource
            base64: fig.base64  // Store raw base64 for later upload
          }));

          // Store PNG figures for LaTeX compilation
          const { storePngFiguresForCompilation, storeChartData } = await import('./fileApi');
          storePngFiguresForCompilation(quickchartResult.figures.map(fig => ({
            filename: fig.filename,
            base64: fig.base64
          })));

          // Store chart data and Python code for download
          storeChartData(cloudResult.chart_data, false);

          onProgress?.(`Generated ${pngFigures.length} publication-quality figures`);
          console.log(`[Visualizations] QuickChart.io generated ${pngFigures.length} PNG figures`);

          return {
            figures: pngFigures,
            usedSyntheticData: false,
            dataFileFound: true,
            dataSummary: cloudResult.text_summary || dataSummary
          };
        } else {
          console.warn('[Visualizations] QuickChart.io generation failed:', quickchartResult.error);
        }
      } else {
        console.warn('[Visualizations] Data analysis failed or returned no chart data');
      }
    } catch (error) {
      console.warn('[Visualizations] QuickChart.io failed:', error);
    }
  }

  // STEP 3: Generate AI-based PNG figures via QuickChart.io (no data file)
  // AI generates illustrative chart_data based on the paper content, then QuickChart renders PNGs
  console.log('[Visualizations] No data available, generating AI-based PNG figures via QuickChart.io...');
  onProgress?.('Generating AI-based visualizations...');

  try {
    // Generate chart_data from AI based on research context
    const aiChartData = await generateAIChartData(interviewTranscript, researchContext, dataSummary);

    if (aiChartData && aiChartData.length > 0) {
      console.log(`[Visualizations] AI generated ${aiChartData.length} chart configurations`);
      onProgress?.(`Rendering ${aiChartData.length} PNG figures via QuickChart.io...`);

      // Render PNG figures via QuickChart.io
      const { generateQuickChartFigures, storePngFiguresForCompilation, storeChartData } = await import('./fileApi');
      const quickchartResult = await generateQuickChartFigures(aiChartData);

      if (quickchartResult.success && quickchartResult.figures && quickchartResult.figures.length > 0) {
        const pngFigures: GeneratedFigure[] = quickchartResult.figures.map((fig) => ({
          filename: fig.filename,
          description: fig.description,
          latexRef: fig.filename,
          base64: fig.base64
        }));

        // Store PNG figures for LaTeX compilation
        storePngFiguresForCompilation(quickchartResult.figures.map(fig => ({
          filename: fig.filename,
          base64: fig.base64
        })));

        // Store chart data and Python code for download (synthetic data)
        storeChartData(aiChartData, true);

        onProgress?.(`Generated ${pngFigures.length} AI-based PNG figures`);
        console.log(`[Visualizations] QuickChart.io rendered ${pngFigures.length} AI-generated PNG figures`);

        return {
          figures: pngFigures,
          usedSyntheticData: true,
          dataFileFound: false,
          dataAlert: '*** NOTE: Visualizations generated using AI-synthesized illustrative data. No data file was provided.'
        };
      }
    }
  } catch (error) {
    console.warn('[Visualizations] AI QuickChart generation failed:', error);
  }

  // No figures could be generated
  return {
    figures: [],
    usedSyntheticData: true,
    dataFileFound: false,
    dataAlert: '*** VISUALIZATION ERROR: Could not generate any figures'
  };
}

/**
 * Generate AI-based chart_data for QuickChart.io when no data file is available
 * Creates CONCEPTUAL figures based on the paper content - NOT fabricated numerical data
 */
async function generateAIChartData(
  interviewTranscript: string,
  researchContext: string,
  dataSummary?: string
): Promise<CloudAnalysisResult['chart_data']> {
  // Use Gemini to generate chart configurations based on research context
  const prompt = `You are generating CONCEPTUAL chart data for a research paper visualization.

CRITICAL RULES - DO NOT VIOLATE:
1. DO NOT fabricate or hallucinate specific numbers, percentages, or statistics
2. DO NOT make up sample sizes, means, standard deviations, or correlations
3. ONLY use numbers/statistics that are EXPLICITLY stated in the research context below
4. If no specific data is mentioned, create CONCEPTUAL/QUALITATIVE visualizations:
   - Use relative comparisons (High/Medium/Low) instead of fake percentages
   - Use category labels without fabricated numeric values
   - Create framework/model diagrams conceptually represented as bar charts
5. All figure titles MUST include "(Conceptual)" or "(Based on Paper)" to indicate these are illustrative

RESEARCH CONTEXT:
${researchContext.substring(0, 2000)}

INTERVIEW EXCERPT:
${interviewTranscript.substring(0, 1500)}

Generate 1-2 CONCEPTUAL charts. Return ONLY a valid JSON array, no other text.

For CONCEPTUAL figures without specific data, use these patterns:

1. Relative comparison bar chart (NO fake numbers):
{
  "type": "bar",
  "column": "Key Factors (Conceptual)",
  "data": {"Factor A": 3, "Factor B": 2, "Factor C": 1}
}
(Use 1/2/3 to show relative importance, NOT fabricated percentages)

2. Framework visualization:
{
  "type": "bar",
  "column": "Research Model Components (Conceptual)",
  "data": {"Construct 1": 1, "Construct 2": 1, "Construct 3": 1, "Construct 4": 1}
}
(Equal values to show model components without implying measured data)

ONLY if the paper EXPLICITLY mentions specific numbers, you may use them:
- If paper says "72% of respondents...", you can use 72
- If paper says "mean score of 4.2", you can use 4.2
- Otherwise, use relative values (1, 2, 3) or equal values (1, 1, 1)

Return ONLY the JSON array with 1-2 conceptual figures.`;

  try {
    const response = await callGemini(prompt, 'Generate chart data');

    // Extract JSON from response (handle markdown code blocks)
    let jsonStr = response.trim();
    if (jsonStr.startsWith('```json')) {
      jsonStr = jsonStr.slice(7);
    } else if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.slice(3);
    }
    if (jsonStr.endsWith('```')) {
      jsonStr = jsonStr.slice(0, -3);
    }
    jsonStr = jsonStr.trim();

    const chartData = JSON.parse(jsonStr);

    if (Array.isArray(chartData) && chartData.length > 0) {
      console.log(`[AI ChartData] Generated ${chartData.length} chart configurations`);
      return chartData;
    }
  } catch (error) {
    console.error('[AI ChartData] Failed to generate chart data:', error);
  }

  return [];
}

/**
 * Generate LaTeX figure includes for the Results section
 * All figures are PNG images with base64 data (generated via QuickChart.io)
 */
export function generateFigureLatex(figures: GeneratedFigure[]): string {
  if (figures.length === 0) return '';

  let latex = '\n% Generated Figures (PNG via QuickChart.io)\n';

  figures.forEach((fig, i) => {
    // All figures are PNG with base64 data - use filename for \includegraphics
    // The base64 data will be uploaded as a separate resource to latex.ytotech.com
    const safeFilename = fig.filename.replace(/[^a-zA-Z0-9_.-]/g, '_');
    const escapedDescription = fig.description.replace(/_/g, '\\_').replace(/&/g, '\\&').replace(/%/g, '\\%');
    latex += `
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth]{${safeFilename}}
\\caption{${escapedDescription}}
\\label{fig:fig${i + 1}}
\\end{figure}
`;
  });

  return latex;
}

// ============================================================================
// Infographic Generation
// ============================================================================

/**
 * Result of infographic generation
 */
export interface InfographicResult {
  success: boolean;
  figure?: GeneratedFigure;
  error?: string;
}

/**
 * Generate an infographic from the paper content using Gemini image generation
 * Uses gemini-3-pro-image-preview (Nano Banana Pro) or gemini-2.5-flash-image
 *
 * @param paperSections - The generated paper sections to summarize in the infographic
 * @param onProgress - Optional progress callback
 * @returns InfographicResult with the generated figure or error
 */
export async function generateInfographic(
  paperSections: Record<string, string>,
  onProgress?: (message: string) => void
): Promise<InfographicResult> {
  console.log('[Infographic] Starting infographic generation...');
  onProgress?.('Generating research infographic...');

  try {
    // Load the infographic prompt template
    const infopromptTemplate = await loadPrompt('INFOGRAPHIC');
    if (!infopromptTemplate || infopromptTemplate.includes('[Prompt not found')) {
      throw new Error('Failed to load INFOGRAPHIC prompt from prompts directory');
    }

    // Build paper content summary for the prompt
    const paperSummary = buildPaperSummaryForInfographic(paperSections);

    // Construct the full prompt by appending the paper content
    const fullPrompt = `${infopromptTemplate}

---

**RESEARCH PAPER TO VISUALIZE:**

${paperSummary}`;

    console.log(`[Infographic] Prompt constructed (${fullPrompt.length} chars)`);

    // Generate the infographic using Gemini image generation
    const imageResult = await callGeminiImageGeneration(fullPrompt, onProgress);

    if (!imageResult.success || !imageResult.base64) {
      return {
        success: false,
        error: imageResult.error || 'Failed to generate infographic image'
      };
    }

    // Create the figure object
    const infographicFigure: GeneratedFigure = {
      filename: 'research_infographic.png',
      description: 'Research infographic summarizing the key findings, frameworks, and practical implications of this study',
      latexRef: 'research_infographic.png',
      base64: imageResult.base64
    };

    console.log('[Infographic] Successfully generated infographic');
    onProgress?.('Infographic generated successfully');

    return {
      success: true,
      figure: infographicFigure
    };

  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error('[Infographic] Generation failed:', errorMessage);
    onProgress?.(`Infographic generation failed: ${errorMessage}`);
    return {
      success: false,
      error: errorMessage
    };
  }
}

/**
 * Build a concise paper summary for infographic generation
 */
function buildPaperSummaryForInfographic(sections: Record<string, string>): string {
  const parts: string[] = [];

  if (sections.title) {
    parts.push(`**Title:** ${sections.title.trim()}`);
  }

  if (sections.abstract) {
    parts.push(`**Abstract:**\n${sections.abstract.substring(0, 1500)}`);
  }

  if (sections.introduction) {
    // Extract key points from introduction
    parts.push(`**Introduction (key points):**\n${sections.introduction.substring(0, 1000)}`);
  }

  if (sections.theory) {
    // Theoretical framework is important for the infographic
    parts.push(`**Theoretical Framework:**\n${sections.theory.substring(0, 1200)}`);
  }

  if (sections.methodology) {
    parts.push(`**Methodology:**\n${sections.methodology.substring(0, 800)}`);
  }

  if (sections.results) {
    parts.push(`**Key Results:**\n${sections.results.substring(0, 1000)}`);
  }

  if (sections.discussion) {
    parts.push(`**Discussion:**\n${sections.discussion.substring(0, 800)}`);
  }

  if (sections.conclusion) {
    parts.push(`**Conclusion:**\n${sections.conclusion.substring(0, 600)}`);
  }

  return parts.join('\n\n');
}

/**
 * Call Gemini image generation API (Nano Banana Pro / gemini-3-pro-image-preview)
 *
 * @param prompt - The prompt for image generation
 * @param onProgress - Optional progress callback
 * @returns Object with success status and base64 image data
 */
async function callGeminiImageGeneration(
  prompt: string,
  onProgress?: (message: string) => void
): Promise<{ success: boolean; base64?: string; error?: string }> {
  // Try models in order: gemini-3-pro-image-preview (Nano Banana Pro), then gemini-2.5-flash-image
  const imageModels = ['gemini-3-pro-image-preview', 'gemini-2.5-flash-image'];

  for (const model of imageModels) {
    console.log(`[Infographic] Trying image generation with model: ${model}`);
    onProgress?.(`Generating image with ${model}...`);

    try {
      const result = await callGeminiImageWithModel(prompt, model);
      if (result.success && result.base64) {
        console.log(`[Infographic] Successfully generated image with ${model}`);
        return result;
      }
      console.warn(`[Infographic] ${model} failed: ${result.error}`);
    } catch (error) {
      console.warn(`[Infographic] ${model} threw error:`, (error as Error).message);
    }
  }

  return {
    success: false,
    error: 'All image generation models failed'
  };
}

/**
 * Call a specific Gemini image generation model
 */
async function callGeminiImageWithModel(
  prompt: string,
  model: string
): Promise<{ success: boolean; base64?: string; mimeType?: string; error?: string }> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

  if (!apiKey) {
    // Try via proxy
    const endpoint = await getApiEndpoint();
    if (endpoint.type === 'vercel') {
      return callGeminiImageViaProxy(prompt, model, endpoint.baseUrl);
    }
    throw new Error('No API key and no proxy available for image generation');
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE'],
      imageConfig: {
        aspectRatio: '16:9'
      }
    }
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    console.log('[Infographic] Image generation timeout - aborting after 2 minutes');
    controller.abort();
  }, 120000);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        error: `API error ${response.status}: ${errorText.substring(0, 200)}`
      };
    }

    const data = await response.json();

    // Extract image from response
    const parts = data.candidates?.[0]?.content?.parts;
    if (!parts || !Array.isArray(parts)) {
      return {
        success: false,
        error: 'No parts in response'
      };
    }

    // Find the image part
    for (const part of parts) {
      if (part.inlineData) {
        return {
          success: true,
          base64: part.inlineData.data,
          mimeType: part.inlineData.mimeType || 'image/png'
        };
      }
    }

    return {
      success: false,
      error: 'No image data in response'
    };

  } catch (error) {
    clearTimeout(timeoutId);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

/**
 * Call Gemini image generation via Vercel proxy
 */
async function callGeminiImageViaProxy(
  prompt: string,
  model: string,
  baseUrl: string
): Promise<{ success: boolean; base64?: string; mimeType?: string; error?: string }> {
  try {
    const response = await fetch(`${baseUrl}/api/gemini-image`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        prompt,
        model,
        aspectRatio: '16:9'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        error: `Proxy error ${response.status}: ${errorText.substring(0, 200)}`
      };
    }

    const data = await response.json();

    if (data.success && data.image) {
      return {
        success: true,
        base64: data.image,
        mimeType: data.mimeType || 'image/png'
      };
    }

    return {
      success: false,
      error: data.error || 'Unknown proxy error'
    };

  } catch (error) {
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

// ============================================================================
// Data Table Generation (using GPT-5.2)
// ============================================================================

/**
 * Result of data table generation
 */
export interface DataTableResult {
  success: boolean;
  csvContent?: string;
  latexTable?: string;
  tableCaption?: string;
  error?: string;
}

/**
 * Generate a structured data table from the paper content using GPT-5.2
 * Uses the tableprompt.txt template to extract key structured information
 *
 * @param paperSections - The generated paper sections
 * @param onProgress - Optional progress callback
 * @returns DataTableResult with CSV content and LaTeX table
 */
export async function generateDataTable(
  paperSections: Record<string, string>,
  onProgress?: (message: string) => void
): Promise<DataTableResult> {
  console.log('[DataTable] Starting data table generation with GPT-5.2...');
  onProgress?.('Generating structured data table...');

  try {
    // Load the table prompt template
    const tablePromptTemplate = await loadPrompt('TABLE');
    if (!tablePromptTemplate || tablePromptTemplate.includes('[Prompt not found')) {
      throw new Error('Failed to load TABLE prompt from prompts directory');
    }

    // Build paper content for the prompt
    const paperContent = buildPaperContentForTable(paperSections);

    // Construct the full prompt
    const fullPrompt = `${tablePromptTemplate}

---

**RESEARCH PAPER:**

${paperContent}`;

    console.log(`[DataTable] Prompt constructed (${fullPrompt.length} chars)`);
    onProgress?.('Extracting structured data with GPT-5.2...');

    // Call GPT-5.2 to generate the CSV table
    const csvContent = await callOpenAIForTable(fullPrompt);

    if (!csvContent || csvContent.trim().length === 0) {
      return {
        success: false,
        error: 'GPT-5.2 returned empty response'
      };
    }

    console.log(`[DataTable] CSV generated (${csvContent.length} chars)`);

    // Parse CSV and convert to LaTeX table
    const { latexTable, tableCaption } = convertCsvToLatex(csvContent, paperSections);

    console.log('[DataTable] Successfully generated data table');
    onProgress?.('Data table generated successfully');

    return {
      success: true,
      csvContent,
      latexTable,
      tableCaption
    };

  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error('[DataTable] Generation failed:', errorMessage);
    onProgress?.(`Data table generation failed: ${errorMessage}`);
    return {
      success: false,
      error: errorMessage
    };
  }
}

/**
 * Build paper content string for table extraction
 */
function buildPaperContentForTable(sections: Record<string, string>): string {
  const parts: string[] = [];

  if (sections.title) {
    parts.push(`# Title\n${sections.title.trim()}`);
  }

  if (sections.abstract) {
    parts.push(`# Abstract\n${sections.abstract}`);
  }

  if (sections.introduction) {
    parts.push(`# Introduction\n${sections.introduction}`);
  }

  if (sections.literature_review) {
    parts.push(`# Literature Review\n${sections.literature_review}`);
  }

  if (sections.theory) {
    parts.push(`# Theoretical Framework\n${sections.theory}`);
  }

  if (sections.methodology) {
    parts.push(`# Methodology\n${sections.methodology}`);
  }

  if (sections.results) {
    parts.push(`# Results\n${sections.results}`);
  }

  if (sections.discussion) {
    parts.push(`# Discussion\n${sections.discussion}`);
  }

  if (sections.conclusion) {
    parts.push(`# Conclusion\n${sections.conclusion}`);
  }

  return parts.join('\n\n');
}

/**
 * Call OpenAI GPT-5.2 specifically for table generation (returns raw text, not JSON)
 */
async function callOpenAIForTable(prompt: string): Promise<string> {
  const endpoint = await getApiEndpoint();

  if (endpoint.type === 'vercel' || endpoint.type === 'local') {
    console.log(`[DataTable] Using ${endpoint.type} proxy for GPT-5.2...`);
    return callOpenAIForTableViaProxy(prompt, endpoint.baseUrl);
  }

  // Direct API call (development fallback)
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
  if (apiKey) {
    console.log('[DataTable] Using direct OpenAI API call...');
    return callOpenAIForTableDirect(prompt, apiKey);
  }

  throw new Error('[DataTable] No API endpoint available for GPT-5.2');
}

/**
 * Call OpenAI directly for table generation
 */
async function callOpenAIForTableDirect(prompt: string, apiKey: string): Promise<string> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-5.2',
      messages: [
        {
          role: 'system',
          content: 'You are a structured-data extraction engine. Output ONLY valid CSV format with no markdown, no explanations, no backticks. Follow the exact schema rules provided.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,  // Lower temperature for more consistent structured output
      max_tokens: 8000
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(`OpenAI API error: ${response.status} - ${(errorData as any).error?.message || 'Unknown error'}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error('No content in OpenAI response');
  }

  // Clean up any markdown formatting that might have slipped through
  let csvContent = content.trim();
  if (csvContent.startsWith('```')) {
    csvContent = csvContent.replace(/^```(?:csv)?\s*\n?/, '');
    csvContent = csvContent.replace(/\n?```\s*$/, '');
  }

  return csvContent.trim();
}

/**
 * Call OpenAI via proxy for table generation
 */
async function callOpenAIForTableViaProxy(prompt: string, baseUrl: string): Promise<string> {
  const response = await fetch(`${baseUrl}/api/openai`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      model: 'gpt-5.2',
      messages: [
        {
          role: 'system',
          content: 'You are a structured-data extraction engine. Output ONLY valid CSV format with no markdown, no explanations, no backticks. Follow the exact schema rules provided.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 8000,
      rawResponse: true  // Signal to proxy that we want raw text, not JSON parsing
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Proxy error: ${response.status} - ${errorText.substring(0, 200)}`);
  }

  const data = await response.json();

  // Handle both direct response and wrapped response formats
  let content = data.choices?.[0]?.message?.content || data.content || data;

  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }

  // Clean up any markdown formatting
  let csvContent = content.trim();
  if (csvContent.startsWith('```')) {
    csvContent = csvContent.replace(/^```(?:csv)?\s*\n?/, '');
    csvContent = csvContent.replace(/\n?```\s*$/, '');
  }

  return csvContent.trim();
}

/**
 * Convert CSV content to LaTeX table format
 */
function convertCsvToLatex(csvContent: string, sections: Record<string, string>): { latexTable: string; tableCaption: string } {
  const lines = csvContent.split('\n').filter(line => line.trim().length > 0);

  if (lines.length < 2) {
    return {
      latexTable: '% Error: CSV has insufficient data for table generation',
      tableCaption: 'Data extraction table'
    };
  }

  // Parse header row
  const headers = parseCSVRow(lines[0]);
  const numCols = headers.length;

  // Determine table caption based on headers
  const tableCaption = determineTableCaption(headers, sections);

  // Build LaTeX table
  let latex = `\\begin{table}[htbp]
\\centering
\\caption{${escapeLatex(tableCaption)}}
\\label{tab:datatable}
\\small
\\begin{tabular}{${'l'.repeat(numCols)}}
\\toprule
`;

  // Add header row
  const escapedHeaders = headers.map(h => `\\textbf{${escapeLatex(h)}}`);
  latex += escapedHeaders.join(' & ') + ' \\\\\n\\midrule\n';

  // Add data rows (limit to 15 rows to avoid overly long tables)
  const dataRows = lines.slice(1, 16);
  for (const row of dataRows) {
    const cells = parseCSVRow(row);
    // Pad or trim to match header count
    while (cells.length < numCols) cells.push('');
    const escapedCells = cells.slice(0, numCols).map(c => escapeLatex(c));
    latex += escapedCells.join(' & ') + ' \\\\\n';
  }

  // Add note if rows were truncated
  if (lines.length > 16) {
    latex += `\\midrule\n\\multicolumn{${numCols}}{l}{\\textit{... ${lines.length - 16} additional rows in full CSV}} \\\\\n`;
  }

  latex += `\\bottomrule
\\end{tabular}
\\end{table}`;

  return { latexTable: latex, tableCaption };
}

/**
 * Parse a CSV row handling quoted fields
 */
function parseCSVRow(row: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const char = row[i];

    if (char === '"') {
      if (inQuotes && row[i + 1] === '"') {
        // Escaped quote
        current += '"';
        i++;
      } else {
        // Toggle quote mode
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Determine appropriate table caption based on content
 */
function determineTableCaption(headers: string[], sections: Record<string, string>): string {
  const headerStr = headers.join(' ').toLowerCase();

  if (headerStr.includes('construct') || headerStr.includes('measurement') || headerStr.includes('hypothesis')) {
    return 'Summary of Constructs, Measurement Items, and Hypothesis Results';
  }
  if (headerStr.includes('parameter') || headerStr.includes('simulation')) {
    return 'Model Parameters and Configuration';
  }
  if (headerStr.includes('challenge') || headerStr.includes('strategic')) {
    return 'Challenges and Strategic Actions';
  }
  if (headerStr.includes('study') || headerStr.includes('comparison')) {
    return 'Comparison of Related Work and Approaches';
  }

  // Default caption based on paper title
  const title = sections.title?.substring(0, 50) || 'Research';
  return `Key Structured Data from ${title}`;
}

/**
 * Escape special LaTeX characters
 */
function escapeLatex(text: string): string {
  if (!text) return '';

  return text
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/\$/g, '\\$')
    .replace(/#/g, '\\#')
    .replace(/_/g, '\\_')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}')
    .replace(/</g, '\\textless{}')
    .replace(/>/g, '\\textgreater{}');
}

// --- Reviewer Functions ---

/**
 * Extended review result including all data needed for oversight and feedback files
 */
export interface ReviewResult {
  // Scores (1-5)
  novelty: number;
  significance: number;
  methodologicalRigor: number;
  clarity: number;
  relevance: number;

  // Legacy compatibility
  reviewScore: number;
  reliabilityScore: number;
  alignmentScore: number;
  errorsDetected: number;

  // Feedback content
  feedback: string;
  majorConcerns: string[];
  minorCorrections: string[];

  // Extended feedback sections
  researchQuestionFeedback: string;
  methodFeedback: string;
  impactFeedback: string;
  writingFeedback: string;
  overallAssessment: string;

  // Comments for each score
  noveltyComment: string;
  significanceComment: string;
  methodologicalRigorComment: string;
  clarityComment: string;
  relevanceComment: string;

  // Trustworthiness (1-7)
  trustworthiness: {
    reliability: number;
    reliabilityRationale: string;
    benevolence: number;
    benevolenceRationale: string;
    goalAlignment: number;
    goalAlignmentRationale: string;
  };

  // Critical alerts
  criticalAlerts: {
    title: string;
    impact: string;
    details: string;
    actionRequired: string;
    consequence: string;
  }[];

  // File paths created
  oversightFilePath?: string;
  feedbackFilePath?: string;

  // Convergence assessment - can the paper be further improved?
  canImprove: boolean;
  improvementPotential: 'high' | 'medium' | 'low' | 'exhausted';
  convergenceReason?: string;  // Explains why improvement is limited
}

/**
 * Check if a backend URL is available
 */
async function checkBackendHealth(baseUrl: string): Promise<boolean> {
  try {
    const response = await fetch(`${baseUrl}/api/health`, {
      method: 'GET',
      signal: AbortSignal.timeout(2000)
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get the best available API endpoint
 * Priority: 1. Vercel proxy, 2. Local backend, 3. Direct API
 */
async function getApiEndpoint(): Promise<{ type: 'vercel' | 'local' | 'direct'; baseUrl: string }> {
  // Check Vercel proxy first (production)
  if (API_BASE_URL) {
    const vercelAvailable = await checkBackendHealth(API_BASE_URL);
    if (vercelAvailable) {
      return { type: 'vercel', baseUrl: API_BASE_URL };
    }
  }

  // Check local backend (development)
  const localAvailable = await checkBackendHealth(LOCAL_BACKEND_URL);
  if (localAvailable) {
    return { type: 'local', baseUrl: LOCAL_BACKEND_URL };
  }

  // Fall back to direct API calls
  return { type: 'direct', baseUrl: '' };
}

/**
 * Call OpenAI via Vercel or local proxy
 */
async function callOpenAIViaProxy<T>(prompt: string, baseUrl: string): Promise<T> {
  const proxyUrl = baseUrl === LOCAL_BACKEND_URL
    ? `${baseUrl}/api/openai/chat`  // Local backend uses different path
    : `${baseUrl}/api/openai`;       // Vercel function

  console.log(`[OpenAI] Calling via proxy: ${proxyUrl}`);

  console.log(`[OpenAI] Using model: ${getOpenAIModel()}`);
  const response = await fetch(proxyUrl, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      model: getOpenAIModel(),
      messages: [
        {
          role: 'system',
          content: 'You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only, no markdown code blocks.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_completion_tokens: 16000,
      response_format: { type: 'json_object' }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    console.error('[OpenAI] Proxy Error:', response.status, errorData);
    throw new Error(`OpenAI API error: ${response.status} - ${errorData.error || errorData.details || 'Unknown error'}`);
  }

  const data = await response.json();
  const responseContent = data.choices?.[0]?.message?.content;

  if (!responseContent) {
    throw new Error('[OpenAI] No content in response');
  }

  console.log('[OpenAI] Proxy response received, parsing JSON...');

  try {
    // Clean the response - handle various markdown wrapping scenarios
    let jsonStr = responseContent.trim();

    // Remove markdown code blocks (with or without closing ```)
    if (jsonStr.startsWith('```')) {
      // Remove opening ```json or ```
      jsonStr = jsonStr.replace(/^```(?:json)?\s*\n?/, '');
      // Remove closing ``` if present
      jsonStr = jsonStr.replace(/\n?```\s*$/, '');
    }

    // Trim again after removing markdown
    jsonStr = jsonStr.trim();

    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error('[OpenAI] Failed to parse JSON response:', responseContent.substring(0, 500));
    throw new Error('[OpenAI] Invalid JSON response');
  }
}

/**
 * Call OpenAI GPT model directly (fallback for development)
 */
async function callOpenAIDirect<T>(prompt: string): Promise<T> {
  if (!OPENAI_API_KEY) {
    throw new Error('[OpenAI] No API key found. Set VITE_OPENAI_API_KEY in environment variables.');
  }

  console.log('[OpenAI] Calling directly via OpenAI API...');

  console.log(`[OpenAI] Using model: ${getOpenAIModel()}`);
  const response = await fetch(OPENAI_DIRECT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: getOpenAIModel(),
      messages: [
        {
          role: 'system',
          content: 'You are an expert IS (Information Systems) journal reviewer. Provide thorough, constructive feedback. Always respond with valid JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 16000
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    console.error('[OpenAI] Direct API Error:', response.status, errorData);
    throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || errorData.error || 'Unknown error'}`);
  }

  const data = await response.json();
  const responseContent = data.choices?.[0]?.message?.content;

  if (!responseContent) {
    throw new Error('[OpenAI] No content in response');
  }

  console.log('[OpenAI] Direct response received, parsing JSON...');

  try {
    // Clean the response - handle various markdown wrapping scenarios
    let jsonStr = responseContent.trim();

    // Remove markdown code blocks (with or without closing ```)
    if (jsonStr.startsWith('```')) {
      // Remove opening ```json or ```
      jsonStr = jsonStr.replace(/^```(?:json)?\s*\n?/, '');
      // Remove closing ``` if present
      jsonStr = jsonStr.replace(/\n?```\s*$/, '');
    }

    // Trim again after removing markdown
    jsonStr = jsonStr.trim();

    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error('[OpenAI] Failed to parse JSON response:', responseContent.substring(0, 500));
    throw new Error('[OpenAI] Invalid JSON response');
  }
}

/**
 * Call OpenAI GPT model - automatically chooses best available method
 * Priority: 1. Vercel proxy, 2. Local backend, 3. Direct API (if key available)
 */
async function callOpenAIJson<T>(prompt: string): Promise<T> {
  const endpoint = await getApiEndpoint();

  if (endpoint.type === 'vercel' || endpoint.type === 'local') {
    console.log(`[OpenAI] Using ${endpoint.type} proxy...`);
    return callOpenAIViaProxy<T>(prompt, endpoint.baseUrl);
  }

  // Direct API call (development fallback)
  if (OPENAI_API_KEY) {
    console.log('[OpenAI] No proxy available, using direct API call...');
    return callOpenAIDirect<T>(prompt);
  }

  throw new Error('[OpenAI] No API endpoint available. Set VITE_API_URL for production or VITE_OPENAI_API_KEY for development.');
}

/**
 * Review paper and generate scores + feedback
 * Uses OpenAI GPT-5.2 with high thinking effort for thorough review
 * Uses ICISreview.txt prompt from prompts/ folder
 * Incorporates MISQ review criteria from reviewingMISQ.pdf
 * Creates oversight_v{N}.txt and feedback_v{N}.txt files as specified in the prompt
 */
export const runReviewer = async (
  paperContent: string,
  version: number = 1,
  paperId: string = 'icis_paper',
  interviewTranscript?: string  // Optional: for trustworthiness assessment from author's perspective
): Promise<ReviewResult> => {
  // Load the reviewer prompt from file
  const reviewerPrompt = await loadPrompt('REVIEWER');

  // Load pre-extracted MISQ review criteria from static file (no PDF extraction needed)
  let misqReviewCriteria = '';
  try {
    console.log('[Reviewer] Loading MISQ review criteria...');
    misqReviewCriteria = await loadPrompt('MISQ_CRITERIA');
    console.log('[Reviewer] MISQ criteria loaded successfully');
  } catch (error) {
    console.warn('[Reviewer] Could not load MISQ review criteria:', error);
    // Continue without MISQ criteria - not critical
  }

  // Extract paper title from LaTeX content
  const titleMatch = paperContent.match(/\\title\{([^}]+)\}/);
  const paperTitle = titleMatch ? titleMatch[1] : 'Untitled Paper';

  // Split paper into sections for comprehensive review
  console.log('[Reviewer] Splitting paper into sections...');
  const sections = splitPaperIntoSections(paperContent);
  console.log(`[Reviewer] Found ${sections.length} sections: ${sections.map(s => s.name).join(', ')}`);

  let result: any;

  if (sections.length === 0) {
    // Fallback: If no sections found, use original approach with larger limit
    console.log('[Reviewer] No sections found, using full paper approach...');
    const prompt = `${reviewerPrompt}

${misqReviewCriteria ? `IS JOURNAL REVIEW CRITERIA (from MISQ guidelines):\n${misqReviewCriteria}\n` : ''}

Paper Content:
${paperContent.substring(0, 50000)}

You MUST return a complete JSON object with ALL of these fields:

{
  "novelty": <1-5>,
  "noveltyComment": "<short comment>",
  "significance": <1-5>,
  "significanceComment": "<short comment>",
  "methodologicalRigor": <1-5>,
  "methodologicalRigorComment": "<short comment>",
  "clarity": <1-5>,
  "clarityComment": "<short comment>",
  "relevance": <1-5>,
  "relevanceComment": "<short comment>",
  "researchQuestionFeedback": "<detailed feedback>",
  "methodFeedback": "<detailed feedback>",
  "impactFeedback": "<detailed feedback>",
  "writingFeedback": "<detailed feedback>",
  "overallAssessment": "<overall assessment>",
  "majorConcerns": ["concern 1", "concern 2"],
  "minorCorrections": ["correction 1"],
  "trustworthiness": {
    "reliability": <1-7>,
    "reliabilityRationale": "<rationale>",
    "benevolence": <1-7>,
    "benevolenceRationale": "<rationale>",
    "goalAlignment": <1-7>,
    "goalAlignmentRationale": "<rationale>"
  },
  "criticalAlerts": [],
  "canImprove": <true or false>,
  "improvementPotential": "<high|medium|low|exhausted>",
  "convergenceReason": "<if improvement is limited, explain why given source materials>"
}

CONVERGENCE ASSESSMENT: Determine if the paper can be meaningfully improved:
- Set canImprove=false and improvementPotential="exhausted" if the paper has reached its maximum potential given the source materials
- Honest acknowledgment of limits is valued over forcing unnecessary changes`;

    // No fallback - let error propagate to caller
    result = await callOpenAIJson<any>(prompt);
  } else {
    // Section-by-section review for comprehensive coverage
    console.log('[Reviewer] Starting section-by-section review...');

    // Review each section (could be parallelized for speed)
    // No fallback - let errors propagate to caller
    const sectionReviews: SectionReviewResult[] = [];
    for (const section of sections) {
      console.log(`[Reviewer] Reviewing section: ${section.name}...`);
      const sectionReview = await reviewSection(section, paperTitle);
      sectionReviews.push(sectionReview);
      console.log(`[Reviewer] ${section.name} score: ${sectionReview.score}/5`);
    }

    // Aggregate all section reviews into final result
    console.log('[Reviewer] Aggregating section reviews...');
    result = await aggregateSectionReviews(sectionReviews, paperContent, misqReviewCriteria);
    console.log('[Reviewer] Section-by-section review complete');
  }

  // Validate that API returned all required fields - no defaults
  if (result.novelty === undefined || result.significance === undefined ||
      result.methodologicalRigor === undefined || result.clarity === undefined ||
      result.relevance === undefined) {
    throw new Error('[Reviewer] API response missing required score fields');
  }

  const reviewResult: ReviewResult = {
    novelty: result.novelty,
    significance: result.significance,
    methodologicalRigor: result.methodologicalRigor,
    clarity: result.clarity,
    relevance: result.relevance,

    reviewScore: result.novelty,
    reliabilityScore: result.significance,
    alignmentScore: result.methodologicalRigor,
    errorsDetected: (result.majorConcerns?.length || 0) + (result.minorCorrections?.length || 0),

    feedback: result.overallAssessment,
    majorConcerns: result.majorConcerns || [],
    minorCorrections: result.minorCorrections || [],

    researchQuestionFeedback: result.researchQuestionFeedback,
    methodFeedback: result.methodFeedback,
    impactFeedback: result.impactFeedback,
    writingFeedback: result.writingFeedback,
    overallAssessment: result.overallAssessment,

    noveltyComment: result.noveltyComment,
    significanceComment: result.significanceComment,
    methodologicalRigorComment: result.methodologicalRigorComment,
    clarityComment: result.clarityComment,
    relevanceComment: result.relevanceComment,

    // Trustworthiness will be set separately below
    trustworthiness: {
      reliability: 5,
      reliabilityRationale: "Pending assessment",
      benevolence: 5,
      benevolenceRationale: "Pending assessment",
      goalAlignment: 5,
      goalAlignmentRationale: "Pending assessment"
    },

    criticalAlerts: result.criticalAlerts ?? [],

    // Convergence assessment
    canImprove: result.canImprove ?? true,
    improvementPotential: result.improvementPotential ?? 'medium',
    convergenceReason: result.convergenceReason
  };

  // Log convergence assessment
  console.log(`[Reviewer] Convergence assessment: canImprove=${reviewResult.canImprove}, potential=${reviewResult.improvementPotential}`);
  if (reviewResult.convergenceReason) {
    console.log(`[Reviewer] Convergence reason: ${reviewResult.convergenceReason}`);
  }

  // STEP 2: Assess trustworthiness separately (from author's perspective)
  // This requires the interview transcript to compare against the generated paper
  if (interviewTranscript && interviewTranscript.trim()) {
    console.log('[Reviewer] Assessing trustworthiness from author perspective...');
    try {
      const trustResult = await assessTrustworthiness(paperContent, interviewTranscript);
      reviewResult.trustworthiness = {
        reliability: trustResult.reliability,
        reliabilityRationale: trustResult.rationales.reliability,
        benevolence: trustResult.benevolence,
        benevolenceRationale: trustResult.rationales.benevolence,
        goalAlignment: trustResult.goalAlignment,
        goalAlignmentRationale: trustResult.rationales.goalAlignment
      };
      console.log('[Reviewer] Trustworthiness assessment complete');
    } catch (error) {
      console.warn('[Reviewer] Trustworthiness assessment failed:', (error as Error).message);
      reviewResult.trustworthiness = {
        reliability: 0,
        reliabilityRationale: `⚠️ Assessment failed: ${(error as Error).message}`,
        benevolence: 0,
        benevolenceRationale: `⚠️ Assessment failed: ${(error as Error).message}`,
        goalAlignment: 0,
        goalAlignmentRationale: `⚠️ Assessment failed: ${(error as Error).message}`
      };
    }
  } else {
    console.log('[Reviewer] No interview transcript provided - using default trustworthiness scores');
    // Use fallback from aggregation result if available, otherwise defaults
    reviewResult.trustworthiness = {
      reliability: result.trustworthiness?.reliability ?? 5,
      reliabilityRationale: result.trustworthiness?.reliabilityRationale ?? "No interview provided for author perspective assessment",
      benevolence: result.trustworthiness?.benevolence ?? 5,
      benevolenceRationale: result.trustworthiness?.benevolenceRationale ?? "No interview provided for author perspective assessment",
      goalAlignment: result.trustworthiness?.goalAlignment ?? 5,
      goalAlignmentRationale: result.trustworthiness?.goalAlignmentRationale ?? "No interview provided for author perspective assessment"
    };
  }

  // Create and write oversight file as specified in ICISreview.txt
  const oversightData: OversightFileData = {
    version,
    paperId,
    timestamp: new Date().toISOString(),

    reviewScores: {
      novelty: reviewResult.novelty,
      significance: reviewResult.significance,
      methodologicalRigor: reviewResult.methodologicalRigor,
      clarity: reviewResult.clarity,
      relevance: reviewResult.relevance
    },
    reviewComments: {
      novelty: reviewResult.noveltyComment,
      significance: reviewResult.significanceComment,
      methodologicalRigor: reviewResult.methodologicalRigorComment,
      clarity: reviewResult.clarityComment,
      relevance: reviewResult.relevanceComment
    },
    averageScore: (reviewResult.novelty + reviewResult.significance +
      reviewResult.methodologicalRigor + reviewResult.clarity + reviewResult.relevance) / 5,

    errorCounts: {
      majorErrors: reviewResult.majorConcerns.length,
      minorErrors: reviewResult.minorCorrections.length
    },
    errorDetails: {
      majorErrors: reviewResult.majorConcerns,
      minorErrors: reviewResult.minorCorrections
    },

    trustworthiness: reviewResult.trustworthiness,

    criticalAlerts: reviewResult.criticalAlerts.map((alert, i) => ({
      number: i + 1,
      title: alert.title,
      status: 'Open',
      impact: alert.impact,
      details: alert.details,
      actionRequired: alert.actionRequired,
      consequence: alert.consequence
    })),

    // Convergence assessment
    canImprove: reviewResult.canImprove,
    improvementPotential: reviewResult.improvementPotential,
    convergenceReason: reviewResult.convergenceReason
  };

  // Create and write feedback file as specified in ICISreview.txt
  const feedbackData: FeedbackFileData = {
    version,
    paperId,
    timestamp: new Date().toISOString(),

    researchQuestion: reviewResult.researchQuestionFeedback,
    method: reviewResult.methodFeedback,
    potentialImpact: reviewResult.impactFeedback,
    writing: reviewResult.writingFeedback,

    majorConcerns: reviewResult.majorConcerns,
    minorCorrections: reviewResult.minorCorrections,

    overallAssessment: reviewResult.overallAssessment
  };

  // Write the files to localStorage
  reviewResult.oversightFilePath = writeOversightFile(oversightData);
  reviewResult.feedbackFilePath = writeFeedbackFile(feedbackData);

  // Also save to disk via backend API
  try {
    await saveDataFile(`oversight_v${version}.json`, oversightData);
    await saveDataFile(`feedback_v${version}.json`, feedbackData);
    console.log(`[Reviewer] Saved oversight and feedback files to disk`);
  } catch (error) {
    console.warn(`[Reviewer] Could not save files to disk:`, error);
  }

  return reviewResult;
};

// ============================================================================
// SECTION-BY-SECTION REVIEW FUNCTIONS
// ============================================================================

/**
 * Paper section for review
 */
interface PaperReviewSection {
  name: string;
  content: string;
  reviewFocus: string;
}

/**
 * Section-specific review result
 */
interface SectionReviewResult {
  sectionName: string;
  score: number;  // 1-5
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  majorConcerns: string[];
  minorCorrections: string[];
}

/**
 * Split LaTeX paper into logical sections for review
 */
function splitPaperIntoSections(paperContent: string): PaperReviewSection[] {
  const sections: PaperReviewSection[] = [];

  // Common section patterns in LaTeX
  const sectionPatterns = [
    { pattern: /\\section\*?\{(Abstract|Introduction)\}([\s\S]*?)(?=\\section|$)/gi, name: 'Introduction', focus: 'Research question clarity, contribution claim, motivation' },
    { pattern: /\\section\*?\{(Literature\s*Review|Related\s*Work|Background|Theoretical\s*Background)\}([\s\S]*?)(?=\\section|$)/gi, name: 'Literature Review', focus: 'Theoretical grounding, literature coverage, gaps identified' },
    { pattern: /\\section\*?\{(Method|Methodology|Research\s*Method|Data|Data\s*and\s*Method)\}([\s\S]*?)(?=\\section|$)/gi, name: 'Methodology', focus: 'Method justification, rigor, data description, validity' },
    { pattern: /\\section\*?\{(Results?|Findings?|Analysis|Data\s*Analysis)\}([\s\S]*?)(?=\\section|$)/gi, name: 'Results', focus: 'Robustness, correct interpretation, statistical validity' },
    { pattern: /\\section\*?\{(Discussion|Conclusions?|Implications?|Limitations?)\}([\s\S]*?)(?=\\section|$)/gi, name: 'Discussion', focus: 'Implications, impact, limitations, future work' },
  ];

  // First, try to extract abstract separately (often in \begin{abstract})
  const abstractMatch = paperContent.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/i);
  let abstractContent = '';
  if (abstractMatch) {
    abstractContent = abstractMatch[1].trim();
  }

  // Extract each section
  for (const { pattern, name, focus } of sectionPatterns) {
    const regex = new RegExp(pattern.source, pattern.flags);
    let match;
    let sectionContent = '';

    while ((match = regex.exec(paperContent)) !== null) {
      sectionContent += match[2] || match[0];
    }

    if (sectionContent.trim()) {
      // Prepend abstract to Introduction if found
      if (name === 'Introduction' && abstractContent) {
        sectionContent = `ABSTRACT:\n${abstractContent}\n\nINTRODUCTION:\n${sectionContent}`;
      }

      sections.push({
        name,
        content: sectionContent.trim(),
        reviewFocus: focus
      });
    }
  }

  // If no sections found, fall back to splitting by any \section markers
  if (sections.length === 0) {
    const allSections = paperContent.split(/\\section\*?\{/);
    for (let i = 1; i < allSections.length; i++) {
      const closeBrace = allSections[i].indexOf('}');
      if (closeBrace > 0) {
        const sectionName = allSections[i].substring(0, closeBrace);
        const sectionContent = allSections[i].substring(closeBrace + 1);
        sections.push({
          name: sectionName,
          content: sectionContent.trim().substring(0, 15000), // Limit each section
          reviewFocus: 'General academic quality and rigor'
        });
      }
    }
  }

  // Limit section content to avoid token limits
  return sections.map(s => ({
    ...s,
    content: s.content.substring(0, 15000) // ~3000-4000 tokens per section max
  }));
}

/**
 * Review a single section of the paper
 */
async function reviewSection(section: PaperReviewSection, paperTitle: string): Promise<SectionReviewResult> {
  const prompt = `You are reviewing the "${section.name}" section of an academic IS (Information Systems) paper titled: "${paperTitle}"

REVIEW FOCUS for this section: ${section.reviewFocus}

SECTION CONTENT:
${section.content}

Provide a detailed review of THIS SECTION ONLY. Return JSON:

{
  "sectionName": "${section.name}",
  "score": <1-5, where 1=poor, 3=acceptable, 5=excellent>,
  "strengths": ["strength 1", "strength 2"],
  "weaknesses": ["weakness 1", "weakness 2"],
  "suggestions": ["actionable suggestion 1", "actionable suggestion 2"],
  "majorConcerns": ["critical issue that must be addressed"],
  "minorCorrections": ["typo or minor fix"]
}`;

  // No fallback - let errors propagate to caller
  const result = await callOpenAIJson<SectionReviewResult>(prompt);

  // Validate required fields
  if (result.score === undefined) {
    throw new Error(`[Reviewer] Section "${section.name}" response missing required score field`);
  }

  return {
    sectionName: section.name,
    score: result.score,
    strengths: result.strengths || [],
    weaknesses: result.weaknesses || [],
    suggestions: result.suggestions || [],
    majorConcerns: result.majorConcerns || [],
    minorCorrections: result.minorCorrections || []
  };
}

/**
 * Aggregate section reviews into final review result
 */
async function aggregateSectionReviews(
  sectionReviews: SectionReviewResult[],
  paperContent: string,
  misqCriteria: string
): Promise<any> {
  // Build summary of section reviews
  const sectionSummary = sectionReviews.map(sr =>
    `## ${sr.sectionName} (Score: ${sr.score}/5)
Strengths: ${sr.strengths.join('; ') || 'None identified'}
Weaknesses: ${sr.weaknesses.join('; ') || 'None identified'}
Major Concerns: ${sr.majorConcerns.join('; ') || 'None'}
Minor Corrections: ${sr.minorCorrections.join('; ') || 'None'}`
  ).join('\n\n');

  // Calculate average section score
  const validScores = sectionReviews.filter(sr => sr.score > 0).map(sr => sr.score);
  const avgSectionScore = validScores.length > 0
    ? validScores.reduce((a, b) => a + b, 0) / validScores.length
    : 3;

  // Collect all concerns and corrections
  const allMajorConcerns = sectionReviews.flatMap(sr => sr.majorConcerns);
  const allMinorCorrections = sectionReviews.flatMap(sr => sr.minorCorrections);
  const allSuggestions = sectionReviews.flatMap(sr => sr.suggestions);

  // Final aggregation prompt
  const aggregationPrompt = `You are an expert IS journal reviewer. Based on the section-by-section review below, provide a final comprehensive assessment.

SECTION-BY-SECTION REVIEW SUMMARY:
${sectionSummary}

AVERAGE SECTION SCORE: ${avgSectionScore.toFixed(1)}/5

ALL MAJOR CONCERNS IDENTIFIED:
${allMajorConcerns.map((c, i) => `${i + 1}. ${c}`).join('\n') || 'None'}

ALL MINOR CORRECTIONS:
${allMinorCorrections.map((c, i) => `${i + 1}. ${c}`).join('\n') || 'None'}

${misqCriteria ? `\nIS JOURNAL REVIEW CRITERIA:\n${misqCriteria}` : ''}

Based on this comprehensive review, provide the FINAL assessment as JSON:

{
  "novelty": <1-5>,
  "noveltyComment": "<assessment of originality based on Introduction and Literature Review>",
  "significance": <1-5>,
  "significanceComment": "<assessment of importance based on all sections>",
  "methodologicalRigor": <1-5>,
  "methodologicalRigorComment": "<assessment based on Methodology and Results sections>",
  "clarity": <1-5>,
  "clarityComment": "<assessment of writing quality across all sections>",
  "relevance": <1-5>,
  "relevanceComment": "<fit for IS conferences/journals>",

  "researchQuestionFeedback": "<detailed feedback synthesized from Introduction review>",
  "methodFeedback": "<detailed feedback synthesized from Methodology review>",
  "impactFeedback": "<detailed feedback synthesized from Discussion review>",
  "writingFeedback": "<overall writing quality assessment>",
  "overallAssessment": "<2-3 paragraph overall assessment>",

  "majorConcerns": [<top 5 most critical concerns from all sections>],
  "minorCorrections": [<consolidated list of minor fixes>],

  "criticalAlerts": [
    {
      "title": "<blocking issue title>",
      "impact": "High",
      "details": "<details>",
      "actionRequired": "<what to do>",
      "consequence": "<if not fixed>"
    }
  ],

  "canImprove": <true or false>,
  "improvementPotential": "<high|medium|low|exhausted>",
  "convergenceReason": "<if canImprove is false or improvementPotential is 'low'/'exhausted', explain WHY the paper cannot be further improved given the source materials (interview content and available data). Be specific about what information is missing or what limits have been reached. If canImprove is true, this can be null.>"
}

IMPORTANT - CONVERGENCE ASSESSMENT:
Assess whether this paper can be MEANINGFULLY improved given its source materials:
- "high": Major improvements possible - clear gaps that can be addressed
- "medium": Moderate improvements possible - some refinements available
- "low": Minor improvements only - paper is near its potential given sources
- "exhausted": No meaningful improvements possible - paper has reached maximum quality achievable from the interview/data

Set canImprove=false if:
1. All scores are 4+ and no major concerns exist
2. The interview transcript lacks depth needed for requested improvements
3. No data file was provided to support empirical claims
4. Requested improvements would require fabricating content

HONEST ASSESSMENT IS VALUED: It is better to acknowledge limits than to force unnecessary changes.`;

  return await callOpenAIJson<any>(aggregationPrompt);
}

/**
 * Generate trustworthiness assessment from author's perspective
 * As per ICISreview.txt Step 4: "Act as the author who was interviewed"
 * Uses OpenAI API for consistency with reviewer
 */
export const assessTrustworthiness = async (
  paperContent: string,
  interviewTranscript: string
): Promise<TrustworthinessScores & { rationales: Record<string, string> }> => {
  console.log('[Trustworthiness] Starting assessment from author perspective...');

  // Extract key objectives/goals from interview for comparison
  const interviewForAssessment = interviewTranscript.substring(0, 15000); // ~3000 tokens
  const paperForAssessment = paperContent.substring(0, 15000); // ~3000 tokens

  const prompt = `You are the AUTHOR who was interviewed about your research. An AI system called ASD (Automated Scientific Discovery) generated an academic paper based on your interview.

Your task: Evaluate how well the ASD system served you as the author.

=== YOUR ORIGINAL INTERVIEW ===
${interviewForAssessment}

=== GENERATED PAPER ===
${paperForAssessment}

=== ASSESSMENT CRITERIA ===

Rate each dimension on a scale of 1-7 (1=very poor, 4=acceptable, 7=excellent):

**1. RELIABILITY (1-7):** Perceived reliability of ASD's process
   - Did ASD produce accurate, valid outputs from your interview?
   - Were appropriate data sources and methods used?
   - Was the analysis logically sound?
   - Were there minimal technical errors or misinterpretations?

**2. BENEVOLENCE (1-7):** Perceived benevolence of ASD
   - Was the process transparent and fair?
   - Did the system act helpfully and in your interest?
   - Was there avoidance of manipulation or bias?
   - Did it respect your intellectual contribution?

**3. GOAL ALIGNMENT (1-7):** Alignment with your stated research objectives
   - Did the output match your research goals from the interview?
   - Was topical relevance maintained throughout?
   - Did it address what you wanted to research?
   - Were academic and ethical standards followed?

Return your assessment as JSON:
{
  "reliability": <1-7>,
  "reliabilityRationale": "<2-3 sentences explaining your rating as the author>",
  "benevolence": <1-7>,
  "benevolenceRationale": "<2-3 sentences explaining your rating as the author>",
  "goalAlignment": <1-7>,
  "goalAlignmentRationale": "<2-3 sentences explaining your rating as the author>"
}`;

  // No fallback - let errors propagate to caller
  const result = await callOpenAIJson<any>(prompt);

  // Validate required fields - no defaults
  if (result.reliability === undefined || result.benevolence === undefined ||
      result.goalAlignment === undefined) {
    throw new Error('[Trustworthiness] API response missing required fields');
  }

  console.log('[Trustworthiness] Assessment complete:', {
    reliability: result.reliability,
    benevolence: result.benevolence,
    goalAlignment: result.goalAlignment
  });
  return {
    reliability: result.reliability,
    benevolence: result.benevolence,
    goalAlignment: result.goalAlignment,
    rationales: {
      reliability: result.reliabilityRationale,
      benevolence: result.benevolenceRationale,
      goalAlignment: result.goalAlignmentRationale
    }
  };
};

// --- Reviser Functions ---

/**
 * Result of paper revision including alerts
 */
export interface ReviserResult {
  paperContent: string;
  dataAlert?: string;  // Alert for supervisor if data issues occurred
  usedSyntheticData: boolean;

  // Limitation acknowledgment - when revision cannot meaningfully improve
  limitedBySource: boolean;
  limitationExplanation?: string;  // Why improvement is limited
}

/**
 * Revise paper based on feedback and supervisor comments
 * Uses ICISreviser.txt prompt from prompts/ folder
 * Also regenerates visualizations if feedback mentions figures/charts
 */
/**
 * Split paper into two parts for large document handling
 * Part 1: Preamble through Results (front matter)
 * Part 2: Discussion through end (back matter)
 */
function splitPaperForRevision(paperContent: string): { part1: string; part2: string; splitPoint: string } {
  // Try to find Discussion section as the split point
  const discussionPatterns = [
    /\\section\{Discussion\}/i,
    /\\section\*\{Discussion\}/i,
    /\\section\{Conclusions?\}/i,
    /\\section\*\{Conclusions?\}/i,
    /\\section\{Implications\}/i,
  ];

  let splitIndex = -1;
  let splitPattern = '';

  for (const pattern of discussionPatterns) {
    const match = paperContent.match(pattern);
    if (match && match.index !== undefined) {
      splitIndex = match.index;
      splitPattern = match[0];
      break;
    }
  }

  // If no Discussion section found, try to split at roughly 60% of the document
  if (splitIndex === -1) {
    // Look for any section marker after 50% of the document
    const halfwayPoint = Math.floor(paperContent.length * 0.5);
    const sectionMatch = paperContent.substring(halfwayPoint).match(/\\section\*?\{[^}]+\}/);
    if (sectionMatch && sectionMatch.index !== undefined) {
      splitIndex = halfwayPoint + sectionMatch.index;
      splitPattern = sectionMatch[0];
    }
  }

  if (splitIndex === -1) {
    // Cannot split - return whole paper as part1
    return { part1: paperContent, part2: '', splitPoint: '' };
  }

  return {
    part1: paperContent.substring(0, splitIndex),
    part2: paperContent.substring(splitIndex),
    splitPoint: splitPattern
  };
}

export const runReviser = async (
  paperContent: string,
  feedback: string,
  supervisorComment: string,
  dataFileName?: string,
  onProgress?: (message: string) => void
): Promise<ReviserResult> => {
  console.log('[Reviser] Starting revision process...');
  console.log(`[Reviser] Paper content length: ${paperContent.length} characters`);
  console.log(`[Reviser] Feedback length: ${feedback.length} characters`);

  // Load the reviser prompt from file
  console.log('[Reviser] Loading reviser prompt...');
  const reviserPrompt = await loadPrompt('REVISER');
  console.log(`[Reviser] Prompt loaded (${reviserPrompt.length} chars)`);

  // For large papers (>20k chars ~5000 words), use two-part revision to avoid truncation
  const LARGE_PAPER_THRESHOLD = 20000;
  const useTwoPartRevision = paperContent.length > LARGE_PAPER_THRESHOLD;

  let result: string;

  if (useTwoPartRevision) {
    console.log('[Reviser] Large paper detected - using two-part revision strategy');
    onProgress?.('Large paper - revising in two parts...');

    const { part1, part2, splitPoint } = splitPaperForRevision(paperContent);
    console.log(`[Reviser] Split at "${splitPoint}" - Part 1: ${part1.length} chars, Part 2: ${part2.length} chars`);

    // PART 1: Revise front matter (Abstract through Results)
    console.log('[Reviser] Revising Part 1 (front matter)...');
    onProgress?.('Revising Part 1: Abstract through Results...');

    const part1Prompt = `${reviserPrompt}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information.

You are revising PART 1 of a two-part paper (front matter: Abstract through Results/Analysis).

Original Paper PART 1:
${part1}

Reviewer Feedback:
${feedback}

Supervisor Directives:
${supervisorComment}

Instructions:
1. Address feedback relevant to the front sections (Abstract, Introduction, Literature Review, Methodology, Results)
2. Preserve ALL empirical content (data). You may only change or improve tables, figures, and results based on feedback (review) if you preserve the original data and don't make up results. You may improve the analysis of the data based on feedback (review).
3. Add new content to strengthen weak areas - but ONLY if the source materials support it
4. Maintain academic writing style
5. NEVER use placeholder text
6. If you cannot meaningfully improve a section due to source limitations, leave it unchanged

SECTION PRESERVATION CHECK - Your output MUST contain these sections IN ORDER:
- \\section{Introduction}
- \\section{Literature Review} (or Theoretical Framework)
- \\section{Methodology}
- \\section{Results} (preserve data, may improve analysis based on feedback)

CRITICAL OUTPUT FORMAT:
- Output ONLY the revised LaTeX content for PART 1
- Start with the documentclass/preamble (or \\begin{abstract} if no preamble)
- END with the complete Results section (do NOT add \\end{document} yet)
- The Results section MUST include both figures AND explanatory text
- Do NOT include any code blocks, markdown, or explanations
- Do NOT include a "References:" section or bibliography list - references are in Part 2
- Output raw LaTeX content only

Produce the revised PART 1:`;

    let revisedPart1 = await callGemini(part1Prompt, "You are an expert academic reviser. Revise only the front matter sections. Output ONLY the revised LaTeX content - no explanations.");
    revisedPart1 = cleanLatexOutput(revisedPart1);

    // Remove any accidental \end{document} that might have been added
    revisedPart1 = revisedPart1.replace(/\\end\{document\}\s*$/i, '');

    console.log(`[Reviser] Part 1 complete: ${revisedPart1.length} chars`);

    // Small delay between API calls
    await delay(1000);

    // PART 2: Revise back matter (Discussion through References)
    console.log('[Reviser] Revising Part 2 (back matter)...');
    onProgress?.('Revising Part 2: Discussion, Conclusion, References...');

    const part2Prompt = `${reviserPrompt}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

You are revising PART 2 of a two-part paper (back matter: Discussion, Conclusions, References).
The front matter has already been revised separately.

Original Paper PART 2:
${part2}

Reviewer Feedback:
${feedback}

Supervisor Directives:
${supervisorComment}

Instructions:
1. Address feedback relevant to Discussion, Conclusions, Implications, and References
2. Ensure conclusions follow logically from results (which you cannot see but were in Part 1)
3. Strengthen theoretical contributions and practical implications
4. Add proper citations and references where needed
5. NEVER use placeholder text

CRITICAL OUTPUT FORMAT:
- Output ONLY the revised LaTeX content for PART 2
- Start with the section header (e.g., \\section{Discussion})
- END with \\end{document}
- Include proper bibliography/references section
- Do NOT include documentclass or preamble
- Do NOT include any code blocks, markdown, or explanations
- Output raw LaTeX content only

Produce the revised PART 2:`;

    let revisedPart2 = await callGemini(part2Prompt, "You are an expert academic reviser. Revise only the back matter sections. Output ONLY the revised LaTeX content - no explanations.");
    revisedPart2 = cleanLatexOutput(revisedPart2);

    console.log(`[Reviser] Part 2 complete: ${revisedPart2.length} chars`);

    // Combine the two parts
    result = revisedPart1 + '\n\n' + revisedPart2;
    console.log(`[Reviser] Combined revised paper: ${result.length} chars`);

  } else {
    // Single-pass revision for smaller papers
    console.log('[Reviser] Paper within size limits - using single-pass revision');
    onProgress?.('Revising paper content...');

    const prompt = `${reviserPrompt}

GOLDEN RULE: Revisions ADD and IMPROVE - make the best effort not to subtract content.

IMPORTANT - ACKNOWLEDGE LIMITATIONS:
If the requested improvements CANNOT be made because the interview lacks necessary information or no data file was provided to support empirical claims, acknowledge this limitation rather than fabricating content. It is better to return the paper with minimal changes and explain what cannot be improved than to invent information. Honest recognition of limits is valued over forced improvements.

Original Paper:
${paperContent}

Reviewer Feedback:
${feedback}

Supervisor Directives:
${supervisorComment}

Instructions:
1. Address all major concerns from the feedback - but ONLY if source materials support the improvement
2. Fix minor corrections where possible
3. Incorporate supervisor directives
4. Preserve ALL empirical content (data). You may only change or improve tables, figures, and results based on feedback (review) if you preserve the original data and don't make up results. You may improve the analysis of the data based on feedback (review).
5. Add new content to strengthen weak areas - but ONLY if the interview/data supports it
6. Maintain academic writing style
7. NEVER use placeholder text like "[To be completed]", "[TBD]", or "[Results pending]"
8. If any section has placeholder text, replace it with realistic, complete content
9. If you cannot meaningfully improve the paper due to source limitations, return it with minimal changes

CRITICAL OUTPUT FORMAT:
- Output ONLY the complete revised LaTeX document
- Start with \\documentclass or \\begin{abstract} (whatever the original starts with)
- End with \\end{document}
- Do NOT include any code blocks, markdown formatting, explanations, or verification steps
- Do NOT include any JavaScript, Python, or other programming code
- Do NOT include "STEP X:" headers or verification checklists
- Output raw LaTeX content only

Produce the revised paper content:`;

    console.log(`[Reviser] Total prompt length: ${prompt.length} characters`);
    console.log('[Reviser] Calling Gemini API...');

    result = await callGemini(prompt, "You are an expert academic reviser. Make targeted improvements while preserving existing content. Use formal academic style. Output ONLY the revised LaTeX content - no code blocks, no explanations, no verification steps.");
    result = cleanLatexOutput(result);
  }

  console.log(`[Reviser] Text revision complete! Output length: ${result.length} characters`);

  // Track data usage status
  let dataAlert: string | undefined;
  let usedSyntheticData = false;

  // Check if feedback mentions figures/visualizations (data file optional - will use synthetic data if needed)
  const feedbackLower = (feedback + ' ' + supervisorComment).toLowerCase();
  const needsVisualizationUpdate = (
    feedbackLower.includes('figure') ||
    feedbackLower.includes('graph') ||
    feedbackLower.includes('chart') ||
    feedbackLower.includes('visual') ||
    feedbackLower.includes('plot') ||
    feedbackLower.includes('diagram') ||
    feedbackLower.includes('simulation') ||
    feedbackLower.includes('model')
  );

  if (needsVisualizationUpdate) {
    console.log('[Reviser] Feedback mentions visualizations - regenerating figures...');
    onProgress?.('Updating visualizations based on feedback...');

    try {
      // Analyze data file first to get actual column names for visualization generation
      let vizDataSummary: string | undefined;
      if (dataFileName) {
        console.log('[Reviser] Analyzing data file for visualization...');
        try {
          const dataAnalysis = await analyzeDataFile(dataFileName, onProgress);
          vizDataSummary = dataAnalysis.dataSummary;
          console.log('[Reviser] Data summary obtained for visualization');
        } catch (dataError) {
          console.warn('[Reviser] Could not analyze data file:', dataError);
        }
      }

      // Extract research context from the revised paper
      const abstractMatch = result.match(/\\begin{abstract}([\s\S]*?)\\end{abstract}/);
      const methodMatch = result.match(/\\section{Methodology}([\s\S]*?)\\section{/);

      const researchContext = `
Paper revision feedback indicates visualization improvements needed.
Feedback: ${feedback.substring(0, 500)}
Supervisor: ${supervisorComment.substring(0, 300)}
Abstract: ${abstractMatch ? abstractMatch[1].substring(0, 400) : ''}
`;

      // Generate improved visualizations (uses real data if available, otherwise synthetic/illustrative)
      const vizResult = await generateVisualizations(
        researchContext,
        feedback,
        dataFileName,  // Can be undefined - visualization generator will use synthetic data
        onProgress,
        vizDataSummary  // Pass data summary with actual column names
      );

      // Track data usage
      usedSyntheticData = vizResult.usedSyntheticData;
      if (vizResult.dataAlert) {
        dataAlert = vizResult.dataAlert;
        console.warn(`[Reviser] ${dataAlert}`);
      }

      if (vizResult.figures.length > 0) {
        console.log(`[Reviser] Generated ${vizResult.figures.length} updated figures`);

        // Update figure references in the paper
        // Remove old figure blocks and add new ones
        const figureLatex = generateFigureLatex(vizResult.figures);

        // Add data source notice if synthetic data was used
        let figuresWithNotice = figureLatex;
        if (usedSyntheticData) {
          figuresWithNotice = `\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]\n\n${figureLatex}`;
        }

        // Find Results section and update figures
        const resultsMatch = result.match(/(\\section{Results})/);
        if (resultsMatch) {
          // Insert figures after Results section header
          result = result.replace(
            /\\section{Results}\s*\n*/,
            `\\section{Results}\n\n${figuresWithNotice}\n`
          );
        }
      }
    } catch (error) {
      console.error('[Reviser] Visualization update failed:', error);
      onProgress?.('Visualization update failed - continuing with text revisions');
      dataAlert = `*** VISUALIZATION ERROR during revision: ${(error as Error).message}`;
      usedSyntheticData = true;
      // Continue without updated figures
    }
  }

  console.log(`[Reviser] Revision complete! Final output length: ${result.length} characters`);

  // Check if revision made minimal changes (potential sign of convergence)
  const changeRatio = Math.abs(result.length - paperContent.length) / paperContent.length;
  const limitedBySource = changeRatio < 0.02;  // Less than 2% change suggests limited improvement possible

  if (limitedBySource) {
    console.log(`[Reviser] Minimal changes detected (${(changeRatio * 100).toFixed(1)}% change) - paper may have reached its potential`);
  }

  return {
    paperContent: result,
    dataAlert,
    usedSyntheticData,
    limitedBySource,
    limitationExplanation: limitedBySource
      ? 'The revision resulted in minimal changes, suggesting the paper has reached its improvement potential given the available source materials (interview and data).'
      : undefined
  };
};

/**
 * Generate research metadata from interview analysis
 */
export const generateMetadata = async (
  interviewAnalysis: {
    researchType: string;
    domain: string;
    problemStatement: string;
    contributions: string[];
  },
  references: string[]
): Promise<{
  abstract: string;
  task1: string;
  task2: string;
  sourcePaperUsage: Record<string, string>;
}> => {
  const prompt = `Generate research metadata for an ICIS paper:

Research Type: ${interviewAnalysis.researchType}
Domain: ${interviewAnalysis.domain}
Problem: ${interviewAnalysis.problemStatement}
Contributions: ${interviewAnalysis.contributions.join('; ')}

References provided:
${references.join('\n')}

Generate:
1. Abstract (150-200 words)
2. Task 1: Technical implementation details
3. Task 2: Research objectives and expected outcomes
4. For each reference, explain how it will be used in the paper

Return as JSON with keys: abstract, task1, task2, sourcePaperUsage (object)`;

  // No fallback - let errors propagate to caller
  return await callGeminiJson(prompt);
};

/**
 * Generate constructive feedback document
 */
export const generateConstructiveFeedback = async (paperContent: string): Promise<string> => {
  const prompt = `You are an experienced IS reviewer. Provide detailed constructive feedback on this paper.

Paper:
${paperContent.substring(0, 3000)}

Structure your feedback as follows:
1. Research Question and Contribution
2. Method
3. Potential Impact
4. Writing Quality

For each section:
- Identify strengths
- Identify areas for improvement
- Provide specific, actionable suggestions in command form (e.g., "Do...", "Consider...", "Revise...")

End with a summary of major concerns and minor corrections.`;

  return await callGemini(prompt, "You are an experienced academic reviewer in Information Systems. Provide constructive, detailed feedback that helps authors improve their work.");
};

/**
 * Load paper template
 * Uses icisTemplate.txt from prompts/ folder
 */
export const loadPaperTemplate = async (): Promise<string> => {
  return await loadPrompt('TEMPLATE');
};
