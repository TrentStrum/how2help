import { useQuery } from '@tanstack/react-query';

import { Cause } from '@api/entities/cause';
import { orgKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

const useGetCausesByOrg = (orgId: string) => {
	const query = useQuery<Cause[]>({
		queryKey: orgKeys.list(orgId),
		queryFn: () => getResource(`/cause/by-org/${orgId}`),
	});

	return query;
};

export { useGetCausesByOrg };
