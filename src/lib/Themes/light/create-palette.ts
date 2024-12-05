import type { PaletteOptions } from '@mui/material';
import { alpha } from '@mui/material/styles';

import { neutral } from '../colors';

export const createPalette = (): PaletteOptions => {
	return {
		background: {
			default: '#F7F8FA',
			paper: '#FFFFFF',
		},
		divider: alpha(neutral[200], 0.8),
		primary: {
			main: '#1264A3',
			light: '#2D7CD3',
			dark: '#0B4F8B',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#4A154B',
			light: '#611F5C',
			dark: '#350D36',
			contrastText: '#FFFFFF',
		},
		success: {
			main: '#007A5A',
			light: '#2D9D78',
			dark: '#00603F',
			contrastText: '#FFFFFF',
		},
		error: {
			main: '#DC2626',
			light: '#EF4444',
			dark: '#B91C1C',
			contrastText: '#FFFFFF',
		},
		warning: {
			main: '#F59E0B',
			light: '#FBBF24',
			dark: '#D97706',
			contrastText: '#FFFFFF',
		},
		info: {
			main: '#0EA5E9',
			light: '#38BDF8',
			dark: '#0284C7',
			contrastText: '#FFFFFF',
		},
		text: {
			primary: '#1D1C1D',
			secondary: '#616061',
			disabled: alpha('#1D1C1D', 0.38),
		},
		action: {
			active: alpha(neutral[900], 0.54),
			hover: alpha(neutral[900], 0.04),
			selected: alpha(neutral[900], 0.08),
			disabled: alpha(neutral[900], 0.26),
			disabledBackground: alpha(neutral[900], 0.12),
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
		mode: 'light',
		neutral,
	};
};