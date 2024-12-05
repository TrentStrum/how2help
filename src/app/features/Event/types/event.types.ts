import { IEvent } from '@api/entities/events';

export interface EventTabsProps {
	event: IEvent;
}

export type EventTabType = 'details' | 'attendees' | 'comments' | 'activities';

export interface EventTabPanelProps {
	children?: React.ReactNode;
	index: EventTabType;
	value: EventTabType;
}

export interface EventTabProps {
	event: IEvent;
} 