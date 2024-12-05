import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Chip,
	Divider,
	Grid,
	Paper,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import { useGetActivityById } from '@api/entities/activity';
import { ErrorMessage } from '@app/components/Error/ErrorMessage';
import { LoadingSpinner } from '@app/components/Loading/LoadingSpinner';

import { VolunteerApplicationForm } from './VolunteerApplicationForm';

export const ActivityProfile = () => {
	const theme = useTheme();
	const { activityId } = useParams();
	const { data: activity, isPending, isError } = useGetActivityById(Number(activityId));

	if (activityId === undefined) return <ErrorMessage message="Activity ID is required" />;
	if (isPending) return <LoadingSpinner />;
	if (isError) return <ErrorMessage message="Failed to load activity details" />;

	return (
		<Grid container spacing={3}>
			<Grid item md={8} xs={12}>
				<Card>
					<CardHeader
						avatar={
							<Avatar
								src={activity.avatarImageUrl}
								sx={{
									width: 54,
									height: 54,
								}}
							/>
						}
						subheader={
							<Stack direction="row" mt={1} spacing={2}>
								<Chip
									color="primary"
									icon={<CalendarTodayIcon />}
									label={new Date(activity.postedDate).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
									size="small"
									variant="outlined"
								/>
								<Chip
									icon={<LocationOnIcon />}
									label={activity.location || 'Location TBD'}
									size="small"
									variant="outlined"
								/>
							</Stack>
						}
						title={
							<Typography fontWeight="bold" variant="h4">
								{activity.name}
							</Typography>
						}
					/>
					<CardMedia
						alt={activity.name}
						component="img"
						height="400"
						image={activity.avatarImageUrl}
						sx={{
							objectFit: 'cover',
						}}
					/>
					<CardContent>
						<Box mb={4}>
							<Typography color="primary.main" fontWeight="600" gutterBottom variant="h5">
								About This Opportunity
							</Typography>
							<Typography color="text.secondary" sx={{ whiteSpace: 'pre-line' }} variant="body1">
								{activity.description}
							</Typography>
						</Box>

						<Grid container mb={4} spacing={3}>
							<Grid item sm={4} xs={12}>
								<Paper
									elevation={0}
									sx={{
										p: 2,
										textAlign: 'center',
										backgroundColor: theme.palette.background.default,
									}}
								>
									<AccessTimeIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
									<Typography variant="h6">Duration</Typography>
									<Typography color="text.secondary" variant="body2">
										{activity.duration || '4 hours'}
									</Typography>
								</Paper>
							</Grid>
							<Grid item sm={4} xs={12}>
								<Paper
									elevation={0}
									sx={{
										p: 2,
										textAlign: 'center',
										backgroundColor: theme.palette.background.default,
									}}
								>
									<GroupIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
									<Typography variant="h6">Spots Available</Typography>
									<Typography color="text.secondary" variant="body2">
										{activity.spotsAvailable || 5} positions
									</Typography>
								</Paper>
							</Grid>
							<Grid item sm={4} xs={12}>
								<Paper
									elevation={0}
									sx={{
										p: 2,
										textAlign: 'center',
										backgroundColor: theme.palette.background.default,
									}}
								>
									<CalendarTodayIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
									<Typography variant="h6">Start Date</Typography>
									<Typography color="text.secondary" variant="body2">
										{new Date(activity.startDate || activity.postedDate).toLocaleDateString()}
									</Typography>
								</Paper>
							</Grid>
						</Grid>

						<Box mb={4}>
							<Typography color="primary.main" fontWeight="600" gutterBottom variant="h5">
								Requirements
							</Typography>
							<Typography color="text.secondary" component="div" variant="body1">
								{activity.requirements ? (
									activity.requirements
								) : (
									<ul>
										<li>Must be 18 years or older</li>
										<li>Ability to commit to the full duration</li>
										<li>Good communication skills</li>
										<li>Passionate about helping others</li>
									</ul>
								)}
							</Typography>
						</Box>
					</CardContent>
					<Divider />
					<CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
						<Stack direction="row" spacing={1}>
							<Button size="small" startIcon={<ThumbUpAltTwoToneIcon />} variant="outlined">
								Like
							</Button>
							<Button size="small" startIcon={<ShareTwoToneIcon />} variant="outlined">
								Share
							</Button>
						</Stack>
						<Typography color="text.secondary" variant="body2">
							Posted {new Date(activity.postedDate).toLocaleDateString()}
						</Typography>
					</CardActions>
				</Card>
			</Grid>

			<Grid item md={4} xs={12}>
				<Card sx={{ position: 'sticky', top: 24 }}>
					<CardContent>
						<Typography color="primary.main" fontWeight="600" gutterBottom variant="h5">
							Volunteer Application
						</Typography>
						<VolunteerApplicationForm activityId={activity.activityId} />
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
