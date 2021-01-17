import React from 'react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';
import StyledTitle from './Title.styles';

/**
 * Component for showing heading text.
 *
 * @component
 * @example
 * <Title>Heading text</Title>
 */

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
  /**
   * Any nodes to be rendered (usually text nodes)
   */
  children: PropTypes.node.isRequired,
  /**
   * Applied as aria-label HTML attribute to be used by screen readers
   */
  a11yLabel: PropTypes.string,
  /**
   * Applied as style HTML attribute that can be used to create inline css
   */
  style: stylePropType,
};

export default Title;
