import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BaseMain from './BaseMain';

describe('<BaseMain />', () => {
  test('it should mount', () => {
    render(<BaseMain />);

    const test = screen.getByTestId('Test');
    console.log(test)
     // expect(test
  });
});