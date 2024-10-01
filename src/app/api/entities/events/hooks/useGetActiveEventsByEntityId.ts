import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../../utils/Resources/getResource';
import { orgKeys } from '../../../utils/queryKeys';
import { Event } from '../types/event.types';


const useGetActiveEventsByEntityId = (entityIdActive: string) => {
	const query = useQuery<Event[]>({
		queryKey: orgKeys.list(`active-${entityIdActive}`),
		queryFn: () => getResource(`/org/activeEvents/by-org/${entityIdActive}`),
	});

	return query;
};

export { useGetActiveEventsByEntityId };
