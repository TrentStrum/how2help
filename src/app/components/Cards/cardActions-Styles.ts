import { Box, styled } from '@mui/material';

export const UserCardActions = styled(Box)(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(1.5),
	top: theme.spacing(1.5),
	zIndex: 7,
}));

export const RegisterCardActions = styled(Box)(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(1),
	top: theme.spacing(1),
	zIndex: 12,
}));
