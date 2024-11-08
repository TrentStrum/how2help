import { H2hPaginatedResponse, PaginationParams } from '@api/utils/types';

export const getPaginationParams = (url: URL): PaginationParams => {
	const searchParams = url.searchParams.get('_search') || '';
	const pageNumber = Number(url.searchParams.get('_page')) || 1;
	const pageSize = Number(url.searchParams.get('_limit')) || 10;
	return { searchParams, pageNumber, pageSize };
};

export const createPaginatedResponse = <TResultType>(
	data: TResultType[],
	params: PaginationParams,
): H2hPaginatedResponse<TResultType> => {
	const status = 200;
	const statusText = 'Success';
	const { searchParams, pageNumber, pageSize } = params;
	const filteredData = data.filter((item) => {
		if (searchParams) {
			return JSON.stringify(item).includes(searchParams);
		}
		return true;
	});
	const start = (pageNumber - 1) * pageSize;
	const end = start + pageSize;
	const paginatedData = filteredData.slice(start, end);
	return {
		results: paginatedData,
		total: data.length,
		pageNumber,
		pageSize,
		status,
		statusText,
	};
};
