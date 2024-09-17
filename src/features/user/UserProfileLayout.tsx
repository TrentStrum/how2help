import { Box, Container, Grid } from '@mui/material';
import { User } from '../../types/user.types';
import { ProfileCover } from './ProfileCover';
import { RecentActivity } from './RecentActivity';
import { Feed } from './Feed';
import { PopularTags } from './PopularTags';
import { MyCards } from './MyCards';
import { Addresses } from './Addresses';
import { UserProfileTabs } from './UserProfileTabs';

type Props = {
	user: User;
};
const UserProfileLayout = ({ user }: Props) => {
	//   const isMountedRef = useRefMounted();

	// const customization = useCustomization();

	return (
		<Box minWidth='100%'>
			<Container maxWidth='xl'>
				<Box py={{ xs: 2, sm: 3 }}>
					<Grid
						container
						spacing={{ xs: 2, sm: 3 }}
					>
						<Grid
							item
							xs={12}
							md={8}
						>
							<ProfileCover user={user} />
						</Grid>
						<Grid
							item
							xs={12}
							md={4}
						>
							<RecentActivity />
						</Grid>
						<Grid
							item
							xs={12}
							md={8}
						>
							<Feed />
						</Grid>
						<Grid
							item
							xs={12}
							md={4}
						>
							<PopularTags />
						</Grid>
						<Grid
							item
							xs={12}
							md={9}
						>
							<MyCards />
						</Grid>
						<Grid
							item
							xs={12}
							md={3}
						>
							<Addresses />
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

export { UserProfileLayout };
