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
			height={height}
			image={avatarImageUrl}
			sx={{ p: '1em 1em 0 1em', objectFit: 'contain' }}
		/>
	);
};

export { CardImage };
