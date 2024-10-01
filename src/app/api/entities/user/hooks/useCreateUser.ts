import { useMutation } from '@tanstack/react-query';
import { omit } from 'lodash';
import { Schema } from 'zod';
import { queryClient } from '../../../utils/queryClient';
import { postResource } from '../../../utils/Resources/postResource';

const useCreateUser = () => {
	return useMutation({
		mutationFn: (data: Schema) => {
			postResource('http://localhost:8080/users', omit(mapData(data), ['variant', 'id']));
		},

		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['users'] });
			alert('User created successfully');
		},
	});
};
export { useCreateUser };
