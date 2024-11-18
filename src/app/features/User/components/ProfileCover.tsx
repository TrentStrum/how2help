import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { Box, Typography, Button, Stack, Chip, useTheme, Avatar, Paper } from '@mui/material';

import { User } from '@api/entities/user';
import { ButtonIcon } from '@app/components/Buttons/ButtonIcon';

type Props = {
	user: User;
	isOwner: boolean;
};

const ProfileCover = ({ user, isOwner }: Props) => {
	const theme = useTheme();

	return (
		<Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden' }}>
			{/* Cover Image */}
			<Box sx={{ position: 'relative', height: 280 }}>
				<Box
					component="img"
					src={user.coverImageUrl || '/placeholders/covers/1.jpg'}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>

				{/* Profile Info Overlay */}
				<Box
					sx={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
						pt: 8,
						pb: 3,
						px: 4,
						color: 'white',
						display: 'flex',
						alignItems: 'flex-end',
						gap: 3,
					}}
				>
					{/* Avatar */}
					<Avatar
						src={user.avatarImageUrl || '/placeholders/avatars/default.jpg'}
						sx={{
							width: 120,
							height: 120,
							border: '4px solid',
							borderColor: 'background.paper',
							boxShadow: theme.shadows[3],
						}}
					/>

					{/* User Info */}
					<Box sx={{ flex: 1 }}>
						<Typography sx={{ color: 'white', mb: 1 }} variant="h3">
							{user.firstName} {user.lastName}
						</Typography>
						<Stack alignItems="center" direction="row" spacing={2}>
							<Chip
								icon={<LocationOnTwoToneIcon />}
								label={`${user.city}, ${user.state}`}
								sx={{
									bgcolor: 'rgba(255,255,255,0.1)',
									color: 'white',
									'& .MuiChip-icon': { color: 'white' },
								}}
							/>
							<Typography sx={{ color: 'rgba(255,255,255,0.7)' }} variant="body2">
								{user.email}
							</Typography>
						</Stack>
					</Box>

					{/* Action Buttons */}
					{!isOwner ? (
						<Stack direction="row" spacing={1}>
							<Button
								sx={{
									bgcolor: 'primary.main',
									'&:hover': { bgcolor: 'primary.dark' },
								}}
								variant="contained"
							>
								Follow
							</Button>
							<Button
								sx={{
									borderColor: 'white',
									color: 'white',
									'&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
								}}
								variant="outlined"
							>
								Message
							</Button>
							<ButtonIcon sx={{ color: 'white' }}>
								<MoreHorizTwoToneIcon />
							</ButtonIcon>
						</Stack>
					) : null}
				</Box>
			</Box>
		</Paper>
	);
};

export { ProfileCover };
