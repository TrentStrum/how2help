import { zodResolver } from '@hookform/resolvers/zod';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	Stack,
	Button,
	Typography,
	FormControl,
	OutlinedInput,
	InputAdornment,
	FormHelperText,
	Box,
	FormControlLabel,
	Checkbox,
	Link,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { apiClient } from '@api/utils/apiClient';
import { useAuth } from '@app/context/AuthContext';
import GoogleLogo from '@assets/placeholders/logo/google-icon.svg';

export interface LoginInput {
	email: string;
	password: string;
}

const loginSchema = z.object({
	email: z.string().min(1, 'Email is required'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
	const navigate = useNavigate();
	const { login } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});
	const [showPassword, setShowPassword] = useState(false);

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = async (data: LoginFormData) => {
		try {
			const response = await apiClient.post<
				LoginInput,
				{
					data: {
						userId: number;
						email: string;
						username: string;
						token: string;
						firstName: string;
						lastName: string;
						type: string;
					};
				}
			>('/auth/login', data);

			if (!response.data) {
				console.error('Login response missing data:', response);
				return;
			}

			const { token, ...user } = response.data;
			login(token, { ...user, password: '' });
			navigate(`/user/${user.userId}`);
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				<FormControl error={!!errors.email}>
					<Typography
						component="label"
						sx={{
							mb: 1,
							color: 'text.primary',
							fontSize: '0.875rem',
						}}
					>
						Email
					</Typography>
					<OutlinedInput
						{...register('email')}
						fullWidth
						placeholder="Enter your email"
						sx={{
							bgcolor: 'background.paper',
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: 'divider',
							},
						}}
					/>
					<FormHelperText>{errors.email?.message}</FormHelperText>
				</FormControl>

				<FormControl error={!!errors.password}>
					<Typography
						component="label"
						sx={{
							mb: 1,
							color: 'text.primary',
							fontSize: '0.875rem',
						}}
					>
						Password
					</Typography>
					<OutlinedInput
						{...register('password')}
						endAdornment={
							<InputAdornment position="end">
								<Button onClick={handlePasswordVisibility} sx={{ minWidth: 'auto' }}>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</Button>
							</InputAdornment>
						}
						fullWidth
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

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<FormControlLabel
						control={<Checkbox size="small" />}
						label="Remember me"
						sx={{ '& .MuiTypography-root': { fontSize: '0.875rem' } }}
					/>
					<Link
						href="/forgot-password"
						sx={{
							fontSize: '0.875rem',
							textDecoration: 'none',
							color: 'primary.main',
							'&:hover': { textDecoration: 'underline' },
						}}
					>
						Forgot password?
					</Link>
				</Box>

				<Button
					disabled={isSubmitting}
					fullWidth
					size="large"
					sx={{
						py: 1.5,
						mt: 2,
						bgcolor: 'primary.main',
						color: 'primary.contrastText',
					}}
					type="submit"
					variant="contained"
				>
					{isSubmitting ? 'Signing in...' : 'Sign in'}
				</Button>

				<Button
					fullWidth
					startIcon={<img alt="Google" src={GoogleLogo} width={20} />}
					sx={{
						py: 1.5,
						color: 'text.primary',
						borderColor: 'divider',
					}}
					variant="outlined"
				>
					Sign in with Google
				</Button>

				<Typography
					align="center"
					sx={{
						color: 'text.secondary',
						fontSize: '0.875rem',
					}}
				>
					Don&apos;t have an account?{' '}
					<Link
						href="/register"
						sx={{
							color: 'primary.main',
							textDecoration: 'none',
							fontWeight: 500,
							'&:hover': { textDecoration: 'underline' },
						}}
					>
						Sign up
					</Link>
				</Typography>
			</Stack>
		</Box>
	);
};

export { LoginForm };
