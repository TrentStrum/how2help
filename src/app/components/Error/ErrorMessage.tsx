import { Box, Typography } from '@mui/material';

interface IErrorMessageProps {
	message: string;
}

export const ErrorMessage = ({ message }: IErrorMessageProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				p: 4,
				textAlign: 'center',
			}}
		>
			<Typography color="error" variant="h6">
				{message}
			</Typography>
		</Box>
	);
};
