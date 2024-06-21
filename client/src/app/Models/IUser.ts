import { Cause } from "./ICause";
import { Organization } from "./IOrganization";

export interface User {
	userId: number;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	email: string;
	phone?: string;
	streetAddress?: string;
	altAddress?: string;
	city?: string;
	State?: string;
	Country?: string;
	role?: string;
	favoriteOrgs?: Organization[];
	favoriteCauses?: Cause[];
	profileImageUrl?: string;
}
