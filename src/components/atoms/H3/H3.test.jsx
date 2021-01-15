import React from 'react';
import { render, screen } from '@testing-library/react';
import H3 from '.';

describe('H3', () => {
  test('should render H3 component', () => {
    render(<H3 />);
    screen.debug();
  });
  test('should render children', () => {
    render(<H3>Title</H3>);
    expect(screen.getByText('Title')).toBeInTheDocument();
    screen.debug();
  });
  test('should have class', () => {
    render(<H3 className="title">Title</H3>);
    expect(screen.getByText('Title')).toHaveAttribute('class');
    screen.debug();
  });
});
