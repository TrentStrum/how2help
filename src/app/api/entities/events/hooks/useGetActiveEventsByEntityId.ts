import { keepPreviousData, QueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router';

import { getResource } from '@api-utils/Resources/getResource';

import { GetEventResponse } from '../types/event.types';

const useGetActiveEventsByEntityId = (
	entityId: string,
	entitytype: string,
	currentPage: number,
	limitCount: number,
	options?: QueryOptions<GetEventResponse, AxiosError<ErrorResponse>>,
) => {
	return useQuery({
		queryKey: ['events', entityId, entitytype, { page: currentPage, limit: limitCount }],
		queryFn: async () => {
			return getResource<GetEventResponse>(
				`/events/org?_hostId=${entityId}&_hostType=${entitytype}&_limit=${limitCount}&_page=${currentPage}`,
			);
		},
		...options,
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});
};

export { useGetActiveEventsByEntityId };
