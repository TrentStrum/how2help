import { apiClient } from "../apiClient";

export const putResource = async <TResource>(url: string, config?: object): Promise<TResource> => {
	const { data } = await apiClient.put<TResource>(url, config);
	return data;
};
