import { zodResolver } from '@hookform/resolvers/zod';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const rsvpSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	phone: z.string().optional(),
	notes: z.string().optional(),
});

type RsvpFormData = z.infer<typeof rsvpSchema>;

type Props = {
	open: boolean;
	onClose: () => void;
	eventName: string;
	eventId: string;
};

const RsvpModal = ({ open, onClose, eventName, eventId }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RsvpFormData>({
		resolver: zodResolver(rsvpSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			notes: '',
		},
	});

	const onSubmit = async (data: RsvpFormData) => {
		try {
			// TODO: Add API call to submit RSVP
			console.log('RSVP submitted:', { eventId, ...data });
			reset();
			onClose();
		} catch (error) {
			console.error('Error submitting RSVP:', error);
		}
	};

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<Dialog fullWidth maxWidth="sm" onClose={handleClose} open={open}>
			<DialogTitle>RSVP for {eventName}</DialogTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<DialogContent>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<TextField
							{...register('name')}
							error={!!errors.name}
							fullWidth
							helperText={errors.name?.message}
							label="Name"
						/>
						<TextField
							{...register('email')}
							error={!!errors.email}
							fullWidth
							helperText={errors.email?.message}
							label="Email"
						/>
						<TextField
							{...register('phone')}
							error={!!errors.phone}
							fullWidth
							helperText={errors.phone?.message}
							label="Phone"
						/>
						<TextField
							{...register('notes')}
							error={!!errors.notes}
							fullWidth
							helperText={errors.notes?.message}
							label="Notes"
							multiline
							rows={3}
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button color="primary" type="submit" variant="contained">
						Submit RSVP
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
};

export { RsvpModal };
