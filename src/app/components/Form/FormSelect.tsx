import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface Option {
	label: string;
	value: string | number;
}

interface FormSelectProps extends Omit<SelectProps, 'name'> {
	name: string;
	label: string;
	options: Option[];
}

export const FormSelect = ({ name, label, options, ...props }: FormSelectProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<FormControl error={!!error} fullWidth size="small">
					<InputLabel>{label}</InputLabel>
					<Select {...field} {...props} label={label}>
						{options.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</Select>
					{error?.message && <FormHelperText>{error.message}</FormHelperText>}
				</FormControl>
			)}
		/>
	);
};