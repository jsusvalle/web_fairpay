import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'infrastructure/api/config';
import type { MenuResponse } from 'models';

type TQueryFnData = AxiosResponse<MenuResponse>;
type TError = AxiosResponse;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetMenuByCategory = (options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ['menu'],
    () =>
      instanceApi.request({
        method: 'get',
        url: '/menu/categories',
      }),
    options
  );
};
