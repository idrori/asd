# Semantic Scholar Integration Plan (Research-Backed)

**Updated:** December 30, 2025
**Based on:** Recent academic research on LLM-based literature review generation (2024-2025)

---

## Executive Summary

This plan integrates Semantic Scholar API into the reference generation pipeline using a **hybrid LLM + verification** approach. Research shows:
- Even advanced LLMs hallucinate references (Dec 2024 arxiv study)
- Multi-layer quality control achieves <0.5% hallucination rate (July 2024 study)
- Verification is "crucial for success" (LitLLM, ServiceNow)
- 50-90% of LLM citations may be unsupported without verification (SourceCheckup)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        HYBRID REFERENCE PIPELINE                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  PHASE 1: LLM Generation (Current)                                       │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Gemini generates Literature Review + BibTeX references          │   │
│  │  with recency requirements (60% from 2020-2025)                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                              ▼                                           │
│  PHASE 2: Validation (NEW)                                               │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Parse BibTeX → Extract titles/authors → Query Semantic Scholar  │   │
│  │  Classify: VERIFIED | PARTIAL | UNVERIFIED | REJECTED            │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                              ▼                                           │
│  PHASE 3: Discovery (NEW)                                                │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Extract keywords from interview → Search SS for additional      │   │
│  │  papers → Citation graph traversal for highly-cited works        │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                              ▼                                           │
│  PHASE 4: Merge & Deduplicate (NEW)                                      │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Combine verified LLM refs + SS discoveries                      │   │
│  │  Dedupe by DOI/title similarity → Rank by relevance              │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                              ▼                                           │
│  PHASE 5: Final BibTeX Generation (NEW)                                  │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Generate clean BibTeX from SS metadata                          │   │
│  │  Track validation status for quality metrics                     │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Detailed Phase Specifications

### Phase 1: LLM Generation (EXISTING - Minor Updates)

**Current Location:** `services/geminiService.ts` lines 932-1176

**What Exists:**
- Gemini generates Literature Review section with inline citations
- Gemini generates BibTeX references at the end
- Recency requirements already added (60% from 2020-2025)

**Minor Updates Needed:**

| File | Location | Change |
|------|----------|--------|
| `services/geminiService.ts` | Lines 988-1052 (short paper refs) | Add instruction: "For each reference, include the paper's main contribution in a comment" |
| `services/geminiService.ts` | Lines 1102-1176 (full paper refs) | Same as above |
| `prompts/ICISbuilder.txt` | Lines 1725-1745 | Add note that references will be validated by Semantic Scholar |

**New Prompt Addition (geminiService.ts):**
```
⚠️ VALIDATION NOTE: All references will be verified against Semantic Scholar.
For each reference, briefly note why it's relevant (in a BibTeX comment):
% Relevance: Foundational TAM paper for technology acceptance framework

@article{davis1989perceived,
  ...
}
```

---

### Phase 2: Validation (NEW)

**New File:** `services/referenceValidationService.ts`

**Purpose:** Validate LLM-generated references against Semantic Scholar

**API Endpoint Enhancement:** `api/semantic-scholar.ts`

**Current Functionality (line 53-116):**
- Searches for papers by query string
- Returns: title, authors, year, venue, citationCount, url, apaReference

**New Functionality to Add:**

```typescript
// NEW: Validation response with confidence classification
interface ValidationResult {
  bibKey: string;           // e.g., "davis1989perceived"
  originalRef: ParsedBibTeX;
  status: 'VERIFIED' | 'PARTIAL' | 'UNVERIFIED' | 'REJECTED';
  confidence: number;       // 0-1 score
  ssMatch?: {
    paperId: string;
    title: string;
    authors: string[];
    year: number;
    doi?: string;
    citationCount: number;
  };
  discrepancies?: string[]; // e.g., ["Year mismatch: 1989 vs 1990"]
}
```

**Validation Logic:**

| Status | Criteria |
|--------|----------|
| VERIFIED | Title match >90% similarity AND author last names match AND year exact |
| PARTIAL | Title match >80% OR (title match >70% AND year within ±1) |
| UNVERIFIED | No match found but reference appears well-formed |
| REJECTED | Contradicts SS data OR clearly malformed |

**Files to Create/Modify:**

| File | Action | Description |
|------|--------|-------------|
| `services/referenceValidationService.ts` | CREATE | New validation service |
| `api/semantic-scholar.ts` | MODIFY | Add `/validate` action, increase limit to 30 |
| `types.ts` | MODIFY | Add ValidationResult, ParsedBibTeX types |

---

### Phase 3: Discovery (NEW)

**New File:** `services/referenceDiscoveryService.ts`

**Purpose:** Find additional relevant papers from Semantic Scholar

**Discovery Methods (based on LitLLM architecture):**

1. **Keyword Search**
   - Extract key concepts from interview transcript using LLM
   - Search SS with fieldsOfStudy filter: "Computer Science"
   - Filter by year: 2020-2025 for recency requirement

2. **Citation Graph Traversal**
   - For each VERIFIED reference, fetch its references and citations
   - Identify highly-cited papers in the network
   - Add papers cited by multiple verified refs

3. **Relevance Ranking**
   - Score papers by: citation count, recency, keyword match
   - Prioritize: recent + highly-cited + topic-relevant

**API Endpoint Enhancement:** `api/semantic-scholar.ts`

**New Actions to Add:**

```typescript
// Action: 'search' - keyword search with filters
interface SearchAction {
  action: 'search';
  keywords: string[];
  fieldsOfStudy?: string[];  // default: ["Computer Science"]
  yearRange?: { min: number; max: number };
  limit?: number;  // default: 20
}

// Action: 'citations' - get paper's references/citations
interface CitationsAction {
  action: 'citations';
  paperId: string;
  type: 'references' | 'citations';
  limit?: number;  // default: 10
}
```

**Files to Create/Modify:**

| File | Action | Description |
|------|--------|-------------|
| `services/referenceDiscoveryService.ts` | CREATE | New discovery service |
| `api/semantic-scholar.ts` | MODIFY | Add search and citations actions |

---

### Phase 4: Merge & Deduplicate (NEW)

**Location:** `services/referenceValidationService.ts` (extended)

**Purpose:** Combine validated LLM refs with SS discoveries, remove duplicates

**Deduplication Logic:**

```typescript
function isDuplicate(ref1: Reference, ref2: Reference): boolean {
  // 1. Exact DOI match
  if (ref1.doi && ref2.doi && ref1.doi === ref2.doi) return true;

  // 2. Title similarity >90%
  if (titleSimilarity(ref1.title, ref2.title) > 0.9) return true;

  // 3. Same first author + same year + title similarity >80%
  if (ref1.firstAuthor === ref2.firstAuthor &&
      ref1.year === ref2.year &&
      titleSimilarity(ref1.title, ref2.title) > 0.8) return true;

  return false;
}
```

**Merge Priority:**
1. VERIFIED LLM references (keep, update metadata from SS)
2. PARTIAL LLM references (keep, flag for review)
3. SS discoveries (add if not duplicate, high relevance)
4. UNVERIFIED LLM references (keep if plausible, mark status)
5. REJECTED references (remove)

**Final Count Targets:**
- Short paper: 15-20 references
- Full paper: 25-35 references
- At least 60% from 2020-2025
- At least 80% VERIFIED or PARTIAL status

---

### Phase 5: Final BibTeX Generation (NEW)

**Location:** `services/referenceValidationService.ts` (extended)

**Purpose:** Generate clean BibTeX from validated/discovered papers

**Output Format:**

```bibtex
% === REFERENCE VALIDATION REPORT ===
% Total references: 25
% Verified: 18 (72%)
% Partial: 4 (16%)
% Unverified: 3 (12%)
% Rejected: 0 (0%)
% Recency (2020-2025): 16 (64%)
% ===================================

% Status: VERIFIED | Source: LLM+SS
@article{davis1989perceived,
  author = {Davis, Fred D.},
  title = {Perceived usefulness, perceived ease of use, and user acceptance of information technology},
  journal = {MIS Quarterly},
  volume = {13},
  number = {3},
  pages = {319--340},
  year = {1989},
  doi = {10.2307/249008}
}

% Status: PARTIAL | Discrepancy: Page numbers differ
@article{venkatesh2003user,
  ...
}

% Status: DISCOVERED | Source: SS-search | Relevance: High
@article{newpaper2024topic,
  ...
}
```

---

## Code Changes Summary

### New Files to Create

| File | Purpose | Est. Lines |
|------|---------|------------|
| `services/referenceValidationService.ts` | Main validation/discovery orchestration | ~400 |
| `services/bibtexParser.ts` | Parse BibTeX to structured data | ~150 |
| `services/stringSimilarity.ts` | Title/author matching utilities | ~50 |

### Existing Files to Modify

| File | Changes | Lines Affected |
|------|---------|----------------|
| `api/semantic-scholar.ts` | Add validate, search, citations actions | +150 |
| `services/geminiService.ts` | Add validation note to prompts, call validation after generation | +30, modify ~10 |
| `services/builderService.ts` | Integrate validation pipeline after references generated | +20 |
| `types.ts` | Add new interfaces | +50 |
| `prompts/ICISbuilder.txt` | Add validation note, update instructions | +10 |

### API Endpoint Changes

**`api/semantic-scholar.ts` - Enhanced Actions:**

| Action | Method | Input | Output |
|--------|--------|-------|--------|
| `queries` (existing) | POST | `{ queries: string[] }` | `{ results: PaperResult[] }` |
| `validate` (new) | POST | `{ bibtex: string }` | `{ validations: ValidationResult[] }` |
| `search` (new) | POST | `{ keywords: string[], filters: {...} }` | `{ papers: SSPaper[] }` |
| `citations` (new) | POST | `{ paperId: string, type: string }` | `{ papers: SSPaper[] }` |

---

## Quality Metrics to Track

Based on the December 2024 evaluation framework:

| Metric | Target | Measurement |
|--------|--------|-------------|
| Hallucination Rate | <5% | % of LLM refs with REJECTED status |
| Verification Rate | >80% | % of refs with VERIFIED or PARTIAL status |
| Recency Score | >60% | % of refs from 2020-2025 |
| Coverage Rate | >90% | % of interview topics with citations |
| Discovery Contribution | 20-30% | % of final refs from SS discovery |

---

## Integration Points

### Where Validation Pipeline Gets Called

```
builderService.ts
  └── generatePaperSections()
        └── for each section...
              └── generateSection()  [existing]
                    └── if section.key === 'references'
                          └── validateAndEnrichReferences()  [NEW]
                                ├── parseGeneratedBibtex()
                                ├── validateReferences()  [Phase 2]
                                ├── discoverAdditionalRefs()  [Phase 3]
                                ├── mergeAndDeduplicate()  [Phase 4]
                                └── generateFinalBibtex()  [Phase 5]
```

### Data Flow

```
Interview Transcript
        ↓
   [Gemini LLM]
        ↓
Literature Review + BibTeX (with inline citations)
        ↓
   [BibTeX Parser]
        ↓
Parsed References Array
        ↓
   [SS Validation API]  ←── Semantic Scholar
        ↓
Validated References (VERIFIED/PARTIAL/UNVERIFIED/REJECTED)
        ↓
   [SS Discovery API]  ←── Semantic Scholar
        ↓
Additional Relevant Papers
        ↓
   [Merge & Dedupe]
        ↓
Final Reference Set
        ↓
   [BibTeX Generator]
        ↓
Clean BibTeX with Validation Report
```

---

## Prompt Changes Detail

### `services/geminiService.ts` - References Prompt Update

**Location:** Lines 988-1052 (short paper), Lines 1102-1176 (full paper)

**Add to existing prompt:**

```
⚠️ VALIDATION NOTE: All references will be automatically verified against Semantic Scholar.
- References that cannot be verified may be replaced or supplemented
- For best results, use well-known papers with standard citation formats
- Include DOI when known (doi = {10.xxxx/xxxxx})

For each reference, add a BibTeX comment explaining relevance:
% Relevance: [Brief explanation of why this paper is cited]
```

### `prompts/ICISbuilder.txt` - Section F.10 Update

**Location:** Lines 1725-1745

**Add after existing content:**

```
**Reference Validation Pipeline:**
All generated references are automatically validated against Semantic Scholar:
1. Title and author matching against SS database
2. Metadata verification (year, venue, DOI)
3. Automatic discovery of additional relevant papers
4. Quality report included in final bibliography

This ensures citation integrity and reduces hallucination risk per recent research
(arxiv.org/abs/2412.13612, arxiv.org/abs/2407.20906).
```

---

## Error Handling

| Scenario | Handling |
|----------|----------|
| SS API rate limit (429) | Exponential backoff, max 3 retries |
| SS API timeout | Fall back to unvalidated refs with warning |
| No SS matches for any refs | Keep LLM refs, log warning, add note to report |
| <50% verification rate | Trigger LLM regeneration with stricter prompt |
| SS API completely unavailable | Graceful degradation to current (LLM-only) behavior |

---

## Testing Plan

1. **Unit Tests**
   - BibTeX parser accuracy
   - String similarity functions
   - Validation classification logic

2. **Integration Tests**
   - End-to-end validation pipeline
   - SS API mocking for rate limits

3. **Quality Tests**
   - Run on 10 sample interview transcripts
   - Measure verification rates
   - Compare citation quality before/after

---

## Implementation Order

1. **Week 1:** Create `bibtexParser.ts`, `stringSimilarity.ts`, basic types
2. **Week 2:** Enhance `api/semantic-scholar.ts` with new actions
3. **Week 3:** Create `referenceValidationService.ts` (Phases 2, 4, 5)
4. **Week 4:** Add discovery (Phase 3), integrate into builder pipeline
5. **Week 5:** Testing, tuning thresholds, documentation

---

## References

- [LLMs for Automated Literature Review (Dec 2024)](https://arxiv.org/abs/2412.13612)
- [LitLLM System](https://litllm.github.io/)
- [Automated Review Generation (July 2024)](https://arxiv.org/abs/2407.20906)
- [NVIDIA Citation Validation](https://developer.nvidia.com/blog/developing-an-ai-powered-tool-for-automatic-citation-validation-using-nvidia-nim/)
- [Semantic Scholar API](https://api.semanticscholar.org/api-docs/)
