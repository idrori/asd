import React from 'react';
import { RefreshCw } from 'lucide-react';
import LogPanel from './LogPanel';
import StageControls from './StageControls';

interface ReviserStageProps {
  logs: string[];
  isProcessing: boolean;
  currentPaperVersion: number;
  paperContent: string;
  onAbort?: () => void;
  onRestart?: () => void;
}

const ReviserStage: React.FC<ReviserStageProps> = ({
  logs,
  isProcessing,
  currentPaperVersion,
  paperContent,
  onAbort,
  onRestart
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <RefreshCw className={`text-indigo-600 ${isProcessing ? 'animate-spin' : ''}`} />
          Revising Paper (v{currentPaperVersion} → v{(currentPaperVersion || 0) + 1})
        </h2>
        <StageControls
          stageName="Reviser"
          isProcessing={isProcessing}
          canAbort={true}
          canRestart={!isProcessing}
          onAbort={onAbort || (() => {})}
          onRestart={onRestart || (() => {})}
        />
      </div>

      <LogPanel logs={logs} height="h-48" />

      <div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Revision Preview
          </h3>
          <span className="text-xs text-slate-400">
            Preserving all tables, figures, and results
          </span>
        </div>
        <div className="prose prose-sm max-w-none h-[250px] overflow-y-auto pr-2">
          {paperContent ? (
            <pre className="whitespace-pre-wrap font-sans text-slate-600 text-sm">
              {paperContent}
            </pre>
          ) : (
            <p className="text-slate-400 italic">Revising content...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviserStage;
