import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axios = Axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
} as AxiosRequestConfig);

axios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('jwtToken'); // Get the token from localStorage
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.respone.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			const refreshedToken = await refreshAccessTokenFn();
			localStorage.setItem('jwtToken', refreshedToken);
			axios.defaults.headers.Authorization = `Bearer ${refreshedToken}`;
			originalRequest.headers.Authorization = `Bearer ${refreshedToken}`;
			return axios(originalRequest);
		}
		return Promise.reject(error);
	},
);

const refreshAccessTokenFn = async (): Promise<string> => {
	const response = await axios.post('/auth/refresh');
	return response.data.token;
};

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
	// postAuth: <T>(url: string, credentials: object) => axios.post<T>(url, credentials),
};
