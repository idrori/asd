import React, { useState, useRef, useEffect } from 'react';
import { Stage, StageStatus, BuilderStep } from '../types';
import { STAGE_INFO, BUILDER_STEP_INFO, ICIS_BASE_PATH } from '../constants';
import {
  CheckCircle2,
  Circle,
  AlertCircle,
  PlayCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  Hammer,
  Search,
  UserCheck,
  Edit3,
  Send,
  SkipForward,
  MoreVertical,
  StopCircle,
  RotateCcw,
  FastForward,
  Play
} from 'lucide-react';

// Stage control actions
export type StageAction = 'abort' | 'restart' | 'skip' | 'start';

interface SidebarProps {
  currentStage: Stage;
  currentBuilderStep?: BuilderStep;
  stagesState: Record<Stage, StageStatus>;
  isPartialPaper?: boolean;
  currentRound?: number;
  isProcessing?: boolean;
  onStageClick: (stage: Stage) => void;
  onStageAction?: (stage: Stage, action: StageAction) => void;
  onNewCase?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentStage,
  currentBuilderStep,
  stagesState,
  isPartialPaper = false,
  currentRound = 1,
  isProcessing = false,
  onStageClick,
  onStageAction,
  onNewCase
}) => {
  const [menuOpen, setMenuOpen] = useState<Stage | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get available actions for a stage based on its status
  const getAvailableActions = (stage: Stage, status: StageStatus): { action: StageAction; label: string; icon: React.ReactNode; disabled?: boolean }[] => {
    const actions: { action: StageAction; label: string; icon: React.ReactNode; disabled?: boolean }[] = [];

    switch (status) {
      case StageStatus.ACTIVE:
        actions.push({ action: 'abort', label: 'Abort', icon: <StopCircle size={14} /> });
        break;
      case StageStatus.COMPLETED:
        actions.push({ action: 'restart', label: 'Restart', icon: <RotateCcw size={14} /> });
        break;
      case StageStatus.ERROR:
        actions.push({ action: 'restart', label: 'Retry', icon: <RotateCcw size={14} /> });
        break;
      case StageStatus.PENDING:
        // Can only start if previous stage is completed
        const stageOrder = [Stage.SETUP, Stage.BUILDER, Stage.REVIEWER, Stage.SUPERVISOR, Stage.REVISER, Stage.FINALIZE];
        const stageIndex = stageOrder.indexOf(stage);
        const prevStage = stageIndex > 0 ? stageOrder[stageIndex - 1] : null;
        const canStart = !prevStage || stagesState[prevStage] === StageStatus.COMPLETED;

        actions.push({ action: 'start', label: 'Start', icon: <Play size={14} />, disabled: !canStart || isProcessing });
        if (stage !== Stage.SETUP && stage !== Stage.FINALIZE) {
          actions.push({ action: 'skip', label: 'Skip', icon: <FastForward size={14} />, disabled: isProcessing });
        }
        break;
      case StageStatus.SKIPPED:
        actions.push({ action: 'restart', label: 'Unskip & Run', icon: <RotateCcw size={14} /> });
        break;
    }

    return actions;
  };
  const stageOrder: Stage[] = [
    Stage.SETUP,
    Stage.BUILDER,
    Stage.REVIEWER,
    Stage.SUPERVISOR,
    Stage.REVISER,
    Stage.FINALIZE
  ];

  // Icons for each stage
  const stageIcons: Record<Stage, React.ReactNode> = {
    [Stage.SETUP]: <FileText size={16} />,
    [Stage.BUILDER]: <Hammer size={16} />,
    [Stage.REVIEWER]: <Search size={16} />,
    [Stage.SUPERVISOR]: <UserCheck size={16} />,
    [Stage.REVISER]: <Edit3 size={16} />,
    [Stage.FINALIZE]: <Send size={16} />
  };

  // Get status icon
  const getStatusIcon = (status: StageStatus) => {
    switch (status) {
      case StageStatus.COMPLETED:
        return <CheckCircle2 size={16} className="text-emerald-500" />;
      case StageStatus.ACTIVE:
        return <PlayCircle size={16} className="text-red-500 animate-pulse" />;
      case StageStatus.ERROR:
        return <AlertCircle size={16} className="text-red-500" />;
      case StageStatus.SKIPPED:
        return <SkipForward size={16} className="text-slate-400" />;
      default:
        return <Circle size={16} className="text-slate-500" />;
    }
  };

  // Builder sub-steps to display when Builder is active/expanded
  const builderSubSteps: BuilderStep[] = [
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

  // Check if a builder step should be skipped (for partial paper mode)
  const isStepSkipped = (step: BuilderStep): boolean => {
    if (!isPartialPaper) return false;
    const skippableSteps = [
      BuilderStep.STEP3_MATH_FORMULATION,
      BuilderStep.STEP4_IMPLEMENTATION,
      BuilderStep.STEP5_EXECUTION,
      BuilderStep.STEP6_VISUALIZATION,
      BuilderStep.STEP7_ANALYSIS
    ];
    return skippableSteps.includes(step);
  };

  // Get builder step status
  const getBuilderStepStatus = (step: BuilderStep): 'pending' | 'active' | 'completed' | 'skipped' => {
    if (isStepSkipped(step)) return 'skipped';

    const stepIndex = builderSubSteps.indexOf(step);
    const currentIndex = currentBuilderStep ? builderSubSteps.indexOf(currentBuilderStep) : -1;

    if (step === currentBuilderStep) return 'active';
    if (currentIndex > stepIndex) return 'completed';
    return 'pending';
  };

  const isBuilderExpanded = currentStage === Stage.BUILDER ||
    stagesState[Stage.BUILDER] === StageStatus.ACTIVE;

  return (
    <div className="h-full w-full bg-slate-900 text-slate-200 flex flex-col border-r border-slate-800 shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-slate-800 bg-slate-950">
        <h1 className="font-bold text-xl text-white tracking-tight flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
          ICIScopilot<span className="text-emerald-500">1</span>
        </h1>
        <p className="text-xs text-slate-500 mt-1">Automated Science Discovery</p>
      </div>

      {/* Round indicator */}
      {currentRound > 1 && (
        <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-800">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Revision Cycle</span>
            <span className="text-emerald-400 font-medium">Round {currentRound}</span>
          </div>
        </div>
      )}

      {/* Paper mode indicator */}
      {isPartialPaper && (
        <div className="px-4 py-2 bg-amber-900/30 border-b border-amber-800/50">
          <div className="flex items-center gap-2 text-xs text-amber-300">
            <AlertCircle size={12} />
            <span>Partial Paper Mode (no data)</span>
          </div>
        </div>
      )}

      {/* New Case Button - Above Stage List */}
      {onNewCase && (
        <div className="px-4 pt-4 pb-2">
          <button
            onClick={() => {
              if (window.confirm('Start a new case? This will clear all current progress and generated files.')) {
                onNewCase();
              }
            }}
            className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
          >
            + New Case
          </button>
        </div>
      )}

      {/* Stage List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {stageOrder.map((stage) => {
          const status = stagesState[stage];
          const isActive = status === StageStatus.ACTIVE;
          const isCompleted = status === StageStatus.COMPLETED;
          const isSkipped = status === StageStatus.SKIPPED;
          const isCurrent = currentStage === stage;
          const info = STAGE_INFO[stage];

          const availableActions = getAvailableActions(stage, status);

          return (
            <div key={stage} className="relative">
              {/* Main stage item */}
              <div
                className={`
                  relative p-3 rounded-lg border transition-all duration-200 cursor-pointer
                  ${isActive
                    ? 'border-red-500 bg-slate-800 shadow-lg shadow-red-900/20'
                    : isCompleted
                      ? 'border-emerald-500/50 bg-slate-900/50'
                      : isSkipped
                        ? 'border-slate-700 bg-slate-900/30 opacity-60'
                        : isCurrent
                          ? 'border-indigo-500 bg-slate-800/50'
                          : 'border-slate-800 bg-slate-900/30 hover:bg-slate-800/30'
                  }
                `}
                onClick={() => onStageClick(stage)}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`${isActive ? 'text-red-400' : isCompleted ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {stageIcons[stage]}
                    </span>
                    <span className={`font-medium text-sm ${isActive || isCurrent ? 'text-white' : ''}`}>
                      {info.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {stage === Stage.BUILDER && (isBuilderExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}
                    {getStatusIcon(status)}
                    {/* Menu button */}
                    {onStageAction && availableActions.length > 0 && (
                      <button
                        className="p-1 rounded hover:bg-slate-700 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMenuOpen(menuOpen === stage ? null : stage);
                        }}
                      >
                        <MoreVertical size={14} className="text-slate-400" />
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">
                  {info.description}
                </p>

                {/* Prompt file indicator */}
                {info.promptFile && (
                  <div className="mt-2 pl-6">
                    <span className="text-[10px] text-slate-600 bg-slate-800 px-2 py-0.5 rounded">
                      {info.promptFile}
                    </span>
                  </div>
                )}
              </div>

              {/* Dropdown menu */}
              {menuOpen === stage && onStageAction && (
                <div
                  ref={menuRef}
                  className="absolute right-2 top-12 z-50 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 min-w-[140px]"
                >
                  {availableActions.map(({ action, label, icon, disabled }) => (
                    <button
                      key={action}
                      className={`
                        w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-colors
                        ${disabled
                          ? 'text-slate-600 cursor-not-allowed'
                          : action === 'abort'
                            ? 'text-red-400 hover:bg-red-900/30'
                            : 'text-slate-300 hover:bg-slate-700'
                        }
                      `}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!disabled) {
                          onStageAction(stage, action);
                          setMenuOpen(null);
                        }
                      }}
                      disabled={disabled}
                    >
                      {icon}
                      {label}
                    </button>
                  ))}
                </div>
              )}

              {/* Builder sub-steps (expanded view) */}
              {stage === Stage.BUILDER && isBuilderExpanded && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-3">
                  {builderSubSteps.map((subStep) => {
                    const stepInfo = BUILDER_STEP_INFO[subStep];
                    const stepStatus = getBuilderStepStatus(subStep);

                    return (
                      <div
                        key={subStep}
                        className={`
                          py-1.5 px-2 rounded text-xs flex items-center gap-2
                          ${stepStatus === 'active'
                            ? 'bg-red-900/30 text-red-300'
                            : stepStatus === 'completed'
                              ? 'text-emerald-400'
                              : stepStatus === 'skipped'
                                ? 'text-slate-600 line-through'
                                : 'text-slate-500'
                          }
                        `}
                      >
                        {stepStatus === 'active' && <PlayCircle size={12} className="animate-pulse" />}
                        {stepStatus === 'completed' && <CheckCircle2 size={12} />}
                        {stepStatus === 'skipped' && <SkipForward size={12} />}
                        {stepStatus === 'pending' && <Circle size={12} />}
                        <span>{stepInfo.label}: {stepInfo.description}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-950 border-t border-slate-800">
        <div className="text-xs text-slate-500 space-y-1">
          <p className="flex justify-between">
            <span>Directory:</span>
            <span className="text-slate-400">{ICIS_BASE_PATH}</span>
          </p>
          <p className="flex justify-between">
            <span>Paper Version:</span>
            <span className="text-slate-400">v{currentRound}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
