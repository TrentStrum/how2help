import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import {
	List,
	ListItem,
	Box,
	Avatar,
	Typography,
	Stack,
	Divider,
	CircularProgress,
} from '@mui/material';
import ReactCountryFlag from 'react-country-flag';

import { Organization } from '@api/entities/organization';
import { Reviews } from '@api/entities/reviews';
import { useGetReviewByOrgId } from '@api/entities/reviews/hooks/useGetReviewByOrgId';
import { AvatarState } from '@app/components/Avatar/Avatar-Style';
import { SoftButton } from '@app/components/Buttons/SoftButton';

type Props = {
	org: Organization;
};

const OrgReviewList = ({ org }: Props) => {
	const { data: reviews, isPending, isError, error } = useGetReviewByOrgId(org.orgId.toString());

	if (isPending) {
		return (
			<Box sx={{ p: 2 }}>
				<Typography variant="body2">
					<CircularProgress size={20} sx={{ mr: 1 }} />
					Loading reviews...
				</Typography>
			</Box>
		);
	}
	if (isError) {
		return (
			<Box sx={{ p: 2 }}>
				<Typography color="error" variant="body2">
					Error loading reviews: {error.message}
				</Typography>
			</Box>
		);
	}

	return (
		<List>
			{reviews.map((review: Reviews) => (
				<ListItem
					key={review.reviewId}
					sx={{
						display: { xs: 'block', sm: 'flex' },
						p: { xs: 2, sm: 3 },
					}}
				>
					<Box
						sx={{
							minWidth: { xs: 0, sm: 180, md: 210 },
							pb: { xs: 2, sm: 0 },
						}}
					>
						<Avatar
							alt={`User ${review.userId}`}
							src={`/src/assets/avatars/${review.userId}.png`}
						/>
						<Typography
							sx={{
								my: 1,
							}}
							variant="h5"
						>
							{review.title}
						</Typography>
						{review.flag ? (
							<ReactCountryFlag
								countryCode={review.flag}
								style={{
									width: '2.6em',
									height: '2.6em',
								}}
								svg
							/>
						) : null}
					</Box>
					<Box flex={1}>
						<Typography
							sx={{
								mb: { xs: 2, sm: 3 },
								mt: { xs: 2, sm: 0 },
							}}
						>
							{review.review}
						</Typography>
						<Box
							alignItems="center"
							display="flex"
							flexDirection={{ xs: 'column', md: 'row' }}
							justifyContent="space-between"
						>
							<Box alignItems="center" display="flex">
								{review.verified ? (
									<>
										<AvatarState
											isSoft
											state="success"
											sx={{
												mr: 1,
											}}
										>
											<DoneAllTwoToneIcon />
										</AvatarState>
										<Typography
											color="success.main"
											fontWeight={400}
											noWrap
											sx={{
												mr: { xs: 1, md: 3 },
											}}
											variant="subtitle2"
										>
											Verified Purchase
										</Typography>
									</>
								) : (
									<>
										<AvatarState
											isSoft
											state="error"
											sx={{
												mr: 1,
											}}
										>
											<ClearTwoToneIcon />
										</AvatarState>
										<Typography
											color="error.main"
											fontWeight={400}
											noWrap
											sx={{
												mr: { xs: 1, md: 3 },
											}}
											variant="subtitle2"
										>
											Not Verified
										</Typography>
									</>
								)}

								<Typography color="text.primary" variant="subtitle2">
									{review.date}
								</Typography>
							</Box>
							<Stack
								alignItems="center"
								direction="row"
								spacing={1}
								sx={{
									pt: { xs: 2, md: 0 },
								}}
							>
								<Typography
									component="span"
									sx={{
										pr: 1,
									}}
								>
									Helpful?
								</Typography>
								<SoftButton color="success" size="small" sx={{ minWidth: 0, p: 1 }}>
									<ThumbUpTwoToneIcon fontSize="small" />
								</SoftButton>
								<SoftButton color="error" size="small" sx={{ minWidth: 0, p: 1 }}>
									<ThumbDownTwoToneIcon fontSize="small" />
								</SoftButton>
							</Stack>
						</Box>
					</Box>
				</ListItem>
			))}
			<Divider />
		</List>
	);
};

export { OrgReviewList };
