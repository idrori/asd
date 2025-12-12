import React, { useState, useEffect, useCallback } from 'react';
import Sidebar, { PaperMode } from './components/Sidebar';
import DashboardPanel from './components/DashboardPanel';
import { Stage } from './types';
import {
  useSimulationState,
  useFileUpload,
  useIcisWorkflow,
  DataFileConfirmCallback
} from './hooks';
import { setPaperMode } from './services/geminiService';

const App: React.FC = () => {
  // Paper mode state (draft = fast models, research = powerful models)
  const [paperMode, setPaperModeState] = useState<PaperMode>('research');

  // Update gemini service when mode changes
  const handlePaperModeChange = useCallback((mode: PaperMode) => {
    setPaperModeState(mode);
    setPaperMode(mode);
    console.log(`[App] Paper mode changed to: ${mode}`);
  }, []);
  // State management hooks
  const {
    simulationState,
    setStageStatus,
    setBuilderStep,
    addLog,
    moveToStage,
    updateState,
    addRound,
    updateLastRound,
    resetStageData,
    setParticipantId,
    getFilePrefix,
    resetAllState
  } = useSimulationState();

  const {
    uploadedFiles,
    handleFileChange,
    getInterviewContent,
    detectionStatus,
    refreshDetection
  } = useFileUpload();

  // Data file confirmation callback - shows preview and asks user to confirm
  const handleDataFileConfirm: DataFileConfirmCallback = useCallback(async (preview) => {
    const message = `Data File Verification

File: ${preview.filename}
Total lines: ${preview.totalLines}

First line (column headers):
${preview.firstLine}

Is this the correct data file for your analysis?`;

    // Use window.confirm for simple confirmation
    // Could be replaced with a proper modal dialog for better UX
    return window.confirm(message);
  }, []);

  // Workflow hook - manages all stage logic
  const {
    isProcessing,
    handleStageAction,
    handleWorkflowAction
  } = useIcisWorkflow({
    simulationState,
    setStageStatus,
    setBuilderStep,
    addLog,
    moveToStage,
    updateState,
    addRound,
    updateLastRound,
    resetStageData,
    resetAllState,
    uploadedFiles,
    getInterviewContent,
    refreshDetection,
    onDataFileConfirm: handleDataFileConfirm
  });

  // Update participantId when files are uploaded
  useEffect(() => {
    if (uploadedFiles.participantId && uploadedFiles.participantId !== simulationState.participantId) {
      setParticipantId(uploadedFiles.participantId);
      addLog(`Participant ID set: ${uploadedFiles.participantId}`);
    }
  }, [uploadedFiles.participantId, simulationState.participantId, setParticipantId, addLog]);

  // Handler for stage abort
  const handleStageAbort = (stage: Stage) => {
    addLog(`Aborting ${stage}...`);
    handleStageAction(stage, 'abort');
  };

  // Handler for stage restart
  const handleStageRestart = (stage: Stage) => {
    addLog(`Restarting ${stage}...`);
    handleStageAction(stage, 'restart');
    // Re-trigger the stage start after a short delay
    setTimeout(() => handleStageAction(stage, 'start'), 100);
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <div className="w-80 flex-shrink-0 h-full">
        <Sidebar
          currentStage={simulationState.currentStage}
          currentBuilderStep={simulationState.currentBuilderStep}
          stagesState={simulationState.stages}
          isPartialPaper={simulationState.isPartialPaper}
          currentRound={simulationState.currentRound}
          isProcessing={isProcessing}
          onStageClick={moveToStage}
          onStageAction={handleStageAction}
          onNewCase={() => handleWorkflowAction('NEW_CASE')}
          onNewInterview={() => {
            window.open('/interview.html', '_blank', 'noopener,noreferrer');
          }}
          paperMode={paperMode}
          onPaperModeChange={handlePaperModeChange}
        />
      </div>
      <div className="flex-1 h-full">
        <DashboardPanel
          state={simulationState}
          isProcessing={isProcessing}
          onAction={handleWorkflowAction}
          uploadedFiles={uploadedFiles}
          onFileChange={handleFileChange}
          detectionStatus={detectionStatus}
          onRefreshDetection={refreshDetection}
          onStageAbort={handleStageAbort}
          onStageRestart={handleStageRestart}
          filePrefix={getFilePrefix()}
        />
      </div>
    </div>
  );
};

export default App;
