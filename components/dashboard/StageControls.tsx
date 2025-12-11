import React, { useState } from 'react';
import { StopCircle, RotateCcw, AlertTriangle } from 'lucide-react';

interface StageControlsProps {
  stageName: string;
  isProcessing: boolean;
  canAbort: boolean;
  canRestart: boolean;
  onAbort: () => void;
  onRestart: () => void;
}

const StageControls: React.FC<StageControlsProps> = ({
  stageName,
  isProcessing,
  canAbort,
  canRestart,
  onAbort,
  onRestart
}) => {
  const [showConfirm, setShowConfirm] = useState<'abort' | 'restart' | null>(null);

  const handleAbortClick = () => {
    if (isProcessing) {
      setShowConfirm('abort');
    }
  };

  const handleRestartClick = () => {
    setShowConfirm('restart');
  };

  const confirmAction = () => {
    if (showConfirm === 'abort') {
      onAbort();
    } else if (showConfirm === 'restart') {
      onRestart();
    }
    setShowConfirm(null);
  };

  return (
    <div className="relative">
      {/* Control Buttons */}
      <div className="flex gap-2">
        {canAbort && isProcessing && (
          <button
            onClick={handleAbortClick}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors"
          >
            <StopCircle size={14} />
            Abort
          </button>
        )}
        {canRestart && !isProcessing && (
          <button
            onClick={handleRestartClick}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors"
          >
            <RotateCcw size={14} />
            Restart
          </button>
        )}
      </div>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-full">
                <AlertTriangle className="text-amber-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                {showConfirm === 'abort' ? 'Abort Stage?' : 'Restart Stage?'}
              </h3>
            </div>

            <p className="text-slate-600 mb-6">
              {showConfirm === 'abort' ? (
                <>
                  Are you sure you want to abort the <strong>{stageName}</strong> stage?
                  Any progress will be lost and you may need to restart the stage.
                </>
              ) : (
                <>
                  Are you sure you want to restart the <strong>{stageName}</strong> stage?
                  This will reset the stage and you'll need to run it again.
                </>
              )}
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirm(null)}
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className={`px-4 py-2 text-white rounded-lg transition-colors ${
                  showConfirm === 'abort'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-amber-600 hover:bg-amber-700'
                }`}
              >
                {showConfirm === 'abort' ? 'Yes, Abort' : 'Yes, Restart'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StageControls;
