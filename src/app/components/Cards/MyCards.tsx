import { Box, Card, CardHeader, Divider } from '@mui/material';
import { transitions, componentStyles } from '@app/components/styles';

import { MyCardsSelect } from './MyCardSelect';

const data = {
	savedCards: 7,
};

const MyCards = () => {
	return (
		<Card
			sx={{
				...componentStyles.card,
				transition: transitions.medium,
			}}
		>
			<CardHeader subheader={data.savedCards + ' ' + 'saved cards'} title="Cards" />
			<Divider />
			<Box p={2}>
				<MyCardsSelect />
			</Box>
		</Card>
	);
};

export { MyCards };