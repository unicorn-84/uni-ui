import styled, { css } from 'styled-components';
import defaultProps from '../../../themes/defaultProps';

const fontFamily = ({ theme: { title } }) => css`
  font-family: ${title.typo.family};
`;

const weightStyle = ({ theme: { title } }) => css`
  font-weight: ${title.typo.weight};
`;

const sizeStyle = ({ theme: { title } }) => css`
  font-size: ${title.typo.size};
  line-height: ${title.typo.lineHeight};
  margin-top: ${title.typo.marginTop};
  margin-bottom: ${title.typo.marginBottom};
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

export default StyledTitle;
