import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseImage from './BaseImage';

describe('<BaseImage />', () => {
  test('it should mount', () => {
    render(<BaseImage />);

    const test = screen.getByTestId('Test');

    expect(test).toBeInTheDocument();
  });
});