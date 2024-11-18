import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import {
	alpha,
	Box,
	Button,
	Card,
	CardActions,
	Chip,
	Divider,
	Rating,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';

import { Activity } from '@api/entities/activity';

type Props = {
	activity: Activity;
};

const OrgProfileActivityCard = ({ activity }: Props) => {
	const theme = useTheme();

	return (
		<Card
			elevation={0}
			sx={{
				height: '100%',
				width: '100%',
				maxWidth: '100%',
				display: 'flex',
				flexDirection: 'column',
				background: alpha(theme.palette.background.default, 0.3),
				boxShadow: theme.shadows[8],
				variant: 'outlined',
			}}
		>
			{/* Header section */}
			<Box
				sx={{
					height: 45,
					bgcolor: 'primary.light',
					position: 'relative',
				}}
			>
				<Stack
					direction="row"
					flexWrap="wrap"
					gap={1}
					sx={{
						position: 'absolute',
						top: '50%',
						transform: 'translateY(-50%)',
						px: 2,
					}}
				>
					<Chip
						label="#hosting"
						size="small"
						sx={{ bgcolor: 'primary.dark', color: 'grey.300' }}
						variant="filled"
					/>
				</Stack>
			</Box>

			{/* Content section */}
			<Box
				sx={{
					p: 2,
					display: 'flex',
					flexDirection: 'column',
					minHeight: 200,
				}}
			>
				{/* Title */}
				<Typography
					color="text.primary"
					sx={{
						display: '-webkit-box',
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
						mb: 2,
						lineHeight: 1.2,
						fontWeight: 'bold',
						minHeight: 48,
					}}
					variant="h4"
				>
					{activity.name}
				</Typography>

				{/* Rating */}
				<Box sx={{ mb: 2 }}>
					<Rating defaultValue={4.5} precision={0.5} readOnly value={4.5} />
				</Box>

				{/* View Task Button */}
				<Box sx={{ mt: 'auto', mb: 2 }}>
					<RouterLink style={{ textDecoration: 'none' }} to={`/activity/${activity.activityId}`}>
						<Button
							fullWidth
							size="small"
							variant="outlined"
							sx={{
								borderRadius: 2,
								textTransform: 'none',
								fontSize: '0.9rem',
								// py: 1,
							}}
						>
							View task
						</Button>
					</RouterLink>
				</Box>

				<Divider />

				{/* Footer */}
				<CardActions
					sx={{
						p: 0,
						mt: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography
						alignItems="center"
						color="text.secondary"
						display="flex"
						noWrap
						variant="subtitle2"
					>
						<TodayTwoToneIcon sx={{ mr: 1 }} />
						{formatDistance(activity.startDate, new Date(), {
							addSuffix: true,
						})}
					</Typography>
				</CardActions>
			</Box>
		</Card>
	);
};

export { OrgProfileActivityCard };
