import { useMutation } from '@tanstack/react-query';
import { omit } from 'lodash';
import { Schema } from 'zod';

import { queryClient } from '@api-utils/queryClient';
import { postResource } from '@api-utils/Resources/postResource';

const useCreateUser = () => {
	return useMutation({
		mutationFn: async (data: Schema) => {
			await postResource('http://localhost:8080/users', omit(data, ['variant', 'id']));
		},

		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['users'] });
			alert('User created successfully');
		},
	});
};
export { useCreateUser };
