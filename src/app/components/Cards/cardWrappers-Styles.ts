import { alpha, Card, CardActionArea, styled } from '@mui/material';

export const CardActionAreaWrapper = styled(CardActionArea)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	position: 'relative',

	'.MuiTouchRipple-root': {
		opacity: 0.3,
	},

	'.MuiCardActionArea-focusHighlight': {
		background: theme.palette.common.white,
	},

	'&:hover': {
		'.MuiCardActionArea-focusHighlight': {
			opacity: 0.1,
		},
	},
}));

export const UserCardWrapper = styled(Card)(
	({ theme }) => `

  position: relative;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    z-index: 1;
  }

    &.Mui-selected::after {
      box-shadow: 0 0 0 3px ${theme.palette.primary.main};
    }
  `,
);

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
