import { EventCatalog } from '@app/features/Event/components/EventCatalog';
import { CatalogContainer } from '@app/layouts';

const EventCatalogPage = () => {
	return (
		<CatalogContainer>
			<EventCatalog />
		</CatalogContainer>
	);
};

export { EventCatalogPage };
