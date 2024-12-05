export interface IEvent {
	id: number;
	name: string;
	description: string;
	avatarImageUrl: string;
	startDate: string;
	location: string;
	reactions?: Array<{
		id: string;
		userId: string;
	}>;
	comments?: Array<{
		id: string;
		content: string;
		createdAt: string;
		user: {
			name: string;
			avatarUrl: string;
		};
	}>;
	activities?: Array<{
		id: string;
		name: string;
	}>;
	attendees?: Array<{
		id: string;
		joinedAt: string;
		user: {
			name: string;
			avatarUrl: string;
		};
	}>;
}
