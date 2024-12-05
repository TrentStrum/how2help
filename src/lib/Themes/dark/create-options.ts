import type { ThemeOptions } from '@mui/material/styles/createTheme';

import type { ColorPreset } from '../index';
import { createComponents } from './create-components';
import { createPalette } from './create-palette';
import { createShadows } from './create-shadows';

interface OptionsConfig {
	colorPreset?: ColorPreset;
}

export const createOptions = ({ colorPreset }: OptionsConfig): ThemeOptions => {
	const palette = createPalette({ colorPreset });
	const shadows = createShadows({ palette });
	const components = createComponents({ palette });

	return {
		components,
		palette,
		shadows,
	};
};
