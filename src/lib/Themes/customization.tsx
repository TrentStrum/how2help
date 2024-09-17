import type { Direction, PaletteMode } from '@mui/material';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { ColorPreset } from '.';


export interface Customization {
	colorPreset?: ColorPreset;
	direction?: Direction;
	paletteMode?: PaletteMode;
	stretch?: boolean;
}

const STORAGE_KEY = 'uifort.customization';

const restoreCustomization = (): Customization | null => {
	let value = null;

	try {
		const restored: string | null = window.localStorage.getItem(STORAGE_KEY);

		if (restored) {
			value = JSON.parse(restored);
		}
	} catch (err) {
		console.error(err);
	}

	return value;
};

const deleteCustomization = (): void => {
	try {
		window.localStorage.removeItem(STORAGE_KEY);
	} catch (err) {
		console.error(err);
	}
};

const storeCustomization = (value: Customization): void => {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
	} catch (err) {
		console.error(err);
	}
};

const initialCustomization: Customization = {
	colorPreset: 'forestGreen',
	direction: 'ltr',
	paletteMode: 'light',
	stretch: false,
};

interface State extends Customization {
	isInitialized: boolean;
}

const initialState: State = {
	...initialCustomization,
	isInitialized: false,
};

export interface CustomizationContextType extends State {
	handleReset: () => void;
	handleUpdate: (updates: Partial<Customization>) => void;
	isCustom: boolean;
}

export const CustomizationContext = createContext<CustomizationContextType>({
	...initialState,
	handleReset: () => {},
	handleUpdate: () => {},
	isCustom: false,
});

interface CustomizationProviderProps {
	children?: ReactNode;
	onReset?: () => void;
	onUpdate?: (settings: Customization) => void;
	settings?: Customization;
}

export const CustomizationProvider = (props: CustomizationProviderProps) => {
	const { children } = props;
	const [state, setState] = useState<State>(initialState);

	useEffect(() => {
		const restored = restoreCustomization();

		if (restored) {
			setState((prevState) => ({
				...prevState,
				...restored,
				isInitialized: true,
			}));
		}
	}, []);

	const handleReset = useCallback((): void => {
		deleteCustomization();
		setState((prevState) => ({
			...prevState,
			...initialCustomization,
		}));
	}, []);

	const handleUpdate = useCallback((updates: Partial<Customization>): void => {
		setState((prevState) => {
			const updatedState = { ...prevState, ...updates };
			storeCustomization(updatedState);
			return updatedState;
		});
	}, []);

	const isCustom = useMemo(() => {
		return !isEqual(initialCustomization, {
			colorPreset: state.colorPreset,
			direction: state.direction,
			paletteMode: state.paletteMode,
			stretch: state.stretch,
		});
	}, [state]);

	return (
		<CustomizationContext.Provider
			value={{
				...state,
				handleReset,
				handleUpdate,
				isCustom,
			}}
		>
			{children}
		</CustomizationContext.Provider>
	);
};

CustomizationProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const CustomizationConsumer = CustomizationContext.Consumer;

