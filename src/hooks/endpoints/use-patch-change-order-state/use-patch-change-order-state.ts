import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'infrastructure/api/config';

type TData = AxiosResponse<{}>;
type TError = AxiosResponse;
type TVariables = {};
type TContext = unknown;

type TOptions = UseMutationOptions<TData, TError, TVariables, TContext>;

export const usePatchChangeOrderState = (
  orderId?: string,
  options?: TOptions
) => {
  return useMutation<TData, TError, TVariables, TContext>(
    () =>
      instanceApi.request({
        method: 'patch',
        url: `/orders/${orderId}`,
      }),
    options
  );
};
