/**
 * Conference Selector Component
 *
 * Allows users to select which conference they are targeting for their paper.
 * Displays conferences grouped by domain with descriptions.
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, AlertCircle, Globe, BookOpen, Cpu, ExternalLink, FileText, Users, Edit3 } from 'lucide-react';
import {
  getConferencesByTier,
  setCurrentConference,
  getCurrentConferenceId,
  loadConferenceConfig
} from '../services/conferenceService';
import type { ConferenceMetadata, ConferenceId, ConferenceConfig } from '../types/conference';

interface ConferenceSelectorProps {
  onConferenceChange?: (conferenceId: ConferenceId) => void;
  disabled?: boolean;
  compact?: boolean;
}

const CATEGORY_INFO = {
  1: {
    label: 'Information Systems',
    description: 'Premier IS conferences',
    icon: Globe,
    color: 'text-blue-600'
  },
  2: {
    label: 'Management & Business',
    description: 'Management and decision sciences conferences',
    icon: BookOpen,
    color: 'text-green-600'
  },
  3: {
    label: 'Computer Science & AI',
    description: 'CS/ML/AI conferences',
    icon: Cpu,
    color: 'text-purple-600'
  }
};

const DOMAIN_LABELS: Record<string, string> = {
  'information-systems': 'Information Systems',
  'management': 'Management',
  'operations-research': 'Operations Research',
  'decision-sciences': 'Decision Sciences',
  'human-computer-interaction': 'HCI',
  'machine-learning': 'Machine Learning',
  'artificial-intelligence': 'Artificial Intelligence'
};

const ConferenceSelector: React.FC<ConferenceSelectorProps> = ({
  onConferenceChange,
  disabled = false,
  compact = false
}) => {
  const [conferences, setConferences] = useState<Record<number, ConferenceMetadata[]>>({});
  const [selectedId, setSelectedId] = useState<ConferenceId>('icis');
  const [selectedConfig, setSelectedConfig] = useState<ConferenceConfig | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadConferences();
  }, []);

  useEffect(() => {
    // Load full config when selection changes
    if (selectedId) {
      loadConferenceConfig(selectedId).then(setSelectedConfig).catch(console.error);
    }
  }, [selectedId]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const loadConferences = async () => {
    try {
      const byTier = await getConferencesByTier();
      setConferences(byTier);
      setSelectedId(getCurrentConferenceId());
    } catch (error) {
      console.error('Failed to load conferences:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (conferenceId: ConferenceId) => {
    setSelectedId(conferenceId);
    setCurrentConference(conferenceId);
    setIsOpen(false);
    onConferenceChange?.(conferenceId);
  };

  const getSelectedConference = (): ConferenceMetadata | undefined => {
    for (const tier of Object.values(conferences)) {
      const found = tier.find(c => c.id === selectedId);
      if (found) return found;
    }
    return undefined;
  };

  const selected = getSelectedConference();

  if (loading) {
    return (
      <div className="animate-pulse bg-gray-200 rounded-lg h-12 w-full" />
    );
  }

  if (compact) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg border
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50 cursor-pointer'}
            ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-300'}
          `}
        >
          <span className="font-medium">{selected?.acronym || 'Select Conference'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
            {Object.entries(conferences).map(([tier, confs]) => (
              <div key={tier}>
                <div className="px-3 py-2 bg-gray-50 text-xs font-semibold text-gray-600 border-b border-gray-100">
                  {CATEGORY_INFO[Number(tier) as 1 | 2 | 3].label}
                </div>
                {confs.map(conf => (
                  <button
                    key={conf.id}
                    type="button"
                    onClick={() => handleSelect(conf.id)}
                    className={`
                      w-full px-3 py-2.5 text-left flex items-center gap-2 hover:bg-blue-50 transition-colors
                      ${conf.id === selectedId ? 'bg-blue-50 border-l-2 border-blue-500' : ''}
                    `}
                  >
                    {conf.id === selectedId ? (
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <span className={`block ${conf.id === selectedId ? 'font-semibold text-blue-700' : 'font-medium text-gray-900'}`}>
                        {conf.acronym}
                      </span>
                      <span className="block text-xs text-gray-500 truncate">{conf.name}</span>
                    </div>
                    {!conf.verified && (
                      <AlertCircle className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" title="Not fully verified" />
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Target Conference</h3>
        {selected && !selected.verified && (
          <span className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
            <AlertCircle className="w-3 h-3" />
            Configuration needs verification
          </span>
        )}
      </div>

      {/* Selected Conference Display with Official Links */}
      {selected && (
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">{selected.acronym.slice(0, 2)}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{selected.acronym}</h4>
              <p className="text-sm text-gray-600">{selected.name}</p>
              <p className="text-xs text-gray-500 mt-1">{DOMAIN_LABELS[selected.domain] || selected.domain}</p>
            </div>
          </div>

          {/* Official Links - Call for Papers, Submission Instructions, Reviewer Guidelines */}
          {selectedConfig?.officialLinks && (
            <div className="mt-4 pt-4 border-t border-blue-200">
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
                    Conference Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Conference Selection Grid - Grouped by Category (no tier labels) */}
      <div className="space-y-6">
        {Object.entries(conferences).map(([tier, confs]) => {
          const tierNum = Number(tier) as 1 | 2 | 3;
          const categoryInfo = CATEGORY_INFO[tierNum];
          const CategoryIcon = categoryInfo.icon;

          return (
            <div key={tier}>
              <div className="flex items-center gap-2 mb-3">
                <CategoryIcon className={`w-5 h-5 ${categoryInfo.color}`} />
                <h4 className="font-medium text-gray-900">{categoryInfo.label}</h4>
              </div>
              <p className="text-sm text-gray-500 mb-3">{categoryInfo.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {confs.map(conf => (
                  <button
                    key={conf.id}
                    type="button"
                    onClick={() => !disabled && handleSelect(conf.id)}
                    disabled={disabled}
                    className={`
                      p-3 rounded-lg border text-left transition-all
                      ${conf.id === selectedId
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }
                      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{conf.acronym}</span>
                      {conf.id === selectedId && <Check className="w-4 h-4 text-blue-600" />}
                      {!conf.verified && conf.id !== selectedId && (
                        <AlertCircle className="w-3 h-3 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{conf.description}</p>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Help Text */}
      <p className="text-xs text-gray-500 mt-4">
        <AlertCircle className="w-3 h-3 inline mr-1" />
        Conferences marked with a warning icon have not been fully verified.
      </p>
    </div>
  );
};

export default ConferenceSelector;
