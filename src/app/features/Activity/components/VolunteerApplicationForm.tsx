import SendIcon from '@mui/icons-material/Send';
import {
	Box,
	Button,
	TextField,
	Stack,
	Alert,
	FormControlLabel,
	Checkbox,
	Typography,
} from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';

interface IVolunteerApplicationFormProps {
	activityId: number;
}

export const VolunteerApplicationForm = ({ activityId }: IVolunteerApplicationFormProps) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		agreeToTerms: false,
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// TODO: Implement form submission logic
		console.log('Form submitted:', { activityId, ...formData });
		setSubmitted(true);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: name === 'agreeToTerms' ? checked : value,
		}));
	};

	if (submitted) {
		return (
			<Alert severity="success" sx={{ mt: 2 }}>
				Thank you for applying! We&apos;ll contact you soon about your volunteer application.
			</Alert>
		);
	}

	return (
		<Box component="form" noValidate onSubmit={handleSubmit}>
			<Stack spacing={3}>
				<TextField
					fullWidth
					label="Full Name"
					name="name"
					onChange={handleChange}
					required
					value={formData.name}
				/>
				<TextField
					fullWidth
					label="Email"
					name="email"
					onChange={handleChange}
					required
					type="email"
					value={formData.email}
				/>
				<TextField
					fullWidth
					label="Phone Number"
					name="phone"
					onChange={handleChange}
					value={formData.phone}
				/>
				<TextField
					fullWidth
					label="Why would you like to volunteer?"
					multiline
					name="message"
					onChange={handleChange}
					rows={4}
					value={formData.message}
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={formData.agreeToTerms}
							name="agreeToTerms"
							onChange={handleChange}
							required
						/>
					}
					label={
						<Typography color="text.secondary" variant="body2">
							I agree to the volunteer terms and conditions
						</Typography>
					}
				/>
				<Button
					disabled={!formData.agreeToTerms}
					endIcon={<SendIcon />}
					fullWidth
					size="large"
					type="submit"
					variant="contained"
				>
					Submit Application
				</Button>
			</Stack>
		</Box>
	);
};
