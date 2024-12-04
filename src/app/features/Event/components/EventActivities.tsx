import { Grid, Typography } from '@mui/material';

import { Activity } from '@api/entities/activity/types/activity.types';
import { ActivityCard } from '@app/components/Cards/ActivityCard';

import { EventTabProps } from '../types/event.types';

export const EventActivities = ({ event }: EventTabProps) => {
	return (
		<>
			<Typography gutterBottom variant="h4">
				Activities ({event.activities?.length || 0})
			</Typography>
			<Grid container spacing={3}>
				{event.activities?.map((activity: Activity) => (
					<Grid item key={activity.activityId} md={4} sm={6} xs={12}>
						<ActivityCard activity={activity} />
					</Grid>
				))}
			</Grid>
		</>
	);
};
