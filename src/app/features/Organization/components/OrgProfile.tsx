import { Box, Card, Container, Divider, Tab, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetOrgById } from '@api/entities/organization';
import { ActivityContainer } from '@app/features/Activity';
import { EventContainer } from '@app/features/Event/components/EventContainer';
import { OrgReviewsContainer } from '@app/features/Review/components/OrgReviewsContainer';

import { OrgProfileDescription } from './OrgProfileDescription';
import { HeroImage } from '../../../components/Hero/HeroImage';
import { TabStyle } from '../../../components/Tabs/TabsStyle';
import { SideBySideLayout } from '../../../layouts/SideBySideLayout';

const OrgProfile = () => {
	const { orgId } = useParams();
	const { data: org, isLoading, isError } = useGetOrgById(Number(orgId));
	const [tabValue, setTabValue] = useState('0');

	const OrgLeftContent = <HeroImage height={600} imageSource={org?.avatarImageUrl} />;
	const OrgRightContent = <OrgProfileDescription org={org} />;

	const handleTabChange = (event: unknown, newValue: number) => {
		setTabValue(String(newValue));
	};

	if (isLoading) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

	let displayTab: ReactNode;

	if (tabValue === '0' && org) {
		displayTab = <ActivityContainer />;
	} else if (tabValue === '1' && org) {
		displayTab = <EventContainer entityId={org.orgId.toString()} entityName={org.name} />;
	} else if (tabValue === '2' && org) {
		displayTab = <OrgReviewsContainer org={org} />;
	} else {
		displayTab = <p>Error...</p>;
	}

	return (
		<Container sx={{ marginTop: '50px' }}>
			<Card>
				<SideBySideLayout leftSideContent={OrgLeftContent} rightSideContent={OrgRightContent} />
				<Divider />
				<Box p={2}>
					<TabStyle centered onChange={handleTabChange} value={Number(tabValue)}>
						<Tab label="Get Involved" />
						<Tab label="Events" />
						<Tab label="Reviews" />
						<Tab label="Additional Info" />
					</TabStyle>
				</Box>
				<Divider />
				<Container maxWidth="lg">{displayTab}</Container>
			</Card>
		</Container>
	);
};

export { OrgProfile };
