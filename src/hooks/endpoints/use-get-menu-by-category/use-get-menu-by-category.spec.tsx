import { renderHook, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import { MENU_RESPONSE_DATA } from 'mock_services';

import { useGetMenuByCategory } from './use-get-menu-by-category';

describe('useGetMenuByCategory hook', () => {
  it('should set data', async () => {
    const { result } = renderHook(() => useGetMenuByCategory(), {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toEqual(MENU_RESPONSE_DATA);
  });
});
