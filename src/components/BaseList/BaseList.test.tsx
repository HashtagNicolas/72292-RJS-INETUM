import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseList from './BaseList';

describe('<BaseList />', () => {
  test('it should mount', () => {
    render(<BaseList />);

    const test = screen.getByTestId('BaseList');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});