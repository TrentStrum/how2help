import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

import { Organization } from '../types/organization.types';

interface PaginatedOrgsResponse {
	results: Organization[];
	total: number;
	page: number;
	limit: number;
}

export const useGetOrgByCause = (
	causeId: string,
	currentPage: number,
	limitCount: number,
	search?: string,
): UseQueryResult<PaginatedOrgsResponse, Error> => {
	const query = useQuery({
		queryKey: ['orgsByCause', causeId, currentPage, limitCount, search],
		queryFn: () =>
			getResource<PaginatedOrgsResponse>(
				`/org/by-cause/${causeId}?${search ? `_search=${search}` : ''}&_limit=${limitCount}&_page=${currentPage}`,
			),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
		enabled: !!causeId,
	});

	return query;
};
