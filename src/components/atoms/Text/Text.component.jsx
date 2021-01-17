import React from 'react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';
import StyledText from './Text.styles';

/**
 * Component for showing arbitrary text.
 *
 * @component
 * @example
 * <Text>Heading text</Text>
 */

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

export default Text;
