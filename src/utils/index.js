/**
 * @module utils
 */

/**
 * @function calcTypoValues - Create an object for styling react component.
 * @example <caption>The example usage of calcTypoValues.</caption>
 *  calcTypoValues(26, [2, 3, 1])
 *  // returns {
 *  //  lineHeight: '52rem',
 *  //  marginTop: '78rem',
 *  //  marginBottom: '26rem',
 *  // }
 * @param {Number} leading - Base font-size * base line-height.
 * @param {Object} param2 - The object of ratios.
 * @param {number} param2.lineHeightRatio - The ratio for line-height css property.
 * @param {number} param2.marginTopRatio - The ratio for margin-top css property.
 * @param {number} param2.marginBottomRatio - The ratio for margin-bottom css property.
 * @returns {Object} - The object for styling react components.
 */

const calcTypoValues = (leading, { lineHeightRatio, marginTopRatio, marginBottomRatio }) => ({
  lineHeight: `${leading * lineHeightRatio}rem`,
  marginTop: `${leading * marginTopRatio}rem`,
  marginBottom: `${leading * marginBottomRatio}rem`,
});

export default calcTypoValues;
