/**
 * Simple Express server for ICIScopilot file operations
 * Run with: node server.js
 * Then run React app with: npm run dev
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Load environment variables from .env file
require('dotenv').config();

// Paper Viewer for HTML viewing of papers
const { setupViewerRoutes } = require('./paper-viewer/index.cjs');

// Semantic Scholar API for reference lookup
const SEMANTIC_SCHOLAR_API_KEY = process.env.VITE_SEMANTIC_SCHOLAR_API_KEY || '';
const SEMANTIC_SCHOLAR_BASE_URL = 'https://api.semanticscholar.org/graph/v1';

// OpenAI API for paper review (proxied through backend for security)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.VITE_OPENAI_MODEL || 'gpt-5.2';

// Log API key status at startup
console.log(`[SemanticScholar] API Key configured: ${SEMANTIC_SCHOLAR_API_KEY ? 'YES' : 'NO (references will use fallback)'}`);
if (SEMANTIC_SCHOLAR_API_KEY) {
  console.log(`[SemanticScholar] API Key length: ${SEMANTIC_SCHOLAR_API_KEY.length} characters`);
}
console.log(`[OpenAI] API Key configured: ${OPENAI_API_KEY ? 'YES' : 'NO (reviewer will fail)'}`);
console.log(`[OpenAI] Model: ${OPENAI_MODEL}`);

/**
 * Look up a reference on Semantic Scholar by author and year
 * Returns APA-formatted reference or null if not found
 */
async function lookupSemanticScholar(authorName, year) {
  if (!SEMANTIC_SCHOLAR_API_KEY) {
    console.log('[SemanticScholar] No API key configured');
    return null;
  }

  try {
    const query = `${authorName} ${year}`;
    const url = `${SEMANTIC_SCHOLAR_BASE_URL}/paper/search?query=${encodeURIComponent(query)}&limit=1&fields=title,authors,year,venue,journal,citationCount,externalIds`;

    const headers = {
      'x-api-key': SEMANTIC_SCHOLAR_API_KEY
    };

    const response = await fetch(url, { headers });

    if (!response.ok) {
      console.log(`[SemanticScholar] API error: ${response.status}`);
      return null;
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      console.log(`[SemanticScholar] No results for: ${query}`);
      return null;
    }

    const paper = data.data[0];

    // Format as APA style
    const authors = paper.authors
      .map((a, i) => {
        const nameParts = a.name.split(' ');
        const lastName = nameParts[nameParts.length - 1];
        const initials = nameParts.slice(0, -1).map(n => n[0] + '.').join(' ');
        return `${lastName}, ${initials}`;
      })
      .slice(0, 3)  // Limit to first 3 authors
      .join(', ');

    const authorsStr = paper.authors.length > 3 ? `${authors}, et al.` : authors;
    const venue = paper.journal?.name || paper.venue || 'Retrieved from Semantic Scholar';
    const title = paper.title;
    const paperYear = paper.year || year;

    // APA format: Author, A. A., & Author, B. B. (Year). Title of article. Journal Name, volume(issue), pages.
    const apaReference = `${authorsStr} (${paperYear}). ${title}. \\textit{${venue}}.`;

    console.log(`[SemanticScholar] Found: ${title} (${paperYear})`);
    return apaReference;
  } catch (error) {
    console.error('[SemanticScholar] Lookup error:', error.message);
    return null;
  }
}

/**
 * Search for an alternative reference on Semantic Scholar when exact match fails
 * Tries broader search terms to find a related paper
 */
async function findAlternativeReference(authorName, year, originalKey) {
  if (!SEMANTIC_SCHOLAR_API_KEY) {
    return null;
  }

  // Try different search strategies
  const searchStrategies = [
    `${authorName} information systems ${year}`,
    `${authorName} ${parseInt(year) - 1}`,  // Try adjacent year
    `${authorName} ${parseInt(year) + 1}`,  // Try adjacent year
    `${authorName} management`,
    `${authorName} technology`
  ];

  for (const query of searchStrategies) {
    try {
      const url = `${SEMANTIC_SCHOLAR_BASE_URL}/paper/search?query=${encodeURIComponent(query)}&limit=3&fields=title,authors,year,venue,journal,citationCount`;

      const headers = { 'x-api-key': SEMANTIC_SCHOLAR_API_KEY };
      const response = await fetch(url, { headers });

      if (!response.ok) continue;

      const data = await response.json();

      if (data.data && data.data.length > 0) {
        // Find the best match - prefer papers with high citations
        const bestPaper = data.data.reduce((best, paper) => {
          if (!best) return paper;
          return (paper.citationCount || 0) > (best.citationCount || 0) ? paper : best;
        }, null);

        if (bestPaper && bestPaper.title) {
          // Format as APA style
          const authors = bestPaper.authors
            .map((a) => {
              const nameParts = a.name.split(' ');
              const lastName = nameParts[nameParts.length - 1];
              const initials = nameParts.slice(0, -1).map(n => n[0] + '.').join(' ');
              return `${lastName}, ${initials}`;
            })
            .slice(0, 3)
            .join(', ');

          const authorsStr = bestPaper.authors.length > 3 ? `${authors}, et al.` : authors;
          const venue = bestPaper.journal?.name || bestPaper.venue || 'Retrieved from Semantic Scholar';
          const paperYear = bestPaper.year || year;

          console.log(`[SemanticScholar] Found alternative for "${originalKey}": ${bestPaper.title} (${paperYear})`);
          return `${authorsStr} (${paperYear}). ${bestPaper.title}. \\textit{${venue}}.`;
        }
      }
    } catch (error) {
      console.log(`[SemanticScholar] Search strategy failed: ${query}`);
    }
  }

  return null;
}

const app = express();
const PORT = 3001;

// Directories
const ICIS_DIR = __dirname;
const DATA_DIR = path.join(ICIS_DIR, 'Data');
const PUBLIC_DATA_DIR = path.join(ICIS_DIR, 'public', 'Data');  // Where uploaded files are served from
const PAPER_DIR = path.join(ICIS_DIR, 'Paper');
const CODE_DIR = path.join(ICIS_DIR, 'Code');
const RESULTS_DIR = path.join(ICIS_DIR, 'Results');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(PAPER_DIR)) fs.mkdirSync(PAPER_DIR, { recursive: true });
if (!fs.existsSync(CODE_DIR)) fs.mkdirSync(CODE_DIR, { recursive: true });
if (!fs.existsSync(RESULTS_DIR)) fs.mkdirSync(RESULTS_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC_DATA_DIR)) fs.mkdirSync(PUBLIC_DATA_DIR, { recursive: true });

// ============================================================================
// Auto-generate manifest.json from files in icis/Data folder (NOT public/Data)
// Files should be placed in icis/Data - this is the source of truth
// ============================================================================
function generateManifest() {
  try {
    const files = fs.readdirSync(DATA_DIR);
    const manifestFiles = [];

    // Look for interview files (INTERVIEW*.txt)
    const interviewFile = files.find(f => f.toLowerCase().startsWith('interview') && f.endsWith('.txt'));
    if (interviewFile) {
      // Extract participant ID from filename (e.g., INTERVIEWofir1.txt -> ofir1)
      const participantId = interviewFile.replace(/^interview/i, '').replace(/\.txt$/i, '');
      manifestFiles.push({
        type: 'interview',
        filename: interviewFile,
        participantId: participantId || 'participant'
      });
    }

    // Look for data files (Data_file*.csv, *.csv, Data_file*.xlsx, *.xlsx)
    const dataFile = files.find(f =>
      (f.toLowerCase().startsWith('data_file') || f.toLowerCase().startsWith('data')) &&
      (f.endsWith('.csv') || f.endsWith('.xlsx'))
    );
    if (dataFile) {
      // Extract participant ID from filename (e.g., Data_fileofir1.csv -> ofir1, Data_fileidanbenhamo.xlsx -> idanbenhamo)
      let participantId = dataFile.replace(/^data_file/i, '').replace(/^data/i, '').replace(/\.(csv|xlsx)$/i, '');
      // If we found an interview file, use its participant ID
      if (manifestFiles.length > 0) {
        participantId = manifestFiles[0].participantId;
      }
      manifestFiles.push({
        type: 'dataFile',
        filename: dataFile,
        participantId: participantId || 'participant'
      });
    }

    // Look for template file
    const templateFile = files.find(f => f.toLowerCase().includes('template') && f.endsWith('.txt'));
    if (templateFile) {
      manifestFiles.push({
        type: 'template',
        filename: templateFile
      });
    }

    // Look for PDF files (papers for review)
    const pdfFile = files.find(f => f.endsWith('.pdf'));
    if (pdfFile) {
      const participantId = manifestFiles.length > 0 ? manifestFiles[0].participantId : 'participant';
      manifestFiles.push({
        type: 'pdfPaper',
        filename: pdfFile,
        participantId: participantId
      });
    }

    const manifest = {
      files: manifestFiles,
      lastUpdated: new Date().toISOString(),
      autoGenerated: true
    };

    // Write manifest to icis/Data (the source folder, NOT public/Data)
    const manifestPath = path.join(DATA_DIR, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`Generated manifest.json in Data/ with ${manifestFiles.length} files`);
    console.log(`Files detected:`, manifestFiles.map(f => f.filename));

    return manifest;
  } catch (error) {
    console.error('Error generating manifest:', error);
    return null;
  }
}

// Generate manifest on startup
generateManifest();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Initialize paper viewer routes
setupViewerRoutes(app, PAPER_DIR, RESULTS_DIR);

// Serve files from icis/Data folder at /Data path
// This allows the frontend to fetch /Data/manifest.json, /Data/INTERVIEWxxx.txt, etc.
app.use('/Data', express.static(DATA_DIR));

// Root route - shows server info
app.get('/', (req, res) => {
  res.send(`
    <h1>ICIScopilot File Server</h1>
    <p>Server is running on port ${PORT}</p>
    <ul>
      <li><a href="/api/health">Health Check</a></li>
      <li>Paper Dir: ${PAPER_DIR}</li>
      <li>Data Dir: ${DATA_DIR}</li>
    </ul>
    <p>This server handles file operations for the ICIScopilot React app.</p>
  `);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// OpenAI proxy endpoint - securely proxies requests to OpenAI API
// This keeps the API key on the server side only
app.post('/api/openai/chat', async (req, res) => {
  if (!OPENAI_API_KEY) {
    console.error('[OpenAI Proxy] No API key configured');
    return res.status(500).json({
      error: 'OpenAI API key not configured on server',
      details: 'Set OPENAI_API_KEY in .env file'
    });
  }

  try {
    const { messages, temperature = 0.7, max_completion_tokens = 16000 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    console.log(`[OpenAI Proxy] Calling ${OPENAI_MODEL} with ${messages.length} messages...`);

    // GPT-5.2 is a reasoning model - it doesn't support temperature parameter
    // Only include temperature for non-reasoning models
    const isReasoningModel = OPENAI_MODEL.includes('5.2') || OPENAI_MODEL.includes('5.1') || OPENAI_MODEL.includes('o1') || OPENAI_MODEL.includes('o3');

    const requestBody = {
      model: OPENAI_MODEL,
      messages,
      response_format: { type: 'json_object' },
      max_completion_tokens
    };

    // Add reasoning_effort for reasoning models, temperature for others
    if (isReasoningModel) {
      requestBody.reasoning_effort = 'high';
    } else {
      requestBody.temperature = temperature;
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[OpenAI Proxy] API Error: ${response.status}`, errorText);
      return res.status(response.status).json({
        error: `OpenAI API error: ${response.status}`,
        details: errorText
      });
    }

    const data = await response.json();
    console.log('[OpenAI Proxy] Response received successfully');
    res.json(data);

  } catch (error) {
    console.error('[OpenAI Proxy] Error:', error.message);
    res.status(500).json({
      error: 'Failed to call OpenAI API',
      details: error.message
    });
  }
});

// Refresh manifest - scans public/Data folder and regenerates manifest.json
app.post('/api/refresh-manifest', (req, res) => {
  const manifest = generateManifest();
  if (manifest) {
    res.json({ success: true, manifest });
  } else {
    res.json({ success: false, error: 'Failed to generate manifest' });
  }
});

// Get current manifest
app.get('/api/manifest', (req, res) => {
  const manifestPath = path.join(DATA_DIR, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    res.json({ success: true, manifest });
  } else {
    // Generate it if it doesn't exist
    const manifest = generateManifest();
    res.json({ success: true, manifest, generated: true });
  }
});

// Save paper file to icis/Paper/
app.post('/api/save-paper', (req, res) => {
  try {
    const { filename, content } = req.body;
    const filepath = path.join(PAPER_DIR, filename);
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`Saved: ${filepath}`);
    res.json({ success: true, path: filepath });
  } catch (error) {
    console.error('Error saving paper:', error);
    res.json({ success: false, error: error.message });
  }
});

// Save data file to icis/Data/
app.post('/api/save-data', (req, res) => {
  try {
    const { filename, content } = req.body;
    const filepath = path.join(DATA_DIR, filename);
    const fileContent = typeof content === 'string' ? content : JSON.stringify(content, null, 2);
    fs.writeFileSync(filepath, fileContent, 'utf-8');
    console.log(`Saved: ${filepath}`);
    res.json({ success: true, path: filepath });
  } catch (error) {
    console.error('Error saving data:', error);
    res.json({ success: false, error: error.message });
  }
});

// Save multiple files
app.post('/api/save-files', (req, res) => {
  try {
    const { files } = req.body;
    const savedFiles = [];

    for (const file of files) {
      const dir = file.directory === 'paper' ? PAPER_DIR : DATA_DIR;
      const filepath = path.join(dir, file.filename);
      const content = typeof file.content === 'string' ? file.content : JSON.stringify(file.content, null, 2);
      fs.writeFileSync(filepath, content, 'utf-8');
      savedFiles.push(filepath);
      console.log(`Saved: ${filepath}`);
    }

    res.json({ success: true, files: savedFiles });
  } catch (error) {
    console.error('Error saving files:', error);
    res.json({ success: false, error: error.message });
  }
});

// Backup and clear all files for a new case
app.post('/api/backup-and-clear', (req, res) => {
  try {
    const timestamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '_').substring(0, 15);
    const backupDir = path.join(ICIS_DIR, 'Backup', timestamp);

    // Create backup directory
    fs.mkdirSync(backupDir, { recursive: true });
    fs.mkdirSync(path.join(backupDir, 'Paper'), { recursive: true });
    fs.mkdirSync(path.join(backupDir, 'Data'), { recursive: true });
    fs.mkdirSync(path.join(backupDir, 'Results'), { recursive: true });

    const backedUpFiles = [];
    const clearedFiles = [];

    // Backup and clear Paper directory
    if (fs.existsSync(PAPER_DIR)) {
      const paperFiles = fs.readdirSync(PAPER_DIR);
      for (const file of paperFiles) {
        const srcPath = path.join(PAPER_DIR, file);
        const destPath = path.join(backupDir, 'Paper', file);
        // Only backup generated files (not templates)
        if (file.endsWith('.tex') || file.endsWith('.pdf') || file.endsWith('.json')) {
          fs.copyFileSync(srcPath, destPath);
          backedUpFiles.push(`Paper/${file}`);
          fs.unlinkSync(srcPath);
          clearedFiles.push(`Paper/${file}`);
        }
      }
    }

    // Backup and clear Data directory (generated files AND uploaded interview/data files)
    if (fs.existsSync(DATA_DIR)) {
      const dataFiles = fs.readdirSync(DATA_DIR);
      for (const file of dataFiles) {
        const srcPath = path.join(DATA_DIR, file);
        // Skip if it's a directory
        if (fs.statSync(srcPath).isDirectory()) continue;

        // Backup generated oversight/feedback files AND uploaded INTERVIEW/Data_file files
        const isGeneratedFile = file.includes('oversight') || file.includes('feedback') || file.includes('supervisor');
        const isUploadedFile = file.startsWith('INTERVIEW') || file.startsWith('Data_file');
        const isManifest = file === 'manifest.json';

        if (isGeneratedFile || isUploadedFile) {
          const destPath = path.join(backupDir, 'Data', file);
          fs.copyFileSync(srcPath, destPath);
          backedUpFiles.push(`Data/${file}`);
          fs.unlinkSync(srcPath);
          clearedFiles.push(`Data/${file}`);
        }
        // Also delete manifest.json (will be regenerated)
        if (isManifest) {
          fs.unlinkSync(srcPath);
          clearedFiles.push(`Data/${file}`);
        }
      }
    }

    // Backup and clear Results directory (generated figures)
    if (fs.existsSync(RESULTS_DIR)) {
      const resultsFiles = fs.readdirSync(RESULTS_DIR);
      for (const file of resultsFiles) {
        const srcPath = path.join(RESULTS_DIR, file);
        const destPath = path.join(backupDir, 'Results', file);
        // Backup all image files
        if (file.endsWith('.png') || file.endsWith('.pdf') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
          fs.copyFileSync(srcPath, destPath);
          backedUpFiles.push(`Results/${file}`);
          fs.unlinkSync(srcPath);
          clearedFiles.push(`Results/${file}`);
        }
      }
    }

    console.log(`Backed up ${backedUpFiles.length} files to ${backupDir}`);
    console.log(`Cleared ${clearedFiles.length} files`);

    res.json({
      success: true,
      backupDir,
      backedUpFiles,
      clearedFiles
    });
  } catch (error) {
    console.error('Error backing up files:', error);
    res.json({ success: false, error: error.message });
  }
});

// List files in directory
app.get('/api/list-files/:directory', (req, res) => {
  try {
    const dir = req.params.directory === 'paper' ? PAPER_DIR : DATA_DIR;
    if (!fs.existsSync(dir)) {
      return res.json({ files: [] });
    }

    const files = fs.readdirSync(dir).map(filename => {
      const filepath = path.join(dir, filename);
      const stats = fs.statSync(filepath);
      return {
        filename,
        size: stats.size,
        modified: stats.mtime.toISOString()
      };
    });

    res.json({ files });
  } catch (error) {
    console.error('Error listing files:', error);
    res.json({ files: [], error: error.message });
  }
});

// Read a file
app.get('/api/read-file/:directory/:filename', (req, res) => {
  try {
    const dir = req.params.directory === 'paper' ? PAPER_DIR : DATA_DIR;
    const filepath = path.join(dir, req.params.filename);

    if (!fs.existsSync(filepath)) {
      return res.json({ success: false, error: 'File not found' });
    }

    // Read file as buffer first to detect encoding
    const buffer = fs.readFileSync(filepath);
    let content;

    // Check for BOM (Byte Order Mark) to detect encoding
    if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
      // UTF-16 LE BOM
      content = buffer.toString('utf16le').slice(1); // Remove BOM
    } else if (buffer[0] === 0xFE && buffer[1] === 0xFF) {
      // UTF-16 BE BOM - convert to string
      content = buffer.swap16().toString('utf16le').slice(1);
    } else if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
      // UTF-8 BOM
      content = buffer.toString('utf-8').slice(1); // Remove BOM
    } else {
      // Default to UTF-8
      content = buffer.toString('utf-8');
    }

    res.json({ success: true, content });
  } catch (error) {
    console.error('Error reading file:', error);
    res.json({ success: false, error: error.message });
  }
});

/**
 * Extract a meaningful title from the paper content
 * Looks at the abstract to generate a title
 */
function extractTitleFromContent(content) {
  // Try to find the abstract and extract key phrases
  const abstractMatch = content.match(/\\begin\{abstract\}([\s\S]*?)\\end\{abstract\}/);
  if (abstractMatch) {
    const abstract = abstractMatch[1].trim();
    // Get the first sentence or two for a title basis
    const firstSentence = abstract.split(/[.!?]/)[0].trim();
    if (firstSentence && firstSentence.length > 20 && firstSentence.length < 200) {
      // Clean up LaTeX commands and shorten
      let title = firstSentence
        .replace(/\\cite\{[^}]*\}/g, '')
        .replace(/\\textit\{([^}]*)\}/g, '$1')
        .replace(/\\textbf\{([^}]*)\}/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();

      // If it's still too long, truncate at a reasonable point
      if (title.length > 100) {
        const colonIdx = title.indexOf(':');
        const dashIdx = title.indexOf(' - ');
        if (colonIdx > 20 && colonIdx < 80) {
          title = title.substring(0, colonIdx);
        } else if (dashIdx > 20 && dashIdx < 80) {
          title = title.substring(0, dashIdx);
        } else {
          title = title.substring(0, 80) + '...';
        }
      }
      return title;
    }
  }

  // Try to find the introduction section for hints
  const introMatch = content.match(/\\section\{Introduction\}([\s\S]*?)(?=\\section\{|$)/);
  if (introMatch) {
    const intro = introMatch[1].trim();
    const firstSentence = intro.split(/[.!?]/)[0].trim();
    if (firstSentence && firstSentence.length > 20 && firstSentence.length < 150) {
      let title = firstSentence
        .replace(/\\cite\{[^}]*\}/g, '')
        .replace(/\\textit\{([^}]*)\}/g, '$1')
        .replace(/\\textbf\{([^}]*)\}/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();
      if (title.length > 80) {
        title = title.substring(0, 80) + '...';
      }
      return title;
    }
  }

  return 'ICIS Research Paper';
}

/**
 * Generate LaTeX preamble with dynamic title
 */
function generateLatexPreamble(title) {
  return `\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{graphicx}

\\title{${title}}
\\author{ICIScopilot Generated}
\\date{\\today}

\\begin{document}
\\maketitle

`;
}

// Default LaTeX preamble for ICIS-style papers (minimal for compatibility)
const LATEX_PREAMBLE = `\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{graphicx}

\\title{ICIS Research Paper}
\\author{ICIScopilot Generated}
\\date{\\today}

\\begin{document}
\\maketitle

`;

const LATEX_FOOTER = `
\\end{document}
`;

// Compile LaTeX to PDF
app.post('/api/compile-latex', async (req, res) => {
  const { filename, content } = req.body;

  if (!filename || !content) {
    return res.json({ success: false, error: 'Missing filename or content' });
  }

  // Ensure filename ends with .tex
  const texFilename = filename.endsWith('.tex') ? filename : `${filename}.tex`;
  const texPath = path.join(PAPER_DIR, texFilename);
  const pdfFilename = texFilename.replace('.tex', '.pdf');
  const pdfPath = path.join(PAPER_DIR, pdfFilename);

  try {
    // First, strip any markdown code fences that Gemini might have added
    let finalContent = content;

    // Remove ```latex at the start and ``` at the end
    if (finalContent.startsWith('```latex')) {
      console.log('Stripping markdown code fence (```latex) from LaTeX content');
      finalContent = finalContent.replace(/^```latex\s*\n?/, '');
    } else if (finalContent.startsWith('```tex')) {
      console.log('Stripping markdown code fence (```tex) from LaTeX content');
      finalContent = finalContent.replace(/^```tex\s*\n?/, '');
    } else if (finalContent.startsWith('```')) {
      console.log('Stripping markdown code fence (```) from LaTeX content');
      finalContent = finalContent.replace(/^```\s*\n?/, '');
    }

    // Remove trailing code fence
    if (finalContent.trimEnd().endsWith('```')) {
      console.log('Stripping trailing markdown code fence');
      finalContent = finalContent.replace(/\n?```\s*$/, '');
    }

    // FIRST: Remove embedded markdown LaTeX blocks that contain full documents (e.g., ```latex\n\documentclass...```)
    // These are malformed sections where Gemini embedded a full LaTeX document inside a section
    // This MUST happen before the documentclass check so we don't get confused by embedded docs
    const embeddedDocRegex = /```(?:latex|tex)?\s*\n\\documentclass[\s\S]*?\\end\{document\}\s*\n?```/g;
    let extractedBibliography = '';
    if (finalContent.match(embeddedDocRegex)) {
      console.log('Removing embedded markdown LaTeX document blocks from content');
      // Extract just the thebibliography from embedded docs before removing
      const embeddedMatches = finalContent.match(embeddedDocRegex) || [];
      for (const match of embeddedMatches) {
        const bibMatch = match.match(/\\begin\{thebibliography\}[\s\S]*?\\end\{thebibliography\}/);
        if (bibMatch) {
          extractedBibliography = bibMatch[0];
          console.log('Extracted bibliography from embedded document');
        }
      }
      // Remove the embedded documents
      finalContent = finalContent.replace(embeddedDocRegex, '');
    }

    // SECOND: Remove bare embedded LaTeX documents (not in code fences)
    // Sometimes Gemini outputs a documentclass/begin{document}/end{document} block without fences
    // This happens when content has a valid structure, then Gemini adds another full document at the end
    const bareDocPattern = /\\documentclass\{[^}]+\}[\s\S]*?\\end\{document\}/g;
    const bareDocMatches = finalContent.match(bareDocPattern) || [];
    if (bareDocMatches.length > 0) {
      // Find if there's substantial content BEFORE the first documentclass
      const firstDocIdx = finalContent.indexOf('\\documentclass');
      const contentBefore = finalContent.substring(0, firstDocIdx).trim();

      // If there's real content before documentclass (like \begin{abstract}), it's a bare embedded doc
      if (contentBefore.length > 100 && (contentBefore.includes('\\section{') || contentBefore.includes('\\begin{abstract}'))) {
        console.log('Found bare embedded LaTeX document after main content - removing it');

        // Extract bibliography from the bare doc if present
        for (const match of bareDocMatches) {
          const bibMatch = match.match(/\\begin\{thebibliography\}[\s\S]*?\\end\{thebibliography\}/);
          if (bibMatch && !extractedBibliography) {
            extractedBibliography = bibMatch[0];
            console.log('Extracted bibliography from bare embedded document');
          }
        }

        // Keep only content before the bare documentclass
        finalContent = contentBefore;
      }
    }

    // THIRD: Remove embedded bibtex code blocks
    const bibtexBlockRegex = /\`\`\`bibtex[\s\S]*?\`\`\`/g;
    if (finalContent.match(bibtexBlockRegex)) {
      console.log('Removing embedded bibtex code blocks');
      finalContent = finalContent.replace(bibtexBlockRegex, '');
    }

    // Remove explanatory text like "Here's a basic references.bib file"
    finalContent = finalContent.replace(/Here's a basic[^\\]*references\.bib[^\\]*/gi, '');

    // Check if content has a documentclass - if not, wrap with preamble
    if (!finalContent.includes('\\documentclass')) {
      console.log('Content missing documentclass, adding ICIS preamble...');
      // Extract a title from the content
      const extractedTitle = extractTitleFromContent(finalContent);
      console.log(`Extracted title: "${extractedTitle}"`);
      const dynamicPreamble = generateLatexPreamble(extractedTitle);

      // Check if it already has \end{document}
      if (finalContent.includes('\\end{document}')) {
        // Just add preamble at the start
        finalContent = dynamicPreamble + finalContent.replace('\\end{document}', '') + LATEX_FOOTER;
      } else {
        finalContent = dynamicPreamble + finalContent + LATEX_FOOTER;
      }

      // If we extracted a bibliography and don't have one, add it before \end{document}
      if (extractedBibliography && !finalContent.includes('\\begin{thebibliography}')) {
        console.log('Adding extracted bibliography to end of document');
        finalContent = finalContent.replace('\\end{document}', extractedBibliography + '\n\n\\end{document}');
      }
    }

    // If content has \documentclass but no \end{document}, add it (needed for compilation)
    if (finalContent.includes('\\documentclass') && !finalContent.includes('\\end{document}')) {
      console.log('WARNING: Content missing \\end{document}. Adding it for compilation...');
      finalContent += '\n\\end{document}\n';
    }

    // CRITICAL: If content has \documentclass but no \begin{document}, add it
    // This is a critical structural issue that will cause compilation to fail
    if (finalContent.includes('\\documentclass') && !finalContent.includes('\\begin{document}')) {
      console.log('WARNING: Content missing \\begin{document}. Adding it...');

      // Find where to insert \begin{document}
      // It should go after all \usepackage commands and before \begin{abstract} or \section
      let insertPoint = -1;

      // Look for the first content command that should come after \begin{document}
      const contentStarts = [
        '\\begin{abstract}',
        '\\section{',
        '\\section*{',
        '\\title{',
        '\\author{',
        '\\maketitle'
      ];

      for (const marker of contentStarts) {
        const idx = finalContent.indexOf(marker);
        if (idx !== -1 && (insertPoint === -1 || idx < insertPoint)) {
          insertPoint = idx;
        }
      }

      if (insertPoint !== -1) {
        // Insert \begin{document} before the first content command
        // Also add a placeholder title if none exists
        const beforeInsert = finalContent.substring(0, insertPoint);
        const afterInsert = finalContent.substring(insertPoint);

        let insertContent = '\n\\title{Research Paper}\n\\author{}\n\\date{}\n\n\\begin{document}\n\\maketitle\n\n';

        // Check if title already exists in the preamble
        if (beforeInsert.includes('\\title{')) {
          insertContent = '\n\\begin{document}\n\\maketitle\n\n';
        }

        finalContent = beforeInsert + insertContent + afterInsert;
      }
    }

    // Fix common LaTeX issues before compilation

    // 0. Ensure \maketitle is present if \title{} exists but \maketitle is missing
    if (finalContent.includes('\\title{') && !finalContent.includes('\\maketitle')) {
      console.log('Adding missing \\maketitle after \\begin{document}');
      // Insert \maketitle right after \begin{document}
      finalContent = finalContent.replace(
        /\\begin\{document\}\s*\n?/,
        '\\begin{document}\n\\maketitle\n\n'
      );
    }

    // 1. Remove unavailable/unnecessary packages that Gemini might add
    const problematicPackages = [
      'arxiv',      // arxiv.sty not available on most systems
      'lipsum',     // dummy text package, not needed
      'breakurl',   // often causes issues, url package handles this
      'algorithm2e', // may need manual installation
      'algpseudocode', // may need manual installation
      'listings',   // may need manual installation on some systems
      'minted',     // requires Python pygments
      'tikz',       // large package, may need installation
      'pgfplots',   // large package, may need installation
    ];

    problematicPackages.forEach(pkg => {
      const regex = new RegExp(`\\\\usepackage(\\[[^\\]]*\\])?\\{${pkg}\\}\\s*\\n?`, 'g');
      if (finalContent.match(regex)) {
        console.log(`Removing problematic package: ${pkg}`);
        finalContent = finalContent.replace(regex, '');
      }
    });

    // Remove \lstset{...} blocks that depend on the listings package
    // This is a multi-line block so we need to handle it carefully
    if (finalContent.includes('\\lstset{')) {
      console.log('Removing \\lstset{} block (depends on listings package)');
      // Match \lstset{ followed by any content until the matching closing brace
      // Handle nested braces by counting them
      const lstsetStart = finalContent.indexOf('\\lstset{');
      if (lstsetStart !== -1) {
        let braceCount = 0;
        let inBlock = false;
        let endIndex = lstsetStart;
        for (let i = lstsetStart; i < finalContent.length; i++) {
          if (finalContent[i] === '{') {
            braceCount++;
            inBlock = true;
          } else if (finalContent[i] === '}') {
            braceCount--;
            if (inBlock && braceCount === 0) {
              endIndex = i + 1;
              break;
            }
          }
        }
        // Remove the entire \lstset{...} block
        const beforeLstset = finalContent.substring(0, lstsetStart);
        const afterLstset = finalContent.substring(endIndex);
        finalContent = beforeLstset + afterLstset;
      }
    }

    // Also remove \lstinline and \begin{lstlisting}...\end{lstlisting} blocks
    finalContent = finalContent.replace(/\\lstinline(\[[^\]]*\])?\{[^}]*\}/g, '');
    finalContent = finalContent.replace(/\\begin\{lstlisting\}[\s\S]*?\\end\{lstlisting\}/g, '');

    // 2. Escape unescaped ampersands in citations (e.g., "Author1 & Author2" -> "Author1 \& Author2")
    //    But don't escape already escaped \& or & in LaTeX commands like \begin{tabular}{l & r}
    finalContent = finalContent.replace(/([^\\])&([^&])/g, '$1\\&$2');
    // Handle & at the start of a line
    finalContent = finalContent.replace(/^&([^&])/gm, '\\&$1');

    // 2.5. Escape unescaped underscores in text (variable names like any_PCI, READMISSION30_1)
    //    But preserve underscores in: math mode, URLs, \cite{}, \bibitem{}, \label{}, \ref{}, \includegraphics{}, file paths
    //    Use a simpler approach: escape underscores that appear in variable-like patterns in regular text
    //    This regex looks for underscores surrounded by word characters but NOT inside {} braces
    //    First, temporarily mark underscores inside braces
    let braceDepth = 0;
    let result = '';
    for (let i = 0; i < finalContent.length; i++) {
      const char = finalContent[i];
      if (char === '{') braceDepth++;
      else if (char === '}') braceDepth--;

      // Only escape underscores outside of braces and between word characters
      if (char === '_' && braceDepth === 0) {
        const prevChar = i > 0 ? finalContent[i-1] : '';
        const nextChar = i < finalContent.length - 1 ? finalContent[i+1] : '';
        // Escape if between alphanumeric characters (variable names)
        if (/[a-zA-Z0-9]/.test(prevChar) && /[a-zA-Z0-9]/.test(nextChar)) {
          result += '\\_';
        } else {
          result += char;
        }
      } else {
        result += char;
      }
    }
    finalContent = result;

    // 3. Ensure figures don't exceed page margins
    //    Replace any includegraphics width > 0.9\textwidth with max 0.75\textwidth
    finalContent = finalContent.replace(
      /\\includegraphics\[width=0\.\d+\\textwidth\]/g,
      '\\includegraphics[width=0.75\\textwidth]'
    );
    // Remove invalid "max width" options that may be generated
    finalContent = finalContent.replace(/,max width=[^,\]]+/g, '');
    finalContent = finalContent.replace(/max width=[^,\]]+,?/g, '');

    // 3.5. Remove problematic Unicode characters that pdflatex can't handle
    const unicodeReplacements = {
      '\u25CB': 'o',        // ○ circle
      '\u25CF': '*',        // ● filled circle
      '\u25A0': '*',        // ■ filled square
      '\u25A1': 'o',        // □ empty square
      '\u2192': '->',       // → arrow
      '\u2190': '<-',       // ←
      '\u2191': '^',        // ↑
      '\u2193': 'v',        // ↓
      '\u2264': '$\\leq$',  // ≤
      '\u2265': '$\\geq$',  // ≥
      '\u2260': '$\\neq$',  // ≠
      '\u221E': '$\\infty$', // ∞
      '\u2014': '--',       // — em dash
      '\u2013': '-',        // – en dash
      '\u201C': '"',        // " left double quote
      '\u201D': '"',        // " right double quote
      '\u2018': "'",        // ' left single quote
      '\u2019': "'",        // ' right single quote
      '\u2026': '...',      // … ellipsis
    };
    for (const [unicode, replacement] of Object.entries(unicodeReplacements)) {
      finalContent = finalContent.split(unicode).join(replacement);
    }

    // 3.6. Fix unclosed figure environments
    // Count \begin{figure} and \end{figure} - if mismatch, try to fix
    const figureBegins = (finalContent.match(/\\begin\{figure\}/g) || []).length;
    const figureEnds = (finalContent.match(/\\end\{figure\}/g) || []).length;
    if (figureBegins > figureEnds) {
      console.log(`Warning: ${figureBegins - figureEnds} unclosed figure environments detected, attempting to fix...`);
      // Add missing \end{figure} before \section or \end{document}
      for (let i = 0; i < figureBegins - figureEnds; i++) {
        // Find figures that jump directly into sections
        finalContent = finalContent.replace(
          /(\\begin\{figure\}[\s\S]*?\\label\{[^}]+\})\s*\n\s*(\\section\{)/,
          '$1\n\\end{figure}\n\n$2'
        );
      }
    }

    // 3.7. Insert figures into Results section if missing
    // Check if we have generated figures but no Results section
    const hasResultsSection = finalContent.includes('\\section{Results}');
    const figuresInResults = fs.readdirSync(RESULTS_DIR)
      .filter(f => f.endsWith('.png') || f.endsWith('.pdf'));

    if (figuresInResults.length > 0 && !hasResultsSection) {
      console.log(`[LaTeX Fixes] No Results section found but ${figuresInResults.length} figures exist. Creating Results section with figures...`);

      // Generate figure LaTeX code
      let figureLatex = '\\section{Results}\n\n';
      figureLatex += '\\textbf{Note: The following visualizations were generated using AI-synthesized data for illustration purposes only.}\\\\[1em]\n\n';

      figuresInResults.forEach((fig, i) => {
        figureLatex += `
\\begin{figure}[htbp]
\\centering
\\includegraphics[width=0.75\\textwidth]{../Results/${fig}}
\\caption{Figure ${i + 1}: ${fig.replace(/\.png$|\.pdf$/i, '').replace(/_/g, ' ')}}
\\label{fig:fig${i + 1}}
\\end{figure}
`;
      });

      // Insert before Discussion section (or Conclusion if no Discussion)
      if (finalContent.includes('\\section{Discussion}')) {
        finalContent = finalContent.replace(
          '\\section{Discussion}',
          figureLatex + '\n\\section{Discussion}'
        );
        console.log('[LaTeX Fixes] Inserted Results section with figures before Discussion');
      } else if (finalContent.includes('\\section{Conclusion}')) {
        finalContent = finalContent.replace(
          '\\section{Conclusion}',
          figureLatex + '\n\\section{Conclusion}'
        );
        console.log('[LaTeX Fixes] Inserted Results section with figures before Conclusion');
      } else {
        // Append before \\end{document}
        finalContent = finalContent.replace(
          '\\end{document}',
          figureLatex + '\n\\end{document}'
        );
        console.log('[LaTeX Fixes] Appended Results section with figures before end of document');
      }
    }

    // 4. Check for legacy \cite{}/\bibitem{} mismatches (for backward compatibility)
    //    Note: New papers use inline APA citations like "(Author, Year)" instead of \cite{} commands
    //    This check only applies to papers using the old format
    const citeMatches = finalContent.match(/\\cite\{([^}]+)\}/g) || [];
    const bibitemMatches = finalContent.match(/\\bibitem\{([^}]+)\}/g) || [];

    if (citeMatches.length > 0) {
      // Old format detected - check for mismatches
      const citedKeys = new Set();
      citeMatches.forEach(match => {
        const key = match.match(/\\cite\{([^}]+)\}/)[1];
        key.split(',').forEach(k => citedKeys.add(k.trim()));
      });

      const bibitemKeys = new Set();
      bibitemMatches.forEach(match => {
        const key = match.match(/\\bibitem\{([^}]+)\}/)[1];
        bibitemKeys.add(key);
      });

      const missingKeys = [...citedKeys].filter(key => !bibitemKeys.has(key));

      if (missingKeys.length > 0) {
        console.log(`[References] WARNING: Found ${missingKeys.length} \\cite{} commands without matching \\bibitem entries:`);
        console.log(`[References] Missing: ${missingKeys.join(', ')}`);
        console.log(`[References] These will appear as [?] in the PDF.`);
      }
    } else {
      // New inline APA format - no \cite{} commands to check
      console.log('[References] Using inline APA citation format (no \\cite{} commands)');
    }

    console.log('Applied LaTeX fixes (removed packages, escaped ampersands, constrained figure widths, fixed citations)');

    // Write the .tex file
    fs.writeFileSync(texPath, finalContent, 'utf-8');
    console.log(`Saved LaTeX: ${texPath}`);

    // Check if there's a .bib file to process
    const bibFilename = texFilename.replace('.tex', '.bib');
    const bibPath = path.join(PAPER_DIR, bibFilename);
    const hasBibFile = fs.existsSync(bibPath);

    // Also check for \bibliography{} command in the tex file
    const hasBibCommand = finalContent.includes('\\bibliography{') || finalContent.includes('\\addbibresource{');

    let command;
    if (hasBibFile || hasBibCommand) {
      // Full compilation with bibtex: pdflatex -> bibtex -> pdflatex -> pdflatex
      console.log('Bibliography detected, running full compilation with bibtex...');
      command = `cd "${PAPER_DIR}" && pdflatex -interaction=batchmode "${texFilename}" && bibtex "${texFilename.replace('.tex', '')}" && pdflatex -interaction=batchmode "${texFilename}" && pdflatex -interaction=batchmode "${texFilename}"`;
    } else {
      // Simple compilation without bibtex (for inline/manual references)
      command = `cd "${PAPER_DIR}" && pdflatex -interaction=batchmode "${texFilename}" && pdflatex -interaction=batchmode "${texFilename}"`;
    }

    console.log(`Compiling: ${command}`);

    // Helper function to get page count from PDF using pdfinfo or log file
    const getPageCount = (logPath, pdfPath) => {
      // Try to extract page count from LaTeX log
      if (fs.existsSync(logPath)) {
        const logContent = fs.readFileSync(logPath, 'utf-8');
        // Look for "Output written on ... (X pages" pattern
        const pageMatch = logContent.match(/Output written on.*?\((\d+)\s*pages?/i);
        if (pageMatch) {
          return parseInt(pageMatch[1], 10);
        }
      }
      // Fallback: estimate from file size (roughly 50KB per page for academic papers)
      if (fs.existsSync(pdfPath)) {
        const stats = fs.statSync(pdfPath);
        return Math.ceil(stats.size / 50000);
      }
      return 0;
    };

    // Helper function to add page warning to LaTeX content
    const addPageWarning = (content, pageCount) => {
      const warning = `
\\begin{center}
\\fbox{\\parbox{0.9\\textwidth}{
\\textbf{Note:} This paper exceeds the ICIS 16-page limit (currently ${pageCount} pages).
Please revise to reduce length before submission.
}}
\\end{center}
\\vspace{1em}
`;
      // Insert after \begin{document} or after \maketitle
      if (content.includes('\\maketitle')) {
        return content.replace('\\maketitle', '\\maketitle\n' + warning);
      } else if (content.includes('\\begin{document}')) {
        return content.replace('\\begin{document}', '\\begin{document}\n' + warning);
      }
      return content;
    };

    exec(command, { timeout: 120000 }, (error, stdout, stderr) => {
      const logPath = path.join(PAPER_DIR, texFilename.replace('.tex', '.log'));

      // Check if PDF was created (even if there were warnings)
      if (fs.existsSync(pdfPath)) {
        const stats = fs.statSync(pdfPath);
        const pageCount = getPageCount(logPath, pdfPath);
        console.log(`PDF created: ${pdfPath} (${stats.size} bytes, ~${pageCount} pages)`);

        // Check if paper exceeds 16 pages
        const ICIS_PAGE_LIMIT = 16;
        if (pageCount > ICIS_PAGE_LIMIT) {
          console.log(`WARNING: Paper exceeds ICIS limit (${pageCount} > ${ICIS_PAGE_LIMIT} pages). Adding warning note...`);

          // Add warning to the LaTeX content and recompile
          const contentWithWarning = addPageWarning(finalContent, pageCount);
          fs.writeFileSync(texPath, contentWithWarning, 'utf-8');

          // Recompile with the warning
          exec(command, { timeout: 120000 }, (recompileError, recompileStdout, recompileStderr) => {
            // Clean up auxiliary files
            const auxExtensions = ['.aux', '.log', '.out', '.toc', '.lof', '.lot', '.bbl', '.blg'];
            auxExtensions.forEach(ext => {
              const auxFile = path.join(PAPER_DIR, texFilename.replace('.tex', ext));
              if (fs.existsSync(auxFile)) {
                try { fs.unlinkSync(auxFile); } catch (e) { }
              }
            });

            const newStats = fs.statSync(pdfPath);
            res.json({
              success: true,
              pdfPath: pdfPath,
              pdfFilename: pdfFilename,
              fileSize: newStats.size,
              pageCount: pageCount,
              exceedsLimit: true,
              log: recompileStdout.substring(0, 2000)
            });
          });
          return;
        }

        // Clean up auxiliary files
        const auxExtensions = ['.aux', '.log', '.out', '.toc', '.lof', '.lot', '.bbl', '.blg'];
        auxExtensions.forEach(ext => {
          const auxFile = path.join(PAPER_DIR, texFilename.replace('.tex', ext));
          if (fs.existsSync(auxFile)) {
            try {
              fs.unlinkSync(auxFile);
            } catch (e) {
              // Ignore cleanup errors
            }
          }
        });

        res.json({
          success: true,
          pdfPath: pdfPath,
          pdfFilename: pdfFilename,
          fileSize: stats.size,
          pageCount: pageCount,
          exceedsLimit: false,
          log: stdout.substring(0, 2000) // Truncate log
        });
      } else {
        console.error('PDF not created. LaTeX output:', stdout);
        console.error('LaTeX errors:', stderr);
        res.json({
          success: false,
          error: 'PDF compilation failed',
          log: stdout.substring(0, 3000),
          stderr: stderr ? stderr.substring(0, 1000) : ''
        });
      }
    });
  } catch (error) {
    console.error('Error compiling LaTeX:', error);
    res.json({ success: false, error: error.message });
  }
});

// Get PDF file
app.get('/api/get-pdf/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const pdfPath = path.join(PAPER_DIR, filename);

    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({ success: false, error: 'PDF not found' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.sendFile(pdfPath);
  } catch (error) {
    console.error('Error getting PDF:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Read PDF file and extract text content
app.get('/api/read-pdf/:filename', async (req, res) => {
  try {
    const filename = req.params.filename;
    const filepath = path.join(DATA_DIR, filename);

    if (!fs.existsSync(filepath)) {
      return res.json({ success: false, error: 'PDF file not found' });
    }

    // Read PDF as base64 for sending to Gemini (which can process PDFs)
    const pdfBuffer = fs.readFileSync(filepath);
    const base64Content = pdfBuffer.toString('base64');

    res.json({
      success: true,
      filename,
      base64: base64Content,
      mimeType: 'application/pdf',
      size: pdfBuffer.length
    });
  } catch (error) {
    console.error('Error reading PDF:', error);
    res.json({ success: false, error: error.message });
  }
});

// Execute Python visualization script
app.post('/api/execute-python', (req, res) => {
  const { filename, code, dataFile } = req.body;

  if (!filename || !code) {
    return res.json({ success: false, error: 'Missing filename or code' });
  }

  // Ensure filename ends with .py
  const pyFilename = filename.endsWith('.py') ? filename : `${filename}.py`;
  const pyPath = path.join(CODE_DIR, pyFilename);

  try {
    // Write the Python script
    fs.writeFileSync(pyPath, code, 'utf-8');
    console.log(`Saved Python script: ${pyPath}`);

    // Find the data file - check Data folder first (primary location), then public/Data
    let dataFilePath = '';
    let dataFileFound = false;
    if (dataFile) {
      // First check Data/ (the primary location for user files)
      const dataPath = path.join(DATA_DIR, dataFile);
      const publicPath = path.join(PUBLIC_DATA_DIR, dataFile);

      if (fs.existsSync(dataPath)) {
        dataFilePath = dataPath;
        dataFileFound = true;
        console.log(`Data file found in Data/: ${dataPath}`);
      } else if (fs.existsSync(publicPath)) {
        dataFilePath = publicPath;
        dataFileFound = true;
        console.log(`Data file found in public/Data/: ${publicPath}`);
      } else {
        console.warn(`*** DATA FILE NOT FOUND: ${dataFile}`);
        console.warn(`  Checked: ${dataPath}`);
        console.warn(`  Checked: ${publicPath}`);
      }
    }

    // Execute the Python script with paths as environment variables
    const env = {
      ...process.env,
      ICIS_DATA_DIR: DATA_DIR,
      ICIS_PUBLIC_DATA_DIR: PUBLIC_DATA_DIR,
      ICIS_RESULTS_DIR: RESULTS_DIR,
      ICIS_CODE_DIR: CODE_DIR,
      DATA_FILE: dataFilePath,
      DATA_FILE_FOUND: dataFileFound ? 'true' : 'false'
    };

    const command = `python "${pyPath}"`;
    console.log(`Executing: ${command}`);

    exec(command, { timeout: 120000, env, cwd: CODE_DIR }, (error, stdout, stderr) => {
      // Log Python output for debugging
      console.log('=== PYTHON EXECUTION OUTPUT ===');
      console.log('stdout length:', stdout ? stdout.length : 0);
      console.log('stderr length:', stderr ? stderr.length : 0);
      if (stdout) {
        console.log('stdout preview (first 500 chars):', stdout.substring(0, 500));
        console.log('stdout contains DATA SUMMARY:', stdout.includes('DATA SUMMARY'));
        console.log('stdout contains DATA ANALYSIS COMPLETE:', stdout.includes('DATA ANALYSIS COMPLETE'));
      }
      console.log('================================');

      // Check for generated figures
      const generatedFigures = [];
      if (fs.existsSync(RESULTS_DIR)) {
        const files = fs.readdirSync(RESULTS_DIR);
        for (const file of files) {
          if (file.endsWith('.png') || file.endsWith('.pdf')) {
            const filepath = path.join(RESULTS_DIR, file);
            const stats = fs.statSync(filepath);
            // Only include recently created files (within last 60 seconds)
            if (Date.now() - stats.mtimeMs < 60000) {
              generatedFigures.push({
                filename: file,
                path: filepath,
                size: stats.size
              });
            }
          }
        }
      }

      // Check if synthetic data was used (look for warning in stdout)
      // Use case-insensitive matching for robustness
      const stdoutLower = (stdout || '').toLowerCase();

      // Positive indicator: if Python printed DATA SUMMARY, real data was loaded
      const dataSuccessfullyLoaded = stdoutLower.includes('data summary') &&
                                     !stdoutLower.includes('data file not found') &&
                                     !stdoutLower.includes('data file not readable');

      const usedSyntheticData = !dataSuccessfullyLoaded && (
                                stdoutLower.includes('using dummy data') ||
                                stdoutLower.includes('using synthetic data') ||
                                stdoutLower.includes('data file not found') ||
                                stdoutLower.includes('data file not readable') ||
                                !dataFileFound);

      console.log(`[Python] Data file found by Node: ${dataFileFound}`);
      console.log(`[Python] Data successfully loaded by Python: ${dataSuccessfullyLoaded}`);
      console.log(`[Python] Used synthetic data: ${usedSyntheticData}`);

      if (error) {
        console.error('Python execution error:', error.message);
        console.error('stderr:', stderr);
        res.json({
          success: false,
          error: error.message,
          stdout: stdout,
          stderr: stderr,
          generatedFigures,
          dataFileFound,
          dataFilePath,
          usedSyntheticData: true
        });
      } else {
        console.log(`Python execution complete. Generated ${generatedFigures.length} figures.`);
        if (usedSyntheticData) {
          console.warn('*** WARNING: Synthetic/dummy data was used instead of real data file');
        }
        res.json({
          success: true,
          stdout: stdout,
          stderr: stderr,
          generatedFigures,
          dataFileFound,
          dataFilePath,
          usedSyntheticData
        });
      }
    });
  } catch (error) {
    console.error('Error executing Python:', error);
    res.json({ success: false, error: error.message, dataFileFound: false, usedSyntheticData: true });
  }
});

// List generated figures in Results directory
app.get('/api/list-figures', (req, res) => {
  try {
    if (!fs.existsSync(RESULTS_DIR)) {
      return res.json({ figures: [] });
    }

    const figures = fs.readdirSync(RESULTS_DIR)
      .filter(f => f.endsWith('.png') || f.endsWith('.pdf'))
      .map(filename => {
        const filepath = path.join(RESULTS_DIR, filename);
        const stats = fs.statSync(filepath);
        return {
          filename,
          path: filepath,
          relativePath: `../Results/${filename}`,
          size: stats.size,
          modified: stats.mtime.toISOString()
        };
      });

    res.json({ figures });
  } catch (error) {
    console.error('Error listing figures:', error);
    res.json({ figures: [], error: error.message });
  }
});

// Serve figure files from Results directory
app.get('/api/figure/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const filepath = path.join(RESULTS_DIR, filename);

    if (!fs.existsSync(filepath)) {
      return res.status(404).json({ success: false, error: 'Figure not found' });
    }

    const ext = path.extname(filename).toLowerCase();
    const contentType = ext === '.png' ? 'image/png' : ext === '.pdf' ? 'application/pdf' : 'application/octet-stream';

    res.setHeader('Content-Type', contentType);
    res.sendFile(filepath);
  } catch (error) {
    console.error('Error serving figure:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log('');
  console.log('========================================');
  console.log('  ICIScopilot File Server');
  console.log('========================================');
  console.log(`  Server:     http://localhost:${PORT}`);
  console.log(`  Paper Dir:  ${PAPER_DIR}`);
  console.log(`  Data Dir:   ${DATA_DIR}`);
  console.log(`  Code Dir:   ${CODE_DIR}`);
  console.log(`  Results:    ${RESULTS_DIR}`);
  console.log('========================================');
  console.log('');
  console.log('Now run the React app: npm run dev');
  console.log('');
});
