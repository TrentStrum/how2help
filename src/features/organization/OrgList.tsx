import { Typography, Container, Box, Grid, InputAdornment, TextField } from '@mui/material';
import { useGetOrgsAll } from '../../api/hooks/organization/useGetOrgs';
import { Organization } from '../../types/organization.types';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { CatalogContainer } from '../../components/layouts/Catalog/CatalogContainer';
import { CatalogCard } from '../../components/layouts/Catalog/CatalogCard';

export default function OrgList() {
	const { data: orgs, isLoading, isError } = useGetOrgsAll();

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		
		<CatalogContainer>
			<Container>
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						<Grid xs={12}>
							<TextField
								fullWidth
								// onChange={handleQueryChange}
								// value={query}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<SearchTwoToneIcon />
										</InputAdornment>
									),
								}}
								placeholder='Search by organization name...'
							/>
						</Grid>
						{orgs?.map((org: Organization) => (
							<Grid
								item
								xs={2}
								sm={4}
								md={4}
								key={org.orgId}
							>
								<CatalogCard
									id={org.orgId}
									name={org.name}
									avatarImageUrl={org.avatarImageUrl}
									rating={org.userRating}
									entity='org'
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</CatalogContainer>
	);
}
