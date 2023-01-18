import { render, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import OrderCheck from './order-check';

describe('<OrderCheck />', () => {
  it('should be rendering with mock', async () => {
    const { getByText } = render(<OrderCheck />, {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(getByText('Jess')).toBeInTheDocument();
      expect(getByText('Erick')).toBeInTheDocument();
      expect(getByText('Nicolas')).toBeInTheDocument();
      expect(getByText('Sophie')).toBeInTheDocument();
    });
  });
});
