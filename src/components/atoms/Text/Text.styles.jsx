import styled, { css } from 'styled-components';
import defaultProps from '../../../theme/defaultProps';

const fontFamily = ({ theme: { text } }) => css`
  font-family: ${text.typo.family};
`;

const weightStyle = ({ theme: { text } }) => css`
  font-weight: ${text.typo.weight};
`;

const sizeStyle = ({ theme: { text } }) => css`
  font-size: ${text.typo.size};
  line-height: ${text.typo.lineHeight};
`;

const colorStyle = ({ theme: { palette } }) => css`
  color: ${palette.secondaryText};
`;

const style = () => css`
  ${fontFamily}
  ${weightStyle}
  ${sizeStyle}
  ${colorStyle}
`;

const StyledText = styled.span([style]);

StyledText.defaultProps = Object.create(defaultProps);

export default StyledText;
