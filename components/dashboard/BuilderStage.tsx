import React from 'react';
import { RefreshCw } from 'lucide-react';
import { BuilderStep } from '../../types';
import LogPanel from './LogPanel';
import BuilderProgress from './BuilderProgress';
import StageControls from './StageControls';

interface BuilderStageProps {
  logs: string[];
  isProcessing: boolean;
  isPartialPaper: boolean;
  currentBuilderStep: BuilderStep | undefined;
  paperContent: string;
  onAbort?: () => void;
  onRestart?: () => void;
}

const BuilderStage: React.FC<BuilderStageProps> = ({
  logs,
  isProcessing,
  isPartialPaper,
  currentBuilderStep,
  paperContent,
  onAbort,
  onRestart
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <RefreshCw className={`text-indigo-600 ${isProcessing ? 'animate-spin' : ''}`} />
          Building Research Paper
          {isPartialPaper && (
            <span className="text-sm font-normal text-amber-600 ml-2">(Partial Paper Mode)</span>
          )}
        </h2>
        <StageControls
          stageName="Builder"
          isProcessing={isProcessing}
          canAbort={true}
          canRestart={!isProcessing && !!paperContent}
          onAbort={onAbort || (() => {})}
          onRestart={onRestart || (() => {})}
        />
      </div>

      <BuilderProgress currentStep={currentBuilderStep} />
      <LogPanel logs={logs} height="h-48" />

      <div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Current Draft Preview
        </h3>
        <div className="prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2">
          {paperContent ? (
            <pre className="whitespace-pre-wrap font-sans text-slate-600 text-sm">
              {paperContent}
            </pre>
          ) : (
            <p className="text-slate-400 italic">Generating content...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuilderStage;
