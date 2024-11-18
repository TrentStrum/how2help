import axios from 'axios';

export const getStatistics = async () => {
	try {
		const [userCount, organizationCount, causeCount, eventCount, activityCount] = await Promise.all(
			[
				axios.get('/api/users/count'),
				axios.get('/api/organizations/count'),
				axios.get('/api/causes/count'),
				axios.get('/api/events/count'),
				axios.get('/api/activities/count'),
			],
		);

		return {
			userCount: userCount.data,
			organizationCount: organizationCount.data,
			causeCount: causeCount.data,
			eventCount: eventCount.data,
			activityCount: activityCount.data,
		};
	} catch (error) {
		console.error('Error fetching statistics:', error);
		throw error;
	}
};
