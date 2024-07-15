import { apiClient } from '../apiClient';

export const getResource = async <TResource>(
	url: string
	// signal: AbortSignal | undefined
): Promise<TResource> => {
	const { data } = await apiClient.get<TResource>(url);
	return data;
};

