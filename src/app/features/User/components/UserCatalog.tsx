import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Box, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';

import { useGetUsersAll, User } from '@api/entities/user';
import { CatalogCard } from '@app/components/Cards/CatalogCard';

const UserCatalog = () => {
	const { data: users, isLoading, isError } = useGetUsersAll();

	if (isLoading) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<Grid columns={{ xs: 4 }} container spacing={{ xs: 2, md: 3 }}>
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
							placeholder="Search by username..."
						/>
					</Grid>
					{users?.map((user: User) => (
						<Grid item key={user.userId} md={4} sm={4} xs={2}>
							<CatalogCard
								avatarImageUrl={user.avatarImageUrl}
								entity="user"
								id={user.userId}
								name={user.username}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export { UserCatalog };
