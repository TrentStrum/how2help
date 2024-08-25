import { Box, Container, Grid } from '@mui/material';

const UserProfile = () => {
	return (
		<>
			<Container>
				<Grid container>
					<Grid item flexGrow={1}>
						<Box bgcolor='red' sx={{ width: '100%'}}>Account Title</Box>
					</Grid>
					<Grid item>
						<Grid
							container
							direction='column'
						>
							<Grid item>
								<Box bgcolor='green'>Account Window</Box>
							</Grid>
							<Grid item>
								<Box bgcolor='blue'>Account Update Form</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export { UserProfile };
