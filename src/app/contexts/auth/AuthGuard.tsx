import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from './AuthContext';
import { LoadingSpinner } from '@app/components/Loading/LoadingSpinner';

interface AuthGuardProps {
	children: ReactNode;
	requireAuth?: boolean;
}

export const AuthGuard = ({ children, requireAuth = true }: AuthGuardProps) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <LoadingSpinner />;
	}

	if (requireAuth && !user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (!requireAuth && user) {
		return <Navigate to="/" replace />;
	}

	return <>{children}</>;
};