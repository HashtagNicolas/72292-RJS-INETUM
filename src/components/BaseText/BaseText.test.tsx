import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseText from './BaseText';

describe('<BaseText />', () => {
  test('it should mount', () => {
    render(<BaseText />);

    const test = screen.getByTestId('Test');

    expect(test).toBeInTheDocument();
  });
});