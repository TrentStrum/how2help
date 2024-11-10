import { Organization } from '@api/entities/organization';
import { ProfileCalendar } from '@app/features/Event';
import { OrgProfileActivitiesTab } from '@app/features/Organization';
import { OrgProfileAdditionalInfo } from '@app/features/Organization/components/OrgProfileAdditionalInfo';
import { OrgReviewsContainer } from '@app/features/Review';

type BaseProps = {
	entityId: string;
	entity: Organization;
	entityType: string;
};

export const ORG_TAB_CONFIG = [
	{
		id: 'get-involved',
		label: 'Get Involved',
		Component: ({ entityId }: Pick<BaseProps, 'entityId'>) => {
			return <OrgProfileActivitiesTab orgId={entityId} />;
		},
	},
	{
		id: 'events',
		label: 'Events',
		Component: ({ entity, entityId, entityType }: BaseProps) => {
			return <ProfileCalendar entity={entity} entityId={entityId} entityType={entityType} />;
		},
	},
	{
		id: 'reviews',
		label: 'Reviews',
		Component: ({ entity }: Pick<BaseProps, 'entity'>) => {
			return <OrgReviewsContainer org={entity} />;
		},
	},
	{
		id: 'additional-info',
		label: 'Additional Info',
		Component: ({ entity }: Pick<BaseProps, 'entity'>) => {
			return <OrgProfileAdditionalInfo org={entity} />;
		},
	},
] as const;

export type OrgTabId = (typeof ORG_TAB_CONFIG)[number]['id'];
