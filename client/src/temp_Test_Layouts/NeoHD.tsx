
import { Box, Button, Grid, Paper, Typography } from '@mui/material';

export default function NeoHD() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container>
				<Grid container>
					<Paper
						sx={{
							height: '50px',
							bgcolor: 'red',
							borderRadius: '8px',
							textAlign: 'center',
							alignContent: 'center',
							width: 1,
						}}
					>
						<Grid
							container
							spacing={2}
							columns={16}
						>
							<Grid
								item
								xs={8}
								textAlign='left'
							>
								<Typography
									variant='h5'
									margin={1}
								>
									logo
								</Typography>
							</Grid>

							<Grid
								item
								alignContent='center'
                                marginLeft='auto'
                             
							>
								<Button>home</Button>
								<Button>About</Button>
								<Button>Contact</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
			<Grid container>
				<Grid
					item
					xs={12}
					md={6}
				>
					<Paper sx={{ bgcolor: 'lightsalmon', height: '100px' }}>
						Welcome
					</Paper>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
				>
					<Paper sx={{ bgcolor: 'lightseagreen', height: '100px' }}>
						Image
					</Paper>
				</Grid>
			</Grid>
			<Grid item>
				<Paper
					sx={{
						height: '50px',
						bgcolor: 'orange',
						borderRadius: '8px',
						textAlign: 'center',
						alignContent: 'center',
						width: 1,
					}}
				>
					Footer
				</Paper>
			</Grid>
		</Box>
	);
}
