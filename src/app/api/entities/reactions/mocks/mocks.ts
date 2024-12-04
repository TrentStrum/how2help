// Add near the top with other imports
import { Reaction } from '../types/reaction.types';

// Add with other mock data
export const mockReactions: Reaction[] = [
	{
		id: '1',
		eventId: '1',
		userId: '1',
		reactionType: 'like',
		createdAt: '2024-03-15T10:00:00Z',
		updatedAt: '2024-03-15T10:00:00Z',
	},
	{
		id: '2',
		eventId: '1',
		userId: '2',
		reactionType: 'heart',
		createdAt: '2024-03-15T11:00:00Z',
		updatedAt: '2024-03-15T11:00:00Z',
	},
	{
		id: '3',
		eventId: '2',
		userId: '1',
		reactionType: 'clap',
		createdAt: '2024-03-16T10:00:00Z',
		updatedAt: '2024-03-16T10:00:00Z',
	},
	// Add more mock reactions as needed
];

// Your existing handlers remain the same...
