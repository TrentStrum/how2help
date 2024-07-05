import { LockOutlined } from '@mui/icons-material';
import {
	Avatar,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import { Form } from 'react-router-dom';

export default function Login() {
	return (
		<Container
			component='main'
			maxWidth='sm'
			sx={{ marginTop: 8 }}
		>
			<CssBaseline />
			<Paper
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: 5,
				}}
			>
				<Avatar>
					<LockOutlined />
				</Avatar>
				<Typography
					component='h1'
					variant='h3'
				>
					Sign In
				</Typography>
				<Form style={{ width: '100%', marginTop: '1rem' }}>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						name='email'
						autoComplete='email'
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						autoFocus
					/>
					<FormControlLabel
						control={
							<Checkbox
								value='remember'
								color='primary'
							/>
						}
						label='Remember me'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
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
						<Grid
							item
							xs
						>
							<Link
								href='#'
								variant='body2'
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Form>
			</Paper>
		</Container>
	);
}
