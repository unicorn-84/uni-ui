import React from 'react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';
import StyledTitle from './Title.styles';

const Title = ({
  children,
  a11yLabel,
  style,
}) => (
  <StyledTitle
    aria-label={a11yLabel}
    style={style}
  >
    {children}
  </StyledTitle>
);

Title.defaultProps = {
  a11yLabel: undefined,
  style: undefined,
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  a11yLabel: PropTypes.string,
  style: stylePropType,
};

export default Title;
