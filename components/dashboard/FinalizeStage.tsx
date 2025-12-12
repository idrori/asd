import React, { useState } from 'react';
import { Send, Check, Save, FileText, Download, Loader2, Eye, Link, Copy, ExternalLink } from 'lucide-react';
import LogPanel from './LogPanel';
import {
  readPaperFile,
  readFeedbackFile,
  getOversightProgression
} from '../../services/fileService';
import { saveFinalSubmission, compileLaTeX, downloadCompiledPdf, createViewerLink, openPaperViewer, getLastCompiledPdfBlob, downloadAllFigures, getCurrentSessionFigures, getPngFiguresForCompilation, CompileResult, ViewerLinkResult } from '../../services/fileApi';

interface FinalizeStageProps {
  logs: string[];
  currentRound: number;
  currentPaperVersion: number;
  filePrefix?: string;
  dataAlert?: string;  // Alert about synthetic data usage
}

const FinalizeStage: React.FC<FinalizeStageProps> = ({
  logs,
  currentRound,
  currentPaperVersion,
  filePrefix,
  dataAlert
}) => {
  const [savedFiles, setSavedFiles] = useState<string[]>([]);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileResult, setCompileResult] = useState<CompileResult | null>(null);
  const [viewerLink, setViewerLink] = useState<ViewerLinkResult | null>(null);
  const [isCreatingLink, setIsCreatingLink] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSaveAll = async () => {
    setIsSaving(true);
    setSaveError(null);

    const paper = readPaperFile(currentPaperVersion, 'icis_paper');
    const feedback = readFeedbackFile(currentRound);
    const allOversight = getOversightProgression();

    if (!paper || !feedback) {
      setSaveError('Missing files to save');
      setIsSaving(false);
      return;
    }

    // Save .tex and data files
    const result = await saveFinalSubmission(
      currentPaperVersion,
      currentRound,
      paper,
      allOversight,
      feedback,
      filePrefix
    );

    if (result.success) {
      const savedFilesList = result.files || [];

      // Download PDF if available
      const pdfData = getLastCompiledPdfBlob();
      if (pdfData) {
        const url = URL.createObjectURL(pdfData.blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = pdfData.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        savedFilesList.push(pdfData.filename);
      }

      // Download PNG figures if available
      const sessionFigures = getCurrentSessionFigures();
      if (sessionFigures.length > 0) {
        console.log(`[Save] Downloading ${sessionFigures.length} PNG figures...`);
        const figureBlobs = await downloadAllFigures();

        // Download each figure with a small delay to avoid browser blocking
        for (const fig of figureBlobs) {
          await new Promise(resolve => setTimeout(resolve, 200));
          const url = URL.createObjectURL(fig.blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fig.filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          savedFilesList.push(fig.filename);
        }
        console.log(`[Save] Downloaded ${figureBlobs.length} PNG figures`);
      }

      setSavedFiles(savedFilesList);
    } else {
      setSaveError(result.error || 'Failed to save files');
    }

    setIsSaving(false);
  };

  const handleCompilePdf = async () => {
    setIsCompiling(true);
    setCompileResult(null);
    setSaveError(null);

    const paper = readPaperFile(currentPaperVersion, 'icis_paper');

    if (!paper) {
      setSaveError('No paper content available to compile');
      setIsCompiling(false);
      return;
    }

    const prefix = filePrefix ? `${filePrefix}_` : '';
    const filename = `${prefix}icis_paper_v${currentPaperVersion}_FINAL.tex`;

    // Get PNG figures for compilation (if any were generated via QuickChart.io)
    const pngFigures = getPngFiguresForCompilation();
    console.log(`[Compile] Compiling with ${pngFigures.length} PNG figures`);

    const result = await compileLaTeX(filename, paper, pngFigures.length > 0 ? pngFigures : undefined);
    setCompileResult(result);

    if (!result.success) {
      setSaveError(result.error || 'PDF compilation failed');
    }

    setIsCompiling(false);
  };

  const handleDownloadPdf = () => {
    if (compileResult?.pdfFilename) {
      downloadCompiledPdf(compileResult.pdfFilename);
    }
  };

  const handleCreateViewerLink = async () => {
    setIsCreatingLink(true);
    setCopiedLink(false);

    const prefix = filePrefix ? `${filePrefix}_` : '';
    const texFilename = `${prefix}icis_paper_v${currentPaperVersion}_FINAL.tex`;

    const result = await createViewerLink(texFilename);
    setViewerLink(result);
    setIsCreatingLink(false);
  };

  const handleCopyLink = () => {
    if (viewerLink?.fullUrl) {
      navigator.clipboard.writeText(viewerLink.fullUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleOpenViewer = () => {
    if (viewerLink?.viewerUrl) {
      openPaperViewer(viewerLink.viewerUrl);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto">
      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-100">
        <Send size={40} />
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Process Completed!</h2>
      <p className="text-slate-600 mb-8">
        The research paper has been finalized after {currentRound} revision cycle(s).
      </p>

      <LogPanel logs={logs} height="h-32" />

      <ul className="text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mb-8 w-full text-sm">
        <li className="flex items-center gap-2 text-slate-700">
          <Check size={16} className="text-emerald-500" /> Paper compiled (v{currentPaperVersion})
        </li>
        <li className="flex items-center gap-2 text-slate-700">
          <Check size={16} className="text-emerald-500" /> All sections verified
        </li>
        <li className="flex items-center gap-2 text-slate-700">
          <Check size={16} className="text-emerald-500" /> Submission package generated
        </li>
        <li className="flex items-center gap-2 text-slate-700">
          <Check size={16} className="text-emerald-500" /> Ready for download
        </li>
      </ul>

      <div className="flex flex-col gap-4 w-full">
        {/* Compile PDF Button */}
        <button
          onClick={handleCompilePdf}
          disabled={isCompiling || isSaving}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
        >
          {isCompiling ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Compiling PDF...
            </>
          ) : (
            <>
              <FileText size={18} />
              Compile LaTeX to PDF
            </>
          )}
        </button>

        {/* PDF Compilation Result */}
        {compileResult?.success && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-sm font-medium text-emerald-800">PDF Generated Successfully!</p>
                <p className="text-xs text-emerald-600">
                  {compileResult.pdfFilename} ({Math.round((compileResult.fileSize || 0) / 1024)} KB)
                  {compileResult.pageCount && ` • ${compileResult.pageCount} pages`}
                </p>
              </div>
              <button
                onClick={handleDownloadPdf}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
              >
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
        )}

        {/* Warning: Page limit exceeded */}
        {compileResult?.success && compileResult?.exceedsLimit && (
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
            <p className="text-sm font-medium text-amber-800">⚠️ Page Limit Warning</p>
            <p className="text-xs text-amber-700 mt-1">
              This paper is {compileResult.pageCount} pages, exceeding the ICIS 16-page limit.
              Please revise to reduce length before submission.
            </p>
          </div>
        )}

        {/* Warning: Synthetic data used */}
        {dataAlert && (
          <div className="bg-orange-50 border border-orange-300 rounded-lg p-4">
            <p className="text-sm font-medium text-orange-800">⚠️ Data Alert</p>
            <p className="text-xs text-orange-700 mt-1">
              {dataAlert}
            </p>
          </div>
        )}

        {/* Paper Viewer Link Section */}
        {compileResult?.success && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Eye size={18} className="text-blue-600" />
              <p className="text-sm font-medium text-blue-800">Share Paper for Review</p>
            </div>
            <p className="text-xs text-blue-600 mb-3">
              Create a link to share the paper with researchers for feedback. They can view but not download the PDF.
            </p>

            {!viewerLink?.success ? (
              <button
                onClick={handleCreateViewerLink}
                disabled={isCreatingLink}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
              >
                {isCreatingLink ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Creating Link...
                  </>
                ) : (
                  <>
                    <Link size={16} />
                    Create Shareable Link
                  </>
                )}
              </button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={viewerLink.fullUrl || ''}
                    className="flex-1 text-xs bg-white border border-blue-300 rounded-lg px-3 py-2 font-mono"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm flex items-center gap-1"
                    title="Copy link"
                  >
                    <Copy size={14} />
                    {copiedLink ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleOpenViewer}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={14} />
                    Open Preview
                  </button>
                </div>
                <p className="text-xs text-blue-500 text-center">
                  Link expires in {viewerLink.expiresIn}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Save All Files Button */}
        <button
          onClick={handleSaveAll}
          disabled={isSaving || isCompiling}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
        >
          <Save size={18} className={isSaving ? 'animate-pulse' : ''} />
          {isSaving ? 'Saving...' : 'Save All Files (pdf + .tex + .png + data)'}
        </button>

        <p className="text-xs text-slate-500 text-center">
          Downloads PDF, .tex, PNG figures, and data files
        </p>

        {savedFiles.length > 0 && (
          <div className="text-sm text-emerald-600 text-center">
            <p className="font-medium mb-1">Saved {savedFiles.length} files:</p>
            <p className="text-xs">{savedFiles.map(f => f.split(/[/\\]/).pop()).join(', ')}</p>
          </div>
        )}

        {saveError && (
          <div className="text-sm text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="font-medium">Error:</p>
            <p className="text-xs">{saveError}</p>
            {compileResult?.log && (
              <details className="mt-2 text-left">
                <summary className="cursor-pointer text-xs text-red-500 hover:text-red-700">Show compilation log</summary>
                <pre className="mt-1 text-xs bg-red-100 p-2 rounded overflow-auto max-h-40 whitespace-pre-wrap">{compileResult.log}</pre>
              </details>
            )}
          </div>
        )}

        <button
          onClick={() => window.location.reload()}
          className="text-indigo-600 font-medium hover:underline mt-4"
        >
          Start New Project
        </button>
      </div>
    </div>
  );
};

export default FinalizeStage;
