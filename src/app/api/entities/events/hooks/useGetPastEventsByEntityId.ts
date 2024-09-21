import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../../utils/Resources/getResource';
import { orgKeys } from '../../../utils/queryKeys';
import { Event } from '../types/event.types';

const useGetPastEventsByEntityId = (orgId: string) => {
	const query = useQuery<Event[]>({
		queryKey: orgKeys.list(orgId),
		queryFn: () => getResource(`/org/pastEvents/by-org/${orgId}`),
	});

	return query;
};

export { useGetPastEventsByEntityId };
