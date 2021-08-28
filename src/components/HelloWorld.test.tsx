import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import HelloWorld from './HelloWorld';

test('render HelloWorld component', () => {
  render(<HelloWorld value="HelloWorld" />);

  const text = screen.getByText(/HelloWorld/i);
  expect(text).toBeInTheDocument();
});
