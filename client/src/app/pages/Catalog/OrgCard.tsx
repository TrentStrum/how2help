import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Organization } from '../../../../api/hooks/organization/organization.types';
import { Link } from 'react-router-dom';

type Org = {
    org: Organization
}

const OrgCard = ({ org }: Org) => {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					alt='green iguana'
					height='140'
					image={org.orgImageUrl}
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
					<Button size='small'>Share</Button>
					<Button>
						<Link to={`/org/${org.orgId}`}>
							<Typography variant='body2'>Learn More</Typography>
						</Link>
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export { OrgCard };
