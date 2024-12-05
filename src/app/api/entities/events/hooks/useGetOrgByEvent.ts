import { useQuery } from '@tanstack/react-query';

import { Organization } from '@api/entities/organization';
import { orgKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

const useGetOrgByEvent = (eventId: string) => {
	const query = useQuery<Organization[]>({
		queryKey: orgKeys.list(eventId),
		queryFn: () => getResource(`/org/by-event/${eventId}`),
	});

	return query;
};

export { useGetOrgByEvent };
