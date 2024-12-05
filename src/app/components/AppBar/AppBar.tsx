import { AppBar as MuiAppBar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AppBar = () => {
	return (
		<MuiAppBar
			elevation={0}
			position="sticky"
			sx={{
				backgroundColor: 'rgba(255, 255, 255, 0.98)',
				borderBottom: '1px solid',
				borderColor: 'divider',
				backdropFilter: 'blur(6px)',
				borderRadius: 0,
			}}
		>
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{
						minHeight: 64,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Stack direction="row" spacing={3} alignItems="center">
						<Typography
							variant="h6"
							component={RouterLink}
							to="/"
							sx={{
								textDecoration: 'none',
								color: 'primary.main',
								fontWeight: 700,
								fontSize: '1.5rem',
							}}
						>
							How2Help
						</Typography>

						<Stack direction="row" spacing={1}>
							{['ORGANIZATIONS', 'CAUSES', 'EVENTS', 'ACTIVITY'].map((item) => (
								<Button
									key={item}
									component={RouterLink}
									to={`/${item.toLowerCase()}`}
									sx={{
										color: 'text.secondary',
										fontWeight: 500,
										fontSize: '0.95rem',
										'&:hover': {
											backgroundColor: 'transparent',
											color: 'primary.main',
										},
									}}
								>
									{item}
								</Button>
							))}
						</Stack>
					</Stack>

					<Stack direction="row" spacing={2} alignItems="center">
						<Button
							variant="outlined"
							component={RouterLink}
							to="/login"
							sx={{
								borderWidth: 2,
								borderRadius: 0,
								'&:hover': {
									borderWidth: 2,
								},
							}}
						>
							Login
						</Button>
						<Button
							variant="contained"
							component={RouterLink}
							to="/register"
							sx={{
								boxShadow: 'none',
								borderRadius: 0,
								'&:hover': {
									boxShadow: 'none',
									transform: 'translateY(-1px)',
								},
							}}
						>
							Sign Up
						</Button>
					</Stack>
				</Toolbar>
			</Container>
		</MuiAppBar>
	);
};
