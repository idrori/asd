/**
 * Prompt Service
 *
 * Loads prompts from the prompts/ folder.
 * Uses Vite's ?raw import to bundle prompts at build time.
 * Substitutes {ICIS_PATH} placeholder with configured base path.
 */

// Import prompts as raw text using Vite's ?raw feature
import builderPrompt from '../prompts/ICISbuilder.txt?raw';
import reviewerPrompt from '../prompts/ICISreview.txt?raw';
import reviserPrompt from '../prompts/ICISreviser.txt?raw';
import setupPrompt from '../prompts/ICISsetup.txt?raw';
import supervisorPrompt from '../prompts/ICISsupervisor.txt?raw';
import finalizePrompt from '../prompts/ICISfinalize.txt?raw';
import templatePrompt from '../prompts/icisTemplate.txt?raw';
import misqCriteriaPrompt from '../prompts/misqReviewCriteria.txt?raw';
import infographicPrompt from '../prompts/ICISinfoprompt.txt?raw';
import tablePrompt from '../prompts/ICIStableprompt.txt?raw';
import { ICIS_BASE_PATH } from '../constants';

// Prompt keys
export type PromptKey = 'SETUP' | 'BUILDER' | 'REVIEWER' | 'SUPERVISOR' | 'REVISER' | 'FINALIZE' | 'TEMPLATE' | 'MISQ_CRITERIA' | 'INFOGRAPHIC' | 'TABLE';

// Map of prompt keys to their raw content
const RAW_PROMPTS: Record<PromptKey, string> = {
  SETUP: setupPrompt,
  BUILDER: builderPrompt,
  REVIEWER: reviewerPrompt,
  SUPERVISOR: supervisorPrompt,
  REVISER: reviserPrompt,
  FINALIZE: finalizePrompt,
  TEMPLATE: templatePrompt,
  MISQ_CRITERIA: misqCriteriaPrompt,
  INFOGRAPHIC: infographicPrompt,
  TABLE: tablePrompt
};

/**
 * Substitute placeholders in prompt content
 * Replaces {ICIS_PATH} with the configured base path
 */
function substitutePathPlaceholders(content: string): string {
  return content.replace(/\{ICIS_PATH\}/g, ICIS_BASE_PATH);
}

// Map of prompt keys to their content with substitutions applied
const PROMPTS: Record<PromptKey, string> = Object.fromEntries(
  Object.entries(RAW_PROMPTS).map(([key, value]) => [key, substitutePathPlaceholders(value)])
) as Record<PromptKey, string>;

/**
 * Load a prompt by key
 * Now synchronous since prompts are bundled at build time
 */
export async function loadPrompt(key: PromptKey): Promise<string> {
  const content = PROMPTS[key];
  if (!content) {
    console.error(`Prompt not found: ${key}`);
    return `[Prompt not found: ${key}]`;
  }
  return content;
}

/**
 * Get prompt synchronously (for cases where async isn't needed)
 */
export function getPromptSync(key: PromptKey): string {
  return PROMPTS[key] || `[Prompt not found: ${key}]`;
}

/**
 * Load all prompts at once
 */
export async function loadAllPrompts(): Promise<Record<PromptKey, string>> {
  return { ...PROMPTS };
}

/**
 * Get list of available prompt keys
 */
export function getPromptKeys(): PromptKey[] {
  return Object.keys(PROMPTS) as PromptKey[];
}
