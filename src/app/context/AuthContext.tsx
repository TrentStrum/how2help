import { createContext, useContext, useState, ReactNode } from 'react';

import { User } from '@api/entities/user';

interface AuthContextType {
	isAuthenticated: boolean;
	user: User | null;
	login: (token: string, userData: User) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<any | null>(null);

	const login = (token: string, userData: any) => {
		localStorage.setItem('token', token);
		setUser(userData);
		setIsAuthenticated(true);
	};

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within AuthProvider');
	return context;
};
