import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseCard from './BaseCard';

describe('<BaseCard />', () => {
  test('it should mount', () => {
    render(<BaseCard />);

    const test = screen.getByTestId('Test');

    expect(test).toBeInTheDocument();
  });
});