import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Typography, Container, Box, Grid, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

import { useGetAllActivities } from '@api/entities/activity/hooks/useGetAllActivities';

import { ActivityCatalogCard } from './ActivityCatalogCard';

const ActivityCatalog = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const limitCount = 8; // Number of items per page
	const { data, isPending, isError } = useGetAllActivities(currentPage, limitCount);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

	const activities = data?.results || [];

	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<Grid columns={{ xs: 4, sm: 8, md: 12 }} container spacing={{ xs: 2, md: 3 }}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							// onChange={handleQueryChange}
							// value={query}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchTwoToneIcon />
									</InputAdornment>
								),
							}}
							placeholder="Search by activity name..."
						/>
					</Grid>
					{activities.map((activity) => (
						<Grid item key={activity.activityId} md={4} sm={4} xs={2}>
							<ActivityCatalogCard activity={activity} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export { ActivityCatalog };
