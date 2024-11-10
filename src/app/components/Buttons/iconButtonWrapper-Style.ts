import { alpha, IconButton, styled } from '@mui/material';

export const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
	mr: 1.5,
	background: theme.palette.primary.main,
	color: theme.palette.primary.contrastText,
	transform: 'translateY(0px)',

	'.MuiSvgIcon-root': {
		transform: 'scale(1)',
	},

	'&:hover': {
		transform: 'translateY(-2px)',
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,

		'.MuiSvgIcon-root': {
			transform: 'scale(1.3)',
		},
	},
}));

export const RegisterIconButtonWrapper = styled(IconButton)(({ theme }) => ({
	background: 'transparent',
	transition: theme.transitions.create(['all']),
	color: alpha(theme.palette.common.white, 0.7),
	borderRadius: '50px',

	'&:hover': {
		background: 'transparent',
		color: theme.palette.common.white,
	},
}));
