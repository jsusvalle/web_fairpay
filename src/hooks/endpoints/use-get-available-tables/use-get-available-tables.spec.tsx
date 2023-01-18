import { renderHook, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import { server } from 'infrastructure/tests/server';
import {
  getAvailableTablesErrorHandler,
  AVAILABLE_TABLES_RESPONSE_DATA,
} from 'mock_services';

import { useGetAvailableTables } from './use-get-available-tables';

describe('useGetAvailableTables hook', () => {
  it('should set data', async () => {
    const { result } = renderHook(() => useGetAvailableTables(), {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toEqual(AVAILABLE_TABLES_RESPONSE_DATA);
  });

  it('should set error', async () => {
    server.use(getAvailableTablesErrorHandler);
    const { result } = renderHook(() => useGetAvailableTables(), {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isError).toBeTruthy();
    });

    expect(result.current.status).toBe('error');
  });
});
