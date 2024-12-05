import { Box, Container, Typography } from '@mui/material';

import { LoginForm } from './LoginForm';

const LoginCover = () => {
	return (
		<Container
			maxWidth="sm"
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				py: 3,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					mb: 4,
				}}
			>
				<Box
					alt="Logo"
					component="img"
					src="/path-to-your-logo.svg"
					sx={{
						height: 40,
						mb: 4,
					}}
				/>
				<Typography
					sx={{
						fontWeight: 700,
						mb: 1,
						textAlign: 'center',
					}}
					variant="h4"
				>
					How2Help
				</Typography>
			</Box>

			<Box
				sx={{
					backgroundColor: 'background.paper',
					borderRadius: 1,
					p: { xs: 3, sm: 4 },
					boxShadow: (theme) => theme.shadows[1],
				}}
			>
				<LoginForm />
			</Box>
		</Container>
	);
};

export { LoginCover };
