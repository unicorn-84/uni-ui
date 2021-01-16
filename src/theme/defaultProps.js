import calcTypoValues from '../utils';

/* --------------------
  Typography
-------------------- */

const fontPrimary = 'sans-serif';
const fontSecondary = 'sans-serif';

// set base values
const baseLineHeight = 1.625;
const baseFontSize = '1rem';
const scale = 1.25; // major third

// compute base values
const leading = baseLineHeight * parseFloat(baseFontSize);

/* Gutenberg system: (line-height, margin-top, margin-bottom)
    Title(h1)        - (2, 3, 1)
    h2               - (1.5, 2, 1)
    h3               - (1.5, 1, 0)
    h4               - (1, 1, 0)
    Subtitle(p)      - (1, 1, 0)
    Body(p)          - (1, 1, 0)
    Text(span)       - (1, 0, 0)
*/

const title = {
  typo: {
    family: fontPrimary,
    weight: 700,
    size: `${parseFloat(baseFontSize) * scale * scale * scale * scale * scale}rem`,
    ...calcTypoValues(leading, [2, 3, 1]),
  },
};

const text = {
  typo: {
    family: fontSecondary,
    weight: 400,
    size: baseFontSize,
    ...calcTypoValues(leading, [1, 0, 0]),
  },
};

/* --------------------
  Colors
-------------------- */

const palette = {
  textSecondary: '#333',
  textPrimary: '#010101',
};

const theme = {
  palette,
  title,
  text,
};

export default { theme };
