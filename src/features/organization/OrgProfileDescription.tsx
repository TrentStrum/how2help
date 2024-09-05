import { Typography, Box, Divider, Rating, Stack } from '@mui/material';
import { Organization } from '../../types/organization.types';


type Props = {
	org?: Organization;
};

const OrgProfileDescription = ({ org }: Props) => {
	return (
		<Stack
			divider={<Divider />}
			spacing={{ xs: 2, sm: 3 }}
			p={{ xs: 2, sm: 3 }}
		>
			<Box>
				<Rating
					readOnly
					defaultValue={Number(org?.userRating)}
					precision={0.5}
				/>
				<Typography
					variant='h2'
					component='h2'
					sx={{ py: 1 }}
				>
					{org?.name}
				</Typography>
				<Typography
					variant='h5'
					fontWeight={500}
					color='text.secondary'
					sx={{ pb: 1.5 }}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Typography>
				<Typography variant='subtitle1'>
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos
					fugit doloribus ex eaque vitae voluptatum sequi optio minima architecto debitis
					quo atque, vero numquam. Ipsam dignissimos repellendus libero. Illo.
				</Typography>
			</Box>
		</Stack>
	);
};

export { OrgProfileDescription };
