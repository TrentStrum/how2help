import { zodResolver } from '@hookform/resolvers/zod';
import {
	Box,
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	Rating,
	TextField,
	Typography,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

const reviewSchema = z.object({
	rating: z.number().min(1, 'Rating is required').max(5),
	title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
	content: z
		.string()
		.min(10, 'Review must be at least 10 characters')
		.max(1000, 'Review is too long'),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface Props {
	orgId: string;
	orgName: string;
	onClose: () => void;
}

const OrgWriteReviewModal = ({ orgId, orgName, onClose }: Props) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ReviewFormData>({
		resolver: zodResolver(reviewSchema),
		defaultValues: {
			rating: 0,
			title: '',
			content: '',
		},
	});

	const handleClose = () => {
		reset();
		onClose();
	};

	const onSubmit = async (data: ReviewFormData) => {
		try {
			// TODO: Add API call to submit review
			console.log('Review submitted:', { orgId, ...data });
			reset();
			handleClose();
		} catch (error) {
			console.error('Error submitting review:', error);
		}
	};

	return (
		<>
			<DialogTitle>Write a Review for {orgName}</DialogTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<DialogContent>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
						{/* Rating */}
						<Box>
							<Typography component="legend" gutterBottom>
								Your Rating
							</Typography>
							<Controller
								control={control}
								name="rating"
								render={({ field }) => (
									<Rating
										{...field}
										onChange={(_, value) => field.onChange(value)}
										precision={0.5}
										size="large"
									/>
								)}
							/>
							{errors.rating ? (
								<Typography color="error" variant="caption">
									{errors.rating.message}
								</Typography>
							) : null}
						</Box>

						{/* Title */}
						<TextField
							{...register('title')}
							error={!!errors.title}
							fullWidth
							helperText={errors.title?.message}
							label="Review Title"
						/>

						{/* Content */}
						<TextField
							{...register('content')}
							error={!!errors.content}
							fullWidth
							helperText={errors.content?.message}
							label="Review Content"
							multiline
							rows={4}
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button color="primary" type="submit" variant="contained">
						Submit Review
					</Button>
				</DialogActions>
			</form>
		</>
	);
};

export { OrgWriteReviewModal };
