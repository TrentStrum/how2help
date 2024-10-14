import { Button, Card, Box, styled, alpha, Tabs } from '@mui/material';

export const ButtonIcon = styled(Button)(({ theme }) => ({
	minWidth: 0,
	padding: theme.spacing(1),

	'.MuiButton-startIcon': {
		margin: 0,
	},

	'&.MuiButton-sizeSmall': {
		padding: theme.spacing(0.638),
	},
}));

export const AvatarWrapper = styled(Card)(
	({ theme }) => `
    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`,
);

export const visuallyHidden = () => `
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  bottom: 0;
  left: 0;
`;

export const ButtonUploadWrapper = styled(Box)(
	({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;

      &:hover {
        background: ${theme.palette.primary.dark};
      }
    }
`,
);

export const VisuallyHiddenInputNative = styled('input')(visuallyHidden);

export const CardCover = styled(Card)(
	({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`,
);

export const CardCoverAction = styled(Box)(
	({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`,
);

export const TabsPills = styled(Tabs)(({ theme }) => ({
	overflow: 'visible',
	minHeight: 0,

	'.MuiTabs-flexContainer': {
		position: 'relative',
		zIndex: 6,
	},

	'.MuiTabs-scroller': {
		overflow: 'visible !important',
	},

	'.MuiTab-root': {
		padding: theme.spacing(1, 2),
		transition: theme.transitions.create(['color', 'background-color'], {
			duration: theme.transitions.duration.standard,
		}),
		fontWeight: 600,
		margin: theme.spacing(0),
		minHeight: 0,
		fontSize: 13,
		textTransform: 'uppercase',

		'&.Mui-selected': {
			color: theme.palette.secondary.main,
		},
	},
	'.MuiTabs-indicator': {
		height: 0,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',

		'&::after': {
			content: '""',
			height: 38,
			width: '100%',
			position: 'absolute',
			top: -38,
			borderRadius: theme.shape.borderRadius * 5,
			background: alpha(theme.palette.primary.main, 0.08),
		},
	},
}));
