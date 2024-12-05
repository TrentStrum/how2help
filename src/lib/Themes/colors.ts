import { darken, getContrastRatio, lighten, type NeutralColors } from '@mui/material/styles';

export type ThemeColor = {
	main: string;
	light: string;
	dark: string;
	darkest: string;
	contrastText: string;
};

export type ThemeColors = {
	[key: string]: ThemeColor;
	forestGreen: ThemeColor;
	peach: ThemeColor;
	ultraViolet: ThemeColor;
	roseQuartz: ThemeColor;
	radiantOrchid: ThemeColor;
	tangerineTango: ThemeColor;
	emerald: ThemeColor;
	honeyGold: ThemeColor;
	monacoBlue: ThemeColor;
	darkViolet: ThemeColor;
	royalBlue: ThemeColor;
	success: ThemeColor;
	info: ThemeColor;
	warning: ThemeColor;
	error: ThemeColor;
};

const common = {
	white: '#ffffff',
	black: '#151821',
	neutral: '#14191e',
};

const baseColors = [
	{ name: 'forestGreen', value: '#0EA5E9' },
	{ name: 'peach', value: '#F43F5E' },
	{ name: 'ultraViolet', value: '#8B5CF6' },
	{ name: 'emerald', value: '#10B981' },
	{ name: 'monacoBlue', value: '#3B82F6' },
	{ name: 'royalBlue', value: '#2563EB' },
	{ name: 'roseQuartz', value: '#EC4899' },
	{ name: 'radiantOrchid', value: '#A855F7' },
	{ name: 'tangerineTango', value: '#F97316' },
	{ name: 'honeyGold', value: '#FBBF24' },
	{ name: 'darkViolet', value: '#7C3AED' },
	{ name: 'success', value: '#10B981' },
	{ name: 'info', value: '#0EA5E9' },
	{ name: 'warning', value: '#F97316' },
	{ name: 'error', value: '#EF4444' },
];

export const adjustColorForLightTheme = (color: string) => color;
export const adjustColorForDarkTheme = (color: string) => lighten(color, 0.26);

export const generateColorScale = (mainColor: string, theme: 'light' | 'dark') => {
	const adjustedMainColor =
		theme === 'light' ? adjustColorForLightTheme(mainColor) : adjustColorForDarkTheme(mainColor);

	const contrastRatioWithWhite = getContrastRatio(adjustedMainColor, common.white);
	const contrastText = contrastRatioWithWhite >= 4.4 ? common.white : common.black;

	return {
		light: lighten(adjustedMainColor, 0.3),
		main: adjustedMainColor,
		dark: darken(adjustedMainColor, 0.1),
		darkest: darken(adjustedMainColor, 0.4),
		contrastText,
	};
};

export const generateThemeColors = (): {
	light: ThemeColors;
	dark: ThemeColors;
} => {
	const themeColors: { light: ThemeColors; dark: ThemeColors } = {
		light: {} as ThemeColors,
		dark: {} as ThemeColors,
	};

	baseColors.forEach((color) => {
		themeColors.light[color.name] = generateColorScale(color.value, 'light');
		themeColors.dark[color.name] = generateColorScale(color.value, 'dark');
	});

	return themeColors;
};

export const neutral: NeutralColors = {
	25: lighten(common.neutral, 0.98),
	50: lighten(common.neutral, 0.96),
	100: lighten(common.neutral, 0.93),
	200: lighten(common.neutral, 0.9),
	300: lighten(common.neutral, 0.85),
	400: lighten(common.neutral, 0.77),
	500: lighten(common.neutral, 0.68),
	600: lighten(common.neutral, 0.5),
	700: lighten(common.neutral, 0.4),
	800: lighten(common.neutral, 0.2),
	900: common.neutral,
};

const { light: lightThemeColors, dark: darkThemeColors } = generateThemeColors();

export const lightTheme: ThemeColors = lightThemeColors;
export const darkTheme: ThemeColors = darkThemeColors;
