import { SPACING_UNIT } from "../utils";
import type { Components } from '@mui/material/styles/components';

// defines specific components that are being modified for this app. Modifications set here are then called into the overarching createOptions file

export const createComponents = (): Components => {
	return {
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					padding: 0,
					minWidth: 0,
					marginLeft: SPACING_UNIT * 1.5,
					marginRight: SPACING_UNIT * 1.5,
					fontWeight: 500,

					'&:first-of-type': {
						marginLeft: 0,
					},

					'&:last-of-type': {
						marginRight: 0,
					},
				},
			},
		},
		MuiTabs: {
			styleOverrides: {
				root: {
					'& + .MuiDivider-root': {
						marginTop: '-1px',
					},
				},

				indicator: {
					borderRadius: 12,
				},
			},
		},
	};
};
