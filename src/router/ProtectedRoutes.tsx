import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@app/context/AuthContext';

type Props = {
	children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate replace to="/login" />;
	}

	return <>{children}</>;
};
