export default (leading, [lineHeightRatio, marginTopRatio, marginBottomRatio]) => ({
  lineHeight: `${leading * lineHeightRatio}rem`,
  marginTop: `${leading * marginTopRatio}rem`,
  marginBottom: `${leading * marginBottomRatio}rem`,
});
