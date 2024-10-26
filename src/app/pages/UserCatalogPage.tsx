import { Box, alpha, Stack, Divider, Typography } from '@mui/material';

import { UserCatalogContainer } from '@app/features/User';

const UserCatalogPage = () => {
	return (
		<>
			<Box
				mb={3}
				minWidth="100%"
				p={{ xs: 1, sm: 2 }}
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
				}}
			>
				<Stack
					alignItems="center"
					direction="row"
					divider={<Divider flexItem orientation="vertical" />}
					spacing={{ xs: 2, sm: 3 }}
				>
					<Box>
						<Typography component="h2" noWrap sx={{ pb: 0.3 }} variant="h3">
							User Search
						</Typography>
						<Typography color="text.secondary" fontWeight={400} noWrap variant="h5">
							Find other users to connect with...
						</Typography>
					</Box>
				</Stack>
			</Box>
			<UserCatalogContainer />
		</>
	);
};

export { UserCatalogPage };
