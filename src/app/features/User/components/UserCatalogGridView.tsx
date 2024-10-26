import { Grid, Box } from '@mui/material';

import { User } from '@api/entities/user';

import { UserCatalogCard } from './UserCatalogCard';

type Props = {
	users: User[];
};

const UserCatalogGridView = ({ users }: Props) => {
	return (
		<Box alignItems="center" display="flex">
			<Grid container spacing={{ xs: 2, sm: 3 }}>
				{users.map((user) => {
					return (
						<Grid item key={user.userId.toString()} lg={4} sm={6} xs={12}>
							<UserCatalogCard user={user} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export { UserCatalogGridView };
