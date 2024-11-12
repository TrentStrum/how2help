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
		enabled: isAuthenticated(),
	});
};

export const useLogin = () => {
	const queryClient = useQueryClient();

	return useMutation<AuthResponse, Error, LoginCredentials>({
		mutationFn: (credentials) =>
			postResource<LoginCredentials, AuthResponse>('/auth/login', credentials),
		onSuccess: (data: AuthResponse) => {
			localStorage.setItem(TOKEN_KEY, data.token);
			queryClient.setQueryData(['auth-user'], data.user);
		},
		onError: (error) => {
			localStorage.removeItem(TOKEN_KEY);
			queryClient.setQueryData(['auth-user'], null);
			throw error;
		},
	});
};

export const useLogout = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => postResource('/auth/logout'),
		onSuccess: () => {
			localStorage.removeItem(TOKEN_KEY);
			queryClient.setQueryData(['auth-user'], null);
			queryClient.invalidateQueries();
		},
	});
};

export const useRegister = () => {
	const queryClient = useQueryClient();

	return useMutation<AuthResponse, Error, RegisterCredentials>({
		mutationFn: (credentials) =>
			postResource<RegisterCredentials, AuthResponse>('/auth/register', credentials),
		onSuccess: (data: AuthResponse) => {
			localStorage.setItem(TOKEN_KEY, data.token);
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
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => postResource<void, AuthResponse>('/auth/refresh-token'),
		onSuccess: (data: AuthResponse) => {
			localStorage.setItem(TOKEN_KEY, data.token);
			queryClient.setQueryData(['auth-user'], data.user);
		},
	});
};
