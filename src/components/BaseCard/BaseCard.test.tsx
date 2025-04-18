import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseCard from './BaseCard';

describe('<BaseCard />', () => {
  test('it should mount', () => {
    render(<BaseCard />);

    const test = screen.getByTestId('BaseCard');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});