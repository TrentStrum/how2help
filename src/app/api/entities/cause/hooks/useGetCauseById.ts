import { useQuery } from '@tanstack/react-query';

import { causeKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Cause } from '..';

const useGetCauseById = (causeId: number) => {
	const query = useQuery<Cause>({
		queryKey: causeKeys.detail(causeId),
		queryFn: () => getResource(`/cause/${causeId}`),
	});

	return query;
};

export { useGetCauseById };
