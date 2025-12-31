/**
 * Category Icons Component
 *
 * Maps Google Scholar categories to Lucide icons and colors.
 */

import React from 'react';
import {
  Briefcase,
  FlaskConical,
  Cpu,
  Heart,
  BookOpen,
  Leaf,
  Atom,
  Users,
  BookMarked,
  Newspaper,
  LucideIcon
} from 'lucide-react';
import type { ScholarCategory, VenueType } from '../types/venue';

/**
 * Category icon mapping
 */
export const CATEGORY_ICONS: Record<ScholarCategory, LucideIcon> = {
  'business-economics-management': Briefcase,
  'chemical-material-sciences': FlaskConical,
  'engineering-computer-science': Cpu,
  'health-medical-sciences': Heart,
  'humanities-literature-arts': BookOpen,
  'life-sciences-earth-sciences': Leaf,
  'physics-mathematics': Atom,
  'social-sciences': Users
};

/**
 * Category color mapping (Tailwind classes)
 */
export const CATEGORY_COLORS: Record<ScholarCategory, { bg: string; text: string; border: string; light: string }> = {
  'business-economics-management': {
    bg: 'bg-blue-600',
    text: 'text-blue-600',
    border: 'border-blue-600',
    light: 'bg-blue-50'
  },
  'chemical-material-sciences': {
    bg: 'bg-orange-600',
    text: 'text-orange-600',
    border: 'border-orange-600',
    light: 'bg-orange-50'
  },
  'engineering-computer-science': {
    bg: 'bg-purple-600',
    text: 'text-purple-600',
    border: 'border-purple-600',
    light: 'bg-purple-50'
  },
  'health-medical-sciences': {
    bg: 'bg-red-600',
    text: 'text-red-600',
    border: 'border-red-600',
    light: 'bg-red-50'
  },
  'humanities-literature-arts': {
    bg: 'bg-amber-600',
    text: 'text-amber-600',
    border: 'border-amber-600',
    light: 'bg-amber-50'
  },
  'life-sciences-earth-sciences': {
    bg: 'bg-green-600',
    text: 'text-green-600',
    border: 'border-green-600',
    light: 'bg-green-50'
  },
  'physics-mathematics': {
    bg: 'bg-cyan-600',
    text: 'text-cyan-600',
    border: 'border-cyan-600',
    light: 'bg-cyan-50'
  },
  'social-sciences': {
    bg: 'bg-indigo-600',
    text: 'text-indigo-600',
    border: 'border-indigo-600',
    light: 'bg-indigo-50'
  }
};

/**
 * Category display names
 */
export const CATEGORY_NAMES: Record<ScholarCategory, string> = {
  'business-economics-management': 'Business, Economics & Management',
  'chemical-material-sciences': 'Chemical & Material Sciences',
  'engineering-computer-science': 'Engineering & Computer Science',
  'health-medical-sciences': 'Health & Medical Sciences',
  'humanities-literature-arts': 'Humanities, Literature & Arts',
  'life-sciences-earth-sciences': 'Life Sciences & Earth Sciences',
  'physics-mathematics': 'Physics & Mathematics',
  'social-sciences': 'Social Sciences'
};

/**
 * Category short names (for tabs)
 */
export const CATEGORY_SHORT_NAMES: Record<ScholarCategory, string> = {
  'business-economics-management': 'Business',
  'chemical-material-sciences': 'Chemistry',
  'engineering-computer-science': 'CS & Eng',
  'health-medical-sciences': 'Medical',
  'humanities-literature-arts': 'Humanities',
  'life-sciences-earth-sciences': 'Life Sci',
  'physics-mathematics': 'Physics',
  'social-sciences': 'Social'
};

/**
 * Venue type icons
 */
export const VENUE_TYPE_ICONS: Record<VenueType, LucideIcon> = {
  journal: BookMarked,
  conference: Newspaper
};

/**
 * Venue type colors
 */
export const VENUE_TYPE_COLORS: Record<VenueType, { bg: string; text: string }> = {
  journal: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  conference: { bg: 'bg-violet-100', text: 'text-violet-700' }
};

/**
 * Get category icon component
 */
export function getCategoryIcon(category: ScholarCategory): LucideIcon {
  return CATEGORY_ICONS[category] || BookOpen;
}

/**
 * Get category colors
 */
export function getCategoryColors(category: ScholarCategory) {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS['business-economics-management'];
}

/**
 * CategoryIcon component
 */
interface CategoryIconProps {
  category: ScholarCategory;
  size?: number;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  category,
  size = 20,
  className = ''
}) => {
  const Icon = CATEGORY_ICONS[category];
  const colors = CATEGORY_COLORS[category];

  if (!Icon) return null;

  return <Icon size={size} className={`${colors.text} ${className}`} />;
};

/**
 * VenueTypeIcon component
 */
interface VenueTypeIconProps {
  type: VenueType;
  size?: number;
  className?: string;
}

export const VenueTypeIcon: React.FC<VenueTypeIconProps> = ({
  type,
  size = 16,
  className = ''
}) => {
  const Icon = VENUE_TYPE_ICONS[type];
  const colors = VENUE_TYPE_COLORS[type];

  return <Icon size={size} className={`${colors.text} ${className}`} />;
};

/**
 * VenueTypeBadge component
 */
interface VenueTypeBadgeProps {
  type: VenueType;
  className?: string;
}

export const VenueTypeBadge: React.FC<VenueTypeBadgeProps> = ({
  type,
  className = ''
}) => {
  const colors = VENUE_TYPE_COLORS[type];
  const Icon = VENUE_TYPE_ICONS[type];

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text} ${className}`}>
      <Icon size={12} />
      {type === 'journal' ? 'Journal' : 'Conference'}
    </span>
  );
};

/**
 * H5IndexBadge component
 */
interface H5IndexBadgeProps {
  h5Index?: number;
  className?: string;
}

export const H5IndexBadge: React.FC<H5IndexBadgeProps> = ({
  h5Index,
  className = ''
}) => {
  if (!h5Index) return null;

  // Color based on h5-index value
  let colorClass = 'bg-gray-100 text-gray-700';
  if (h5Index >= 100) {
    colorClass = 'bg-yellow-100 text-yellow-800';
  } else if (h5Index >= 50) {
    colorClass = 'bg-blue-100 text-blue-700';
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colorClass} ${className}`}>
      h5: {h5Index}
    </span>
  );
};

export default CategoryIcon;
