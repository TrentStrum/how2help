import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Box, Card, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { format, isValid } from 'date-fns';

import { EventTabProps } from '../types/event.types';

export const EventDetails = ({ event }: EventTabProps) => {
	const theme = useTheme();

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		if (!isValid(date)) return 'Invalid date';
		return `${format(date, 'PPP')} at ${format(date, 'p')}`;
	};

	const stats = [
		{
			icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
			value: event.attendees?.length || 0,
			label: 'Attendees',
		},
		{
			icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
			value: event.activities?.length || 0,
			label: 'Activities',
		},
	];

	return (
		<Stack spacing={4}>
			{/* Description Card */}
			<Card sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
				<Typography color="primary" gutterBottom variant="h4">
					About this event
				</Typography>
				<Typography
					sx={{
						color: 'text.secondary',
						lineHeight: 1.8,
						mt: 2,
					}}
					variant="body1"
				>
					{event.description}
				</Typography>
			</Card>

			{/* Stats Grid */}
			<Grid container spacing={3}>
				{stats.map((stat, index) => (
					<Grid item key={index} sm={6} xs={12}>
						<Paper
							sx={{
								p: 3,
								textAlign: 'center',
								height: '100%',
								bgcolor: 'background.paper',
								transition: 'transform 0.2s, box-shadow 0.2s',
								'&:hover': {
									transform: 'translateY(-4px)',
									boxShadow: theme.shadows[4],
								},
							}}
						>
							{stat.icon}
							<Typography sx={{ my: 1, fontWeight: 'bold' }} variant="h4">
								{stat.value}
							</Typography>
							<Typography color="text.secondary" variant="subtitle2">
								{stat.label}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>

			{/* Date and Location Cards */}
			<Grid container spacing={3}>
				<Grid item sm={6} xs={12}>
					<Paper
						sx={{
							p: 3,
							height: '100%',
							bgcolor: 'background.paper',
							transition: 'transform 0.2s, box-shadow 0.2s',
							'&:hover': {
								transform: 'translateY(-4px)',
								boxShadow: theme.shadows[4],
							},
						}}
					>
						<Box alignItems="center" display="flex" mb={2}>
							<CalendarTodayIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
							<Box>
								<Typography gutterBottom variant="h6">
									Date and Time
								</Typography>
								<Typography color="text.secondary" variant="body2">
									{formatDate(event.startDate)}
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item sm={6} xs={12}>
					<Paper
						sx={{
							p: 3,
							height: '100%',
							bgcolor: 'background.paper',
							transition: 'transform 0.2s, box-shadow 0.2s',
							'&:hover': {
								transform: 'translateY(-4px)',
								boxShadow: theme.shadows[4],
							},
						}}
					>
						<Box alignItems="center" display="flex" mb={2}>
							<LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
							<Box>
								<Typography gutterBottom variant="h6">
									Location
								</Typography>
								<Typography color="text.secondary" variant="body2">
									{event.location}
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Stack>
	);
};
