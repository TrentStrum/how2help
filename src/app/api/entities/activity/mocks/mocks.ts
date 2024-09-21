import { Activity } from '../types/activity.types';

export const mockActivity: Activity[] = [
	{
		activityId: 1,
		name: 'Pride Parade Registration Attendant',
		description:
			'Assist with registering parade participants.',
        postedDate: '5/1/2025',
		startDate: '5/1/2025',
		endDate: '5/1/2025',
        causeIds: [1],
        organizationIds: [1, 6],
        avatarImageUrl: '../../src/assets/images/lgtbq.jpg',
	},
];
