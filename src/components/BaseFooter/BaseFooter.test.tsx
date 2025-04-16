import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseFooter from './BaseFooter';

describe('<BaseFooter />', () => {
  test('it should mount', () => {
    render(<BaseFooter />);

    const test = screen.getByTestId('Test');

    expect(test).toBeInTheDocument();
  });
});