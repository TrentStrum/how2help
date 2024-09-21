import { Event } from '..';

export const mockEvent: Event[] = [
	{
		eventId: 1,
		name: 'Pride Parade',
		description: 'Parade on Main st.',
		eventDate: '5/1/2025',
		causeIds: [1],
		organizationIds: [1, 6],
		attendeeIds: [1],
		avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
		userRating: 5,
		reviewIds: [1],
	},
	{
		eventId: 2,
		name: 'Another Parade',
		description: 'Parade on Main st.',
		eventDate: '5/1/2020',
		causeIds: [1],
		organizationIds: [1, 6],
		attendeeIds: [1],
		avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
		userRating: 5,
		reviewIds: [1],
	},
];
