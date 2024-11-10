import { Box, CardMedia, Skeleton } from '@mui/material';
import { useState } from 'react';

interface CardImageProps {
	avatarImageUrl?: string;
	imageAltDesc: string;
	height?: number;
	maxWidth?: string;
	borderRadius?: number;
}

const CardImage = ({
	avatarImageUrl,
	imageAltDesc,
	height = 200,
	maxWidth = '100%',
	borderRadius = 8,
}: CardImageProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	return (
		<Box
			sx={{
				position: 'relative',
				maxWidth,
				borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
				overflow: 'hidden',
			}}
		>
			{isLoading ? <Skeleton animation="wave" sx={{ height }} variant="rectangular" /> : null}

			<CardMedia
				alt={imageAltDesc}
				component="img"
				image={hasError ? '/placeholders/image-placeholder.jpg' : avatarImageUrl}
				onError={() => {
					setIsLoading(false);
					setHasError(true);
				}}
				onLoad={() => setIsLoading(false)}
				sx={{
					height,
					objectFit: 'cover',
				}}
			/>
		</Box>
	);
};

export { CardImage };
