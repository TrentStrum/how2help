import { keepPreviousData, QueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router';

import { getResource } from '@api-utils/Resources/getResource';

import { GetActivityResponse } from '..';

const useGetAllActivities = (
	currentPage: number,
	limitCount: number,
	options?: QueryOptions<GetActivityResponse, AxiosError<ErrorResponse>>,
) => {
	return useQuery({
		queryKey: ['activity', { page: currentPage, limit: limitCount }],
		queryFn: async () => {
			return getResource<GetActivityResponse>(
				`/activity?_limit=${limitCount}&_page=${currentPage}`,
			);
		},
		...options,
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});
};

export { useGetAllActivities };
