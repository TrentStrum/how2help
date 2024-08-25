import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';



type Props = { children: ReactNode };

const ProtectedRoute = ({ children }: Props) => {
	const location = useLocation();
	const { isLoggedIn } = useAuth();
	return isLoggedIn() ? (
		<>{children}</>
	) : (
		<Navigate
			to='/login'
			state={{ from: location }}
			replace
		/>
	);
};

export { ProtectedRoute };
