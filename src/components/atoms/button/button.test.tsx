import { render, fireEvent } from '@testing-library/react';

import { Button } from './button';

describe('Button test', () => {
  test('Should render the specified label and register the click', () => {
    const onClick = jest.fn();
    const label = 'This is a button';

    const { getByText, getByRole } = render(
      <Button isLoading={false} onClick={onClick}>
        {label}
      </Button>
    );

    const button = getByRole('button');

    expect(getByText(label)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Should render the loading button', () => {
    const onClick = jest.fn();
    const label = 'This is a button';

    const { getByText, getByRole } = render(
      <Button isLoading={true} onClick={onClick}>
        {label}
      </Button>
    );

    const button = getByRole('button');

    expect(getByText('Loading...')).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
