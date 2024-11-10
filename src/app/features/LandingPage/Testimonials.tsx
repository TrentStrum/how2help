import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';

interface TestimonialItem {
	content: string;
	author: string;
	role: string;
	avatar: string;
}

export const Testimonials = () => {
	const testimonials: TestimonialItem[] = [
		{
			content: 'This app has transformed how we work...',
			author: 'Jane Doe',
			role: 'CEO at Company',
			avatar: '/path/to/avatar.jpg',
		},
		// Add more testimonials...
	];

	return (
		<Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
			<Container maxWidth="lg">
				<Typography variant="h2" align="center" sx={{ mb: 6 }}>
					What Our Users Say
				</Typography>
				<Grid container spacing={4}>
					{testimonials.map((testimonial, index) => (
						<Grid item xs={12} md={6} key={index}>
							<Paper elevation={2} sx={{ p: 3 }}>
								<Typography color="text.secondary" sx={{ mb: 3 }}>
									"{testimonial.content}"
								</Typography>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Avatar src={testimonial.avatar} alt={testimonial.author} sx={{ mr: 2 }} />
									<Box>
										<Typography variant="subtitle1">{testimonial.author}</Typography>
										<Typography variant="body2" color="text.secondary">
											{testimonial.role}
										</Typography>
									</Box>
								</Box>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
