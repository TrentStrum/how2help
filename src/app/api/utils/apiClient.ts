import Axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = { 
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {'Content-Type': 'application/json'},
	// withCredentials: true
};

export const axios = Axios.create(config);		

export const apiClient = {
	get: <T>(url: string, config?: object) => axios.get<T>(url, config),
	post: <T>(url: string, config?: object) => axios.post<T>(url, config),
	put: <T>(url: string, config?: object) => axios.put<T>(url, config),
	patch: <T>(url: string, config?: object) => axios.patch<T>(url, config),
	//delete
	postAuth: <T>(url: string, credentials: object) => axios.post<T>(url, credentials),
};


