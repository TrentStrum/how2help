import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface FormSubmitButtonProps extends ButtonProps {
	label: string;
}

export const FormSubmitButton = ({ label, ...props }: FormSubmitButtonProps) => {
	const { formState: { isSubmitting } } = useFormContext();

	return (
		<Button
			{...props}
			disabled={isSubmitting}
			fullWidth
			startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
			type="submit"
			variant="contained"
		>
			{isSubmitting ? 'Submitting...' : label}
		</Button>
	);
};