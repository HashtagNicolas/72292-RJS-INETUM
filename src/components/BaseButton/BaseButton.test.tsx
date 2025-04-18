import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseButton from './BaseButton';

describe('<BaseButton />', () => {
  test('it should mount', () => {
    render(<BaseButton />);

    const test = screen.getByTestId('BaseButton');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});