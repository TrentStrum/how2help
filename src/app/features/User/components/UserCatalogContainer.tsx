import { Box, Container, Grid } from '@mui/material';

import { UserCatalogDisplay } from '@app/features/User';

const UserCatalogContainer = () => {
	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<Grid columns={{ xs: 4 }} container spacing={{ xs: 2, md: 3 }}>
					<UserCatalogDisplay />
				</Grid>
			</Box>
		</Container>
	);
};

export { UserCatalogContainer };
