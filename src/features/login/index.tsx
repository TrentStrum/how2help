import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { User } from '../../app/api/entities/user/types/user.types';

type LoginFormsInputs = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const { loginUser } = useAuth();
	const { register, control, handleSubmit } = useForm<User>();

	const handleLogin = (form: LoginFormsInputs) => {
		loginUser(form.email, form.password);
	};

	const handleLogin: SubmitHandler<User> = (e: HTMLAnchorElement, data: User) => {
		e.preventDefault();
		if (input.email !== '' && input.password !== '') {
			auth.loginAction(input);
			return;
		}
		alert('please provide credentials');
	};

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
				<form onSubmit={handleSubmit(handleUserAuthSubmit)}>
					<TextField
						id='email'
						label='Email Address'
						variant='outlined'
						margin='normal'
						required
						fullWidth
						autoComplete='email'
						autoFocus
						placeholder='enter email'
						{...register('email')}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						variant='outlined'
						placeholder='enter password'
						{...register('password')}
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
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
								href='#'
								variant='body2'
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
				<DevTool control={control} />
			</Box>
		</Container>
	);
};

export { LoginForm };
