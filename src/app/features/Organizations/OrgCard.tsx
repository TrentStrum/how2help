import {
	Stack,
	Card,
	CardContent,
	Button,
	CardActions,
	Typography,
} from '@mui/material';
import { CardImage } from '../utils/CardImage';
import { Organization } from '../../../types/organization.types';
import { LinkButton } from '../utils/LinkButton';


type Org = {
	org: Organization;
};

const OrgCard = ({ org }: Org) => {

	return (
		<Stack
			spacing={{ xs: 2, sm: 3 }}
			direction={{ xs: 'column', sm: 'row' }}
			sx={{ height: '100%', flexGrow: 1 }}
		>
			<Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
				<CardImage
					avatarImageUrl={org.avatarImageUrl}
					Id={org.orgId}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
					>
						{org.name}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
					>
						User rating: {org.userRating}
					</Typography>
				</CardContent>
				<CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
					<Button
						size='small'
						variant='outlined'
						sx={{ mx: '10px' }}
					>
						Share
					</Button>
					<LinkButton
						url={`/org/${org.orgId}`}
						buttonText='Learn More'
					/>
				</CardActions>
			</Card>
		</Stack>
	);
};

export { OrgCard };
