import { Box, BoxProps, Skeleton } from '@mui/material';
import { useState } from 'react';

interface Props extends Omit<BoxProps, 'component'> {
	src: string;
	alt: string;
	aspectRatio?: number;
	objectFit?: 'cover' | 'contain' | 'fill';
	objectPosition?: string;
	borderRadius?: number | string;
	containerSx?: BoxProps['sx'];
}

const OptimizedImage = ({
	src,
	alt,
	aspectRatio,
	objectFit = 'cover',
	objectPosition = 'center',
	borderRadius = 1,
	sx,
	containerSx,
	...boxProps
}: Props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const handleLoad = () => setIsLoading(false);
	const handleError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	return (
		<Box
			position="relative"
			sx={{
				paddingTop: aspectRatio ? `${(1 / aspectRatio) * 100}%` : undefined,
				height: aspectRatio ? undefined : '100%',
				...containerSx,
			}}
			width="100%"
			{...boxProps}
		>
			{isLoading ? (
				<Skeleton
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						borderRadius,
					}}
					variant="rectangular"
				/>
			) : null}

			{!hasError ? (
				<Box
					alt={alt}
					component="img"
					onError={handleError}
					onLoad={handleLoad}
					src={src}
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit,
						objectPosition,
						borderRadius,
						opacity: isLoading ? 0 : 1,
						transition: 'opacity 0.3s ease-in-out',
						...sx,
					}}
				/>
			) : (
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'grey.100',
						borderRadius,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							width: '40%',
							height: '40%',
							opacity: 0.5,
							backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23999' d='M21.9 21.9l-8.49-8.49-9.82-9.82L2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3H5zm16 .17L5.83 3H19c1.1 0 2 .9 2 2v13.17z'/%3E%3C/svg%3E")`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'contain',
						}}
					/>
				</Box>
			)}
		</Box>
	);
};

export { OptimizedImage };
