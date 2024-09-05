import { List, ListItem, Box, Typography } from '@mui/material';
import { LinearProgressSlim } from './ProgressBar.style';


type Props = {
	rating: number[];
};

const AllRatingBars = ({ rating }: Props) => {
let i = 0;
console.log(rating)
	return (
		<List>
			{rating.map((star: number) => (
				<ListItem
					disableGutters
					key={star}
				>
					<Box sx={{ minWidth: 40, textAlign: 'right' }}>
						<Typography variant='h5'>
						{rating.length - i++} stars
						</Typography>
					</Box>
					<Box
						px={2}
						flexGrow={1}
					>
						<LinearProgressSlim
							value={star}
							color='secondary'
							variant='determinate'
						/>
					</Box>
					<Box
						sx={{
							minWidth: 40,
							textAlign: 'right',
						}}
					>
						<Typography variant='h4'>{star}</Typography>
					</Box>
				</ListItem>
			))}
		</List>
	);
};

export { AllRatingBars };
