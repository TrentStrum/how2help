import { alpha, Box, styled } from '@mui/material';

export const BoxComposedContent = styled(Box)(() => ({
	position: 'relative',
	zIndex: 7,
}));

export const BoxComposedImage = styled(Box)(() => ({
	position: 'absolute',
	left: 0,
	top: 0,
	zIndex: 5,
	filter: 'grayscale(50%)',
	backgroundSize: 'cover',
	height: '100%',
	width: '100%',
	borderRadius: 'inherit',
}));

export const BoxComposedBg = styled(Box)(() => ({
	position: 'absolute',
	left: 0,
	top: 0,
	zIndex: 6,
	height: '100%',
	width: '100%',
	borderRadius: 'inherit',
}));

export const BoxItemWrapper = styled(Box)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	background:
		theme.palette.mode === 'dark'
			? alpha(theme.palette.neutral[25], 0.02)
			: theme.palette.neutral[25],
	border:
		theme.palette.mode === 'dark'
			? `2px solid ${theme.palette.neutral[800]}`
			: `2px solid ${theme.palette.neutral[100]}`,
	position: 'relative',
	paddingTop: theme.spacing(2),
	paddingBottom: theme.spacing(2),
	paddingLeft: theme.spacing(3),
	paddingRight: theme.spacing(2),
	width: '100%',

	'&::before': {
		content: "'.'",
		background: theme.palette.error.main,
		color: theme.palette.error.main,
		borderRadius: theme.shape.borderRadius,
		position: 'absolute',
		textAlign: 'center',
		width: theme.spacing(0.6),
		left: theme.spacing(0.7),
		height: '90%',
		top: '5%',
	},

	'&.wrapper-info::before': {
		background: theme.palette.info.main,
		color: theme.palette.info.main,
	},

	'&.wrapper-warning::before': {
		background: theme.palette.warning.main,
		color: theme.palette.warning.main,
	},
}));
