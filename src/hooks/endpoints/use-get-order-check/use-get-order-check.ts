import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'infrastructure/api/config';
import type { OrderCheckResponse } from 'models';

type TQueryFnData = AxiosResponse<OrderCheckResponse>;
type TError = AxiosResponse;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetOrderCheck = (orderId: string, options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ['check_order'],
    () =>
      instanceApi.request({
        method: 'get',
        url: `/check-order/${orderId}`,
      }),
    options
  );
};
