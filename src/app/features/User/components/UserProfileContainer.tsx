import { Feed } from '@mui/icons-material';
import { Box, Container, Grid } from '@mui/material';

import { User } from '@api/entities/user';
import { MyCards } from '@app/components/Cards/MyCards';
import { UserProfileRecentActivity } from '@app/features/User/components/UserProfileRecentActivity';

import { PopularTags, ProfileCover, UserAddresses, UserProfileTabs } from '.';

type Props = {
	user: User;
};

const UserProfileContainer = ({ user }: Props) => {
	return (
		<Box minWidth="100%">
			<Container maxWidth="xl">
				<Box py={{ xs: 2, sm: 3 }}>
					<Grid container spacing={{ xs: 2, sm: 3 }}>
						<Grid item md={8} xs={12}>
							<ProfileCover user={user} />
						</Grid>
						<Grid item md={4} xs={12}>
							<UserProfileRecentActivity />
						</Grid>
						<Grid item md={8} xs={12}>
							<Feed />
						</Grid>
						<Grid item md={4} xs={12}>
							<PopularTags />
						</Grid>
						<Grid item md={9} xs={12}>
							<MyCards />
						</Grid>
						<Grid item md={3} xs={12}>
							<UserAddresses />
						</Grid>
						<Grid item>
							<UserProfileTabs user={user} />
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export { UserProfileContainer };
