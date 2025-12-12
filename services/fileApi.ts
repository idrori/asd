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

const API_BASE = 'http://localhost:3001/api';

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
 */
export async function saveReviewOutputs(
  round: number,
  oversight: object,
  feedback: object,
  paperContent: string,
  filePrefix?: string
): Promise<SaveFilesResult> {
  const prefix = filePrefix ? `${filePrefix}_` : '';
  return saveFiles([
    { directory: 'data', filename: `${prefix}oversight_v${round}.json`, content: oversight },
    { directory: 'data', filename: `${prefix}feedback_v${round}.json`, content: feedback },
    { directory: 'paper', filename: `${prefix}icis_paper_v${round}.tex`, content: paperContent }
  ]);
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
 * Compile LaTeX content to PDF
 * Uses Vercel serverless function (cloud) or local backend
 */
export async function compileLaTeX(filename: string, content: string): Promise<CompileResult> {
  // Count TikZ figures for logging
  const tikzCount = (content.match(/\\begin\{tikzpicture\}/g) || []).length;
  const contentKB = Math.round(content.length / 1024);

  // Try Vercel cloud compilation first
  if (VERCEL_API_URL) {
    try {
      console.log(`[LaTeX] Compiling via Vercel cloud... (${contentKB} KB, ${tikzCount} TikZ figures)`);

      // Use AbortController for 5 minute timeout on client side
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        console.error('[LaTeX] Client-side timeout after 5 minutes');
        controller.abort();
      }, 300000); // 5 minutes

      let response: Response;
      try {
        response = await fetch(`${VERCEL_API_URL}/api/compile-latex`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({ filename, content })
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
        headers: { 'Content-Type': 'application/json' },
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
      headers: { 'Content-Type': 'application/json' },
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
      headers: { 'Content-Type': 'application/json' },
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
