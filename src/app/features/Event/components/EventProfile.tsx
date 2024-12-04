// import { useAuth } from '@app/features/Auth/hooks/useAuth';
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
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetEventById } from '@api/entities/events';
import { IEvent } from '@api/entities/events/types';
import { useAddEventReaction, useRemoveEventReaction } from '@api/entities/reactions';

import { EventTabs } from '..';

const EventProfile = () => {
	const { eventId } = useParams();
	// const { currentUserId } = useAuth();

	const currentUserId = '1';

	const {
		data: event,
		isPending,
		isError,
	} = useGetEventById(Number(eventId)) as {
		data: IEvent | undefined;
		isPending: boolean;
		isError: boolean;
	};
	const { mutate: addEventReaction } = useAddEventReaction();
	const { mutate: removeEventReaction } = useRemoveEventReaction();

	// Properly type the states
	// TODO: Get actual current user ID => available in auth context

	// TODO: Open comment dialog/form

	const [reactionId, setReactionId] = useState<string | null>(
		event?.reactions?.find((r) => r.userId === currentUserId)?.id || null,
	);
	const [hasLiked, setHasLiked] = useState(
		!!event?.reactions?.some((r) => r.userId === currentUserId),
	);
	const [likesCount, setLikesCount] = useState(event?.reactions?.length || 0);

	const handleReactionToggle = () => {
		console.log('Attempting toggle with:', { hasLiked, reactionId, eventId });

		if (hasLiked && reactionId) {
			console.log('Attempting DELETE');
			removeEventReaction(
				{
					eventId: eventId || '',
					reactionId,
				},
				{
					onSuccess: () => {
						console.log('Delete successful - resetting states');
						setReactionId(null);
						setLikesCount((prev) => prev - 1);
						setHasLiked(false);
					},
				},
			);
		} else {
			console.log('Attempting POST');
			addEventReaction(
				{ eventId: eventId || '', reactionType: 'like' },
				{
					onSuccess: (response: { id: string }) => {
						console.log('New reaction:', response);
						const newReaction = response;
						setHasLiked(true);
						setReactionId(newReaction.id);
						setLikesCount((prev) => prev + 1);
					},
				},
			);
		}
	};

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error...</Typography>;
	if (!event) return <Typography variant="body2">No event found</Typography>;

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
						<Button
							onClick={handleReactionToggle}
							startIcon={<ThumbUpAltTwoToneIcon />}
							variant={hasLiked ? 'contained' : 'outlined'}
						>
							{hasLiked ? 'Liked' : 'Like'}
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
							<b>{likesCount}</b> reactions • <b>{event?.comments?.length || 0}</b> comments
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
