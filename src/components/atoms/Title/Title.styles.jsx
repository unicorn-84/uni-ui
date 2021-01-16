import styled, { css } from 'styled-components';
import defaultProps from '../../../themes/defaultProps';

const fontFamily = ({ theme: { title } }) => css`
  font-family: ${title.font.family};
`;

const weightStyle = ({ theme: { title } }) => css`
  font-weight: ${title.font.weight};
`;

const sizeStyle = ({ theme: { title } }) => css`
  font-size: ${title.font.size};
  line-height: ${title.font.lineHeight};
  margin-top: ${title.marginTop};
`;

const colorStyle = ({ theme: { palette } }) => css`
  color: ${palette.primaryText};
`;

const style = () => css`
  ${fontFamily};
  ${weightStyle};
  ${sizeStyle};
  ${colorStyle};
`;

const StyledTitle = styled.h1([style]);

StyledTitle.defaultProps = Object.create(defaultProps);

console.log(StyledTitle.defaultProps);

export default StyledTitle;
