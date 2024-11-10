import { Box, Rating, Typography } from '@mui/material';

import { Organization } from '@api/entities/organization';

import { OrgCauses } from './OrgCauses';
import { OrgProfileDescText } from './OrgProfileDescText';

type Props = {
	org: Organization;
};

const OrgProfileDescription = ({ org }: Props) => {
	if (!org) {
		return null;
	}

	return (
		<Box>
			<Box alignItems="center" display="flex" gap={1} mb={2}>
				<Rating
					defaultValue={Number(org?.userRating) || 0}
					precision={0.5}
					readOnly
					size="large"
					sx={{
						'& .MuiRating-iconFilled': {
							color: 'secondary.main',
						},
					}}
				/>
				<Typography color="text.secondary" sx={{ ml: 1, fontWeight: 500 }} variant="body2">
					{org?.userRating || 0} out of 5
				</Typography>
			</Box>

			<Typography
				component="h1"
				sx={{
					fontSize: { xs: '1.75rem', sm: '2.25rem' },
					fontWeight: 700,
					letterSpacing: '-0.01em',
					color: 'text.primary',
					mb: 1,
				}}
			>
				{org?.name}
			</Typography>
			<OrgCauses orgId={org.orgId} />
			<OrgProfileDescText description={org?.description} longDescription={org?.longDescription} />
		</Box>
	);
};

export { OrgProfileDescription };
