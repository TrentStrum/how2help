import { Card, CardContent, Typography } from '@mui/material';

import { Activity } from '@api/entities/activity/types/activity.types';

export const ActivityCard = ({ activity }: { activity: Activity }) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h6">{activity.name}</Typography>
			</CardContent>
		</Card>
	);
};
