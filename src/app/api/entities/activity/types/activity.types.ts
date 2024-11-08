import { H2hPaginatedResponse } from '@api/utils/types';

export type Activity = {
	activityId: number;
	name: string;
	description: string;
	postedDate: string;
	startDate: string;
	endDate: string;
	hostId: number;
	hostType: string;
	causeIds?: number[];
	avatarImageUrl?: string;
	status: string;
	type: string;
};

export type GetActivityResponse = H2hPaginatedResponse<Activity>;
