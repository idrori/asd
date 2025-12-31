/**
 * Venue Service
 *
 * Manages loading, switching, and accessing venue configurations.
 * Supports both journals and conferences across all Google Scholar categories.
 */

import type {
  VenueId,
  VenueConfig,
  VenueMetadata,
  VenueType,
  ScholarCategory,
  CategoryMetadata,
  SubcategoryMetadata,
  VenuesRegistry,
  VenueRegistryEntry,
  VenueSearchResult,
  VenuePreferences,
  ConferenceVenueConfig,
  JournalVenueConfig
} from '../types/venue';

// In-memory caches
let venueCache: Record<string, VenueConfig> = {};
let currentVenueId: VenueId = 'icis';
let registryCache: VenuesRegistry | null = null;
let categoriesCache: Record<string, CategoryMetadata> | null = null;

// User preferences (stored in localStorage)
const PREFERENCES_KEY = 'venue_preferences';

/**
 * Get the base path for static assets
 */
function getBasePath(): string {
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    return '/asd';
  }
  return '';
}

/**
 * Load the venues registry
 */
export async function loadVenuesRegistry(): Promise<VenuesRegistry> {
  if (registryCache) {
    return registryCache;
  }

  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}/venues/registry.json`);
    if (!response.ok) {
      throw new Error(`Failed to load venues registry: ${response.status}`);
    }
    registryCache = await response.json();
    return registryCache!;
  } catch (error) {
    console.error('[VenueService] Failed to load registry:', error);
    throw error;
  }
}

/**
 * Load categories metadata
 */
export async function loadCategories(): Promise<CategoryMetadata[]> {
  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}/venues/categories.json`);
    if (!response.ok) {
      throw new Error(`Failed to load categories: ${response.status}`);
    }
    const data = await response.json();

    // Transform to CategoryMetadata array
    const categories: CategoryMetadata[] = Object.values(data.categories).map((cat: any) => ({
      id: cat.id as ScholarCategory,
      name: cat.name,
      description: cat.description,
      icon: cat.icon,
      color: cat.color,
      subcategoryCount: cat.subcategories.length,
      venueCount: 0 // Will be calculated from registry
    }));

    return categories;
  } catch (error) {
    console.error('[VenueService] Failed to load categories:', error);
    throw error;
  }
}

/**
 * Load subcategories for a category
 */
export async function loadSubcategories(category: ScholarCategory): Promise<SubcategoryMetadata[]> {
  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}/venues/categories.json`);
    if (!response.ok) {
      throw new Error(`Failed to load categories: ${response.status}`);
    }
    const data = await response.json();
    const categoryData = data.categories[category];

    if (!categoryData) {
      return [];
    }

    // Get venue counts from registry
    const registry = await loadVenuesRegistry();
    const venueCounts: Record<string, number> = {};

    for (const [venueId, venue] of Object.entries(registry.venues)) {
      if (venue.category === category) {
        venueCounts[venue.subcategory] = (venueCounts[venue.subcategory] || 0) + 1;
      }
    }

    return categoryData.subcategories.map((sub: any) => ({
      id: sub.id,
      name: sub.name,
      category,
      venueCount: venueCounts[sub.id] || 0
    }));
  } catch (error) {
    console.error('[VenueService] Failed to load subcategories:', error);
    throw error;
  }
}

/**
 * Get all venues
 */
export async function getAllVenues(): Promise<VenueMetadata[]> {
  const registry = await loadVenuesRegistry();

  return Object.entries(registry.venues).map(([id, venue]) => ({
    id,
    name: venue.name,
    acronym: venue.acronym,
    category: venue.category,
    subcategory: venue.subcategory,
    venueType: venue.type,
    description: '',
    verified: venue.verified,
    h5Index: venue.h5Index
  }));
}

/**
 * Get venues by category
 */
export async function getVenuesByCategory(category: ScholarCategory): Promise<VenueMetadata[]> {
  const venues = await getAllVenues();
  return venues.filter(v => v.category === category);
}

/**
 * Get venues by subcategory
 */
export async function getVenuesBySubcategory(
  category: ScholarCategory,
  subcategory: string
): Promise<VenueMetadata[]> {
  const venues = await getAllVenues();
  return venues.filter(v => v.category === category && v.subcategory === subcategory);
}

/**
 * Get venues by type (journal or conference)
 */
export async function getVenuesByType(type: VenueType): Promise<VenueMetadata[]> {
  const venues = await getAllVenues();
  return venues.filter(v => v.venueType === type);
}

/**
 * Search venues by query
 */
export async function searchVenues(query: string): Promise<VenueSearchResult[]> {
  const venues = await getAllVenues();
  const lowerQuery = query.toLowerCase();

  const results: VenueSearchResult[] = [];

  for (const venue of venues) {
    let score = 0;
    let matchType: 'name' | 'acronym' | 'description' | 'category' = 'name';

    // Exact acronym match (highest score)
    if (venue.acronym.toLowerCase() === lowerQuery) {
      score = 100;
      matchType = 'acronym';
    }
    // Acronym starts with query
    else if (venue.acronym.toLowerCase().startsWith(lowerQuery)) {
      score = 80;
      matchType = 'acronym';
    }
    // Acronym contains query
    else if (venue.acronym.toLowerCase().includes(lowerQuery)) {
      score = 60;
      matchType = 'acronym';
    }
    // Name contains query
    else if (venue.name.toLowerCase().includes(lowerQuery)) {
      score = 40;
      matchType = 'name';
    }
    // Subcategory contains query
    else if (venue.subcategory.toLowerCase().includes(lowerQuery)) {
      score = 20;
      matchType = 'category';
    }

    if (score > 0) {
      results.push({ venue, matchType, score });
    }
  }

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score);
}

/**
 * Load a specific venue configuration
 */
export async function loadVenueConfig(venueId: VenueId): Promise<VenueConfig> {
  if (venueCache[venueId]) {
    return venueCache[venueId];
  }

  const registry = await loadVenuesRegistry();
  const venueEntry = registry.venues[venueId];

  if (!venueEntry) {
    throw new Error(`Venue not found: ${venueId}`);
  }

  try {
    const basePath = getBasePath();
    const venueType = venueEntry.type === 'journal' ? 'journals' : 'conferences';
    const response = await fetch(`${basePath}/venues/${venueType}/${venueId}/config.json`);

    if (!response.ok) {
      // Try legacy path for backwards compatibility
      const legacyResponse = await fetch(`${basePath}/conferences/${venueId}/config.json`);
      if (legacyResponse.ok) {
        const config = await legacyResponse.json();
        venueCache[venueId] = config;
        return config;
      }
      throw new Error(`Failed to load venue config: ${response.status}`);
    }

    const config: VenueConfig = await response.json();
    venueCache[venueId] = config;
    return config;
  } catch (error) {
    console.error(`[VenueService] Failed to load config for ${venueId}:`, error);
    throw error;
  }
}

/**
 * Get the current venue configuration
 */
export async function getCurrentVenueConfig(): Promise<VenueConfig> {
  return loadVenueConfig(currentVenueId);
}

/**
 * Set the current venue
 */
export function setCurrentVenue(venueId: VenueId): void {
  currentVenueId = venueId;
  addToRecentVenues(venueId);
  console.log(`[VenueService] Switched to venue: ${venueId}`);
}

/**
 * Get the current venue ID
 */
export function getCurrentVenueId(): VenueId {
  return currentVenueId;
}

/**
 * Check if a venue is a journal
 */
export function isJournal(config: VenueConfig): config is JournalVenueConfig {
  return config.venueType === 'journal';
}

/**
 * Check if a venue is a conference
 */
export function isConference(config: VenueConfig): config is ConferenceVenueConfig {
  return config.venueType === 'conference';
}

/**
 * Get user preferences
 */
export function getVenuePreferences(): VenuePreferences {
  const defaultPrefs: VenuePreferences = {
    favorites: [],
    recent: [],
    showJournals: true,
    showConferences: true
  };

  if (typeof window === 'undefined') {
    return defaultPrefs;
  }

  try {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    if (stored) {
      return { ...defaultPrefs, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('[VenueService] Failed to load preferences:', error);
  }

  return defaultPrefs;
}

/**
 * Save user preferences
 */
export function saveVenuePreferences(prefs: Partial<VenuePreferences>): void {
  if (typeof window === 'undefined') return;

  try {
    const current = getVenuePreferences();
    const updated = { ...current, ...prefs };
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('[VenueService] Failed to save preferences:', error);
  }
}

/**
 * Add venue to favorites
 */
export function addToFavorites(venueId: VenueId): void {
  const prefs = getVenuePreferences();
  if (!prefs.favorites.includes(venueId)) {
    prefs.favorites.unshift(venueId);
    if (prefs.favorites.length > 10) {
      prefs.favorites = prefs.favorites.slice(0, 10);
    }
    saveVenuePreferences(prefs);
  }
}

/**
 * Remove venue from favorites
 */
export function removeFromFavorites(venueId: VenueId): void {
  const prefs = getVenuePreferences();
  prefs.favorites = prefs.favorites.filter(id => id !== venueId);
  saveVenuePreferences(prefs);
}

/**
 * Add venue to recent list
 */
export function addToRecentVenues(venueId: VenueId): void {
  const prefs = getVenuePreferences();
  prefs.recent = prefs.recent.filter(id => id !== venueId);
  prefs.recent.unshift(venueId);
  if (prefs.recent.length > 5) {
    prefs.recent = prefs.recent.slice(0, 5);
  }
  saveVenuePreferences(prefs);
}

/**
 * Get favorite venues
 */
export async function getFavoriteVenues(): Promise<VenueMetadata[]> {
  const prefs = getVenuePreferences();
  const allVenues = await getAllVenues();
  return prefs.favorites
    .map(id => allVenues.find(v => v.id === id))
    .filter((v): v is VenueMetadata => v !== undefined);
}

/**
 * Get recent venues
 */
export async function getRecentVenues(): Promise<VenueMetadata[]> {
  const prefs = getVenuePreferences();
  const allVenues = await getAllVenues();
  return prefs.recent
    .map(id => allVenues.find(v => v.id === id))
    .filter((v): v is VenueMetadata => v !== undefined);
}

/**
 * Load a prompt file for the current venue
 */
export async function loadVenuePrompt(
  promptType: 'builder' | 'reviewer' | 'supervisor' | 'reviser' | 'finalize' | 'setup' | 'template' | 'infographic' | 'dataTable'
): Promise<string> {
  const config = await getCurrentVenueConfig();
  const promptPath = config.prompts[promptType];

  if (!promptPath) {
    throw new Error(`Prompt type '${promptType}' not configured for ${config.acronym}`);
  }

  try {
    const basePath = getBasePath();
    const venueType = config.venueType === 'journal' ? 'journals' : 'conferences';

    // Try venue-specific prompt first
    let response = await fetch(`${basePath}/venues/${venueType}/${config.id}/${promptPath}`);

    if (!response.ok) {
      // Try legacy conference path
      response = await fetch(`${basePath}/conferences/${config.id}/${promptPath}`);
    }

    if (!response.ok) {
      // Try shared prompts
      response = await fetch(`${basePath}/venues/shared/${promptPath}`);
    }

    if (!response.ok) {
      // Try legacy shared path
      response = await fetch(`${basePath}/conferences/shared/${promptPath}`);
    }

    if (!response.ok) {
      throw new Error(`Prompt file not found: ${promptPath}`);
    }

    return await response.text();
  } catch (error) {
    console.error(`[VenueService] Failed to load prompt ${promptType}:`, error);
    throw error;
  }
}

/**
 * Get venues grouped by category with subcategory structure
 */
export async function getVenuesGroupedByCategory(): Promise<Record<ScholarCategory, Record<string, VenueMetadata[]>>> {
  const venues = await getAllVenues();
  const grouped: Record<string, Record<string, VenueMetadata[]>> = {};

  for (const venue of venues) {
    if (!grouped[venue.category]) {
      grouped[venue.category] = {};
    }
    if (!grouped[venue.category][venue.subcategory]) {
      grouped[venue.category][venue.subcategory] = [];
    }
    grouped[venue.category][venue.subcategory].push(venue);
  }

  return grouped as Record<ScholarCategory, Record<string, VenueMetadata[]>>;
}

/**
 * Get venue metadata by ID
 */
export async function getVenueMetadata(venueId: VenueId): Promise<VenueMetadata | null> {
  const venues = await getAllVenues();
  return venues.find(v => v.id === venueId) || null;
}

/**
 * Clear all caches
 */
export function clearVenueCache(): void {
  venueCache = {};
  registryCache = null;
  categoriesCache = null;
  console.log('[VenueService] Cache cleared');
}

/**
 * Get paper filename for the current venue
 */
export async function getVenuePaperFilename(participantId: string, version: number): Promise<string> {
  const config = await getCurrentVenueConfig();
  return `${config.id}_paper_${participantId}_v${version}`;
}

/**
 * Get citation style for the current venue
 */
export async function getVenueCitationStyle(): Promise<string> {
  const config = await getCurrentVenueConfig();
  return config.template.citationStyle;
}

/**
 * Get paper limits for the current venue
 */
export async function getVenuePaperLimits(): Promise<{ min: number; max: number }> {
  const config = await getCurrentVenueConfig();
  return {
    min: config.paperLimits.minPages,
    max: config.paperLimits.maxPages
  };
}

/**
 * Check if the current venue uses anonymous submission
 */
export async function isVenueAnonymousSubmission(): Promise<boolean> {
  const config = await getCurrentVenueConfig();
  return config.template.anonymousSubmission;
}

/**
 * Get top journals for reference quality checking
 */
export async function getVenueTopJournals(): Promise<string[]> {
  const config = await getCurrentVenueConfig();
  return config.calibration.topJournals;
}

/**
 * Get review dimensions for the current venue
 */
export async function getVenueReviewDimensions(): Promise<string[]> {
  const config = await getCurrentVenueConfig();
  return config.review.dimensions;
}
