import { H2hPaginatedResponse } from '../../../utils/types';
import { Cause } from '../../cause/types/cause.types';
import { Organization } from '../../organization/types/organization.types';

export type User = {
	// includes(queryLower: string): unknown;
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
	type: string;
};

export type LoginData = {
	userId: number;
	userToken: string;
};

export type GetUserResponse = H2hPaginatedResponse<User>;
