import { Grid } from '@mui/material';
import OrgList from './OrgList';

const Catalog = () => {
	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 3 }}
		>
			<Grid
				container
				spacing={{ xs: 2, sm: 3 }}
				xs={12}
			>
				<Grid
					lg={3}
					sm={6}
					xs={12}
				>
					<OrgList />
				</Grid>
			</Grid>
		</Grid>
	);
};

export { Catalog };
