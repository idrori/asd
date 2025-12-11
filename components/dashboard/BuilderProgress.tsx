import React from 'react';
import { RefreshCw } from 'lucide-react';
import { BuilderStep } from '../../types';
import { BUILDER_STEP_INFO } from '../../constants';

interface BuilderProgressProps {
  currentStep: BuilderStep | undefined;
}

const BuilderProgress: React.FC<BuilderProgressProps> = ({ currentStep }) => {
  if (!currentStep) return null;

  const stepInfo = BUILDER_STEP_INFO[currentStep];

  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-2 text-indigo-700">
        <RefreshCw size={16} className="animate-spin" />
        <span className="font-medium">{stepInfo.label}</span>
        <span className="text-indigo-500">- {stepInfo.description}</span>
      </div>
    </div>
  );
};

export default BuilderProgress;
