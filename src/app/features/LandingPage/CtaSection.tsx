import { Button, Container, Paper, Stack, Typography, Box } from '@mui/material';

import { useNavigation } from '@hooks/useNavigation';

export const CTASection = () => {
	const { handleNavigation } = useNavigation();

	return (
		<Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
			<Paper
				sx={{
					p: { xs: 4, md: 6 },
					textAlign: 'center',
					borderRadius: '24px',
					background: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
					color: 'white',
					position: 'relative',
					overflow: 'hidden',
					boxShadow: '0 20px 40px -12px rgba(14, 165, 233, 0.3)',
					backdropFilter: 'blur(20px)',
					border: '1px solid rgba(255, 255, 255, 0.1)',
					'&::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 60%)',
					},
					'&::after': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'url(/patterns/dots.svg) center/30px repeat',
						opacity: 0.1,
					},
				}}
			>
				<Box sx={{ position: 'relative', zIndex: 1 }}>
					<Typography fontWeight="bold" gutterBottom variant="h3">
						Ready to Make a Difference?
					</Typography>
					<Typography sx={{ mb: 4, opacity: 0.9, maxWidth: 'md', mx: 'auto' }} variant="h6">
						Join our community today and start creating positive change
					</Typography>
					<Stack
						alignItems="center"
						direction={{ xs: 'column', sm: 'row' }}
						justifyContent="center"
						spacing={2}
					>
						<Button
							onClick={() => handleNavigation('/register')}
							size="large"
							sx={{
								minWidth: 200,
								py: 1.5,
							}}
							variant="contained"
						>
							Get Started Now
						</Button>
						<Button
							onClick={() => handleNavigation('/about')}
							size="large"
							sx={{
								minWidth: 200,
								py: 1.5,
							}}
							variant="outlined"
						>
							Learn More
						</Button>
					</Stack>
				</Box>
			</Paper>
		</Container>
	);
};
