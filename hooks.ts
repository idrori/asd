/**
 * React Hooks for ICIScopilot1
 */

import { useState, useCallback, useEffect } from 'react';
import {
  Stage,
  StageStatus,
  BuilderStep,
  SimulationState,
  RoundScore,
  FileVerification,
  INITIAL_STATE
} from './types';
import { clearAllFiles, writePaperFile, writeOversightFile, writeFeedbackFile, readPaperFile, appendSupervisorDirectives, writeSupervisorDecision } from './services/fileService';
import { backupAndClearFiles, savePaperFile, refreshManifest, uploadDataFileToCloud, getCloudDataFile } from './services/fileApi';
import { runBuilder, runReviewer, runReviser } from './services/geminiService';

// ============================================================================
// File Detection Types
// ============================================================================

export interface DetectedFiles {
  interview: { filename: string; path: string } | null;
  template: { filename: string; path: string } | null;
  dataFile: { filename: string; path: string } | null;
  participantId: string | null;
  participantEmail: string | null;  // Original email for blob storage
}

// Base path for data files - served by backend server (port 3001) from icis/Data folder
// The backend server.cjs serves /Data/* from the icis/Data directory
const DATA_BASE_PATH = 'http://localhost:3001/Data';

// ============================================================================
// useSimulationState - Main application state management
// ============================================================================

export function useSimulationState() {
  const [simulationState, setSimulationState] = useState<SimulationState>(INITIAL_STATE);

  const setStageStatus = useCallback((stage: Stage, status: StageStatus) => {
    setSimulationState(prev => ({
      ...prev,
      stages: {
        ...prev.stages,
        [stage]: status
      }
    }));
  }, []);

  const setBuilderStep = useCallback((step: BuilderStep | undefined) => {
    setSimulationState(prev => ({
      ...prev,
      currentBuilderStep: step
    }));
  }, []);

  const addLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setSimulationState(prev => ({
      ...prev,
      logs: [...prev.logs, `[${timestamp}] ${message}`]
    }));
  }, []);

  const moveToStage = useCallback((stage: Stage) => {
    setSimulationState(prev => ({
      ...prev,
      currentStage: stage,
      stages: {
        ...prev.stages,
        [stage]: StageStatus.ACTIVE
      }
    }));
  }, []);

  const updateState = useCallback((updates: Partial<SimulationState>) => {
    setSimulationState(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  const addRound = useCallback((round: RoundScore) => {
    setSimulationState(prev => ({
      ...prev,
      rounds: [...prev.rounds, round],
      currentRound: round.roundId
    }));
  }, []);

  const updateLastRound = useCallback((updates: Partial<RoundScore>) => {
    setSimulationState(prev => {
      if (prev.rounds.length === 0) return prev;
      const rounds = [...prev.rounds];
      rounds[rounds.length - 1] = { ...rounds[rounds.length - 1], ...updates };
      return { ...prev, rounds };
    });
  }, []);

  const resetStageData = useCallback((stage: Stage) => {
    setSimulationState(prev => ({
      ...prev,
      stages: {
        ...prev.stages,
        [stage]: StageStatus.PENDING
      }
    }));
  }, []);

  const setParticipantId = useCallback((participantId: string) => {
    setSimulationState(prev => ({
      ...prev,
      participantId
    }));
  }, []);

  // Get file prefix for naming: participantId_timestamp
  const getFilePrefix = useCallback(() => {
    return `${simulationState.participantId}_${simulationState.sessionTimestamp}`;
  }, [simulationState.participantId, simulationState.sessionTimestamp]);

  // Reset all state to initial values for a new case
  const resetAllState = useCallback(async () => {
    // 1. Backup and clear server files (Paper/*.tex, Data/oversight*, etc.)
    try {
      const backupResult = await backupAndClearFiles();
      if (backupResult.success) {
        console.log(`Backed up ${backupResult.backedUpFiles?.length || 0} files to ${backupResult.backupDir}`);
      } else {
        console.warn('Backup failed:', backupResult.error);
      }
    } catch (error) {
      console.warn('Backup not available:', error);
    }

    // 2. Clear localStorage files (oversight, feedback, paper versions) from previous case
    // This ensures supervisor dashboard doesn't show V2 scores from previous cases
    clearAllFiles();

    // 3. Generate new session timestamp
    const newTimestamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '_').substring(0, 15);
    setSimulationState({
      ...INITIAL_STATE,
      sessionTimestamp: newTimestamp,
      logs: [`[${new Date().toLocaleTimeString()}] New case started - previous files backed up and cleared`]
    });
  }, []);

  return {
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
  };
}

// ============================================================================
// useFileUpload - File handling for interview and data files
// ============================================================================

export interface UploadedFiles {
  interview?: File;
  template?: File;
  dataFile?: File;
  interviewContent?: string;
  templateContent?: string;
  dataFileContent?: string;
  participantId?: string;
  participantEmail?: string | null;  // Original email for blob storage
}

export interface DetectionStatus {
  loading: boolean;
  error: string | null;
  detected: DetectedFiles;
}

export function useFileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({});
  const [detectionStatus, setDetectionStatus] = useState<DetectionStatus>({
    loading: true,
    error: null,
    detected: { interview: null, template: null, dataFile: null, participantId: null, participantEmail: null }
  });

  // Auto-detect files from manifest on mount
  useEffect(() => {
    autoDetectFiles();
  }, []);

  const autoDetectFiles = async () => {
    setDetectionStatus(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Fetch manifest from Data folder with cache-busting to ensure fresh data
      const cacheBuster = `?t=${Date.now()}`;
      const manifestResponse = await fetch(`${DATA_BASE_PATH}/manifest.json${cacheBuster}`, {
        cache: 'no-store'
      });
      if (!manifestResponse.ok) {
        throw new Error('No manifest.json found in Data folder');
      }

      const manifest = await manifestResponse.json();
      const detected: DetectedFiles = {
        interview: null,
        template: null,
        dataFile: null,
        participantId: null
      };

      // Process manifest files
      for (const file of manifest.files || []) {
        const path = `${DATA_BASE_PATH}/${file.filename}`;
        if (file.type === 'interview') {
          detected.interview = { filename: file.filename, path };
          detected.participantId = file.participantId || null;
        } else if (file.type === 'template') {
          detected.template = { filename: file.filename, path };
        } else if (file.type === 'dataFile') {
          detected.dataFile = { filename: file.filename, path };
        }
      }

      setDetectionStatus({ loading: false, error: null, detected });

      // Auto-load detected files
      if (detected.interview) {
        await loadFileFromPath('interview', detected.interview.path, detected.interview.filename, detected.participantId);
      }
      if (detected.template) {
        await loadFileFromPath('template', detected.template.path, detected.template.filename);
      }
      if (detected.dataFile) {
        await loadFileFromPath('dataFile', detected.dataFile.path, detected.dataFile.filename);
      }

    } catch (error) {
      console.log('Auto-detection not available, manual upload required:', error);
      setDetectionStatus({
        loading: false,
        error: 'Auto-detection not available. Please upload files manually.',
        detected: { interview: null, template: null, dataFile: null, participantId: null, participantEmail: null }
      });
    }
  };

  const loadFileFromPath = async (
    fileType: 'interview' | 'template' | 'dataFile',
    filePath: string,
    filename: string,
    participantId?: string | null
  ) => {
    try {
      // Add cache-busting timestamp to prevent stale file issues
      const cacheBuster = `?t=${Date.now()}`;
      const response = await fetch(filePath + cacheBuster, {
        cache: 'no-store'  // Force fresh fetch, no caching
      });
      if (!response.ok) {
        console.warn(`Failed to load ${filename}`);
        return;
      }

      const content = await response.text();
      const blob = new Blob([content], { type: 'text/plain' });
      const file = new File([blob], filename, { type: 'text/plain' });

      if (fileType === 'interview') {
        setUploadedFiles(prev => ({
          ...prev,
          interview: file,
          interviewContent: content,
          participantId: participantId || prev.participantId
        }));
      } else if (fileType === 'template') {
        setUploadedFiles(prev => ({
          ...prev,
          template: file,
          templateContent: content
        }));
      } else {
        setUploadedFiles(prev => ({
          ...prev,
          dataFile: file,
          dataFileContent: content
        }));
      }

      console.log(`Auto-loaded: ${filename}`);
    } catch (error) {
      console.warn(`Error loading ${filename}:`, error);
    }
  };

  const handleFileChange = useCallback(async (
    fileType: 'interview' | 'template' | 'dataFile',
    file: File | null
  ) => {
    if (!file) {
      setUploadedFiles(prev => {
        const updated = { ...prev };
        delete updated[fileType];
        if (fileType === 'interview') {
          delete updated.interviewContent;
        }
        return updated;
      });
      return;
    }

    // Read file content for interview
    if (fileType === 'interview') {
      const content = await file.text();
      // Extract participant ID from filename or content
      let participantId = file.name.replace(/\.txt$/i, '').replace(/^INTERVIEW_?/i, '');
      let participantEmail: string | null = null;
      // Try to extract email from content (for blob storage)
      const emailMatch = content.match(/Participant\s*[Ee]mail[:\s]+([^\s\n]+@[^\s\n]+)/i) ||
                        content.match(/Email[:\s]+([^\s\n]+@[^\s\n]+)/i);
      if (emailMatch) {
        participantEmail = emailMatch[1].trim();
        participantId = participantEmail.replace(/@/g, '_').replace(/\./g, '_');
      }
      setUploadedFiles(prev => ({
        ...prev,
        interview: file,
        interviewContent: content,
        participantId,
        participantEmail
      }));
    } else if (fileType === 'template') {
      const content = await file.text();
      setUploadedFiles(prev => ({
        ...prev,
        template: file,
        templateContent: content
      }));
    } else {
      const content = await file.text();
      setUploadedFiles(prev => ({
        ...prev,
        dataFile: file,
        dataFileContent: content
      }));

      // Also upload to cloud storage for cloud-only mode
      console.log('[handleFileChange] Uploading data file to cloud storage...');
      const cloudResult = await uploadDataFileToCloud(file);
      if (cloudResult.success) {
        console.log('[handleFileChange] Cloud upload success:', cloudResult.blobUrl);
      } else {
        console.warn('[handleFileChange] Cloud upload failed:', cloudResult.error);
      }
    }
  }, []);

  const getInterviewContent = useCallback((): string => {
    return uploadedFiles.interviewContent || '';
  }, [uploadedFiles.interviewContent]);

  const getDataFileContent = useCallback((): string => {
    return uploadedFiles.dataFileContent || '';
  }, [uploadedFiles.dataFileContent]);

  const getDataFileName = useCallback((): string => {
    return uploadedFiles.dataFile?.name || '';
  }, [uploadedFiles.dataFile]);

  const refreshDetection = useCallback(async () => {
    await autoDetectFiles();
  }, []);

  // Get participant email for blob storage
  const getParticipantEmail = useCallback(() => {
    return uploadedFiles.participantEmail || null;
  }, [uploadedFiles.participantEmail]);

  return {
    uploadedFiles,
    handleFileChange,
    getInterviewContent,
    getDataFileContent,
    getDataFileName,
    getParticipantEmail,
    detectionStatus,
    refreshDetection
  };
}

// ============================================================================
// useIcisWorkflow - Workflow orchestration
// ============================================================================

/**
 * Callback type for data file confirmation
 * Shows preview to user and returns true if confirmed, false to cancel
 */
export type DataFileConfirmCallback = (preview: {
  filename: string;
  firstLine: string;
  totalLines: number;
}) => Promise<boolean>;

interface WorkflowHookParams {
  simulationState: SimulationState;
  setStageStatus: (stage: Stage, status: StageStatus) => void;
  setBuilderStep: (step: BuilderStep | undefined) => void;
  addLog: (message: string) => void;
  moveToStage: (stage: Stage) => void;
  updateState: (updates: Partial<SimulationState>) => void;
  addRound: (round: RoundScore) => void;
  updateLastRound: (updates: Partial<RoundScore>) => void;
  resetStageData: (stage: Stage) => void;
  resetAllState?: () => void;  // Optional reset function for new case
  uploadedFiles: UploadedFiles;
  getInterviewContent: () => string;
  refreshDetection?: () => Promise<void>;  // Re-detect files from manifest (async)
  onDataFileConfirm?: DataFileConfirmCallback;  // Callback to confirm data file before analysis
}

export function useIcisWorkflow(params: WorkflowHookParams) {
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
    resetAllState,
    uploadedFiles,
    getInterviewContent,
    refreshDetection,
    onDataFileConfirm
  } = params;

  const [isProcessing, setIsProcessing] = useState(false);

  // Builder steps in order
  const builderSteps: BuilderStep[] = [
    BuilderStep.STEP1_INTERVIEW_ANALYSIS,
    BuilderStep.STEP1_5_DATA_ASSESSMENT,
    BuilderStep.STEP2_RESEARCH_PLANNING,
    BuilderStep.STEP2_FINAL_METADATA,
    BuilderStep.STEP3_MATH_FORMULATION,
    BuilderStep.STEP4_IMPLEMENTATION,
    BuilderStep.STEP5_EXECUTION,
    BuilderStep.STEP6_VISUALIZATION,
    BuilderStep.STEP7_ANALYSIS,
    BuilderStep.STEP8_PAPER_WRITING,
    BuilderStep.STEP9_FINAL_SUBMISSION
  ];

  // Process reviewer stage using real Gemini review
  // roundOverride allows passing the correct round when called from Reviser (due to async state updates)
  const processReviewer = useCallback(async (roundOverride?: number) => {
    const currentRound = roundOverride ?? simulationState.currentRound;
    addLog(`Reviewer: Starting review process with Gemini (Round ${currentRound})...`);
    setStageStatus(Stage.REVIEWER, StageStatus.ACTIVE);

    try {
      // Get paper content from state, or fallback to localStorage
      let paperContent = simulationState.paperContent;

      if (!paperContent) {
        // Try to read from localStorage
        const paperVersion = simulationState.currentPaperVersion || 1;
        addLog(`Reviewer: Paper not in state, reading from localStorage (v${paperVersion})...`);
        paperContent = readPaperFile(paperVersion) || '';

        // Update state with the loaded content
        if (paperContent) {
          updateState({ paperContent });
          addLog('Reviewer: Paper loaded from localStorage');
        }
      }

      if (!paperContent) {
        addLog('Reviewer: ERROR - No paper content available in state or localStorage');
        setStageStatus(Stage.REVIEWER, StageStatus.ERROR);
        return;
      }

      const paperId = simulationState.participantId || 'icis_paper';
      const version = currentRound;

      addLog('Reviewer: Analyzing paper with Gemini...');

      // Get interview content for trustworthiness assessment (author's perspective)
      const interviewContent = getInterviewContent();
      if (interviewContent) {
        addLog('Reviewer: Interview content available for trustworthiness assessment');
      }

      // Call real Gemini reviewer - this generates oversight and feedback files internally
      // Pass interview content for proper trustworthiness assessment from author's perspective
      const reviewResult = await runReviewer(paperContent, version, paperId, interviewContent);

      addLog(`Reviewer: Analysis complete - Average score: ${((reviewResult.novelty + reviewResult.significance + reviewResult.methodologicalRigor + reviewResult.clarity + reviewResult.relevance) / 5).toFixed(1)}/5`);

      // The runReviewer function saves files to the backend, but we also need localStorage
      // for the UI components to read. Create the data structures:
      const oversightData = {
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
        averageScore: (reviewResult.novelty + reviewResult.significance + reviewResult.methodologicalRigor + reviewResult.clarity + reviewResult.relevance) / 5,
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

      const feedbackData = {
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

      // Save to localStorage so ReviewerStage UI can find them
      writeOversightFile(oversightData);
      writeFeedbackFile(feedbackData);
      addLog('Reviewer: Saved oversight and feedback files');

      // Add round data so Reviser can access the feedback
      addRound({
        roundId: version,
        reviewScore: oversightData.averageScore,
        reliabilityScore: reviewResult.trustworthiness.reliability,
        alignmentScore: reviewResult.trustworthiness.goalAlignment,
        errorsDetected: reviewResult.majorConcerns.length + reviewResult.minorCorrections.length,
        reviewScores: oversightData.reviewScores,
        trustworthinessScores: reviewResult.trustworthiness,
        errorCounts: oversightData.errorCounts,
        constructiveFeedback: reviewResult.overallAssessment,
        feedback: reviewResult.overallAssessment,  // Used by Reviser
        criticalAlerts: reviewResult.criticalAlerts.map(a => a.title)
      });

      // Mark as complete
      addLog('Reviewer: Review complete! Proceed to Supervisor for decision.');
      setStageStatus(Stage.REVIEWER, StageStatus.COMPLETED);

    } catch (error) {
      addLog(`Reviewer: ERROR - ${(error as Error).message}`);
      setStageStatus(Stage.REVIEWER, StageStatus.ERROR);
    }
  }, [setStageStatus, addLog, addRound, updateState, simulationState.currentRound, simulationState.participantId, simulationState.paperContent]);

  // Process a stage (simulation for testing - replace with actual AI calls)
  // overrideParam is used to pass values directly to avoid race conditions:
  // - For BUILDER stage: data file name
  // - For REVISER stage: supervisor comment
  const processStage = useCallback(async (stage: Stage, overrideParam?: string): Promise<void> => {
    switch (stage) {
      case Stage.SETUP:
        // Verify files
        await new Promise(resolve => setTimeout(resolve, 500));
        const files: FileVerification = {
          interview: !!uploadedFiles.interview,
          template: true,
          examples: true,
          dataFile: !!uploadedFiles.dataFile,
          paperPdf: false
        };
        updateState({ files });
        addLog('Setup: Files verified successfully');
        break;

      case Stage.BUILDER:
        // Use real Gemini builder to generate paper
        addLog('Builder: Starting paper generation with Gemini...');

        try {
          // Get interview content
          const interviewContent = getInterviewContent();
          if (!interviewContent) {
            addLog('Builder: ERROR - No interview content available');
            setStageStatus(Stage.BUILDER, StageStatus.ERROR);
            return;
          }

          // Use overrideParam as dataFileName if provided (avoids React state race condition)
          // Otherwise fall back to uploadedFiles.dataFile?.name
          console.log(`[processStage BUILDER] overrideParam="${overrideParam}", uploadedFiles.dataFile?.name="${uploadedFiles.dataFile?.name}"`);
          const dataFileName = overrideParam || uploadedFiles.dataFile?.name;
          const isPartial = !dataFileName;
          addLog(`Builder: Mode - ${isPartial ? 'Partial paper (no data)' : 'Full paper with data'}`);
          if (dataFileName) {
            addLog(`Builder: Data file - ${dataFileName}`);
          } else {
            addLog('Builder: WARNING - No data file name available');
          }

          // Progress callback to update UI
          const onProgress = (sectionName: string, status: string) => {
            if (status === 'starting') {
              addLog(`Builder: Generating ${sectionName}...`);
            } else if (status === 'completed') {
              addLog(`Builder: ${sectionName} complete`);
            } else if (status === 'error') {
              addLog(`Builder: ${sectionName} - error (continuing)`);
            }
          };

          // Generate paper using Gemini (with visualizations if data file available)
          const builderResult = await runBuilder(interviewContent, isPartial, onProgress, dataFileName, onDataFileConfirm);

          // Log data summary if available
          if (builderResult.dataSummary) {
            addLog('Builder: Data Analysis Summary:');
            addLog(builderResult.dataSummary.substring(0, 500) + (builderResult.dataSummary.length > 500 ? '...' : ''));
          }

          // Log data alert if any
          if (builderResult.dataAlert) {
            addLog(builderResult.dataAlert);
          }
          if (builderResult.usedSyntheticData) {
            addLog('Builder: NOTE - Synthetic/AI-generated data was used for visualizations');
          }

          // Save paper to both state and localStorage (for Reviewer to access)
          updateState({
            paperContent: builderResult.paperContent,
            currentPaperVersion: 1,
            dataAlert: builderResult.dataAlert,  // Store alert for supervisor
            dataSummary: builderResult.dataSummary  // Store data summary for supervisor
          });

          // Write to localStorage so Reviewer stage can find it
          writePaperFile(1, builderResult.paperContent);

          // Also save to backend filesystem
          const prefix = simulationState.participantId ?
            `${simulationState.participantId}_${simulationState.sessionTimestamp}` : '';
          const filename = prefix ? `${prefix}_icis_paper_v1.tex` : 'icis_paper_v1.tex';
          await savePaperFile(filename, builderResult.paperContent);

          addLog('Builder: Paper generation complete - saved to localStorage and filesystem');

          // Auto-proceed to Reviewer
          setStageStatus(Stage.BUILDER, StageStatus.COMPLETED);
          moveToStage(Stage.REVIEWER);
          // Start reviewer after short delay
          setTimeout(() => processReviewer(), 500);

        } catch (error) {
          addLog(`Builder: ERROR - ${(error as Error).message}`);
          setStageStatus(Stage.BUILDER, StageStatus.ERROR);
        }
        break;

      case Stage.REVIEWER:
        await processReviewer();
        break;

      case Stage.SUPERVISOR:
        // Supervisor is a human decision stage - just mark as active and wait for user input
        addLog('Supervisor: Awaiting human review and decision...');
        setStageStatus(Stage.SUPERVISOR, StageStatus.ACTIVE);
        // Supervisor stage doesn't auto-complete - user must choose 'revise' or 'finalize'
        return;

      case Stage.FINALIZE:
        // Finalize stage - trigger PDF compilation
        addLog('Finalize: Preparing final submission...');
        setStageStatus(Stage.FINALIZE, StageStatus.ACTIVE);
        // The FinalizeStage component handles the actual compilation
        // Just mark as active here so the UI knows to show the finalize panel
        return;

      case Stage.REVISER:
        addLog('Reviser: Starting revision with Gemini...');
        console.log('[Workflow] REVISER stage starting');
        setStageStatus(Stage.REVISER, StageStatus.ACTIVE);

        try {
          // Get current paper content from state, or fallback to localStorage
          let currentPaper = simulationState.paperContent;
          console.log(`[Workflow] Paper in state: ${currentPaper ? currentPaper.length + ' chars' : 'none'}`);

          if (!currentPaper) {
            // Try to read from localStorage
            const version = simulationState.currentPaperVersion || 1;
            addLog(`Reviser: Paper not in state, reading from localStorage (v${version})...`);
            currentPaper = readPaperFile(version) || '';

            if (currentPaper) {
              updateState({ paperContent: currentPaper });
              addLog('Reviser: Paper loaded from localStorage');
              console.log(`[Workflow] Paper loaded from localStorage: ${currentPaper.length} chars`);
            }
          }

          if (!currentPaper) {
            addLog('Reviser: ERROR - No paper content available in state or localStorage');
            setStageStatus(Stage.REVISER, StageStatus.ERROR);
            return;
          }

          // Get the latest feedback from state (rounds array has supervisor decisions)
          const latestRound = simulationState.rounds[simulationState.rounds.length - 1];
          const feedback = latestRound?.feedback || 'Improve clarity and strengthen methodology.';
          // Use override if provided (to avoid race condition with async state updates)
          // Otherwise fall back to state, then to default
          const supervisorComment = overrideParam || latestRound?.supervisorComment || 'Please address the reviewer concerns.';

          console.log(`[Workflow] Feedback: ${feedback.substring(0, 100)}...`);
          console.log(`[Workflow] Supervisor comment (${overrideParam ? 'from override' : 'from state'}): ${supervisorComment.substring(0, 100)}...`);
          addLog('Reviser: Analyzing feedback and generating revisions...');
          addLog(`Reviser: Paper size: ${currentPaper.length} chars, calling Gemini...`);

          // Get data file name for potential visualization updates
          const dataFileName = uploadedFiles.dataFile?.name;

          // Progress callback for reviser
          const onReviserProgress = (message: string) => {
            addLog(`Reviser: ${message}`);
          };

          // Call real Gemini reviser (with visualization support)
          console.log('[Workflow] Calling runReviser...');
          const reviserResult = await runReviser(currentPaper, feedback, supervisorComment, dataFileName, onReviserProgress);
          console.log(`[Workflow] runReviser completed, result: ${reviserResult.paperContent?.length || 0} chars`);

          // Log data alert if any
          if (reviserResult.dataAlert) {
            addLog(reviserResult.dataAlert);
          }
          if (reviserResult.usedSyntheticData) {
            addLog('Reviser: NOTE - Synthetic/AI-generated data was used for visualizations');
          }

          const newVersion = simulationState.currentPaperVersion + 1;

          // Update state with revised paper
          updateState({
            paperContent: reviserResult.paperContent,
            currentPaperVersion: newVersion,
            dataAlert: reviserResult.dataAlert || simulationState.dataAlert  // Keep existing or update
          });

          // Save revised paper to localStorage
          writePaperFile(newVersion, reviserResult.paperContent);

          // Save to backend filesystem
          const prefix = simulationState.participantId ?
            `${simulationState.participantId}_${simulationState.sessionTimestamp}` : '';
          const filename = prefix ? `${prefix}_icis_paper_v${newVersion}.tex` : `icis_paper_v${newVersion}.tex`;
          await savePaperFile(filename, reviserResult.paperContent);

          addLog(`Reviser: Revision complete - Version ${newVersion} saved`);

          // Auto-proceed to Reviewer for another round
          const nextRound = simulationState.currentRound + 1;
          setStageStatus(Stage.REVISER, StageStatus.COMPLETED);
          moveToStage(Stage.REVIEWER);
          updateState({ currentRound: nextRound });
          // Pass the new round number directly to avoid stale state issues
          setTimeout(() => processReviewer(nextRound), 500);

        } catch (error) {
          addLog(`Reviser: ERROR - ${(error as Error).message}`);
          setStageStatus(Stage.REVISER, StageStatus.ERROR);
        }
        break;

      default:
        break;
    }
  }, [uploadedFiles.interview, uploadedFiles.dataFile, updateState, addLog, setBuilderStep, setStageStatus, moveToStage, processReviewer, simulationState.currentPaperVersion, simulationState.currentRound, simulationState.dataAlert, onDataFileConfirm]);

  // Handle stage actions (start, abort, restart, skip)
  // overrideParam is passed directly to avoid race condition with async state updates
  // For BUILDER: data file name, For REVISER: supervisor comment
  const handleStageAction = useCallback(async (
    stage: Stage,
    action: 'start' | 'abort' | 'restart' | 'skip',
    overrideParam?: string
  ) => {
    addLog(`Stage ${stage}: ${action}`);
    console.log(`[handleStageAction] Stage ${stage} action=${action} overrideParam="${overrideParam}" (type: ${typeof overrideParam})`);


    switch (action) {
      case 'start':
        setStageStatus(stage, StageStatus.ACTIVE);
        setIsProcessing(true);

        try {
          // Pass overrideParam directly to processStage to avoid race condition
          await processStage(stage, overrideParam);
          // Note: BUILDER, REVIEWER, REVISER handle completion internally
          if (stage !== Stage.BUILDER && stage !== Stage.REVIEWER && stage !== Stage.REVISER) {
            setStageStatus(stage, StageStatus.COMPLETED);
          }
          addLog(`Stage ${stage} completed`);
        } catch (error) {
          setStageStatus(stage, StageStatus.ERROR);
          addLog(`Stage ${stage} error: ${error}`);
        } finally {
          setIsProcessing(false);
        }
        break;

      case 'abort':
        setStageStatus(stage, StageStatus.ERROR);
        setIsProcessing(false);
        addLog(`Stage ${stage} aborted`);
        break;

      case 'restart':
        resetStageData(stage);
        setStageStatus(stage, StageStatus.ACTIVE);
        setIsProcessing(true);
        addLog(`Stage ${stage} restarting...`);

        try {
          // Re-run the stage processing with overrideParam
          await processStage(stage, overrideParam);
          // Note: BUILDER, REVIEWER, REVISER handle completion internally
          if (stage !== Stage.BUILDER && stage !== Stage.REVIEWER && stage !== Stage.REVISER) {
            setStageStatus(stage, StageStatus.COMPLETED);
          }
          addLog(`Stage ${stage} restart completed`);
        } catch (error) {
          setStageStatus(stage, StageStatus.ERROR);
          addLog(`Stage ${stage} restart error: ${error}`);
        } finally {
          setIsProcessing(false);
        }
        break;

      case 'skip':
        setStageStatus(stage, StageStatus.SKIPPED);
        addLog(`Stage ${stage} skipped`);
        break;
    }
  }, [addLog, setStageStatus, resetStageData, processStage]);

  // Handle all workflow actions from dashboard panels
  const handleWorkflowAction = useCallback(async (
    action: string,
    payload?: string
  ) => {
    addLog(`Action: ${action}`);

    switch (action) {
      case 'START_SETUP':
        // Check if this is a restart of setup with existing case data
        // If so, reset all state to ensure no V2 scores or previous case data carries over
        const hasExistingCaseData = simulationState.rounds.length > 0 ||
                                    simulationState.currentPaperVersion > 0 ||
                                    simulationState.paperContent !== '';
        if (hasExistingCaseData && resetAllState) {
          // Reset is async - backup files first, then clear state
          resetAllState().then(() => {
            addLog('Setup: Backed up and cleared previous case data');
          });
        }
        // Verify files and mark setup as complete
        handleStageAction(Stage.SETUP, 'start');
        break;

      case 'START_BUILDER':
        // Check for data file - prioritize cloud data file, then local manifest, then uploaded file
        addLog('Setup: Checking for data files...');
        let detectedDataFileName: string | undefined;

        // First check if we have a cloud data file (uploaded via the UI)
        const cloudData = getCloudDataFile();
        if (cloudData) {
          detectedDataFileName = cloudData.filename;
          console.log(`[START_BUILDER] Using cloud data file: ${cloudData.filename}`);
          addLog(`Setup: Data file ready (cloud) - ${cloudData.filename}`);
        } else if (uploadedFiles.dataFile) {
          // Use the uploaded file from state
          detectedDataFileName = uploadedFiles.dataFile.name;
          console.log(`[START_BUILDER] Using uploaded data file: ${detectedDataFileName}`);
          addLog(`Setup: Data file ready (uploaded) - ${detectedDataFileName}`);
        } else {
          // Try local backend manifest as fallback
          try {
            addLog('Setup: Refreshing file manifest...');
            const manifestResult = await refreshManifest();
            console.log(`[START_BUILDER] manifestResult:`, JSON.stringify(manifestResult, null, 2));
            if (manifestResult.success && manifestResult.manifest) {
              console.log(`[START_BUILDER] manifest.files:`, JSON.stringify(manifestResult.manifest.files, null, 2));
              const dataFile = manifestResult.manifest.files?.find((f: any) => f.type === 'dataFile');
              console.log(`[START_BUILDER] Found dataFile entry:`, dataFile);
              if (dataFile) {
                detectedDataFileName = dataFile.filename;
                console.log(`[START_BUILDER] Manifest found dataFile: filename="${dataFile.filename}"`);
                addLog(`Setup: Data file detected - ${dataFile.filename}`);
                // Re-run auto-detection to update uploadedFiles state
                if (refreshDetection) {
                  addLog('Setup: Loading data file into memory...');
                  await refreshDetection();
                  addLog('Setup: Data file loaded successfully');
                }
              }
            }
          } catch (error) {
            console.log('[START_BUILDER] Manifest refresh failed (expected in cloud-only mode)');
          }
        }

        if (!detectedDataFileName) {
          addLog('Setup: No data file - will generate partial paper');
        }

        // Move from Setup to Builder and start processing
        setStageStatus(Stage.SETUP, StageStatus.COMPLETED);
        moveToStage(Stage.BUILDER);
        // Automatically start the builder stage processing
        // Pass detected data file name directly to avoid race condition with React state
        console.log(`[START_BUILDER] About to call handleStageAction with detectedDataFileName="${detectedDataFileName}"`);
        setTimeout(() => {
          console.log(`[START_BUILDER setTimeout] Inside setTimeout, detectedDataFileName="${detectedDataFileName}"`);
          handleStageAction(Stage.BUILDER, 'start', detectedDataFileName);
        }, 500);
        break;

      case 'PROCEED_TO_SUPERVISOR':
        // Move from Reviewer to Supervisor
        setStageStatus(Stage.REVIEWER, StageStatus.COMPLETED);
        moveToStage(Stage.SUPERVISOR);
        break;

      case 'SKIP_TO_REVIEWER':
        // Skip directly to Reviewer for testing
        setStageStatus(Stage.SETUP, StageStatus.COMPLETED);
        setStageStatus(Stage.BUILDER, StageStatus.COMPLETED);
        updateState({
          paperContent: 'Sample paper for testing...',
          currentPaperVersion: 1,
          currentRound: 1
        });
        moveToStage(Stage.REVIEWER);
        // Auto-start the reviewer process
        setTimeout(() => handleStageAction(Stage.REVIEWER, 'start'), 100);
        break;

      case 'SKIP_TO_SUPERVISOR':
        // Skip directly to Supervisor for testing
        setStageStatus(Stage.SETUP, StageStatus.COMPLETED);
        setStageStatus(Stage.BUILDER, StageStatus.COMPLETED);
        setStageStatus(Stage.REVIEWER, StageStatus.COMPLETED);
        updateState({
          paperContent: 'Sample paper for testing...',
          currentPaperVersion: 1,
          currentRound: 1
        });
        moveToStage(Stage.SUPERVISOR);
        break;

      case 'revise':
        // Supervisor decision: continue to revision
        // Store the comment in state for future reference
        if (payload) {
          updateLastRound({ supervisorComment: payload });
          // Save supervisor comment to file for persistence
          const currentVersion = simulationState.currentRound;
          appendSupervisorDirectives(currentVersion, currentVersion, payload);
          writeSupervisorDecision('CONTINUE', currentVersion);
          addLog(`Supervisor: Saved directive to feedback file (round ${currentVersion})`);
        }
        setStageStatus(Stage.SUPERVISOR, StageStatus.COMPLETED);
        moveToStage(Stage.REVISER);
        // Pass supervisor comment DIRECTLY to avoid race condition with async state update
        // The comment is passed as the 3rd argument to handleStageAction
        addLog(`Supervisor: Passing directive to Reviser: "${payload?.substring(0, 50) || 'none'}..."`);
        setTimeout(() => handleStageAction(Stage.REVISER, 'start', payload), 100);
        break;

      case 'finalize':
        // Supervisor decision: finalize paper
        if (payload) {
          updateLastRound({ supervisorComment: payload });
          // Save supervisor comment to file for persistence
          const finalVersion = simulationState.currentRound;
          appendSupervisorDirectives(finalVersion, finalVersion, payload);
          writeSupervisorDecision('FINALIZE', finalVersion);
          addLog(`Supervisor: Saved finalize decision to feedback file (round ${finalVersion})`);
        }
        setStageStatus(Stage.SUPERVISOR, StageStatus.COMPLETED);
        moveToStage(Stage.FINALIZE);
        break;

      case 'NEW_CASE':
        // Start a completely new case - backup, reset everything, go to setup
        if (resetAllState) {
          // Async backup and reset
          resetAllState().then(() => {
            addLog('New case started - files backed up and cleared');
            // Refresh detection to clear cached file state and re-scan empty Data folder
            refreshDetection?.();
            moveToStage(Stage.SETUP);
          });
        } else {
          moveToStage(Stage.SETUP);
        }
        break;

      default:
        addLog(`Unknown action: ${action}`);
    }
  }, [addLog, moveToStage, setStageStatus, updateLastRound, handleStageAction, resetAllState, simulationState.rounds.length, simulationState.currentPaperVersion, simulationState.paperContent, updateState, refreshDetection]);

  return {
    isProcessing,
    handleStageAction,
    handleWorkflowAction
  };
}
