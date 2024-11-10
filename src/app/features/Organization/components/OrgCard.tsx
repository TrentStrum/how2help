import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import {
	Card,
	CardContent,
	Typography,
	IconButton,
	Stack,
	Rating,
	CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { Organization } from '@api/entities/organization';
import { LinkButton } from '@app/components/Buttons/LinkButton';
import { CardImage } from '@components/Cards/CardImage';

type Props = {
	org: Organization;
};

const OrgCard = ({ org }: Props) => {
	if (!org?.orgId || !org?.name) {
		return null;
	}

	return (
		<Card
			sx={{
				maxWidth: 345,
				borderRadius: 2,
				boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
				transition: 'transform 0.3s ease-in-out',
				'&:hover': {
					transform: 'translateY(-4px)',
				},
			}}
		>
			<Link aria-label={`View details for ${org.name}`} to={`/org/${org.orgId}`}>
				<CardImage avatarImageUrl={org.avatarImageUrl} height={250} imageAltDesc={org.name} />
			</Link>
			<CardContent>
				<Typography
					component={Link}
					sx={{
						textDecoration: 'none',
						color: 'text.primary',
						'&:hover': {
							color: 'primary.main',
						},
					}}
					to={`/org/${org.orgId}`}
					variant="h6"
				>
					{org.name}
				</Typography>
				{org.userRating ? <Rating defaultValue={org.userRating} precision={0.5} readOnly /> : null}
			</CardContent>
			<CardActions>
				<Stack alignItems="center" direction="row" justifyContent="space-between" width="100%">
					<LinkButton buttonText="Learn More" url={`/org/${org.orgId}`} />
					<Stack direction="row" ml="auto" spacing={1}>
						<IconButton aria-label="Add to favorites" size="small">
							<FavoriteBorderIcon fontSize="small" />
						</IconButton>
						<IconButton aria-label="Share" size="small">
							<ShareIcon fontSize="small" />
						</IconButton>
					</Stack>
				</Stack>
			</CardActions>
		</Card>
	);
};

export { OrgCard };
