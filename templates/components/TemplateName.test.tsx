import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<TemplateName />);

    const test = screen.getByTestId('Test');
    console.log(test)
     // expect(test
  });
});