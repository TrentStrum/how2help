import { Button, Tab, styled } from '@mui/material';
import { commonButtonTabStyles } from './common';

export const StyledTab = styled(Tab)(({ theme }) => ({
	...commonButtonTabStyles(theme),
	overflow: 'visible',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
	...commonButtonTabStyles(theme),
}));