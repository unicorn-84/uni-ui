import styled, { css } from 'styled-components';

const fontFamily = ({ theme: { text } }) => css`
  font-family: ${text.font.family};
`;

const weightStyle = ({ theme: { text } }) => css`
  font-weight: ${text.font.weight};
`;

const sizeStyle = ({ theme: { text } }) => css`
  font-size: ${text.size};
  line-height: ${text.lineHeight};
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

StyledText.defaultProps = Object.create({
  theme: {
    palette: {
      secondaryText: '#333',
    },
    text: {
      font: {
        family: 'sans-serif',
        weight: 400,
      },
      size: '1rem',
      lineHeight: 'normal',
    },
  },
});

export default StyledText;
