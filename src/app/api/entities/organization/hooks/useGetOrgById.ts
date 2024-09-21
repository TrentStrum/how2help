import { useQuery } from '@tanstack/react-query';

import { getResource } from '../../../utils/Resources/getResource';

import { orgKeys } from '../../../utils/queryKeys';
import { Organization } from '..';

const useGetOrgById = (orgId: number) => {
	const query = useQuery<Organization>({
		queryKey: orgKeys.detail(orgId),
		queryFn: () => getResource(`/org/${orgId}`),
	});

	return query;
};

export { useGetOrgById };
