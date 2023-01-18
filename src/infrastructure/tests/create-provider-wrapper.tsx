/* eslint-disable no-console */
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

type ProviderWrapperProps = {
  children: React.ReactNode;
};

export const createProviderWrapper = (config: QueryClientConfig = {}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => null,
    },
    ...config,
  });

  return ({ children }: ProviderWrapperProps) => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};
