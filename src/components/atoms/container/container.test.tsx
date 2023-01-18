import { render } from '@testing-library/react';
import { Container } from './container';

describe('Button test', () => {
  test('Should render', () => {
    const text = 'This is a text';

    const { getByText } = render(<Container>{text}</Container>);

    expect(getByText(text)).toBeInTheDocument();
  });
});
