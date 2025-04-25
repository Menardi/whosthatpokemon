import type { LanguageId } from '../constants/lang';

/**
 * This returns a 'soundex', which gives a general idea of what a word sounds like.
 * From https://github.com/kvz/phpjs/blob/master/functions/strings/soundex.js
 */
function soundex (str: string) {
  str = (str + '').toUpperCase();
  if (!str) {
    return '';
  }
  const sdx = [0, 0, 0, 0];
  const m = {
    B: 1, F: 1, P: 1, V: 1,
    C: 2, G: 2, J: 2, K: 2, Q: 2, S: 2, X: 2, Z: 2,
    D: 3, T: 3,
    L: 4,
    M: 5, N: 5,
    R: 6,
  };
  let i = 0;
  const j = 0;
  let s = 0;
  let c, p;

  while ((c = str.charAt(i++)) && s < 4) {
    // @ts-ignore
    if (j === m[c]) {
      if (j !== p) {
        // @ts-ignore
        sdx[s++] = p = j;
      }
    } else {
      // @ts-ignore
      s += i === 1;
      p = 0;
    }
  }

  // @ts-ignore
  sdx[0] = str.charAt(0);
  return sdx.join('');
}

/**
 * Calculates how many letters are different between two words
 * From https://github.com/kvz/phpjs/blob/master/functions/strings/levenshtein.js
 */
function levenshtein (s1: string, s2: string): number {
  // http://kevin.vanzonneveld.net
  // +            original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
  // +            bugfixed by: Onno Marsman
  // +             revised by: Andrea Giammarchi (http://webreflection.blogspot.com)
  // + reimplemented by: Brett Zamir (http://brett-zamir.me)
  // + reimplemented by: Alexander M Beedie
  // *                example 1: levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld');
  // *                returns 1: 3
  if (s1 == s2) {
    return 0;
  }

  const s1_len = s1.length;
  const s2_len = s2.length;
  if (s1_len === 0) {
    return s2_len;
  }
  if (s2_len === 0) {
    return s1_len;
  }

  // BEGIN STATIC
  let split = false;
  try {
    split = !('0')[0];
  } catch (e) {
    split = true; // Earlier IE may not support access by string index
  }
  // END STATIC
  if (split) {
    // @ts-ignore
    s1 = s1.split('');
    // @ts-ignore
    s2 = s2.split('');
  }

  let v0 = new Array(s1_len + 1);
  let v1 = new Array(s1_len + 1);

  let s1_idx = 0,
    s2_idx = 0,
    cost = 0;
  for (s1_idx = 0; s1_idx < s1_len + 1; s1_idx++) {
    v0[s1_idx] = s1_idx;
  }
  let char_s1 = '',
    char_s2 = '';
  for (s2_idx = 1; s2_idx <= s2_len; s2_idx++) {
    v1[0] = s2_idx;
    char_s2 = s2[s2_idx - 1];

    for (s1_idx = 0; s1_idx < s1_len; s1_idx++) {
      char_s1 = s1[s1_idx];
      cost = (char_s1 == char_s2) ? 0 : 1;
      let m_min = v0[s1_idx + 1] + 1;
      const b = v1[s1_idx] + 1;
      const c = v0[s1_idx] + cost;
      if (b < m_min) {
        m_min = b;
      }
      if (c < m_min) {
        m_min = c;
      }
      v1[s1_idx + 1] = m_min;
    }
    const v_tmp = v0;
    v0 = v1;
    v1 = v_tmp;
  }
  return v0[s1_len];
}

/**
 * Returns true if both inputs can be considered to be alike-sounding words, else false.
 */
export function soundAlike(s1: string, s2: string, lang?: LanguageId) {
  if(lang === 'fr' || lang === 'de') {
    return levenshtein(s1, s2) < 3;
  } else {
    return soundex(s1) === soundex(s2) && levenshtein(s1, s2) < 3;
  }
}

const ACCENT_MAP = {
  â:'a',
  ä:'a',
  ß:'s',
  Ü:'u',
  ü:'u',
  Ï:'i',
  ï:'i',
  Ê:'e',
  ê:'e',
  é:'e',
  È:'e',
  è:'e',
  ô:'o',
  Ô:'O',
  ç:'c',
  Ç:'C',
  // Convert full-width Japanese characters for Porygon-Z and Porygon 2
  ｚ: 'z',
  Ｚ: 'Z',
  '２': '2',
} as const;

// Based on https://github.com/aristus/accent-folding/blob/master/accent-fold.js

export const removeAccents = (s: string) => {
  if (!s) { return ''; }
  let ret = '';
  for (let i=0; i<s.length; i++) {
    // @ts-ignore
    ret += ACCENT_MAP[s.charAt(i)] || s.charAt(i);
  }
  return ret;
};
