import { Box, Typography } from '@mui/material';

interface Props {
	description?: string;
	longDescription?: string;
}

const OrgProfileDescText = ({ description, longDescription }: Props) => {
	if (!description && !longDescription) return null;

	return (
		<Box>
			<Box sx={{ mb: longDescription ? 3 : 0 }}>
				<Box alignItems="center" display="flex" gap={1} mb={1} />
				<Typography color="text.secondary" fontWeight={500} sx={{ pb: 1.5 }} variant="h5">
					{description}
				</Typography>
			</Box>

			<Box>
				<Typography color="text.secondary" fontWeight={500} sx={{ pb: 1.5 }} variant="h5">
					{longDescription}
				</Typography>
			</Box>
		</Box>
	);
};

export { OrgProfileDescText };
