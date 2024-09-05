import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetCauseById } from '../../api/hooks/cause/useGetCauseById';




const CauseDetail = () => {
	const { causeId } = useParams();
	const { data: cause, isLoading, isError } = useGetCauseById(Number(causeId));

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<>
			<Typography variant='body2'>{cause?.name}</Typography>
		</>
	);
};

export { CauseDetail };
