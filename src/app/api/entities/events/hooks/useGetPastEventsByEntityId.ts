import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../../utils/Resources/getResource';
import { orgKeys } from '../../../utils/queryKeys';
import { Event } from '../types/event.types';

const useGetPastEventsByEntityId = (entityIdPast: string) => {
	const query = useQuery<Event[]>({
		queryKey: orgKeys.list(`past-${entityIdPast}`),
		queryFn: () => getResource(`/org/pastEvents/by-org/${entityIdPast}`),
	});

	return query;
};

export { useGetPastEventsByEntityId };
