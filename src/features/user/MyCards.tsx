import { Box, Card, CardHeader, Divider } from '@mui/material';
import { MyCardsSelect } from './MyCardSelect';



const data = {
	savedCards: 7,
};

const MyCards = () => {


	return (
		<Card>
			<CardHeader
				subheader={data.savedCards + ' ' + 'saved cards'}
				title='Cards'
			/>
			<Divider />
			<Box p={2}>
				<MyCardsSelect />
			</Box>
		</Card>
	);
};

export { MyCards };
