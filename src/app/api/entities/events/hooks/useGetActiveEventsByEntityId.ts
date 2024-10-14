import { useQuery } from '@tanstack/react-query';

import { orgKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Event } from '../types/event.types';

const useGetActiveEventsByEntityId = (entityIdActive: string) => {
	const query = useQuery<Event[]>({
		queryKey: orgKeys.list(`active-${entityIdActive}`),
		queryFn: () => getResource(`/org/activeEvents/by-org/${entityIdActive}`),
	});

	return query;
};

export { useGetActiveEventsByEntityId };
