import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../../utils/Resources/getResource';
import { orgKeys } from '../../../utils/queryKeys';
import { Event } from '../types/event.types';


const useGetActiveEventsByEntityId = (orgId: string) => {
	const query = useQuery<Event[]>({
		queryKey: orgKeys.list(orgId),
		queryFn: () => getResource(`/org/activeEvents/by-org/${orgId}`),
	});

	return query;
};

export { useGetActiveEventsByEntityId };
