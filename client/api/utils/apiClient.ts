import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = { 
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {'Content-Type': 'application/json'},
	// withCredentials: true
};

export const axios = Axios.create(config);
		

export const apiClient = {
	get: <T>(url: string) => axios.get<T>(url),
	post: <T>(url: string, config?: object) => axios.post<T>(url, config),
	put: <T>(url: string) => axios.put<T>(url),
	patch: <T>(url: string) => axios.patch<T>(url),
	//delete
	postAuth: <T>(url: string, credentials: object) => axios.post<T>(url, credentials),
};

// export const createAxiosInstance = () => {
// 	const axiosInstance = Axios.create({
// 		baseURL: import.meta.env.VITE_BASE_URL,
// 		headers: { 'Content-Type': 'application/json' },
// 	});
// 	enableTokenInterceptor(axiosInstance);

// 	return axiosInstance;
// };


// const enableTokenInterceptor = (axiosInstance: AxiosInstance) => {
// 	axiosInstance.interceptors.request.use(
// 		(config) => {
// 			const token = localStorage.getItem('token');
// 			if (token) {
// 				config.headers.set('Authorization', `Bearer ${token}`);
// 			}

// 			return config;
// 		},

// 		(error) => {
// 			return Promise.reject(error);
// 		},
// 	);
// };


