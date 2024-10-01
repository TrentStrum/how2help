import axios from '../utils/apiClient';

interface LoginResponse {
	token: string;
	refreshToken: string;
}


export const login = async (email: string, password: string): Promise<LoginResponse> => {
	const response = await axios.post<LoginResponse>('/auth/login', { email, password });
	const { token, refreshToken } = response.data;
	localStorage.setItem('jwtToken', token);
	localStorage.setItem('refreshToken', refreshToken);
	return response.data;
};

export const logout = () => {
	localStorage.removeItem('jwtToken');
	localStorage.removeItem('refreshToken');
};

