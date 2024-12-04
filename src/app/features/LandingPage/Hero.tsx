import { CheckCircle } from '@mui/icons-material';
import {
	Avatar,
	AvatarGroup,
	Box,
	Button,
	Container,
	Grid,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

import { useNavigation } from '@hooks/useNavigation';

export const HeroSection = () => {
	const theme = useTheme();
	const { handleNavigation } = useNavigation();
	const isDark = theme.palette.mode === 'dark';

	return (
		<Box
			sx={{
				background: isDark
					? `linear-gradient(to bottom, ${alpha(theme.palette.background.default, 0.9)}, ${theme.palette.background.default})`
					: '#FFFFFF',
				minHeight: '90vh',
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
				overflow: 'hidden',
				borderBottom: '1px solid',
				borderColor: 'divider',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: isDark
						? 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.025) 0%, transparent 40%)'
						: 'none',
					pointerEvents: 'none',
				},
			}}
		>
			<Container maxWidth="lg">
				<Grid alignItems="center" container spacing={8}>
					<Grid item md={6} xs={12}>
						<Stack spacing={4}>
							<Box>
								<Typography
									sx={{
										fontSize: { xs: '2.5rem', md: '3.75rem' },
										fontWeight: 700,
										color: 'text.primary',
										lineHeight: 1.2,
										mb: 2,
									}}
									variant="h1"
								>
									Connect & Make an{' '}
									<Box
										component="span"
										sx={{
											color: 'primary.main',
											position: 'relative',
											'&::after': {
												content: '""',
												position: 'absolute',
												bottom: '8%',
												left: 0,
												width: '100%',
												height: '8px',
												background: (theme) =>
													alpha(theme.palette.primary.main, isDark ? 0.2 : 0.1),
												borderRadius: '4px',
												zIndex: -1,
											},
										}}
									>
										Impact
									</Box>
								</Typography>
								<Typography
									sx={{
										color: 'text.secondary',
										fontWeight: 400,
										lineHeight: 1.6,
										maxWidth: '90%',
									}}
									variant="h5"
								>
									Join a community of volunteers and organizations working together to create
									positive change
								</Typography>
							</Box>

							<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
								<Button
									onClick={() => handleNavigation('/register')}
									size="large"
									sx={{
										px: 4,
										py: 1.5,
										fontSize: '1.1rem',
										fontWeight: 600,
										backgroundColor: isDark ? 'primary.main' : 'white',
										color: isDark ? 'white' : 'primary.main',
										boxShadow: isDark
											? `0 0 20px ${alpha(theme.palette.primary.main, 0.4)}`
											: '0 8px 16px -4px rgba(14, 165, 233, 0.2)',
										'&:hover': {
											backgroundColor: isDark ? 'primary.dark' : 'white',
											transform: 'translateY(-2px)',
											boxShadow: isDark
												? `0 0 30px ${alpha(theme.palette.primary.main, 0.6)}`
												: '0 12px 20px -4px rgba(14, 165, 233, 0.3)',
										},
									}}
									variant={isDark ? 'contained' : 'outlined'}
								>
									Get Started
								</Button>
								<Button
									onClick={() => handleNavigation('/events')}
									size="large"
									sx={{
										px: 4,
										py: 1.5,
										fontSize: '1.1rem',
										fontWeight: 600,
										borderColor: isDark ? 'primary.main' : 'divider',
										color: 'text.primary',
										'&:hover': {
											borderColor: 'primary.main',
											backgroundColor: alpha(theme.palette.primary.main, 0.05),
										},
									}}
									variant="outlined"
								>
									Browse Events
								</Button>
							</Stack>

							<Box sx={{ mt: 4 }}>
								<Stack alignItems="center" direction="row" spacing={4}>
									<Stack alignItems="center" direction="row" spacing={1}>
										<AvatarGroup max={4}>
											{[1, 2, 3, 4, 5].map((i) => (
												<Avatar
													key={i}
													src={`/avatars/avatar${i}.jpg`}
													sx={{ width: 32, height: 32 }}
												/>
											))}
										</AvatarGroup>
										<Typography color="text.secondary">Join 1,000+ volunteers</Typography>
									</Stack>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											gap: 1,
											color: 'success.main',
										}}
									>
										<CheckCircle fontSize="small" />
										<Typography>Trusted Platform</Typography>
									</Box>
								</Stack>
							</Box>
						</Stack>
					</Grid>

					<Grid item md={6} xs={12}>
						<Box
							sx={{
								position: 'relative',
								'&::before': {
									content: '""',
									position: 'absolute',
									top: '10%',
									right: '10%',
									width: '80%',
									height: '80%',
									background: (theme) => alpha(theme.palette.primary.main, isDark ? 0.1 : 0.05),
									borderRadius: '20px',
									transform: 'rotate(-6deg)',
								},
							}}
						>
							<img
								alt="Volunteers working together"
								src="/images/hero-image.jpg"
								style={{
									width: '100%',
									height: 'auto',
									borderRadius: '20px',
									position: 'relative',
									boxShadow: isDark
										? '0 20px 40px -12px rgba(0,0,0,0.3)'
										: '0 20px 40px -12px rgba(0,0,0,0.1)',
									filter: isDark ? 'brightness(0.8)' : 'none',
								}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
