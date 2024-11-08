import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Organization } from '@api/entities/organization';
import { putResource } from '@api-utils/Resources/putResource';

const useToggleFavoriteOrg = (orgId: string) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (isFavorite: boolean) =>
			putResource<Organization>(`/org/${orgId}/favorite`, { isFavorite }),
		onSuccess: () => {
			// Invalidate user-specific org favorites
			queryClient.invalidateQueries({
				queryKey: ['org', 'favorites'],
			});
			// Invalidate specific org data
			queryClient.invalidateQueries({
				queryKey: ['org', orgId],
			});
		},
	});
};

export { useToggleFavoriteOrg };
