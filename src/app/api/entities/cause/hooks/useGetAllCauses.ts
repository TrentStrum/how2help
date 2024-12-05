import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

import { Cause } from '..';

const useGetAllCauses = (
	page: number,
	limitCount: number,
	search?: string,
): UseQueryResult<{ results: Cause[]; total: number }, Error> => {
	return useQuery({
		queryKey: ['causes', { page, limit: limitCount, search }],
		queryFn: () => {
			const searchParam = search ? `_search=${search}&` : '';
			return getResource<{ results: Cause[]; total: number }>(
				`/cause?${searchParam}_limit=${limitCount}&_page=${page}`,
			);
		},
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
	});
};

export { useGetAllCauses };
