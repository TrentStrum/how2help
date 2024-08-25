import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import { Organization } from '../../../types/organization.types';
import ShareIcon from '@mui/icons-material/Share';

type Org = {
    org: Organization
}

const OrgCard = ({ org }: Org) => {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					alt={org.name}
					height='250'
					width='fill'
					image={org.avatarImageUrl}
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
					{org.userRating}
					</Typography>
				</CardContent>
				<CardActions>
					<ShareIcon />
					<Button>
						<Link to={`/org/${org.orgId}`}>
							<Typography variant='body2'>Learn More!</Typography>
						</Link>
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export { OrgCard };
