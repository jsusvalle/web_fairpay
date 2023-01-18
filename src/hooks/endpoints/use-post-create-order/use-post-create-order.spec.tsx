import { renderHook, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import { NEW_ORDER_REQUEST_DATA } from 'mock_services';

import { usePostCreateOrder } from './use-post-create-order';

describe('usePostCreateOrder hook', () => {
  it('should set data', async () => {
    const { result } = renderHook(() => usePostCreateOrder(), {
      wrapper: createProviderWrapper(),
    });

    result.current.mutate(NEW_ORDER_REQUEST_DATA);

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });
  });
});
