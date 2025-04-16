import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseButton from './BaseButton';

describe('<BaseButton />', () => {
  test('it should mount', () => {
    render(<BaseButton />);

    const test = screen.getByTestId('Test');

    expect(test).toBeInTheDocument();
  });
});