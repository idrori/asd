/**
 * Venue Selector Component
 *
 * Full-featured venue selection with Google Scholar taxonomy,
 * search, filtering, favorites, and recent venues.
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  ChevronDown,
  Check,
  AlertCircle,
  ExternalLink,
  FileText,
  Users,
  Edit3,
  Globe,
  Star,
  Clock,
  Filter,
  X
} from 'lucide-react';
import {
  loadCategories,
  loadSubcategories,
  getAllVenues,
  getVenuesByCategory,
  getVenuesBySubcategory,
  searchVenues,
  loadVenueConfig,
  setCurrentVenue,
  getCurrentVenueId,
  getVenuePreferences,
  addToFavorites,
  removeFromFavorites,
  getFavoriteVenues,
  getRecentVenues
} from '../services/venueService';
import {
  CategoryIcon,
  VenueTypeBadge,
  H5IndexBadge,
  CATEGORY_COLORS,
  CATEGORY_SHORT_NAMES,
  CATEGORY_NAMES
} from './CategoryIcons';
import type {
  VenueId,
  VenueMetadata,
  VenueConfig,
  ScholarCategory,
  CategoryMetadata,
  SubcategoryMetadata,
  VenueType
} from '../types/venue';

interface VenueSelectorProps {
  onVenueChange?: (venueId: VenueId) => void;
  disabled?: boolean;
  compact?: boolean;
}

const VenueSelector: React.FC<VenueSelectorProps> = ({
  onVenueChange,
  disabled = false,
  compact = false
}) => {
  // State
  const [categories, setCategories] = useState<CategoryMetadata[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ScholarCategory | null>(null);
  const [subcategories, setSubcategories] = useState<SubcategoryMetadata[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [venues, setVenues] = useState<VenueMetadata[]>([]);
  const [selectedVenueId, setSelectedVenueId] = useState<VenueId>('icis');
  const [selectedConfig, setSelectedConfig] = useState<VenueConfig | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<VenueMetadata[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showJournals, setShowJournals] = useState(true);
  const [showConferences, setShowConferences] = useState(true);
  const [favorites, setFavorites] = useState<VenueMetadata[]>([]);
  const [recentVenues, setRecentVenues] = useState<VenueMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load initial data
  useEffect(() => {
    loadInitialData();
  }, []);

  // Load subcategories when category changes
  useEffect(() => {
    if (selectedCategory) {
      loadSubcategoriesData(selectedCategory);
    }
  }, [selectedCategory]);

  // Load venues when subcategory changes
  useEffect(() => {
    if (selectedCategory && selectedSubcategory) {
      loadVenuesData(selectedCategory, selectedSubcategory);
    } else if (selectedCategory) {
      loadVenuesByCategoryData(selectedCategory);
    }
  }, [selectedCategory, selectedSubcategory]);

  // Load config when selection changes
  useEffect(() => {
    if (selectedVenueId) {
      loadVenueConfig(selectedVenueId)
        .then(setSelectedConfig)
        .catch(() => {
          // Venue doesn't have a full config file - set to null
          setSelectedConfig(null);
        });
    }
  }, [selectedVenueId]);

  // Handle search
  useEffect(() => {
    if (searchQuery.length >= 2) {
      setIsSearching(true);
      searchVenues(searchQuery).then(results => {
        let filtered = results.map(r => r.venue);
        if (!showJournals) filtered = filtered.filter(v => v.venueType !== 'journal');
        if (!showConferences) filtered = filtered.filter(v => v.venueType !== 'conference');
        setSearchResults(filtered);
        setIsSearching(false);
      });
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchQuery, showJournals, showConferences]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const loadInitialData = async () => {
    try {
      const [cats, favs, recent] = await Promise.all([
        loadCategories(),
        getFavoriteVenues(),
        getRecentVenues()
      ]);
      setCategories(cats);
      setFavorites(favs);
      setRecentVenues(recent);
      setSelectedVenueId(getCurrentVenueId());

      // Default to first category
      if (cats.length > 0) {
        setSelectedCategory(cats[0].id);
      }
    } catch (error) {
      console.error('Failed to load initial data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadSubcategoriesData = async (category: ScholarCategory) => {
    try {
      const subs = await loadSubcategories(category);
      setSubcategories(subs.filter(s => s.venueCount > 0));
      setSelectedSubcategory(null);
    } catch (error) {
      console.error('Failed to load subcategories:', error);
    }
  };

  const loadVenuesByCategoryData = async (category: ScholarCategory) => {
    try {
      let venueList = await getVenuesByCategory(category);
      if (!showJournals) venueList = venueList.filter(v => v.venueType !== 'journal');
      if (!showConferences) venueList = venueList.filter(v => v.venueType !== 'conference');
      setVenues(venueList.sort((a, b) => (b.h5Index || 0) - (a.h5Index || 0)));
    } catch (error) {
      console.error('Failed to load venues:', error);
    }
  };

  const loadVenuesData = async (category: ScholarCategory, subcategory: string) => {
    try {
      let venueList = await getVenuesBySubcategory(category, subcategory);
      if (!showJournals) venueList = venueList.filter(v => v.venueType !== 'journal');
      if (!showConferences) venueList = venueList.filter(v => v.venueType !== 'conference');
      setVenues(venueList.sort((a, b) => (b.h5Index || 0) - (a.h5Index || 0)));
    } catch (error) {
      console.error('Failed to load venues:', error);
    }
  };

  const handleSelect = (venueId: VenueId) => {
    setSelectedVenueId(venueId);
    setCurrentVenue(venueId);
    setIsDropdownOpen(false);
    setSearchQuery('');
    onVenueChange?.(venueId);

    // Refresh recent venues
    getRecentVenues().then(setRecentVenues);
  };

  const handleToggleFavorite = async (venueId: VenueId, e: React.MouseEvent) => {
    e.stopPropagation();
    const isFav = favorites.some(f => f.id === venueId);
    if (isFav) {
      removeFromFavorites(venueId);
    } else {
      addToFavorites(venueId);
    }
    const favs = await getFavoriteVenues();
    setFavorites(favs);
  };

  const getSelectedVenue = (): VenueMetadata | undefined => {
    return venues.find(v => v.id === selectedVenueId) ||
           favorites.find(v => v.id === selectedVenueId) ||
           recentVenues.find(v => v.id === selectedVenueId);
  };

  const displayedVenues = searchQuery.length >= 2 ? searchResults : venues;
  const selected = getSelectedVenue();

  if (loading) {
    return <div className="animate-pulse bg-gray-200 rounded-lg h-12 w-full" />;
  }

  // Compact mode - dropdown only
  if (compact) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}
          disabled={disabled}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg border
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50 cursor-pointer'}
            ${isDropdownOpen ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-300'}
          `}
        >
          <span className="font-medium">{selected?.acronym || 'Select Venue'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden">
            {/* Search */}
            <div className="p-2 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search venues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Venues list */}
            <div className="max-h-72 overflow-y-auto">
              {displayedVenues.map(venue => (
                <button
                  key={venue.id}
                  type="button"
                  onClick={() => handleSelect(venue.id)}
                  className={`
                    w-full px-3 py-2.5 text-left flex items-center gap-2 hover:bg-blue-50 transition-colors
                    ${venue.id === selectedVenueId ? 'bg-blue-50 border-l-2 border-blue-500' : ''}
                  `}
                >
                  {venue.id === selectedVenueId ? (
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  ) : (
                    <div className="w-4 h-4 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${venue.id === selectedVenueId ? 'text-blue-700' : 'text-gray-900'}`}>
                        {venue.acronym}
                      </span>
                      <VenueTypeBadge type={venue.venueType} />
                    </div>
                    <span className="block text-xs text-gray-500 truncate">{venue.name}</span>
                  </div>
                  {!venue.verified && (
                    <AlertCircle className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full mode
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Target Venue</h3>
        {selected && !selected.verified && (
          <span className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
            <AlertCircle className="w-3 h-3" />
            Configuration needs verification
          </span>
        )}
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search journals and conferences..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">Show:</span>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showConferences}
            onChange={(e) => setShowConferences(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Conferences</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showJournals}
            onChange={(e) => setShowJournals(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Journals</span>
        </label>
      </div>

      {/* Selected Venue Display */}
      {selected && (
        <div className={`p-4 rounded-lg border ${CATEGORY_COLORS[selected.category]?.light || 'bg-blue-50'} border-${CATEGORY_COLORS[selected.category]?.border || 'blue-200'}`}>
          <div className="flex items-center gap-3">
            <div className={`flex-shrink-0 w-12 h-12 ${CATEGORY_COLORS[selected.category]?.bg || 'bg-blue-600'} rounded-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">{selected.acronym.slice(0, 2)}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-900">{selected.acronym}</h4>
                <VenueTypeBadge type={selected.venueType} />
                <H5IndexBadge h5Index={selected.h5Index} />
              </div>
              <p className="text-sm text-gray-600">{selected.name}</p>
            </div>
            <button
              type="button"
              onClick={(e) => handleToggleFavorite(selected.id, e)}
              className={`p-2 rounded-full hover:bg-white/50 transition-colors ${
                favorites.some(f => f.id === selected.id) ? 'text-yellow-500' : 'text-gray-400'
              }`}
            >
              <Star className="w-5 h-5" fill={favorites.some(f => f.id === selected.id) ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Official Links - only show if we have a full config */}
          {selectedConfig && selectedConfig.officialLinks && (
            <div className="mt-4 pt-4 border-t border-gray-200/50">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Official Guidelines</h5>
              <div className="flex flex-wrap gap-2">
                {selectedConfig.officialLinks.callForPapers && (
                  <a
                    href={selectedConfig.officialLinks.callForPapers}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Call for Papers
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {selectedConfig.officialLinks.submissionInstructions && (
                  <a
                    href={selectedConfig.officialLinks.submissionInstructions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    Submission Instructions
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {selectedConfig.officialLinks.reviewerGuidelines && (
                  <a
                    href={selectedConfig.officialLinks.reviewerGuidelines}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
                  >
                    <Users className="w-3.5 h-3.5" />
                    Reviewer Guidelines
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {selectedConfig.website && (
                  <a
                    href={selectedConfig.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Message when no config available */}
          {!selectedConfig && !selected.verified && (
            <div className="mt-4 pt-4 border-t border-gray-200/50">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                Full configuration not yet available for this venue. Using default settings.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Recent & Favorites */}
      {(recentVenues.length > 0 || favorites.length > 0) && !searchQuery && (
        <div className="space-y-3">
          {favorites.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Favorites
              </h4>
              <div className="flex flex-wrap gap-2">
                {favorites.map(venue => (
                  <button
                    key={venue.id}
                    type="button"
                    onClick={() => handleSelect(venue.id)}
                    className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
                      venue.id === selectedVenueId
                        ? 'bg-blue-100 border-blue-300 text-blue-700'
                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {venue.acronym}
                  </button>
                ))}
              </div>
            </div>
          )}

          {recentVenues.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 text-gray-500" />
                Recent
              </h4>
              <div className="flex flex-wrap gap-2">
                {recentVenues.map(venue => (
                  <button
                    key={venue.id}
                    type="button"
                    onClick={() => handleSelect(venue.id)}
                    className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
                      venue.id === selectedVenueId
                        ? 'bg-blue-100 border-blue-300 text-blue-700'
                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {venue.acronym}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Category Tabs */}
      {!searchQuery && (
        <div className="border-b border-gray-200">
          <nav className="flex space-x-1 overflow-x-auto pb-1">
            {categories.map(cat => {
              const colors = CATEGORY_COLORS[cat.id];
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors
                    ${isSelected
                      ? `${colors.light} ${colors.text} border-b-2 ${colors.border}`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  <CategoryIcon category={cat.id} size={16} />
                  {CATEGORY_SHORT_NAMES[cat.id]}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Main Content: Subcategories + Venues */}
      {!searchQuery && selectedCategory && (
        <div className="grid grid-cols-12 gap-4">
          {/* Subcategories Sidebar */}
          {subcategories.length > 0 && (
            <div className="col-span-4 space-y-1 max-h-80 overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedSubcategory(null)}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                  selectedSubcategory === null
                    ? 'bg-gray-100 font-medium text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                All ({venues.length})
              </button>
              {subcategories.map(sub => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubcategory(sub.id)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                    selectedSubcategory === sub.id
                      ? 'bg-gray-100 font-medium text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {sub.name} ({sub.venueCount})
                </button>
              ))}
            </div>
          )}

          {/* Venues Grid */}
          <div className={`${subcategories.length > 0 ? 'col-span-8' : 'col-span-12'} grid grid-cols-2 gap-2 max-h-80 overflow-y-auto`}>
            {displayedVenues.map(venue => (
              <button
                key={venue.id}
                type="button"
                onClick={() => handleSelect(venue.id)}
                disabled={disabled}
                className={`
                  p-3 rounded-lg border text-left transition-all
                  ${venue.id === selectedVenueId
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }
                  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900">{venue.acronym}</span>
                  <div className="flex items-center gap-1">
                    {venue.id === selectedVenueId && <Check className="w-4 h-4 text-blue-600" />}
                    {!venue.verified && <AlertCircle className="w-3 h-3 text-yellow-500" />}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <VenueTypeBadge type={venue.venueType} />
                  <H5IndexBadge h5Index={venue.h5Index} />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">{venue.name}</p>
              </button>
            ))}

            {displayedVenues.length === 0 && (
              <div className="col-span-2 text-center py-8 text-gray-500">
                No venues found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchQuery && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-80 overflow-y-auto">
          {isSearching ? (
            <div className="col-span-full text-center py-8 text-gray-500">
              Searching...
            </div>
          ) : searchResults.length > 0 ? (
            searchResults.map(venue => (
              <button
                key={venue.id}
                type="button"
                onClick={() => handleSelect(venue.id)}
                disabled={disabled}
                className={`
                  p-3 rounded-lg border text-left transition-all
                  ${venue.id === selectedVenueId
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }
                `}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900">{venue.acronym}</span>
                  {venue.id === selectedVenueId && <Check className="w-4 h-4 text-blue-600" />}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <VenueTypeBadge type={venue.venueType} />
                  <H5IndexBadge h5Index={venue.h5Index} />
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">{venue.name}</p>
              </button>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No venues found for "{searchQuery}"
            </div>
          )}
        </div>
      )}

      {/* Help Text */}
      <p className="text-xs text-gray-500 mt-4">
        <AlertCircle className="w-3 h-3 inline mr-1" />
        Venues marked with a warning icon have not been fully verified. h5-index from Google Scholar.
      </p>
    </div>
  );
};

export default VenueSelector;
