import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import { Grid, Box, Typography, Rating, Tooltip, Button, Dialog } from '@mui/material';
import { useState } from 'react';

import { OrgWriteReviewModal } from '@app/components/Modals/OrgWriteReviewModal';

type Props = {
	orgId: string;
	orgName: string;
	averageRating?: number;
	isVerified?: boolean;
};

const WriteOrgReview = ({ orgId, orgName, averageRating = 4.5, isVerified = true }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		if (isVerified) {
			setIsModalOpen(true);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

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
						{averageRating.toFixed(1)}/5
					</Typography>
				</Box>
				<Box py={2}>
					<Rating precision={0.5} readOnly size="large" value={averageRating} />
				</Box>
				<Tooltip
					arrow
					placement="top"
					title={isVerified ? 'Write a review' : 'Only verified customers can write reviews'}
				>
					<Box component="span">
						<Button
							disabled={!isVerified}
							onClick={handleOpenModal}
							size="large"
							startIcon={<RateReviewTwoToneIcon />}
							variant="contained"
						>
							Write review
						</Button>
					</Box>
				</Tooltip>
			</Box>

			{/* Review Modal */}
			<Dialog fullWidth maxWidth="sm" onClose={handleCloseModal} open={isModalOpen}>
				<OrgWriteReviewModal onClose={handleCloseModal} orgId={orgId} orgName={orgName} />
			</Dialog>
		</Grid>
	);
};

export { WriteOrgReview };
