import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Cause } from '../../../api/hooks/cause/cause.types';
import { useGetCauseAll } from '../../../api/hooks/cause/useGetCauses';

export default function CauseList() {
	const { data: causes, isLoading, isError } = useGetCauseAll();

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<ul>
			{causes?.map((cause: Cause) => (
				<li key={cause.causeId}>
					<Button>
						<Link to={`/cause/${cause.causeId}`}>
							<Typography variant='body2'>{cause.name}</Typography>
						</Link>
					</Button>
				</li>
			))}
		</ul>
	);
}
