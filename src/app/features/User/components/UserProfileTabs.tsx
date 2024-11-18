import { Tab, Select, MenuItem, useMediaQuery, useTheme, Box, Tabs } from '@mui/material';
import { useState } from 'react';

import { User } from '@api/entities/user/types/user.types';
import { SettingsNotifications } from '@app/components/Settings/SettingsNotifications';
import { SettingsSecurity } from '@app/components/Settings/SettingsSecurity';

import { EditProfileDetails } from './EditProfileDetails';
import { UserProfileAboutMe } from './UserProfileAboutMe';
import { UserProfileActivityTab } from './UserProfileActivityTab';
import { UserProfileImpactTab } from './UserProfileImpactTab';
import { UserProfileOrganizationsTab } from './UserProfileOrganizationsTab';

type Props = {
	isOwner: boolean;
	user: User;
	tabs: { value: number; label: string }[];
};

const UserProfileTabs = ({ isOwner, tabs, user }: Props) => {
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));
	const [currentTab, setCurrentTab] = useState<number>(0);

	return (
		<Box>
			{/* Tabs Navigation */}
			<Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
				{smUp ? (
					<Tabs
						onChange={(_, value) => setCurrentTab(value)}
						sx={{
							'& .MuiTab-root': {
								textTransform: 'none',
								fontWeight: 500,
								fontSize: 15,
								minWidth: 'auto',
								px: 3,
							},
						}}
						value={currentTab}
					>
						{tabs.map((tab) => (
							<Tab key={tab.value} label={tab.label} value={tab.value} />
						))}
					</Tabs>
				) : (
					<Select
						fullWidth
						onChange={(e) => setCurrentTab(e.target.value as number)}
						sx={{ mb: 2 }}
						value={currentTab}
					>
						{tabs.map((tab) => (
							<MenuItem key={tab.value} value={tab.value}>
								{tab.label}
							</MenuItem>
						))}
					</Select>
				)}
			</Box>

			{/* Tab Content */}
			<Box sx={{ py: 2 }}>
				{currentTab === 0 ? <UserProfileActivityTab user={user} /> : null}
				{currentTab === 1 ? <UserProfileOrganizationsTab user={user} /> : null}
				{currentTab === 2 ? <UserProfileImpactTab user={user} /> : null}
				{currentTab === 3 ? <UserProfileAboutMe user={user} /> : null}
				{isOwner && currentTab === 4 ? <EditProfileDetails user={user} /> : null}
				{isOwner && currentTab === 5 ? <SettingsNotifications user={user} /> : null}
				{isOwner && currentTab === 6 ? <SettingsSecurity user={user} /> : null}
			</Box>
		</Box>
	);
};

export { UserProfileTabs };
