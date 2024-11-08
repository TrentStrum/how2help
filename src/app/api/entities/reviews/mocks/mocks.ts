import { Reviews } from '../types/review.types';

export const mockReviews: Reviews[] = [
	{
		reviewId: 1,
		title: 'very helpful',
		review: 'the org is excellent',
		entityType: 'Organization',
		entityId: 1,
		date: '7/21/2021',
		flag: 'US',
		verified: true,
		userId: 1,
		avatar: '../../src/assets/avatars/1.png',
		type: 'Review',
	},
	{
		reviewId: 2,
		title: 'terrible',
		review: 'the org is terrible',
		entityType: 'Organization',
		entityId: 1,
		date: '7/22/2022',
		flag: 'US',
		verified: true,
		userId: 2,
		avatar: '../../src/assets/images/charlie.jpg',
		type: 'Review',
	},
];
