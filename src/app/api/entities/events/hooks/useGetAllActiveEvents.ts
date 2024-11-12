import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

import { GetEventResponse } from '../types/event.types';

const useGetAllActiveEvents = (
	currentPage: number,
	limitCount: number,
	search?: string,
): UseQueryResult<GetEventResponse, Error> => {
	const query = useQuery({
		queryKey: ['event', currentPage, search],
		queryFn: () =>
			getResource<GetEventResponse>(
				`/event?${search ? `_search=${search}` : ''}&_limit=${limitCount}&_page=${currentPage}`,
			),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
		enabled: true,
	});

	return query;
};

export { useGetAllActiveEvents };
