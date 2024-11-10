import { Organization } from '@api/entities/organization';

type Props = {
	org: Organization;
};

const OrgProfileAdditionalInfo = ({ org }: Props) => {
	return <div>{org.description}</div>;
};

export { OrgProfileAdditionalInfo };
