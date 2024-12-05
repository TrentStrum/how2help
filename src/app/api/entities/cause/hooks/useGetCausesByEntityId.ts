import { keepPreviousData, QueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router';

import { causeKeys } from '@api/utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { Cause } from '../types/cause.types';

const useGetCausesByEntityId = (
	orgId: number,
	options?: QueryOptions<Cause[], AxiosError<ErrorResponse>>,
) => {
	return useQuery({
		queryKey: causeKeys.list(orgId),
		queryFn: async () => {
			return getResource<Cause[]>(`/org/causeTags?_hostId=${orgId}`);
		},
		enabled: Boolean(orgId),
		...options,
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});
};

export { useGetCausesByEntityId };
