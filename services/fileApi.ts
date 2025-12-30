/**
 * File API Service
 *
 * Handles saving files via backend server (preferred) or browser downloads (fallback).
 *
 * When server is running (node server.js):
 *   - Files are saved directly to icis/Paper and icis/Data
 *
 * When server is not running:
 *   - Files are downloaded to user's Downloads folder
 */

import type { ReferenceValidationReport } from '../types';

const API_BASE = 'http://localhost:3001/api';

// SECURITY: Internal API secret for authenticated requests
const INTERNAL_API_SECRET = import.meta.env.VITE_INTERNAL_API_SECRET || '';

// Helper to get auth headers for API requests
function getAuthHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };
  if (INTERNAL_API_SECRET) {
    headers['X-Internal-Secret'] = INTERNAL_API_SECRET;
  }
  return headers;
}

interface SaveFileResult {
  success: boolean;
  path?: string;
  error?: string;
}

interface SaveFilesResult {
  success: boolean;
  files?: string[];
  error?: string;
}

// Track if backend is available
let backendAvailable: boolean | null = null;

/**
 * Check if backend server is available
 */
export async function checkBackendHealth(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    const response = await fetch(`${API_BASE}/health`, { signal: controller.signal });
    clearTimeout(timeoutId);

    const data = await response.json();
    backendAvailable = data.status === 'ok';
    return backendAvailable;
  } catch {
    backendAvailable = false;
    return false;
  }
}

/**
 * Refresh the manifest.json file on the backend
 * This scans the Data folder and regenerates manifest.json with detected files
 * Should be called before starting the Builder to ensure data file is detected
 */
export async function refreshManifest(): Promise<{ success: boolean; manifest?: any; error?: string }> {
  try {
    const response = await fetch(`${API_BASE}/refresh-manifest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      return { success: false, error: `Server error: ${response.status}` };
    }

    const data = await response.json();
    if (data.success) {
      console.log('[FileApi] Manifest refreshed:', data.manifest?.files?.map((f: any) => f.filename));
    }
    return data;
  } catch (error) {
    console.error('[FileApi] Failed to refresh manifest:', error);
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Trigger a browser download for a file (fallback)
 */
function downloadFile(filename: string, content: string, mimeType: string = 'text/plain'): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Save a paper file to icis/Paper/
 */
export async function savePaperFile(filename: string, content: string): Promise<SaveFileResult> {
  // Check backend availability if not known
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (backendAvailable) {
    try {
      const response = await fetch(`${API_BASE}/save-paper`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, content })
      });
      const result = await response.json();
      if (result.success) {
        return result;
      }
    } catch (error) {
      console.warn('Backend save failed, falling back to download');
    }
  }

  // Fallback to browser download
  try {
    downloadFile(filename, content, 'application/x-tex');
    return { success: true, path: `Downloads/${filename}` };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Save a data file to icis/Data/
 */
export async function saveDataFile(filename: string, content: string | object): Promise<SaveFileResult> {
  const jsonContent = typeof content === 'string' ? content : JSON.stringify(content, null, 2);

  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (backendAvailable) {
    try {
      const response = await fetch(`${API_BASE}/save-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, content: jsonContent })
      });
      const result = await response.json();
      if (result.success) {
        return result;
      }
    } catch (error) {
      console.warn('Backend save failed, falling back to download');
    }
  }

  // Fallback to browser download
  try {
    downloadFile(filename, jsonContent, 'application/json');
    return { success: true, path: `Downloads/${filename}` };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Save multiple files (to icis/Paper and icis/Data, or Downloads as fallback)
 */
export async function saveFiles(files: {
  directory: 'paper' | 'data';
  filename: string;
  content: string | object;
}[]): Promise<SaveFilesResult> {
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (backendAvailable) {
    try {
      const response = await fetch(`${API_BASE}/save-files`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files })
      });
      const result = await response.json();
      if (result.success) {
        return result;
      }
    } catch (error) {
      console.warn('Backend save failed, falling back to downloads');
    }
  }

  // Fallback to browser downloads
  try {
    const downloadedFiles: string[] = [];

    for (const file of files) {
      const content = typeof file.content === 'string'
        ? file.content
        : JSON.stringify(file.content, null, 2);

      const mimeType = file.directory === 'paper' ? 'application/x-tex' : 'application/json';

      await new Promise(resolve => setTimeout(resolve, 200));
      downloadFile(file.filename, content, mimeType);
      downloadedFiles.push(file.filename);
    }

    return { success: true, files: downloadedFiles };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

/**
 * Save all review outputs (called at end of Reviewer stage)
 * @param filePrefix - participantId_timestamp prefix for filenames
 * @param participantEmail - Optional email to also save to Vercel blob storage
 */
export async function saveReviewOutputs(
  round: number,
  oversight: object,
  feedback: object,
  paperContent: string,
  filePrefix?: string,
  participantEmail?: string
): Promise<SaveFilesResult> {
  const prefix = filePrefix ? `${filePrefix}_` : '';

  // Save to local/downloads
  const result = await saveFiles([
    { directory: 'data', filename: `${prefix}oversight_v${round}.json`, content: oversight },
    { directory: 'data', filename: `${prefix}feedback_v${round}.json`, content: feedback },
    { directory: 'paper', filename: `${prefix}icis_paper_v${round}.tex`, content: paperContent }
  ]);

  // Also save oversight/feedback to Vercel blob if participant email is provided
  if (participantEmail) {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      if (apiUrl) {
        await fetch(`${apiUrl}/api/participants`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: participantEmail,
            oversight,
            feedback,
            round
          })
        });
        console.log(`[FileApi] Saved oversight/feedback v${round} to blob for ${participantEmail}`);
      }
    } catch (error) {
      console.warn('[FileApi] Failed to save to blob:', error);
      // Don't fail the whole operation if blob save fails
    }
  }

  return result;
}

/**
 * Save final submission package (called at end of Finalize stage)
 * @param filePrefix - participantId_timestamp prefix for filenames
 */
export async function saveFinalSubmission(
  version: number,
  round: number,
  paperContent: string,
  allOversight: object[],
  feedback: object,
  filePrefix?: string
): Promise<SaveFilesResult> {
  const prefix = filePrefix ? `${filePrefix}_` : '';
  const files: { directory: 'paper' | 'data'; filename: string; content: string | object }[] = [
    { directory: 'paper', filename: `${prefix}icis_paper_v${version}_FINAL.tex`, content: paperContent },
    { directory: 'data', filename: `${prefix}feedback_v${round}.json`, content: feedback }
  ];

  allOversight.forEach((oversight: any) => {
    files.push({
      directory: 'data',
      filename: `${prefix}oversight_v${oversight.version}.json`,
      content: oversight
    });
  });

  // Add data table CSV if available
  const dataTableCsv = getDataTableCsv();
  if (dataTableCsv) {
    files.push({
      directory: 'data',
      filename: `${prefix}datatable.csv`,
      content: dataTableCsv
    });
    console.log('[FileApi] Including data table CSV in final submission');
  }

  // Add bibliography if available
  const bibData = getBibliographyContent();
  if (bibData) {
    files.push({
      directory: 'paper',
      filename: `${prefix}${bibData.filename}`,
      content: bibData.content
    });
    console.log('[FileApi] Including bibliography in final submission');
  }

  // Save infographic blob URL reference
  const infographicUrl = getInfographicBlobUrl();
  if (infographicUrl) {
    files.push({
      directory: 'data',
      filename: `${prefix}infographic_url.txt`,
      content: infographicUrl
    });
    console.log('[FileApi] Including infographic blob URL in final submission');
  }

  return saveFiles(files);
}

/**
 * Get backend status message for UI
 */
export function getBackendStatusMessage(): string {
  if (backendAvailable === null) {
    return 'Checking server...';
  }
  if (backendAvailable) {
    return 'Server connected - files save to icis/Paper and icis/Data';
  }
  return 'Server not running - files download to Downloads folder. Run "node server.js" for direct saves.';
}

/**
 * Download a single file (always uses browser download)
 */
export function downloadSingleFile(filename: string, content: string | object): void {
  const contentStr = typeof content === 'string' ? content : JSON.stringify(content, null, 2);
  const mimeType = filename.endsWith('.json') ? 'application/json' : 'text/plain';
  downloadFile(filename, contentStr, mimeType);
}

// ============================================================================
// LaTeX Compilation
// ============================================================================

// Vercel API URL for cloud compilation
const VERCEL_API_URL = import.meta.env.VITE_API_URL || '';

export interface CompileResult {
  success: boolean;
  pdfPath?: string;
  pdfFilename?: string;
  pdfBase64?: string;      // Base64-encoded PDF for download
  fileSize?: number;
  pageCount?: number;      // Number of pages in compiled PDF
  exceedsLimit?: boolean;  // True if paper exceeds ICIS 16-page limit
  log?: string;
  error?: string;
}

// Store last compiled PDF for download
let lastCompiledPdf: { filename: string; base64: string } | null = null;

/**
 * Figure resource for LaTeX compilation (PNG images)
 */
export interface FigureResource {
  filename: string;
  base64: string;
}

/**
 * Compile LaTeX content to PDF
 * Uses Vercel serverless function (cloud) or local backend
 * @param filename - The .tex filename
 * @param content - The LaTeX content
 * @param figures - Optional array of PNG figures to include (as base64)
 */
export async function compileLaTeX(
  filename: string,
  content: string,
  figures?: FigureResource[]
): Promise<CompileResult> {
  // Count TikZ figures and PNG figures for logging
  const tikzCount = (content.match(/\\begin\{tikzpicture\}/g) || []).length;
  const pngCount = figures?.length || 0;
  const contentKB = Math.round(content.length / 1024);

  // Get bibliography if available
  const bibliography = getBibliographyForCompilation();
  const hasBib = !!bibliography;

  // Try Vercel cloud compilation first
  if (VERCEL_API_URL) {
    try {
      console.log(`[LaTeX] Compiling via Vercel cloud... (${contentKB} KB, ${tikzCount} TikZ, ${pngCount} PNG figures${hasBib ? ', with .bib' : ''})`);

      // Use AbortController for 5 minute timeout on client side
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        console.error('[LaTeX] Client-side timeout after 5 minutes');
        controller.abort();
      }, 300000); // 5 minutes

      // Build request body
      const requestBody: any = { filename, content, figures };
      if (bibliography) {
        requestBody.bibliography = bibliography;
      }

      let response: Response;
      try {
        response = await fetch(`${VERCEL_API_URL}/api/compile-latex`, {
          method: 'POST',
          headers: getAuthHeaders(),
          signal: controller.signal,
          body: JSON.stringify(requestBody)
        });
        clearTimeout(timeoutId);
      } catch (fetchError: any) {
        clearTimeout(timeoutId);
        if (fetchError.name === 'AbortError') {
          console.error('[LaTeX] Request timed out');
          return {
            success: false,
            error: `LaTeX compilation timed out after 5 minutes. The document with ${tikzCount} TikZ figures may be too complex.`
          };
        }
        throw fetchError;
      }

      const result = await response.json();

      if (result.success && result.pdfBase64) {
        // Store for later download
        lastCompiledPdf = {
          filename: result.pdfFilename,
          base64: result.pdfBase64
        };
        console.log(`[LaTeX] Cloud compilation success: ${result.pdfFilename}`);
      } else if (!result.success) {
        console.warn(`[LaTeX] Cloud compilation failed: ${result.error}`);
      }

      return result;
    } catch (error) {
      console.warn('[LaTeX] Cloud compilation failed, trying local backend...', error);
    }
  }

  // Fallback to local backend
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return {
      success: false,
      error: 'PDF compilation not available. Please ensure the Vercel deployment is configured correctly.'
    };
  }

  try {
    const response = await fetch(`${API_BASE}/compile-latex`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, content })
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      error: `Compilation request failed: ${(error as Error).message}`
    };
  }
}

/**
 * Get the last compiled PDF as a Blob
 */
export function getLastCompiledPdfBlob(): { filename: string; blob: Blob } | null {
  if (!lastCompiledPdf) return null;

  const binaryString = atob(lastCompiledPdf.base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: 'application/pdf' });

  return { filename: lastCompiledPdf.filename, blob };
}

/**
 * Get the URL to download a compiled PDF (local backend only)
 */
export function getPdfDownloadUrl(pdfFilename: string): string {
  return `${API_BASE}/get-pdf/${encodeURIComponent(pdfFilename)}`;
}

/**
 * Download a compiled PDF
 * Uses stored base64 from cloud compilation or fetches from local backend
 */
export async function downloadCompiledPdf(pdfFilename: string): Promise<void> {
  // First try to use stored cloud-compiled PDF
  const cloudPdf = getLastCompiledPdfBlob();
  if (cloudPdf && cloudPdf.filename === pdfFilename) {
    const url = URL.createObjectURL(cloudPdf.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = pdfFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return;
  }

  // Fallback to local backend download
  const url = getPdfDownloadUrl(pdfFilename);
  const a = document.createElement('a');
  a.href = url;
  a.download = pdfFilename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ============================================================================
// Paper Viewer (HTML preview for researchers)
// ============================================================================

export interface ViewerLinkResult {
  success: boolean;
  token?: string;
  viewerUrl?: string;
  fullUrl?: string;
  expiresIn?: string;
  error?: string;
}

/**
 * Create a shareable PDF viewer link for a paper (for sharing with researchers)
 * The PDF is rendered in a browser viewer that prevents downloading
 * Uses Vercel cloud storage with 24-hour expiration
 */
export async function createViewerLink(texFilename: string): Promise<ViewerLinkResult> {
  // Must have a compiled PDF first
  if (!lastCompiledPdf) {
    return {
      success: false,
      error: 'No compiled PDF available. Please compile the paper first.'
    };
  }

  // Try Vercel cloud API first
  if (VERCEL_API_URL) {
    try {
      console.log('[Viewer] Creating viewer link via Vercel cloud...');
      const response = await fetch(`${VERCEL_API_URL}/api/create-viewer-link`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          filename: lastCompiledPdf.filename,
          pdfBase64: lastCompiledPdf.base64
        })
      });

      const result = await response.json();
      if (result.success) {
        console.log(`[Viewer] Link created: ${result.fullUrl}`);
        return result;
      } else {
        console.warn('[Viewer] Cloud API returned error:', result.error);
      }
    } catch (error) {
      console.warn('[Viewer] Cloud API failed:', error);
    }
  }

  // Fallback to local backend
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return {
      success: false,
      error: 'Unable to create viewer link. Vercel KV storage may not be configured.'
    };
  }

  try {
    const response = await fetch(`${API_BASE}/create-viewer-link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texFilename })
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      error: `Failed to create viewer link: ${(error as Error).message}`
    };
  }
}

/**
 * Open the paper viewer in a new tab
 */
export function openPaperViewer(viewerUrl: string): void {
  window.open(viewerUrl, '_blank', 'noopener,noreferrer');
}

// ============================================================================
// New Case / Backup Functions
// ============================================================================

export interface BackupResult {
  success: boolean;
  backupDir?: string;
  backedUpFiles?: string[];
  clearedFiles?: string[];
  error?: string;
}

// ============================================================================
// PDF Reading
// ============================================================================

export interface PdfContent {
  success: boolean;
  filename?: string;
  base64?: string;
  mimeType?: string;
  size?: number;
  error?: string;
}

/**
 * Read a PDF file from Data directory as base64
 * Used for sending PDFs to Gemini for processing
 */
export async function readPdfFile(filename: string): Promise<PdfContent> {
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return { success: false, error: 'Backend server not available' };
  }

  try {
    const response = await fetch(`${API_BASE}/read-pdf/${encodeURIComponent(filename)}`);
    return await response.json();
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

// ============================================================================
// Python Execution for Visualizations
// ============================================================================

export interface PythonExecutionResult {
  success: boolean;
  stdout?: string;
  stderr?: string;
  generatedFigures?: {
    filename: string;
    path: string;
    size: number;
    base64?: string;  // For cloud-generated figures
  }[];
  error?: string;
  dataFileFound?: boolean;
  dataFilePath?: string;
  usedSyntheticData?: boolean;
}

export interface CloudAnalysisResult {
  success: boolean;
  summary?: {
    shape: { rows: number; columns: number };
    columns: string[];
    numeric_columns: string[];
    categorical_columns: string[];
    descriptive_stats?: Record<string, any>;
    missing_values?: Record<string, number>;
    categorical_summary?: Record<string, any>;
    correlation_matrix?: Record<string, Record<string, number | null>>;
    correlation_test?: {
      variables: string[];
      correlation: number;
      p_value: number;
      n?: number;
    };
  };
  figures?: {
    name: string;
    type: string;
    base64: string;
    description: string;
  }[];
  chart_data?: {
    type: 'histogram' | 'heatmap' | 'bar' | 'scatter';
    column?: string;
    columns?: string[];
    x_column?: string;
    y_column?: string;
    data: any;
    stats?: Record<string, any>;
    correlation?: number;
  }[];
  text_summary?: string;
  error?: string;
}

/**
 * Analyze data file using Vercel Python serverless function
 * Returns statistical analysis and figures as base64
 */
export async function analyzeDataWithPython(csvContent: string, analysisType: string = 'full'): Promise<CloudAnalysisResult> {
  try {
    console.log(`[Cloud Python] Analyzing data (${csvContent.length} chars, type: ${analysisType})...`);

    const response = await fetch(`${VERCEL_API_URL}/api/analyze-data`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        csvContent,
        analysisType
      })
    });

    const result = await response.json();

    if (result.success) {
      console.log(`[Cloud Python] Analysis complete: ${result.figures?.length || 0} figures generated`);
    } else {
      console.warn(`[Cloud Python] Analysis failed: ${result.error}`);
    }

    return result;
  } catch (error) {
    console.error('[Cloud Python] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

/**
 * Execute a Python visualization script
 * Tries cloud Python first, falls back to local backend
 */
export async function executePythonScript(
  filename: string,
  code: string,
  dataFile?: string
): Promise<PythonExecutionResult> {
  // First try cloud Python analysis if we have cloud data
  const cloudData = getCloudDataFile();
  if (cloudData?.content && VERCEL_API_URL) {
    console.log('[executePythonScript] Trying cloud Python analysis...');
    const cloudResult = await analyzeDataWithPython(cloudData.content, 'full');

    if (cloudResult.success) {
      // Convert cloud result to PythonExecutionResult format
      // Note: Cloud analysis now returns chart_data for frontend rendering instead of base64 images
      const generatedFigures: PythonExecutionResult['generatedFigures'] = [];

      // Store chart data as JSON "figures" that can be used by frontend charting
      if (cloudResult.chart_data) {
        cloudResult.chart_data.forEach((chart, idx) => {
          generatedFigures.push({
            filename: `${chart.type}_${chart.column || chart.x_column || idx}.json`,
            path: `cloud://chart_data/${idx}`,
            size: JSON.stringify(chart).length,
            // Store chart data as base64-encoded JSON for consistency
            base64: btoa(JSON.stringify(chart))
          });
        });
      }

      return {
        success: true,
        stdout: cloudResult.text_summary || '',
        dataFileFound: true,
        generatedFigures
      };
    }
  }

  // Fall back to local backend
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return {
      success: false,
      error: 'Python execution not available. Cloud analysis failed and local backend not running.'
    };
  }

  try {
    console.log(`[executePythonScript] Using local backend, filename=${filename}, dataFile=${dataFile || 'UNDEFINED'}`);
    const requestBody = { filename, code, dataFile };
    console.log(`[executePythonScript] Request body dataFile:`, requestBody.dataFile);
    const response = await fetch(`${API_BASE}/execute-python`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    const result = await response.json();
    console.log(`[executePythonScript] Result: dataFileFound=${result.dataFileFound}, dataFilePath=${result.dataFilePath || 'NONE'}`);
    return result;
  } catch (error) {
    return {
      success: false,
      error: `Python execution request failed: ${(error as Error).message}`
    };
  }
}

/**
 * List all generated figures in Results directory
 */
export async function listGeneratedFigures(): Promise<{
  figures: { filename: string; path: string; relativePath: string; size: number }[];
  error?: string;
}> {
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return { figures: [], error: 'Backend not available' };
  }

  try {
    const response = await fetch(`${API_BASE}/list-figures`);
    return await response.json();
  } catch (error) {
    return { figures: [], error: (error as Error).message };
  }
}

/**
 * Get URL for a figure file
 */
export function getFigureUrl(filename: string): string {
  return `${API_BASE}/figure/${encodeURIComponent(filename)}`;
}

/**
 * Backup all generated files and clear for a new case
 * This backs up Paper/*.tex, Paper/*.pdf, Data/oversight*, Data/feedback* files
 * to a timestamped Backup folder, then deletes the originals
 */
export async function backupAndClearFiles(): Promise<BackupResult> {
  // Check backend availability
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return {
      success: false,
      error: 'Backend server not available. Run "node server.cjs" to enable file backup.'
    };
  }

  try {
    const response = await fetch(`${API_BASE}/backup-and-clear`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      error: `Backup request failed: ${(error as Error).message}`
    };
  }
}

// ============================================================================
// Data File Preview (for user confirmation)
// ============================================================================

export interface DataFilePreview {
  success: boolean;
  filename?: string;
  firstLine?: string;
  totalLines?: number;
  content?: string;
  error?: string;
}

// Store uploaded cloud data file info
let cloudDataFile: { filename: string; blobUrl: string; content?: string } | null = null;

/**
 * Upload a data file to cloud storage (Vercel Blob)
 * Returns the blob URL for later retrieval
 */
export async function uploadDataFileToCloud(file: File): Promise<{
  success: boolean;
  filename?: string;
  blobUrl?: string;
  error?: string;
}> {
  try {
    // Read file as base64
    const arrayBuffer = await file.arrayBuffer();
    const base64 = btoa(
      new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    console.log(`[Cloud Upload] Uploading ${file.name} (${file.size} bytes)...`);

    const response = await fetch(`${VERCEL_API_URL}/api/upload-data`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        filename: file.name,
        content: base64,
        contentType: file.type
      })
    });

    const result = await response.json();

    if (result.success) {
      // Store for later use
      cloudDataFile = {
        filename: file.name,
        blobUrl: result.blobUrl
      };
      console.log(`[Cloud Upload] Success: ${result.blobUrl}`);
    }

    return result;
  } catch (error) {
    console.error('[Cloud Upload] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

/**
 * Get the currently uploaded cloud data file info
 */
export function getCloudDataFile(): { filename: string; blobUrl: string; content?: string } | null {
  return cloudDataFile;
}

/**
 * Delete the cloud data file from Vercel Blob storage
 * Called after Save All to clean up user data
 */
export async function deleteCloudDataFile(): Promise<{ success: boolean; error?: string }> {
  if (!cloudDataFile || !cloudDataFile.blobUrl) {
    console.log('[Cloud Delete] No data file to delete');
    return { success: true };
  }

  try {
    console.log(`[Cloud Delete] Deleting: ${cloudDataFile.blobUrl}`);

    const response = await fetch(`${VERCEL_API_URL}/api/delete-data`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ blobUrl: cloudDataFile.blobUrl })
    });

    const result = await response.json();

    if (result.success) {
      console.log('[Cloud Delete] Data file deleted successfully');
      cloudDataFile = null;  // Clear the reference
    }

    return result;
  } catch (error) {
    console.error('[Cloud Delete] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

/**
 * Clear the cloud data file reference (without deleting from blob)
 */
export function clearCloudDataFile(): void {
  cloudDataFile = null;
}

/**
 * Read a data file from cloud storage
 */
export async function readCloudDataFile(blobUrl: string): Promise<DataFilePreview> {
  try {
    console.log(`[Cloud Read] Reading from: ${blobUrl}`);

    const response = await fetch(`${VERCEL_API_URL}/api/read-data?url=${encodeURIComponent(blobUrl)}`);
    const result = await response.json();

    if (result.success && cloudDataFile) {
      // Cache the content
      cloudDataFile.content = result.content;
    }

    return result;
  } catch (error) {
    console.error('[Cloud Read] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

/**
 * Get a preview of a data file (first line) for user confirmation
 * This helps users verify they're analyzing the correct data file
 * Supports both local backend and cloud storage
 */
export async function getDataFilePreview(filename: string): Promise<DataFilePreview> {
  // First check if we have a cloud data file
  if (cloudDataFile && cloudDataFile.filename === filename && cloudDataFile.blobUrl) {
    console.log('[DataFilePreview] Using cloud data file');
    return readCloudDataFile(cloudDataFile.blobUrl);
  }

  // Try local backend
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    // Check if we have any cloud file as fallback
    if (cloudDataFile && cloudDataFile.blobUrl) {
      console.log('[DataFilePreview] Falling back to cloud data file');
      return readCloudDataFile(cloudDataFile.blobUrl);
    }
    return { success: false, error: 'Backend server not available' };
  }

  try {
    const response = await fetch(`${API_BASE}/read-file/data/${encodeURIComponent(filename)}`);
    const result = await response.json();

    if (!result.success) {
      return { success: false, error: result.error || 'Failed to read file' };
    }

    const content = result.content as string;
    const lines = content.split(/\r?\n/);
    const firstLine = lines[0] || '';
    const totalLines = lines.filter(l => l.trim()).length;

    return {
      success: true,
      filename,
      firstLine,
      totalLines,
      content
    };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

// ============================================================================
// PNG Figure Generation (using QuickChart.io - Primary Method)
// ============================================================================

/**
 * QuickChart figure result - PNG as base64
 */
export interface QuickChartFigure {
  filename: string;
  base64: string;
  description: string;
  width: number;
  height: number;
}

export interface QuickChartResult {
  success: boolean;
  figures?: QuickChartFigure[];
  count?: number;
  error?: string;
}

/**
 * Generate PNG figures using QuickChart.io
 * This is the PRIMARY method - no Python dependencies, works with Vercel 250MB limit
 *
 * Flow:
 * 1. analyze-data.py generates chart_data from CSV
 * 2. quickchart.ts endpoint converts chart_data to Chart.js configs
 * 3. QuickChart.io API renders PNGs
 * 4. Returns base64-encoded PNGs
 */
export async function generateQuickChartFigures(
  chartData: CloudAnalysisResult['chart_data']
): Promise<QuickChartResult> {
  if (!chartData || chartData.length === 0) {
    return { success: false, error: 'No chart data provided' };
  }

  try {
    console.log(`[QuickChart] Generating ${chartData.length} figures via QuickChart.io...`);

    const response = await fetch(`${VERCEL_API_URL}/api/quickchart`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ chartData })
    });

    const result = await response.json();

    if (result.success) {
      console.log(`[QuickChart] Generated ${result.count} PNG figures`);
    } else {
      console.warn(`[QuickChart] Generation failed: ${result.error}`);
    }

    return result;
  } catch (error) {
    console.error('[QuickChart] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

// ============================================================================
// Legacy PNG Figure Generation (using matplotlib/seaborn + Vercel Blob)
// @deprecated - matplotlib exceeds Vercel's 250MB limit
// ============================================================================

/**
 * Figure generated by matplotlib Python serverless function
 * @deprecated Use QuickChartFigure instead
 */
export interface MatplotlibFigure {
  filename: string;
  type: string;
  column?: string;
  columns?: string[];
  base64: string;
  description: string;
}

export interface MatplotlibResult {
  success: boolean;
  figures?: MatplotlibFigure[];
  count?: number;
  dataShape?: { rows: number; columns: number };
  numericColumns?: string[];
  categoricalColumns?: string[];
  error?: string;
}

/**
 * Generate figures using matplotlib/seaborn Python serverless function
 * This is the fallback method with hardcoded chart types
 * @deprecated Use executeAIGeneratedFigureCode instead for custom AI-generated visualizations
 */
export async function generateMatplotlibFigures(csvContent: string): Promise<MatplotlibResult> {
  if (!csvContent) {
    return { success: false, error: 'No CSV content provided' };
  }

  try {
    console.log(`[Matplotlib] Sending ${csvContent.length} chars to Python serverless function...`);

    const response = await fetch(`${VERCEL_API_URL}/api/generate-matplotlib-figures`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ csvContent })
    });

    const result = await response.json();

    if (result.success) {
      console.log(`[Matplotlib] Generated ${result.count} figures via Python matplotlib`);
      console.log(`[Matplotlib] Data shape: ${result.dataShape?.rows} x ${result.dataShape?.columns}`);
    } else {
      console.warn(`[Matplotlib] Generation failed: ${result.error}`);
    }

    return result;
  } catch (error) {
    console.error('[Matplotlib] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

/**
 * Execute AI-generated Python code for custom figure generation
 * This is the primary method - AI generates custom matplotlib code based on:
 * - The specific data columns and types
 * - The paper's research questions
 * - The analysis requirements
 *
 * The code runs in a sandboxed Python environment with matplotlib/seaborn/pandas/numpy
 */
export async function executeAIGeneratedFigureCode(
  pythonCode: string,
  csvContent: string
): Promise<MatplotlibResult> {
  if (!pythonCode) {
    return { success: false, error: 'No Python code provided' };
  }
  if (!csvContent) {
    return { success: false, error: 'No CSV content provided' };
  }

  try {
    console.log(`[AI Figure Code] Executing ${pythonCode.length} chars of AI-generated code...`);
    console.log(`[AI Figure Code] CSV content: ${csvContent.length} chars`);

    const response = await fetch(`${VERCEL_API_URL}/api/execute-figure-code`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        code: pythonCode,
        csvContent
      })
    });

    const result = await response.json();

    if (result.success) {
      console.log(`[AI Figure Code] Generated ${result.count} figures via AI-generated Python code`);
      console.log(`[AI Figure Code] Data shape: ${result.dataShape?.rows} x ${result.dataShape?.columns}`);

      // Convert to MatplotlibResult format
      return {
        success: true,
        figures: result.figures?.map((f: any) => ({
          filename: f.filename,
          type: 'custom',
          base64: f.base64,
          description: f.description
        })),
        count: result.count,
        dataShape: result.dataShape
      };
    } else {
      console.warn(`[AI Figure Code] Execution failed: ${result.error}`);
      return {
        success: false,
        error: result.error
      };
    }
  } catch (error) {
    console.error('[AI Figure Code] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

/**
 * Upload matplotlib-generated figures to Vercel Blob storage
 * Returns blob URLs for each figure
 */
export async function uploadMatplotlibFiguresToBlob(
  figures: MatplotlibFigure[],
  sessionId?: string
): Promise<GenerateFiguresResult> {
  if (!figures || figures.length === 0) {
    return { success: false, error: 'No figures to upload' };
  }

  try {
    console.log(`[Blob Upload] Uploading ${figures.length} matplotlib figures...`);

    const response = await fetch(`${VERCEL_API_URL}/api/upload-figures-to-blob`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        figures: figures.map(f => ({
          filename: f.filename,
          base64: f.base64,
          description: f.description
        })),
        sessionId
      })
    });

    const result = await response.json();

    if (result.success && result.figures) {
      // Store for later download
      currentSessionFigures = result.figures;
      currentSessionId = result.sessionId;
      console.log(`[Blob Upload] Uploaded ${result.count} figures, session: ${result.sessionId}`);
    }

    return result;
  } catch (error) {
    console.error('[Blob Upload] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

// ============================================================================
// PNG Figure Generation (QuickChart.io fallback)
// ============================================================================

export interface GeneratedPngFigure {
  filename: string;
  blobUrl: string;
  description: string;
  width?: number;
  height?: number;
}

export interface GenerateFiguresResult {
  success: boolean;
  sessionId?: string;
  figures?: GeneratedPngFigure[];
  count?: number;
  error?: string;
}

// Store generated figures for the current session
let currentSessionFigures: GeneratedPngFigure[] = [];
let currentSessionId: string | null = null;

/**
 * Generate PNG figures from chart data using QuickChart.io
 * Uploads to Vercel Blob storage and returns URLs
 */
export async function generatePngFigures(
  chartData: CloudAnalysisResult['chart_data'],
  sessionId?: string
): Promise<GenerateFiguresResult> {
  if (!chartData || chartData.length === 0) {
    return { success: false, error: 'No chart data provided' };
  }

  try {
    console.log(`[PNG Figures] Generating ${chartData.length} figures...`);

    const response = await fetch(`${VERCEL_API_URL}/api/generate-figures`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        chartData,
        sessionId
      })
    });

    const result = await response.json();

    if (result.success && result.figures) {
      // Store for later download
      currentSessionFigures = result.figures;
      currentSessionId = result.sessionId;
      console.log(`[PNG Figures] Generated ${result.count} figures, session: ${result.sessionId}`);
    } else {
      console.warn(`[PNG Figures] Generation failed: ${result.error}`);
    }

    return result;
  } catch (error) {
    console.error('[PNG Figures] Error:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

/**
 * Get the current session's generated figures
 */
export function getCurrentSessionFigures(): GeneratedPngFigure[] {
  // If in-memory array is populated, use it
  if (currentSessionFigures.length > 0) {
    return currentSessionFigures;
  }

  // Try to recover from localStorage (same data as pngFiguresForCompilation but different format)
  try {
    const stored = localStorage.getItem('icis_png_figures');
    if (stored) {
      const parsed = JSON.parse(stored) as FigureResource[];
      if (parsed && parsed.length > 0) {
        console.log(`[PNG Storage] Recovered ${parsed.length} session figures from localStorage`);
        // Convert to GeneratedPngFigure format with blobUrl
        currentSessionFigures = parsed.map(fig => ({
          filename: fig.filename,
          blobUrl: `data:image/png;base64,${fig.base64}`,
          description: ''
        }));
        return currentSessionFigures;
      }
    }
  } catch (e) {
    console.warn('[PNG Storage] Could not read session figures from localStorage:', e);
  }

  return currentSessionFigures;
}

/**
 * Get the current session ID
 */
export function getCurrentSessionId(): string | null {
  return currentSessionId;
}

/**
 * Clear the current session figures (call when starting new paper)
 */
export function clearSessionFigures(): void {
  currentSessionFigures = [];
  currentSessionId = null;
}

/**
 * Download all PNG figures from blob storage
 * Returns array of {filename, blob} for saving
 */
export async function downloadAllFigures(): Promise<Array<{ filename: string; blob: Blob }>> {
  const downloads: Array<{ filename: string; blob: Blob }> = [];

  for (const figure of currentSessionFigures) {
    try {
      const response = await fetch(figure.blobUrl);
      if (response.ok) {
        const blob = await response.blob();
        downloads.push({
          filename: figure.filename,
          blob
        });
      } else {
        console.warn(`[PNG Figures] Failed to download ${figure.filename}: ${response.status}`);
      }
    } catch (error) {
      console.warn(`[PNG Figures] Error downloading ${figure.filename}:`, error);
    }
  }

  console.log(`[PNG Figures] Downloaded ${downloads.length}/${currentSessionFigures.length} figures`);
  return downloads;
}

// ============================================================================
// PNG Figures with Base64 Storage (for LaTeX compilation)
// ============================================================================

// Store PNG figures with base64 data for LaTeX compilation
let pngFiguresForCompilation: FigureResource[] = [];

/**
 * Store PNG figures with base64 data for later LaTeX compilation
 * Called when figures are generated via QuickChart.io
 * Also stores in currentSessionFigures for Save All Files button
 */
export function storePngFiguresForCompilation(figures: Array<{ filename: string; base64: string; description?: string }>): void {
  pngFiguresForCompilation = figures.map(fig => ({
    filename: fig.filename.replace(/[^a-zA-Z0-9_.-]/g, '_'),
    base64: fig.base64
  }));

  // Also store in currentSessionFigures for Save All Files to work
  // Convert base64 to data URL format that can be fetched
  currentSessionFigures = figures.map(fig => ({
    filename: fig.filename.replace(/[^a-zA-Z0-9_.-]/g, '_'),
    blobUrl: `data:image/png;base64,${fig.base64}`,
    description: fig.description || ''
  }));

  console.log(`[PNG Storage] Stored ${pngFiguresForCompilation.length} PNG figures for LaTeX compilation and download`);

  // Persist to localStorage for page refresh recovery
  try {
    localStorage.setItem('icis_png_figures', JSON.stringify(pngFiguresForCompilation));
  } catch (e) {
    console.warn('[PNG Storage] Could not persist to localStorage:', e);
  }
}

/**
 * Get stored PNG figures for LaTeX compilation
 * Recovers from localStorage if in-memory array is empty (page refresh recovery)
 */
export function getPngFiguresForCompilation(): FigureResource[] {
  // If in-memory array is populated, use it
  if (pngFiguresForCompilation.length > 0) {
    return pngFiguresForCompilation;
  }

  // Try to recover from localStorage
  try {
    const stored = localStorage.getItem('icis_png_figures');
    if (stored) {
      const parsed = JSON.parse(stored) as FigureResource[];
      if (parsed && parsed.length > 0) {
        console.log(`[PNG Storage] Recovered ${parsed.length} figures from localStorage`);
        pngFiguresForCompilation = parsed;
        return pngFiguresForCompilation;
      }
    }
  } catch (e) {
    console.warn('[PNG Storage] Could not read from localStorage:', e);
  }

  return pngFiguresForCompilation;
}

/**
 * Clear stored PNG figures (call when starting new paper)
 */
export function clearPngFiguresForCompilation(): void {
  pngFiguresForCompilation = [];
  try {
    localStorage.removeItem('icis_png_figures');
  } catch (e) {
    // Ignore localStorage errors
  }
}

// ============================================================================
// Bibliography Storage (for BibTeX compilation)
// ============================================================================

interface BibliographyResource {
  filename: string;
  content: string;
}

let currentBibliography: BibliographyResource | null = null;

/**
 * Store bibliography content for LaTeX compilation
 * @param filename - The .bib filename (e.g., "references.bib")
 * @param content - The BibTeX content
 */
export function storeBibliography(filename: string, content: string): void {
  currentBibliography = { filename, content };
  console.log(`[Bibliography] Stored ${filename} (${content.length} chars, ${(content.match(/@\w+\{/g) || []).length} entries)`);

  // Persist to localStorage for page refresh recovery
  try {
    localStorage.setItem('icis_bibliography', JSON.stringify(currentBibliography));
  } catch (e) {
    console.warn('[Bibliography] Could not persist to localStorage:', e);
  }
}

/**
 * Get stored bibliography for LaTeX compilation
 * Recovers from localStorage if in-memory value is empty (page refresh recovery)
 */
export function getBibliographyForCompilation(): BibliographyResource | null {
  // If in-memory value exists, use it
  if (currentBibliography) {
    return currentBibliography;
  }

  // Try to recover from localStorage
  try {
    const stored = localStorage.getItem('icis_bibliography');
    if (stored) {
      const parsed = JSON.parse(stored) as BibliographyResource;
      if (parsed && parsed.content) {
        console.log(`[Bibliography] Recovered from localStorage: ${parsed.filename}`);
        currentBibliography = parsed;
        return currentBibliography;
      }
    }
  } catch (e) {
    console.warn('[Bibliography] Could not read from localStorage:', e);
  }

  return currentBibliography;
}

/**
 * Get bibliography content for download/save
 * Recovers from localStorage if in-memory value is empty (page refresh recovery)
 */
export function getBibliographyContent(): { filename: string; content: string } | null {
  // If in-memory value exists, use it
  if (currentBibliography) {
    return currentBibliography;
  }

  // Try to recover from localStorage
  try {
    const stored = localStorage.getItem('icis_bibliography');
    if (stored) {
      const parsed = JSON.parse(stored) as BibliographyResource;
      if (parsed && parsed.content) {
        console.log(`[Bibliography] Recovered from localStorage for download: ${parsed.filename}`);
        currentBibliography = parsed;
        return currentBibliography;
      }
    }
  } catch (e) {
    console.warn('[Bibliography] Could not read from localStorage:', e);
  }

  return currentBibliography;
}

/**
 * Clear stored bibliography (call when starting new paper)
 */
export function clearBibliography(): void {
  currentBibliography = null;
  try {
    localStorage.removeItem('icis_bibliography');
  } catch (e) {
    // Ignore localStorage errors
  }
}

// ============================================================================
// Chart Data & Visualization Code Storage
// ============================================================================

interface ChartDataResource {
  chartData: CloudAnalysisResult['chart_data'];
  pythonCode: string;
  isSynthetic: boolean;
  generatedAt: string;
}

let currentChartData: ChartDataResource | null = null;

/**
 * Generate Python matplotlib code from chart_data JSON
 * This allows users to reproduce the figures locally
 */
function generatePythonFromChartData(chartData: CloudAnalysisResult['chart_data'], isSynthetic: boolean): string {
  const lines: string[] = [
    '"""',
    'ICIScopilot - Visualization Code',
    `Generated: ${new Date().toISOString()}`,
    isSynthetic ? 'Data Source: AI-synthesized illustrative data' : 'Data Source: User-provided data file',
    '',
    'This script reproduces the figures generated for your research paper.',
    'Requirements: pip install matplotlib numpy',
    '"""',
    '',
    'import matplotlib.pyplot as plt',
    'import numpy as np',
    '',
    '# Set publication-quality defaults',
    'plt.rcParams.update({',
    '    "font.size": 12,',
    '    "axes.titlesize": 14,',
    '    "axes.labelsize": 12,',
    '    "figure.figsize": (10, 6),',
    '    "figure.dpi": 150',
    '})',
    ''
  ];

  chartData.forEach((chart, idx) => {
    lines.push(`# ============================================================================`);
    lines.push(`# Figure ${idx + 1}: ${chart.title || 'Untitled'}`);
    lines.push(`# ============================================================================`);
    lines.push('');
    lines.push(`fig${idx + 1}, ax${idx + 1} = plt.subplots()`);
    lines.push('');

    if (chart.type === 'bar') {
      lines.push(`# Bar chart data`);
      lines.push(`labels_${idx + 1} = ${JSON.stringify(chart.labels || [])}`);

      if (chart.datasets && chart.datasets.length > 0) {
        chart.datasets.forEach((ds, dsIdx) => {
          lines.push(`data_${idx + 1}_${dsIdx} = ${JSON.stringify(ds.data || [])}`);
        });

        if (chart.datasets.length === 1) {
          lines.push(`ax${idx + 1}.bar(labels_${idx + 1}, data_${idx + 1}_0, color='steelblue')`);
        } else {
          lines.push(`x = np.arange(len(labels_${idx + 1}))`);
          lines.push(`width = ${(0.8 / chart.datasets.length).toFixed(2)}`);
          chart.datasets.forEach((ds, dsIdx) => {
            const offset = dsIdx - (chart.datasets!.length - 1) / 2;
            lines.push(`ax${idx + 1}.bar(x + ${offset.toFixed(2)}*width, data_${idx + 1}_${dsIdx}, width, label='${ds.label || `Series ${dsIdx + 1}`}')`);
          });
          lines.push(`ax${idx + 1}.set_xticks(x)`);
          lines.push(`ax${idx + 1}.set_xticklabels(labels_${idx + 1})`);
          lines.push(`ax${idx + 1}.legend()`);
        }
      }
    } else if (chart.type === 'line') {
      lines.push(`# Line chart data`);
      lines.push(`labels_${idx + 1} = ${JSON.stringify(chart.labels || [])}`);

      if (chart.datasets && chart.datasets.length > 0) {
        chart.datasets.forEach((ds, dsIdx) => {
          lines.push(`data_${idx + 1}_${dsIdx} = ${JSON.stringify(ds.data || [])}`);
          lines.push(`ax${idx + 1}.plot(labels_${idx + 1}, data_${idx + 1}_${dsIdx}, marker='o', label='${ds.label || `Series ${dsIdx + 1}`}')`);
        });
        if (chart.datasets.length > 1) {
          lines.push(`ax${idx + 1}.legend()`);
        }
      }
    } else if (chart.type === 'pie' || chart.type === 'doughnut') {
      lines.push(`# Pie chart data`);
      lines.push(`labels_${idx + 1} = ${JSON.stringify(chart.labels || [])}`);
      if (chart.datasets && chart.datasets[0]) {
        lines.push(`data_${idx + 1} = ${JSON.stringify(chart.datasets[0].data || [])}`);
        lines.push(`ax${idx + 1}.pie(data_${idx + 1}, labels=labels_${idx + 1}, autopct='%1.1f%%')`);
      }
    } else if (chart.type === 'scatter') {
      lines.push(`# Scatter plot data`);
      if (chart.datasets && chart.datasets[0] && chart.datasets[0].data) {
        const data = chart.datasets[0].data as Array<{x: number, y: number}>;
        lines.push(`x_${idx + 1} = ${JSON.stringify(data.map(d => d.x || d))}`);
        lines.push(`y_${idx + 1} = ${JSON.stringify(data.map(d => d.y || d))}`);
        lines.push(`ax${idx + 1}.scatter(x_${idx + 1}, y_${idx + 1}, alpha=0.6)`);
      }
    } else {
      lines.push(`# ${chart.type} chart - data structure:`);
      lines.push(`chart_config_${idx + 1} = ${JSON.stringify(chart, null, 2).split('\n').map((l, i) => i === 0 ? l : '# ' + l).join('\n')}`);
    }

    lines.push('');
    lines.push(`ax${idx + 1}.set_title('${(chart.title || '').replace(/'/g, "\\'")}')`);
    if (chart.options?.scales?.x?.title?.text) {
      lines.push(`ax${idx + 1}.set_xlabel('${chart.options.scales.x.title.text}')`);
    }
    if (chart.options?.scales?.y?.title?.text) {
      lines.push(`ax${idx + 1}.set_ylabel('${chart.options.scales.y.title.text}')`);
    }
    lines.push(`plt.tight_layout()`);
    lines.push(`fig${idx + 1}.savefig('figure_${idx + 1}.png', dpi=300, bbox_inches='tight')`);
    lines.push(`print(f"Saved figure_${idx + 1}.png")`);
    lines.push('');
  });

  lines.push('# Show all figures');
  lines.push('plt.show()');
  lines.push('');
  lines.push(`print("\\nGenerated ${chartData.length} figures successfully!")`);

  return lines.join('\n');
}

/**
 * Store chart data and generated Python code for download
 * @param chartData - The chart configuration data
 * @param isSynthetic - Whether the data is AI-generated (vs from user file)
 */
export function storeChartData(chartData: CloudAnalysisResult['chart_data'], isSynthetic: boolean): void {
  const pythonCode = generatePythonFromChartData(chartData, isSynthetic);

  currentChartData = {
    chartData,
    pythonCode,
    isSynthetic,
    generatedAt: new Date().toISOString()
  };

  console.log(`[Chart Data] Stored ${chartData.length} chart configs and Python code (${pythonCode.length} chars)`);
}

/**
 * Get stored chart data for download
 */
export function getChartDataContent(): { chartDataJson: string; pythonCode: string; isSynthetic: boolean } | null {
  if (!currentChartData) return null;

  return {
    chartDataJson: JSON.stringify(currentChartData.chartData, null, 2),
    pythonCode: currentChartData.pythonCode,
    isSynthetic: currentChartData.isSynthetic
  };
}

/**
 * Clear stored chart data (call when starting new paper)
 */
export function clearChartData(): void {
  currentChartData = null;
}

// ============================================================================
// Infographic Storage
// ============================================================================

let currentInfographicBase64: string | null = null;
let currentInfographicBlobUrl: string | null = null;

/**
 * Store infographic base64 data for download
 */
export function storeInfographic(base64: string): void {
  currentInfographicBase64 = base64;
  console.log('[FileApi] Stored infographic base64 data');

  // Also persist to localStorage for page refresh recovery
  try {
    localStorage.setItem('icis_infographic_base64', base64);
  } catch (e) {
    console.warn('[FileApi] Could not persist infographic to localStorage');
  }

  // Also upload to Vercel Blob for permanent storage
  uploadInfographicToBlob(base64).catch(err => {
    console.warn('[FileApi] Failed to upload infographic to blob:', err);
  });
}

/**
 * Upload infographic to Vercel Blob storage
 */
export async function uploadInfographicToBlob(base64: string): Promise<string | null> {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || '';
    if (!apiUrl) {
      console.warn('[FileApi] No API URL configured for infographic upload');
      return null;
    }

    // Get session ID from current session
    const sessionId = getCurrentSessionId() || `infographic_${Date.now()}`;

    const response = await fetch(`${apiUrl}/api/upload-infographic`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        base64,
        sessionId,
        filename: 'research_infographic.png'
      })
    });

    const result = await response.json();
    if (result.success && result.url) {
      currentInfographicBlobUrl = result.url;
      console.log(`[FileApi] Infographic uploaded to blob: ${result.url}`);

      // Store URL in localStorage too
      try {
        localStorage.setItem('icis_infographic_blob_url', result.url);
      } catch (e) {
        // Ignore localStorage errors
      }

      return result.url;
    }

    return null;
  } catch (error) {
    console.error('[FileApi] Error uploading infographic to blob:', error);
    return null;
  }
}

/**
 * Get infographic blob URL
 */
export function getInfographicBlobUrl(): string | null {
  if (currentInfographicBlobUrl) {
    return currentInfographicBlobUrl;
  }

  try {
    const stored = localStorage.getItem('icis_infographic_blob_url');
    if (stored) {
      currentInfographicBlobUrl = stored;
      return stored;
    }
  } catch (e) {
    // Ignore localStorage errors
  }

  return null;
}

/**
 * Get stored infographic base64 data
 */
export function getInfographicBase64(): string | null {
  // Try memory first, then localStorage
  if (currentInfographicBase64) {
    return currentInfographicBase64;
  }

  try {
    const stored = localStorage.getItem('icis_infographic_base64');
    if (stored) {
      currentInfographicBase64 = stored;
      return stored;
    }
  } catch (e) {
    console.warn('[FileApi] Could not read infographic from localStorage');
  }

  return null;
}

/**
 * Clear stored infographic data
 */
export function clearInfographic(): void {
  currentInfographicBase64 = null;
  currentInfographicBlobUrl = null;
  try {
    localStorage.removeItem('icis_infographic_base64');
    localStorage.removeItem('icis_infographic_blob_url');
  } catch (e) {
    // Ignore localStorage errors
  }
}

// ============================================================================
// Data Table CSV Storage
// ============================================================================

let currentDataTableCsv: string | null = null;

/**
 * Store data table CSV content for download
 */
export function storeDataTableCsv(csvContent: string): void {
  currentDataTableCsv = csvContent;
  console.log('[FileApi] Stored data table CSV');

  // Also persist to localStorage for page refresh recovery
  try {
    localStorage.setItem('icis_datatable_csv', csvContent);
  } catch (e) {
    console.warn('[FileApi] Could not persist data table CSV to localStorage');
  }
}

/**
 * Get stored data table CSV content
 */
export function getDataTableCsv(): string | null {
  // Try memory first, then localStorage
  if (currentDataTableCsv) {
    return currentDataTableCsv;
  }

  try {
    const stored = localStorage.getItem('icis_datatable_csv');
    if (stored) {
      currentDataTableCsv = stored;
      return stored;
    }
  } catch (e) {
    console.warn('[FileApi] Could not read data table CSV from localStorage');
  }

  return null;
}

/**
 * Clear stored data table CSV
 */
export function clearDataTableCsv(): void {
  currentDataTableCsv = null;
  try {
    localStorage.removeItem('icis_datatable_csv');
  } catch (e) {
    // Ignore localStorage errors
  }
}

// ============================================================================
// Reference Validation Report Storage
// ============================================================================

let currentValidationReport: ReferenceValidationReport | null = null;

/**
 * Store reference validation report for oversight review
 */
export function storeValidationReport(report: ReferenceValidationReport): void {
  currentValidationReport = report;
  console.log(`[FileApi] Stored validation report: ${report.verified} verified, ${report.discovered} discovered`);

  // Persist to localStorage for page refresh recovery
  try {
    localStorage.setItem('icis_validation_report', JSON.stringify(report));
  } catch (e) {
    console.warn('[FileApi] Could not persist validation report to localStorage');
  }
}

/**
 * Get stored reference validation report
 */
export function getValidationReport(): ReferenceValidationReport | null {
  // Try memory first, then localStorage
  if (currentValidationReport) {
    return currentValidationReport;
  }

  try {
    const stored = localStorage.getItem('icis_validation_report');
    if (stored) {
      currentValidationReport = JSON.parse(stored);
      return currentValidationReport;
    }
  } catch (e) {
    console.warn('[FileApi] Could not read validation report from localStorage');
  }

  return null;
}

/**
 * Clear stored validation report
 */
export function clearValidationReport(): void {
  currentValidationReport = null;
  try {
    localStorage.removeItem('icis_validation_report');
  } catch (e) {
    // Ignore localStorage errors
  }
}
