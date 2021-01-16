import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';
import 'jest-styled-components';
import Title from '.';

describe('Title', () => {
  test('renders Title component', () => {
    render(<Title className="class" a11yLabel="test" style={{ color: 'red' }}>title</Title>);
    expect(screen.getByText(/title/)).toBeInTheDocument();
    screen.debug();
    render(<Title>Title</Title>);
  });

  test('has class attr', () => {
    render(<Title className="class">title</Title>);
    expect(screen.getByText(/title/)).toHaveAttribute('class');
  });

  test('has aria-label attr', () => {
    render(<Title a11yLabel="test">title</Title>);
    expect(screen.getByText(/title/)).toHaveAttribute('aria-label');
  });

  test('has style attr', () => {
    render(<Title style={{ color: 'red' }}>title</Title>);
    expect(screen.getByText(/title/)).toHaveAttribute('style');
  });

  test('has responsive attr', () => {
    render(<Title responsive>title</Title>);
    expect(screen.getByText(/title/)).toHaveAttribute('responsive');
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<Title a11yLabel="test">title</Title>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
