import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import {
	alpha,
	Avatar,
	Box,
	Button,
	Card,
	Divider,
	IconButton,
	styled,
	Typography,
} from '@mui/material';

import { Organization } from '../../../api/entities/organization';
import { AvatarGroupTooltips } from '../../../components/Avatar/AvatarGroupTooltips';

const IconButtonFav = styled(IconButton)(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(2),
	top: theme.spacing(2),
	borderRadius: '55px',
	padding: theme.spacing(1),
	transition: theme.transitions.create(['all']),

	'&:hover': {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
	background: theme.palette.common.white,
	width: theme.spacing(9),
	height: theme.spacing(9),
	padding: theme.spacing(1.8),
	boxShadow: `0 0.180rem .3rem ${alpha(theme.palette.common.black, 0.3)}, 0 .326rem 3rem ${alpha(
		theme.palette.common.black,
		0.2,
	)}`,
}));

type Props = {
	org: Organization;
};

const CauseOrgSearchCard = ({ org }: Props) => {
	return (
		<Card
			sx={{
				position: 'relative',
			}}
		>
			<IconButtonFav color="primary" size="small">
				<FavoriteTwoToneIcon fontSize="small" />
			</IconButtonFav>
			<Box
				pt={4}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<AvatarWrapper alt="Spotify" src="/placeholders/logo/spotify.svg" variant="rounded" />
				<Typography
					noWrap
					sx={{
						pt: 3,
					}}
					variant="h4"
				>
					{org.name}
				</Typography>
				<Typography color="text.secondary" noWrap sx={{ pb: 2 }} variant="subtitle1">
					{org.status}
				</Typography>
				<AvatarGroupTooltips />
				<Divider
					flexItem
					sx={{
						mt: 3,
					}}
				/>
				<Box
					p={2}
					sx={{
						width: '100%',
					}}
				>
					<Button
						color="secondary"
						fullWidth
						startIcon={<AccountCircleTwoToneIcon />}
						variant="outlined"
					>
						Organization profile
					</Button>
				</Box>
			</Box>
		</Card>
	);
};

export { CauseOrgSearchCard };
