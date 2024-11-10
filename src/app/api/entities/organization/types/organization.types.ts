export type Organization = {
	orgId: number;
	name: string;
	description: string;
	longDescription: string;
	causes: number[];
	countryServing: string[];
	stateServing?: string;
	cityServicing?: string;
	userRating?: number;
	starRatings?: number[];
	orgWebUrl?: string;
	status: string;
	avatarImageUrl?: string;
	images?: Array<{ id: number; image: string }>;
	reviews: number[];
	events: number[];
	activities?: number[];
	type: string;
};

export type OrgFilters = {
	search: string;
};
