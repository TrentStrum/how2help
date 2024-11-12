import { Box, Container, Tab, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import { useGetOrgById } from '@api/entities/organization';
import { TabStyle } from '@app/components/Tabs';
import { ORG_TAB_CONFIG } from '@app/components/Tabs/tabConfig';

import { TabPanel } from '../../../components/Tabs/TabPanel';

interface Props {
	orgId: number;
}

const OrgProfileTabs = ({ orgId }: Props) => {
	const [activeTab, setActiveTab] = useState(0);
	const { data: org, isPending, isError, error } = useGetOrgById(orgId);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const handleTabChange = (_: SyntheticEvent, newValue: number) => {
		setActiveTab(newValue);
	};

	return (
		<Box>
			<TabStyle centered onChange={handleTabChange} value={activeTab}>
				{ORG_TAB_CONFIG.map((tab) => (
					<Tab key={tab.id} label={tab.label} />
				))}
			</TabStyle>

			<Container maxWidth="lg" sx={{ mt: 4 }}>
				{ORG_TAB_CONFIG.map((tab, index) => (
					<TabPanel index={index} key={tab.id} value={activeTab}>
						<tab.Component entity={org} entityId={org.orgId.toString()} />
					</TabPanel>
				))}
			</Container>
		</Box>
	);
};

export { OrgProfileTabs };
