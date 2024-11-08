import { OrgCatalog } from '@app/features/Organization';
import { CatalogContainer } from '@app/layouts/CatalogContainer';

const OrganizationCatalogPage = () => {
	return (
		<CatalogContainer entity="organizations">
			<OrgCatalog />
		</CatalogContainer>
	);
};

export { OrganizationCatalogPage };
