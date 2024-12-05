import { createTheme, Theme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createContext, ReactNode, useState } from 'react';

interface ThemeContextType {
	toggleTheme: () => void;
	theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			// main: '#17594A',
			// main: '#2C7865',
			// main: '#0C2D57',
			// main: '#1E6F5C',
			// main:'#244855'
			// main: '#124076',
			// main: '#809A6F',
			// main: '#65647C',
			// main: '#51829B',
			main: '#607274',
		},
		secondary: {
			// main: '#fc6736',
			// main: '#DD5746',
			// main: '#e64833',
			// main: '#A25B5B',
			// main: '#F1D3B3',
			// main: '#F6995C',
			main: '#EC8F5E',
		},
		error: {
			main: '#c85c5c',
		},
		warning: {
			main: '#e6c229',
		},
		info: {
			main: '#00425A',
		},
		success: {
			main: '#47a992',
		},
		text: {
			primary: '#686D76',
		},
		background: {
			// paper: '#f3f6f7',
			// paper: '#f9fcfb',
			paper: '#EEEEEE',
			// paper: '#F8F1F1',
		},
	},
	components: {
		// MuiAppBar: {
		// 	styleOverrides: {
		// 		colorDefault: {
		// 			backgroundColor: '#689f38',
		// 			color: '#fff',
		// 		},
		// 	},
		// },
		// MuiTooltip: {
		// 	defaultProps: {
		// 		arrow: true,
		// 	},
		// },
		// MuiButtonBase: {
		// 	defaultProps: {
		// 		disableRipple: false,
		// 	},
		// },
		// MuiButton: {
		// 	defaultProps: {
		// 		size: 'small',
		// 	},
		// },
		// MuiButtonGroup: {
		// 	defaultProps: {
		// 		size: 'small',
		// 	},
		// },
		// MuiCheckbox: {
		// 	defaultProps: {
		// 		size: 'small',
		// 	},
		// },
		// MuiFab: {
		// 	defaultProps: {
		// 		size: 'small',
		// 	},
		// },
		// MuiFormControl: {
		// 	defaultProps: {
		// 		margin: 'dense',
		// 		size: 'small',
		// 	},
		// },
		// MuiFormHelperText: {
		// 	defaultProps: {
		// 		margin: 'dense',
		// 	},
		// },
		// MuiIconButton: {
		// 	defaultProps: {
		// 		size: 'small',
		// 	},
		// },
		// MuiInputBase: {
		// 	defaultProps: {
		// 		margin: 'dense',
		// 	},
		// },
		// MuiInputLabel: {
		// 	defaultProps: {
		// 		margin: 'dense',
		// 	},
		// },
		// MuiRadio: {
		// 	defaultProps: {
		// 		size: 'small',
		// 	},
		// },
		// MuiSwitch: {
		// 	defaultProps: {
		// 		size: 'small',
		// 	},
		// 	styleOverrides: {
		// 		root: {
		// 			width: 46,
		// 			height: 27,
		// 			padding: 0,
		// 			margin: 8,
		// 		},
		// 		switchBase: {
		// 			padding: 1,
		// 			'&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
		// 				transform: 'translateX(16px)',
		// 				color: '#fff',
		// 				'& + $track': {
		// 					opacity: 1,
		// 					border: 'none',
		// 				},
		// 			},
		// 		},
		// 		thumb: {
		// 			width: 24,
		// 			height: 24,
		// 		},
		// 		track: {
		// 			borderRadius: 13,
		// 			border: '1px solid #bdbdbd',
		// 			backgroundColor: '#fafafa',
		// 			opacity: 1,
		// 			transition:
		// 				'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		// 		},
		// 	},
		// },
		// MuiTextField: {
		// 	defaultProps: {
		// 		margin: 'dense',
		// 		size: 'small',
		// 	},
		// },
		// MuiList: {
		// 	defaultProps: {
		// 		dense: true,
		// 	},
		// },
		// MuiMenuItem: {
		// 	defaultProps: {
		// 		dense: true,
		// 	},
		// },
		// MuiTable: {
		// 	defaultProps: {
		// 		size: 'small',
		// 	},
		// },
	},
	shape: {
		borderRadius: 4,
	},
	spacing: 8,
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		// primary: {
		// 	main: '#1976d2',
		// },
		secondary: {
			main: '#fc6736',
		},
		error: {
			main: '#c85c5c',
		},
		warning: {
			main: '#e6c229',
		},
		info: {
			main: '#00425A',
		},
		success: {
			main: '#47a992',
		},
		text: {
			primary: '#686D76',
		},
		background: {
			paper: '#f3f6f7',
		},
	},

	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiButtonGroup: {
			defaultProps: {
				size: 'small',
			},
		},
		MuiFab: {
			defaultProps: {
				size: 'small',
			},
		},
		MuiFormControl: {
			defaultProps: {
				margin: 'dense',
				size: 'small',
			},
		},
		MuiFormHelperText: {
			defaultProps: {
				margin: 'dense',
			},
		},
		MuiInputBase: {
			defaultProps: {
				margin: 'dense',
			},
		},
		MuiInputLabel: {
			defaultProps: {
				margin: 'dense',
			},
		},
		MuiTextField: {
			defaultProps: {
				margin: 'dense',
				size: 'small',
			},
		},
		MuiList: {
			defaultProps: {
				dense: true,
			},
		},
	},
});

type ThemeProps = {
	children: ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeProps) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	let theme = lightTheme;

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);

		if (isDarkTheme) {
			theme = darkTheme;
		}
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};
