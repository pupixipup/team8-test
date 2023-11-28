'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode, useState } from 'react';
import { ReactParent } from '@/shared/model/util';

function QueryProvider({ children }: ReactParent) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
