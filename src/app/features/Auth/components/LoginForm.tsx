import { zodResolver } from '@hookform/resolvers/zod';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import {
	Stack,
	Container,
	Button,
	Divider,
	Typography,
	Grid,
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
		<Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)}>
			<Stack
				alignItems="center"
				justifyContent="center"
				mt={{ xs: 2, sm: 3 }}
				spacing={{ xs: 2, sm: 3 }}
			>
				<Container maxWidth="sm">
					<Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" spacing={1}>
						<Button
							color="secondary"
							fullWidth
							startIcon={<img alt="Google" src={GoogleLogo} style={{ height: 24, width: 24 }} />}
							sx={{ whiteSpace: 'nowrap' }}
							variant="outlined"
						>
							Sign in with Google (COMING SOON)
						</Button>
					</Stack>
				</Container>
				<Divider flexItem>
					<Typography variant="subtitle1">or with email</Typography>
				</Divider>
				<Container maxWidth="sm">
					<Grid container spacing={2}>
						<Grid item xs={12}>
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
								<OutlinedInput
									{...register('email')}
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
						<Grid item xs={12}>
							<FormControl error={!!errors.password} fullWidth>
								<Typography
									component="label"
									fontWeight={500}
									gutterBottom
									htmlFor="password-input"
									variant="h6"
								>
									Password
								</Typography>
								<OutlinedInput
									{...register('password')}
									endAdornment={
										<InputAdornment position="end">
											<Button onClick={handlePasswordVisibility}>
												{showPassword ? (
													<VisibilityOff fontSize="small" />
												) : (
													<Visibility fontSize="small" />
												)}
											</Button>
										</InputAdornment>
									}
									id="password-input"
									placeholder="Write your password"
									type={showPassword ? 'text' : 'password'}
								/>
								<FormHelperText>{errors.password?.message}</FormHelperText>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<Box alignItems="center" display="flex" justifyContent="space-between">
								<FormControlLabel
									control={<Checkbox color="primary" name="terms" />}
									label={<Typography variant="body1">Keep me signed in</Typography>}
								/>
								{/* <Link
									href='#'
									onClick={(e) => e.preventDefault()}
									underline='hover'
								>
									Recover password
								</Link> */}
							</Box>
						</Grid>
						<Grid item xs={12}>
							<Button
								disabled={isSubmitting}
								fullWidth
								size="large"
								type="submit"
								variant="contained"
							>
								{isSubmitting ? 'Logging in...' : 'Login'}
							</Button>
						</Grid>
						{/* {isError ? (
							<Grid item textAlign="center" xs={12}>
								<Typography color="error">
									{(error as AxiosError)?.message || 'Login failed'}
								</Typography>
							</Grid>
						) : null} */}
						<Grid item textAlign="center" xs={12}>
							<Typography color="text.secondary" component="span">
								Not a Member yet?
							</Typography>{' '}
							<Link href="/register" underline="hover" fontWeight={500}>
								Sign up
							</Link>
						</Grid>
					</Grid>
				</Container>
			</Stack>
		</Container>
	);
};

export { LoginForm };
