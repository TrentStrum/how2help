import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
	Card,
	CardContent,
	Typography,
	IconButton,
	Stack,
	Rating,
	CardActions,
	Box,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Organization,
	useGetOrgFavoriteStatus,
	useToggleFavoriteOrg,
} from '@api/entities/organization';
import { LinkButton } from '@app/components/Buttons/LinkButton';
import { useAuth } from '@app/context/AuthContext';
import { CardImage } from '@components/Cards/CardImage';

type Props = {
	org: Organization;
};

const OrgCatalogCard = ({ org }: Props) => {
	const { data: isFavorite = false } = useGetOrgFavoriteStatus(org.orgId);
	const { mutate: toggleFavorite } = useToggleFavoriteOrg(org.orgId);
	const { user } = useAuth();
	const [localFavorite, setLocalFavorite] = useState(false);

	if (!org?.orgId || !org?.name) {
		return null;
	}

	const handleFavoriteClick = () => {
		if (user) {
			toggleFavorite();
		} else {
			setLocalFavorite(!localFavorite);
		}
	};

	const showAsFavorite = user ? isFavorite : localFavorite;

	return (
		<Card
			sx={{
				maxWidth: 345,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
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
			<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<Stack direction="row" justifyContent="space-between" width="100%" sx={{ mb: 'auto' }}>
					<Typography
						component={Link}
						sx={{
							textDecoration: 'none',
							color: 'text.primary',
							'&:hover': {
								color: 'primary.main',
							},
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 2,
							WebkitBoxOrient: 'vertical',
							lineHeight: 1.2,
							minHeight: '2.4em',
						}}
						to={`/org/${org.orgId}`}
						variant="h6"
					>
						{org.name}
					</Typography>
				</Stack>
				{org.userRating ? (
					<Box sx={{ mt: 2 }}>
						<Rating defaultValue={org.userRating} precision={0.5} readOnly />
					</Box>
				) : null}
			</CardContent>
			<CardActions>
				<Stack
					alignItems="center"
					direction="row"
					justifyContent="space-between"
					p={1}
					width="100%"
				>
					<LinkButton buttonText="Learn More" url={`/org/${org.orgId}`} />
					<Stack direction="row" ml="auto" spacing={1}>
						<IconButton
							aria-label={showAsFavorite ? 'Remove from favorites' : 'Add to favorites'}
							onClick={handleFavoriteClick}
							size="small"
						>
							{showAsFavorite ? (
								<FavoriteIcon color="error" fontSize="small" />
							) : (
								<FavoriteBorderIcon fontSize="small" />
							)}
						</IconButton>
					</Stack>
				</Stack>
			</CardActions>
		</Card>
	);
};

export { OrgCatalogCard };
