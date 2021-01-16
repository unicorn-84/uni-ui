import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';
import 'jest-styled-components';
import Title from '.';

describe('Title', () => {
  test('renders Title component', () => {
    render(<Title>title</Title>);
    expect(screen.getByText(/title/)).toBeInTheDocument();
    screen.debug();
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<Title a11yLabel="test">title</Title>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
