import { ButtonProps, TabProps } from '@mui/material';
import React from 'react';

import { ButtonTabProps, StyledButton, StyledTab } from './baseButtonTab-Style';

const BaseButtonTab: React.FC<ButtonTabProps> = ({ componentType, children, ...otherProps }) => {
	return componentType === 'tab' ? (
		<StyledTab {...(otherProps as TabProps)} />
	) : (
		<StyledButton {...(otherProps as ButtonProps)}>{children}</StyledButton>
	);
};

export default BaseButtonTab;
