import { ButtonProps, TabProps } from '@mui/material';
import { ReactNode } from 'react';

export interface BaseButtonTabProps {
	componentType: 'tab' | 'button';
	children?: ReactNode;
}

export type ButtonTabProps =
	| (BaseButtonTabProps & TabProps & { componentType: 'tab' })
	| (BaseButtonTabProps & ButtonProps & { componentType: 'button' });