import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'infrastructure/api/config';
import type { MyTablesResponse } from 'models';

type TQueryFnData = AxiosResponse<MyTablesResponse>;
type TError = AxiosResponse;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetMyTables = (options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ['my_tables'],
    () =>
      instanceApi.request({
        method: 'get',
        url: '/my-tables',
      }),
    options
  );
};
