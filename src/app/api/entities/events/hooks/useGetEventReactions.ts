import { useQuery } from '@tanstack/react-query';

import { getResource } from '@api/utils/Resources/getResource';

export const useGetEventReactions = (eventId: string) => {
	return useQuery({
		queryKey: ['eventReactions', eventId],
		queryFn: () => getResource(`/event/${eventId}/reactions`),
	});
};
