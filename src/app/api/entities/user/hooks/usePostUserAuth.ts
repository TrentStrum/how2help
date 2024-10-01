// import { useMutation } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { postResource } from '../../../utils/Resources/postResource';
// import axios from '../../../utils/apiClient';


// interface LoginInput {
// 	email: string;
// 	password: string;
// }

// interface LoginResponse {
// 	token: string;
// }


// const useLogin = () => {
// 	const navigate = useNavigate();

// 	const loginUserFn = async (user: LoginInput): Promise<LoginResponse> => {
// 		const res = await postResource<LoginInput, LoginResponse>('/auth/login', user);

// 		if (res.token) {
// 			localStorage.setItem('jwtToken', res.token);
// 			axios.defaults.headers.Authorization = `Bearer ${res.token}`;
// 		}
// 		return res;
// 	};

// 	return useMutation<LoginResponse, Error, LoginInput>({
// 		mutationKey: ['login'],
// 		mutationFn: (userData: LoginInput) => loginUserFn(userData),
// 		onSuccess: (data) => {
// 			toast.success('You have successfully logged in!');
// 			navigate('/');
// 		},
// 		onError: (error) => {
// 			// Show error message on failed login attempt
// 			toast.error('Login failed!');
// 			console.error('Login failed:', error.message);
// 		},
// 	});
// };

// export { useLogin };
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postResource } from '../../../utils/Resources/postResource';
import axios from '../../../utils/apiClient';
import jwt_decode from 'jwt-decode'; // Import for JWT decoding
import { useEffect, useState } from 'react';

// Interface for Login Input and Response
interface LoginInput {
	email: string;
	password: string;
}

interface LoginResponse {
	token: string;
}

// Interface for Decoded JWT Token
interface DecodedToken {
	exp: number;
	email: string;
}

const useLogin = () => {
	const navigate = useNavigate();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [tokenExpired, setTokenExpired] = useState(false);
	const [userEmail, setUserEmail] = useState<string | null>(null);

	const loginUserFn = async (user: LoginInput): Promise<LoginResponse> => {
		const res = await postResource<LoginInput, LoginResponse>('/auth/login', user);

		if (res.token) {
			// Store the token in localStorage
			localStorage.setItem('jwtToken', res.token);
			axios.defaults.headers.Authorization = `Bearer ${res.token}`;
		}
		return res;
	};

	useEffect(() => {
		const token = localStorage.getItem('jwtToken');

		if (token) {
			try {
				const decodedToken = jwt_decode<DecodedToken>(token);
				console.log('Decoded Token:', decodedToken);

				// Handle expiration logic
				if (decodedToken.exp) {
					const isTokenExpired = Date.now() >= decodedToken.exp * 1000;
					if (isTokenExpired) {
						console.log('Token is expired');
						setTokenExpired(true);
						localStorage.removeItem('jwtToken'); // Clear expired token
						setIsAuthenticated(false);
					} else {
						console.log('Token is valid');
						setIsAuthenticated(true);
						setUserEmail(decodedToken.email);
					}
				}
			} catch (error) {
				console.error('Invalid token:', error);
				setIsAuthenticated(false);
			}
		}
	}, []); // Run once after login to check token status

	return useMutation<LoginResponse, Error, LoginInput>({
		mutationKey: ['login'],
		mutationFn: (userData: LoginInput) => loginUserFn(userData),
		onSuccess: (data) => {
			// Decode token and check if it’s valid right after login
			const token = localStorage.getItem('jwtToken');

			if (token) {
				try {
					const decodedToken = jwt_decode<DecodedToken>(token);
					console.log('Decoded Token:', decodedToken);

					if (decodedToken.exp) {
						const isTokenExpired = Date.now() >= decodedToken.exp * 1000;
						if (isTokenExpired) {
							console.log('Token is expired');
							setTokenExpired(true);
							localStorage.removeItem('jwtToken'); // Clear expired token
							setIsAuthenticated(false);
							toast.error('Token is expired, please log in again.');
						} else {
							console.log('Token is valid');
							setIsAuthenticated(true);
							setUserEmail(decodedToken.email);
							toast.success('You have successfully logged in!');
							navigate('/'); // Navigate after successful login
						}
					}
				} catch (error) {
					console.error('Token decoding failed:', error);
					toast.error('Invalid token, login failed.');
				}
			}
		},
		onError: (error) => {
			// Show error message on failed login attempt
			toast.error('Login failed!');
			console.error('Login failed:', error.message);
		},
	});
};

export { useLogin };
