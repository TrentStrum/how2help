import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Statistics {
	userCount: number;
	organizationCount: number;
	causeCount: number;
	eventCount: number;
	activityCount: number;
}

const fetchStatistics = async (): Promise<Statistics> => {
	// Replace with your actual API endpoint
	const response = await axios.get('/api/statistics');
	return response.data;
};

export const useStatistics = () => {
	return useQuery({
		queryKey: ['statistics'],
		queryFn: fetchStatistics,
		// Cache the data for 5 minutes
		staleTime: 5 * 60 * 1000,
		// Show stale data while revalidating
		placeholderData: {
			userCount: 0,
			organizationCount: 0,
			causeCount: 0,
			eventCount: 0,
			activityCount: 0,
		},
	});
};
