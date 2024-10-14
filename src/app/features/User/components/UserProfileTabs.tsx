import {
	Grid,
	Tab,
	Select,
	MenuItem,
	useMediaQuery,
	useTheme,
	SelectChangeEvent,
} from '@mui/material';
import { useState, ChangeEvent } from 'react';

import { User } from '@api/entities/user/types/user.types';
import { SettingsNotifications } from '@app/components/Settings/SettingsNotifications';
import { SettingsSecurity } from '@app/components/Settings/SettingsSecurity';
import { ActivityTab } from '@app/features/Activity';

import { EditProfileDetails } from './EditProfileDetails';
import { TabsPills } from '../services/styledComponents';

type Props = {
	user: User;
};

const UserProfileTabs = ({ user }: Props) => {
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const [currentTab, setCurrentTab] = useState<number>(0);

	const handleTabsChange = (_event: ChangeEvent<object>, value: number): void => {
		setCurrentTab(value);
	};

	const handleSelectChange = (event: SelectChangeEvent<number>) => {
		setCurrentTab(event.target.value as number);
	};
	// pending check for authenticated user to show different menu options
	if (user) {
		console.log('logged in');
	}

	const tabs = [
		{ value: 0, label: 'Activity' },
		{ value: 1, label: 'Edit Profile' },
		{ value: 2, label: 'Notifications' },
		{ value: 3, label: 'Passwords/Security' },
	];

	return (
		<Grid container>
			<Grid item xs={12}>
				{smUp ? (
					<TabsPills
						indicatorColor="secondary"
						onChange={handleTabsChange}
						sx={{
							'& .MuiTab-root': {
								textTransform: 'none',
								fontWeight: 500,
								fontSize: 15,
							},
						}}
						textColor="secondary"
						value={currentTab}
					>
						{tabs.map((tab) => (
							<Tab key={tab.value} label={tab.label} value={tab.value} />
						))}
					</TabsPills>
				) : (
					<Select fullWidth onChange={handleSelectChange} value={currentTab}>
						{tabs.map((tab) => (
							<MenuItem key={tab.value} value={tab.value}>
								{tab.label}
							</MenuItem>
						))}
					</Select>
				)}
			</Grid>
			<Grid xs={12}>
				{currentTab === 0 ? <ActivityTab /> : null}
				{currentTab === 1 ? <EditProfileDetails /> : null}
				{currentTab === 2 ? <SettingsNotifications /> : null}
				{currentTab === 3 ? <SettingsSecurity /> : null}
			</Grid>
		</Grid>
	);
};

export { UserProfileTabs };
