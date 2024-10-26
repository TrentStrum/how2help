import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Typography, Container, Box, Grid, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

import { useGetOrgsAll } from '@api/entities/organization';
import { OrgCard } from '@app/features/Organization/index';

const OrgCatalog = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const limitCount = 8; // Number of items per page
	const { data, isPending, isError } = useGetOrgsAll(currentPage, limitCount);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

	const orgs = data?.results || [];

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
							placeholder="Search by organization name..."
						/>
					</Grid>
					{orgs.map((org) => (
						<Grid item key={org.orgId} md={4} sm={4} xs={2}>
							<OrgCard
								activities={org.Activities}
								avatarImageUrl={org.avatarImageUrl}
								entity="org"
								id={org.orgId}
								name={org.name}
								rating={org.userRating}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export { OrgCatalog };
