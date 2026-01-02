/**
 * Academic Paper Copilot Constants
 *
 * UI display information and configuration constants.
 * Supports multiple conferences through the conference configuration system.
 */

import { Stage, BuilderStep, ResearchType } from './types';
import type { ConferenceId } from './types/conference';

// Base path for ICIS files (legacy, for backward compatibility)
export const ICIS_BASE_PATH = '/icis';

// Default conference
export const DEFAULT_CONFERENCE: ConferenceId = 'icis';

// Get base path for a conference
export function getConferenceBasePath(conferenceId: ConferenceId): string {
  return `/${conferenceId}`;
}

// Stage display information
export const STAGE_INFO: Record<Stage, { label: string; description: string; icon: string; promptFile?: string }> = {
  [Stage.SETUP]: {
    label: 'Setup',
    description: 'Verify files and initialize project',
    icon: 'FileText',
    promptFile: 'ICISsetup.txt'
  },
  [Stage.BUILDER]: {
    label: 'Builder',
    description: 'Build paper from research interview',
    icon: 'Hammer',
    promptFile: 'ICISbuilder.txt'
  },
  [Stage.REVIEWER]: {
    label: 'Reviewer',
    description: 'AI review and scoring',
    icon: 'Search',
    promptFile: 'ICISreview.txt'
  },
  [Stage.SUPERVISOR]: {
    label: 'Supervisor',
    description: 'Human oversight and decision',
    icon: 'UserCheck',
    promptFile: 'ICISsupervisor.txt'
  },
  [Stage.REVISER]: {
    label: 'Reviser',
    description: 'Revise based on feedback',
    icon: 'Edit3',
    promptFile: 'ICISreviser.txt'
  },
  [Stage.FINALIZE]: {
    label: 'Finalize',
    description: 'Final submission preparation',
    icon: 'Send',
    promptFile: 'ICISfinalize.txt'
  }
};

// Builder step display information
export const BUILDER_STEP_INFO: Record<BuilderStep, { label: string; description: string; duration: string }> = {
  [BuilderStep.STEP1_INTERVIEW_ANALYSIS]: {
    label: 'Interview Analysis',
    description: 'Extract research vision from interview transcript',
    duration: '~2 min'
  },
  [BuilderStep.STEP1_5_DATA_ASSESSMENT]: {
    label: 'Data Assessment',
    description: 'Check for available data files',
    duration: '~30 sec'
  },
  [BuilderStep.STEP2_RESEARCH_PLANNING]: {
    label: 'Research Planning',
    description: 'Determine research type and methodology',
    duration: '~1 min'
  },
  [BuilderStep.STEP2_FINAL_METADATA]: {
    label: 'Generate Metadata',
    description: 'Create research metadata files',
    duration: '~1 min'
  },
  [BuilderStep.STEP3_MATH_FORMULATION]: {
    label: 'Math Formulation',
    description: 'Develop mathematical framework',
    duration: '~2 min'
  },
  [BuilderStep.STEP4_IMPLEMENTATION]: {
    label: 'Implementation',
    description: 'Generate experimental code',
    duration: '~3 min'
  },
  [BuilderStep.STEP5_EXECUTION]: {
    label: 'Execution',
    description: 'Run experiments and collect results',
    duration: '~2 min'
  },
  [BuilderStep.STEP6_VISUALIZATION]: {
    label: 'Visualization',
    description: 'Create figures and charts',
    duration: '~2 min'
  },
  [BuilderStep.STEP7_ANALYSIS]: {
    label: 'Analysis',
    description: 'Analyze and interpret results',
    duration: '~2 min'
  },
  [BuilderStep.STEP8_PAPER_WRITING]: {
    label: 'Paper Writing',
    description: 'Generate full LaTeX paper',
    duration: '~5 min'
  },
  [BuilderStep.STEP9_FINAL_SUBMISSION]: {
    label: 'Final Prep',
    description: 'Prepare submission package',
    duration: '~1 min'
  }
};

// Research type information
export const RESEARCH_TYPE_INFO: Record<ResearchType, { label: string; description: string; requiresData: boolean; template?: string }> = {
  [ResearchType.SIMULATION]: {
    label: 'Simulation & Computational Modeling',
    description: 'Agent-based models, Monte Carlo simulations, system dynamics',
    requiresData: false,
    template: 'metaprompt_template_COMPUTATIONAL.py'
  },
  [ResearchType.ANALYTICAL]: {
    label: 'Analytical & Theoretical Modeling',
    description: 'Game theory, optimization, formal proofs',
    requiresData: false,
    template: 'metaprompt_template_COMPUTATIONAL.py'
  },
  [ResearchType.SECONDARY_DATA]: {
    label: 'Secondary Data Analysis',
    description: 'Analysis of existing datasets',
    requiresData: true,
    template: 'metaprompt_template_SECONDARY.py'
  },
  [ResearchType.EXPERIMENTAL]: {
    label: 'Laboratory & Field Experiments',
    description: 'Controlled experiments with human subjects',
    requiresData: true,
    template: 'metaprompt_template_EXPERIMENTAL.py'
  },
  [ResearchType.SURVEY]: {
    label: 'Survey Research',
    description: 'Questionnaire-based data collection',
    requiresData: true,
    template: 'metaprompt_template_SURVEY.py'
  }
};

// File paths configuration
export const FILE_PATHS = {
  ROOT: 'icis',
  DATA_DIR: 'Data',
  PAPER_DIR: 'Paper',
  PAPER: 'icis/Paper',
  RESULTS_DIR: 'Results',
  CODE_DIR: 'Code',
  INTERVIEW_PREFIX: 'INTERVIEW',
  DATA_PREFIX: 'Data_file',
  TEMPLATE_FILE: 'icisTemplate.txt',
  MANIFEST_FILE: 'manifest.json'
};

// Review score thresholds (1-5 scale)
export const REVIEW_THRESHOLDS = {
  APPROVAL_MIN: 3.5,      // Minimum average score for approval
  AUTO_APPROVE_MIN: 4,    // Minimum score for auto-approval (all criteria must meet)
  NOVELTY_MIN: 2.5,       // Minimum novelty score
  SIGNIFICANCE_MIN: 2.5,  // Minimum significance score
  RIGOR_MIN: 3,           // Minimum methodological rigor score
  CLARITY_MIN: 3,         // Minimum clarity score
  RELEVANCE_MIN: 3,       // Minimum relevance score
  MAX_MAJOR_ERRORS: 2,    // Maximum major errors per cycle
  MAX_CYCLES: 3           // Maximum cycles (1 build + 2 revisions)
};

// Trustworthiness thresholds (1-7 scale)
export const TRUSTWORTHINESS_THRESHOLDS = {
  MIN: 5,                 // Minimum trustworthiness score
  ALERT_THRESHOLD: 4      // Score below which to trigger alerts
};

// API configuration
export const API_CONFIG = {
  GEMINI_MODEL: 'gemini-3-pro-preview',
  OPENAI_MODEL: 'gpt-5.2',
  MAX_RETRIES: 3,
  TIMEOUT_MS: 180000  // 3 minutes
};
