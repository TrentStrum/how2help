import { Box, Grid } from '@mui/material';

export default function WireFrames() {
	return (
		<Grid
			container
			spacing={2}
			direction='row'
			justifyContent='space-around'
		>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
			>
				<Box
					sx={{
						height: '100px',

						bgcolor: 'red',
						borderRadius: '20px',
						textAlign: 'center',
						alignContent: 'center',
					}}
				>
					item1
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
			>
				<Box
					sx={{
						height: '100px',

						bgcolor: 'blue',
						borderRadius: '20px',
						textAlign: 'center',
						alignContent: 'center',
					}}
				>
					item2
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
			>
				<Box
					sx={{
						height: '100px',

						bgcolor: 'purple',
						borderRadius: '20px',
						textAlign: 'center',
						alignContent: 'center',
					}}
				>
					item3
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
			>
				<Box
					sx={{
						height: '100px',

						bgcolor: 'green',
						borderRadius: '20px',
						textAlign: 'center',
						alignContent: 'center',
					}}
				>
					item4
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
			>
				<Box
					sx={{
						height: '100px',

						bgcolor: 'yellow',
						borderRadius: '20px',
						textAlign: 'center',
						alignContent: 'center',
					}}
				>
					item5
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
			>
				<Box
					sx={{
						height: '100px',

						bgcolor: 'orange',
						borderRadius: '20px',
						textAlign: 'center',
						alignContent: 'center',
					}}
				>
					item6
				</Box>
			</Grid>
		</Grid>
	);
}
