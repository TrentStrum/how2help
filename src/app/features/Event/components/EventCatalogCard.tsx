import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
	alpha,
	Avatar,
	Badge,
	Box,
	Card,
	IconButton,
	Link,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';

import { Event } from '@api/entities/events';
import { useGetEventAttendees } from '@api/entities/events/hooks/useGetEventAttendees';
import { useGetEventHost } from '@api/entities/events/hooks/useGetEventHost';

type Props = {
	event: Event;
};

const EventCatalogCard = ({ event }: Props) => {
	const theme = useTheme();
	const { data: attendees } = useGetEventAttendees(event.eventId);
	const { data: hostOrg } = useGetEventHost(event.hostId);

	const formattedDate = new Date(event.eventDate).toLocaleDateString('en-US', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});

	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				bgcolor: 'background.paper',
				transition: 'transform 0.2s, box-shadow 0.2s',
				'&:hover': {
					transform: 'translateY(-4px)',
					boxShadow: theme.shadows[4],
				},
			}}
		>
			<Box sx={{ p: 2, display: 'flex', alignItems: 'flex-start' }}>
				<Badge
					badgeContent={attendees?.length || 0}
					color="success"
					sx={{
						'& .MuiBadge-badge': {
							right: 5,
							top: 5,
							border: `2px solid ${theme.palette.background.paper}`,
							padding: '0 4px',
						},
					}}
				>
					<Avatar
						variant="rounded"
						sx={{
							width: 48,
							height: 48,
							bgcolor: alpha(theme.palette.primary.main, 0.1),
							color: theme.palette.primary.main,
						}}
					>
						{event.name.charAt(0)}
					</Avatar>
				</Badge>

				<Box sx={{ ml: 2, flex: 1 }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
						<Link
							href={`/event/${event.eventId}`}
							sx={{
								textDecoration: 'none',
								color: 'text.primary',
								'&:hover': { color: 'primary.main' },
							}}
						>
							<Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
								{event.name}
							</Typography>
						</Link>
						<IconButton size="small">
							<MoreHorizIcon fontSize="small" />
						</IconButton>
					</Box>

					<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
						Hosted by{' '}
						<Link
							href={`/org/${event.hostId}`}
							sx={{
								color: 'primary.main',
								textDecoration: 'none',
								'&:hover': { textDecoration: 'underline' },
							}}
						>
							{hostOrg?.name || 'Loading...'}
						</Link>
					</Typography>
				</Box>
			</Box>

			<Stack spacing={1} sx={{ px: 2, pb: 2 }}>
				<Box>
					<Typography variant="body2" color="text.secondary">
						Event Date
					</Typography>
					<Typography variant="body2">{formattedDate}</Typography>
				</Box>

				<Box>
					<Typography variant="body2" color="text.secondary">
						Location
					</Typography>
					<Typography
						variant="body2"
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						}}
					>
						{event.location}
					</Typography>
				</Box>
			</Stack>

			<Box
				sx={{
					mt: 'auto',
					p: 2,
					pt: 1,
					borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
				}}
			>
				<Link
					href={`/event/${event.eventId}`}
					sx={{
						display: 'block',
						textAlign: 'center',
						py: 1,
						px: 2,
						bgcolor: alpha(theme.palette.primary.main, 0.1),
						color: 'primary.main',
						borderRadius: 1,
						textDecoration: 'none',
						textTransform: 'uppercase',
						fontSize: '0.75rem',
						fontWeight: 600,
						letterSpacing: '0.5px',
						'&:hover': {
							bgcolor: 'primary.main',
							color: 'primary.contrastText',
						},
					}}
				>
					View Event Details
				</Link>
			</Box>
		</Card>
	);
};

export { EventCatalogCard };
