import React from 'react';
import { render, screen } from '@testing-library/react';
import P from '.';

describe('P', () => {
  test('should render P component', () => {
    render(<P />);
    screen.debug();
  });
  test('should render children', () => {
    render(<P>Paragraph</P>);
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
    screen.debug();
  });
  test('should have class', () => {
    render(<P className="text">Paragraph</P>);
    expect(screen.getByText('Paragraph')).toHaveAttribute('class');
    screen.debug();
  });
});
