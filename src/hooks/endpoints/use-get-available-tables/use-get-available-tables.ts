import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'infrastructure/api/config';
import type { AvailableTablesResponse } from 'models';

type TQueryFnData = AxiosResponse<AvailableTablesResponse>;
type TError = AxiosResponse;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetAvailableTables = (options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ['available_tables'],
    () =>
      instanceApi.request({
        method: 'get',
        url: '/available-tables',
      }),
    options
  );
};
