import { useMediaQuery, Stack, Box, Tab, Select, MenuItem, useTheme } from '@mui/material';
import { useState, SyntheticEvent } from 'react';

import { Event } from '@api/entities/events';
import { TabsShadow } from '@app/components/Tabs/TabsShadow-Style';

import { EventOrgSearch } from './EventOrgSearch';

type Props = {
	event: Event;
};

const EventTabs = ({ event }: Props) => {
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const [value, setValue] = useState('0');

	const handleTabChange = (event: SyntheticEvent, newValue: string) => {
		setValue(String(newValue));
	};

	const handleSelectChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	let displayTab = <EventOrgSearch eventId={event.eventId.toString()} />;

	switch (value) {
		case '0': {
			displayTab = <EventOrgSearch eventId={event.eventId.toString()} />;
			break;
		}
	}

	return (
		<>
			<Stack
				alignItems="center"
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent="center"
				margin={{ xs: 1 }}
				spacing={{ xs: 2, sm: 3 }}
			>
				<Box width="100%">
					{smUp ? (
						<TabsShadow centered onChange={handleTabChange} value={value}>
							<Tab label="Organizations" value="0" />
							<Tab label="events" value="1" />
							<Tab label="Education" value="2" />
						</TabsShadow>
					) : (
						<Select fullWidth onChange={() => handleSelectChange} value={value}>
							<MenuItem value="0">Organizations</MenuItem>
							<MenuItem value="1">events</MenuItem>
							<MenuItem value="2">Education</MenuItem>
						</Select>
					)}
				</Box>
			</Stack>
			{displayTab}
		</>
	);
};

export { EventTabs };
