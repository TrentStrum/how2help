import { Box, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useGetUsersAll, User } from '../../app/api/entities/user';
import { CatalogContainer } from '../../app/components/layouts/Catalog/CatalogContainer';
import { UserList } from '../../app/components/layouts/Catalog/UserList';

const UserCatalog = () => {
	const { data: users, isLoading, isError } = useGetUsersAll();

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<CatalogContainer>
			<Container>
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4 }}
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
								placeholder='Search by username...'
							/>
						</Grid>
						{users?.map((user: User) => (
							<Grid
								item
								xs={2}
								sm={4}
								md={4}
								key={user.userId}
							>
								<UserList user={user} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</CatalogContainer>
	);
};

export { UserCatalog };
