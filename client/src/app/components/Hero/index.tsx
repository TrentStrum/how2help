import { Button, Grid, Typography } from '@mui/material';

import LandingMain from '../../assets/LandingMain2.png'

// interface HeroProps {
// 	handleAuthentication: () => void;
// }

const Hero = () => {
	function handleClick() {
		return <div>test</div>;
	}
	return (
		<Grid
			container
			direction='row'
			spacing={2}
		>
			<Grid
				item
				alignContent='center'
				justifyContent='center'
				xs={12}
				md={4}
				order={{ xs: 2, md: 1 }}
			>
				<Grid
					container
					direction='column'
					spacing={2}
				>
					<Grid
						item
						alignContent='center'
					>
						<Typography
							variant='h3'
							textAlign='center'
							color='secondary'
						>
							Welcome to how2help
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							variant='body1'
							textAlign='center'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem
							praesentium minus dignissimos odio fugit eveniet perferendis placeat.
						</Typography>
					</Grid>
					<Grid
						container
						justifyContent='center'
						spacing={2}
						margin={1}
					>
						<Button
							variant='contained'
							sx={{ margin: 1 }}
						>
							Learn More
						</Button>
						<Button
							variant='outlined'
							sx={{ margin: 1 }}
							onClick={handleClick}
						>
							Login
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				md={8}
				order={{ xs: 1, md: 2 }}
				// sx={{ marginLeft: '3rem'}}
			>
				<img
					src={LandingMain}
					width='100%'
				/>
			</Grid>
		</Grid>
	);
};

export { Hero };
