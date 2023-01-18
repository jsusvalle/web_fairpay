import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

type Props = { children: React.ReactNode; queryClient?: QueryClient };

export const AllTheProviders: React.FC<Props> = ({
  queryClient = makeQueryClient(),
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const renderStory = (
  ui: React.ReactElement<{ queryClient?: QueryClient }>,
  options: RenderOptions = {}
) => {
  const queryClient: QueryClient = ui.props.queryClient ?? makeQueryClient();
  const clonedUi = React.cloneElement(ui, { queryClient });
  return { ...render(clonedUi, options), queryClient };
};

export * from '@testing-library/react';
export * from '@storybook/testing-react';
export { default as user } from '@testing-library/user-event';
