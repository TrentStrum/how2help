import { QueryClient } from '@tanstack/react-query';

const defaultQueryConfig = { staleTime: 30000 };

const queryClient = new QueryClient({
	defaultOptions: { queries: defaultQueryConfig },
});

export { queryClient };
