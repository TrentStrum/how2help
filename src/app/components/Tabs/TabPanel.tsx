import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface TabPanelProps {
	children: ReactNode;
	value: number;
	index: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
	return (
		<Box
			aria-labelledby={`org-tab-${index}`}
			hidden={value !== index}
			id={`org-tabpanel-${index}`}
			role="tabpanel"
		>
			{value === index ? children : null}
		</Box>
	);
};

export { TabPanel };
