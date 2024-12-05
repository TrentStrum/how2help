import { Card, CardContent, Typography, Stack, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { Activity } from '@api/entities/activity';
import { LinkButton } from '@app/components/Buttons/LinkButton';
import { CardImage } from '@components/Cards/CardImage';

interface IActivityCatalogCardProps {
	activity: Activity;
}

export const ActivityCatalogCard = ({ activity }: IActivityCatalogCardProps) => {
	if (!activity?.activityId || !activity?.name) {
		return null;
	}

	return (
		<Card
			sx={{
				maxWidth: 345,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				borderRadius: 3,
				border: '1px solid',
				borderColor: 'divider',
				backgroundColor: 'background.paper',
				boxShadow: (theme) => `0 8px 24px ${theme.palette.action.hover}`,
				transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				'&:hover': {
					transform: 'translateY(-8px)',
					boxShadow: (theme) => `0 12px 32px ${theme.palette.action.hover}`,
				},
			}}
		>
			<Link
				aria-label={`View details for ${activity.name}`}
				to={`/activity/${activity.activityId}`}
				style={{ textDecoration: 'none' }}
			>
				<CardImage
					avatarImageUrl={activity.avatarImageUrl}
					height={200}
					imageAltDesc={activity.name}
					sx={{
						borderRadius: '16px',
						m: 1.5,
						overflow: 'hidden',
					}}
				/>
			</Link>
			<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
				<Stack spacing={2}>
					<Typography
						component={Link}
						to={`/activity/${activity.activityId}`}
						variant="h6"
						sx={{
							textDecoration: 'none',
							color: 'text.primary',
							fontWeight: 600,
							transition: 'color 0.2s',
							'&:hover': {
								color: 'primary.main',
							},
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 2,
							WebkitBoxOrient: 'vertical',
							lineHeight: 1.3,
							minHeight: '2.6em',
						}}
					>
						{activity.name}
					</Typography>

					<Typography
						color="text.secondary"
						variant="body2"
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
							lineHeight: 1.6,
						}}
					>
						{activity.description}
					</Typography>

					<Stack direction="row" alignItems="center" spacing={1}>
						<CalendarTodayIcon sx={{ fontSize: 16, color: 'primary.main' }} />
						<Typography variant="body2" color="primary.main" fontWeight={500}>
							{new Date(activity.postedDate).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</Typography>
					</Stack>
				</Stack>
			</CardContent>

			<Box sx={{ p: 3, pt: 0 }}>
				<LinkButton
					buttonText="View Details"
					url={`/activity/${activity.activityId}`}
					fullWidth
					sx={{
						borderRadius: 2,
						textTransform: 'none',
						fontWeight: 600,
						fontSize: '0.95rem',
					}}
				/>
			</Box>
		</Card>
	);
};
