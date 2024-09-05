import { useMutation } from '@tanstack/react-query';

import { postResource } from '../../utils/Resources/postResource';
import { User } from '../../../types/user.types';

const usePostUserAuth = () => {
	return useMutation({
		mutationFn: (data: User) => postResource('/auth/user', data),
		onMutate: () => {},

		onError: () => {
			console.log('unknown error');
		},

		onSuccess: () => {
			return;
		},
	});
};

export { usePostUserAuth };
