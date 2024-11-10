import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
	Box,
	Typography,
	Button,
	Stack,
	Divider,
	Chip,
	useTheme,
	// useMediaQuery,
	Avatar,
	Paper,
} from '@mui/material';

import { User } from '@api/entities/user';
import { ButtonIcon } from '@app/components/Buttons/ButtonIcon';

type Props = {
	user: User;
};

const ProfileCover = ({ user }: Props) => {
	const theme = useTheme();
	// const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Paper
			elevation={0}
			sx={{
				position: 'relative',
				borderRadius: 2,
				overflow: 'hidden',
				mb: 3,
			}}
		>
			<Box
				sx={{
					bgcolor: 'primary.main',
					height: { xs: 160, md: 200 },
					position: 'relative',
				}}
			>
				<Box
					alt="Profile cover"
					component="img"
					src={user.coverImageUrl || '/placeholders/covers/1.jpg'}
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						opacity: 0.7,
					}}
				/>
			</Box>

			<Box sx={{ p: 3, position: 'relative' }}>
				<Avatar
					src={user.avatarImageUrl || '/placeholders/avatars/default.jpg'}
					sx={{
						width: { xs: 88, md: 128 },
						height: { xs: 88, md: 128 },
						border: '4px solid',
						borderColor: 'background.paper',
						marginTop: { xs: -6, md: -8 },
						boxShadow: theme.shadows[3],
					}}
				/>

				<Box sx={{ mt: 2 }}>
					<Typography component="h1" gutterBottom variant="h3">
						{user.firstName} {user.lastName}
						<Typography color="text.secondary" component="span" sx={{ ml: 1 }} variant="h5">
							({user.role})
						</Typography>
					</Typography>

					<Stack
						alignItems={{ xs: 'flex-start', sm: 'center' }}
						direction={{ xs: 'column', sm: 'row' }}
						spacing={2}
					>
						<Chip
							color="primary"
							icon={<LocationOnTwoToneIcon />}
							label={`${user.city}, ${user.State}`}
							variant="outlined"
						/>
						<Typography color="text.secondary" variant="subtitle1">
							{user.email}
						</Typography>
					</Stack>

					<Stack
						direction="row"
						divider={<Divider flexItem orientation="vertical" />}
						spacing={2}
						sx={{ mt: 3 }}
					>
						<Button size="large" variant="contained">
							Follow
						</Button>
						<Button size="large" variant="outlined">
							Message
						</Button>
						<ButtonIcon color="primary">
							<MoreHorizTwoToneIcon />
						</ButtonIcon>
					</Stack>
				</Box>
			</Box>
		</Paper>
	);
};

export { ProfileCover };
