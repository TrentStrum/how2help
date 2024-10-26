import { DefaultError, QueryKey, UseQueryOptions } from '@tanstack/react-query';

export type H2HResponse<TResults = unknown> = {
	status: number;
	statusText: string;
	results: TResults;
};
export type H2hPaginatedResponse<TResultType> = {
	results: TResultType[];
	total: number;
	pageNumber: number;
	pageSize: number;
	status: number;
	statusText: string;
};
export type PaginationParams<> = {
	pageNumber: number;
	pageSize: number;
};

export type QueryOptions<
	TResponse = unknown,
	TError = DefaultError,
	TData = TResponse,
	TQueryKey extends QueryKey = QueryKey,
> = Omit<UseQueryOptions<TResponse, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>;
