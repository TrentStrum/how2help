import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
	User,
	LoginCredentials,
	AuthResponse,
	RegisterCredentials,
} from '@api/entities/user/types/user.types';
import { getResource } from '@api-utils/Resources/getResource';
import { postResource } from '@api-utils/Resources/postResource';

const TOKEN_KEY = 'token';

export const getStoredToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = () => {
	const token = getStoredToken();
	return !!token;
};

export const useUser = () => {
	return useQuery({
		queryKey: ['auth-user'],
		queryFn: () => getResource<User>('/auth/me'),
		retry: false,
		staleTime: Infinity,
	});
};

export const useLogin = () => {
	const queryClient = useQueryClient();

	return useMutation<AuthResponse, Error, LoginCredentials>({
		mutationFn: (credentials) =>
			postResource<LoginCredentials, AuthResponse>('/auth/login', credentials),
		onSuccess: (data: AuthResponse) => {
			// Store JWT token
			localStorage.setItem('token', data.token);
			// Update user data in cache
			queryClient.setQueryData(['auth-user'], data.user);
		},
		onError: (error) => {
			// Handle login errors (e.g., invalid credentials)
			localStorage.removeItem('token');
			queryClient.setQueryData(['auth-user'], null);
			throw error; // Or handle error messaging
		},
	});
};

// Logout mutation
export const useLogout = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => Promise.resolve(),
		onSuccess: () => {
			// Clear token
			localStorage.removeItem('token');
			// Reset auth user cache
			queryClient.setQueryData(['auth-user'], null);
			// Optional: Reset all queries
			queryClient.clear();
		},
	});
};

export const useRegister = () => {
	const queryClient = useQueryClient();

	return useMutation<AuthResponse, Error, RegisterCredentials>({
		mutationFn: (credentials) =>
			postResource<RegisterCredentials, AuthResponse>('/auth/register', credentials),
		onSuccess: (data: AuthResponse) => {
			localStorage.setItem('token', data.token);
			queryClient.setQueryData(['auth-user'], data.user);
		},
	});
};

export const useAuthState = () => {
	const { data: user, isLoading } = useUser();

	return {
		user,
		isLoading,
		isAuthenticated: !!user,
	};
};

export const useRefreshToken = () => {
	return useMutation({
		mutationFn: () => postResource<void, AuthResponse>('/auth/refresh-token'),
		onSuccess: (data: AuthResponse) => {
			localStorage.setItem(TOKEN_KEY, data.token);
		},
	});
};

export const login = async (credentials: { username: string; password: string }) => {
	const response = await fetch('/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});

	const data = await response.json();

	if (response.ok) {
		// Store the token
		localStorage.setItem('token', data.token);
		return data;
	}

	throw new Error('Login failed');
};
