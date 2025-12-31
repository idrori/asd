/**
 * Conference Service
 *
 * Manages loading, switching, and accessing conference configurations.
 * Provides a centralized way to get conference-specific settings.
 */

import type {
  ConferenceConfig,
  ConferenceId,
  ConferenceMetadata,
  ConferenceRegistry
} from '../types/conference';

// In-memory cache of loaded conference configurations
let conferenceCache: Record<string, ConferenceConfig> = {};
let currentConferenceId: ConferenceId = 'icis';
let registryCache: ConferenceRegistry | null = null;

/**
 * Get the base path for static assets
 * On GitHub Pages this is /asd/, on Vercel/local it's /
 */
function getBasePath(): string {
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    return '/asd';
  }
  return '';
}

/**
 * Load the conference registry from the conferences directory
 */
export async function loadConferenceRegistry(): Promise<ConferenceRegistry> {
  if (registryCache) {
    return registryCache;
  }

  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}/conferences/registry.json`);
    if (!response.ok) {
      throw new Error(`Failed to load conference registry: ${response.status}`);
    }
    registryCache = await response.json();
    return registryCache!;
  } catch (error) {
    console.error('[ConferenceService] Failed to load registry:', error);
    // Return default registry with just ICIS
    return getDefaultRegistry();
  }
}

/**
 * Get default registry (fallback)
 */
function getDefaultRegistry(): ConferenceRegistry {
  return {
    schemaVersion: '1.0',
    defaultConference: 'icis',
    conferences: {
      icis: {
        id: 'icis',
        name: 'International Conference on Information Systems',
        acronym: 'ICIS',
        year: 2025,
        tier: 1,
        domain: 'information-systems',
        website: 'https://icis2025.aisconferences.org/',
        description: 'Premier global conference for Information Systems research',
        verified: true,
        lastUpdated: '2025-01-01'
      } as ConferenceConfig
    }
  };
}

/**
 * Load a specific conference configuration
 */
export async function loadConferenceConfig(conferenceId: ConferenceId): Promise<ConferenceConfig> {
  // Check cache first
  if (conferenceCache[conferenceId]) {
    return conferenceCache[conferenceId];
  }

  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}/conferences/${conferenceId}/config.json`);
    if (!response.ok) {
      throw new Error(`Failed to load conference config for ${conferenceId}: ${response.status}`);
    }
    const config: ConferenceConfig = await response.json();
    conferenceCache[conferenceId] = config;
    return config;
  } catch (error) {
    console.error(`[ConferenceService] Failed to load config for ${conferenceId}:`, error);
    throw error;
  }
}

/**
 * Get the current conference configuration
 */
export async function getCurrentConferenceConfig(): Promise<ConferenceConfig> {
  return loadConferenceConfig(currentConferenceId);
}

/**
 * Set the current conference
 */
export function setCurrentConference(conferenceId: ConferenceId): void {
  currentConferenceId = conferenceId;
  console.log(`[ConferenceService] Switched to conference: ${conferenceId}`);
}

/**
 * Get the current conference ID
 */
export function getCurrentConferenceId(): ConferenceId {
  return currentConferenceId;
}

/**
 * Get list of all available conferences
 */
export async function getAvailableConferences(): Promise<ConferenceMetadata[]> {
  const registry = await loadConferenceRegistry();
  return Object.values(registry.conferences).map(conf => ({
    id: conf.id as ConferenceId,
    name: conf.name,
    acronym: conf.acronym,
    tier: conf.tier,
    domain: conf.domain,
    description: conf.description,
    verified: conf.verified
  }));
}

/**
 * Get conferences grouped by tier
 */
export async function getConferencesByTier(): Promise<Record<number, ConferenceMetadata[]>> {
  const conferences = await getAvailableConferences();
  const byTier: Record<number, ConferenceMetadata[]> = { 1: [], 2: [], 3: [] };

  for (const conf of conferences) {
    byTier[conf.tier].push(conf);
  }

  return byTier;
}

/**
 * Get conferences by domain
 */
export async function getConferencesByDomain(): Promise<Record<string, ConferenceMetadata[]>> {
  const conferences = await getAvailableConferences();
  const byDomain: Record<string, ConferenceMetadata[]> = {};

  for (const conf of conferences) {
    if (!byDomain[conf.domain]) {
      byDomain[conf.domain] = [];
    }
    byDomain[conf.domain].push(conf);
  }

  return byDomain;
}

/**
 * Load a prompt file for the current conference
 */
export async function loadConferencePrompt(
  promptType: 'builder' | 'reviewer' | 'supervisor' | 'reviser' | 'finalize' | 'setup' | 'template' | 'infographic' | 'dataTable'
): Promise<string> {
  const config = await getCurrentConferenceConfig();
  const promptPath = config.prompts[promptType];

  if (!promptPath) {
    throw new Error(`Prompt type '${promptType}' not configured for ${config.acronym}`);
  }

  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}/conferences/${config.id}/${promptPath}`);
    if (!response.ok) {
      // Fallback to shared prompts if conference-specific not found
      console.warn(`[ConferenceService] Conference-specific prompt not found, trying shared...`);
      const sharedResponse = await fetch(`${basePath}/conferences/shared/${promptPath}`);
      if (!sharedResponse.ok) {
        throw new Error(`Prompt file not found: ${promptPath}`);
      }
      return await sharedResponse.text();
    }
    return await response.text();
  } catch (error) {
    console.error(`[ConferenceService] Failed to load prompt ${promptType}:`, error);
    throw error;
  }
}

/**
 * Get the paper filename prefix for the current conference
 */
export async function getPaperPrefix(): Promise<string> {
  const config = await getCurrentConferenceConfig();
  return `${config.id}_paper`;
}

/**
 * Get the output filename for a paper
 */
export async function getPaperFilename(participantId: string, version: number): Promise<string> {
  const config = await getCurrentConferenceConfig();
  return `${config.id}_paper_${participantId}_v${version}`;
}

/**
 * Validate that a conference configuration is complete
 */
export function validateConferenceConfig(config: ConferenceConfig): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields
  if (!config.id) errors.push('Missing conference ID');
  if (!config.name) errors.push('Missing conference name');
  if (!config.acronym) errors.push('Missing conference acronym');
  if (!config.paperLimits) errors.push('Missing paper limits');
  if (!config.template) errors.push('Missing template configuration');
  if (!config.review) errors.push('Missing review configuration');
  if (!config.prompts) errors.push('Missing prompts configuration');

  // Validate paper limits
  if (config.paperLimits) {
    if (config.paperLimits.maxPages < config.paperLimits.minPages) {
      errors.push('maxPages must be >= minPages');
    }
  }

  // Validate prompts exist
  if (config.prompts) {
    const requiredPrompts = ['builder', 'reviewer', 'supervisor', 'reviser', 'finalize', 'setup', 'template'];
    for (const prompt of requiredPrompts) {
      if (!config.prompts[prompt as keyof typeof config.prompts]) {
        errors.push(`Missing required prompt: ${prompt}`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Clear the conference cache (useful for development/testing)
 */
export function clearConferenceCache(): void {
  conferenceCache = {};
  registryCache = null;
  console.log('[ConferenceService] Cache cleared');
}

/**
 * Get citation style for the current conference
 */
export async function getCitationStyle(): Promise<string> {
  const config = await getCurrentConferenceConfig();
  return config.template.citationStyle;
}

/**
 * Get paper limits for the current conference
 */
export async function getPaperLimits(): Promise<{ min: number; max: number }> {
  const config = await getCurrentConferenceConfig();
  return {
    min: config.paperLimits.minPages,
    max: config.paperLimits.maxPages
  };
}

/**
 * Check if the current conference uses anonymous submission
 */
export async function isAnonymousSubmission(): Promise<boolean> {
  const config = await getCurrentConferenceConfig();
  return config.template.anonymousSubmission;
}

/**
 * Get top journals for reference quality checking
 */
export async function getTopJournals(): Promise<string[]> {
  const config = await getCurrentConferenceConfig();
  return config.calibration.topJournals;
}

/**
 * Get review dimensions for the current conference
 */
export async function getReviewDimensions(): Promise<string[]> {
  const config = await getCurrentConferenceConfig();
  return config.review.dimensions;
}
