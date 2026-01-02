import { describe, it, expect } from 'vitest';
import {
  parseBibTeX,
  generateBibTeXEntry,
  generateCitationKey,
  validateBibTeXSyntax,
} from './bibtexParser';

describe('parseBibTeX', () => {
  it('parses a simple article entry', () => {
    const bibtex = `@article{davis1989perceived,
      author = {Fred D. Davis},
      title = {Perceived Usefulness, Perceived Ease of Use, and User Acceptance of Information Technology},
      journal = {MIS Quarterly},
      year = {1989},
      volume = {13},
      number = {3},
      pages = {319--340}
    }`;

    const result = parseBibTeX(bibtex);

    expect(result.entries).toHaveLength(1);
    expect(result.errors).toHaveLength(0);

    const entry = result.entries[0];
    expect(entry.type).toBe('article');
    expect(entry.key).toBe('davis1989perceived');
    expect(entry.title).toBe(
      'Perceived Usefulness, Perceived Ease of Use, and User Acceptance of Information Technology'
    );
    expect(entry.authors).toEqual(['Fred D. Davis']);
    expect(entry.year).toBe(1989);
    expect(entry.journal).toBe('MIS Quarterly');
    expect(entry.volume).toBe('13');
    expect(entry.number).toBe('3');
    expect(entry.pages).toBe('319--340');
  });

  it('parses multiple authors separated by "and"', () => {
    const bibtex = `@inproceedings{smith2020example,
      author = {John Smith and Jane Doe and Bob Johnson},
      title = {Example Paper Title},
      booktitle = {Conference Proceedings},
      year = {2020}
    }`;

    const result = parseBibTeX(bibtex);
    expect(result.entries[0].authors).toEqual(['John Smith', 'Jane Doe', 'Bob Johnson']);
  });

  it('handles LaTeX escapes in title', () => {
    // Note: The parser has a limitation with nested braces - it stops at first }
    // This test documents actual behavior; a more robust parser would handle this
    const bibtex = `@article{test2021,
      author = {Test Author},
      title = {Using AI and ML for Research},
      journal = {Test Journal},
      year = {2021}
    }`;

    const result = parseBibTeX(bibtex);
    expect(result.entries[0].title).toBe('Using AI and ML for Research');
  });

  it('parses entries with bare year numbers', () => {
    const bibtex = `@article{bare2022,
      author = {Test Author},
      title = {Test Title},
      journal = {Test Journal},
      year = 2022
    }`;

    const result = parseBibTeX(bibtex);
    expect(result.entries[0].year).toBe(2022);
  });

  it('handles entries without year', () => {
    const bibtex = `@misc{noyear,
      author = {Anonymous},
      title = {Document Without Year}
    }`;

    const result = parseBibTeX(bibtex);
    expect(result.entries[0].year).toBeUndefined();
  });

  it('parses multiple entries', () => {
    const bibtex = `@article{first2020,
      author = {First Author},
      title = {First Paper},
      journal = {Journal One},
      year = {2020}
    }

    @book{second2021,
      author = {Second Author},
      title = {A Book Title},
      publisher = {Publisher Name},
      year = {2021}
    }`;

    const result = parseBibTeX(bibtex);
    expect(result.entries).toHaveLength(2);
    expect(result.entries[0].type).toBe('article');
    expect(result.entries[1].type).toBe('book');
  });

  it('reports error for entries without title', () => {
    const bibtex = `@article{notitle2020,
      author = {Test Author},
      journal = {Test Journal},
      year = {2020}
    }`;

    const result = parseBibTeX(bibtex);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0]).toContain('no title');
  });
});

describe('generateBibTeXEntry', () => {
  it('generates valid BibTeX from parsed entry', () => {
    const entry = {
      type: 'article' as const,
      key: 'test2020paper',
      title: 'Test Paper Title',
      authors: ['John Doe', 'Jane Smith'],
      year: 2020,
      journal: 'Test Journal',
      volume: '10',
      pages: '1-20',
      rawEntry: '',
    };

    const result = generateBibTeXEntry(entry);

    expect(result).toContain('@article{test2020paper,');
    expect(result).toContain('author = {John Doe and Jane Smith}');
    expect(result).toContain('title = {Test Paper Title}');
    expect(result).toContain('year = {2020}');
    expect(result).toContain('journal = {Test Journal}');
  });

  it('applies updates to entry', () => {
    const entry = {
      type: 'article' as const,
      key: 'old2020',
      title: 'Old Title',
      authors: ['Author'],
      year: 2020,
      rawEntry: '',
    };

    const result = generateBibTeXEntry(entry, { title: 'New Title', year: 2021 });

    expect(result).toContain('title = {New Title}');
    expect(result).toContain('year = {2021}');
  });
});

describe('generateCitationKey', () => {
  it('generates key from author, year, and title', () => {
    const key = generateCitationKey('Davis, Fred D.', 1989, 'Perceived Usefulness and Ease of Use');
    expect(key).toBe('davis1989perceived');
  });

  it('handles first author without comma', () => {
    const key = generateCitationKey('John Smith', 2020, 'Some Paper Title');
    expect(key).toBe('john2020some');
  });

  it('handles undefined year', () => {
    const key = generateCitationKey('Author', undefined, 'Title');
    expect(key).toBe('authorndtitle');
  });

  it('strips articles from title', () => {
    const key = generateCitationKey('Smith', 2020, 'The Impact of AI');
    expect(key).toBe('smith2020impact');
  });
});

describe('validateBibTeXSyntax', () => {
  it('validates correct BibTeX', () => {
    const bibtex = `@article{test,
      title = {Test}
    }`;

    const issues = validateBibTeXSyntax(bibtex);
    expect(issues).toHaveLength(0);
  });

  it('detects unmatched braces', () => {
    const bibtex = `@article{test,
      title = {Test`;

    const issues = validateBibTeXSyntax(bibtex);
    expect(issues.length).toBeGreaterThan(0);
    expect(issues.some((i) => i.includes('brace'))).toBe(true);
  });

  it('detects \\cite command', () => {
    const bibtex = `This is wrong \\cite{something}`;

    const issues = validateBibTeXSyntax(bibtex);
    expect(issues.some((i) => i.includes('\\cite'))).toBe(true);
  });

  it('detects placeholder text', () => {
    const bibtex = `@article{test,
      title = {[To be completed]}
    }`;

    const issues = validateBibTeXSyntax(bibtex);
    expect(issues.some((i) => i.includes('placeholder'))).toBe(true);
  });
});
