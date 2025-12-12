import React, { useState } from 'react';
import { RefreshCw, Check, Download, Upload, ChevronRight } from 'lucide-react';
import LogPanel from './LogPanel';
import StageControls from './StageControls';
import RoundScoreComparison from './RoundScoreComparison';
import { OversightFileData, FeedbackFileData, readOversightFile, readFeedbackFile, readPaperFile, getOversightProgression } from '../../services/fileService';
import { saveReviewOutputs } from '../../services/fileApi';

interface ReviewerStageProps {
  logs: string[];
  isProcessing: boolean;
  currentRound: number;
  isComplete?: boolean;
  onProceedToSupervisor?: (files: ReviewOutputFiles) => void;
  onAbort?: () => void;
  onRestart?: () => void;
  filePrefix?: string;
}

export interface ReviewOutputFiles {
  oversight: OversightFileData;
  feedback: FeedbackFileData;
  paperContent: string;
  paperVersion: number;
}

const ReviewerStage: React.FC<ReviewerStageProps> = ({
  logs,
  isProcessing,
  currentRound,
  isComplete = false,
  onProceedToSupervisor,
  onAbort,
  onRestart,
  filePrefix
}) => {
  const [savedFiles, setSavedFiles] = useState<string[]>([]);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{
    oversight?: OversightFileData;
    feedback?: FeedbackFileData;
  }>({});

  const handleSaveAll = async () => {
    setIsSaving(true);
    setSaveError(null);

    const oversight = readOversightFile(currentRound);
    const feedback = readFeedbackFile(currentRound);
    const paper = readPaperFile(currentRound, 'icis_paper');

    if (!oversight || !feedback || !paper) {
      setSaveError('Missing files to save');
      setIsSaving(false);
      return;
    }

    const result = await saveReviewOutputs(currentRound, oversight, feedback, paper, filePrefix);

    if (result.success) {
      setSavedFiles(result.files || []);
    } else {
      setSaveError(result.error || 'Failed to save files');
    }

    setIsSaving(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'oversight' | 'feedback') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    try {
      const data = JSON.parse(text);
      setUploadedFiles(prev => ({ ...prev, [type]: data }));
    } catch (err) {
      console.error(`Failed to parse ${type} file:`, err);
    }
  };

  const handleProceed = () => {
    // Use uploaded files if available, otherwise use from localStorage
    const oversight = uploadedFiles.oversight || readOversightFile(currentRound);
    const feedback = uploadedFiles.feedback || readFeedbackFile(currentRound);
    const paper = readPaperFile(currentRound, 'icis_paper');

    if (oversight && feedback && paper && onProceedToSupervisor) {
      onProceedToSupervisor({
        oversight,
        feedback,
        paperContent: paper,
        paperVersion: currentRound
      });
    }
  };

  const canProceed = isComplete && (
    (uploadedFiles.oversight && uploadedFiles.feedback) ||
    (readOversightFile(currentRound) && readFeedbackFile(currentRound))
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <RefreshCw className={`text-indigo-600 ${isProcessing ? 'animate-spin' : ''}`} />
          Reviewing Paper (Round {currentRound})
        </h2>
        <StageControls
          stageName="Reviewer"
          isProcessing={isProcessing}
          canAbort={true}
          canRestart={!isProcessing && isComplete}
          onAbort={onAbort || (() => {})}
          onRestart={onRestart || (() => {})}
        />
      </div>

      <LogPanel logs={logs} height="h-48" />

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Review Process
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              isProcessing ? 'bg-indigo-100 text-indigo-600' : isComplete ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100'
            }`}>
              {isProcessing ? <RefreshCw size={14} className="animate-spin" /> : isComplete ? <Check size={14} /> : '1'}
            </div>
            <span>Step 1: Generating constructive feedback</span>
          </div>
          <div className={`flex items-center gap-3 text-sm ${isComplete ? '' : 'text-slate-400'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isComplete ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100'}`}>
              {isComplete ? <Check size={14} /> : '2'}
            </div>
            <span>Step 2: Producing oversight dashboard</span>
          </div>
          <div className={`flex items-center gap-3 text-sm ${isComplete ? '' : 'text-slate-400'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isComplete ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100'}`}>
              {isComplete ? <Check size={14} /> : '3'}
            </div>
            <span>Step 3: Assessing trustworthiness</span>
          </div>
        </div>
      </div>

      {/* Score Comparison Section - shown when review is complete */}
      {isComplete && (
        <div className="mt-6">
          <RoundScoreComparison
            allOversight={getOversightProgression()}
            compact={true}
          />
        </div>
      )}

      {/* Review Output Section - shown when review is complete */}
      {isComplete && (
        <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Download className="text-indigo-600" size={20} />
            Review Complete - Download Outputs
          </h3>

          <p className="text-sm text-slate-600 mb-4">
            Download the review outputs below. These files will be used as input for the Supervisor stage.
            You can review and optionally modify them before proceeding.
          </p>

          <button
            onClick={handleSaveAll}
            disabled={isSaving}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
          >
            <Download size={16} className={isSaving ? 'animate-pulse' : ''} />
            {isSaving ? 'Downloading...' : 'Download Review Outputs'}
          </button>

          <p className="text-xs text-slate-500 text-center mt-2">
            Downloads: oversight_v{currentRound}.json, feedback_v{currentRound}.json, icis_paper_v{currentRound}.tex
          </p>

          {savedFiles.length > 0 && (
            <div className="text-sm text-emerald-600 mt-3 text-center">
              Downloaded: {savedFiles.join(', ')}
            </div>
          )}

          {saveError && (
            <div className="text-sm text-red-600 mt-3 text-center">
              Error: {saveError}
            </div>
          )}

          {/* Upload Section */}
          <div className="border-t border-indigo-200 pt-4 mt-4">
            <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <Upload size={16} />
              Upload Modified Files (Optional)
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              If you've modified the downloaded files, upload them here to use your changes in the Supervisor stage.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Oversight File {uploadedFiles.oversight && <Check size={12} className="inline text-emerald-500" />}
                </label>
                <input
                  type="file"
                  accept=".json"
                  onChange={(e) => handleFileUpload(e, 'oversight')}
                  className="text-xs w-full"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Feedback File {uploadedFiles.feedback && <Check size={12} className="inline text-emerald-500" />}
                </label>
                <input
                  type="file"
                  accept=".json"
                  onChange={(e) => handleFileUpload(e, 'feedback')}
                  className="text-xs w-full"
                />
              </div>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="border-t border-indigo-200 pt-4 mt-4">
            <button
              onClick={handleProceed}
              disabled={!canProceed}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
            >
              Proceed to Supervisor Stage
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewerStage;
