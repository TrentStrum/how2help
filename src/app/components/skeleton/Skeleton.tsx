import { Grid, Skeleton, Stack } from '@mui/material';

const H2hSkeleton = () => {
	return (
		<Grid container spacing={{ xs: 2, md: 3 }}>
			{Array.from(Array(3)).map((_, index) => (
				<Grid item key={index} xs={4}>
					<Stack spacing={1} direction="column">
						<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
						<Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} width="40%" />
						<Skeleton animation="wave" height={10} width="40%" />
						<Skeleton animation="wave" variant="text" sx={{ fontSize: '3rem' }} />
					</Stack>
				</Grid>
			))}
		</Grid>
	);
};

export { H2hSkeleton };
