import { Box, CardMedia, Typography, Button, Avatar, IconButton, Chip, Divider, Stack, Theme, useMediaQuery } from '@mui/material';
import { User } from '../../types/user.types';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { CardCover, CardCoverAction, VisuallyHiddenInputNative, AvatarWrapper, ButtonUploadWrapper, ButtonIcon } from './styledComponents';

type Props = {
	user: User;
};

const ProfileCover = ({ user }: Props) => {
    const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    
	return (
		<>
			<Box
				display='flex'
				alignItems='center'
				mb={{ xs: 2, sm: 3 }}
			>
				<Box>
					<Typography
						variant='h3'
						component='h3'
						sx={{ pb: 0.5 }}
					>
						{user.firstName}'s Profile
					</Typography>
				</Box>
			</Box>
			<CardCover>
				<CardMedia image={user.coverImageUrl} />
				<CardCoverAction>
					<VisuallyHiddenInputNative
						accept='image/*'
						id='change-cover'
						multiple
						type='file'
					/>
					<label htmlFor='change-cover'>
						<Button
							startIcon={<UploadTwoToneIcon />}
							variant='outlined'
							color='secondary'
							component='span'
						>
							Change cover
						</Button>
					</label>
				</CardCoverAction>
			</CardCover>
			<AvatarWrapper>
				<Avatar
					variant='rounded'
					alt={user.username}
					src={user.avatarImageUrl}
				/>
				<ButtonUploadWrapper>
					<VisuallyHiddenInputNative
						accept='image/*'
						id='icon-button-file'
						name='icon-button-file'
						type='file'
					/>
					<label htmlFor='icon-button-file'>
						<IconButton
							component='span'
							color='primary'
						>
							<UploadTwoToneIcon />
						</IconButton>
					</label>
				</ButtonUploadWrapper>
			</AvatarWrapper>
			<Box
				pt={2}
				pl={2}
			>
				<Typography variant='h4'>
					{user.firstName + ' ' + user.lastName}
					<Typography
						variant='h6'
						fontWeight={500}
						sx={{ pl: 0.5 }}
						color='text.secondary'
						component='span'
					>
						({user.role})
					</Typography>
				</Typography>
				<Typography
					variant='subtitle1'
					color='text.secondary'
				>
					{user.email}
				</Typography>
				<Stack
					mt={2}
					gap={{ xs: 1, sm: 1.5 }}
					flexDirection={{ xs: 'column', sm: 'row' }}
					divider={
						<Divider
							flexItem
							orientation={smUp ? 'vertical' : 'horizontal'}
						/>
					}
				>
					<Chip
						variant='outlined'
						color='info'
						label={user.city + ','+ ' '+ user.State}
					/>
					<Chip
						variant='outlined'
						color='info'
						label={
							<>
								Pending followers
							</>
						}
					/>
					<Button
						size='small'
						endIcon={<ArrowForwardTwoToneIcon />}
					>
						Pending- See all 1,234 connections
					</Button>
				</Stack>
				<Divider sx={{ ml: -2.5, my: 2 }} />
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-between'
				>
					<Stack
						spacing={1}
						direction='row'
					>
						<Button
							size='small'
							variant='contained'
						>
							Follow
						</Button>
						<Button
							size='small'
							variant='outlined'
						>
							View website
						</Button>
					</Stack>
					<ButtonIcon
						color='primary'
						size='small'
					>
						<MoreHorizTwoToneIcon />
					</ButtonIcon>
				</Box>
			</Box>
		</>
	);
};

export { ProfileCover };
