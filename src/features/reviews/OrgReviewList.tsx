import { List, ListItem, Box, Avatar, Typography, Stack, Divider } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import { Organization } from '../../app/api/entities/organization';
import { Reviews } from '../../app/api/entities/reviews';
import { AvatarState } from '../../app/components/ui/avatar';
import { ButtonSoft } from '../../app/components/ui/button-soft';

type Props = {
	org: Organization;
};

const OrgReviewList = ({ org }: Props) => {
	return (
		<List>
			{org.reviews.map((review: Reviews) => (
				<ListItem
					sx={{
						display: { xs: 'block', sm: 'flex' },
						p: { xs: 2, sm: 3 },
					}}
					key={review.reviewId}
				>
					<Box
						sx={{
							minWidth: { xs: 0, sm: 180, md: 210 },
							pb: { xs: 2, sm: 0 },
						}}
					>
						<Avatar src={review.avatar} />
						<Typography
							sx={{
								my: 1,
							}}
							variant='h5'
						>
							{review.name}
						</Typography>
						<ReactCountryFlag
							style={{
								width: '2.6em',
								height: '2.6em',
							}}
							countryCode={review.flag}
							svg
						/>
					</Box>
					<Box flex={1}>
						<Typography
							sx={{
								mb: { xs: 2, sm: 3 },
							}}
						>
							{review.review}
						</Typography>
						<Box
							display='flex'
							alignItems='center'
							flexDirection={{ xs: 'column', md: 'row' }}
							justifyContent='space-between'
						>
							<Box
								display='flex'
								alignItems='center'
							>
								{review.verified ? (
									<>
										<AvatarState
											isSoft
											state='success'
											sx={{
												mr: 1,
											}}
										>
											<DoneAllTwoToneIcon />
										</AvatarState>
										<Typography
											variant='subtitle2'
											sx={{
												mr: { xs: 1, md: 3 },
											}}
											noWrap
											fontWeight={400}
											color='success.main'
										>
											Verified Purchase
										</Typography>
									</>
								) : (
									<>
										<AvatarState
											isSoft
											state='error'
											sx={{
												mr: 1,
											}}
										>
											<ClearTwoToneIcon />
										</AvatarState>
										<Typography
											variant='subtitle2'
											sx={{
												mr: { xs: 1, md: 3 },
											}}
											noWrap
											fontWeight={400}
											color='error.main'
										>
											Not Verified
										</Typography>
									</>
								)}

								<Typography
									variant='subtitle2'
									color='text.primary'
								>
									{review.date}
								</Typography>
							</Box>
							<Stack
								direction='row'
								spacing={1}
								alignItems='center'
								sx={{
									pt: { xs: 2, md: 0 },
								}}
							>
								<Typography
									sx={{
										pr: 1,
									}}
									component='span'
								>
									Helpful?
								</Typography>
								<ButtonSoft
									sx={{ minWidth: 0, p: 1 }}
									color='success'
									size='small'
								>
									<ThumbUpTwoToneIcon fontSize='small' />
								</ButtonSoft>
								<ButtonSoft
									sx={{ minWidth: 0, p: 1 }}
									color='error'
									size='small'
								>
									<ThumbDownTwoToneIcon fontSize='small' />
								</ButtonSoft>
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
