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
import { AvatarGroupTooltips } from './AvatarGroupTooltips';
import { Organization } from '../../../../app/api/entities/organization';

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
		0.2
	)}`,
}));

type Props = {
	org: Organization;
};

const CauseOrgSearchCard = ({ org }: Props) => {
	// const theme = useTheme();

	return (
		<Card
			sx={{
				position: 'relative',
			}}
		>
			<IconButtonFav
				size='small'
				color='primary'
			>
				<FavoriteTwoToneIcon fontSize='small' />
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
				<AvatarWrapper
					variant='rounded'
					alt='Spotify'
					src='/placeholders/logo/spotify.svg'
				/>
				<Typography
					noWrap
					variant='h4'
					sx={{
						pt: 3,
					}}
				>
					{org.name}
				</Typography>
				<Typography
					noWrap
					variant='subtitle1'
					sx={{ pb: 2 }}
					color='text.secondary'
				>
					{org.status}
				</Typography>
				<AvatarGroupTooltips />
				<Divider
					sx={{
						mt: 3,
					}}
					flexItem
				/>
				<Box
					p={2}
					sx={{
						width: '100%',
					}}
				>
					<Button
						fullWidth
						startIcon={<AccountCircleTwoToneIcon />}
						variant='outlined'
						color='secondary'
					>
						Organization profile
					</Button>
				</Box>
			</Box>
		</Card>
	);
};

export { CauseOrgSearchCard };
