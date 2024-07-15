import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../api/hooks/user/user.types';
import axios from 'axios';
import { loginAPI } from './AuthServices';
import { usePostUserAuth } from '../../api/hooks/user/usePostUserAuth';

type Props = {
	children?: ReactNode;
};

type UserContextType = {
	user: User | null;
	token: string | null;
	registerUser: (email: string, username: string, password: string) => void;
	loginUser: (username: string, password: string) => void;
	logout: () => void;
	isLoggedIn: () => boolean;
};

const AuthContext = createContext<UserContextType>({} as UserContextType);

export const AuthProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem('user');
		const token = localStorage.getItem('token');

		if (user && token) {
			setUser(JSON.parse(user));
			setToken(token);
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		}
		setIsReady(true);
	}, []);

	// const registerUser = async (email: string, username: string, password: string) => {
	// 	await registerAPI(email, username, password)
	// 		.then((res) => {
	// 			if (res) {
	// 				localStorage.setItem('token', res?.data.token);
	// 				const userObj = {
	// 					userName: res?.data.userName,
	// 					email: res?.data.email,
	// 				};
	// 				localStorage.setItem('user', JSON.stringify(userObj));
	// 				setToken(res?.data.token!);
	// 				setUser(userObj!);
	// 				toast.success('Login Success!');
	// 				navigate('/search');
	// 			}
	// 		})
	// 		.catch((e) => toast.warning('Server error occured'));
	// };
	const authHook = usePostUserAuth();

	const loginUser = async (data: User) => {


		authHook.mutate(data, {
			onSuccess: (res) => {
				if (res) {
					localStorage.setItem('token', res?.data.token);
					const userObj = {
						userName: res?.data.userName,
						email: res?.data.email,
					};
					localStorage.setItem('user', JSON.stringify(userObj));
					setToken(res?.data.token!);
					setUser(userObj!);
					toast.success('Login Success!');
					navigate('/search');
				}
			},
			onError: (e) => toast.warning('Server error occured')
		});
		})
			
	};

	const isLoggedIn = () => {
		return !!user;
	};

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setUser(null);
		setToken('');
		navigate('/');
	};

	return (
		<AuthContext.Provider value={{ loginUser, user, token, logout, isLoggedIn }}>
			{isReady ? children : null}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);