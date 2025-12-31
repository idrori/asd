/**
 * Prompt Service
 *
 * Loads prompts from the conferences/ folder, supporting multiple conferences.
 * Prompts are loaded dynamically at runtime to support adding new conferences without rebuilding.
 *
 * For backward compatibility, also supports loading from the original prompts/ folder.
 */

import { getCurrentConferenceId, getCurrentConferenceConfig } from './conferenceService';
import type { ConferenceId } from '../types/conference';

// Import legacy prompts as raw text for backward compatibility
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

// Map prompt keys to config file names
const PROMPT_KEY_TO_FILE: Record<PromptKey, string> = {
  SETUP: 'setup.txt',
  BUILDER: 'builder.txt',
  REVIEWER: 'reviewer.txt',
  SUPERVISOR: 'supervisor.txt',
  REVISER: 'reviser.txt',
  FINALIZE: 'finalize.txt',
  TEMPLATE: 'template.txt',
  MISQ_CRITERIA: 'review_criteria.txt',
  INFOGRAPHIC: 'infographic.txt',
  TABLE: 'datatable.txt'
};

// Legacy prompts (ICIS) for backward compatibility
const LEGACY_PROMPTS: Record<PromptKey, string> = {
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

// Cache for loaded prompts
const promptCache: Record<string, string> = {};

/**
 * Substitute placeholders in prompt content
 * Replaces {ICIS_PATH}, {CONF_PATH}, and conference-specific placeholders
 */
function substitutePathPlaceholders(content: string, conferenceId: ConferenceId): string {
  let result = content;

  // Replace ICIS_PATH for backward compatibility
  result = result.replace(/\{ICIS_PATH\}/g, ICIS_BASE_PATH);

  // Replace CONF_PATH with conference-specific path
  const confPath = `/${conferenceId}`;
  result = result.replace(/\{CONF_PATH\}/g, confPath);

  return result;
}

/**
 * Get cache key for a prompt
 */
function getCacheKey(conferenceId: ConferenceId, promptKey: PromptKey): string {
  return `${conferenceId}:${promptKey}`;
}

/**
 * Load a prompt from the conference directory
 * Falls back to shared prompts, then to legacy ICIS prompts
 */
async function loadConferencePrompt(conferenceId: ConferenceId, promptKey: PromptKey): Promise<string> {
  const cacheKey = getCacheKey(conferenceId, promptKey);

  // Check cache first
  if (promptCache[cacheKey]) {
    return promptCache[cacheKey];
  }

  const fileName = PROMPT_KEY_TO_FILE[promptKey];

  // Try loading from conference-specific directory
  try {
    const response = await fetch(`/venues/conferences/${conferenceId}/${fileName}`);
    if (response.ok) {
      const content = await response.text();
      const substituted = substitutePathPlaceholders(content, conferenceId);
      promptCache[cacheKey] = substituted;
      return substituted;
    }
  } catch (error) {
    console.warn(`[PromptService] Could not load conference prompt: ${conferenceId}/${fileName}`);
  }

  // Try loading from shared directory
  try {
    const response = await fetch(`/venues/shared/${fileName}`);
    if (response.ok) {
      const content = await response.text();
      const substituted = substitutePathPlaceholders(content, conferenceId);
      promptCache[cacheKey] = substituted;
      return substituted;
    }
  } catch (error) {
    console.warn(`[PromptService] Could not load shared prompt: ${fileName}`);
  }

  // Fall back to legacy ICIS prompts (bundled at build time)
  console.log(`[PromptService] Falling back to legacy prompt for ${promptKey}`);
  const legacyContent = LEGACY_PROMPTS[promptKey];
  if (legacyContent) {
    const substituted = substitutePathPlaceholders(legacyContent, conferenceId);
    promptCache[cacheKey] = substituted;
    return substituted;
  }

  return `[Prompt not found: ${promptKey}]`;
}

/**
 * Load a prompt by key for the current conference
 * This is the main API for loading prompts
 */
export async function loadPrompt(key: PromptKey): Promise<string> {
  const conferenceId = getCurrentConferenceId();
  return loadConferencePrompt(conferenceId, key);
}

/**
 * Load a prompt by key for a specific conference
 */
export async function loadPromptForConference(key: PromptKey, conferenceId: ConferenceId): Promise<string> {
  return loadConferencePrompt(conferenceId, key);
}

/**
 * Get prompt synchronously (for cases where async isn't needed)
 * Uses legacy ICIS prompts directly - should only be used for backward compatibility
 */
export function getPromptSync(key: PromptKey): string {
  const conferenceId = getCurrentConferenceId();
  const cacheKey = getCacheKey(conferenceId, key);

  // Return from cache if available
  if (promptCache[cacheKey]) {
    return promptCache[cacheKey];
  }

  // Fall back to legacy prompts
  const legacyContent = LEGACY_PROMPTS[key];
  return legacyContent ? substitutePathPlaceholders(legacyContent, conferenceId) : `[Prompt not found: ${key}]`;
}

/**
 * Load all prompts for the current conference
 */
export async function loadAllPrompts(): Promise<Record<PromptKey, string>> {
  const conferenceId = getCurrentConferenceId();
  const prompts: Partial<Record<PromptKey, string>> = {};

  for (const key of Object.keys(PROMPT_KEY_TO_FILE) as PromptKey[]) {
    prompts[key] = await loadConferencePrompt(conferenceId, key);
  }

  return prompts as Record<PromptKey, string>;
}

/**
 * Get list of available prompt keys
 */
export function getPromptKeys(): PromptKey[] {
  return Object.keys(PROMPT_KEY_TO_FILE) as PromptKey[];
}

/**
 * Clear the prompt cache (useful for development/testing)
 */
export function clearPromptCache(): void {
  Object.keys(promptCache).forEach(key => delete promptCache[key]);
  console.log('[PromptService] Cache cleared');
}

/**
 * Preload all prompts for a conference into the cache
 */
export async function preloadPromptsForConference(conferenceId: ConferenceId): Promise<void> {
  console.log(`[PromptService] Preloading prompts for ${conferenceId}...`);

  for (const key of Object.keys(PROMPT_KEY_TO_FILE) as PromptKey[]) {
    await loadConferencePrompt(conferenceId, key);
  }

  console.log(`[PromptService] Prompts preloaded for ${conferenceId}`);
}

/**
 * Get conference-specific information to substitute in prompts
 */
export async function getConferenceSubstitutions(): Promise<Record<string, string>> {
  try {
    const config = await getCurrentConferenceConfig();
    return {
      CONFERENCE_NAME: config.name,
      CONFERENCE_ACRONYM: config.acronym,
      CONFERENCE_ID: config.id,
      YEAR: String(config.year),
      MAX_PAGES: String(config.paperLimits.maxPages),
      MIN_PAGES: String(config.paperLimits.minPages),
      CITATION_STYLE: config.template.citationStyle.toUpperCase(),
      DOMAIN: config.domain.replace(/-/g, ' ')
    };
  } catch (error) {
    console.warn('[PromptService] Could not get conference config for substitutions');
    return {
      CONFERENCE_NAME: 'International Conference on Information Systems',
      CONFERENCE_ACRONYM: 'ICIS',
      CONFERENCE_ID: 'icis',
      YEAR: '2025',
      MAX_PAGES: '16',
      MIN_PAGES: '14',
      CITATION_STYLE: 'APA7',
      DOMAIN: 'information systems'
    };
  }
}

/**
 * Apply conference-specific substitutions to a prompt
 */
export async function applyConferenceSubstitutions(content: string): Promise<string> {
  const subs = await getConferenceSubstitutions();
  let result = content;

  for (const [key, value] of Object.entries(subs)) {
    result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
  }

  return result;
}
