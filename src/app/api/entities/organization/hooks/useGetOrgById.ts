import { useQuery } from '@tanstack/react-query';

import { orgKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Organization } from '..';

const useGetOrgById = (orgId: number) => {
	const query = useQuery<Organization>({
		queryKey: orgKeys.detail(orgId),
		queryFn: () => getResource(`/org/${orgId}`),
	});

	return query;
};

export { useGetOrgById };
