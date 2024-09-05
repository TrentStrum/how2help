import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

import ShareIcon from '@mui/icons-material/Share';
import { Cause } from '../../types/cause.types';

type Cse = {
	cause: Cause;
};

const CauseCard = ({ cause }: Cse) => {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					alt={cause.name}
					height='250'
					width='fill'
					image={cause.avatarImageUrl}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
					>
						{cause.name}
					</Typography>
				</CardContent>
				<CardActions>
					<ShareIcon />
					<Button>
						<Link to={`/cause/${cause.causeId}`}>
							<Typography variant='body2'>Learn More!</Typography>
						</Link>
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export { CauseCard };
