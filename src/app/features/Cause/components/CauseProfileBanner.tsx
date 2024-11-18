import { Box, Typography } from '@mui/material';

import { Cause } from '@api/entities/cause';
import { OptimizedImage } from '@app/components/Images/OptimizedImage';

interface Props {
	cause: Cause;
}

const CauseProfileBanner = ({ cause }: Props) => {
	return (
		<Box sx={{ position: 'relative', mb: { xs: 3, sm: 4 } }}>
			{/* Banner Image Container */}
			<Box
				sx={{
					width: '100%',
					height: { xs: 200, sm: 280, md: 320 },
					position: 'relative',
					overflow: 'hidden',
					borderRadius: 2,
				}}
			>
				<OptimizedImage
					alt={`${cause.name} banner`}
					containerSx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}}
					src={cause.bannerImageUrl ?? ''}
					sx={{ width: '100%', height: '100%' }}
				/>
			</Box>

			{/* Profile Image and Content Container */}
			<Box
				sx={{
					position: 'relative',
					px: { xs: 3, sm: 4 },
					mt: { xs: -5, sm: -6, md: -7 },
					display: 'flex',
					gap: { xs: 2, sm: 3 },
				}}
			>
				{/* Profile Image */}
				<Box
					sx={{
						width: { xs: 100, sm: 120, md: 150 },
						height: { xs: 100, sm: 120, md: 150 },
						flexShrink: 0,
					}}
				>
					<OptimizedImage
						alt={`${cause.name} profile`}
						aspectRatio={1}
						borderRadius="50%"
						containerSx={{
							width: '100%',
							height: '100%',
							position: 'relative',
						}}
						src={cause.avatarImageUrl ?? ''}
						sx={{
							border: '4px solid',
							borderColor: 'background.paper',
							boxShadow: 1,
						}}
					/>
				</Box>

				{/* Cause Info */}
				<Box
					sx={{
						flex: 1,
						pt: { xs: 6, sm: 7, md: 8 },
					}}
				>
					{/* Cause Name */}
					<Typography
						sx={{
							fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
							fontWeight: 700,
							color: 'text.primary',
							mb: 1,
						}}
						variant="h4"
					>
						{cause.name}
					</Typography>

					{/* Short Description */}
					{cause.description ? (
						<Typography
							sx={{
								color: 'text.secondary',
								display: '-webkit-box',
								WebkitLineClamp: 2,
								WebkitBoxOrient: 'vertical',
								overflow: 'hidden',
								lineHeight: 1.6,
								fontWeight: 500,
							}}
							variant="subtitle1"
						>
							{cause.description}
						</Typography>
					) : null}
				</Box>
			</Box>
		</Box>
	);
};

export { CauseProfileBanner };
