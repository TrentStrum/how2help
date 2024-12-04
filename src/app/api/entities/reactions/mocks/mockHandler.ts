import { http, HttpResponse } from 'msw';

import { mockReactions } from './mocks';
import { Reaction } from '../types/reaction.types';

export const handlers = [
	// Get reactions for an event
	http.get('/events/:eventId/reactions', ({ params }) => {
		const { eventId } = params;
		const reactions = mockReactions.filter((reaction) => reaction.eventId === eventId);
		return HttpResponse.json(reactions);
	}),

	// Create reaction
	http.post('/reactions', async ({ request }) => {
		const reaction = (await request.json()) as Reaction;
		return HttpResponse.json({
			...reaction,
			id: crypto.randomUUID(),
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		});
	}),

	// Delete reaction
	http.delete('/events/:eventId/reactions/:reactionId', () => {
		return new HttpResponse(null, { status: 204 });
	}),
];
