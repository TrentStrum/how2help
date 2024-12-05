import { CalendarToday, LocationOn } from '@mui/icons-material';
import { Box, Button, Card, Chip, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RsvpModal } from '../../../components/Modals/RsvpModal';

type Props = {
	avatarImageUrl?: string;
	name: string;
	eventDate: string;
	startTime: string;
	location: string;
	eventId: string;
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
	eventDate,
	startTime,
	location,
	eventId,
}: Props) => {
	const navigate = useNavigate();
	const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);

	const handleRsvpClick = () => {
		setIsRsvpModalOpen(true);
	};

	const handleRsvpClose = () => {
		setIsRsvpModalOpen(false);
	};

	const handleLearnMore = () => {
		navigate(`/event/${eventId}`);
	};

	return (
		<>
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
						height: 50,
						position: 'relative',
						bgcolor: 'primary.light',
						backgroundImage: { avatarImageUrl },
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					{/* <IconButton
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							bgcolor: 'rgba(255,255,255,0.9)',
							'&:hover': { bgcolor: 'white' },
						}}
					>
						<BookmarkBorder />
					</IconButton> */}
					{/* <Avatar
						src={avatarImageUrl}
						sx={{
							position: 'absolute',
							bottom: '-24px',
							left: 16,
							width: 48,
							height: 48,
							border: '3px solid white',
							boxShadow: 2,
						}}
					>
						{name.charAt(0)}
					</Avatar> */}
				</Box>
				<Box sx={{ p: 3, pt: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '1rem',
							lineHeight: 1.3,
						}}
						variant="h6"
					>
						{name}
					</Typography>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
						<Chip
							icon={<CalendarToday sx={{ fontSize: 16 }} />}
							label={formatDate(eventDate) + ' - ' + formatTime(startTime)}
							size="small"
							sx={{
								height: 28,
								'& .MuiChip-label': {
									px: 1,
									fontSize: '0.85rem',
								},
							}}
							variant="outlined"
						/>
					</Box>
					{location ? (
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 1,
								color: 'text.secondary',
							}}
						>
							<LocationOn sx={{ fontSize: 16 }} />
							<Typography sx={{ fontSize: '0.9rem' }}>{location}</Typography>
						</Box>
					) : null}
				</Box>
				<Box sx={{ p: 3, pt: 0 }}>
					<Button
						color="primary"
						fullWidth
						onClick={handleRsvpClick}
						size="medium"
						sx={{
							mb: 1.5,
							borderRadius: 2,
							textTransform: 'none',
							fontSize: '0.9rem',
							py: 1,
						}}
						variant="contained"
					>
						RSVP Now
					</Button>
					<Button
						fullWidth
						onClick={handleLearnMore}
						size="medium"
						sx={{
							borderRadius: 2,
							textTransform: 'none',
							fontSize: '0.9rem',
							py: 1,
						}}
						variant="outlined"
					>
						Learn More
					</Button>
				</Box>
			</Card>

			<RsvpModal
				eventId={eventId}
				eventName={name}
				onClose={handleRsvpClose}
				open={isRsvpModalOpen}
			/>
		</>
	);
};

export { OrgProfileEventCard };
