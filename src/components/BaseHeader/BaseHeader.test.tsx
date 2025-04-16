import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BaseHeader from './BaseHeader';

describe('<BaseHeader />', () => {
  test('it should mount', () => {
    render(<BaseHeader />);

    const test = screen.getByTestId('Test');
    console.log(test)
     // expect(test
  });
});