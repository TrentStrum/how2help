import { Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Activity } from '@api/entities/activity';
import { transitions, componentStyles } from '@app/components/styles';

interface ActivityCardProps {
	activity: Activity;
}

export const ActivityCard = ({ activity }: ActivityCardProps) => {
	return (
		<Card
			sx={{
				...componentStyles.card,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				transition: transitions.medium,
			}}
		>
			<CardContent sx={{ flexGrow: 1, p: 3 }}>
				<Stack spacing={2}>
					<Typography
						component={Link}
						to={`/activity/${activity.activityId}`}
						variant="h6"
						sx={{
							color: 'text.primary',
							textDecoration: 'none',
							transition: transitions.quick,
							'&:hover': {
								color: 'primary.main',
							},
						}}
					>
						{activity.name}
					</Typography>

					<Typography color="text.secondary" variant="body2">
						{activity.description}
					</Typography>

					{activity.tags && (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
							{activity.tags.map((tag) => (
								<Chip
									key={tag}
									label={tag}
									size="small"
									sx={{
										transition: transitions.quick,
										'&:hover': {
											backgroundColor: 'primary.light',
											color: 'primary.contrastText',
										},
									}}
								/>
							))}
						</Box>
					)}
				</Stack>
			</CardContent>
		</Card>
	);
};