import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
	alpha,
	Avatar,
	Box,
	Card,
	Divider,
	Grid,
	IconButton,
	styled,
	Tooltip,
	Typography,
	useTheme,
} from '@mui/material';
import { User } from '../../../types/user.types';
import { Link } from 'react-router-dom';

const CardBorderTop = styled(Card)(() => ({
	borderTop: `transparent 5px solid`,
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
	transform: 'translateY(0px)',
	transition: theme.transitions.create(['color', 'transform']),

	'.MuiSvgIcon-root': {
		transform: 'scale(1)',
		transition: theme.transitions.create(['transform']),
	},

	'&:hover': {
		transform: 'translateY(-2px)',

		'.MuiSvgIcon-root': {
			transform: 'scale(1.3)',
		},
	},
}));

type Props = {
	user: User;
};

const UserList = ({ user }: Props) => {
	const theme = useTheme();

	return (
		<Grid
			xs={12}
			lg={4}
			md={6}
		>
			<CardBorderTop
				sx={{
					p: { xs: 2, sm: 3 },
					textAlign: 'center',
					borderTopColor: theme.palette.error.main,
				}}
			>
				<Avatar
					sx={{
						width: 86,
						height: 86,
						mb: 2,
						mx: 'auto',
						border: theme.palette.common.white + ' solid 3px',
						boxShadow: `0 0 0 3px ${theme.palette.warning.main}`,
					}}
					src={user.avatarImageUrl}
				/>
				<Typography variant='h4'>{user.username}</Typography>
				<Typography
					variant='subtitle1'
					color='text.secondary'
				>
					{user.firstName} {user.lastName}
				</Typography>
				<Divider
					sx={{
						my: 2,
					}}
				/>
				<Box
					display='flex'
					justifyContent='center'
				>
					<Tooltip
						arrow
						placement='top'
						title='View details'
					>
						<Link to={`/user/${user.userId}`}>
							<IconButtonWrapper
								sx={{
									boxShadow: `0px 1px 4px ${alpha(
										theme.palette.primary.main,
										0.25
									)}, 0px 3px 12px 2px ${alpha(
										theme.palette.primary.main,
										0.35
									)}`,
									background: theme.palette.primary.main,
									color: theme.palette.primary.contrastText,

									'&:hover': {
										background: theme.palette.primary.main,
										color: theme.palette.primary.contrastText,
									},
									borderRadius: 50,
								}}
								size='large'
							>
								<VisibilityTwoToneIcon
									sx={{
										fontSize: theme.typography.pxToRem(18),
									}}
								/>
							</IconButtonWrapper>
						</Link>
					</Tooltip>
					<Tooltip
						arrow
						placement='top'
						title='Add to favourites'
					>
						<IconButtonWrapper
							size='large'
							sx={{
								boxShadow: `0px 1px 4px ${alpha(
									theme.palette.primary.main,
									0.25
								)}, 0px 3px 12px 2px ${alpha(theme.palette.primary.main, 0.35)}`,
								background: theme.palette.primary.main,
								color: theme.palette.primary.contrastText,

								'&:hover': {
									background: theme.palette.primary.main,
									color: theme.palette.primary.contrastText,
								},
								borderRadius: 50,
								mx: 1,
							}}
						>
							<FavoriteTwoToneIcon
								sx={{
									fontSize: theme.typography.pxToRem(18),
								}}
							/>
						</IconButtonWrapper>
					</Tooltip>
					<Tooltip
						arrow
						placement='top'
						title='View user profile'
					>
						<IconButtonWrapper
							sx={{
								boxShadow: `0px 1px 4px ${alpha(
									theme.palette.primary.main,
									0.25
								)}, 0px 3px 12px 2px ${alpha(theme.palette.primary.main, 0.35)}`,
								background: theme.palette.primary.main,
								color: theme.palette.primary.contrastText,

								'&:hover': {
									background: theme.palette.primary.main,
									color: theme.palette.primary.contrastText,
								},
								borderRadius: 50,
							}}
							size='large'
						>
							<PersonSearchTwoToneIcon
								sx={{
									fontSize: theme.typography.pxToRem(18),
								}}
							/>
						</IconButtonWrapper>
					</Tooltip>
				</Box>
			</CardBorderTop>
		</Grid>
	);
};

export { UserList };
