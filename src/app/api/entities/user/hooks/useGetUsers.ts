import { keepPreviousData, QueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from 'react-router';

import { userKeys } from '@api-utils/queryKeys';
import { getResource } from '@api-utils/Resources/getResource';

import { GetUserResponse } from '..';

const useGetUsersAll = (
	currentPage: number,
	limitCount: number,
	options?: QueryOptions<GetUserResponse, AxiosError<ErrorResponse>>,
) => {
	return useQuery({
		queryKey: [userKeys.all, { page: currentPage, limit: limitCount }],
		queryFn: async () => {
			return getResource<GetUserResponse>(`/user?_limit=${limitCount}&_page=${currentPage}`);
		},
		...options,
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
	});
};

export { useGetUsersAll };
