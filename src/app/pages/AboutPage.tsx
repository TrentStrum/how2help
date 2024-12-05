import CampaignIcon from '@mui/icons-material/Campaign';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import {
	Container,
	Typography,
	Box,
	Grid,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

const AboutPage = () => {
	return (
		<Box className="about-page" sx={{ backgroundColor: 'background.default', py: 4 }}>
			<Container maxWidth="lg">
				<Box my={4} textAlign="center">
					<Typography color="primary" component="h1" gutterBottom variant="h2">
						About NonprofitConnect
					</Typography>

					<Typography color="text.secondary" component="h2" gutterBottom variant="h5">
						Empowering Nonprofits Through Social Networking
					</Typography>
				</Box>

				<Box my={4}>
					<Typography align="center" paragraph variant="body1">
						NonprofitConnect is a social networking platform designed specifically for nonprofit
						organizations and their supporters. Our mission is to create a vibrant ecosystem where
						nonprofits can collaborate, share resources, and amplify their impact on society.
					</Typography>
				</Box>

				<Grid container spacing={4}>
					<Grid item md={6} xs={12}>
						<Card sx={{ height: '100%' }}>
							<CardContent>
								<Typography color="primary" component="h3" gutterBottom variant="h5">
									Our Purpose
								</Typography>
								<Typography paragraph variant="body1">
									We believe in the power of connection and collaboration to drive positive change.
									NonprofitConnect provides a space for organizations to:
								</Typography>
								<List>
									<ListItem>
										<ListItemIcon>
											<GroupIcon color="primary" />
										</ListItemIcon>
										<ListItemText primary="Network with like-minded organizations" />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<VolunteerActivismIcon color="primary" />
										</ListItemIcon>
										<ListItemText primary="Recruit volunteers and supporters" />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<CampaignIcon color="primary" />
										</ListItemIcon>
										<ListItemText primary="Share best practices and resources" />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<EmojiEventsIcon color="primary" />
										</ListItemIcon>
										<ListItemText primary="Celebrate successes and milestones" />
									</ListItem>
								</List>
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={6} xs={12}>
						<Card sx={{ height: '100%' }}>
							<CardContent>
								<Typography color="primary" component="h3" gutterBottom variant="h5">
									Key Features
								</Typography>
								<List>
									<ListItem>
										<ListItemText
											primary="Organization Profiles"
											secondary="Showcase your mission, achievements, and ongoing projects."
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary="Project Collaboration"
											secondary="Find partners and volunteers for your initiatives."
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary="Resource Sharing"
											secondary="Access and share valuable resources, from grant opportunities to event planning tips."
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary="Discussion Forums"
											secondary="Engage in meaningful conversations about nonprofit challenges and solutions."
										/>
									</ListItem>
									<ListItem>
										<ListItemText
											primary="Event Calendar"
											secondary="Promote and discover nonprofit events in your community."
										/>
									</ListItem>
								</List>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Box my={4} textAlign="center">
					<Typography color="primary" component="h3" gutterBottom variant="h5">
						Join Us in Making a Difference
					</Typography>
					<Typography paragraph variant="body1">
						Whether you&apos;re a small local charity or a large international NGO, NonprofitConnect
						is here to support your mission. Together, we can create a stronger, more connected
						nonprofit community.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export { AboutPage };
