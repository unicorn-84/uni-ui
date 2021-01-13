import React from 'react';
import { render, screen } from '@testing-library/react';

import TempComponent from '.';

describe('TempComponent', () => {
  test('should render TempComponent component', () => {
    render(<TempComponent />);
    screen.debug();
  });
});
