import { CardActionArea, styled } from '@mui/material';

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
