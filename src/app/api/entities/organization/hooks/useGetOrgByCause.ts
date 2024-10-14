import { useQuery } from '@tanstack/react-query';

import { orgKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Organization } from '..';

const useGetOrgByCause = (causeId: string) => {
	const query = useQuery<Organization[]>({
		queryKey: orgKeys.list(causeId),
		queryFn: () => getResource(`/org/by-cause/${causeId}`),
	});

	return query;
};

export { useGetOrgByCause };
