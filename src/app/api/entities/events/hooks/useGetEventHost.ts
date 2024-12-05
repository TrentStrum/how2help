import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Organization } from '@api/entities/organization';
import { getResource } from '@api-utils/Resources/getResource';

const useGetEventHost = (hostId: number): UseQueryResult<Organization, Error> => {
	const query = useQuery({
		queryKey: ['eventHost', hostId],
		queryFn: () => getResource<Organization>(`/org/${hostId}`),
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
		enabled: !!hostId,
	});

	return query;
};

export { useGetEventHost };
