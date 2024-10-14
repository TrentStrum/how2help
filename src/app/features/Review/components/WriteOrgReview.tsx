import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import { Grid, Box, Typography, Rating, Tooltip, Button } from '@mui/material';

const WriteOrgReview = () => {
	return (
		<Grid item md={6} sm={5} xs={12}>
			<Box flex={1} p={{ xs: 2, sm: 3 }}>
				<Box>
					<Typography
						sx={{
							fontSize: 51,
						}}
						variant="h1"
					>
						4.5/5
					</Typography>
				</Box>
				<Box py={2}>
					<Rating precision={0.5} readOnly size="large" value={4.5} />
				</Box>
				<Tooltip arrow placement="top" title="Only verified customers can write reviews">
					<Box component="span">
						<Button disabled size="large" startIcon={<RateReviewTwoToneIcon />} variant="contained">
							Write review
						</Button>
					</Box>
				</Tooltip>
			</Box>
		</Grid>
	);
};

export { WriteOrgReview };
