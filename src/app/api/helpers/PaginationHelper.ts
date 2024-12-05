import { H2hPaginatedResponse, PaginationParams } from '@api/utils/types';

export const getPaginationParams = (url: URL) => {
	const pageParam = url.searchParams.get('_page') || '0';
	const limitParam = url.searchParams.get('_limit') || '10';
	const searchParam = url.searchParams.get('_search') || '';

	return {
		searchParams: searchParam,
		pageNumber: Number(pageParam),
		pageSize: Number(limitParam),
	};
};

export const createPaginatedResponse = <TResultType>(
	data: TResultType[],
	params: PaginationParams,
): H2hPaginatedResponse<TResultType> => {
	const status = 200;
	const statusText = 'Success';
	const { pageNumber, pageSize } = params;

	const start = pageNumber * pageSize;
	const end = start + pageSize;
	const paginatedData = data.slice(start, end);

	return {
		results: paginatedData,
		total: data.length,
		pageNumber,
		pageSize,
		status,
		statusText,
	};
};
