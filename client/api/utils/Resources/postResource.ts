import { User } from "../../hooks/user/user.types";
import { apiClient } from "../apiClient";

export const postResource = async <TResource>(url: string, credentials: User): Promise<TResource> => {
	const { data } = await apiClient.postAuth<TResource>(url, credentials);
	return data;
};
