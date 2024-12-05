import { Box, Container, Tab, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import { useGetCauseById } from '@api/entities/cause';
import { TabStyle } from '@app/components/Tabs';
import { TabPanel } from '@app/components/Tabs/TabPanel';

import { CAUSE_TAB_CONFIG } from './CAUSE_TAB_CONFIG';
interface Props {
	causeId: number;
}

const CauseProfileTabs = ({ causeId }: Props) => {
	const [activeTab, setActiveTab] = useState(0);
	const { data: cause, isPending, isError, error } = useGetCauseById(causeId);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const handleTabChange = (_: SyntheticEvent, newValue: number) => {
		setActiveTab(newValue);
	};

	return (
		<Box>
			<TabStyle centered onChange={handleTabChange} value={activeTab}>
				{CAUSE_TAB_CONFIG.map((tab: { id: string; label: string }) => (
					<Tab key={tab.id} label={tab.label} />
				))}
			</TabStyle>

			<Container maxWidth="lg" sx={{ mt: 4 }}>
				{CAUSE_TAB_CONFIG.map((tab, index) => (
					<TabPanel index={index} key={tab.id} value={activeTab}>
						<tab.Component entityId={cause.causeId.toString()} />
					</TabPanel>
				))}
			</Container>
		</Box>
	);
};

export { CauseProfileTabs };
