import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import HelloWorld from './HelloWorld';

test('render Text component', () => {
  render(<HelloWorld value="test" />);

  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();
});
