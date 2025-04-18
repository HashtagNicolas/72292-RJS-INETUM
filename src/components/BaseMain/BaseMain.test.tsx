import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseMain from './BaseMain';

describe('<BaseMain />', () => {
  test('it should mount', () => {
    render(<BaseMain />);

    const test = screen.getByTestId('BaseMain');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});