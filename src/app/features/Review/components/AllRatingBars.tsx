import { List, ListItem, Box, Typography } from '@mui/material';

import { LinearProgressSlim } from '../../../components/ProgressBar/ProgressBar-Styles';

interface Props {
	rating: number[] | undefined;
}

const AllRatingBars = ({ rating }: Props) => {
	if (!rating?.length) return null;

	return (
		<List>
			{rating.map((count, index) => {
				const stars = rating.length - index;
				return (
					<ListItem disableGutters key={`rating-${stars}`}>
						<Box sx={{ minWidth: 40, textAlign: 'right' }}>
							<Typography variant="h5">{stars} stars</Typography>
						</Box>
						<Box flexGrow={1} px={2}>
							<LinearProgressSlim color="secondary" value={count} variant="determinate" />
						</Box>
						<Box sx={{ minWidth: 40, textAlign: 'right' }}>
							<Typography variant="h4">{count}</Typography>
						</Box>
					</ListItem>
				);
			})}
		</List>
	);
};

export { AllRatingBars };
