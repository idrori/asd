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

export interface CompileResult {
  success: boolean;
  pdfPath?: string;
  pdfFilename?: string;
  fileSize?: number;
  pageCount?: number;      // Number of pages in compiled PDF
  exceedsLimit?: boolean;  // True if paper exceeds ICIS 16-page limit
  log?: string;
  error?: string;
}

/**
 * Compile LaTeX content to PDF via backend server
 * Requires LaTeX (pdflatex) installed on the server
 */
export async function compileLaTeX(filename: string, content: string): Promise<CompileResult> {
  // Check backend availability
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return {
      success: false,
      error: 'Backend server not available. Run "node server.cjs" to enable PDF compilation.'
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
 * Get the URL to download a compiled PDF
 */
export function getPdfDownloadUrl(pdfFilename: string): string {
  return `${API_BASE}/get-pdf/${encodeURIComponent(pdfFilename)}`;
}

/**
 * Download a compiled PDF from the server
 */
export async function downloadCompiledPdf(pdfFilename: string): Promise<void> {
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
 * Create an HTML viewer link for a paper (for sharing with researchers)
 * The link shows the paper in HTML format without download capability
 */
export async function createViewerLink(texFilename: string): Promise<ViewerLinkResult> {
  // Check backend availability
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return {
      success: false,
      error: 'Backend server not available. Run "node server.cjs" to create viewer links.'
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
  }[];
  error?: string;
  dataFileFound?: boolean;
  dataFilePath?: string;
  usedSyntheticData?: boolean;
}

/**
 * Execute a Python visualization script
 * The script is saved to Code/ and executed, with figures saved to Results/
 */
export async function executePythonScript(
  filename: string,
  code: string,
  dataFile?: string
): Promise<PythonExecutionResult> {
  // Check backend availability
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
    return {
      success: false,
      error: 'Backend server not available. Run "node server.cjs" to enable Python execution.'
    };
  }

  try {
    console.log(`[executePythonScript] filename=${filename}, dataFile=${dataFile || 'UNDEFINED'}`);
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
  error?: string;
}

/**
 * Get a preview of a data file (first line) for user confirmation
 * This helps users verify they're analyzing the correct data file
 */
export async function getDataFilePreview(filename: string): Promise<DataFilePreview> {
  if (backendAvailable === null) {
    await checkBackendHealth();
  }

  if (!backendAvailable) {
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
      totalLines
    };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
