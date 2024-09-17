import { useQuery } from '@tanstack/react-query';

import { getResource } from '../../utils/Resources/getResource';

import { orgKeys } from '../../utils/queryKeys';
import { Organization } from '../../../types/organization.types';

const useGetOrgByCause = (causeId: string) => {
	const query = useQuery<Organization[]>({
		queryKey: orgKeys.list(causeId),
		queryFn: () => getResource(`/cause/${causeId}`),
	});

	return query;
};

export { useGetOrgByCause };
