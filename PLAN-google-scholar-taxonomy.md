# Plan: Google Scholar Taxonomy Integration

## Overview

This plan outlines how to update ConferenceCopilot to support the full Google Scholar academic venue taxonomy, covering **8 major categories** and **200+ subcategories** with support for both **journals and conferences**.

---

## Google Scholar Taxonomy Structure

### Primary Categories (8)

| # | Category | Subcategories | Key Venues |
|---|----------|---------------|------------|
| 1 | **Business, Economics & Management** | 16 | AOM, ICIS, MISQ |
| 2 | **Chemical & Material Sciences** | 17 | Chemical Reviews, ACS Nano |
| 3 | **Engineering & Computer Science** | 56 | NeurIPS, CHI, IEEE, ACM |
| 4 | **Health & Medical Sciences** | 69 | NEJM, Lancet, JAMA |
| 5 | **Humanities, Literature & Arts** | 26 | Philosophy journals |
| 6 | **Life Sciences & Earth Sciences** | 39 | Nature, Cell, Science |
| 7 | **Physics & Mathematics** | 23 | Physical Review, Math Annalen |
| 8 | **Social Sciences** | 52 | Psychology, Sociology venues |

### Full Subcategory Listing

#### 1. Business, Economics & Management (16)
- Accounting & Taxation
- Business, Economics & Management (general)
- Development Economics
- Economic History
- Economic Policy
- Economics
- Educational Administration
- Emergency Management
- Entrepreneurship & Innovation
- Finance
- Game Theory and Decision Science
- Human Resources & Organizations
- International Business
- Marketing
- Strategic Management
- Tourism & Hospitality

#### 2. Chemical & Material Sciences (17)
- Analytical Chemistry
- Biochemistry
- Ceramic Engineering
- Chemical & Material Sciences (general)
- Chemical Kinetics & Catalysis
- Combustion & Propulsion
- Composite Materials
- Crystallography & Structural Chemistry
- Dispersion Chemistry
- Electrochemistry
- Inorganic Chemistry
- Materials Engineering
- Medicinal Chemistry
- Nanotechnology
- Oil, Petroleum & Natural Gas
- Organic Chemistry
- Polymers & Plastics

#### 3. Engineering & Computer Science (56)
- Architecture
- Artificial Intelligence
- Automation & Control Theory
- Aviation & Aerospace Engineering
- Bioinformatics & Computational Biology
- Biomedical Technology
- Biotechnology
- Ceramic Engineering
- Civil Engineering
- Combustion & Propulsion
- Computational Linguistics
- Computer Graphics
- Computer Hardware Design
- Computer Networks & Wireless Communication
- Computer Security & Cryptography
- Computer Vision & Pattern Recognition
- Computing Systems
- Data Mining & Analysis
- Databases & Information Systems
- Educational Technology
- Engineering & Computer Science (general)
- Environmental & Geological Engineering
- Evolutionary Computation
- Food Science & Technology
- Fuzzy Systems
- Game Theory and Decision Science
- Human Computer Interaction
- Library & Information Science
- Manufacturing & Machinery
- Materials Engineering
- Mechanical Engineering
- Medical Informatics
- Metallurgy
- Microelectronics & Electronic Packaging
- Mining & Mineral Resources
- Multimedia
- Nanotechnology
- Ocean & Marine Engineering
- Oil, Petroleum & Natural Gas
- Operations Research
- Plasma & Fusion
- Power Engineering
- Quality & Reliability
- Radar, Positioning & Navigation
- Remote Sensing
- Robotics
- Signal Processing
- Software Systems
- Structural Engineering
- Sustainable Energy
- Technology Law
- Textile Engineering
- Theoretical Computer Science
- Transportation
- Water Supply & Treatment
- Wood Science & Technology

#### 4. Health & Medical Sciences (69)
- Addiction
- AIDS & HIV
- Alternative & Traditional Medicine
- Anesthesiology
- Audiology, Speech & Language Pathology
- Bioethics
- Biomedical Technology
- Cardiology
- Child & Adolescent Psychology
- Clinical Laboratory Science
- Communicable Diseases
- Critical Care
- Dentistry
- Dermatology
- Developmental Disabilities
- Diabetes
- Emergency Medicine
- Endocrinology
- Epidemiology
- Gastroenterology & Hepatology
- Genetics & Genomics
- Gerontology & Geriatric Medicine
- Gynecology & Obstetrics
- Health & Medical Sciences (general)
- Heart & Thoracic Surgery
- Hematology
- Hospice & Palliative Care
- Immunology
- Medical Informatics
- Medicinal Chemistry
- Molecular Biology
- Natural Medicines & Medicinal Plants
- Neurology
- Neurosurgery
- Nuclear Medicine, Radiotherapy & Molecular Imaging
- Nursing
- Nutrition Science
- Obesity
- Oncology
- Ophthalmology & Optometry
- Oral & Maxillofacial Surgery
- Orthopedic Medicine & Surgery
- Otolaryngology
- Pain & Pain Management
- Pathology
- Pediatric Medicine
- Pharmacology & Pharmacy
- Physical Education & Sports Medicine
- Physiology
- Plastic & Reconstructive Surgery
- Pregnancy & Childbirth
- Primary Health Care
- Psychiatry
- Psychology
- Public Health
- Pulmonology
- Radiology & Medical Imaging
- Rehabilitation Therapy
- Reproductive Health
- Rheumatology
- Social Psychology
- Surgery
- Toxicology
- Transplantation
- Tropical Medicine & Parasitology
- Urology & Nephrology
- Vascular Medicine
- Veterinary Medicine
- Virology

#### 5. Humanities, Literature & Arts (26)
- African Studies & History
- American Literature & Studies
- Asian Studies & History
- Canadian Studies & History
- Chinese Studies & History
- Communication
- Drama & Theater Arts
- English Language & Literature
- Epistemology & Scientific History
- Ethnic & Cultural Studies
- Feminism & Women's Studies
- Film
- Foreign Language Learning
- French Studies
- Gender Studies
- History
- Humanities, Literature & Arts (general)
- Language & Linguistics
- Latin American Studies
- Literature & Writing
- Middle Eastern & Islamic Studies
- Music & Musicology
- Philosophy
- Religion
- Sex & Sexuality
- Visual Arts

#### 6. Life Sciences & Earth Sciences (39)
- Agronomy & Crop Science
- Animal Behavior & Ethology
- Animal Husbandry
- Atmospheric Sciences
- Biochemistry
- Biodiversity & Conservation Biology
- Bioinformatics & Computational Biology
- Biophysics
- Biotechnology
- Birds
- Botany
- Cell Biology
- Developmental Biology & Embryology
- Ecology
- Environmental & Geological Engineering
- Environmental Sciences
- Evolutionary Biology
- Food Science & Technology
- Forests & Forestry
- Geochemistry & Mineralogy
- Geology
- Hydrology & Water Resources
- Insects & Arthropods
- Life Sciences & Earth Sciences (general)
- Marine Sciences & Fisheries
- Microbiology
- Molecular Biology
- Mycology
- Oceanography
- Paleontology
- Pest Control & Pesticides
- Plant Pathology
- Proteomics, Peptides & Aminoacids
- Soil Sciences
- Sustainable Development
- Sustainable Energy
- Virology
- Wood Science & Technology
- Zoology

#### 7. Physics & Mathematics (23)
- Acoustics & Sound
- Algebra
- Astronomy & Astrophysics
- Biophysics
- Computational Mathematics
- Condensed Matter Physics & Semiconductors
- Discrete Mathematics
- Electromagnetism
- Fluid Mechanics
- Geometry
- Geophysics
- High Energy & Nuclear Physics
- Mathematical Analysis
- Mathematical Optimization
- Mathematical Physics
- Nonlinear Science
- Optics & Photonics
- Physics & Mathematics (general)
- Plasma & Fusion
- Probability & Statistics with Applications
- Pure & Applied Mathematics
- Spectroscopy & Molecular Physics
- Thermal Sciences

#### 8. Social Sciences (52)
- Academic & Psychological Testing
- African Studies & History
- Anthropology
- Archaeology
- Architecture
- Asian Studies & History
- Bioethics
- Canadian Studies & History
- Chinese Studies & History
- Cognitive Science
- Criminology, Criminal Law & Policing
- Development Economics
- Diplomacy & International Relations
- Early Childhood Education
- Economic History
- Education
- Educational Administration
- Educational Psychology & Counseling
- Educational Technology
- Environmental & Occupational Medicine
- Environmental Law & Policy
- Epistemology & Scientific History
- Ethics
- European Law
- Family Studies
- Feminism & Women's Studies
- Forensic Science
- Geography & Cartography
- Health Policy & Medical Law
- Higher Education
- History
- Human Migration
- Human Resources & Organizations
- International Law
- Law
- Library & Information Science
- Middle Eastern & Islamic Studies
- Military Studies
- Paleontology
- Political Science
- Public Health
- Public Policy & Administration
- Science & Engineering Education
- Sex & Sexuality
- Social Sciences (general)
- Social Work
- Sociology
- Special Education
- Sustainable Development
- Teaching & Teacher Education
- Technology Law
- Urban Studies & Planning

---

## Current System Analysis

### Current Structure
```
types/conference.ts:
- ConferenceTier: 1 | 2 | 3
- ResearchDomain: 7 domains (information-systems, management, etc.)
- ConferenceId: 13 specific conferences

public/conferences/registry.json:
- 13 conferences grouped by tier

components/ConferenceSelector.tsx:
- CATEGORY_INFO: 3 categories (IS, Management, CS/AI)
- DOMAIN_LABELS: 7 domain labels
```

### Limitations
1. Hard-coded 3-tier system doesn't scale
2. Only 7 research domains vs 200+ subcategories
3. No distinction between journals and conferences
4. ConferenceId is a union type - doesn't scale
5. UI only supports ~15 venues

---

## Proposed Changes

### Phase 1: Type System Updates

#### 1.1 Update `types/conference.ts`

```typescript
// NEW: Google Scholar-aligned category system
export type ScholarCategory =
  | 'business-economics-management'
  | 'chemical-material-sciences'
  | 'engineering-computer-science'
  | 'health-medical-sciences'
  | 'humanities-literature-arts'
  | 'life-sciences-earth-sciences'
  | 'physics-mathematics'
  | 'social-sciences';

// NEW: Subcategory as string (too many to enumerate)
export type ScholarSubcategory = string;

// NEW: Venue type (journal vs conference)
export type VenueType = 'journal' | 'conference';

// UPDATE: Replace tier with category/subcategory
export interface VenueMetadata {
  id: string;  // No longer a union type - dynamic
  name: string;
  acronym: string;
  category: ScholarCategory;
  subcategory: ScholarSubcategory;
  venueType: VenueType;
  description: string;
  verified: boolean;
  h5Index?: number;  // Google Scholar metric
  h5Median?: number; // Google Scholar metric
}

// KEEP but extend ConferenceConfig
export interface ConferenceConfig extends VenueMetadata {
  // ... existing fields
}

// NEW: Journal-specific config
export interface JournalConfig extends VenueMetadata {
  impactFactor?: number;
  publisher: string;
  openAccess: boolean;
  // Paper limits, citation style, etc.
}
```

#### 1.2 Update `types/conference.ts` - Remove Hard-coded IDs

```typescript
// REMOVE: ConferenceId union type
// REPLACE WITH: Dynamic string type
export type VenueId = string;

// NEW: Category metadata for UI
export interface CategoryMetadata {
  id: ScholarCategory;
  name: string;
  description: string;
  icon: string;  // Lucide icon name
  color: string;
  subcategories: SubcategoryMetadata[];
}

export interface SubcategoryMetadata {
  id: string;
  name: string;
  venueCount: number;
}
```

### Phase 2: Data Structure Updates

#### 2.1 New Registry Structure

**File: `public/conferences/registry.json`** → **`public/venues/registry.json`**

```json
{
  "schemaVersion": "2.0",
  "defaultVenue": "icis",
  "lastUpdated": "2025-12-31",
  "categories": {
    "business-economics-management": {
      "name": "Business, Economics & Management",
      "icon": "Briefcase",
      "color": "blue",
      "subcategories": {
        "information-systems": {
          "name": "Databases & Information Systems",
          "venues": ["icis", "ecis", "pacis", "amcis", "misq", "isr"]
        },
        "strategic-management": {
          "name": "Strategic Management",
          "venues": ["aom", "smj"]
        }
      }
    },
    "engineering-computer-science": {
      "name": "Engineering & Computer Science",
      "subcategories": {
        "artificial-intelligence": {
          "name": "Artificial Intelligence",
          "venues": ["neurips", "icml", "iclr", "aaai", "jmlr"]
        },
        "human-computer-interaction": {
          "name": "Human Computer Interaction",
          "venues": ["chi", "cscw", "uist", "ijhcs"]
        }
      }
    }
  },
  "venues": {
    "icis": { "type": "conference", "category": "business-economics-management", "subcategory": "information-systems" },
    "misq": { "type": "journal", "category": "business-economics-management", "subcategory": "information-systems" },
    "neurips": { "type": "conference", "category": "engineering-computer-science", "subcategory": "artificial-intelligence" }
  }
}
```

#### 2.2 New Directory Structure

```
public/
├── venues/
│   ├── registry.json          # Master registry
│   ├── categories.json        # Category metadata with icons
│   │
│   ├── conferences/           # Conference configs
│   │   ├── icis/
│   │   │   ├── config.json
│   │   │   ├── builder.txt
│   │   │   └── ...
│   │   ├── neurips/
│   │   └── ...
│   │
│   ├── journals/              # Journal configs
│   │   ├── misq/
│   │   │   ├── config.json
│   │   │   ├── builder.txt
│   │   │   └── ...
│   │   ├── isr/
│   │   └── ...
│   │
│   └── shared/                # Shared prompts/templates
│       ├── apa7-template.txt
│       ├── ieee-template.txt
│       └── ...
```

### Phase 3: Service Layer Updates

#### 3.1 Rename and Update `conferenceService.ts` → `venueService.ts`

```typescript
// NEW: Load categories with subcategories
export async function loadCategories(): Promise<CategoryMetadata[]>;

// NEW: Get venues by category
export async function getVenuesByCategory(category: ScholarCategory): Promise<VenueMetadata[]>;

// NEW: Get venues by subcategory
export async function getVenuesBySubcategory(category: ScholarCategory, subcategory: string): Promise<VenueMetadata[]>;

// NEW: Search venues
export async function searchVenues(query: string): Promise<VenueMetadata[]>;

// UPDATE: Generic venue loading
export async function loadVenueConfig(venueId: string): Promise<ConferenceConfig | JournalConfig>;

// KEEP: Current conference functions for backwards compatibility
export async function loadConferenceConfig(conferenceId: string): Promise<ConferenceConfig>;
```

### Phase 4: UI Component Updates

#### 4.1 New `VenueSelector.tsx` (Replace `ConferenceSelector.tsx`)

**Features:**
1. **Category Tabs**: 8 horizontal tabs for major categories
2. **Subcategory Sidebar**: Vertical list when category selected
3. **Venue Grid**: Cards showing venues in selected subcategory
4. **Search**: Global search across all venues
5. **Type Filter**: Toggle between journals/conferences/all
6. **Favorites**: Save frequently used venues
7. **Recent**: Show recently selected venues

**UI Layout:**
```
┌──────────────────────────────────────────────────────────────┐
│  [Search venues...]                    [Journals ▼] [★ Fav]  │
├──────────────────────────────────────────────────────────────┤
│ Business | Engineering | Health | Humanities | Life | Phys.. │
├──────────────────────────────────────────────────────────────┤
│ Subcategories    │  Venues                                   │
│ ─────────────────│───────────────────────────────────────────│
│ ○ AI             │  ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│ ○ HCI            │  │ NeurIPS │ │  ICML   │ │  ICLR   │     │
│ ● ML             │  │   ★★★   │ │   ★★★   │ │   ★★★   │     │
│ ○ Databases      │  │ h5: 278 │ │ h5: 237 │ │ h5: 303 │     │
│ ○ Security       │  └─────────┘ └─────────┘ └─────────┘     │
│ ○ Networks       │                                           │
│ ○ Robotics       │  ┌─────────┐ ┌─────────┐                 │
│ ○ Graphics       │  │  AAAI   │ │  JMLR   │ ← Journal       │
│ ○ Software       │  │   ★★☆   │ │   ★★★   │                 │
│                  │  │ h5: 180 │ │ h5: 112 │                 │
│                  │  └─────────┘ └─────────┘                 │
└──────────────────────────────────────────────────────────────┘
```

#### 4.2 Update `SetupStage.tsx`

- Replace `ConferenceSelector` with `VenueSelector`
- Add venue type indicator (conference vs journal)
- Show h5-index for selected venue

#### 4.3 New `CategoryIcons.tsx`

Map Google Scholar categories to Lucide icons:
```typescript
const CATEGORY_ICONS = {
  'business-economics-management': Briefcase,
  'chemical-material-sciences': FlaskConical,
  'engineering-computer-science': Cpu,
  'health-medical-sciences': Heart,
  'humanities-literature-arts': BookOpen,
  'life-sciences-earth-sciences': Leaf,
  'physics-mathematics': Atom,
  'social-sciences': Users
};
```

### Phase 5: Data Migration

#### 5.1 Migration Script

Create `scripts/migrate-to-venues.ts`:
1. Move `public/conferences/*` → `public/venues/conferences/*`
2. Generate new `registry.json` from existing configs
3. Update category/subcategory fields in each config
4. Create `categories.json` with full taxonomy

#### 5.2 Backwards Compatibility

- Keep `loadConferenceConfig()` working
- Keep `conferences/` path redirecting to `venues/conferences/`
- Deprecation warnings in console

### Phase 6: Add Initial Venue Configs

#### 6.1 Priority Venues to Add

**Journals (High Priority):**
- MIS Quarterly (misq)
- Information Systems Research (isr)
- Journal of the AIS (jais)
- JMLR (jmlr)
- Nature (nature)
- Science (science)

**Conferences (Medium Priority):**
- CSCW
- UIST
- KDD
- WWW
- SIGMOD
- VLDB

#### 6.2 Config Generation Tool

Create `scripts/generate-venue-config.ts`:
- Input: venue name + basic info
- Output: config.json with sensible defaults
- Uses templates based on venue type and category

---

## Implementation Order

### Step 1: Type System (Low Risk)
1. Add new types to `types/conference.ts`
2. Keep existing types for backwards compatibility
3. No UI/service changes yet

### Step 2: Data Structure (Medium Risk)
1. Create new `public/venues/` directory
2. Create `categories.json` with full taxonomy
3. Create new `registry.json` format
4. Keep old `conferences/` working

### Step 3: Service Layer (Medium Risk)
1. Create `venueService.ts` with new functions
2. Keep `conferenceService.ts` as facade
3. Test both paths work

### Step 4: UI Components (High Visibility)
1. Create `VenueSelector.tsx`
2. Update `SetupStage.tsx` to use new selector
3. Add search and filtering
4. Preserve existing functionality

### Step 5: Data Migration
1. Run migration script
2. Add 10+ new venue configs
3. Test all venues load correctly

### Step 6: Polish
1. Add h5-index display
2. Add favorites/recent
3. Add journal-specific features
4. Remove deprecated code

---

## File Changes Summary

### New Files
- `types/venue.ts` - New venue types
- `public/venues/registry.json` - New registry format
- `public/venues/categories.json` - Full taxonomy
- `services/venueService.ts` - New service
- `components/VenueSelector.tsx` - New UI component
- `components/CategoryIcons.tsx` - Icon mappings
- `scripts/migrate-to-venues.ts` - Migration script
- `scripts/generate-venue-config.ts` - Config generator

### Modified Files
- `types/conference.ts` - Add new types, deprecate old
- `services/conferenceService.ts` - Add deprecation, facade
- `components/dashboard/SetupStage.tsx` - Use new selector
- `components/Sidebar.tsx` - Update terminology

### Moved Files
- `public/conferences/*` → `public/venues/conferences/*`

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Breaking existing configs | High | Keep backwards compatibility layer |
| UI complexity | Medium | Progressive disclosure, search first |
| Data maintenance | Medium | Config generation tool |
| Performance (200+ venues) | Low | Lazy loading, caching |

---

## Success Metrics

1. All 13 existing conferences still work
2. UI loads in <500ms with full taxonomy
3. Can add new venue in <10 minutes
4. Search finds venues in <100ms
5. Users can distinguish journals from conferences

---

## Timeline Estimate

- Phase 1 (Types): 2-3 hours
- Phase 2 (Data): 3-4 hours
- Phase 3 (Services): 2-3 hours
- Phase 4 (UI): 4-6 hours
- Phase 5 (Migration): 2-3 hours
- Phase 6 (Polish): 2-3 hours

**Total: ~16-22 hours of implementation work**

---

## Questions to Resolve Before Implementation

1. Should journals have different workflow stages than conferences?
2. Should we fetch h5-index data from Google Scholar or maintain manually?
3. How should we handle venues that appear in multiple subcategories?
4. Should we support custom/user-added venues?
5. What's the minimum set of venues to launch with?
