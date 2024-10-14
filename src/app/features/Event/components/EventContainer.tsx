import { Card, CardHeader, Divider, List } from '@mui/material';

import { ActiveEventList } from './ActiveEventList';
import { PastEventList } from './PastEventList';

type Props = {
	entityId: string;
	entityName: string;
};

const EventContainer = ({ entityId, entityName }: Props) => {
	return (
		<Card>
			<CardHeader
				sx={{
					px: 1.5,
				}}
				// action={
				// 	<Button
				// 		size='small'
				// 		variant='contained'
				// 	>
				// 		'All patients
				// 	</Button>
				// }
				title={entityName + ' Events (TRY UIFORT EVENT LIST COMPONENT)'}
			/>
			<Divider />
			<List component="div" disablePadding>
				<Divider
					sx={{
						mt: 2,
					}}
				/>
				<ActiveEventList entityId={entityId} />
				<Divider />
				<PastEventList entityId={entityId} />
				<Divider />
			</List>
		</Card>
	);
};

export { EventContainer };
