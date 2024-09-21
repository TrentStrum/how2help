export type Event = {
	eventId: number;
	name: string;
	description: string;
	eventDate: string;
	causeIds: number[];
	organizationIds?: number[];
	attendeeIds: number[];
	avatarImageUrl?: string;
	userRating?: number;
	reviewIds?: number[];
};
