import { useQuery, UseQueryResult, useMutation, useQueryClient } from '@tanstack/react-query';

import { useAuthState } from '@api/auth/auth';
import { getResource } from '@api-utils/Resources/getResource';

interface FavoriteStatus {
	isFavorite: boolean;
}

const useGetOrgFavoriteStatus = (orgId: number): UseQueryResult<boolean, Error> => {
	const { user } = useAuthState();

	const query = useQuery({
		queryKey: ['org-favorite', orgId, user?.userId],
		queryFn: async () => {
			if (!user) return false;
			const response = await getResource<FavoriteStatus>(`/org/${orgId}/favorite-status`);
			return response.isFavorite;
		},
		staleTime: 1000 * 60 * 5, // 5 minutes
		refetchOnWindowFocus: false,
		enabled: !!user,
		initialData: false, // Set default value to false
	});

	return query;
};

const useToggleFavoriteOrg = (orgId: number) => {
	const queryClient = useQueryClient();
	const { user } = useAuthState();

	return useMutation({
		mutationFn: () => {
			if (!user) throw new Error('User must be logged in to favorite');
			return getResource(`/org/${orgId}/toggle-favorite`, { method: 'POST' });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['org-favorite', orgId, user?.userId] });
		},
	});
};

export { useGetOrgFavoriteStatus, useToggleFavoriteOrg };
