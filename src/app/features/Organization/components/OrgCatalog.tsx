import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Typography, Container, Box, Grid, InputAdornment, TextField } from '@mui/material';

import { useGetOrgsAll } from '@api/entities/organization';
import { Organization } from '@api/entities/organization/types/organization.types';
import { CatalogCard } from '@components/Cards/CatalogCard';

const OrgCatalog = () => {
	const { data: orgs, isLoading, isError } = useGetOrgsAll();

	if (isLoading) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

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
					{orgs?.map((org: Organization) => (
						<Grid item key={org.orgId} md={4} sm={4} xs={2}>
							<CatalogCard
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
