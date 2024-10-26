import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

import { Organization } from '..';

const useGetOrgsAll = (
	currentPage: number,
	limitCount: number,
): UseQueryResult<{ results: Organization[]; total: number }, Error> => {
	const query = useQuery({
		queryKey: ['org', currentPage],
		queryFn: () =>
			getResource<{ results: Organization[]; total: number }>(
				`/org?_limit=${limitCount}&_page=${currentPage}`,
			),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});

	return query;
};

export { useGetOrgsAll };
