import { Typography, Grid, Button } from '@mui/material';

const HeroContentLeft = () => {
		function handleClick() {
			return <div>test</div>;
		}
	return (
		<>
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem praesentium
					minus dignissimos odio fugit eveniet perferendis placeat.
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
		</>
	);
};

export { HeroContentLeft };
