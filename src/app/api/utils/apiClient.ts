import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { getStoredToken } from '../auth/auth';

const axios = Axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
} as AxiosRequestConfig);

axios.interceptors.request.use(
	(config) => {
		const token = getStoredToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Add auth header interceptor
axios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Response interceptor
axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		// If error is 401 and we haven't tried to refresh token yet
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				// Call your refresh token endpoint
				const response = await apiClient.post<unknown, AxiosResponse<{ token: string }>>(
					'/auth/refresh-token',
				);
				const newToken = response.data.token;

				// Store new token
				localStorage.setItem('token', newToken);

				// Retry original request with new token
				originalRequest.headers.Authorization = `Bearer ${newToken}`;
				return axios(originalRequest);
			} catch (refreshError) {
				// If refresh token fails, redirect to login
				localStorage.removeItem('token');
				window.location.href = '/login';
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	},
);

export default axios;

export const apiClient = {
	get: <T>(url: string, config?: object) => axios.get<T>(url, config),
	post: <TPayload = unknown, TResponse = AxiosResponse<TPayload>>(
		url: string,
		results?: TPayload,
		config?: object,
	) => axios.post<TPayload, TResponse>(url, results, config),
	put: <T>(url: string, results?: object, config?: object) => axios.put<T>(url, results, config),
	patch: <T>(url: string, results?: object, config?: object) =>
		axios.patch<T>(url, results, config),
	delete: <T>(url: string, config?: object) => axios.delete<T>(url, config),
};
