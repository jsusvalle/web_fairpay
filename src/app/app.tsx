import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Router } from '../router';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
