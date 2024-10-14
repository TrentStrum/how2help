import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
	alpha,
	Avatar,
	Badge,
	Box,
	Card,
	Divider,
	Grid,
	IconButton,
	Link,
	styled,
	Typography,
	useTheme,
} from '@mui/material';

const IconButtonWrapper = styled(IconButton)(() => ({
	transform: 'translateY(0px)',

	'.MuiSvgIcon-root': {
		transform: 'scale(1)',
	},

	'&:hover': {
		transform: 'translateY(-2px)',

		'.MuiSvgIcon-root': {
			transform: 'scale(1.3)',
		},
	},
}));

const CauseEvents = () => {
	const theme = useTheme();

	return (
		<Grid container spacing={{ xs: 2, sm: 3 }}>
			<Grid lg={4} md={6} xs={12}>
				<Card
					elevation={0}
					sx={{
						background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
					}}
					variant="outlined"
				>
					<Box p={2}>
						<Link
							href=""
							onClick={(e) => e.preventDefault()}
							sx={{
								color: theme.palette.common.white,
								fontSize: theme.typography.pxToRem(17),
							}}
							underline="hover"
							variant="h5"
						>
							Create Figma design files
						</Link>
						<Box display="flex" mt={2}>
							<Avatar
								sx={{
									fontSize: theme.typography.pxToRem(12),
									fontWeight: 600,
									background: theme.palette.error.main,
									color: theme.palette.error.contrastText,
									borderRadius: theme.shape.borderRadius,
									width: 34,
									height: 34,
									mr: 0.5,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
								variant="rounded"
							>
								JK
							</Avatar>
							<Box mr={0.5}>
								<Badge
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
									color="success"
									overlap="rectangular"
									variant="dot"
								>
									<Avatar
										sx={{
											fontSize: theme.typography.pxToRem(12),
											fontWeight: 'normal',
											background: theme.palette.primary.main,
											color: theme.palette.primary.contrastText,
											borderRadius: theme.shape.borderRadius,
											width: 34,
											height: 34,
											boxShadow:
												'0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
										}}
										variant="rounded"
									>
										HA
									</Avatar>
								</Badge>
							</Box>
							<Avatar
								alt="Cindy Baker"
								src="/avatars/3.png"
								sx={{
									borderRadius: theme.shape.borderRadius,
									width: 34,
									mr: 0.5,
									height: 34,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
								variant="rounded"
							/>
							<Avatar
								alt="Agnes Walker"
								src="/avatars/4.png"
								sx={{
									borderRadius: theme.shape.borderRadius,
									width: 34,
									mr: 0.5,
									height: 34,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
								variant="rounded"
							/>
						</Box>
					</Box>
					<Divider
						sx={{
							borderColor:
								theme.palette.mode === 'dark'
									? alpha(theme.palette.common.white, 0.15)
									: alpha(theme.palette.common.white, 0.2),
						}}
					/>
					<Box
						alignItems="center"
						display="flex"
						justifyContent="space-between"
						p={2}
						sx={{
							background:
								theme.palette.mode === 'dark'
									? alpha(theme.palette.common.white, 0.04)
									: alpha(theme.palette.common.white, 0.1),
						}}
					>
						<Box alignItems="center" display="flex">
							<IconButtonWrapper
								size="small"
								sx={{
									mr: 1.5,
									background: theme.palette.primary.main,
									color: theme.palette.primary.contrastText,

									'&:hover': {
										background: theme.palette.primary.main,
										color: theme.palette.primary.contrastText,
									},
								}}
							>
								<AddTwoToneIcon fontSize="small" />
							</IconButtonWrapper>
							<Typography
								color="text.secondary"
								noWrap
								sx={{
									display: 'flex',
									mr: 1.5,
									alignItems: 'center',
									color: alpha(theme.palette.common.white, 0.7),
								}}
								variant="body1"
							>
								<LinkTwoToneIcon
									fontSize="small"
									sx={{
										mr: 0.4,
									}}
								/>
								55
							</Typography>
							<Typography
								color="text.secondary"
								noWrap
								sx={{
									display: 'flex',
									mr: 1.5,
									alignItems: 'center',
									color: alpha(theme.palette.common.white, 0.7),
								}}
								variant="body1"
							>
								<VisibilityTwoToneIcon
									fontSize="small"
									sx={{
										mr: 0.4,
									}}
								/>
								458
							</Typography>
						</Box>
						<Typography
							color="text.secondary"
							noWrap
							sx={{
								color: alpha(theme.palette.common.white, 0.7),
								display: 'flex',
								alignItems: 'center',
							}}
							variant="body1"
						>
							<ScheduleTwoToneIcon
								fontSize="small"
								sx={{
									mr: 0.4,
								}}
							/>
							9:45 am
						</Typography>
					</Box>
				</Card>
			</Grid>
			<Grid lg={4} md={6} xs={12}>
				<Card
					elevation={0}
					sx={{
						background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
						textAlign: 'center',
					}}
					variant="outlined"
				>
					<Box p={2}>
						<Link
							href=""
							onClick={(e) => e.preventDefault()}
							sx={{
								color: theme.palette.common.white,
								fontSize: theme.typography.pxToRem(17),
							}}
							underline="hover"
							variant="h5"
						>
							Implements package.json update
						</Link>
						<Box display="flex" justifyContent="center" mt={2}>
							<Avatar
								alt="Cindy Baker"
								src="/avatars/1.png"
								sx={{
									width: 44,
									height: 44,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
							/>
							<Avatar
								alt="Shelly Hays"
								src="/avatars/2.png"
								sx={{
									width: 44,
									height: 44,
									mx: 1,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
							/>
							<Avatar
								alt="Agnes Walker"
								src="/avatars/5.png"
								sx={{
									width: 44,
									height: 44,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
							/>
						</Box>
					</Box>
					<Divider
						sx={{
							borderColor:
								theme.palette.mode === 'dark'
									? alpha(theme.palette.common.white, 0.15)
									: alpha(theme.palette.common.white, 0.2),
						}}
					/>
					<Box
						alignItems="center"
						display="flex"
						justifyContent="space-between"
						p={1.5}
						sx={{
							background:
								theme.palette.mode === 'dark'
									? alpha(theme.palette.common.white, 0.04)
									: alpha(theme.palette.common.white, 0.1),
						}}
					>
						<Box alignItems="center" display="flex">
							<IconButtonWrapper
								size="small"
								sx={{
									mr: 1.5,
									background: theme.palette.success.main,
									color: theme.palette.success.contrastText,
									'&:hover': {
										background: theme.palette.success.main,
										color: theme.palette.success.contrastText,
									},
								}}
							>
								<AddTwoToneIcon fontSize="small" />
							</IconButtonWrapper>
							<Typography
								color="text.secondary"
								noWrap
								sx={{
									display: 'flex',
									mr: 1.5,
									alignItems: 'center',
									color: alpha(theme.palette.common.white, 0.7),
								}}
								variant="body1"
							>
								<LinkTwoToneIcon
									fontSize="small"
									sx={{
										mr: 0.4,
									}}
								/>
								34
							</Typography>
							<Typography
								color="text.secondary"
								noWrap
								sx={{
									display: 'flex',
									mr: 1.5,
									alignItems: 'center',
									color: alpha(theme.palette.common.white, 0.7),
								}}
								variant="body1"
							>
								<VisibilityTwoToneIcon
									fontSize="small"
									sx={{
										mr: 0.4,
									}}
								/>
								51.2k
							</Typography>
						</Box>
						<Typography
							color="text.secondary"
							noWrap
							sx={{
								color: alpha(theme.palette.common.white, 0.7),
								display: 'flex',
								alignItems: 'center',
							}}
							variant="body1"
						>
							<ScheduleTwoToneIcon
								fontSize="small"
								sx={{
									mr: 0.4,
								}}
							/>
							5:30 pm
						</Typography>
					</Box>
				</Card>
			</Grid>
			<Grid lg={4} md={6} xs={12}>
				<Card
					elevation={0}
					sx={{
						background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
					}}
					variant="outlined"
				>
					<Box p={2}>
						<Link
							href=""
							onClick={(e) => e.preventDefault()}
							sx={{
								color: theme.palette.common.white,
								fontSize: theme.typography.pxToRem(17),
							}}
							underline="hover"
							variant="h5"
						>
							Release new features
						</Link>
						<Box display="flex" mt={2}>
							<Box mr={0.5}>
								<Badge
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									badgeContent="7"
									color="primary"
									overlap="circular"
								>
									<Avatar
										alt="Cindy Baker"
										src="/avatars/1.png"
										sx={{
											width: 44,
											height: 44,
											boxShadow:
												'0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
										}}
									/>
								</Badge>
							</Box>
							<Avatar
								alt="Travis Howard"
								src="/avatars/2.png"
								sx={{
									width: 44,
									mr: 0.5,
									height: 44,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
							/>
							<Avatar
								alt="Remy Sharp"
								src="/avatars/3.png"
								sx={{
									width: 44,
									mr: 0.5,
									height: 44,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
							/>
							<Avatar
								alt="Shelly Hays"
								src="/avatars/4.png"
								sx={{
									width: 44,
									mr: 0.5,
									height: 44,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
							/>
							<Avatar
								alt="Agnes Walker"
								src="/avatars/5.png"
								sx={{
									width: 44,
									mr: 0.5,
									height: 44,
									boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
								}}
							/>
						</Box>
					</Box>
					<Divider
						sx={{
							borderColor:
								theme.palette.mode === 'dark'
									? alpha(theme.palette.common.white, 0.15)
									: alpha(theme.palette.common.white, 0.2),
						}}
					/>
					<Box
						alignItems="center"
						display="flex"
						justifyContent="space-between"
						p={1.5}
						sx={{
							background:
								theme.palette.mode === 'dark'
									? alpha(theme.palette.common.white, 0.04)
									: alpha(theme.palette.common.white, 0.1),
						}}
					>
						<Box alignItems="center" display="flex">
							<IconButtonWrapper
								size="small"
								sx={{
									mr: 1.5,
									background: theme.palette.error.main,
									color: theme.palette.error.contrastText,

									'&:hover': {
										background: theme.palette.error.main,
										color: theme.palette.error.contrastText,
									},
								}}
							>
								<AddTwoToneIcon fontSize="small" />
							</IconButtonWrapper>
							<Typography
								color="text.secondary"
								noWrap
								sx={{
									display: 'flex',
									mr: 1.5,
									alignItems: 'center',
									color: alpha(theme.palette.common.white, 0.7),
								}}
								variant="body1"
							>
								<LinkTwoToneIcon
									fontSize="small"
									sx={{
										mr: 0.4,
									}}
								/>
								55
							</Typography>
							<Typography
								color="text.secondary"
								noWrap
								sx={{
									display: 'flex',
									mr: 1.5,
									alignItems: 'center',
									color: alpha(theme.palette.common.white, 0.7),
								}}
								variant="body1"
							>
								<VisibilityTwoToneIcon
									fontSize="small"
									sx={{
										mr: 0.4,
									}}
								/>
								458
							</Typography>
						</Box>
						<Typography
							color="text.secondary"
							noWrap
							sx={{
								color: alpha(theme.palette.common.white, 0.7),
								display: 'flex',
								alignItems: 'center',
							}}
							variant="body1"
						>
							<ScheduleTwoToneIcon
								fontSize="small"
								sx={{
									mr: 0.4,
								}}
							/>
							9:45 am
						</Typography>
					</Box>
				</Card>
			</Grid>
		</Grid>
	);
};

export { CauseEvents };
