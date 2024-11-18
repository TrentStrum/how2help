import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { Activity } from '@api/entities/activity';
import { LinkButton } from '@app/components/Buttons/LinkButton';
import { CardImage } from '@components/Cards/CardImage';

type Props = {
	activity: Activity;
};

const ActivityCatalogCard = ({ activity }: Props) => {
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
				borderRadius: 2,
				boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
				transition: 'transform 0.3s ease-in-out',
				'&:hover': {
					transform: 'translateY(-4px)',
				},
			}}
		>
			<Link
				aria-label={`View details for ${activity.name}`}
				to={`/activity/${activity.activityId}`}
			>
				<CardImage
					avatarImageUrl={activity.avatarImageUrl}
					height={250}
					imageAltDesc={activity.name}
				/>
			</Link>
			<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<Stack direction="row" justifyContent="space-between" width="100%" sx={{ mb: 'auto' }}>
					<Typography
						component={Link}
						sx={{
							textDecoration: 'none',
							color: 'text.primary',
							'&:hover': {
								color: 'primary.main',
							},
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 2,
							WebkitBoxOrient: 'vertical',
							lineHeight: 1.2,
							minHeight: '2.4em',
						}}
						to={`/activity/${activity.activityId}`}
						variant="h6"
					>
						{activity.name}
					</Typography>
				</Stack>
				<Box sx={{ mt: 2 }}>
					<Typography color="text.secondary" variant="body2">
						{activity.description}
					</Typography>
					<Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">
						Date: {new Date(activity.postedDate).toLocaleDateString()}
					</Typography>
				</Box>
			</CardContent>
			<Box sx={{ p: 2 }}>
				<LinkButton buttonText="View Details" url={`/activity/${activity.activityId}`} />
			</Box>
		</Card>
	);
};

export { ActivityCatalogCard };
