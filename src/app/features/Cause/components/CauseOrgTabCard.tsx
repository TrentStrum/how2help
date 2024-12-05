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
	Rating,
	styled,
	Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Organization } from '../../../api/entities/organization';

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

const CauseOrgTabCard = ({ org }: Props) => {
	const navigate = useNavigate();

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
						mb: 1,
					}}
					variant="h4"
				>
					{org.name}
				</Typography>
				<Rating defaultValue={org.userRating} precision={0.5} readOnly sx={{ mb: 1 }} />
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
					<Typography color="text.secondary" fontWeight="bold" variant="subtitle1">
						Active events: {org.events?.length ? org.events : 'No email'}
					</Typography>
					<Typography color="text.secondary" fontWeight="bold" variant="subtitle1">
						Open activities: {org.activities?.length ? org.activities : 'No activities'}
					</Typography>
				</Box>

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
						onClick={() => {
							navigate(`/org/${org.orgId}`);
						}}
						startIcon={<AccountCircleTwoToneIcon />}
						variant="outlined"
					>
						View profile
					</Button>
				</Box>
			</Box>
		</Card>
	);
};

export { CauseOrgTabCard };
