import { Box, Container, Grid, Paper, Typography } from '@mui/material';

interface FeatureItem {
	title: string;
	description: string;
	// icon: ReactNode;
}

export const Features = () => {
	const features: FeatureItem[] = [
		{
			title: 'Feature 1',
			description: 'Description of your first main feature',
		},
		{
			title: 'Feature 2',
			description: 'Description of your second main feature',
		},
		{
			title: 'Feature 3',
			description: 'Description of your third main feature',
		},
	];

	return (
		<Box component="section" sx={{ py: 8 }}>
			<Container maxWidth="lg">
				<Typography align="center" sx={{ mb: 6 }} variant="h2">
					Why Choose Our App
				</Typography>
				<Grid container spacing={4}>
					{features.map((feature, index) => (
						<Grid item key={index} md={4} xs={12}>
							<Paper elevation={2} sx={{ p: 3, height: '100%' }}>
								<Box sx={{ mb: 2 }}>{feature.icon}</Box>
								<Typography sx={{ mb: 1 }} variant="h6">
									{feature.title}
								</Typography>
								<Typography color="text.secondary">{feature.description}</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
