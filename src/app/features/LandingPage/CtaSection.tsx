import { Box, Button, Container, Typography } from '@mui/material';

export const CTASection = () => {
	return (
		<Box
			component="section"
			sx={{
				py: 8,
				bgcolor: 'primary.main',
				color: 'primary.contrastText',
			}}
		>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: 'center' }}>
					<Typography variant="h2" sx={{ mb: 3 }}>
						Ready to Get Started?
					</Typography>
					<Typography variant="h6" sx={{ mb: 4, maxWidth: 'md', mx: 'auto' }}>
						Join thousands of satisfied users and transform your workflow today.
					</Typography>
					<Button variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5 }}>
						Start Free Trial
					</Button>
				</Box>
			</Container>
		</Box>
	);
};
