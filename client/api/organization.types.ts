import { Cause } from './cause.types';

export type Organization = {
	orgId: number;
	name: string;
	causes: Cause[];
	countryServing: string[];
	stateServing?: string;
	cityServicing?: string;
	userRating?: string;
	orgImageUrl?: string;
	orgWebUrl?: string;
};
