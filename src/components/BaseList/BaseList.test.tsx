import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BaseList from './BaseList';

describe('<BaseList />', () => {
  test('it should mount', () => {
    render(<BaseList />);

    const test = screen.getByTestId('Test');
    console.log(test)
     // expect(test
  });
});