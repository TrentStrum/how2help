import { apiClient } from '../apiClient';

export const postResource = async <TPayload, TResponse>(
	url: string,
	results?: TPayload,
	config?: object,
): Promise<TResponse> => {
	const res = await apiClient.post<TPayload, TResponse>(url, results, config);
	return res;
};
