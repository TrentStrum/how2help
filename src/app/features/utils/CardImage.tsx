import { CardMedia } from '@mui/material';

interface AvatarProps {
    avatarImageUrl: string;
}
const CardImage = <T extends AvatarProps>({ avatarImageUrl }: T) => {

	return (
		<>
			<CardMedia
				component='img'
				alt={'t'}
				height='140'
				image={avatarImageUrl}
			/>
		</>
	);
};

export { CardImage };
