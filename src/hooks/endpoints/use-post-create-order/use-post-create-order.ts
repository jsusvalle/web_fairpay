import { useMutation, UseMutationOptions } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { instanceApi } from 'infrastructure/api/config';

import type { NewOrderRequest } from 'models';

type TData = AxiosResponse<NewOrderRequest>;
type TError = AxiosResponse;
type TVariables = NewOrderRequest;
type TContext = unknown;

type TOptions = UseMutationOptions<TData, TError, TVariables, TContext>;

export const usePostCreateOrder = (options?: TOptions) => {
  return useMutation<TData, TError, TVariables, TContext>(
    data =>
      instanceApi.request({
        method: 'post',
        url: '/create-order',
        data,
      }),
    options
  );
};
