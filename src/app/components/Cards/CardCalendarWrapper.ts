import { Card, IconButton, alpha, styled } from '@mui/material';

export const CardCalendarWrapper = styled(Card)(({ theme }) => ({
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
	color: theme.palette.common.white,

	'.MuiPickersLayout-root': {
		background: 'transparent',
		fontSize: '18px',
	},
	'.MuiTypography-root': {
		fontSize: '14px',
	},
	'.MuiPickersCalendarHeader-label': {
		fontSize: '18px',
	},
	'.MuiSvgIcon-root': {
		fontSize: '16px',
	},

	// MuiSvgIcon-fontSizeInherit MuiPickersArrowSwitcher-leftArrowIcon

	'.MuiPickersLayout-yearButton, .MuiPickersLayout-yearButton, .MuiIconButton-root, .MuiPickersDay-root, ':
		{
			color: theme.palette.common.white,
			borderRadius: theme.shape.borderRadius,
			fontSize: '10px',
			'&:hover': {
				background:
					theme.palette.mode === 'dark'
						? alpha(theme.palette.common.white, 0.04)
						: alpha(theme.palette.common.white, 0.1),
			},
		},
}));

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
