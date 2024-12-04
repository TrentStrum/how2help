import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useRemoveEventReaction = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ eventId, reactionId }: { eventId: string; reactionId: string }) => {
			await axios.delete(`/events/${eventId}/reactions/${reactionId}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
				},
			});
			return null;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['events'] });
		},
	});
};
