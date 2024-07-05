import Axios from 'axios';


export const axios = Axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
});

export const apiClient = {
	get: <T>(url: string) =>
		axios.get<T>(url)}

// axios.get('/org').then((response: AxiosResponse) => response.data),
// get: (route: string, config: { signal?: AbortSignal; params: unknown }) =>
// 	axios.get(route, { signal: config?.signal, params: config?.params }),
// post: (route: string, data: unknown, config: { signal: AbortSignal }) =>
// 	axios.post(route, data, { signal: config?.signal }),
// put: (route: string, data: unknown, config: { signal: AbortSignal }) =>
// 	axios.put(route, data, { signal: config?.signal }),
// patch: (route: string, data: unknown, config: { signal: AbortSignal }) =>
// 	axios.patch(route, data, { signal: config?.signal }),