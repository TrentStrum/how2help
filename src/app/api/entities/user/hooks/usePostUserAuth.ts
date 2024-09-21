import { useMutation } from '@tanstack/react-query';

import { User } from '..';
import { postResource } from '../../../utils/Resources/postResource';

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
