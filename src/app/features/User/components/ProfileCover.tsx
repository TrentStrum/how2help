import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import {
	Box,
	CardMedia,
	Typography,
	Button,
	Avatar,
	IconButton,
	Chip,
	Divider,
	Stack,
	Theme,
	useMediaQuery,
} from '@mui/material';

import { User } from '@api/entities/user/types/user.types';
import {
	CardCover,
	CardCoverAction,
	VisuallyHiddenInputNative,
	AvatarWrapper,
	ButtonUploadWrapper,
	ButtonIcon,
} from '@features/User/services/styledComponents';

type Props = {
	user: User;
};

const ProfileCover = ({ user }: Props) => {
	const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

	return (
		<>
			<Box alignItems="center" display="flex" mb={{ xs: 2, sm: 3 }}>
				<Box>
					<Typography component="h3" sx={{ pb: 0.5 }} variant="h3">
						{user.firstName}&apos;s Profile
					</Typography>
				</Box>
			</Box>
			<CardCover>
				<CardMedia image={user.coverImageUrl} />
				<CardCoverAction>
					<VisuallyHiddenInputNative accept="image/*" id="change-cover" multiple type="file" />
					<label htmlFor="change-cover">
						<Button
							color="secondary"
							component="span"
							startIcon={<UploadTwoToneIcon />}
							variant="outlined"
						>
							Change cover
						</Button>
					</label>
				</CardCoverAction>
			</CardCover>
			<AvatarWrapper>
				<Avatar alt={user.username} src={user.avatarImageUrl} variant="rounded" />
				<ButtonUploadWrapper>
					<VisuallyHiddenInputNative
						accept="image/*"
						id="icon-button-file"
						name="icon-button-file"
						type="file"
					/>
					<label htmlFor="icon-button-file">
						<IconButton color="primary" component="span">
							<UploadTwoToneIcon />
						</IconButton>
					</label>
				</ButtonUploadWrapper>
			</AvatarWrapper>
			<Box pl={2} pt={2}>
				<Typography variant="h4">
					{user.firstName + ' ' + user.lastName}
					<Typography
						color="text.secondary"
						component="span"
						fontWeight={500}
						sx={{ pl: 0.5 }}
						variant="h6"
					>
						({user.role})
					</Typography>
				</Typography>
				<Typography color="text.secondary" variant="subtitle1">
					{user.email}
				</Typography>
				<Stack
					divider={<Divider flexItem orientation={smUp ? 'vertical' : 'horizontal'} />}
					flexDirection={{ xs: 'column', sm: 'row' }}
					gap={{ xs: 1, sm: 1.5 }}
					mt={2}
				>
					<Chip color="info" label={`${user.city}, ${user.State}`} variant="outlined" />
					<Chip color="info" label={<>Pending followers</>} variant="outlined" />
					<Button endIcon={<ArrowForwardTwoToneIcon />} size="small">
						Pending- See all 1,234 connections
					</Button>
				</Stack>
				<Divider sx={{ ml: -2.5, my: 2 }} />
				<Box alignItems="center" display="flex" justifyContent="space-between">
					<Stack direction="row" spacing={1}>
						<Button size="small" variant="contained">
							Follow
						</Button>
						<Button size="small" variant="outlined">
							View website
						</Button>
					</Stack>
					<ButtonIcon color="primary" size="small">
						<MoreHorizTwoToneIcon />
					</ButtonIcon>
				</Box>
			</Box>
		</>
	);
};

export { ProfileCover };
