import { Grid, Box, Divider, Typography } from '@mui/material';

import { AllRatingBars } from './AllRatingBars';

type Props = {
	rating: number[] | undefined;
};

const OrgRatingBarsContainer = ({ rating }: Props) => {
	return (
		<Grid item md={6} position="relative" sm={7} xs={12}>
			<Box component="span" sx={{ display: { xs: 'none', md: 'inline-block' } }}>
				<Divider
					absolute
					flexItem
					orientation="vertical"
					sx={{ width: 1, height: '100%', left: 'auto', right: 0 }}
				/>
			</Box>
			<Box p={{ xs: 2, sm: 3 }}>
				<Typography variant="h3">
					<Typography component="span" variant="h4">
						Customer Reviews (75)
					</Typography>
				</Typography>
				<AllRatingBars rating={rating} />
			</Box>
		</Grid>
	);
};

export { OrgRatingBarsContainer };
