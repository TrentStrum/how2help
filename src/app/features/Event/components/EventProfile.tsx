import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	Divider,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import { useGetEventById } from '@api/entities/events';

import { EventTabs } from '..';

const EventProfile = () => {
	const { eventId } = useParams();
	const { data: event, isPending, isError } = useGetEventById(Number(eventId));

	if (eventId === undefined) return <Typography variant="body2">Error...</Typography>;
	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;

	return (
		<>
			<Card>
				<CardHeader
					action={
						<IconButton color="primary">
							<MoreHorizTwoToneIcon />
						</IconButton>
					}
					avatar={
						<Avatar
							src={event.avatarImageUrl}
							sx={{
								width: 54,
								height: 54,
								mb: {
									xs: 1,
									sm: 0,
								},
							}}
						/>
					}
					subheaderTypographyProps={{ variant: 'subtitle2' }}
					sx={{
						'& .MuiCardHeader-action': {
							display: { xs: 'none', sm: 'flex' },
						},
					}}
					title={event?.name}
					titleTypographyProps={{ variant: 'h5' }}
				/>
				<Divider />
				<CardMedia
					image={event.avatarImageUrl}
					sx={{
						minHeight: 380,
					}}
					title="Card Cover"
				/>
				<Box p={2} py={{ xs: 2, sm: 3 }}>
					<Typography color="text.primary" variant="h3">
						{event.description}
					</Typography>
				</Box>
				<Divider />
				<CardActions
					sx={{
						display: { xs: 'block', md: 'flex' },
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Stack
						direction="row"
						flexWrap={{ xs: 'wrap', md: 'nowrap' }}
						gap={1}
						justifyContent={{ xs: 'flex-start', md: 'center' }}
						p={0.5}
					>
						<Button startIcon={<ThumbUpAltTwoToneIcon />} variant="contained">
							Like
						</Button>
						<Button startIcon={<CommentTwoToneIcon />} variant="outlined">
							Comment
						</Button>
						<Button startIcon={<ShareTwoToneIcon />} variant="outlined">
							Share
						</Button>
					</Stack>
					<Box
						sx={{
							mt: { xs: 2, md: 0 },
						}}
					>
						<Typography component="span" variant="subtitle2">
							<b>485</b> reactions • <b>63</b> comments
						</Typography>
					</Box>
				</CardActions>
			</Card>
			<Box component="div" m={1} />
			<EventTabs event={event} />
		</>
	);
};

export { EventProfile };
