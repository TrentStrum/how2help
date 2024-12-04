import { Comment, EventComment, UserComment } from '../types/types';

export const mockComments: Comment[] = [
	{
		id: '1',
		content: 'Great event! Looking forward to it.',
		userId: 'user1',
		eventId: '1',
		createdAt: '2024-03-20T10:00:00Z',
		updatedAt: '2024-03-20T10:00:00Z',
	},
	{
		id: '2',
		content: 'Will there be parking available?',
		userId: 'user2',
		eventId: '1',
		createdAt: '2024-03-20T11:00:00Z',
		updatedAt: '2024-03-20T11:00:00Z',
	},
];

export const mockEventComments: EventComment[] = [
	{
		id: '1',
		commentId: '1',
		eventId: '1',
		createdAt: '2024-03-20T10:00:00Z',
		updatedAt: '2024-03-20T10:00:00Z',
	},
	{
		id: '2',
		commentId: '2',
		eventId: '1',
		createdAt: '2024-03-20T11:00:00Z',
		updatedAt: '2024-03-20T11:00:00Z',
	},
];

export const mockUserComments: UserComment[] = [
	{
		id: '1',
		commentId: '1',
		userId: 'user1',
		createdAt: '2024-03-20T10:00:00Z',
		updatedAt: '2024-03-20T10:00:00Z',
	},
	{
		id: '2',
		commentId: '2',
		userId: 'user2',
		createdAt: '2024-03-20T11:00:00Z',
		updatedAt: '2024-03-20T11:00:00Z',
	},
];
