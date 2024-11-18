import { H2hPaginatedResponse } from '../../../utils/types';

export type User = {
	// includes(queryLower: string): unknown;
	userId: number;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	dateOfBirth?: string;
	email: string;
	phone?: string;
	streetAddress?: string;
	altAddress?: string;
	city?: string;
	state?: string;
	zipCode?: string;
	country?: string;
	role?: string;
	favoriteOrgs?: number[];
	favoriteCauses?: number[];
	coverImageUrl?: string;
	avatarImageUrl?: string;
	type: string;
};

export type LoginCredentials = {
	email: string;
	password: string;
};

export type AuthResponse = {
	user: User;
	token: string;
};

export type RegisterCredentials = {
	email: string;
	password: string;
	username: string;
	firstName: string;
	lastName: string;
	phone?: string;
	streetAddress?: string;
	altAddress?: string;
	city?: string;
	state?: string;
	country?: string;
};

export type GetUserResponse = H2hPaginatedResponse<User>;
