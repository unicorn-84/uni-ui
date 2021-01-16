import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';
import 'jest-styled-components';
import Text from '.';

describe('Text', () => {
  test('renders Text component', () => {
    render(<Text className="class" a11yLabel="test" style={{ color: 'red' }}>text</Text>);
    expect(screen.getByText(/text/)).toBeInTheDocument();
    screen.debug();
    render(<Text>text</Text>);
  });

  test('renders class', () => {
    render(<Text className="class">text</Text>);
    expect(screen.getByText(/text/)).toHaveAttribute('class');
  });

  test('renders aria-label', () => {
    render(<Text a11yLabel="test">text</Text>);
    expect(screen.getByText(/text/)).toHaveAttribute('aria-label');
  });

  test('renders style', () => {
    render(<Text style={{ color: 'red' }}>text</Text>);
    expect(screen.getByText(/text/)).toHaveAttribute('style');
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<Text a11yLabel="test">text</Text>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
