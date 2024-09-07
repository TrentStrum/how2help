import { Cause } from "./cause.types";
import { Reviews } from "./review.types";


export type Organization = {
	orgId: number;
	name: string;
	causes: Cause[];
	countryServing: string[];
	stateServing?: string;
	cityServicing?: string;
	userRating?: string;
	starRatings?: number[];
	orgWebUrl?: string;
	avatarImageUrl?: string;
	images?: Array<{ id: number; image: string }>;
	reviews: Reviews[];
};
