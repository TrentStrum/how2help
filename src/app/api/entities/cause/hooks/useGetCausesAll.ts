import { useQuery } from '@tanstack/react-query';

import { causeKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

const useGetCausesAll = () => {
	const query = useQuery({
		queryKey: causeKeys.all,
		queryFn: () => getResource('/cause'),
	});
	return query;
};

export { useGetCausesAll };
