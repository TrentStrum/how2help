import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface FormCheckboxProps {
	name: string;
	label: string;
}

export const FormCheckbox = ({ name, label }: FormCheckboxProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<FormControl error={!!error}>
					<FormControlLabel
						control={<Checkbox {...field} checked={field.value} />}
						label={label}
					/>
					{error?.message && <FormHelperText>{error.message}</FormHelperText>}
				</FormControl>
			)}
		/>
	);
};