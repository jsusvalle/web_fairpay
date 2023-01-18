import { renderHook, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import { ORDER_CHECK_RESPONSE_DATA } from 'mock_services';

import { useGetOrderCheck } from './use-get-order-check';

describe('useGetOrderCheck hook', () => {
  it('should set data', async () => {
    const { result } = renderHook(() => useGetOrderCheck('12453'), {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toEqual(ORDER_CHECK_RESPONSE_DATA);
  });
});
