import React from 'react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';
import StyledTitle from './Title.styles';

const Title = ({
  children,
  className,
  a11yLabel,
  style,
  responsive,
}) => (
  <StyledTitle
    className={className}
    aria-label={a11yLabel}
    style={style}
    responsive={responsive}
  >
    {children}
  </StyledTitle>
);

Title.defaultProps = {
  className: undefined,
  a11yLabel: undefined,
  style: undefined,
  responsive: true,
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  a11yLabel: PropTypes.string,
  style: stylePropType,
  responsive: PropTypes.bool,
};

export default Title;
