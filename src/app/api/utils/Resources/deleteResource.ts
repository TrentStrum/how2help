import { apiClient } from '../apiClient';

export const deleteResource = async <TResource>(url: string, p0: { headers: { Authorization: string; }; }): Promise<TResource> => {
	const response = await apiClient.delete<TResource>(url);
	if (response.data) {
		return response.data;
	}
	throw new Error('Invalid response format');
};
