import { Tabs, styled } from '@mui/material';

export const TabStyle = styled(Tabs)(({ theme }) => ({
	overflow: 'visible',
	minHeight: 0,

	'.MuiTabs-flexContainer': {
		position: 'relative',
		zIndex: 6,
	},

	'.MuiTabs-scroller': {
		overflow: 'visible !important',
	},

	'.MuiTab-root': {
		padding: theme.spacing(1, 2),
		transition: theme.transitions.create(['color', 'background-color'], {
			duration: theme.transitions.duration.standard,
		}),
		minHeight: 0,
		height: 44,
		fontWeight: 600,
		margin: theme.spacing(0, 0.5),

		'&.Mui-selected': {
			color: theme.palette.primary.contrastText,
		},
	},
	'.MuiTabs-indicator': {
		height: 0,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',

		'&::after': {
			content: '""',
			height: 44,
			width: '100%',
			position: 'absolute',
			top: -44,
			borderRadius: 'inherit',
			background: theme.palette.primary.main,
			boxShadow: theme.shadows[1],
		},
	},
}));
