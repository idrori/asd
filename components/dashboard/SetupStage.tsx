import React, { useState, useEffect } from 'react';
import { FileText, Play, RefreshCw, CheckCircle, AlertCircle, Loader, FolderPlus, Archive, Mic, Upload, Target } from 'lucide-react';
import { StageStatus } from '../../types';
import FileUpload from '../FileUpload';
import LogPanel from './LogPanel';
import { DetectionStatus } from '../../hooks';
import VenueSelector from '../VenueSelector';
import { loadVenuePrompt, setCurrentVenue } from '../../services/venueService';
import type { VenueId } from '../../types/venue';

interface UploadedFiles {
  template?: File | null;
  interview?: File | null;
  dataFile?: File | null;
  participantId?: string;
}

type SourceType = 'voice-interview' | 'transcript-upload';

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
  onNewInterview?: () => void;
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
  onVenueChange,
  onNewInterview
}) => {
  const [isStartingNewCase, setIsStartingNewCase] = useState(false);
  const [sourceType, setSourceType] = useState<SourceType | null>(null);
  const [selectedVenueId, setSelectedVenueId] = useState<VenueId | null>(null);
  const [templateLoaded, setTemplateLoaded] = useState(false);
  const [templateLoading, setTemplateLoading] = useState(false);
  const [templateError, setTemplateError] = useState<string | null>(null);

  // Auto-load template when venue changes
  useEffect(() => {
    if (selectedVenueId) {
      setTemplateLoading(true);
      setTemplateError(null);
      setCurrentVenue(selectedVenueId);

      loadVenuePrompt('template')
        .then(async (templateContent) => {
          // Create a File object from the template content
          const blob = new Blob([templateContent], { type: 'text/plain' });
          const file = new File([blob], `${selectedVenueId}_template.txt`, { type: 'text/plain' });
          onFileChange('template', file);
          setTemplateLoaded(true);
          setTemplateLoading(false);
        })
        .catch((error) => {
          console.error('Failed to load template:', error);
          setTemplateError('Template not available for this venue');
          setTemplateLoading(false);
        });
    }
  }, [selectedVenueId, onFileChange]);

  const handleVenueChange = (venueId: VenueId) => {
    setSelectedVenueId(venueId);
    setTemplateLoaded(false);
    onVenueChange?.(venueId);
  };

  const handleSourceSelect = (type: SourceType) => {
    setSourceType(type);
    if (type === 'voice-interview' && onNewInterview) {
      onNewInterview();
    }
  };

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
    <div className="w-full px-6 mt-6">
      {/* New Project Banner - Shows when there's previous project data */}
      {hasExistingCase && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6 max-w-4xl mx-auto">
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

      {/* Two-Column Layout: Source (left) and Target (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* SOURCE Section (Left) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
            <Upload className="text-emerald-600" />
            Source
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Choose how to provide your research content
          </p>

          {/* Source Type Selection */}
          <div className="space-y-4">
            {/* Voice Interview Option */}
            <button
              onClick={() => handleSourceSelect('voice-interview')}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                sourceType === 'voice-interview'
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${sourceType === 'voice-interview' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Mic size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Voice Interview</h3>
                  <p className="text-sm text-slate-500">Record a live interview session</p>
                </div>
                {sourceType === 'voice-interview' && (
                  <CheckCircle className="ml-auto text-emerald-500" size={24} />
                )}
              </div>
            </button>

            {/* Interview Transcript Upload Option */}
            <button
              onClick={() => setSourceType('transcript-upload')}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                sourceType === 'transcript-upload'
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-slate-200 hover:border-purple-300 hover:bg-purple-50/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${sourceType === 'transcript-upload' ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Interview Transcript</h3>
                  <p className="text-sm text-slate-500">Upload an existing transcript file</p>
                </div>
                {sourceType === 'transcript-upload' && (
                  <CheckCircle className="ml-auto text-purple-500" size={24} />
                )}
              </div>
            </button>
          </div>

          {/* File Upload Section - Shows when transcript-upload is selected */}
          {sourceType === 'transcript-upload' && (
            <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
              <FileUpload
                label="Interview Transcript"
                accept=".txt"
                required={true}
                file={uploadedFiles.interview}
                onFileSelect={(file) => onFileChange('interview', file)}
              />
              <FileUpload
                label="Data File (Optional)"
                accept=".txt,.csv,.xlsx,.json"
                required={false}
                file={uploadedFiles.dataFile}
                onFileSelect={(file) => onFileChange('dataFile', file)}
              />
            </div>
          )}

          {/* Auto-Detection Status */}
          {detectionStatus && detectionStatus.detected.interview && (
            <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={18} />
                <span className="text-green-800 font-medium">Files auto-detected!</span>
              </div>
              <div className="mt-2 text-sm text-green-700">
                <p><strong>Interview:</strong> {detectionStatus.detected.interview.filename}</p>
                {detectionStatus.detected.participantId && (
                  <p><strong>Participant ID:</strong> {detectionStatus.detected.participantId}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* TARGET Section (Right) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
            <Target className="text-indigo-600" />
            Target
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Select your target venue - template will load automatically
          </p>

          {/* Venue Selector */}
          <VenueSelector
            onVenueChange={handleVenueChange}
            disabled={isProcessing || stageStatus === StageStatus.COMPLETED}
          />

          {/* Template Loading Status */}
          {selectedVenueId && (
            <div className="mt-6 p-4 rounded-lg border border-slate-200 bg-slate-50">
              <h4 className="font-medium text-slate-700 mb-2">Template Status</h4>
              {templateLoading ? (
                <div className="flex items-center gap-2 text-blue-600">
                  <Loader className="animate-spin" size={18} />
                  <span>Loading template...</span>
                </div>
              ) : templateLoaded ? (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={18} />
                  <span>Template loaded: {uploadedFiles.template?.name}</span>
                </div>
              ) : templateError ? (
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertCircle size={18} />
                  <span>{templateError}</span>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* Action Section */}
      <div className="max-w-6xl mx-auto mt-8">
        {uploadedFiles.participantId && (
          <div className="p-3 bg-indigo-50 rounded-lg mb-4">
            <p className="text-sm text-indigo-800">
              <strong>Participant ID:</strong> {uploadedFiles.participantId}
            </p>
          </div>
        )}

        <LogPanel logs={logs} height="h-32" />

        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={() => onAction('START_SETUP')}
            disabled={isProcessing || !canProceed}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            {isProcessing ? <RefreshCw className="animate-spin" size={18} /> : <Play size={18} />}
            Verify Files
          </button>
        </div>

        {!canProceed && (
          <p className="text-xs text-amber-600 text-center mt-4">
            Please select a source and target venue to proceed.
          </p>
        )}

        {stageStatus === StageStatus.COMPLETED && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 mt-6">
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
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3 mt-6">
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
    </div>
  );
};

export default SetupStage;
