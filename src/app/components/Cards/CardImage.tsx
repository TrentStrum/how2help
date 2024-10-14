import { CardMedia } from '@mui/material';

interface AvatarProps {
	avatarImageUrl?: string;
	imageAltDesc: string;
	height: number;
	maxWidth: string;
}
const CardImage = <T extends AvatarProps>({ avatarImageUrl, imageAltDesc, height }: T) => {
	return (
		<CardMedia
			alt={imageAltDesc}
			component="img"
			sx={{ p: '1em 1em 0 1em', objectFit: 'contain' }}
			height={height}
			// width={maxWidth}
			image={avatarImageUrl}
		/>
	);
};

export { CardImage };
