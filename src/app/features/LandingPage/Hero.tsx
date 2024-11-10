import { Box, Button, Container, Stack, Typography } from '@mui/material';
// import heroImage from '@app/assets/hero-image.png'; // Add your hero image

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
							variant="h1"
							sx={{
								fontSize: { xs: '2.5rem', md: '3.5rem' },
								fontWeight: 'bold',
								mb: 2,
							}}
						>
							Transform Your Workflow with Our App
						</Typography>
						<Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 'md' }}>
							Streamline your processes, boost productivity, and achieve more with our powerful
							solution.
						</Typography>
						<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
							<Button variant="contained" size="large" color="primary" sx={{ px: 4, py: 1.5 }}>
								Get Started
							</Button>
							<Button variant="outlined" size="large" sx={{ px: 4, py: 1.5 }}>
								Learn More
							</Button>
						</Stack>
						<Stack
							direction="row"
							spacing={3}
							sx={{
								alignItems: 'center',
								color: 'text.secondary',
							}}
						>
							<Typography variant="body2">★★★★★ 5.0</Typography>
							<Typography variant="body2">1000+ Happy Users</Typography>
							<Typography variant="body2">24/7 Support</Typography>
						</Stack>
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
							component="img"
							// src={heroImage}
							alt="Hero Image"
							sx={{
								maxWidth: '100%',
								height: 'auto',
								borderRadius: 2,
								boxShadow: 3,
							}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export { HeroSection };
