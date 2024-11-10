import { alpha, IconButton, styled } from '@mui/material';

export const SwipeIndicator = styled(IconButton)(({ theme }) => ({
	color: alpha(theme.palette.common.black, 0.5),
	width: theme.spacing(4),
	height: theme.spacing(4),

	'&:hover:not(.swiper-button-disabled)': {
		color: theme.palette.primary.main,
		background: alpha(theme.palette.primary.main, 0.1),
	},

	'&.swiper-button-disabled': {
		opacity: 0.3,
		cursor: 'disabled',

		'&:hover': {
			background: 'none',
			color: theme.palette.neutral[400],
		},
	},
}));
