import { Cause } from './cause.types';
import { Organization } from './organization.types';


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
	coverImageUrl?: string;
	avatarImageUrl?: string;

};

export type LoginData = {
	userId: number;
	userToken: string;
};
