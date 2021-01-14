import React from 'react';
import { render, screen } from '@testing-library/react';
import H1 from '.';

describe('H1', () => {
  test('should render H1 component', () => {
    render(<H1 />);
    screen.debug();
  });
});
