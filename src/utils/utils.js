/**
 * @module utils
 */

/**
 * @function calcTypoValues - Calculate line-height, margin-top and margin-bottom css properties.
 * @param {Number} leading - Base font-size * base line-height.
 * @param {Object[]} param2 - Array of ratios.
 * @param {Number} param2[].lineHeightRatio - Ratio for line-height css property.
 * @param {Number} param2[].marginTopRatio - Ratio for margin-top css property.
 * @param {Number} param2[].marginBottomRatio - Ratio for margin-bottom css property.
 * @returns {Object} - Object of css properies
 */

const calcTypoValues = (leading, [lineHeightRatio, marginTopRatio, marginBottomRatio]) => ({
  lineHeight: `${leading * lineHeightRatio}rem`,
  marginTop: `${leading * marginTopRatio}rem`,
  marginBottom: `${leading * marginBottomRatio}rem`,
});

export default calcTypoValues;
