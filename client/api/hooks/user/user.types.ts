import { Cause } from '../cause/cause.types';
import { Organization } from '../organization/organization.types';

export type User = {
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
};

export type LoginData = {
	userId: number;
	userToken: string;
};
