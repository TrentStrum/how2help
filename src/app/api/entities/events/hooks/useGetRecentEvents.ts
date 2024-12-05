import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { IEvent } from '../types';

import { getResource } from '@api-utils/Resources/getResource';

export const useGetRecentEvents = () => {
	return useQuery<IEvent[]>({
		queryKey: ['events', 'recent'],
		queryFn: () => getResource<IEvent[]>('/events/recent'),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});
};
