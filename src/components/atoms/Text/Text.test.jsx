import React from 'react';
import '@testing-library/jest-dom'; // for bit testing
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';
import 'jest-styled-components';
import Text from '.';

describe('Text', () => {
  test('renders Text component', () => {
    render(<Text>text</Text>);
    expect(screen.getByText(/text/)).toBeInTheDocument();
    screen.debug();
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<Text a11yLabel="test">text</Text>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
