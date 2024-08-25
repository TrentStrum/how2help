import { Grid } from '@mui/material';

import { ReactNode } from 'react';

type Props = {
	leftSideContent: ReactNode;
	rightSideContent: ReactNode;
};

const SideBySideLayout = ({ leftSideContent, rightSideContent }: Props) => {
	return (
		<>
			<Grid
				container
				direction='row'
				spacing={2}
			>
				<Grid
					item
					alignContent='center'
					justifyContent='center'
					xs={12}
					md={4}
					order={{ xs: 2, md: 1 }}
				>
					<Grid
						container
						direction='column'
						spacing={2}
					>
						{leftSideContent}
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					md={8}
					order={{ xs: 1, md: 2 }}
				>
					{rightSideContent}
				</Grid>
			</Grid>
		</>
	);
};

export { SideBySideLayout };
