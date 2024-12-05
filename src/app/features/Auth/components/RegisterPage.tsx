import { Container, Paper } from '@mui/material';

import { RegisterForm } from './RegisterForm';

const RegisterPage = () => {
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
			<Paper
				elevation={1}
				sx={{
					p: { xs: 3, sm: 4 },
					borderRadius: 1,
				}}
			>
				<RegisterForm />
			</Paper>
		</Container>
	);
};

export { RegisterPage };
