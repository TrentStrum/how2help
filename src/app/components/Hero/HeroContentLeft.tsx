import { Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroContentLeft = () => {
	function handleClick() {
		return <div>test</div>;
	}
	return (
		<>
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
				<Link to="/about">
					<Button sx={{ margin: 1 }} variant="contained">
						Learn More
					</Button>
				</Link>
				<Link to="/login">
					<Button onClick={handleClick} sx={{ margin: 1 }} variant="outlined">
						Login
					</Button>
				</Link>
			</Grid>
		</>
	);
};

export { HeroContentLeft };
