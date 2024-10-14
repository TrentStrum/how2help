import { OrgCatalog } from '@app/features/Organization';
import { CatalogContainer } from '@app/layouts/CatalogContainer';

const OrganizationCatalogPage = () => {
	return (
		<CatalogContainer>
			<OrgCatalog />
		</CatalogContainer>
	);
};

export { OrganizationCatalogPage };
