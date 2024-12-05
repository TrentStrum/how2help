import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, CardContent, Typography, IconButton, Stack, CardActions } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Cause } from '@api/entities/cause';
import { LinkButton } from '@app/components/Buttons/LinkButton';
// import { useAuth } from '@app/context/AuthContext';
import { CardImage } from '@components/Cards/CardImage';

type Props = {
	cause: Cause;
};

const CauseCatalogCard = ({ cause }: Props) => {
	// const { user } = useAuth();
	const [localFavorite, setLocalFavorite] = useState(false);

	if (!cause?.causeId || !cause?.name) {
		return null;
	}

	const handleFavoriteClick = () => {
		setLocalFavorite(!localFavorite);
	};

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
			<Link aria-label={`View details for ${cause.name}`} to={`/cause/${cause.causeId}`}>
				<CardImage avatarImageUrl={cause.avatarImageUrl} height={250} imageAltDesc={cause.name} />
			</Link>
			<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<Stack direction="row" justifyContent="space-between" sx={{ mb: 'auto' }} width="100%">
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
						to={`/cause/${cause.causeId}`}
						variant="h6"
					>
						{cause.name}
					</Typography>
				</Stack>
				{cause.description ? (
					<Typography
						color="text.secondary"
						sx={{
							mt: 2,
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
						}}
						variant="body2"
					>
						{cause.description}
					</Typography>
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
					<LinkButton buttonText="Learn More" url={`/cause/${cause.causeId}`} />
					<Stack direction="row" ml="auto" spacing={1}>
						<IconButton
							aria-label={localFavorite ? 'Remove from favorites' : 'Add to favorites'}
							onClick={handleFavoriteClick}
							size="small"
						>
							{localFavorite ? (
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

export { CauseCatalogCard };
