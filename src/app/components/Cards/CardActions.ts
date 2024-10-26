import { Box, styled } from '@mui/material';

export const UserCardActions = styled(Box)(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(1.5),
	top: theme.spacing(1.5),
	zIndex: 7,
}));
