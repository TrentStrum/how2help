import { Box, Grid, Paper } from '@mui/material';

export default function HolyGrail() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container>
				<Grid container>
					<Paper
						sx={{
							height: '100px',
							bgcolor: 'red',
							borderRadius: '8px',
							textAlign: 'center',
							alignContent: 'center',
							width: 1,
						}}
					>
						Header
					</Paper>
				</Grid>
				<Grid
					container
					bgcolor='purple'
				>
					<Grid
						item
						xs={12}
                        sm={6}
						md={2}
					>
						<Paper
							sx={{
								height: '100px',
								bgcolor: 'lightcoral',
								borderRadius: '8px',
								textAlign: 'center',
								alignContent: 'center',
							}}
						>
							left sidebar
						</Paper>
					</Grid>
					<Grid item xs>
						<Paper
							sx={{
								height: '100px',
								bgcolor: 'lightgreen',
								borderRadius: '8px',
								textAlign: 'center',
								alignContent: 'center',
							}}
						>
							center
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
                        sm={6}
						md={2}
					>
						<Paper
							sx={{
								height: '100px',
								bgcolor: 'lightsalmon',
								borderRadius: '8px',
								textAlign: 'center',
								alignContent: 'center',
							}}
						>
							right sidebar
						</Paper>
					</Grid>
				</Grid>
				<Grid container>
					<Paper
						sx={{
							height: '100px',
							bgcolor: 'blue',
							borderRadius: '8px',
							textAlign: 'center',
							alignContent: 'center',
							width: 1,
						}}
					>
						Footer
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
}
