import { Cause } from "./ICause";

export interface Organization {
	orgId: number;
	name: string;
	causes: Cause[];
	countryServing: string[];
	stateServing?: string;
	cityServicing?: string;
	userRating?: string;
	orgImageUrl?: string;
	orgWebUrl?: string;
}
