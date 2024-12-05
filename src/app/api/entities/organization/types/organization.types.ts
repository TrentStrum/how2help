export type Organization = {
	orgId: number;
	name: string;
	description: string;
	longDescription: string;
	mission?: string;
	foundedYear?: number;
	size?: string;
	email?: string;
	phone?: string;
	address?: string;
	website?: string;
	bannerImageUrl: string;
	causes: number[];
	countryServing: string[];
	stateServing: string;
	cityServicing: string;
	userRating: number;
	starRatings: number[];
	avatarImageUrl: string;
	orgWebUrl: string;
	status: 'active' | 'closed';
	images: string[];
	reviews: number[];
	events: number[];
	activities: number[];
	type: 'Organization';
};

export type OrgFilters = {
	search: string;
};
