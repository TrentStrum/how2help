import { Grid, Box, Typography, Rating, Tooltip, Button } from '@mui/material';
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';

const WriteOrgReview = () => {
	return (
		<Grid
			item
			xs={12}
			md={6}
			sm={5}
		>
			<Box
				p={{ xs: 2, sm: 3 }}
				flex={1}
			>
				<Box>
					<Typography
						sx={{
							fontSize: 51,
						}}
						variant='h1'
					>
						4.5/5
					</Typography>
				</Box>
				<Box py={2}>
					<Rating
						size='large'
						value={4.5}
						precision={0.5}
						readOnly
					/>
				</Box>
				<Tooltip
					placement='top'
					arrow
					title='Only verified customers can write reviews'
				>
					<Box component='span'>
						<Button
							disabled
							startIcon={<RateReviewTwoToneIcon />}
							variant='contained'
							size='large'
						>
							Write review
						</Button>
					</Box>
				</Tooltip>
			</Box>
		</Grid>
	);
};

export { WriteOrgReview };
