import { useMutation } from "@tanstack/react-query";
import { omit } from "lodash";
import { Schema } from "zod";
import { putResource } from "../../../utils/Resources/putResource";
import { queryClient } from "../../../utils/queryClient";

const useUpdateUser = () => {

	return useMutation({
		mutationFn: (data: Schema) => {
			if (data.variant === 'update') {
				putResource(
					`/users/${data.id}`,
					omit(mapData(data), ['variant'])
				);
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
