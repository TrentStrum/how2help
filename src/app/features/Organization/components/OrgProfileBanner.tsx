import { Box } from '@mui/material';

import { Organization } from '@api/entities/organization';
import { HeroImage } from '@app/components/Hero';
import { SideBySideLayout } from '@app/layouts';

import { OrgProfileDescription } from '.';

interface Props {
	org: Organization;
}

const OrgProfileBanner = ({ org }: Props) => {
	return (
		<Box>
			<SideBySideLayout
				leftSideContent={<HeroImage height={600} imageSource={org?.avatarImageUrl} />}
				rightSideContent={<OrgProfileDescription org={org} />}
			/>
		</Box>
	);
};

export { OrgProfileBanner };
