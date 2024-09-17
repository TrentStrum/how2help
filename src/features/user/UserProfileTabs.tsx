import {
	Grid,
	Tab,
	Select,
	MenuItem,
	useMediaQuery,
	useTheme,
	SelectChangeEvent,
} from '@mui/material';
import { TabsPills } from './styledComponents';
import { useState, ChangeEvent } from 'react';
import { EditProfileDetails } from './EditProfileDetails';
import { SettingsSecurity } from './SettingsSecurity';
import { SettingsNotifications } from './SettingsNotifications';
import { User } from '../../types/user.types';
import { ActivityTab } from './ActivityTab';

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
						onChange={handleTabsChange}
						value={currentTab}
						textColor='secondary'
						indicatorColor='secondary'
						sx={{
							'& .MuiTab-root': {
								textTransform: 'none',
								fontWeight: 500,
								fontSize: 15,
							},
						}}
					>
						{tabs.map((tab) => (
							<Tab
								key={tab.value}
								label={tab.label}
								value={tab.value}
							/>
						))}
					</TabsPills>
				) : (
					<Select
						value={currentTab}
						onChange={handleSelectChange}
						fullWidth
					>
						{tabs.map((tab) => (
							<MenuItem
								key={tab.value}
								value={tab.value}
							>
								{tab.label}
							</MenuItem>
						))}
					</Select>
				)}
			</Grid>
			<Grid xs={12}>
				{currentTab === 0 && <ActivityTab />}
				{currentTab === 1 && <EditProfileDetails />}
				{currentTab === 2 && <SettingsNotifications />}
				{currentTab === 3 && <SettingsSecurity />}
			</Grid>
		</Grid>
	);
};

export { UserProfileTabs };
