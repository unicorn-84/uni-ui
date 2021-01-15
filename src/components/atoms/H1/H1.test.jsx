import React from 'react';
import { render, screen } from '@testing-library/react';
import H1 from '.';

describe('H1', () => {
  test('should render H1 component', () => {
    render(<H1 />);
    screen.debug();
  });
  test('should render children', () => {
    render(<H1>Title</H1>);
    expect(screen.getByText('Title')).toBeInTheDocument();
    screen.debug();
  });
  test('should have class', () => {
    render(<H1 className="title">Title</H1>);
    expect(screen.getByText('Title')).toHaveAttribute('class');
    screen.debug();
  });
});
