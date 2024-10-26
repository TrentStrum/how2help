import { Typography, Box, Divider, Rating, Stack, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Organization } from '@api/entities/organization';

type Props = {
	org: Organization;
};

const OrgProfileDescription = ({ org }: Props) => {
	const handleDelete = () => {
		toast.error('You clicked on delete!');
	};

	const handleClick = () => {
		toast.success('You clicked on the chip!');
	};
	return (
		<Stack divider={<Divider />} p={{ xs: 2, sm: 3 }} spacing={{ xs: 2, sm: 3 }}>
			<Box>
				<Rating defaultValue={Number(org?.userRating)} precision={0.5} readOnly />
				<Typography component="h2" sx={{ py: 1 }} variant="h2">
					{org?.name}
				</Typography>
				<Box pb={1}>
					{org.causes.map((cause) => (
						<Link key={cause.causeId} to="">
							<Chip
								color="primary"
								label={cause.name}
								onClick={handleClick}
								onDelete={handleDelete}
								size="small"
								sx={{
									mr: 0.5,
								}}
								variant="outlined"
							/>
						</Link>
					))}
				</Box>

				<Typography color="text.secondary" fontWeight={500} sx={{ pb: 1.5 }} variant="h5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Typography>
				<Typography variant="subtitle1">
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos fugit
					doloribus ex eaque vitae voluptatum sequi optio minima architecto debitis quo atque, vero
					numquam. Ipsam dignissimos repellendus libero. Illo.
				</Typography>
			</Box>
		</Stack>
	);
};

export { OrgProfileDescription };
