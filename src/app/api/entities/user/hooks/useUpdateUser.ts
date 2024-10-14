import { useMutation } from '@tanstack/react-query';
import { omit } from 'lodash';
import { Schema } from 'zod';

import { queryClient } from '@api-utils/queryClient';

import { putResource } from '../../../utils/Resources/putResource';

const useUpdateUser = () => {
	return useMutation({
		mutationFn: async (data: { id: string; variant: string } & Schema) => {
			if (data.variant === 'update') {
				await putResource(`/users/${data.id}`, omit(data, ['variant']));
				alert('User updated successfully');
			}
		},

		onSuccess: async (_, variables) => {
			await queryClient.invalidateQueries({ queryKey: ['users'] });
			if (variables.variant === 'update') {
				await queryClient.invalidateQueries({ queryKey: ['user', { id: variables.id }] });
			}
		},
	});
};

export { useUpdateUser };
