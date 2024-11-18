import { keepPreviousData, QueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router';

import { getResource } from '@api-utils/Resources/getResource';

import { GetActivityResponse } from '../types/activity.types';

const useGetActivitiesByEntityId = (
	entityId: string,
	entitytype: string,
	currentPage: number,
	limitCount: number,
	search?: string,
	options?: QueryOptions<GetActivityResponse, AxiosError<ErrorResponse>>,
) => {
	return useQuery({
		queryKey: [
			'activities',
			entityId,
			entitytype,
			{ page: currentPage, limit: limitCount },
			search,
		],
		queryFn: async () => {
			return getResource<GetActivityResponse>(
				`/activity/by-org?_hostId=${entityId}&_hostType=${entitytype}&_limit=${limitCount}&_page=${currentPage}&_search=${search}`,
			);
		},
		...options,
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});
};
export { useGetActivitiesByEntityId };
