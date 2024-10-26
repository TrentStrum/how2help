import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import { Box, Stack, Typography } from '@mui/material';

import { AvatarState } from '../Avatar/Avatar-Style';

const AlertDialogContent = () => {
	return (
		<Stack
			alignItems={{ xs: 'center', sm: 'flex-start' }}
			direction={{ xs: 'column', sm: 'row' }}
			justifyContent="center"
			p={{ xs: 0, sm: 2 }}
			spacing={2}
		>
			<AvatarState
				isSoft
				state="error"
				sx={{
					width: 54,
					height: 54,
				}}
			>
				<WarningTwoToneIcon sx={{ fontSize: 24 }} />
			</AvatarState>
			<Box pt={{ xs: 0, sm: 0.5 }} textAlign={{ xs: 'center', sm: 'left' }}>
				<Typography gutterBottom variant="h3">
					You are about to permanently delete selected items
				</Typography>
				<Typography fontWeight={500} sx={{ pb: 2 }} variant="h5">
					Deleting these items will also remove all associated data.
				</Typography>
				<Typography color="text.secondary" fontWeight={400} variant="subtitle1">
					Please ensure you have backed up any necessary information before proceeding.
				</Typography>
			</Box>
		</Stack>
	);
};

export default AlertDialogContent;
