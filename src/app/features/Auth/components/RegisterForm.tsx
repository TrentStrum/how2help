import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormHelperText,
	Grid,
	InputAdornment,
	Link,
	Stack,
	Typography,
	OutlinedInput,
	IconButton,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import GoogleIcon from '@assets/placeholders/logo/google.svg';

const schema = z
	.object({
		firstName: z.string().min(1, 'First name is required'),
		lastName: z.string().min(1, 'Last name is required'),
		email: z.string().email('Invalid email address'),
		password: z
			.string()
			.min(6, 'Password must be at least 6 characters long')
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
				'Password must contain at least one uppercase letter, one lowercase letter, and one number',
			),
		repeatPassword: z.string(),
	})
	.refine((data) => data.password === data.repeatPassword, {
		message: "Passwords don't match",
		path: ['repeatPassword'],
	});

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			repeatPassword: '',
		},
	});

	const [showPassword, setShowPassword] = useState(false);
	const password = watch('password');

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		try {
			// Add your registration logic here
			toast.success('Account created successfully!');
		} catch (error) {
			toast.error('Registration failed. Please try again.');
			console.error('Registration error:', error);
		}
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				maxWidth: 480,
				mx: 'auto',
				p: 2,
			}}
		>
			<Typography
				align="center"
				sx={{
					mb: 1,
					fontWeight: 500,
				}}
				variant="h5"
			>
				Create Account
			</Typography>
			<Typography
				align="center"
				color="text.secondary"
				sx={{
					mb: 4,
					fontSize: '0.875rem',
				}}
			>
				Join our platform to start helping
			</Typography>

			<Stack spacing={3}>
				{/* Social Login Buttons */}
				<Stack direction="row" spacing={2}>
					<Button
						fullWidth
						startIcon={
							<Box component="img" src={GoogleIcon} alt="Google" sx={{ width: 50, height: 50 }} />
						}
						sx={{
							py: 1.5,
							border: '1px solid',
							borderColor: 'divider',
							bgcolor: 'background.paper',
							color: 'text.primary',
							'&:hover': {
								bgcolor: 'background.paper',
								borderColor: 'divider',
							},
						}}
						variant="outlined"
					/>
					<Button
						fullWidth
						startIcon={
							<Box
								alt="Auth0"
								component="img"
								src="/placeholders/logo/auth0.svg"
								sx={{ width: 20, height: 20 }}
							/>
						}
						sx={{
							py: 1.5,
							border: '1px solid',
							borderColor: 'divider',
							bgcolor: 'background.paper',
							color: 'text.primary',
							'&:hover': {
								bgcolor: 'background.paper',
								borderColor: 'divider',
							},
						}}
						variant="outlined"
					>
						Auth0
					</Button>
				</Stack>

				<Box sx={{ position: 'relative', my: 3 }}>
					<Divider />
					<Typography
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							bgcolor: 'background.paper',
							px: 2,
							color: 'text.secondary',
							fontSize: '0.875rem',
						}}
					>
						or
					</Typography>
				</Box>

				{/* Name Fields */}
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<FormControl error={!!errors.firstName} fullWidth>
							<Typography
								component="label"
								sx={{
									mb: 1,
									fontSize: '0.875rem',
									color: 'text.secondary',
								}}
							>
								First Name
							</Typography>
							<OutlinedInput
								{...register('firstName')}
								placeholder="First name"
								sx={{
									bgcolor: 'background.paper',
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'divider',
									},
								}}
							/>
							<FormHelperText>{errors.firstName?.message}</FormHelperText>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl error={!!errors.lastName} fullWidth>
							<Typography
								component="label"
								sx={{
									mb: 1,
									fontSize: '0.875rem',
									color: 'text.secondary',
								}}
							>
								Last Name
							</Typography>
							<OutlinedInput
								{...register('lastName')}
								placeholder="Last name"
								sx={{
									bgcolor: 'background.paper',
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'divider',
									},
								}}
							/>
							<FormHelperText>{errors.lastName?.message}</FormHelperText>
						</FormControl>
					</Grid>
				</Grid>

				{/* Email Field */}
				<FormControl error={!!errors.email} fullWidth>
					<Typography
						component="label"
						sx={{
							mb: 1,
							fontSize: '0.875rem',
							color: 'text.secondary',
						}}
					>
						Email
					</Typography>
					<OutlinedInput
						{...register('email')}
						placeholder="your@email.com"
						startAdornment={
							<InputAdornment position="start">
								<MailOutlineRoundedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
							</InputAdornment>
						}
						sx={{
							bgcolor: 'background.paper',
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: 'divider',
							},
						}}
						type="email"
					/>
					<FormHelperText>{errors.email?.message}</FormHelperText>
				</FormControl>

				{/* Password Fields */}
				<FormControl error={!!errors.password} fullWidth>
					<Typography
						component="label"
						sx={{
							mb: 1,
							fontSize: '0.875rem',
							color: 'text.secondary',
						}}
					>
						Password
					</Typography>
					<OutlinedInput
						{...register('password')}
						endAdornment={
							<InputAdornment position="end">
								<IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						placeholder="••••••••"
						sx={{
							bgcolor: 'background.paper',
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: 'divider',
							},
						}}
						type={showPassword ? 'text' : 'password'}
					/>
					<FormHelperText>{errors.password?.message}</FormHelperText>
				</FormControl>

				<FormControl error={!!errors.repeatPassword} fullWidth>
					<Typography
						component="label"
						sx={{
							mb: 1,
							fontSize: '0.875rem',
							color: 'text.secondary',
						}}
					>
						Confirm Password
					</Typography>
					<OutlinedInput
						{...register('repeatPassword')}
						placeholder="••••••••"
						sx={{
							bgcolor: 'background.paper',
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: 'divider',
							},
						}}
						type={showPassword ? 'text' : 'password'}
					/>
					<FormHelperText>{errors.repeatPassword?.message}</FormHelperText>
				</FormControl>

				{/* Terms and Submit */}
				<FormControlLabel
					control={
						<Checkbox
							required
							size="small"
							sx={{
								color: 'text.secondary',
								'&.Mui-checked': {
									color: 'primary.main',
								},
							}}
						/>
					}
					label={
						<Typography color="text.secondary" variant="body2">
							I agree to the{' '}
							<Link href="#" sx={{ color: 'primary.main' }}>
								Terms of Service
							</Link>{' '}
							and{' '}
							<Link href="#" sx={{ color: 'primary.main' }}>
								Privacy Policy
							</Link>
						</Typography>
					}
				/>

				<Button
					disabled={isSubmitting}
					fullWidth
					size="large"
					sx={{
						py: 1.5,
						mt: 2,
						bgcolor: 'primary.main',
						color: 'primary.contrastText',
						textTransform: 'none',
						fontSize: '1rem',
						'&:hover': {
							bgcolor: 'primary.dark',
						},
					}}
					type="submit"
					variant="contained"
				>
					{isSubmitting ? 'Creating Account...' : 'Create Account'}
				</Button>

				<Typography align="center" sx={{ color: 'text.secondary' }} variant="body2">
					Already have an account?{' '}
					<Link
						href="/login"
						sx={{
							color: 'primary.main',
							textDecoration: 'none',
							'&:hover': {
								textDecoration: 'underline',
							},
						}}
					>
						Sign in
					</Link>
				</Typography>
			</Stack>
		</Box>
	);
};

export { RegisterForm };
