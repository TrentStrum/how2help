import { UserCatalog } from '@app/features/User';
import { CatalogContainer } from '@app/layouts';

const UserCatalogPage = () => {
	return (
		<CatalogContainer>
			<UserCatalog />
		</CatalogContainer>
	);
};

export { UserCatalogPage };
