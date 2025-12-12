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
import { saveDataFile, executePythonScript, listGeneratedFigures, readPdfFile, getDataFilePreview, getCloudDataFile, analyzeDataWithPython, CloudAnalysisResult } from './fileApi';

// API Configuration
// Supports three modes (in priority order):
// 1. Vercel serverless proxy (VITE_API_URL) - most secure for production
// 2. Local backend proxy (localhost:3001) - for local development
// 3. Direct API calls (VITE_*_API_KEY) - fallback, less secure

const API_BASE_URL = import.meta.env.VITE_API_URL || ''; // e.g., 'https://your-app.vercel.app'
const LOCAL_BACKEND_URL = 'http://localhost:3001';

// Gemini configuration
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const MODEL_ID = import.meta.env.VITE_GEMINI_MODEL || 'gemini-3-pro-preview';

// OpenAI configuration
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';
const OPENAI_MODEL = import.meta.env.VITE_OPENAI_MODEL || 'gpt-5.2';

// Direct API URLs (fallback only)
const GEMINI_DIRECT_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${GEMINI_API_KEY}`;
const OPENAI_DIRECT_URL = 'https://api.openai.com/v1/chat/completions';

// Legacy compatibility
const API_KEY = GEMINI_API_KEY;
const BASE_URL = GEMINI_DIRECT_URL;

// Log configuration status (no sensitive data)
if (!API_BASE_URL && !GEMINI_API_KEY) {
  console.error('[Gemini] No API configuration found. Set VITE_API_URL or VITE_GEMINI_API_KEY.');
} else if (API_BASE_URL) {
  console.log('[API] Using Vercel proxy:', API_BASE_URL);
} else {
  console.log('[API] Using direct API calls (development mode)');
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
    model: MODEL_ID
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    console.log('[Gemini] Proxy request timeout - aborting after 3 minutes');
    controller.abort();
  }, 180000);

  const response = await fetch(proxyUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
  const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

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

      const response = await fetch(BASE_URL, {
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
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!content) {
        // Check for content filtering
        const finishReason = data.candidates?.[0]?.finishReason;
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

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw parseApiError(response.status, errorText);
  }

  const data = await response.json();
  const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

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
        prompt: `Generate a References section with 15-20 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text like "[Reference to be completed]"
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

FORMAT: Simple list in APA 7th edition style (NO \\bibitem commands needed):

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. \\textit{MIS Quarterly}, \\textit{13}(3), 319-340.

DeLone, W. H., \\& McLean, E. R. (2003). The DeLone and McLean model of information systems success: A ten-year update. \\textit{Journal of Management Information Systems}, \\textit{19}(4), 9-30.

Venkatesh, V., Morris, M. G., Davis, G. B., \\& Davis, F. D. (2003). User acceptance of information technology: Toward a unified view. \\textit{MIS Quarterly}, \\textit{27}(3), 425-478.

APA 7TH EDITION FORMAT RULES (MUST FOLLOW EXACTLY):
1. Author format: LastName, F. M., \\& LastName, F. M. (use ampersand before last author)
2. For 3+ authors: List all authors up to 20
3. Year in parentheses after authors: (2020).
4. Article title in sentence case (only first word and proper nouns capitalized)
5. Journal name in italics: \\textit{MIS Quarterly}
6. Volume number in italics, issue in parentheses: \\textit{44}(2), 523-548.
7. Sort alphabetically by first author's last name

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods
- Yin (2018) - Case study research design

Requirements:
1. Use STRICT APA 7th edition format throughout
2. ONLY include papers you are confident exist in academic databases
3. References should match the inline citations used in the paper (Author, Year)
4. All journal/conference names in \\textit{}
5. Use \\& for multiple authors, not "and"
6. Sort references alphabetically by first author's last name`,
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
        prompt: `Generate a References section with 20-30 properly formatted academic references.

⚠️ CRITICAL: ALL references must be REAL papers that exist in academic databases (Semantic Scholar, Google Scholar).
- NO fabricated references
- NO placeholder text like "[Reference to be completed]"
- If you cannot recall the exact details of a paper, use a well-known foundational paper instead

FORMAT: Simple list in APA 7th edition style (NO \\bibitem commands needed):

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. \\textit{MIS Quarterly}, \\textit{13}(3), 319-340.

DeLone, W. H., \\& McLean, E. R. (2003). The DeLone and McLean model of information systems success: A ten-year update. \\textit{Journal of Management Information Systems}, \\textit{19}(4), 9-30.

Venkatesh, V., Morris, M. G., Davis, G. B., \\& Davis, F. D. (2003). User acceptance of information technology: Toward a unified view. \\textit{MIS Quarterly}, \\textit{27}(3), 425-478.

APA 7TH EDITION FORMAT RULES (MUST FOLLOW EXACTLY):
1. Author format: LastName, F. M., \\& LastName, F. M. (use ampersand before last author)
2. For 3+ authors: List all authors up to 20
3. Year in parentheses after authors: (2020).
4. Article title in sentence case (only first word and proper nouns capitalized)
5. Journal name in italics: \\textit{MIS Quarterly}
6. Volume number in italics, issue in parentheses: \\textit{44}(2), 523-548.
7. Sort alphabetically by first author's last name
8. Conference papers: Author, A. A. (Year). Title. In \\textit{Proceedings of Conference Name} (pp. xx-xx).

WELL-KNOWN IS PAPERS TO USE (verified to exist):
- Davis (1989) - TAM, MIS Quarterly
- Venkatesh et al. (2003) - UTAUT, MIS Quarterly
- DeLone & McLean (1992, 2003) - IS Success Model
- Orlikowski (1992) - Structuration, Organization Science
- Walsham (1995) - Interpretive IS research
- Eisenhardt (1989) - Case study methods
- Yin (2018) - Case study research design
- Rogers (2003) - Diffusion of Innovations
- Straub et al. (2004) - Validation guidelines, MIS Quarterly

Requirements:
1. Use STRICT APA 7th edition format throughout
2. ONLY include papers you are confident exist in academic databases
3. Include mix of: journal articles, conference papers (ICIS, ECIS, AMCIS), books
4. References should match the inline citations used in the paper (Author, Year)
5. All journal/conference names in \\textit{}
6. Use \\& for multiple authors, not "and"
7. Sort references alphabetically by first author's last name`,
        minWords: 500
      }
    );
  }

  return baseSections;
}

/**
 * Generate a single paper section
 */
async function generateSection(
  section: PaperSection,
  context: {
    interviewTranscript: string;
    previousSections: Record<string, string>;
    researchType?: string;
    dataSummary?: string;  // Data analysis summary to inform Methodology and Results
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
- Do NOT include section headers in your response - just the content
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
- Do NOT include a bibliography or reference list at the end of this section
- References will be collected at the end of the paper`;

  const content = await callGemini(prompt,
    "You are an expert academic writer specializing in Information Systems research. Write in formal academic style following top-tier IS journal standards."
  );

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

  for (const section of sections) {
    try {
      onProgress?.(section.name, 'starting');
      console.log(`[Builder] Generating: ${section.name}...`);

      const content = await generateSection(section, {
        interviewTranscript,
        previousSections: generatedSections,
        dataSummary  // Pass data summary to inform Methodology and Results sections
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

  // Generate visualizations for all full papers (uses real data if available, otherwise synthetic/illustrative)
  let generatedFigures: GeneratedFigure[] = [];
  let usedSyntheticData = false;

  if (!isPartialPaper) {
    try {
      onProgress?.('Visualizations', 'starting');
      console.log('[Builder] Generating visualizations...');

      // Create research context from generated sections
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
        dataSummary  // Pass pre-analyzed data summary with actual column names
      );

      generatedFigures = vizResult.figures;
      usedSyntheticData = vizResult.usedSyntheticData;

      // Merge visualization alerts with data analysis alerts
      if (vizResult.dataAlert) {
        dataAlert = dataAlert
          ? `${dataAlert}\n${vizResult.dataAlert}`
          : vizResult.dataAlert;
      }

      // Use visualization data summary if we don't have one from earlier analysis
      if (!dataSummary && vizResult.dataSummary) {
        dataSummary = vizResult.dataSummary;
      }

      onProgress?.('Visualizations', 'completed');
      console.log(`[Builder] Generated ${generatedFigures.length} figures`);

      if (vizResult.dataAlert) {
        console.warn(`[Builder] ${vizResult.dataAlert}`);
      }
    } catch (error) {
      console.error('[Builder] Visualization generation failed:', error);
      onProgress?.('Visualizations', 'error');
      const vizError = `*** VISUALIZATION ERROR: ${(error as Error).message}`;
      dataAlert = dataAlert ? `${dataAlert}\n${vizError}` : vizError;
      usedSyntheticData = true;
      // Continue without figures - don't fail the whole paper
    }
  }

  // Combine all sections into final paper, including figures and data source notice
  const paperContent = assemblePaper(generatedSections, isPartialPaper, generatedFigures, usedSyntheticData);

  const totalWords = paperContent.split(/\s+/).length;
  console.log(`[Builder] Paper complete: ${totalWords} words, ${generatedFigures.length} figures`);

  return {
    paperContent,
    dataAlert,
    usedSyntheticData,
    dataSummary
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
 * Assemble generated sections into a complete paper
 */
function assemblePaper(
  sections: Record<string, string>,
  isPartialPaper: boolean,
  figures: GeneratedFigure[] = [],
  usedSyntheticData: boolean = false
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

  let paper = '';

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
      const fixedContent = fixLatexEscaping(sections[key]);

      if (key === 'title') {
        // Title is handled via \title{} and \maketitle in the preamble
        // Store it for later use but don't add section header
        paper += `\\title{${fixedContent}}\n\\maketitle\n\n`;
      } else if (key === 'abstract') {
        paper += `\\begin{abstract}\n${fixedContent}\n\\end{abstract}\n\n`;
      } else if (key === 'references') {
        // Clean up references section and add it (don't escape - may break bibliography formatting)
        const cleanedRefs = cleanReferencesSection(sections[key]);
        // Add References section header for new APA format (simple list without thebibliography)
        if (!cleanedRefs.includes('\\begin{thebibliography}')) {
          paper += `\\section*{References}\n\n${cleanedRefs}\n`;
        } else {
          // Old format with thebibliography - no section header needed
          paper += `\n${cleanedRefs}\n`;
        }
      } else if (key === 'results' && figures.length > 0) {
        // Insert figures at the beginning of Results section
        paper += `\\section{${sectionTitles[key]}}\n\n`;
        // Add data source notice within Results section
        if (usedSyntheticData) {
          paper += `\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]\n\n`;
        }
        paper += generateFigureLatex(figures);
        paper += `\n${fixedContent}\n\n`;
      } else {
        paper += `\\section{${sectionTitles[key]}}\n\n${fixedContent}\n\n`;
      }
    }
  }

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
save_figure(fig, 'fig1_descriptive_name.png', 'Description of what this figure shows')

# Figure 2: [Description]
fig, ax = plt.subplots(figsize=(8, 5))
# ... more plotting code ...
save_figure(fig, 'fig2_descriptive_name.png', 'Description of this figure')

# Continue for all figures...
\`\`\`

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
 * Visualization modes (in order of preference):
 * 1. Cloud Python (standard library) - generates chart_data for TikZ/PGFPlots
 * 2. Local Python (with matplotlib) - generates PNG images
 * 3. AI-generated TikZ/PGFPlots code - pure LaTeX, no external dependencies
 */
export async function generateVisualizations(
  interviewTranscript: string,
  researchContext: string,
  dataFileName?: string,
  onProgress?: (message: string) => void,
  dataSummary?: string  // Pre-analyzed data summary with actual column names
): Promise<VisualizationResult> {
  const cloudData = getCloudDataFile();

  // STEP 1: Try AI-generated custom figure code (PRIMARY METHOD)
  // AI generates Python code tailored to this specific paper's data and research questions
  if (cloudData?.content && dataSummary) {
    console.log('[Visualizations] Generating AI-customized figure code...');
    onProgress?.('AI is designing custom figures for your research...');

    try {
      // Have Gemini generate custom Python code for this paper
      const figureCode = await generateServerlessFigureCode(
        interviewTranscript,
        researchContext,
        dataSummary
      );

      console.log(`[Visualizations] Generated ${figureCode.length} chars of custom Python code`);
      onProgress?.('Executing AI-generated visualization code...');

      // Execute the AI-generated code in the Python serverless function
      const { executeAIGeneratedFigureCode, uploadMatplotlibFiguresToBlob } = await import('./fileApi');
      const codeResult = await executeAIGeneratedFigureCode(figureCode, cloudData.content);

      if (codeResult.success && codeResult.figures && codeResult.figures.length > 0) {
        console.log(`[Visualizations] AI code generated ${codeResult.count} figures`);
        onProgress?.(`Uploading ${codeResult.count} AI-generated figures to storage...`);

        // Upload figures to Vercel Blob
        const uploadResult = await uploadMatplotlibFiguresToBlob(codeResult.figures);

        if (uploadResult.success && uploadResult.figures && uploadResult.figures.length > 0) {
          // Convert to GeneratedFigure format for LaTeX
          const pngFigures: GeneratedFigure[] = uploadResult.figures.map((fig) => ({
            filename: fig.filename,
            description: fig.description,
            latexRef: fig.blobUrl  // Use blob URL for includegraphics
          }));

          onProgress?.(`Generated ${pngFigures.length} custom figures tailored to your research`);
          console.log(`[Visualizations] AI-generated figures stored in Blob, session: ${uploadResult.sessionId}`);

          return {
            figures: pngFigures,
            usedSyntheticData: false,
            dataFileFound: true,
            dataSummary: dataSummary
          };
        } else {
          console.warn('[Visualizations] Blob upload failed:', uploadResult.error);
        }
      } else {
        console.warn('[Visualizations] AI code execution failed:', codeResult.error);
      }
    } catch (error) {
      console.warn('[Visualizations] AI figure generation failed, trying fallback:', error);
    }
  }

  // STEP 2: Fallback to hardcoded matplotlib (generic charts)
  if (cloudData?.content) {
    console.log('[Visualizations] Falling back to generic matplotlib figures...');
    onProgress?.('Generating standard figures with matplotlib...');

    try {
      // Call matplotlib serverless function directly with CSV content
      const { generateMatplotlibFigures, uploadMatplotlibFiguresToBlob } = await import('./fileApi');
      const matplotlibResult = await generateMatplotlibFigures(cloudData.content);

      if (matplotlibResult.success && matplotlibResult.figures && matplotlibResult.figures.length > 0) {
        console.log(`[Visualizations] Matplotlib generated ${matplotlibResult.count} figures`);
        onProgress?.(`Uploading ${matplotlibResult.count} matplotlib figures to storage...`);

        // Upload matplotlib-generated figures to Vercel Blob
        const uploadResult = await uploadMatplotlibFiguresToBlob(matplotlibResult.figures);

        if (uploadResult.success && uploadResult.figures && uploadResult.figures.length > 0) {
          // Convert to GeneratedFigure format for LaTeX
          const pngFigures: GeneratedFigure[] = uploadResult.figures.map((fig) => ({
            filename: fig.filename,
            description: fig.description,
            latexRef: fig.blobUrl  // Use blob URL for includegraphics
          }));

          onProgress?.(`Generated ${pngFigures.length} publication-quality figures with matplotlib/seaborn`);
          console.log(`[Visualizations] Matplotlib figures stored in Blob, session: ${uploadResult.sessionId}`);

          return {
            figures: pngFigures,
            usedSyntheticData: false,
            dataFileFound: true,
            dataSummary: dataSummary
          };
        } else {
          console.warn('[Visualizations] Blob upload failed:', uploadResult.error);
        }
      } else {
        console.warn('[Visualizations] Matplotlib generation failed:', matplotlibResult.error);
      }
    } catch (error) {
      console.warn('[Visualizations] Matplotlib generation failed, trying QuickChart fallback:', error);
    }

    // STEP 3: Fallback to QuickChart.io if matplotlib fails
    console.log('[Visualizations] Falling back to QuickChart.io...');
    onProgress?.('Trying QuickChart.io fallback...');

    try {
      const cloudResult = await analyzeDataWithPython(cloudData.content, 'full');

      if (cloudResult.success && cloudResult.chart_data && cloudResult.chart_data.length > 0) {
        console.log(`[Visualizations] Cloud analysis returned ${cloudResult.chart_data.length} chart datasets`);
        onProgress?.(`Generating ${cloudResult.chart_data.length} PNG figures via QuickChart...`);

        // Generate PNG figures from chart data (stored in Vercel Blob)
        const { generatePngFigures } = await import('./fileApi');
        const pngResult = await generatePngFigures(cloudResult.chart_data);

        if (pngResult.success && pngResult.figures && pngResult.figures.length > 0) {
          // Convert PNG figures to GeneratedFigure format for LaTeX
          const pngFigures: GeneratedFigure[] = pngResult.figures.map((fig, i) => ({
            filename: fig.filename,
            description: fig.description,
            latexRef: fig.blobUrl  // Use blob URL for includegraphics
          }));

          onProgress?.(`Generated ${pngFigures.length} PNG figures from QuickChart`);
          console.log(`[Visualizations] QuickChart figures stored in Blob, session: ${pngResult.sessionId}`);

          return {
            figures: pngFigures,
            usedSyntheticData: false,
            dataFileFound: true,
            dataSummary: cloudResult.text_summary || dataSummary
          };
        } else {
          console.warn('[Visualizations] QuickChart PNG generation failed:', pngResult.error);
          // Fall back to TikZ if PNG fails
          onProgress?.('PNG generation failed, trying TikZ fallback...');
          const tikzFigures = await generateTikZFromChartData(cloudResult, interviewTranscript, researchContext);

          if (tikzFigures.length > 0) {
            onProgress?.(`Generated ${tikzFigures.length} TikZ figures (fallback)`);
            return {
              figures: tikzFigures,
              usedSyntheticData: false,
              dataFileFound: true,
              dataSummary: cloudResult.text_summary || dataSummary
            };
          }
        }
      }
    } catch (error) {
      console.warn('[Visualizations] QuickChart fallback failed:', error);
    }
  }

  // STEP 2: Fall back to local Python with matplotlib
  onProgress?.('Generating visualization code...');
  console.log('[Visualizations] Generating Python code...');
  if (dataSummary) {
    console.log('[Visualizations] Using pre-analyzed data summary with actual column names');
  }

  try {
    // Generate the Python code - pass dataSummary so Gemini knows the actual column names
    const pythonCode = await generateVisualizationCode(interviewTranscript, researchContext, dataFileName, dataSummary);
    console.log(`[Visualizations] Generated ${pythonCode.length} chars of Python code`);

    onProgress?.('Executing visualization script...');
    console.log('[Visualizations] Executing Python script...');

    // Execute the Python code
    const result = await executePythonScript('generate_figures.py', pythonCode, dataFileName);

    if (!result.success) {
      console.error('[Visualizations] Python execution failed:', result.error);
      console.error('[Visualizations] stderr:', result.stderr);
      onProgress?.(`Visualization error: ${result.error}`);

      // STEP 3: Generate AI-based TikZ visualizations as last resort
      console.log('[Visualizations] Falling back to AI-generated TikZ figures...');
      onProgress?.('Generating AI-based visualizations (TikZ)...');
      const aiFigures = await generateAITikZFigures(interviewTranscript, researchContext, dataSummary);

      if (aiFigures.length > 0) {
        onProgress?.(`Generated ${aiFigures.length} AI-generated TikZ figures`);
        return {
          figures: aiFigures,
          usedSyntheticData: true,
          dataFileFound: false,
          dataAlert: '*** NOTE: Visualizations generated using AI (TikZ/PGFPlots). Python execution was not available.'
        };
      }

      return {
        figures: [],
        usedSyntheticData: true,
        dataFileFound: false,
        dataAlert: `*** VISUALIZATION ERROR: ${result.error}`
      };
    }

    console.log('[Visualizations] Python stdout:', result.stdout);

    // Check data file status
    const dataFileFound = result.dataFileFound ?? false;
    const usedSyntheticData = result.usedSyntheticData ?? !dataFileFound;

    // Extract data summary from stdout (between DATA SUMMARY markers)
    // Note: renamed to extractedDataSummary to avoid shadowing the function parameter 'dataSummary'
    let extractedDataSummary: string | undefined;
    if (result.stdout) {
      const summaryMatch = result.stdout.match(/={60}\s*DATA SUMMARY\s*={60}([\s\S]*?)={60}/);
      if (summaryMatch) {
        extractedDataSummary = summaryMatch[1].trim();
        console.log('[Visualizations] Data summary extracted:', extractedDataSummary.substring(0, 200) + '...');
        onProgress?.('Data summary: ' + extractedDataSummary.substring(0, 100) + '...');
      }
    }

    // Generate alert if synthetic data was used when real data was expected
    let dataAlert: string | undefined;
    if (dataFileName && usedSyntheticData) {
      dataAlert = `*** DATA ALERT: Data file "${dataFileName}" was specified but synthetic/dummy data was used in visualizations. Check that the data file exists and is readable.`;
      console.warn('[Visualizations] ' + dataAlert);
      onProgress?.(dataAlert);
    } else if (usedSyntheticData) {
      console.log('[Visualizations] Using synthetic data (no data file specified)');
    } else if (extractedDataSummary) {
      // Real data was used - log the summary
      console.log('[Visualizations] Real data used. Summary available.');
    }

    // Get list of generated figures
    const figuresResult = await listGeneratedFigures();
    const figures: GeneratedFigure[] = figuresResult.figures.map((f, i) => ({
      filename: f.filename,
      description: `Figure ${i + 1}`,
      latexRef: `../Results/${f.filename}`
    }));

    console.log(`[Visualizations] Generated ${figures.length} figures`);
    onProgress?.(`Generated ${figures.length} figures${usedSyntheticData ? ' (using synthetic data)' : ' (using real data)'}`);

    return {
      figures,
      usedSyntheticData,
      dataFileFound,
      dataAlert,
      dataSummary: extractedDataSummary || dataSummary  // Return extracted summary, or fall back to passed-in summary
    };
  } catch (error) {
    console.error('[Visualizations] Error:', error);
    onProgress?.(`Visualization error: ${(error as Error).message}`);
    return {
      figures: [],
      usedSyntheticData: true,
      dataFileFound: false,
      dataAlert: `*** VISUALIZATION ERROR: ${(error as Error).message}`
    };
  }
}

/**
 * Generate TikZ/PGFPlots code from cloud analysis chart data
 */
async function generateTikZFromChartData(
  cloudResult: CloudAnalysisResult,
  interviewTranscript: string,
  researchContext: string
): Promise<GeneratedFigure[]> {
  const figures: GeneratedFigure[] = [];

  // Generate TikZ code for each chart type
  for (const chart of cloudResult.chart_data || []) {
    let tikzCode = '';
    let description = '';

    if (chart.type === 'histogram' && chart.column && chart.data) {
      description = `Distribution of ${chart.column}`;
      tikzCode = generateHistogramTikZ(chart.column, chart.data, chart.stats);
    } else if (chart.type === 'bar' && chart.column && chart.data) {
      description = `Value distribution for ${chart.column}`;
      tikzCode = generateBarChartTikZ(chart.column, chart.data);
    } else if (chart.type === 'scatter' && chart.x_column && chart.y_column && chart.data) {
      description = `Scatter plot: ${chart.x_column} vs ${chart.y_column}`;
      tikzCode = generateScatterTikZ(chart.x_column, chart.y_column, chart.data, chart.correlation);
    }

    if (tikzCode) {
      figures.push({
        filename: `tikz_${chart.type}_${chart.column || chart.x_column || figures.length}`,
        description,
        latexRef: tikzCode  // Store TikZ code directly instead of file path
      });
    }
  }

  return figures;
}

/**
 * Generate TikZ histogram code
 */
function generateHistogramTikZ(column: string, data: Array<{bin_start: number, bin_end: number, count: number}>, stats?: Record<string, any>): string {
  const maxCount = Math.max(...data.map(d => d.count));

  let tikz = `\\begin{figure}[htbp]
\\centering
\\begin{tikzpicture}
\\begin{axis}[
    ybar interval,
    xlabel={${column.replace(/_/g, '\\_')}},
    ylabel={Frequency},
    ymin=0,
    ymax=${Math.ceil(maxCount * 1.1)},
    width=0.8\\textwidth,
    height=6cm,
    title={Distribution of ${column.replace(/_/g, '\\_')}},
    grid=major
]
\\addplot coordinates {
`;

  for (const bin of data) {
    tikz += `    (${bin.bin_start.toFixed(2)}, ${bin.count})\n`;
  }
  tikz += `    (${data[data.length - 1].bin_end.toFixed(2)}, 0)
};
`;

  // Add mean line if stats available
  if (stats?.mean) {
    tikz += `\\addplot[red, thick, dashed] coordinates {(${stats.mean}, 0) (${stats.mean}, ${maxCount})};
\\node[red, above] at (axis cs:${stats.mean}, ${maxCount * 0.9}) {Mean: ${stats.mean.toFixed(2)}};
`;
  }

  tikz += `\\end{axis}
\\end{tikzpicture}
\\caption{Distribution of ${column.replace(/_/g, '\\_')}${stats ? ` (n=${stats.count}, mean=${stats.mean?.toFixed(2)}, std=${stats.std?.toFixed(2)})` : ''}}
\\label{fig:hist_${column.replace(/[^a-zA-Z0-9]/g, '_')}}
\\end{figure}`;

  return tikz;
}

/**
 * Generate TikZ bar chart code
 */
function generateBarChartTikZ(column: string, data: Record<string, number>): string {
  const entries = Object.entries(data).slice(0, 10);  // Limit to 10 bars
  const maxVal = Math.max(...entries.map(([_, v]) => v));

  let tikz = `\\begin{figure}[htbp]
\\centering
\\begin{tikzpicture}
\\begin{axis}[
    ybar,
    symbolic x coords={${entries.map(([k]) => k.substring(0, 15).replace(/_/g, '\\_')).join(', ')}},
    xtick=data,
    x tick label style={rotate=45, anchor=east, font=\\footnotesize},
    xlabel={${column.replace(/_/g, '\\_')}},
    ylabel={Count},
    ymin=0,
    ymax=${Math.ceil(maxVal * 1.1)},
    width=0.9\\textwidth,
    height=6cm,
    bar width=0.6cm,
    title={Value Distribution for ${column.replace(/_/g, '\\_')}},
    grid=major
]
\\addplot coordinates {
`;

  for (const [key, val] of entries) {
    tikz += `    (${key.substring(0, 15).replace(/_/g, '\\_')}, ${val})\n`;
  }

  tikz += `};
\\end{axis}
\\end{tikzpicture}
\\caption{Value distribution for ${column.replace(/_/g, '\\_')}}
\\label{fig:bar_${column.replace(/[^a-zA-Z0-9]/g, '_')}}
\\end{figure}`;

  return tikz;
}

/**
 * Generate TikZ scatter plot code
 */
function generateScatterTikZ(xCol: string, yCol: string, data: Array<[number, number]>, correlation?: number): string {
  const sampleData = data.slice(0, 100);  // Limit points for readability

  let tikz = `\\begin{figure}[htbp]
\\centering
\\begin{tikzpicture}
\\begin{axis}[
    scatter,
    only marks,
    xlabel={${xCol.replace(/_/g, '\\_')}},
    ylabel={${yCol.replace(/_/g, '\\_')}},
    width=0.8\\textwidth,
    height=6cm,
    title={${xCol.replace(/_/g, '\\_')} vs ${yCol.replace(/_/g, '\\_')}${correlation !== undefined ? ` (r = ${correlation.toFixed(3)})` : ''}},
    grid=major
]
\\addplot[blue, mark=*, mark size=1.5pt] coordinates {
`;

  for (const [x, y] of sampleData) {
    tikz += `    (${x}, ${y})\n`;
  }

  tikz += `};
\\end{axis}
\\end{tikzpicture}
\\caption{Scatter plot of ${xCol.replace(/_/g, '\\_')} vs ${yCol.replace(/_/g, '\\_')}${correlation !== undefined ? ` (Pearson r = ${correlation.toFixed(3)})` : ''}}
\\label{fig:scatter_${xCol.replace(/[^a-zA-Z0-9]/g, '_')}_${yCol.replace(/[^a-zA-Z0-9]/g, '_')}}
\\end{figure}`;

  return tikz;
}

/**
 * Generate AI-based TikZ figures when Python is not available
 */
async function generateAITikZFigures(
  interviewTranscript: string,
  researchContext: string,
  dataSummary?: string
): Promise<GeneratedFigure[]> {
  // Use Gemini to generate TikZ/PGFPlots code based on research context
  const prompt = `You are generating TikZ/PGFPlots visualization code for an ICIS research paper.

RESEARCH CONTEXT:
${researchContext.substring(0, 2000)}

INTERVIEW EXCERPT:
${interviewTranscript.substring(0, 1000)}

${dataSummary ? `DATA SUMMARY:\n${dataSummary.substring(0, 1000)}` : 'No specific data available - generate illustrative figures.'}

Generate 2-3 TikZ/PGFPlots figures appropriate for this research. Each figure should:
1. Use \\begin{tikzpicture} and pgfplots axis environments
2. Include appropriate labels, titles, and captions
3. Be publication-ready for an academic paper
4. If no real data is available, use illustrative/example data clearly marked as such

Return ONLY the LaTeX code for each figure, separated by "---FIGURE---" markers.
Each figure should be a complete \\begin{figure}...\\end{figure} block.`;

  try {
    const response = await callGemini(prompt, 'Generate TikZ visualizations');
    const figureBlocks = response.split('---FIGURE---').filter(b => b.trim());

    return figureBlocks.map((tikzCode, i) => ({
      filename: `ai_tikz_figure_${i + 1}`,
      description: `AI-generated Figure ${i + 1}`,
      latexRef: tikzCode.trim()
    }));
  } catch (error) {
    console.error('[Visualizations] AI TikZ generation failed:', error);
    return [];
  }
}

/**
 * Generate LaTeX figure includes for the Results section
 * Handles three cases:
 * 1. TikZ code - include directly (old approach)
 * 2. Blob URLs (https://) - use local filename (PNGs downloaded separately)
 * 3. Local file paths - use includegraphics with path
 */
export function generateFigureLatex(figures: GeneratedFigure[]): string {
  if (figures.length === 0) return '';

  let latex = '\n% Generated Figures\n';

  figures.forEach((fig, i) => {
    // Check if latexRef contains TikZ code (starts with \begin{figure} or \begin{tikzpicture})
    const isTikZCode = fig.latexRef.includes('\\begin{tikzpicture}') ||
                       fig.latexRef.includes('\\begin{figure}') ||
                       fig.latexRef.includes('\\begin{axis}');

    if (isTikZCode) {
      // TikZ/PGFPlots code - include directly
      latex += `\n${fig.latexRef}\n`;
    } else if (fig.latexRef.startsWith('http://') || fig.latexRef.startsWith('https://')) {
      // Blob URL - use local filename (PNG files will be downloaded alongside .tex)
      // LaTeX will look for the file in the same directory as the .tex file
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
    } else {
      // Local file path - use includegraphics with path
      const escapedDescription = fig.description.replace(/_/g, '\\_').replace(/&/g, '\\&').replace(/%/g, '\\%');
      latex += `
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth,max width=\\linewidth]{${fig.latexRef}}
\\caption{${escapedDescription}}
\\label{fig:fig${i + 1}}
\\end{figure}
`;
    }
  });

  return latex;
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

  const response = await fetch(proxyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
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

  const response = await fetch(OPENAI_DIRECT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
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

  // Try to load MISQ review criteria PDF
  let misqReviewCriteria = '';
  try {
    console.log('[Reviewer] Loading MISQ review criteria PDF...');
    const pdfResult = await readPdfFile('reviewingMISQ.pdf');
    if (pdfResult.success && pdfResult.base64) {
      // Ask Gemini to extract key review criteria from the PDF
      console.log('[Reviewer] Extracting review criteria from PDF...');
      misqReviewCriteria = await callGeminiWithPdf(
        `Extract and summarize the key IS journal review criteria from this document.
         Focus on: evaluation dimensions, quality standards, common issues to look for,
         and what makes a strong contribution.
         Keep the summary under 500 words, in bullet point format.`,
        pdfResult.base64,
        pdfResult.mimeType
      );
      console.log('[Reviewer] MISQ criteria loaded successfully');
    }
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
  "criticalAlerts": []
}`;

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

    criticalAlerts: result.criticalAlerts ?? []
  };

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
    }))
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
  ]
}`;

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

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

You are revising PART 1 of a two-part paper (front matter: Abstract through Results/Analysis).

Original Paper PART 1:
${part1}

Reviewer Feedback:
${feedback}

Supervisor Directives:
${supervisorComment}

Instructions:
1. Address feedback relevant to the front sections (Abstract, Introduction, Literature Review, Methodology, Results)
2. CRITICAL: You MUST preserve the COMPLETE Results section with ALL figures and text
3. Preserve ALL existing tables, figures, and empirical results - do NOT remove any
4. Add new content to strengthen weak areas
5. Maintain academic writing style
6. NEVER use placeholder text

SECTION PRESERVATION CHECK - Your output MUST contain these sections IN ORDER:
- \\section{Introduction}
- \\section{Literature Review} (or Theoretical Framework)
- \\section{Methodology}
- \\section{Results} (CRITICAL - preserve ALL figures AND text from Results)

CRITICAL OUTPUT FORMAT:
- Output ONLY the revised LaTeX content for PART 1
- Start with the documentclass/preamble (or \\begin{abstract} if no preamble)
- END with the complete Results section (do NOT add \\end{document} yet)
- The Results section MUST include both figures AND explanatory text
- Do NOT include any code blocks, markdown, or explanations
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

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

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

GOLDEN RULE: Revisions ADD and IMPROVE - they NEVER SUBTRACT content.

Original Paper:
${paperContent}

Reviewer Feedback:
${feedback}

Supervisor Directives:
${supervisorComment}

Instructions:
1. Address all major concerns from the feedback
2. Fix minor corrections where possible
3. Incorporate supervisor directives
4. Preserve ALL existing tables, figures, and empirical results
5. Add new content to strengthen weak areas
6. Maintain academic writing style
7. NEVER use placeholder text like "[To be completed]", "[TBD]", or "[Results pending]"
8. If any section has placeholder text, replace it with realistic, complete content

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
  return {
    paperContent: result,
    dataAlert,
    usedSyntheticData
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
