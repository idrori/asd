import { describe, it, expect } from 'vitest';
import {
  normalizeString,
  stringSimilarity,
  titleSimilarity,
  extractLastName,
  authorsSimilarity,
  isSamePaper,
  calculateMatchConfidence,
} from './stringSimilarity';

describe('normalizeString', () => {
  it('converts to lowercase', () => {
    expect(normalizeString('Hello World')).toBe('hello world');
  });

  it('removes punctuation except hyphens', () => {
    // Apostrophe becomes space, creating "it s"
    expect(normalizeString("Hello, World! It's great.")).toBe('hello world it s great');
  });

  it('collapses whitespace', () => {
    expect(normalizeString('hello    world')).toBe('hello world');
  });

  it('removes common articles', () => {
    expect(normalizeString('The Impact of AI on the Future')).toBe('impact ai future');
  });

  it('preserves hyphens', () => {
    expect(normalizeString('self-driving cars')).toBe('self-driving cars');
  });
});

describe('stringSimilarity', () => {
  it('returns 1.0 for identical strings', () => {
    expect(stringSimilarity('hello world', 'hello world')).toBe(1.0);
  });

  it('returns 1.0 for strings that normalize to same value', () => {
    expect(stringSimilarity('Hello World!', 'hello world')).toBe(1.0);
  });

  it('returns 0.0 for empty strings', () => {
    expect(stringSimilarity('', 'test')).toBe(0.0);
    expect(stringSimilarity('test', '')).toBe(0.0);
  });

  it('returns high similarity for similar strings', () => {
    const sim = stringSimilarity('Perceived Usefulness', 'Perceived Usefullness');
    expect(sim).toBeGreaterThan(0.9);
  });

  it('returns low similarity for different strings', () => {
    const sim = stringSimilarity('Machine Learning', 'Quantum Computing');
    expect(sim).toBeLessThan(0.5);
  });
});

describe('titleSimilarity', () => {
  it('returns 1.0 for identical titles', () => {
    const title = 'Perceived Usefulness and Ease of Use';
    expect(titleSimilarity(title, title)).toBe(1.0);
  });

  it('handles subtitle variations', () => {
    const title1 = 'Machine Learning: A Modern Approach';
    const title2 = 'Machine Learning - A Modern Approach';
    expect(titleSimilarity(title1, title2)).toBeGreaterThan(0.9);
  });

  it('calculates similarity when main titles match but subtitles differ', () => {
    const title1 = 'Deep Learning: Foundations and Trends';
    const title2 = 'Deep Learning: A Comprehensive Guide';
    const sim = titleSimilarity(title1, title2);
    // Main title "Deep Learning" matches but subtitles differ significantly
    // The algorithm returns ~0.51 based on Levenshtein distance
    expect(sim).toBeGreaterThan(0.4);
    expect(sim).toBeLessThan(0.7);
  });

  it('handles different but related titles', () => {
    const title1 = 'Information Technology Acceptance';
    const title2 = 'User Acceptance of Information Technology';
    const sim = titleSimilarity(title1, title2);
    // These share some words but are structured differently
    // The normalized versions don't contain each other
    expect(sim).toBeGreaterThan(0.2);
  });
});

describe('extractLastName', () => {
  it('extracts from "Last, First" format', () => {
    expect(extractLastName('Davis, Fred D.')).toBe('davis');
  });

  it('extracts from "First Last" format', () => {
    expect(extractLastName('Fred Davis')).toBe('davis');
  });

  it('handles single name', () => {
    expect(extractLastName('Davis')).toBe('davis');
  });

  it('handles initials', () => {
    expect(extractLastName('F. D. Davis')).toBe('davis');
  });
});

describe('authorsSimilarity', () => {
  it('returns 1.0 for identical author lists', () => {
    const authors = ['Davis, Fred', 'Bagozzi, Richard'];
    expect(authorsSimilarity(authors, authors)).toBe(1.0);
  });

  it('returns 0 for empty lists', () => {
    expect(authorsSimilarity([], ['Someone'])).toBe(0);
    expect(authorsSimilarity(['Someone'], [])).toBe(0);
  });

  it('weighs first author more heavily', () => {
    const authors1 = ['Davis, Fred', 'Smith, John'];
    const authors2 = ['Davis, Fred', 'Jones, Bob'];
    const sim = authorsSimilarity(authors1, authors2);
    expect(sim).toBeGreaterThan(0.7); // First author matches
  });

  it('penalizes when first author differs', () => {
    const authors1 = ['Davis, Fred', 'Smith, John'];
    const authors2 = ['Jones, Bob', 'Davis, Fred'];
    const sim = authorsSimilarity(authors1, authors2);
    expect(sim).toBeLessThan(0.6); // First author mismatch penalty
  });

  it('handles different name formats', () => {
    const authors1 = ['Fred Davis'];
    const authors2 = ['Davis, F.'];
    expect(authorsSimilarity(authors1, authors2)).toBe(1.0);
  });
});

describe('isSamePaper', () => {
  it('returns true for matching DOIs', () => {
    const ref1 = { title: 'Paper A', doi: '10.1234/example' };
    const ref2 = { title: 'Paper B', doi: '10.1234/example' };
    expect(isSamePaper(ref1, ref2)).toBe(true);
  });

  it('handles DOI URL prefix', () => {
    const ref1 = { title: 'Paper', doi: 'https://doi.org/10.1234/example' };
    const ref2 = { title: 'Paper', doi: '10.1234/example' };
    expect(isSamePaper(ref1, ref2)).toBe(true);
  });

  it('returns true for very similar titles', () => {
    const ref1 = { title: 'Perceived Usefulness and Ease of Use' };
    const ref2 = { title: 'Perceived Usefulness, Ease of Use' };
    expect(isSamePaper(ref1, ref2)).toBe(true);
  });

  it('returns true for matching title and year', () => {
    const ref1 = { title: 'Technology Acceptance Model', year: 1989 };
    const ref2 = { title: 'The Technology Acceptance Model', year: 1989 };
    expect(isSamePaper(ref1, ref2)).toBe(true);
  });

  it('returns false for different papers', () => {
    const ref1 = { title: 'Machine Learning for Healthcare', year: 2020 };
    const ref2 = { title: 'Deep Learning in Finance', year: 2021 };
    expect(isSamePaper(ref1, ref2)).toBe(false);
  });
});

describe('calculateMatchConfidence', () => {
  it('returns high confidence for matching papers', () => {
    const llmRef = {
      title: 'Perceived Usefulness and Ease of Use',
      authors: ['Davis, Fred'],
      year: 1989,
    };
    const ssRef = {
      title: 'Perceived Usefulness, Perceived Ease of Use',
      authors: ['Fred Davis'],
      year: 1989,
    };

    const result = calculateMatchConfidence(llmRef, ssRef);
    expect(result.confidence).toBeGreaterThan(0.8);
  });

  it('reports discrepancies for mismatches', () => {
    const llmRef = { title: 'Paper Title', authors: ['Smith'], year: 2020 };
    const ssRef = { title: 'Different Paper Title', authors: ['Jones'], year: 2019 };

    const result = calculateMatchConfidence(llmRef, ssRef);
    expect(result.discrepancies.length).toBeGreaterThan(0);
    expect(result.discrepancies.some((d) => d.includes('Title'))).toBe(true);
  });

  it('handles missing authors gracefully', () => {
    const llmRef = { title: 'Some Title', year: 2020 };
    const ssRef = { title: 'Some Title', year: 2020 };

    const result = calculateMatchConfidence(llmRef, ssRef);
    expect(result.confidence).toBeGreaterThan(0.7);
  });

  it('handles year off by one', () => {
    const llmRef = { title: 'Paper Title', year: 2020 };
    const ssRef = { title: 'Paper Title', year: 2021 };

    const result = calculateMatchConfidence(llmRef, ssRef);
    // Should still have reasonable confidence with year off by 1
    expect(result.confidence).toBeGreaterThan(0.6);
    expect(result.discrepancies.some((d) => d.includes('Year'))).toBe(true);
  });
});
