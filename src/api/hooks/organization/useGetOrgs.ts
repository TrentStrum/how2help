import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../utils/Resources/getResource';
import { Organization } from '../../../types/organization.types';

const useGetOrgsAll = () => {
	const query = useQuery<Organization[]>({
		queryKey: ['org'],
		queryFn: () => getResource('/org'),
	});
	return query;
};

export { useGetOrgsAll };
