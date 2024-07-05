import { useQuery } from '@tanstack/react-query';
import { getResource } from '../../utils';
import { Organization } from '../../organization.types';


const useGetOrgsAll = () => {
	const query = useQuery<Organization[]>({
		queryKey: ['org'],
		queryFn: () => getResource('/org'),
	});
	return query;
};

export { useGetOrgsAll }; 