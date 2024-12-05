import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Avatar, Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';

const testimonials = [
	{
		quote:
			'Through this platform, I found amazing organizations and made real connections while helping my community.',
		author: 'Sarah Johnson',
		role: 'Volunteer',
		avatar: '/avatars/avatar1.jpg',
	},
	{
		quote:
			"We've increased our volunteer engagement significantly since joining. The platform makes coordination effortless.",
		author: 'Michael Chen',
		role: 'Organization Leader',
		avatar: '/avatars/avatar2.jpg',
	},
	{
		quote:
			"The impact tracking features help us show our donors and supporters the real difference we're making.",
		author: 'Lisa Rodriguez',
		role: 'Nonprofit Director',
		avatar: '/avatars/avatar3.jpg',
	},
];

export const Testimonials = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: 8, bgcolor: 'background.default' }}>
			<Container maxWidth="lg">
				<Typography align="center" color="primary" gutterBottom sx={{ mb: 6 }} variant="h3">
					Community Stories
				</Typography>
				<Grid container spacing={4}>
					{testimonials.map((testimonial, index) => (
						<Grid item key={index} md={4} xs={12}>
							<Card
								aria-label={`Testimonial from ${testimonial.author}`}
								component="article"
								elevation={0}
								role="article"
								sx={{
									height: '100%',
									p: 4,
									borderRadius: 2,
									transition: 'all 0.3s ease',
									'&:hover': {
										transform: 'translateY(-8px)',
										boxShadow: theme.shadows[4],
									},
								}}
							>
								<FormatQuoteIcon
									sx={{
										fontSize: 40,
										color: 'primary.main',
										opacity: 0.5,
										mb: 2,
									}}
								/>
								<Typography
									component="blockquote"
									paragraph
									sx={{
										fontStyle: 'italic',
										mb: 3,
										minHeight: 80,
									}}
									variant="body1"
								>
									&quot;{testimonial.quote}&quot;
								</Typography>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Avatar src={testimonial.avatar} sx={{ width: 48, height: 48, mr: 2 }} />
									<Box>
										<Typography fontWeight="bold" variant="subtitle1">
											{testimonial.author}
										</Typography>
										<Typography color="text.secondary" variant="body2">
											{testimonial.role}
										</Typography>
									</Box>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
