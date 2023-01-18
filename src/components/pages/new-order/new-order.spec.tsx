import { render, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import NewOrder from './new-order';

describe('<NewOrder />', () => {
  it('should be rendering', async () => {
    const { getByText } = render(<NewOrder />, {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(getByText('Open Table')).toBeInTheDocument();
    });
  });
});
