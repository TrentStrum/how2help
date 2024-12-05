import { Box, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const features = [
	{
		icon: <ConnectWithoutContactIcon sx={{ fontSize: 40 }} />,
		title: 'Connect',
		description: 'Find and connect with organizations that share your values',
	},
	{
		icon: <GroupsIcon sx={{ fontSize: 40 }} />,
		title: 'Collaborate',
		description: 'Join events and activities with other passionate volunteers',
	},
	{
		icon: <VolunteerActivismIcon sx={{ fontSize: 40 }} />,
		title: 'Contribute',
		description: 'Make a real difference in your local community',
	},
	{
		icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
		title: 'Grow',
		description: 'Track your impact and build meaningful relationships',
	},
];

export const Features = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: { xs: 4, md: 6 } }}>
			<Container maxWidth="lg">
				<Typography
					variant="h3"
					align="center"
					color="primary"
					gutterBottom
					sx={{ mb: 6 }}
				>
					How It Works
				</Typography>
				<Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
					{features.map((feature, index) => (
						<Grid item key={index} xs={12} sm={6} md={3}>
							<Paper
								elevation={0}
								sx={{
									p: { xs: 3, sm: 4 },
									height: '100%',
									textAlign: 'center',
									borderRadius: 2,
									transition: 'all 0.3s ease',
									'&:hover': {
										transform: 'translateY(-8px)',
										boxShadow: theme.shadows[4],
									},
								}}
							>
								<Box
									sx={{
										display: 'inline-flex',
										p: 2,
										borderRadius: '50%',
										bgcolor: 'primary.light',
										color: 'primary.main',
										mb: 2,
									}}
								>
									{feature.icon}
								</Box>
								<Typography variant="h5" gutterBottom>
									{feature.title}
								</Typography>
								<Typography color="text.secondary">
									{feature.description}
								</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};
