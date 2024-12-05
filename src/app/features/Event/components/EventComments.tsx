import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
	List,
	ListItem,
} from '@mui/material';
import { useState } from 'react';
import { EventTabProps } from '../types/event.types';

export const EventComments = ({ event }: EventTabProps) => {
	const [newComment, setNewComment] = useState('');

	const handleCommentSubmit = () => {
		// TODO: Implement comment submission
		console.log('Submitting comment:', newComment);
		setNewComment('');
	};

	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				Comments ({event.comments?.length || 0})
			</Typography>
			
			<Card sx={{ mb: 3 }}>
				<CardContent>
					<TextField
						fullWidth
						multiline
						rows={3}
						value={newComment}
						onChange={(e) => setNewComment(e.target.value)}
						placeholder="Write a comment..."
						variant="outlined"
						sx={{ mb: 2 }}
					/>
					<Button
						variant="contained"
						color="primary"
						onClick={handleCommentSubmit}
						disabled={!newComment.trim()}
					>
						Post Comment
					</Button>
				</CardContent>
			</Card>

			<List>
				{event.comments?.map((comment) => (
					<ListItem key={comment.id} sx={{ display: 'block', mb: 2 }}>
						<Box display="flex" alignItems="center" mb={1}>
							<Avatar src={comment.user.avatarUrl} sx={{ mr: 1 }} />
							<Typography variant="subtitle1">{comment.user.name}</Typography>
							<Typography variant="caption" sx={{ ml: 1 }}>
								{new Date(comment.createdAt).toLocaleDateString()}
							</Typography>
						</Box>
						<Typography variant="body1">{comment.content}</Typography>
					</ListItem>
				))}
			</List>
		</Box>
	);
}; 