import { SubmitHandler, useForm } from 'react-hook-form';
import { schema } from '../../lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
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
} from '@mui/material';
// import { Link } from 'react-router-dom';
import { useLogin } from '../../app/api/entities/user/hooks/usePostUserAuth';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import GoogleLogo from '../../assets/placeholders/logo/google-icon.svg';
import AmplifyLogo from '../../assets/placeholders/logo/amplify.svg';
import { AxiosError } from 'axios';

export interface LoginInput {
	email: string;
	password: string;
}

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInput>({
		resolver: zodResolver(schema),
	});

	const { mutate: login, isPending, isError, error } = useLogin();

	const onSubmit: SubmitHandler<LoginInput> = (data) => {
		login(data);
	};
	

	return (
		<Container
			maxWidth='sm'
			component='form'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Stack
				mt={{ xs: 2, sm: 3 }}
				justifyContent='center'
				alignItems='center'
				spacing={{ xs: 2, sm: 3 }}
			>
				<Container maxWidth='sm'>
					<Stack
						justifyContent='center'
						direction={{ xs: 'column', sm: 'row' }}
						spacing={1}
					>
						<Button
							fullWidth
							sx={{ whiteSpace: 'nowrap' }}
							variant='outlined'
							color='secondary'
							startIcon={
								<img
									style={{ height: 24, width: 24 }}
									alt='Google'
									src={GoogleLogo}
								/>
							}
						>
							Sign in with Google
						</Button>
						<Button
							fullWidth
							sx={{ whiteSpace: 'nowrap' }}
							variant='outlined'
							color='secondary'
							startIcon={
								<img
									style={{ height: 24, width: 24 }}
									alt='Amplify'
									src={AmplifyLogo}
								/>
							}
						>
							Sign in with Amplify
						</Button>
					</Stack>
				</Container>
				<Divider flexItem>
					<Typography variant='subtitle1'>or with email</Typography>
				</Divider>
				<Container maxWidth='sm'>
					<Grid
						container
						spacing={2}
					>
						<Grid
							item
							xs={12}
						>
							<FormControl
								fullWidth
								error={!!errors.email}
							>
								<Typography
									variant='h6'
									gutterBottom
									component='label'
									htmlFor='email-input'
									fontWeight={500}
								>
									Email
								</Typography>
								<OutlinedInput
									{...register('email')}
									type='email'
									id='email-input'
									placeholder='Write your email'
									startAdornment={
										<InputAdornment position='start'>
											<MailOutlineRoundedIcon fontSize='small' />
										</InputAdornment>
									}
								/>
								<FormHelperText>{errors.email?.message}</FormHelperText>
							</FormControl>
						</Grid>
						<Grid
							item
							xs={12}
						>
							<FormControl
								fullWidth
								error={!!errors.password}
							>
								<Typography
									variant='h6'
									gutterBottom
									component='label'
									htmlFor='password-input'
									fontWeight={500}
								>
									Password
								</Typography>
								<OutlinedInput
									{...register('password')}
									type={showPassword ? 'text' : 'password'}
									id='password-input'
									placeholder='Write your password'
									endAdornment={
										<InputAdornment position='end'>
											<Button onClick={handlePasswordVisibility}>
												{showPassword ? (
													<VisibilityOff fontSize='small' />
												) : (
													<Visibility fontSize='small' />
												)}
											</Button>
										</InputAdornment>
									}
								/>
								<FormHelperText>{errors.password?.message}</FormHelperText>
							</FormControl>
						</Grid>
						<Grid
							item
							xs={12}
						>
							<Box
								alignItems='center'
								display='flex'
								justifyContent='space-between'
							>
								<FormControlLabel
									control={
										<Checkbox
											name='terms'
											color='primary'
										/>
									}
									label={
										<Typography variant='body1'>Keep me signed in</Typography>
									}
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
						<Grid
							item
							xs={12}
						>
							<Button
								variant='contained'
								type='submit'
								size='large'
								fullWidth
								disabled={isPending}
							>
								{isPending ? 'Signing in...' : 'Sign in'}
							</Button>
						</Grid>
						{isError && (
							<Grid
							item
								xs={12}
								textAlign='center'
							>
								<Typography color='error'>
									{(error as AxiosError)?.message || 'Login failed'}
								</Typography>
							</Grid>
						)}
						<Grid
							item
							xs={12}
							textAlign='center'
						>
							<Typography
								component='span'
								color='text.secondary'
							>
								Not a Member yet?
							</Typography>{' '}
							{/* <Link
								href='#'
								onClick={(e) => e.preventDefault()}
								underline='hover'
								fontWeight={500}
							>
								Sign up
							</Link> */}
						</Grid>
					</Grid>
				</Container>
			</Stack>
		</Container>
	);
};

export { LoginForm };
