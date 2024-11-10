import { useQuery, UseQueryResult, useMutation, useQueryClient } from '@tanstack/react-query';

import { getResource } from '@api-utils/Resources/getResource';

interface FavoriteStatus {
	isFavorite: boolean;
}

const useGetOrgFavoriteStatus = (orgId: number): UseQueryResult<FavoriteStatus, Error> => {
	const query = useQuery({
		queryKey: ['org-favorite', orgId],
		queryFn: () => getResource<FavoriteStatus>(`/org/${orgId}/favorite-status`),
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
		enabled: true,
	});

	return query;
};

const useToggleFavoriteOrg = (orgId: number) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => getResource(`/org/${orgId}/toggle-favorite`, { method: 'POST' }),
		onSuccess: () => {
			// Invalidate the favorite status query to trigger a refetch
			queryClient.invalidateQueries({ queryKey: ['org-favorite', orgId] });
		},
	});
};

export { useGetOrgFavoriteStatus, useToggleFavoriteOrg };
