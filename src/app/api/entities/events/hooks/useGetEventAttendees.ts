import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

import { Attendee } from '../../merged/types/attendee.types';

const useGetEventAttendees = (eventId: number): UseQueryResult<Attendee[], Error> => {
	const query = useQuery({
		queryKey: ['eventAttendees', eventId],
		queryFn: () => getResource<Attendee[]>(`/event/${eventId}/attendees`),
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
		enabled: !!eventId,
	});

	return query;
};

export { useGetEventAttendees };
