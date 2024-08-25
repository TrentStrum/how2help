import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetOrgById } from '../../api/hooks/organization/useGetOrgById';


const OrgDetail = () => {
	const { orgId } = useParams();
	const { data: org, isLoading, isError } = useGetOrgById(Number(orgId));

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<>
			<Typography variant='body2'>{org?.name}</Typography>
		</>
	);
};

export { OrgDetail };
