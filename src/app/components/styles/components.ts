import { alpha } from '@mui/material';
import { theme } from './theme';

export const componentStyles = {
	card: {
		borderRadius: theme.borderRadius.large,
		boxShadow: theme.shadows.card,
		transition: theme.transitions.medium,
		border: '1px solid rgba(0,0,0,0.08)',
		backgroundColor: theme.colors.background.paper,
		'&:hover': {
			transform: 'translateY(-4px)',
			boxShadow: theme.shadows.cardHover,
		},
	},

	button: {
		textTransform: 'none',
		borderRadius: theme.borderRadius.medium,
		fontWeight: 600,
		transition: theme.transitions.quick,
		'&:hover': {
			transform: 'translateY(-1px)',
		},
		'&.MuiButton-contained': {
			background: `linear-gradient(45deg, ${theme.colors.primary.main} 30%, ${theme.colors.primary.light} 90%)`,
			boxShadow: theme.shadows.button,
			'&:hover': {
				background: `linear-gradient(45deg, ${theme.colors.primary.dark} 30%, ${theme.colors.primary.main} 90%)`,
				boxShadow: theme.shadows.buttonHover,
			},
		},
	},

	input: {
		'& .MuiOutlinedInput-root': {
			borderRadius: theme.borderRadius.medium,
			transition: theme.transitions.quick,
			backgroundColor: alpha(theme.colors.background.paper, 0.8),
			'&:hover': {
				backgroundColor: alpha(theme.colors.background.paper, 0.9),
			},
			'&.Mui-focused': {
				backgroundColor: theme.colors.background.paper,
				boxShadow: `0 0 0 2px ${alpha(theme.colors.primary.main, 0.2)}`,
			},
		},
	},

	appBar: {
		...theme.blur.light,
		boxShadow: 'none',
		borderBottom: '1px solid rgba(0,0,0,0.08)',
	},

	drawer: {
		'& .MuiDrawer-paper': {
			borderRadius: `0 ${theme.borderRadius.xl} ${theme.borderRadius.xl} 0`,
			boxShadow: theme.shadows.drawer,
			...theme.blur.light,
		},
	},
};