import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseHeader from './BaseHeader';

describe('<BaseHeader />', () => {
  test('it should mount', () => {
    render(<BaseHeader />);

    const test = screen.getByTestId('BaseHeader');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});