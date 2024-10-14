import { Box, Container, Grid, Paper, Typography } from '@mui/material';

import { LoginBanner } from './LoginBanner';
import { LoginForm } from './LoginForm';

const LoginCover = () => {
	return (
		<Grid container>
			<LoginBanner />
			<Grid
				component={Paper}
				elevation={6}
				item
				md={6}
				sm={9}
				square
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				xs={12}
			>
				<Box mx={{ xl: 6 }} py={{ xs: 2, sm: 3 }}>
					<Container maxWidth="sm">
						<Typography align="center" gutterBottom variant="h3">
							Sign in
						</Typography>
						<Typography align="center" fontWeight={400} variant="h6">
							Access your account and continue your journey
						</Typography>
					</Container>
					<LoginForm />
				</Box>
			</Grid>
		</Grid>
	);
};

export { LoginCover };
