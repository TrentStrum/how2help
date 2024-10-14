import { Typography, Tooltip, Stack, Chip, alpha, Box, styled, useTheme } from '@mui/material';
import { toast } from 'react-toastify';

import { Event } from '@api/entities/events';

const BoxItemWrapper = styled(Box)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	background:
		theme.palette.mode === 'dark'
			? alpha(theme.palette.neutral[25], 0.02)
			: theme.palette.neutral[25],
	border:
		theme.palette.mode === 'dark'
			? `2px solid ${theme.palette.neutral[800]}`
			: `2px solid ${theme.palette.neutral[100]}`,
	position: 'relative',
	paddingTop: theme.spacing(2),
	paddingBottom: theme.spacing(2),
	paddingLeft: theme.spacing(3),
	paddingRight: theme.spacing(2),
	width: '100%',

	'&::before': {
		content: "'.'",
		background: theme.palette.error.main,
		color: theme.palette.error.main,
		borderRadius: theme.shape.borderRadius,
		position: 'absolute',
		textAlign: 'center',
		width: theme.spacing(0.6),
		left: theme.spacing(0.7),
		height: '90%',
		top: '5%',
	},

	'&.wrapper-info::before': {
		background: theme.palette.info.main,
		color: theme.palette.info.main,
	},

	'&.wrapper-warning::before': {
		background: theme.palette.warning.main,
		color: theme.palette.warning.main,
	},
}));

const DotLegend = styled('span')(({ theme }) => ({
	borderRadius: theme.spacing(1.5),
	width: theme.spacing(1.5),
	height: theme.spacing(1.5),
	display: 'inline-block',
	marginRight: theme.spacing(1),
	marginTop: theme.spacing(-0.1),
}));

type Props = {
	event: Event;
};

const PastEventCard = ({ event }: Props) => {
	const theme = useTheme();

	const handleDelete = () => {
		toast.error('You clicked on delete!');
	};

	const handleClick = () => {
		toast.success('You clicked on the chip!');
	};
	console.log(event);

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
					<DotLegend style={{ background: theme.palette.success.main }} />
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
					- Past event
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

export { PastEventCard };
