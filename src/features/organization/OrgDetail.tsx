import { Box, Card, Container, Divider, Tab, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useState } from 'react';
import { HeroImage } from '../utils/HeroImage';
import { useGetOrgById } from '../../api/hooks/organization/useGetOrgById';
import { SideBySideLayout } from '../../app/layouts/SideBySideLayout';
import { OrgAvailableActions } from './OrgAvailableActions';
import { OrgProfileDescription } from './OrgProfileDescription';
import { TabStyle } from '../utils/TabsStyle';
import { OrgReviewsLayout } from '../reviews/OrgReviewsLayout';




const OrgDetail = () => {
	const { orgId } = useParams();
	const { data: org, isLoading, isError } = useGetOrgById(Number(orgId));
	const OrgLeftContent = <HeroImage imageSource={org?.avatarImageUrl} />;
	const OrgRightContent = <OrgProfileDescription org={org} />;
	    const [tabValue, setTabValue] = useState('0');

		const handleTabChange = (event: unknown, newValue: number) => {
			setTabValue(String(newValue));
		};

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<>
			<Container sx={{ marginTop: '50px' }}>
				<Card>
					<SideBySideLayout
						leftSideContent={OrgLeftContent}
						rightSideContent={OrgRightContent}
					/>
					<Divider />
					<Box p={2}>
						<TabStyle
							value={Number(tabValue)}
							onChange={handleTabChange}
							centered
						>
							<Tab label='Reviews' />
							<Tab label='Additional Info' />
						</TabStyle>
					</Box>
					<Divider />
					<Container maxWidth='lg'>
						{tabValue === '0' && org ? <OrgReviewsLayout org={org} /> : <p>Error...</p>}
						{tabValue === '1' && <OrgAvailableActions />}
					</Container>
				</Card>
			</Container>
		</>
	);
};

export { OrgDetail };
