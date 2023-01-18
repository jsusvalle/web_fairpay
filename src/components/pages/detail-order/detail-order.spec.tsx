import { render, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import DetailOrder from './detail-order';

describe('<DetailOrder />', () => {
  it('should be rendering with mock', async () => {
    const { getByText } = render(<DetailOrder />, {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(getByText('Table 3')).toBeInTheDocument();
      expect(getByText('Cooking')).toBeInTheDocument();
      expect(getByText('Jess')).toBeInTheDocument();
      expect(getByText('Sophie')).toBeInTheDocument();
    });
  });
});
