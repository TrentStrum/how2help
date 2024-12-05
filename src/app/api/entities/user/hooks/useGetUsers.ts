import { useInfiniteQuery } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

import { User } from '../types/user.types';

interface UsersResponse {
	results: User[];
	total: number;
	pageNumber: number;
	pageSize: number;
}

interface UseGetUsersParams {
	search?: string;
	filters?: {
		categories?: string[];
		locations?: string[];
		size?: string[];
	};
	limit?: number;
}

export const useGetUsersAll = ({ search, filters, limit = 10 }: UseGetUsersParams = {}) => {
	return useInfiniteQuery({
		queryKey: ['users', search, filters],
		queryFn: async ({ pageParam = 0 }) => {
			const queryString = new URLSearchParams();
			if (search) queryString.append('_search', search);
			queryString.append('_page', String(pageParam));
			queryString.append('_limit', String(limit));

			if (filters) {
				Object.entries(filters).forEach(([key, values]) => {
					if (values?.length) {
						values.forEach((value) => {
							queryString.append(`_${key}`, value);
						});
					}
				});
			}

			return getResource<UsersResponse>(`/user?${queryString.toString()}`);
		},
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length;
			return nextPage * lastPage.pageSize < lastPage.total ? nextPage : undefined;
		},
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
	});
};
