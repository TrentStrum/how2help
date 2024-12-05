import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FormInputProps extends Omit<TextFieldProps, 'name'> {
	name: string;
}

export const FormInput = ({ name, ...props }: FormInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					{...props}
					error={!!error}
					fullWidth
					helperText={error?.message}
					size="small"
				/>
			)}
		/>
	);
};