import { ArrowForwardTwoTone } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, Divider, Typography } from '@mui/material';

const UserAddresses = () => {
	const addresses = {
		delivery: 12,
	};

	return (
		<Card>
			<CardHeader subheader={addresses.delivery + ' saved addresses'} title="Delivery Addresses" />
			<Divider />
			<Box p={2}>
				<Typography fontWeight={600} variant="caption">
					Favourite
				</Typography>
				<Box pb={2} pt={1} px={1.5}>
					<Typography gutterBottom variant="h5">
						Kadin Westervelt
					</Typography>
					<Typography variant="subtitle1">348 Gold St. Bethel, PA 15102</Typography>
				</Box>
				<Button endIcon={<ArrowForwardTwoTone />} fullWidth variant="outlined">
					Manage
				</Button>
			</Box>
		</Card>
	);
};

export { UserAddresses };
