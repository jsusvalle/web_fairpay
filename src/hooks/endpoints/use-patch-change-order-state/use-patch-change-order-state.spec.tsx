import { renderHook, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';

import { usePatchChangeOrderState } from './use-patch-change-order-state';

describe('usePatchChangeOrderState hook', () => {
  it('should set data', async () => {
    const { result } = renderHook(() => usePatchChangeOrderState(), {
      wrapper: createProviderWrapper(),
    });

    result.current.mutate('12435');

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });
  });
});
