import React, { useState } from 'react';
import { Stage, SimulationState, StageStatus } from '../types';
import {
  readOversightFile,
  getOversightProgression
} from '../services/fileService';
import {
  SetupStage,
  BuilderStage,
  ReviewerStage,
  SupervisorStage,
  ReviserStage,
  FinalizeStage
} from './dashboard';
import type { ReviewOutputFiles } from './dashboard';
import type { DetectionStatus } from '../hooks';

interface UploadedFiles {
  template?: File | null;
  interview?: File | null;
  dataFile?: File | null;
  participantId?: string;
}

interface DashboardPanelProps {
  state: SimulationState;
  isProcessing: boolean;
  onAction: (action: string, payload?: string) => void;
  uploadedFiles: UploadedFiles;
  onFileChange: (fileType: 'template' | 'interview' | 'dataFile', file: File | null) => void;
  detectionStatus?: DetectionStatus;
  onRefreshDetection?: () => void;
  onStageAbort?: (stage: Stage) => void;
  onStageRestart?: (stage: Stage) => void;
  filePrefix?: string;
  dataFileName?: string;
  dataFileContent?: string;
}

const DashboardPanel: React.FC<DashboardPanelProps> = ({
  state,
  isProcessing,
  onAction,
  uploadedFiles,
  onFileChange,
  detectionStatus,
  onRefreshDetection,
  onStageAbort,
  onStageRestart,
  filePrefix,
  dataFileName,
  dataFileContent
}) => {
  // State for files passed from Reviewer to Supervisor
  const [reviewOutputFiles, setReviewOutputFiles] = useState<ReviewOutputFiles | undefined>();

  // Handler for when user proceeds from Reviewer to Supervisor with files
  const handleProceedToSupervisor = (files: ReviewOutputFiles) => {
    setReviewOutputFiles(files);
    onAction('PROCEED_TO_SUPERVISOR');
  };
  const renderStageContent = () => {
    switch (state.currentStage) {
      case Stage.SETUP:
        // Check if there's existing case data (previous rounds, paper content, etc.)
        const hasExistingCase = state.rounds.length > 0 ||
                                state.currentPaperVersion > 0 ||
                                state.paperContent !== '';
        return (
          <SetupStage
            logs={state.logs}
            stageStatus={state.stages[Stage.SETUP]}
            isProcessing={isProcessing}
            uploadedFiles={uploadedFiles}
            onFileChange={onFileChange}
            onAction={onAction}
            detectionStatus={detectionStatus}
            onRefreshDetection={onRefreshDetection}
            hasExistingCase={hasExistingCase}
          />
        );

      case Stage.BUILDER:
        return (
          <BuilderStage
            logs={state.logs}
            isProcessing={isProcessing}
            isPartialPaper={state.isPartialPaper}
            currentBuilderStep={state.currentBuilderStep}
            paperContent={state.paperContent}
            onAbort={() => onStageAbort?.(Stage.BUILDER)}
            onRestart={() => onStageRestart?.(Stage.BUILDER)}
          />
        );

      case Stage.REVIEWER:
        const isReviewComplete = state.stages[Stage.REVIEWER] === StageStatus.COMPLETED;
        return (
          <ReviewerStage
            logs={state.logs}
            isProcessing={isProcessing}
            currentRound={state.currentRound}
            isComplete={isReviewComplete}
            onProceedToSupervisor={handleProceedToSupervisor}
            onAbort={() => onStageAbort?.(Stage.REVIEWER)}
            onRestart={() => onStageRestart?.(Stage.REVIEWER)}
            filePrefix={filePrefix}
          />
        );

      case Stage.SUPERVISOR:
        const oversightData = readOversightFile(state.currentRound);
        const allOversight = getOversightProgression();

        return (
          <SupervisorStage
            currentRound={state.currentRound}
            currentPaperVersion={state.currentPaperVersion}
            lastFeedback={state.lastFeedback}
            isProcessing={isProcessing}
            oversightData={oversightData}
            allOversight={allOversight}
            onAction={onAction}
            reviewOutputFiles={reviewOutputFiles}
          />
        );

      case Stage.REVISER:
        return (
          <ReviserStage
            logs={state.logs}
            isProcessing={isProcessing}
            currentPaperVersion={state.currentPaperVersion}
            paperContent={state.paperContent}
            onAbort={() => onStageAbort?.(Stage.REVISER)}
            onRestart={() => onStageRestart?.(Stage.REVISER)}
          />
        );

      case Stage.FINALIZE:
        return (
          <FinalizeStage
            logs={state.logs}
            currentRound={state.currentRound}
            currentPaperVersion={state.currentPaperVersion}
            filePrefix={filePrefix}
            dataAlert={state.dataAlert}
            dataFileName={dataFileName}
            dataFileContent={dataFileContent}
          />
        );

      default:
        return (
          <div className="flex items-center justify-center h-full text-slate-400">
            <p>Unknown stage: {state.currentStage}</p>
          </div>
        );
    }
  };

  return (
    <div className="h-full p-6 lg:p-10 overflow-y-auto bg-slate-50">
      {renderStageContent()}
    </div>
  );
};

export default DashboardPanel;
