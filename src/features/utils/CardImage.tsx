import { CardMedia } from '@mui/material';

interface AvatarProps {
	avatarImageUrl?: string;
	imageAltDesc: string;
	height: number;
	maxWidth: string;
}
const CardImage = <T extends AvatarProps>({
	avatarImageUrl,
	imageAltDesc,
	height,
}: T) => {
	return (
		<>
			<CardMedia
				component='img'
				alt={imageAltDesc}
				height={height}
				// width={maxWidth}
				image={avatarImageUrl}
				sx={{ p: '1em 1em 0 1em' , objectFit: 'contain'}}
			/>
		</>
	);
};

export { CardImage };
