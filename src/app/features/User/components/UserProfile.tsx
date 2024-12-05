// import { ErrorScreen } from '@app/components/ErrorScreen';
// import { LoadingScreen } from '@app/components/LoadingScreen';
// import { NotFoundScreen } from '@app/components/NotFoundScreen';
import { Box, Container, Grid, Paper, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useGetUserById } from '@api/entities/user';
import { useAuth } from '@app/context/AuthContext';

import { ProfileCover } from './ProfileCover';
import { UserProfileEngagementStats } from './UserProfileEngagementStats';
import { UserProfileTabs } from './UserProfileTabs';

const UserProfile = () => {
	const { userId } = useParams();
	const { data: user, isPending, isError } = useGetUserById(Number(userId));
	const { user: authUser } = useAuth();
	const isOwner = authUser?.userId === Number(userId);

	// if (isPending) return <LoadingScreen />;
	// if (isError) return <ErrorScreen message="Error loading profile" />;
	// if (!user) return <NotFoundScreen message="User not found" />;

	const tabs = [
		{ value: 0, label: 'Activities' },
		{ value: 1, label: 'Organizations' },
		{ value: 2, label: 'Impact' },
		{ value: 3, label: 'About Me' },
		...(isOwner
			? [
					{ value: 4, label: 'Edit Profile' },
					{ value: 5, label: 'Notifications' },
					{ value: 6, label: 'Security' },
				]
			: []),
	];

	return (
		<Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
			<Container maxWidth="lg">
				<Stack spacing={3} sx={{ py: 3 }}>
					{/* Profile Header */}
					{user ? <ProfileCover isOwner={isOwner} user={user} /> : null}

					{/* Recent Activity - Full Width */}
					<Grid container>
						<Grid item xs={12}>
							{user ? <UserProfileEngagementStats user={user} /> : null}
						</Grid>
					</Grid>

					{/* Main Content Area */}
					<Grid item xs={12}>
						<Paper
							elevation={0}
							sx={{
								p: 3,
								borderRadius: 2,
								bgcolor: 'background.paper',
							}}
						>
							{user ? <UserProfileTabs isOwner={isOwner} tabs={tabs} user={user} /> : null}
						</Paper>
					</Grid>
				</Stack>
			</Container>
		</Box>
	);
};

export { UserProfile };
