import { BookmarkBorder, CalendarToday, AccessTime, LocationOn } from '@mui/icons-material';
import { Avatar, Box, Button, Card, Chip, IconButton, Typography } from '@mui/material';
import { format } from 'date-fns';

type Props = {
	avatarImageUrl?: string;
	name: string;
	description: string;
	eventDate: string;
	startTime: string;
	location: string;
};

const formatTime = (timeString: string | null | undefined) => {
	if (!timeString) return 'TBD';
	try {
		const date = new Date(timeString);
		return isNaN(date.getTime()) ? 'TBD' : format(date, 'h:mm a');
	} catch {
		return 'TBD';
	}
};

const formatDate = (dateString: string | null | undefined) => {
	if (!dateString) return 'TBD';
	try {
		const date = new Date(dateString);
		return isNaN(date.getTime()) ? 'TBD' : format(date, 'MMM d');
	} catch {
		return 'TBD';
	}
};

const OrgProfileEventCard = ({
	avatarImageUrl,
	name,
	description,
	eventDate,
	startTime,
	location,
}: Props) => {
	return (
		<Card
			elevation={2}
			sx={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				borderRadius: 3,
				transition: 'all 0.3s ease',
				'&:hover': {
					transform: 'translateY(-4px)',
					boxShadow: (theme) => theme.shadows[8],
				},
			}}
		>
			<Box
				sx={{
					height: 80,
					position: 'relative',
					bgcolor: 'primary.light',
					backgroundImage: { avatarImageUrl },
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<IconButton
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						bgcolor: 'rgba(255,255,255,0.9)',
						'&:hover': { bgcolor: 'white' },
					}}
				>
					<BookmarkBorder />
				</IconButton>
				<Box
					sx={{
						position: 'absolute',
						bottom: -20,
						left: 16,
					}}
				>
					<Avatar
						src={avatarImageUrl}
						sx={{
							width: 40,
							height: 40,
							border: '2px solid white',
							boxShadow: 2,
						}}
					>
						{name}
					</Avatar>
				</Box>
			</Box>
			<Box sx={{ p: 2, pt: 3, flexGrow: 1, minHeight: 0 }}>
				<Box>
					<Typography
						sx={{
							fontWeight: 'bold',
							mb: 1,
							fontSize: '0.9rem',
							lineHeight: 1.2,
						}}
						variant="subtitle1"
					>
						{name}
					</Typography>
					<Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
						<Chip
							icon={<CalendarToday sx={{ fontSize: 12 }} />}
							label={formatDate(eventDate)}
							size="small"
							sx={{ height: 24 }}
							variant="outlined"
						/>
						<Chip
							icon={<AccessTime sx={{ fontSize: 12 }} />}
							label={formatTime(startTime)}
							size="small"
							sx={{ height: 24 }}
							variant="outlined"
						/>
					</Box>
					{location ? (
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 0.5,
								color: 'text.secondary',
								mb: 1,
							}}
						>
							<LocationOn sx={{ fontSize: 14 }} />
							<Typography noWrap variant="caption">
								{location}
							</Typography>
						</Box>
					) : null}
				</Box>
				<Typography
					color="text.secondary"
					sx={{
						display: '-webkit-box',
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
						fontSize: '0.8rem',
						lineHeight: 1.4,
						mb: 1,
					}}
					variant="body2"
				>
					{description}
				</Typography>
			</Box>
			<Box sx={{ px: 2, pb: 2, pt: 0 }}>
				<Button
					color="primary"
					fullWidth
					size="small"
					sx={{
						mb: 1,
						borderRadius: 1.5,
						textTransform: 'none',
						fontSize: '0.8rem',
					}}
					variant="contained"
				>
					RSVP Now
				</Button>
				<Button
					fullWidth
					size="small"
					sx={{
						borderRadius: 1.5,
						textTransform: 'none',
						fontSize: '0.8rem',
					}}
					variant="outlined"
				>
					Learn More
				</Button>
			</Box>
		</Card>
	);
};

export { OrgProfileEventCard };
