import { styled } from '@mui/material';

export const DotLegend = styled('span')(({ theme }) => ({
	borderRadius: theme.spacing(1.5),
	width: theme.spacing(1.5),
	height: theme.spacing(1.5),
	display: 'inline-block',
	marginRight: theme.spacing(1),
	marginTop: theme.spacing(-0.1),
	background: theme.palette.success.main,
}));
