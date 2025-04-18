import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseInput from './BaseInput';

describe('<BaseInput />', () => {
  test('it should mount', () => {
    render(<BaseInput />);

    const test = screen.getByTestId('BaseInput');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});