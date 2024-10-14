import { useQuery } from '@tanstack/react-query';

import { orgKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Event } from '../types/event.types';

const useGetPastEventsByEntityId = (entityIdPast: string) => {
	const query = useQuery<Event[]>({
		queryKey: orgKeys.list(`past-${entityIdPast}`),
		queryFn: () => getResource(`/org/pastEvents/by-org/${entityIdPast}`),
	});

	return query;
};

export { useGetPastEventsByEntityId };
