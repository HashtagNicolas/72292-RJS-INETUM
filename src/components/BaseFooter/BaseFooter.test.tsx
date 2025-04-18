import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseFooter from './BaseFooter';

describe('<BaseFooter />', () => {
  test('it should mount', () => {
    render(<BaseFooter />);

    const test = screen.getByTestId('BaseFooter');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});