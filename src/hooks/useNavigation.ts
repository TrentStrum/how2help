import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useNavigation = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleNavigation = async (path: string) => {
		try {
			setIsLoading(true);
			await navigate(path);
		} catch (error) {
			console.error('Navigation failed:', error);
			toast.error('Something went wrong. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return { handleNavigation, isLoading };
};
