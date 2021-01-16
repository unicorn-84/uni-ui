import styled, { css } from 'styled-components';
import defaultProps from '../../../themes/defaultProps';

const fontFamily = ({ theme: { text } }) => css`
  font-family: ${text.font.family};
`;

const weightStyle = ({ theme: { text } }) => css`
  font-weight: ${text.font.weight};
`;

const sizeStyle = ({ theme: { text } }) => css`
  font-size: ${text.font.size};
  line-height: ${text.font.lineHeight};
`;

const colorStyle = ({ theme: { palette } }) => css`
  color: ${palette.secondaryText};
`;

const style = () => css`
  ${fontFamily};
  ${weightStyle};
  ${sizeStyle};
  ${colorStyle};
`;

const StyledText = styled.span([style]);

StyledText.defaultProps = Object.create(defaultProps);

export default StyledText;
