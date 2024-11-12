import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

import { Cause } from '..';

const useGetAllCauses = (
	currentPage: number,
	limitCount: number,
	search?: string,
): UseQueryResult<{ results: Cause[]; total: number }, Error> => {
	const query = useQuery({
		queryKey: ['cause', currentPage, search],
		queryFn: () =>
			getResource<{ results: Cause[]; total: number }>(
				`/cause?${search ? `_search=${search}` : ''}&_limit=${limitCount}&_page=${currentPage}`,
			),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
		enabled: true,
	});

	return query;
};

export { useGetAllCauses };
