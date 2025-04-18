import { describe, expect, test , it  } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import BaseButton from './BaseButton';

describe('<BaseButton />', () => {
  it('it should mount', () => {
    render(<BaseButton>TEST_VALUE</BaseButton>);

    const test = screen.getByTestId('BaseButton');
    expect(test).toBeInTheDocument();
    expect(test).toHaveTextContent('TEST_VALUE');
  });
});