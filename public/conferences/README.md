# Multi-Conference Academic Paper Copilot

This system supports generating academic papers for multiple conferences. Each conference has its own configuration, prompts, and formatting requirements.

## Supported Conferences

### Tier 1: Information Systems (Fully Supported)
| Conference | ID | Status | Notes |
|------------|-----|--------|-------|
| International Conference on Information Systems | `icis` | Verified | Baseline reference |
| European Conference on Information Systems | `ecis` | Verified | A4 paper size |
| Pacific Asia Conference on Information Systems | `pacis` | Verified | Similar to ICIS |
| Americas Conference on Information Systems | `amcis` | Verified | 10-page limit |
| Hawaii International Conference on System Sciences | `hicss` | Verified | IEEE format, 2-column |

### Tier 2: Management & Business
| Conference | ID | Status | Notes |
|------------|-----|--------|-------|
| Academy of Management Annual Meeting | `aom` | Needs Verification | Double-spaced, 25-40 pages |
| INFORMS Annual Meeting | `informs` | Needs Verification | Chicago citation style |
| Decision Sciences Institute | `dsi` | Needs Verification | Double-spaced format |

### Tier 3: Computer Science (Requires Adaptation)
| Conference | ID | Status | Notes |
|------------|-----|--------|-------|
| ACM CHI | `chi` | Needs Verification | ACM 2-column format |
| NeurIPS | `neurips` | Needs Verification | 9-page limit |
| ICML | `icml` | Needs Verification | 9-page limit |
| ICLR | `iclr` | Needs Verification | OpenReview format |
| AAAI | `aaai` | Needs Verification | AAAI 2-column format |

## Adding a New Conference

### Step 1: Create Conference Directory

Create a new directory under `/public/conferences/`:

```
public/conferences/
  new-conference/
    config.json      # Conference configuration
    builder.txt      # Paper building prompt
    reviewer.txt     # Review criteria prompt
    supervisor.txt   # Supervisor prompt
    reviser.txt      # Revision prompt
    finalize.txt     # Finalization prompt
    setup.txt        # Setup prompt
    template.txt     # Paper template
    review_criteria.txt  # Review criteria
    infographic.txt  # Infographic prompt (optional)
    datatable.txt    # Data table prompt (optional)
```

### Step 2: Create config.json

The configuration file defines all conference-specific settings:

```json
{
  "id": "new-conf",
  "name": "New Conference Full Name",
  "acronym": "NEWCONF",
  "year": 2025,
  "tier": 1,
  "domain": "information-systems",
  "website": "https://example.com/",
  "description": "Description of the conference",

  "paperLimits": {
    "minPages": 10,
    "maxPages": 16,
    "referencesCountTowardLimit": true,
    "minReferences": 20,
    "maxReferences": 50
  },

  "paperStructure": {
    "sections": [
      "Abstract",
      "Introduction",
      "Literature Review",
      "Methodology",
      "Results",
      "Discussion",
      "Conclusion",
      "References"
    ],
    "abstractRequired": true,
    "abstractMaxWords": 250,
    "keywordsRequired": true,
    "keywordsCount": { "min": 3, "max": 5 },
    "appendicesAllowed": false,
    "supplementaryAllowed": true
  },

  "template": {
    "formatStyle": "icis",
    "fontFamily": "Times New Roman",
    "fontSize": 10,
    "citationStyle": "apa7",
    "lineSpacing": 1.0,
    "marginInches": 1.0,
    "paperSize": "letter",
    "twoColumn": false,
    "anonymousSubmission": true
  },

  "review": {
    "criteriaFile": "review_criteria.txt",
    "minScoreForApproval": 3.5,
    "maxRevisionRounds": 4,
    "dimensions": ["novelty", "significance", "methodologicalRigor", "clarity", "relevance"],
    "includeTrustworthiness": true
  },

  "prompts": {
    "builder": "builder.txt",
    "reviewer": "reviewer.txt",
    "supervisor": "supervisor.txt",
    "reviser": "reviser.txt",
    "finalize": "finalize.txt",
    "setup": "setup.txt",
    "template": "template.txt"
  },

  "calibration": {
    "description": "Calibration notes",
    "exemplarCount": 0,
    "topJournals": ["Journal 1", "Journal 2"],
    "topConferences": ["CONF1", "CONF2"],
    "methodologyEmphasis": ["Survey Research", "Case Studies"]
  },

  "notes": [
    "Important note 1",
    "Important note 2"
  ],

  "verified": false,
  "lastUpdated": "2025-01-01"
}
```

### Step 3: Update Registry

Add your conference to `/public/conferences/registry.json`:

```json
{
  "conferences": {
    "new-conf": {
      "id": "new-conf",
      "name": "New Conference Full Name",
      "acronym": "NEWCONF",
      "tier": 1,
      "domain": "information-systems",
      "description": "Description",
      "verified": false
    }
  }
}
```

### Step 4: Create/Adapt Prompts

Start by copying prompts from a similar conference (e.g., ICIS for IS conferences, NeurIPS for ML conferences) and adapt:

1. **builder.txt**: Adapt page limits, section structure, formatting requirements
2. **template.txt**: Update with conference formatting guidelines
3. **reviewer.txt**: Adjust review criteria for the conference's focus
4. **review_criteria.txt**: Add conference-specific evaluation dimensions

### Step 5: Verify Configuration

Before marking as verified:

1. Check official conference website for current formatting guidelines
2. Verify page limits, citation style, and section requirements
3. Test paper generation end-to-end
4. Compare output to published papers from the conference

### Step 6: Update TypeScript Types

Add the conference ID to `/types/conference.ts`:

```typescript
export type ConferenceId =
  | 'icis'
  | 'ecis'
  // ... existing conferences
  | 'new-conf';  // Add new conference
```

## Configuration Reference

### Domain Values
- `information-systems`
- `management`
- `operations-research`
- `decision-sciences`
- `human-computer-interaction`
- `machine-learning`
- `artificial-intelligence`

### Citation Styles
- `apa7` - APA 7th Edition
- `apa6` - APA 6th Edition
- `ieee` - IEEE
- `acm` - ACM
- `chicago` - Chicago

### Format Styles
- `icis` - ICIS/AIS format
- `ieee` - IEEE two-column
- `acm-sigconf` - ACM SIGCONF
- `acm-chi` - ACM CHI format
- `neurips` - NeurIPS/ICML format
- `aaai` - AAAI format

## Testing

To test a new conference configuration:

```bash
# Build the project
npm run build

# Start local server
npm run dev

# Select the new conference in the UI
# Run a test paper generation
```

## Troubleshooting

### Prompts Not Loading
- Check that all prompt files exist in the conference directory
- Verify file names match config.json paths
- Check browser console for fetch errors

### Format Issues
- Verify template.txt matches conference requirements
- Check citationStyle matches expected format
- Confirm paperSize (letter vs a4)

### Review Criteria Not Applied
- Verify review_criteria.txt exists
- Check dimensions array in config matches file content

## Contributing

When adding or updating conference configurations:

1. Research official conference guidelines thoroughly
2. Test with sample papers
3. Document any assumptions or limitations
4. Set `verified: true` only after thorough testing
5. Update lastUpdated field
