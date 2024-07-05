import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Bounce, toast } from 'react-toastify';
import { useForm } from '@tanstack/react-form';
import { TextField, FormLabel } from '@mui/material';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'rememberCheck' } };

const SignIn = () => {
	const [checked, setChecked] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
	};

	const notify = () =>
		toast.error('Sign in not available yet', {
			position: 'bottom-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
			transition: Bounce,
		});

	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
			rememberCheck: Boolean,
		},
		onSubmit: ({ value }) => {
			console.log(value);
		},
	});

	return (
		<Container
			component='main'
			maxWidth='xs'
		>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography
					component='h1'
					variant='h5'
				>
					Sign in
				</Typography>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						form.handleSubmit();
					}}
				>
					<form.Field
						name='email'
						children={({ state, handleChange, handleBlur }) => {
							return (
								<TextField
									id='email'
									label='Email Address'
									variant='outlined'
									margin='normal'
									required
									fullWidth
									name='email'
									autoComplete='email'
									autoFocus
									defaultValue={state.value}
									onChange={(e) => handleChange(e.target.value)}
									onBlur={handleBlur}
									placeholder='enter email'
								/>
							);
						}}
					/>
					<form.Field
						name='password'
						children={({ state, handleChange, handleBlur }) => {
							return (
								<TextField
									margin='normal'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
									variant='outlined'
									defaultValue={state.value}
									onChange={(e) => handleChange(e.target.value)}
									onBlur={handleBlur}
									placeholder='enter password'
								/>
							);
						}}
					/>
					<form.Field
						name='rememberCheck'
						children={({ handleBlur }) => {
							return (
								<>
									<Box sx={{ display: 'flex' }}>
										<Checkbox
											{...label}
											name='remember'
											id='remember'
											checked={checked}
											onChange={(e) => handleCheckChange(e)}
											onBlur={handleBlur}
										/>
										<FormLabel sx={{ alignContent: 'center' }}>
											<Typography variant='body2'>Remember me?</Typography>
										</FormLabel>
									</Box>
								</>
							);
						}}
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
						onClick={notify}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid
							item
							xs
						>
							<Link
								href='#'
								variant='body2'
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								href='#' //to='/register'style={{textDecoration: 'none'}}
								variant='body2'
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Container>
	);
};

export { SignIn };
