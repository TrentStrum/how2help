import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

interface FormDatePickerProps {
	name: string;
	label: string;
}

export const FormDatePicker = ({ name, label }: FormDatePickerProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<DatePicker
					{...field}
					label={label}
					renderInput={(params) => (
						<TextField
							{...params}
							error={!!error}
							fullWidth
							helperText={error?.message}
							size="small"
						/>
					)}
				/>
			)}
		/>
	);
};