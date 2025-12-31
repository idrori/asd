import React, { useState } from 'react';
import { FileText, Play, RefreshCw, CheckCircle, AlertCircle, Loader, FolderPlus, Archive } from 'lucide-react';
import { StageStatus } from '../../types';
import FileUpload from '../FileUpload';
import LogPanel from './LogPanel';
import { DetectionStatus } from '../../hooks';
import VenueSelector from '../VenueSelector';
import type { VenueId } from '../../types/venue';

interface UploadedFiles {
  template?: File | null;
  interview?: File | null;
  dataFile?: File | null;
  participantId?: string;
}

interface SetupStageProps {
  logs: string[];
  stageStatus: StageStatus;
  isProcessing: boolean;
  uploadedFiles: UploadedFiles;
  onFileChange: (fileType: 'template' | 'interview' | 'dataFile', file: File | null) => void;
  onAction: (action: string) => void;
  detectionStatus?: DetectionStatus;
  onRefreshDetection?: () => void;
  hasExistingCase?: boolean;  // True if there's data from a previous case
  onVenueChange?: (venueId: VenueId) => void;
}

const SetupStage: React.FC<SetupStageProps> = ({
  logs,
  stageStatus,
  isProcessing,
  uploadedFiles,
  onFileChange,
  onAction,
  detectionStatus,
  onRefreshDetection,
  hasExistingCase = false,
  onVenueChange
}) => {
  const [isStartingNewCase, setIsStartingNewCase] = useState(false);
  const canProceed = uploadedFiles.template && uploadedFiles.interview;

  const handleNewCase = async () => {
    if (window.confirm('Start a new case? This will backup and clear all files from the previous case.')) {
      setIsStartingNewCase(true);
      onAction('NEW_CASE');
      // Reset state after a short delay
      setTimeout(() => setIsStartingNewCase(false), 2000);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
        <FileText className="text-indigo-600" />
        Setup & File Selection
      </h2>

      {/* Venue Selector */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <VenueSelector
          onVenueChange={onVenueChange}
          disabled={isProcessing || stageStatus === StageStatus.COMPLETED}
        />
      </div>

      {/* New Project Banner - Shows when there's previous project data */}
      {hasExistingCase && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Archive className="text-blue-600" size={24} />
              <div>
                <p className="font-medium text-blue-800">Previous project data detected</p>
                <p className="text-sm text-blue-600">Start a new project to backup and clear previous files</p>
              </div>
            </div>
            <button
              onClick={handleNewCase}
              disabled={isStartingNewCase}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50"
            >
              {isStartingNewCase ? (
                <>
                  <RefreshCw className="animate-spin" size={18} />
                  Backing up...
                </>
              ) : (
                <>
                  <FolderPlus size={18} />
                  New Project
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Auto-Detection Status */}
      {detectionStatus && (
        <div className={`p-4 rounded-lg border ${
          detectionStatus.loading
            ? 'bg-blue-50 border-blue-200'
            : detectionStatus.detected.interview
              ? 'bg-green-50 border-green-200'
              : 'bg-amber-50 border-amber-200'
        }`}>
          <div className="flex items-center gap-2">
            {detectionStatus.loading ? (
              <>
                <Loader className="animate-spin text-blue-600" size={18} />
                <span className="text-blue-800 font-medium">Detecting files in Data folder...</span>
              </>
            ) : detectionStatus.detected.interview ? (
              <>
                <CheckCircle className="text-green-600" size={18} />
                <span className="text-green-800 font-medium">Files auto-detected!</span>
              </>
            ) : (
              <>
                <AlertCircle className="text-amber-600" size={18} />
                <span className="text-amber-800 font-medium">No files detected - upload manually</span>
              </>
            )}
            {onRefreshDetection && !detectionStatus.loading && (
              <button
                onClick={onRefreshDetection}
                className="ml-auto text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1"
              >
                <RefreshCw size={14} />
                Refresh
              </button>
            )}
          </div>

          {!detectionStatus.loading && detectionStatus.detected.interview && (
            <div className="mt-3 space-y-1 text-sm">
              <p className="text-green-700">
                <strong>Interview:</strong> {detectionStatus.detected.interview.filename}
              </p>
              {detectionStatus.detected.participantId && (
                <p className="text-green-700">
                  <strong>Participant ID:</strong> {detectionStatus.detected.participantId}
                </p>
              )}
              {detectionStatus.detected.template && (
                <p className="text-green-700">
                  <strong>Template:</strong> {detectionStatus.detected.template.filename}
                </p>
              )}
              {detectionStatus.detected.dataFile && (
                <p className="text-green-700">
                  <strong>Data File:</strong> {detectionStatus.detected.dataFile.filename}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-semibold text-slate-700">
          {detectionStatus?.detected.interview ? 'Detected Files' : 'Select Your Files'}
        </h3>
        <p className="text-sm text-slate-500">
          {detectionStatus?.detected.interview
            ? 'Files were automatically loaded from the Data folder. You can still upload different files if needed.'
            : 'Upload the required files to begin the paper generation process.'}
        </p>

        <div className="space-y-3">
          <FileUpload
            label="Template.txt (Required)"
            accept=".txt"
            required={true}
            file={uploadedFiles.template}
            onFileSelect={(file) => onFileChange('template', file)}
          />
          <FileUpload
            label="Interview transcript (Required)"
            accept=".txt"
            required={true}
            file={uploadedFiles.interview}
            onFileSelect={(file) => onFileChange('interview', file)}
          />
          <FileUpload
            label="Data file (Optional)"
            accept=".txt,.csv,.xlsx,.json"
            required={false}
            file={uploadedFiles.dataFile}
            onFileSelect={(file) => onFileChange('dataFile', file)}
          />
        </div>

        {uploadedFiles.participantId && (
          <div className="p-3 bg-indigo-50 rounded-lg">
            <p className="text-sm text-indigo-800">
              <strong>Participant ID:</strong> {uploadedFiles.participantId}
            </p>
          </div>
        )}

        <LogPanel logs={logs} height="h-32" />

        <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
          <button
            onClick={() => onAction('START_SETUP')}
            disabled={isProcessing || !canProceed}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            {isProcessing ? <RefreshCw className="animate-spin" size={18} /> : <Play size={18} />}
            Verify Files
          </button>
        </div>

        {!canProceed && !detectionStatus?.loading && (
          <p className="text-xs text-amber-600 text-center">
            Please upload the required files (template and interview) to proceed.
          </p>
        )}
      </div>

      {stageStatus === StageStatus.COMPLETED && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-semibold text-slate-700">Ready to Build</h3>
          <p className="text-sm text-slate-600">
            Setup verified. Click below to start building the research paper from the interview transcript.
          </p>
          <button
            onClick={() => onAction('START_BUILDER')}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            <Play size={18} />
            Start Building Paper
          </button>
        </div>
      )}

      {/* Dev/Test: Skip buttons */}
      <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3">
        <h3 className="font-semibold text-amber-800 text-sm">Testing Shortcuts</h3>
        <div className="flex gap-3">
          <button
            onClick={() => onAction('SKIP_TO_REVIEWER')}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Skip to Reviewer
          </button>
          <button
            onClick={() => onAction('SKIP_TO_SUPERVISOR')}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Skip to Supervisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupStage;
