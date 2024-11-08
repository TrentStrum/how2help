import { useQuery } from '@tanstack/react-query';

import { causeKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Cause } from '..';

const useGetCauseAll = () => {
	const query = useQuery<Cause[]>({
		queryKey: causeKeys.all,
		queryFn: () => getResource('/cause'),
	});
	return query;
};

export { useGetCauseAll };
