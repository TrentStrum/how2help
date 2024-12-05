import type { Components } from '@mui/material/styles/components';

export const createComponents = (): Components => {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: '8px',
					fontWeight: 600,
					padding: '10px 20px',
					fontSize: '0.9375rem',
					transition: 'all 0.2s ease-in-out',
					'&:hover': {
						transform: 'translateY(-1px)',
						boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
					},
				},
				contained: {
					background: 'linear-gradient(45deg, #1264A3 30%, #2D7CD3 90%)',
					boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
					'&:hover': {
						background: 'linear-gradient(45deg, #0B4F8B 30%, #1264A3 90%)',
					},
				},
				outlined: {
					borderWidth: '1.5px',
					'&:hover': {
						borderWidth: '1.5px',
						backgroundColor: 'rgba(18, 100, 163, 0.04)',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: '12px',
					boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
					transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
					border: '1px solid rgba(0,0,0,0.08)',
					'&:hover': {
						transform: 'translateY(-4px)',
						boxShadow: '0 8px 16px rgba(0,0,0,0.12)',
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: '8px',
						transition: 'all 0.2s',
						backgroundColor: '#FFFFFF',
						'&:hover': {
							backgroundColor: 'rgba(0,0,0,0.02)',
						},
						'&.Mui-focused': {
							boxShadow: '0 0 0 2px rgba(18, 100, 163, 0.2)',
						},
					},
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(255,255,255,0.98)',
					backdropFilter: 'blur(8px)',
					boxShadow: 'none',
					borderBottom: '1px solid rgba(0,0,0,0.08)',
				},
			},
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
					borderRadius: 0,
					borderRight: '1px solid rgba(0,0,0,0.08)',
					backgroundColor: 'rgba(255,255,255,0.98)',
					backdropFilter: 'blur(8px)',
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: '6px',
					height: '28px',
					fontSize: '0.8125rem',
					fontWeight: 500,
					'&.MuiChip-outlined': {
						borderColor: 'rgba(18, 100, 163, 0.5)',
					},
				},
			},
		},
		MuiAvatar: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
				},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					backgroundColor: 'rgba(0,0,0,0.9)',
					padding: '8px 12px',
					fontSize: '0.8125rem',
					borderRadius: '4px',
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: '12px',
					boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
			},
		},
	};
};