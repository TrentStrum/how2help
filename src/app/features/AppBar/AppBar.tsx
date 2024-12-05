import { DarkMode, LightMode } from '@mui/icons-material';
import {
	AppBar as MuiAppBar,
	Button,
	Container,
	IconButton,
	Stack,
	Toolbar,
	Typography,
	useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { useCustomization } from '@hooks/useCustomization';
import { transitions, componentStyles } from '@app/components/styles';

const Appbar = () => {
	const theme = useTheme();
	const { paletteMode, handleUpdate } = useCustomization();
	const isDark = paletteMode === 'dark';

	const handleThemeToggle = () => {
		handleUpdate({ paletteMode: isDark ? 'light' : 'dark' });
	};

	return (
		<MuiAppBar
			elevation={0}
			position="sticky"
			sx={{
				...componentStyles.appBar,
				transition: transitions.medium,
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
								transition: transitions.quick,
								'&:hover': {
									color: 'primary.dark',
									transform: 'translateY(-1px)',
								},
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
										transition: transitions.quick,
										'&:hover': {
											backgroundColor: 'transparent',
											color: 'primary.main',
											transform: 'translateY(-1px)',
										},
									}}
								>
									{item}
								</Button>
							))}
						</Stack>
					</Stack>

					<Stack direction="row" spacing={2} alignItems="center">
						<IconButton
							onClick={handleThemeToggle}
							sx={{
								color: 'text.primary',
								transition: transitions.quick,
								'&:hover': {
									backgroundColor: 'action.hover',
									transform: 'rotate(180deg)',
								},
							}}
						>
							{isDark ? <LightMode /> : <DarkMode />}
						</IconButton>
						<Button
							variant="outlined"
							component={RouterLink}
							to="/login"
							sx={{
								...componentStyles.button(theme),
								borderWidth: 2,
								'&:hover': {
									borderWidth: 2,
									transform: 'translateY(-1px)',
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
								...componentStyles.button(theme),
								'&:hover': {
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

export { Appbar };