import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LandingMain from '@assets/images/LandingMain2.png';

const HeroMain = () => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate('/login');
	};

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
						<Button onClick={handleLoginClick} sx={{ margin: 1 }} variant="outlined">
							Login
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item md={8} order={{ xs: 1, md: 2 }} xs={12}>
				<img
					alt="Landing page hero showing how2help platform features"
					src={LandingMain}
					width="100%"
				/>
			</Grid>
		</Grid>
	);
};

export { HeroMain };
