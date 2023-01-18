import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'infrastructure/api/config';
import type { DetailOrderResponse } from 'models';

type TQueryFnData = AxiosResponse<DetailOrderResponse>;
type TError = AxiosResponse;

type TOptions = UseQueryOptions<TQueryFnData, TError>;

export const useGetDetailOrder = (orderId: string, options?: TOptions) => {
  return useQuery<TQueryFnData, TError>(
    ['detail_order'],
    () =>
      instanceApi.request({
        method: 'get',
        url: `/detail-order/${orderId}`,
      }),
    options
  );
};
