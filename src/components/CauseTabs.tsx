import { Box, MenuItem, Select, Stack, Tab, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { TabsShadow } from './TabsShadow';
import { CauseOrgSearch } from '../features/cause/CauseOrgSearch';

type Props = {
	causeId: string;
};
const CauseTabs = ({ causeId }: Props) => {
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const [value, setValue] = useState('0');

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(String(newValue));
	};

	const handleSelectChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	let displayTab = <CauseOrgSearch causeId={causeId} />;

	switch (value) {
		case '0': {
			displayTab = <CauseOrgSearch causeId={causeId} />;
			break;
		}
		// case '1': {
		// 	displayTab = <CauseOrgSearch />;
		// 	break;
		// }
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
								label='Integrations'
								value='1'
							/>
							<Tab
								label='Settings'
								value='2'
							/>
							<Tab
								label='Support'
								value='3'
							/>
						</TabsShadow>
					) : (
						<Select
							value={value}
							onChange={() => handleSelectChange}
							fullWidth
						>
							<MenuItem value='0'>Analytics</MenuItem>
							<MenuItem value='1'>Integrations</MenuItem>
							<MenuItem value='2'>Settings</MenuItem>
							<MenuItem value='3'>Support</MenuItem>
						</Select>
					)}
				</Box>
			</Stack>
			{displayTab}
		</>
	);
};

export { CauseTabs };
