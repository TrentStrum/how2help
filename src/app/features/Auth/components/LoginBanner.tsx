import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import {
	Grid,
	Box,
	Tooltip,
	Container,
	Typography,
	alpha,
	IconButton,
	styled,
} from '@mui/material';

import { Logo } from './logo';

const CardActions = styled(Box)(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(1),
	top: theme.spacing(1),
	zIndex: 12,
}));

const BoxComposedContent = styled(Box)(() => ({
	position: 'relative',
	zIndex: 7,
}));

const BoxComposedImage = styled(Box)(() => ({
	position: 'absolute',
	left: 0,
	top: 0,
	zIndex: 5,
	filter: 'grayscale(80%)',
	backgroundSize: 'cover',
	height: '100%',
	width: '100%',
	borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
	position: 'absolute',
	left: 0,
	top: 0,
	zIndex: 6,
	height: '100%',
	width: '100%',
	borderRadius: 'inherit',
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
	background: 'transparent',
	transition: theme.transitions.create(['all']),
	color: alpha(theme.palette.common.white, 0.7),
	borderRadius: '50px',

	'&:hover': {
		background: 'transparent',
		color: theme.palette.common.white,
	},
}));

const LoginBanner = () => {
	return (
		<Grid item md={6} sm={3} xs={12}>
			<Box
				alignItems="center"
				display="flex"
				position="relative"
				sx={{
					width: '100%',
					position: 'relative',
					minHeight: '100%',
					background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
				}}
			>
				<CardActions alignItems="center" display="flex">
					<Tooltip arrow placement="left" title="Get in touch with support">
						<IconButtonWrapper
							sx={{
								ml: 0.5,
							}}
						>
							<HelpTwoToneIcon fontSize="small" />
						</IconButtonWrapper>
					</Tooltip>
				</CardActions>
				<BoxComposedBg
					sx={{
						opacity: 0.3,
						background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
					}}
				/>
				<BoxComposedImage
					sx={{
						opacity: 0.8,
						backgroundImage: (theme) =>
							theme.palette.mode === 'dark'
								? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders/covers/landscape4.png")`
								: `url("/placeholders/covers/landscape6.png")`,
					}}
				/>
				<BoxComposedContent
					alignItems="center"
					display="flex"
					flexDirection="column"
					flexGrow={1}
					px={{ xs: 0, sm: 3, lg: 6, xl: 8 }}
					py={{ xs: 2, sm: 3, lg: 6, xl: 8 }}
				>
					<Container
						maxWidth="sm"
						sx={{
							flexDirection: 'column',
							display: { xs: 'flex', sm: 'none', md: 'flex' },
						}}
					>
						<Box
							display="flex"
							justifyContent={{ xs: 'center', md: 'flex-start' }}
							sx={{
								'& > *': { transform: 'scale(1.3)' },
							}}
						>
							<Logo dark isLinkStatic />
						</Box>
						<Box display={{ xs: 'none', md: 'block' }}>
							<Typography color="common.white" gutterBottom sx={{ pt: 3 }} variant="h1">
								Discover Customized Solutions.
							</Typography>
							<Typography color="common.white" fontWeight={400} variant="h4">
								testStreamlined Processes, and Exclusive Insights Tailored for Your Business Success
							</Typography>
						</Box>
					</Container>
				</BoxComposedContent>
			</Box>
		</Grid>
	);
};

export { LoginBanner };
