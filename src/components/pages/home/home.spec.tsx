import { render, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import Home from './home';

describe('<Home />', () => {
  it('should be rendering label with mock', async () => {
    const { getByText } = render(<Home />, {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(getByText('Serving 12 tables')).toBeInTheDocument();
    });
  });

  it('should be rendering label with mock', async () => {
    const { findByRole } = render(<Home />, {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(findByRole('button', { name: 'customer' })).toBeTruthy();
    });
  });
});
