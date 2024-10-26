import { apiClient } from '../apiClient';

export const getResource = async <TResource>(url: string, options?: object): Promise<TResource> => {
	const response = await apiClient.get<TResource>(url, options);
	if (response.data) {
		return response.data;
	}
	throw new Error('Invalid response format');
};
