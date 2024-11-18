import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';

import LandingMain2 from '@assets/images/LandingMain2.png';

import { Statistics } from './Statistics';

const HeroSection = () => {
	return (
		<Box
			component="section"
			sx={{
				minHeight: '80vh',
				display: 'flex',
				alignItems: 'center',
				bgcolor: 'background.default',
				pt: { xs: 8, md: 0 },
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						alignItems: 'center',
						gap: { xs: 4, md: 8 },
					}}
				>
					{/* Left side content */}
					<Box sx={{ flex: 1 }}>
						<Typography
							sx={{
								fontSize: { xs: '2.5rem', md: '3.5rem' },
								fontWeight: 'bold',
								mb: 2,
							}}
							variant="h1"
						>
							Connect with your community and make a difference.
						</Typography>
						<Typography color="text.secondary" sx={{ mb: 4, maxWidth: 'md' }} variant="h6">
							Find local causes and events to support.
						</Typography>
						<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
							<Link href="/register">
								<Button color="primary" size="large" sx={{ px: 4, py: 1.5 }} variant="contained">
									Get Started
								</Button>
							</Link>
							<Link href="/about">
								<Button size="large" sx={{ px: 4, py: 1.5 }} variant="outlined">
									Learn More
								</Button>
							</Link>
						</Stack>
						<Box sx={{ mt: 2 }}>
							<Statistics />
						</Box>
					</Box>

					{/* Right side image */}
					<Box
						sx={{
							flex: 1,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							alt="Hero Image"
							component="img"
							src={LandingMain2}
							sx={{
								maxWidth: {
									xs: '100%', // Full width on mobile
									sm: '120%', // 20% bigger on tablets
									md: '130%', // 30% bigger on desktop
								},
								height: 'auto',
								transform: {
									xs: 'none',
									sm: 'scale(1.1)', // Slight scale up on tablets
									md: 'scale(1.2)', // Bigger scale up on desktop
								},
								// Optional: add transition for smooth scaling
								transition: 'transform 0.3s ease-in-out',
							}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export { HeroSection };
