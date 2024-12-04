import type { PaletteOptions } from '@mui/material';
import { alpha } from '@mui/material/styles';

import { neutral } from '../colors';

export const createPalette = (): PaletteOptions => {
	return {
		background: {
			default: '#F8FAFC',
			paper: '#FFFFFF',
		},
		divider: alpha(neutral[200], 0.8),
		primary: {
			main: '#0EA5E9',
			light: '#38BDF8',
			dark: '#0284C7',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#F43F5E',
			light: '#FB7185',
			dark: '#E11D48',
			contrastText: '#FFFFFF',
		},
		success: {
			main: '#2E7D32',
			light: '#4CAF50',
			dark: '#1B5E20',
			contrastText: '#FFFFFF',
		},
		error: {
			main: '#D32F2F',
			light: '#EF5350',
			dark: '#C62828',
			contrastText: '#FFFFFF',
		},
		warning: {
			main: '#F57C00',
			light: '#FFB74D',
			dark: '#E65100',
			contrastText: '#FFFFFF',
		},
		info: {
			main: '#0288D1',
			light: '#03A9F4',
			dark: '#01579B',
			contrastText: '#FFFFFF',
		},
		text: {
			primary: '#0F172A',
			secondary: '#475569',
			disabled: alpha('#1A2027', 0.38),
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
