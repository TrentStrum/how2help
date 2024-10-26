import { Box, MenuItem, Select, Stack, Tab, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';

import { Cause } from '@api/entities/cause';
import { ProfileCalendar } from '@app/features/Event/components/ProfileCalendar';

import { CauseOrgSearch } from './CauseOrgSearch';
import { TabsShadow } from '../../../components/Tabs/TabsShadow-Style';

type Props = {
	cause: Cause;
};
const CauseTabs = ({ cause }: Props) => {
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const [value, setValue] = useState('0');

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(String(newValue));
	};

	const handleSelectChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	let displayTab = <CauseOrgSearch causeId={cause.causeId.toString()} />;

	switch (value) {
		case '0': {
			displayTab = <CauseOrgSearch causeId={cause.causeId.toString()} />;
			break;
		}
		case '1': {
			displayTab = <ProfileCalendar entity={cause} entityType="Cause" />;
			break;
		}
		// case '2': {
		// 	displayTab = <CauseOrgSearch />;
		// 	break;
		// }
		// case '3': {
		// 	displayTab = <CauseOrgSearch />;
		// 	break;
		// }
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
							<Tab label="Events" value="1" />
							<Tab label="Education" value="2" />
						</TabsShadow>
					) : (
						<Select fullWidth onChange={() => handleSelectChange} value={value}>
							<MenuItem value="0">Organizations</MenuItem>
							<MenuItem value="1">Events</MenuItem>
							<MenuItem value="2">Education</MenuItem>
						</Select>
					)}
				</Box>
			</Stack>
			{displayTab}
		</>
	);
};

export { CauseTabs };
