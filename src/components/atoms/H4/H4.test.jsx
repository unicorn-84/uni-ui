import React from 'react';
import { render, screen } from '@testing-library/react';
import H4 from '.';

describe('H4', () => {
  test('should render H4 component', () => {
    render(<H4 />);
    screen.debug();
  });
  test('should render children', () => {
    render(<H4>Title</H4>);
    expect(screen.getByText('Title')).toBeInTheDocument();
    screen.debug();
  });
  test('should have class', () => {
    render(<H4 className="title">Title</H4>);
    expect(screen.getByText('Title')).toHaveAttribute('class');
    screen.debug();
  });
});
