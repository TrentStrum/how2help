import { Cause } from '../../cause';
// import { Event } from "../../events";
import { Reviews } from '../../reviews';

export type Organization = {
	orgId: number;
	name: string;
	causes: Cause[];
	countryServing: string[];
	stateServing?: string;
	cityServicing?: string;
	userRating?: number;
	starRatings?: number[];
	orgWebUrl?: string;
	status: string;
	avatarImageUrl?: string;
	images?: Array<{ id: number; image: string }>;
	reviews: Reviews[];
	events: number[];
};
