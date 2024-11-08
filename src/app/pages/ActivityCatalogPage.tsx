import { ActivityCatalog } from '@app/features/Activity/components/ActivityCatalog';
import { CatalogContainer } from '@app/layouts/CatalogContainer';

const ActivityCatalogPage = () => {
	return (
		<CatalogContainer entity="activity">
			<ActivityCatalog />
		</CatalogContainer>
	);
};

export { ActivityCatalogPage };
