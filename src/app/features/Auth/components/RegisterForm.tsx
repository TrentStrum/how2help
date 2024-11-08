import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FilledInput,
	FormControl,
	FormControlLabel,
	FormHelperText,
	Grid,
	InputAdornment,
	Link,
	Stack,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { ButtonIcon } from '@app/components/Buttons/ButtonIcon';

const schema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
	repeatPassword: z.string().min(6, 'Please confirm your password'),
});

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
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

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit: SubmitHandler<FormData> = () => {
		toast.success('The form has been successfully saved!');
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box mx={{ xl: 6 }} py={{ xs: 2, sm: 3 }}>
				<Container maxWidth="sm">
					<Typography align="center" gutterBottom variant="h3">
						Create new account
					</Typography>
					<Typography align="center" fontWeight={400} variant="h6">
						Join our platform by creating a new account for exclusive access
					</Typography>
				</Container>
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
								startIcon={
									<img
										alt="Google"
										src="/placeholders/logo/google-icon.svg"
										style={{ height: 24, width: 24 }}
									/>
								}
								sx={{
									whiteSpace: 'nowrap',
								}}
								variant="outlined"
							>
								Continue with Google
							</Button>
							<Button
								color="secondary"
								fullWidth
								startIcon={
									<img
										alt="Google"
										src="/placeholders/logo/auth0.svg"
										style={{ height: 24, width: 24 }}
									/>
								}
								sx={{
									whiteSpace: 'nowrap',
								}}
								variant="outlined"
							>
								Continue with Auth0
							</Button>
						</Stack>
					</Container>
					<Divider flexItem>
						<Typography variant="subtitle1">or register with email</Typography>
					</Divider>
					<Container maxWidth="sm">
						<Grid container spacing={2}>
							<Grid xs={12}>
								<FormControl fullWidth size="small">
									<Typography
										component="label"
										fontWeight={500}
										gutterBottom
										htmlFor="firstname-input"
										variant="h6"
									>
										Full name
									</Typography>
									<Grid container spacing={{ xs: 2, md: 3 }}>
										<Grid sm={6} xs={12}>
											<FilledInput
												error={!!errors.firstName}
												hiddenLabel
												{...register('firstName')}
												fullWidth
												id="firstname-input"
												placeholder="First name"
												size="small"
											/>
											<FormHelperText error={!!errors.firstName}>
												{errors.firstName?.message}
											</FormHelperText>
										</Grid>
										<Grid sm={6} xs={12}>
											<FilledInput
												error={!!errors.lastName}
												hiddenLabel
												{...register('lastName')}
												fullWidth
												id="lastname-input"
												placeholder="Last name"
												size="small"
											/>
											<FormHelperText error={!!errors.lastName}>
												{errors.lastName?.message}
											</FormHelperText>
										</Grid>
									</Grid>
								</FormControl>
							</Grid>
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
										size="small"
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
									<FilledInput
										{...register('password')}
										endAdornment={
											<InputAdornment position="end">
												<ButtonIcon
													color="secondary"
													onClick={handlePasswordVisibility}
													size="small"
													sx={{ mr: -0.8 }}
													variant="outlined"
												>
													{showPassword ? (
														<VisibilityOff fontSize="inherit" />
													) : (
														<Visibility fontSize="inherit" />
													)}
												</ButtonIcon>
											</InputAdornment>
										}
										hiddenLabel
										id="password-input"
										placeholder="Write your password"
										size="small"
										type={showPassword ? 'text' : 'password'}
									/>
									<FormHelperText>{errors.password?.message}</FormHelperText>
								</FormControl>
							</Grid>
							<Grid xs={12}>
								<FormControl error={!!errors.repeatPassword} fullWidth>
									<Typography
										component="label"
										fontWeight={500}
										gutterBottom
										htmlFor="repeat-password-input"
										variant="h6"
									>
										Repeat Password
									</Typography>
									<FilledInput
										{...register('repeatPassword', {
											validate: (value) => value === password || 'The passwords do not match',
										})}
										hiddenLabel
										id="repeat-password-input"
										placeholder="Repeat your password"
										size="small"
										type={showPassword ? 'text' : 'password'}
									/>
									<FormHelperText>{errors.repeatPassword?.message}</FormHelperText>
								</FormControl>
							</Grid>
							<Grid xs={12}>
								<Box alignItems="center" display="flex" justifyContent="space-between">
									<FormControlLabel
										control={<Checkbox color="primary" name="terms" />}
										label={<Typography variant="body1">Keep me signed in</Typography>}
									/>
									<Link href="" onClick={(e) => e.preventDefault()} underline="hover">
										Recover password
									</Link>
								</Box>
							</Grid>
							<Grid xs={12}>
								<Button fullWidth size="large" type="submit" variant="contained">
									Sign in
								</Button>
							</Grid>
							<Grid textAlign="center" xs={12}>
								<Typography color="text.secondary" component="span">
									Already a Member?
								</Typography>{' '}
								<Link
									fontWeight={500}
									href=""
									onClick={(e) => e.preventDefault()}
									underline="hover"
								>
									Sign in here
								</Link>
							</Grid>
						</Grid>
					</Container>
				</Stack>
			</Box>
		</form>
	);
};

export { RegisterForm };
