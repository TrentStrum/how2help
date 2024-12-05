import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { toast } from 'react-toastify';

interface MutationConfig<TData, TVariables> {
	onSuccess?: (data: TData) => void;
	onError?: (error: PostgrestError | Error) => void;
	invalidateQueries?: string[];
}

export function useSupabaseMutation<TData, TVariables>(
	mutationFn: (variables: TVariables) => Promise<TData>,
	config?: MutationConfig<TData, TVariables>,
	options?: Omit<UseMutationOptions<TData, PostgrestError, TVariables>, 'mutationFn'>
) {
	const queryClient = useQueryClient();

	return useMutation<TData, PostgrestError, TVariables>({
		mutationFn,
		onSuccess: (data) => {
			if (config?.invalidateQueries) {
				config.invalidateQueries.forEach((query) => {
					queryClient.invalidateQueries({ queryKey: [query] });
				});
			}
			config?.onSuccess?.(data);
		},
		onError: (error) => {
			const message = error instanceof Error ? error.message : error.details;
			toast.error(`Error: ${message}`);
			config?.onError?.(error);
		},
		...options,
	});
}