import { CauseAdditionalInfoTab } from '@app/features/Cause/components/CauseAdditionalInfoTab';
import { CauseEventsTab } from '@app/features/Cause/components/CauseEventsTab';

import { CauseOrganizationsTab } from './CauseOrganizationsTab';

type BaseProps = {
	entityId: string;
	entityType: string;
};

export const CAUSE_TAB_CONFIG = [
	{
		id: 'organizations',
		label: 'Organizations',
		Component: ({ entityId }: Pick<BaseProps, 'entityId'>) => {
			return <CauseOrganizationsTab causeId={entityId} />;
		},
	},
	{
		id: 'events',
		label: 'Events',
		Component: ({ entityId }: Pick<BaseProps, 'entityId'>) => {
			return <CauseEventsTab causeId={entityId} />;
		},
	},
	{
		id: 'additional-info',
		label: 'Additional Info',
		Component: ({ entityId }: Pick<BaseProps, 'entityId'>) => {
			return <CauseAdditionalInfoTab causeId={entityId} />;
		},
	},
] as const;

export type CauseTabId = (typeof CAUSE_TAB_CONFIG)[number]['id'];
