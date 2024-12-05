import { Box, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import { EventDetails } from './EventDetails';
import { EventAttendees } from './EventAttendees';
import { EventComments } from './EventComments';
import { EventActivities } from './EventActivities';
import { EventTabPanelProps, EventTabProps, EventTabType } from '../types/event.types';

const TabPanel = (props: EventTabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			aria-labelledby={`event-tab-${index}`}
			hidden={value !== index}
			id={`event-tabpanel-${index}`}
			role="tabpanel"
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

export const EventTabs = ({ event }: EventTabProps) => {
	const [currentTab, setCurrentTab] = useState<EventTabType>('details');

	const handleTabChange = (event: SyntheticEvent, newValue: EventTabType) => {
		setCurrentTab(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					aria-label="event tabs"
					onChange={handleTabChange}
					value={currentTab}
					variant="scrollable"
					scrollButtons="auto"
				>
					<Tab label="Details" value="details" />
					<Tab label="Attendees" value="attendees" />
					<Tab label="Comments" value="comments" />
					<Tab label="Activities" value="activities" />
				</Tabs>
			</Box>
			<TabPanel value={currentTab} index="details">
				<EventDetails event={event} />
			</TabPanel>
			<TabPanel value={currentTab} index="attendees">
				<EventAttendees event={event} />
			</TabPanel>
			<TabPanel value={currentTab} index="comments">
				<EventComments event={event} />
			</TabPanel>
			<TabPanel value={currentTab} index="activities">
				<EventActivities event={event} />
			</TabPanel>
		</Box>
	);
};
