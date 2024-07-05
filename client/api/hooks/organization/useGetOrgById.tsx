import { useQuery } from '@tanstack/react-query';

import { getResource } from '../../utils';
import { Organization } from '../../organization.types';
import { orgKeys } from '../../queryKeys';

const useGetOrgById = (orgId: number) => {
	const query = useQuery<Organization>({
		queryKey: orgKeys.detail(orgId),
		queryFn: () => getResource(`/org/${orgId}`),
	});

	return query;
};

export { useGetOrgById };
