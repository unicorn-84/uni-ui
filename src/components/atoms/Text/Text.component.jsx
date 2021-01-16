import React from 'react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';
import StyledText from './Text.styles';

const Text = ({
  children, a11yLabel, style,
}) => (
  <StyledText
    aria-label={a11yLabel}
    style={style}
  >
    {children}
  </StyledText>
);

Text.defaultProps = {
  a11yLabel: undefined,
  style: undefined,
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  a11yLabel: PropTypes.string,
  style: stylePropType,
};

export default Text;
