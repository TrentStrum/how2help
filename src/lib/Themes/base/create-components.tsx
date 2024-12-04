import type { Components } from '@mui/material/styles/components';

// defines specific components that are being modified for this app.
// Modifications set here are then called into the overarching createOptions file

export const createComponents = (): Components => {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: '10px',
					fontWeight: 600,
					padding: '10px 24px',
					fontSize: '1rem',
					transition: 'all 0.2s ease-in-out',
					'&:hover': {
						transform: 'translateY(-2px)',
							boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
					},
				},
				contained: {
					background: 'linear-gradient(45deg, #0EA5E9 30%, #38BDF8 90%)',
					color: '#FFFFFF',
					boxShadow: '0 4px 6px rgba(14, 165, 233, 0.25)',
					'&:hover': {
						background: 'linear-gradient(45deg, #0284C7 30%, #0EA5E9 90%)',
						boxShadow: '0 6px 12px rgba(14, 165, 233, 0.35)',
					},
				},
				outlined: {
					borderWidth: '2px',
					borderColor: '#FFFFFF',
					color: '#FFFFFF',
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(8px)',
					'&:hover': {
						borderWidth: '2px',
						backgroundColor: 'rgba(255, 255, 255, 0.2)',
						borderColor: '#FFFFFF',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: '16px',
					boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
					'&:hover': {
						transform: 'translateY(-4px)',
						boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
					},
					transition: 'all 0.3s ease-in-out',
					overflow: 'hidden',
					border: '1px solid rgba(0,0,0,0.05)',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: '12px',
						backgroundColor: 'rgba(255,255,255,0.8)',
						backdropFilter: 'blur(8px)',
						transition: 'all 0.2s',
						'&:hover': {
							backgroundColor: 'rgba(255,255,255,0.9)',
						},
						'&.Mui-focused': {
							backgroundColor: '#ffffff',
							boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
						},
					},
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(255,255,255,0.8)',
					backdropFilter: 'blur(8px)',
					boxShadow: 'none',
					borderBottom: '1px solid rgba(0,0,0,0.05)',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: '16px',
					transition: 'all 0.2s ease-in-out',
				},
				elevation1: {
					boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
				},
				elevation2: {
					boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
					fontWeight: 500,
					'&.MuiChip-filled': {
						backgroundColor: 'rgba(14,165,233,0.1)',
						color: '#0EA5E9',
					},
				},
			},
		},
		MuiAvatar: {
			styleOverrides: {
				root: {
					boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
					border: '2px solid #ffffff',
				},
			},
		},
	};
};
