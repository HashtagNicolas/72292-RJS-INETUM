import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseImage from './BaseImage';

describe('<BaseImage />', () => {
  test('it should mount', () => {
    render(<BaseImage />);

    const test = screen.getByTestId('BaseImage');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});