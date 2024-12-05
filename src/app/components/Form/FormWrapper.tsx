import { Box, Paper } from '@mui/material';
import { ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormWrapperProps {
	children: ReactNode;
	methods: UseFormReturn<any>;
	onSubmit: (data: any) => void;
}

export const FormWrapper = ({ children, methods, onSubmit }: FormWrapperProps) => {
	return (
		<FormProvider {...methods}>
			<Paper
				component="form"
				elevation={0}
				onSubmit={methods.handleSubmit(onSubmit)}
				sx={{ p: 3 }}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{children}</Box>
			</Paper>
		</FormProvider>
	);
};