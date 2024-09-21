export type Activity = {
	activityId: number;
	name: string;
	description: string;
	postedDate: string;
	startDate: string;
	endDate?: string;
	causeIds: number[];
	organizationIds?: number[];
	avatarImageUrl?: string;
};
