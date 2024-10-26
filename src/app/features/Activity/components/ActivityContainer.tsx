import {
	alpha,
	Card,
	CardContent,
	CardHeader,
	Divider,
	MenuItem,
	Select,
	SelectChangeEvent,
	Tabs,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

import { Organization } from '@api/entities/organization';
import BaseButtonTab from '@app/components/Buttons/BaseButtonTab';
import { OrgActivitiesTab } from '@app/features/Organization';

type Props = {
	org: Organization;
};

const ActivityContainer = ({ org }: Props) => {
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const currentDate = new Date().setHours(0, 0, 0, 0);

	const openOpportunities = org.Activities?.filter((activity) => {
		const startDate = new Date(activity.startDate).setHours(0, 0, 0, 0);
		const endDate = new Date(activity.endDate).setHours(0, 0, 0, 0);

		return startDate <= currentDate && endDate >= currentDate;
	});

	const upcomingOpportunities = org.Activities?.filter((activity) => {
		const startDate = new Date(activity.startDate).setHours(0, 0, 0, 0);
		return startDate >= currentDate;
	});
	const pastOpportunities = org.Activities?.filter((activity) => {
		const endDate = new Date(activity.endDate).setHours(0, 0, 0, 0);

		return endDate <= currentDate;
	});

	const [currentTab, setCurrentTab] = useState<number>(0);

	const tabs = [
		{ value: 0, label: 'All activities' },
		{ value: 1, label: 'Active' },
		{ value: 2, label: 'Upcoming' },
		{ value: 3, label: 'Past' },
	];

	const handleTabsChange = (_event: ChangeEvent<object>, value: number): void => {
		setCurrentTab(value);
	};

	const handleSelectChange = (event: SelectChangeEvent<number>): void => {
		setCurrentTab(Number(event.target.value));
	};

	return (
		<Card>
			<CardContent
				sx={{
					pt: 1,
					pb: 0,
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
				}}
			>
				<CardHeader
					subheader={`Find ways to get involved with ${org.name}`}
					sx={{
						p: 0,
						mb: 2,
					}}
					title="Volunteer Opportunities"
				/>
				{smUp ? (
					<Tabs
						onChange={handleTabsChange}
						sx={{
							overflow: 'visible',

							'& .MuiTabs-indicator': {
								display: 'none',
							},

							'& .MuiTabs-scroller': {
								overflow: 'visible !important',
							},
						}}
						value={currentTab}
					>
						{tabs.map((tab) => (
							<BaseButtonTab
								componentType="tab"
								key={tab.value}
								label={tab.label}
								value={tab.value}
							/>
						))}
					</Tabs>
				) : (
					<Select
						fullWidth
						onChange={handleSelectChange}
						sx={{
							mb: 2,
						}}
						value={currentTab}
					>
						{tabs.map((tab) => (
							<MenuItem key={tab.value} value={tab.value}>
								{tab.label}
							</MenuItem>
						))}
					</Select>
				)}
			</CardContent>
			<Divider />

			{currentTab === 0 ? <OrgActivitiesTab activities={org.Activities} /> : null}

			{currentTab === 1 ? <OrgActivitiesTab activities={openOpportunities} /> : null}

			{currentTab === 2 ? <OrgActivitiesTab activities={upcomingOpportunities} /> : null}

			{currentTab === 3 ? <OrgActivitiesTab activities={pastOpportunities} /> : null}
		</Card>
	);
};

export { ActivityContainer };
