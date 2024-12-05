import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

import { Activity } from '../types/activity.types';

interface PaginatedActivityResponse {
	results: Activity[];
	total: number;
	page: number;
	limit: number;
}

export const useGetAllActivities = (
	currentPage: number,
	limitCount: number,
	search?: string,
	filters?: Record<string, any>,
) => {
	const queryString = new URLSearchParams();

	if (search) queryString.append('_search', search);
	queryString.append('_limit', String(limitCount));
	queryString.append('_page', String(currentPage));

	// Add filters to query string
	if (filters) {
		Object.entries(filters).forEach(([key, value]) => {
			if (value) queryString.append(`_${key}`, String(value));
		});
	}

	return useQuery({
		queryKey: ['activities', currentPage, limitCount, search, filters],
		queryFn: () => getResource<PaginatedActivityResponse>(`/activity?${queryString.toString()}`),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
	});
};
