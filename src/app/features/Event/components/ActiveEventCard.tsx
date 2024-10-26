import { Typography, Tooltip, Stack, Chip } from '@mui/material';
import { toast } from 'react-toastify';

import { Event } from '@api/entities/events';
import { BoxItemWrapper, DotLegend } from '@app/components/Cards/ActiveEventCard-Style';

type Props = {
	event: Event;
};

const ActiveEventCard = ({ event }: Props) => {
	const handleDelete = () => {
		toast.error('You clicked on delete!');
	};

	const handleClick = () => {
		toast.success('You clicked on the chip!');
	};

	return (
		<BoxItemWrapper>
			<Typography
				sx={{
					display: 'flex',
					alignItems: 'center',
					mr: 2,
				}}
				variant="body2"
			>
				<Tooltip arrow placement="top" title="Appointment has been confirmed with the Patient.">
					<DotLegend />
				</Tooltip>
				<span>
					<Typography
						component="span"
						sx={{
							fontWeight: 700,
						}}
					>
						{event.name}
					</Typography>{' '}
					- Active event
				</span>
			</Typography>
			<Typography
				sx={{
					pl: 2.3,
					py: 1,
				}}
				variant="h6"
			>
				10:00 AM - <b>45 mins</b>
			</Typography>
			<Stack direction="row" flexWrap="wrap" gap={1} pl={2.3}>
				<Chip
					color="primary"
					label="Reports"
					onClick={handleClick}
					onDelete={handleDelete}
					size="small"
					sx={{
						mr: 0.5,
					}}
					variant="outlined"
				/>
				<Chip
					color="primary"
					label="High Risk Patient"
					onClick={handleClick}
					onDelete={handleDelete}
					size="small"
					sx={{
						mr: 0.5,
					}}
					variant="outlined"
				/>
			</Stack>
		</BoxItemWrapper>
	);
};

export { ActiveEventCard };
