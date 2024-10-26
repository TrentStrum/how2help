import { List, ListItem, Box, Typography } from '@mui/material';

import { LinearProgressSlim } from '../../../components/ProgressBar/ProgressBar.style';

type Props = {
	rating: number[] | undefined;
};

const AllRatingBars = ({ rating }: Props) => {
	let i = 0;

	return (
		<List>
			{rating!.map((star: number) => (
				<ListItem disableGutters key={star}>
					<Box sx={{ minWidth: 40, textAlign: 'right' }}>
						<Typography variant="h5">{rating!.length - i++} stars</Typography>
					</Box>
					<Box flexGrow={1} px={2}>
						<LinearProgressSlim color="secondary" value={star} variant="determinate" />
					</Box>
					<Box
						sx={{
							minWidth: 40,
							textAlign: 'right',
						}}
					>
						<Typography variant="h4">{star}</Typography>
					</Box>
				</ListItem>
			))}
		</List>
	);
};

export { AllRatingBars };
