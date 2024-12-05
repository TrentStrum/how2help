import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
	leftSideContent: ReactNode;
	rightSideContent: ReactNode;
};

const SideBySideLayout = ({ leftSideContent, rightSideContent }: Props) => {
	return (
		<Grid container direction="row" spacing={8}>
			<Grid
				alignContent="center"
				item
				justifyContent="center"
				md={4}
				order={{ xs: 2, md: 1 }}
				xs={12}
			>
				<Grid container direction="column" spacing={2}>
					{leftSideContent}
				</Grid>
			</Grid>

			<Grid item md={8} order={{ xs: 1, md: 2 }} xs={12}>
				{rightSideContent}
			</Grid>
		</Grid>
	);
};

export { SideBySideLayout };
