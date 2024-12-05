import { zodResolver } from '@hookform/resolvers/zod';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import {
	Box,
	Button,
	Container,
	Divider,
	FilledInput,
	FormControl,
	FormHelperText,
	Grid,
	InputAdornment,
	Stack,
	Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email('Invalid email address'),
});

type FormData = z.infer<typeof schema>;

const RecoverPasswordForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit: SubmitHandler<FormData> = () => {
		toast.success('Password recovery email sent');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box mx={{ xl: 6 }} py={{ xs: 2, sm: 3 }}>
				<Container maxWidth="sm">
					<Typography variant="h3">Recover password</Typography>
					<Typography fontWeight={400} variant="h6">
						Enter your email to reset your password
					</Typography>
					<Divider sx={{ my: 2 }} />
				</Container>
				<Stack alignItems="center" justifyContent="center" spacing={{ xs: 2, sm: 3 }}>
					<Container maxWidth="sm">
						<Grid container spacing={2}>
							<Grid xs={12}>
								<FormControl error={!!errors.email} fullWidth>
									<Typography
										component="label"
										fontWeight={500}
										gutterBottom
										htmlFor="email-input"
										variant="h6"
									>
										Email
									</Typography>
									<FilledInput
										{...register('email')}
										hiddenLabel
										id="email-input"
										placeholder="Write your email"
										startAdornment={
											<InputAdornment position="start">
												<MailOutlineRoundedIcon fontSize="small" />
											</InputAdornment>
										}
										type="email"
									/>
									<FormHelperText>{errors.email?.message}</FormHelperText>
								</FormControl>
							</Grid>
							<Grid xs={12}>
								<Button fullWidth size="large" type="submit" variant="contained">
									Send Reset Link
								</Button>
							</Grid>
							<Grid xs={12}>
								<Grid xs={12}>
									<Button size="large" startIcon={<KeyboardBackspaceRoundedIcon />}>
										Return to sign in
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</Stack>
			</Box>
		</form>
	);
};

export default RecoverPasswordForm;
