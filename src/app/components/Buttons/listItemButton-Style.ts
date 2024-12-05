import { ListItemButton, styled } from '@mui/material';
import { ReactNode } from 'react';

type ButtonColor = 'primary' | 'error' | 'success' | 'secondary' | 'warning' | 'info';

interface ButtonColorProps {
	color?: ButtonColor;
	children?: ReactNode;
}

export const ListItemButtonMod = styled(ListItemButton)<ButtonColorProps>(({ theme }) => {
	return {
		p: '1px',
		flexDirection: 'column',
		borderRadius: 'inherit',
		boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
		background: theme.palette.mode === 'dark' ? 'black' : 'gray',

		'&:hover': {
			backgroundColor: 'background.paper',
			boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
		},

		'&.Mui-selected': {
			backgroundColor: 'background.paper',
			boxShadow: `0 0 0 2px ${theme.palette.primary.main} inset`,

			'&:hover': {
				backgroundColor: 'background.paper',
			},
		},
	};
});
