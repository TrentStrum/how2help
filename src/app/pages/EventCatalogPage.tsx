import { EventCatalog } from '@app/features/Event/components/EventCatalog';
import { CatalogContainer } from '@app/layouts';

const EventCatalogPage = () => {
	return (
		<CatalogContainer entity="event">
			<EventCatalog />
		</CatalogContainer>
	);
};

export { EventCatalogPage };
