import { Box, Card, Container, Divider, Tab, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetOrgById } from '@api/entities/organization';
import { ProfileCalendar } from '@app/features/Event/components/ProfileCalendar';
import { OrgReviewsContainer } from '@app/features/Review/components/OrgReviewsContainer';

import { OrgActivitySearch } from './OrgActivitySearch';
import { OrgProfileDescription } from './OrgProfileDescription';
import { HeroImage } from '../../../components/Hero/HeroImage';
import { TabStyle } from '../../../components/Tabs/Tabs-Style';
import { SideBySideLayout } from '../../../layouts/SideBySideLayout';

const OrgProfile = () => {
	const { orgId } = useParams();
	const { data: org, isPending, isError, error } = useGetOrgById(Number(orgId));
	const [tabValue, setTabValue] = useState('0');

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const OrgLeftContent = <HeroImage height={600} imageSource={org?.avatarImageUrl} />;
	const OrgRightContent = <OrgProfileDescription org={org} />;

	const handleTabChange = (event: unknown, newValue: number) => {
		setTabValue(String(newValue));
	};

	let displayTab: ReactNode;

	if (tabValue === '0' && org) {
		displayTab = <OrgActivitySearch orgId={org.orgId.toString()} />;
	} else if (tabValue === '1' && org) {
		displayTab = (
			<ProfileCalendar entity={org} entityId={org.orgId.toString()} entityType="Organization" />
		);
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
				<Box p={1}>
					<TabStyle centered onChange={handleTabChange} value={Number(tabValue)}>
						<Tab label="Get Involved" />
						<Tab label="Events" />
						<Tab label="Reviews" />
						<Tab label="Additional Info" />
					</TabStyle>
				</Box>
				<Divider />
				<Container maxWidth="lg" sx={{ pt: 1 }}>
					{displayTab}
				</Container>
			</Card>
		</Container>
	);
};

export { OrgProfile };
