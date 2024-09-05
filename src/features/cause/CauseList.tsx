import { Box, Container, Grid, Typography } from '@mui/material';
import { useGetCauseAll } from '../../api/hooks/cause/useGetCauses';
import { Cause } from '../../types/cause.types';
import { CauseCard } from './CauseCard';


export default function CauseList() {
	const { data: causes, isLoading, isError } = useGetCauseAll();

	if (isLoading) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<Container>
			<Box mt={4}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
				>
					{causes?.map((cause: Cause) => (
						<Grid
							item
							xs={2}
							sm={4}
							md={4}
							key={cause.causeId}
						>
							<CauseCard cause={cause} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}
