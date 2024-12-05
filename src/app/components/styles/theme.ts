import { alpha } from '@mui/material';

export const theme = {
	colors: {
		primary: {
			main: '#1264A3',
			light: '#2D7CD3',
			dark: '#0B4F8B',
		},
		secondary: {
			main: '#4A154B',
			light: '#611F5C',
			dark: '#350D36',
		},
		success: {
			main: '#007A5A',
			light: '#2D9D78',
			dark: '#00603F',
		},
		background: {
			default: '#F7F8FA',
			paper: '#FFFFFF',
			overlay: 'rgba(255, 255, 255, 0.98)',
		},
	},
	shadows: {
		card: '0 2px 8px rgba(0,0,0,0.08)',
		cardHover: '0 8px 16px rgba(0,0,0,0.12)',
		button: '0 2px 4px rgba(0,0,0,0.1)',
		buttonHover: '0 4px 8px rgba(0,0,0,0.15)',
		drawer: '0 0 20px rgba(0,0,0,0.1)',
	},
	transitions: {
		quick: 'all 0.15s ease-in-out',
		medium: 'all 0.25s ease-in-out',
		slow: 'all 0.35s ease-in-out',
	},
	blur: {
		light: {
			backdropFilter: 'blur(8px)',
			backgroundColor: alpha('#FFFFFF', 0.98),
		},
		dark: {
			backdropFilter: 'blur(8px)', 
			backgroundColor: alpha('#000000', 0.8),
		},
	},
	borderRadius: {
		small: '4px',
		medium: '8px',
		large: '12px',
		xl: '16px',
	},
};