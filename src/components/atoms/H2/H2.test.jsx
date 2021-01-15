import React from 'react';
import { render, screen } from '@testing-library/react';
import H2 from '.';

describe('H2', () => {
  test('should render H2 component', () => {
    render(<H2 />);
    screen.debug();
  });
  test('should render children', () => {
    render(<H2>Title</H2>);
    expect(screen.getByText('Title')).toBeInTheDocument();
    screen.debug();
  });
  test('should have class', () => {
    render(<H2 className="title">Title</H2>);
    expect(screen.getByText('Title')).toHaveAttribute('class');
    screen.debug();
  });
});
