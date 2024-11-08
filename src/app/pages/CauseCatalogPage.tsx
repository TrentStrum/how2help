import { CauseCatalog } from '@app/features/Cause';
import { CatalogContainer } from '@app/layouts/CatalogContainer';

const CauseCatalogPage = () => {
	return (
		<CatalogContainer entity="cause">
			<CauseCatalog />
		</CatalogContainer>
	);
};

export { CauseCatalogPage };
