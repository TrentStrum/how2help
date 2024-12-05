import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postResource } from '@api-utils/Resources/postResource';

import { Reaction, ReactionType } from '../types/reaction.types';

type AddReactionParams = {
	eventId: string;
	reactionType: ReactionType;
};

export const useAddEventReaction = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ eventId, reactionType }: AddReactionParams) => {
			return postResource<AddReactionParams, Reaction>('/reactions', {
				eventId,
				reactionType,
			});
		},
		onSuccess: (_, { eventId }) => {
			queryClient.invalidateQueries({
				queryKey: ['eventReactions', eventId],
			});
		},
	});
};
