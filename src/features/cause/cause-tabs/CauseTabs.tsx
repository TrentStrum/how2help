import { Box, MenuItem, Select, Stack, Tab, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { TabsShadow } from '../../../app/components/ui/TabsShadow';
import { CauseOrgSearch } from './org-list/CauseOrgSearch';
import { EventContainer } from '../../events/EventContainer';
import { Cause } from '../../../app/api/entities/cause';


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
			displayTab = (
				<EventContainer
					entityId={cause?.causeId.toString()}
					entityName={cause?.name}
				/>
			);
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
				justifyContent='center'
				spacing={{ xs: 2, sm: 3 }}
				margin={{ xs: 1 }}
				alignItems='center'
				direction={{ xs: 'column', sm: 'row' }}
			>
				<Box width='100%'>
					{smUp ? (
						<TabsShadow
							value={value}
							onChange={handleTabChange}
							centered
						>
							<Tab
								label='Organizations'
								value='0'
							/>
							<Tab
								label='Events'
								value='1'
							/>
							<Tab
								label='Education'
								value='2'
							/>
						</TabsShadow>
					) : (
						<Select
							value={value}
							onChange={() => handleSelectChange}
							fullWidth
						>
							<MenuItem value='0'>Organizations</MenuItem>
							<MenuItem value='1'>Events</MenuItem>
							<MenuItem value='2'>Education</MenuItem>
						</Select>
					)}
				</Box>
			</Stack>
			{displayTab}
		</>
	);
};

export { CauseTabs };
