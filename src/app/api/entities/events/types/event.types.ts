import { H2hPaginatedResponse } from '@api/utils/types';

export type Event = {
	eventId: number;
	name: string;
	description: string;
	eventDate: string;
	location: string;
	hostId: number;
	hostType: string;
	causeIds: number[];
	organizationIds?: number[];
	avatarImageUrl?: string;
	userRating?: number;
	reviewIds?: number[];
	type: string;
};

export type GetEventResponse = H2hPaginatedResponse<Event>;
