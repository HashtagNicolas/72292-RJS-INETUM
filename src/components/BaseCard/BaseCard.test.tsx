import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BaseCard from './BaseCard';

describe('<BaseCard />', () => {
  test('it should mount', () => {
    render(<BaseCard />);

    const test = screen.getByTestId('Test');
    console.log(test)
     // expect(test
  });
});