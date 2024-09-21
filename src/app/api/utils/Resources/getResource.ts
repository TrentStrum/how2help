import { apiClient } from '../apiClient';

export const getResource = async <TResource>(url: string, options?: object): Promise<TResource> => {
	const { data } = await apiClient.get<TResource>(url, options);
	return data;
};

