import { useQuery } from '@tanstack/react-query';

import { getResource } from '@api/utils/Resources/getResource';

export const useGetEventComments = (eventId: string) => {
	return useQuery({
		queryKey: ['eventComments', eventId],
		queryFn: () => getResource(`/event/comments/${eventId}`),
	});
};
