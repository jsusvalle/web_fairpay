import { renderHook, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import { server } from 'infrastructure/tests/server';
import {
  getMyTablesErrorHandler,
  MY_TABLES_RESPONSE_DATA,
} from 'mock_services';

import { useGetMyTables } from './use-get-my-tables';

describe('useGetMyTables hook', () => {
  it('should set data', async () => {
    const { result } = renderHook(() => useGetMyTables(), {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toEqual(MY_TABLES_RESPONSE_DATA);
  });

  it('should set error', async () => {
    server.use(getMyTablesErrorHandler);
    const { result } = renderHook(() => useGetMyTables(), {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isError).toBeTruthy();
    });

    expect(result.current.status).toBe('error');
  });
});
