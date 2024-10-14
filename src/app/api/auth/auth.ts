import axios from '../utils/apiClient';

interface LoginResponse {
	token: string;
	refreshToken: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
	const response = await axios.post<LoginResponse>('/auth/login', { email, password });

	return response.data;
};
