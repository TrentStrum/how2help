import { Grid } from '@mui/material';

import { OptimizedImage } from './OptimizedImage';

interface Props {
	images: { id: string; url: string; description: string }[];
}

const GalleryGrid = ({ images }: Props) => {
	return (
		<Grid container spacing={2}>
			{images.map((image) => (
				<Grid item key={image.id} md={4} sm={6} xs={12}>
					<OptimizedImage
						alt={image.description}
						aspectRatio={4 / 3}
						src={image.url}
						sx={{
							'&:hover': {
								transform: 'scale(1.02)',
								transition: 'transform 0.2s ease-in-out',
							},
						}}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export { GalleryGrid };
