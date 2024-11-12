import { Box } from '@mui/material';

import { Organization } from '@api/entities/organization';
import { SideBySideLayout } from '@app/layouts';

import { OrgProfileBanner, OrgProfileDescription } from '.';

interface Props {
	org: Organization;
}

const OrgProfileHeader = ({ org }: Props) => {
	return (
		<Box>
			<SideBySideLayout
				leftSideContent={<OrgProfileBanner org={org} />}
				rightSideContent={<OrgProfileDescription org={org} />}
			/>
		</Box>
	);
};

export { OrgProfileHeader };
