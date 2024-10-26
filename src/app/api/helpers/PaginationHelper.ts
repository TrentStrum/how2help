import { H2hPaginatedResponse, PaginationParams } from '@api/utils/types';

export const getPaginationParams = (url: URL): PaginationParams => {
	const pageNumber = Number(url.searchParams.get('_page')) || 1;
	const pageSize = Number(url.searchParams.get('_limit')) || 10;
	return { pageNumber, pageSize };
};

export const creatPaginatedResponse = <TResultType>(
	data: TResultType[],
	params: PaginationParams,
): H2hPaginatedResponse<TResultType> => {
	const status = 200;
	const statusText = 'Success';
	const { pageNumber, pageSize } = params;
	const start = (pageNumber - 1) * pageSize;
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
