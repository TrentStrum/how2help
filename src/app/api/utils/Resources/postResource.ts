import { apiClient } from "../apiClient";

export const postResource = async <TResource>(url: string, config?: object): Promise<TResource> => {
	const { data } = await apiClient.post<TResource>(url, config);
	return data;
};
