// src/hooks/useAuth.ts

import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

interface DecodedToken {
	exp: number;
	email: string;
}

const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [tokenExpired, setTokenExpired] = useState(false);
	const [userEmail, setUserEmail] = useState<string | null>(null);

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
	}, []);

	return { isAuthenticated, tokenExpired, userEmail };
};

export default useAuth;
