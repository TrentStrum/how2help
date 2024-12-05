import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@app/contexts/auth';

export const useAuthRedirect = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (user) {
			const from = (location.state as any)?.from?.pathname || '/';
			navigate(from, { replace: true });
		}
	}, [user, navigate, location]);
};