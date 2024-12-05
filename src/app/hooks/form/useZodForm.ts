import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps } from 'react-hook-form';
import { ZodSchema } from 'zod';

interface UseZodFormProps<T extends ZodSchema> extends Omit<UseFormProps<T>, 'resolver'> {
	schema: T;
}

export const useZodForm = <T extends ZodSchema>({ schema, ...formProps }: UseZodFormProps<T>) => {
	return useForm({
		...formProps,
		resolver: zodResolver(schema),
	});
};