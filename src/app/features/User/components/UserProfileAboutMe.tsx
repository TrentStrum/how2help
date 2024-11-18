import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Card, CardContent, Typography, Stack, Divider } from '@mui/material';

import { User } from '@api/entities/user';
import { formatDate } from '@lib/utils/formatDate';

interface Props {
	user: User;
}

const UserProfileAboutMe = ({ user }: Props) => {
	return (
		<Card>
			<CardContent>
				<Stack spacing={3}>
					{/* Bio Section */}
					<Box>
						<Typography gutterBottom variant="h6">
							About Me
						</Typography>
						<Typography color="text.secondary" variant="body1">
							{user.firstName || 'No bio provided yet.'}
						</Typography>
					</Box>

					<Divider />

					{/* Additional Info */}
					<Stack spacing={2}>
						{user.state ? (
							<Stack alignItems="center" direction="row" spacing={1}>
								<LocationOnIcon color="action" />
								<Typography color="text.secondary" variant="body2">
									{user.state}
								</Typography>
							</Stack>
						) : null}

						<Stack alignItems="center" direction="row" spacing={1}>
							<CalendarTodayIcon color="action" />
							<Typography color="text.secondary" variant="body2">
								Joined {user.dateOfBirth ? formatDate(user.dateOfBirth) : 'Unknown'}
							</Typography>
						</Stack>
					</Stack>

					{/* Interests/Causes */}
					{user.favoriteCauses && user.favoriteCauses.length > 0 ? (
						<Box>
							<Typography gutterBottom variant="h6">
								Causes I Care About
							</Typography>
							<Stack direction="row" flexWrap="wrap" gap={1}>
								{user.favoriteCauses?.map((cause) => (
									<Box
										key={cause}
										sx={{
											bgcolor: 'primary.light',
											color: 'primary.contrastText',
											px: 2,
											py: 0.5,
											borderRadius: 1,
										}}
									>
										<Typography variant="body2">{cause}</Typography>
									</Box>
								))}
							</Stack>
						</Box>
					) : null}
				</Stack>
			</CardContent>
		</Card>
	);
};

export { UserProfileAboutMe };
