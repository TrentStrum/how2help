import { useQuery } from '@tanstack/react-query';

import { eventKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Event } from '..';

const useGetEventById = (eventId: number) => {
	const query = useQuery<Event>({
		queryKey: eventKeys.detail(eventId),
		queryFn: () => getResource(`/event/${eventId}`),
	});

	return query;
};

export { useGetEventById };
