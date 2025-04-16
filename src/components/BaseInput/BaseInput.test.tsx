import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseInput from './BaseInput';

describe('<BaseInput />', () => {
  test('it should mount', () => {
    render(<BaseInput />);

    const test = screen.getByTestId('Test');

    expect(test).toBeInTheDocument();
  });
});