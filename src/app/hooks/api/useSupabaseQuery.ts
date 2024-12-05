import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';

export function useSupabaseQuery<TData>(
	key: string[],
	queryFn: () => Promise<TData>,
	options?: Omit<UseQueryOptions<TData, PostgrestError>, 'queryKey' | 'queryFn'>
) {
	return useQuery<TData, PostgrestError>({
		queryKey: key,
		queryFn,
		staleTime: 1000 * 60 * 5, // 5 minutes
		...options,
	});
}