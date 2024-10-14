import { Button, Grid, Typography } from '@mui/material';

import LandingMain from '../../../../assets/images/LandingMain2.png';

// interface HeroProps {
// 	handleAuthentication: () => void;
// }

const Hero = () => {
	function handleClick() {
		return <div>test</div>;
	}
	return (
		<Grid container direction="row" spacing={2}>
			<Grid
				alignContent="center"
				item
				justifyContent="center"
				md={4}
				order={{ xs: 2, md: 1 }}
				xs={12}
			>
				<Grid container direction="column" spacing={2}>
					<Grid alignContent="center" item>
						<Typography color="secondary" textAlign="center" variant="h3">
							Welcome to how2help
						</Typography>
					</Grid>
					<Grid item>
						<Typography textAlign="center" variant="body1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem praesentium minus
							dignissimos odio fugit eveniet perferendis placeat.
						</Typography>
					</Grid>
					<Grid container justifyContent="center" margin={1} spacing={2}>
						<Button sx={{ margin: 1 }} variant="contained">
							Learn More
						</Button>
						<Button onClick={handleClick} sx={{ margin: 1 }} variant="outlined">
							Login
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				md={8}
				xs={12}
				order={{ xs: 1, md: 2 }}
				// sx={{ marginLeft: '3rem'}}
			>
				<img src={LandingMain} width="100%" />
			</Grid>
		</Grid>
	);
};

export { Hero };
