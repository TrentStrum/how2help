import { Box, Typography, Rating, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Organization } from '@api/entities/organization';
import { useGetCausesByOrg } from '@api/entities/organization/hooks/useGetCausesByOrg';
import { OptimizedImage } from '@app/components/Images/OptimizedImage';

interface Props {
	org: Organization;
}

const OrgProfileBanner = ({ org }: Props) => {
	const navigate = useNavigate();
	const { data: causes } = useGetCausesByOrg(org.orgId.toString());

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
					alt={`${org.name} banner`}
					containerSx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}}
					src={org.bannerImageUrl ?? ''}
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
						alt={`${org.name} profile`}
						aspectRatio={1}
						borderRadius="50%"
						containerSx={{
							width: '100%',
							height: '100%',
							position: 'relative',
						}}
						src={org.avatarImageUrl ?? ''}
						sx={{
							border: '4px solid',
							borderColor: 'background.paper',
							boxShadow: 1,
						}}
					/>
				</Box>

				{/* Organization Info */}
				<Box
					sx={{
						flex: 1,
						pt: { xs: 6, sm: 7, md: 8 },
					}}
				>
					{/* Rating */}
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
						<Rating
							precision={0.5}
							readOnly
							sx={{
								'& .MuiRating-iconFilled': {
									color: 'secondary.main',
								},
							}}
							value={Number(org?.userRating) || 0}
						/>
						<Typography color="text.secondary" sx={{ ml: 1, fontWeight: 500 }} variant="body2">
							{org?.userRating || 0} out of 5
						</Typography>
					</Box>

					{/* Organization Name */}
					<Typography
						sx={{
							fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
							fontWeight: 700,
							color: 'text.primary',
							mb: 1,
						}}
						variant="h4"
					>
						{org.name}
					</Typography>
					{/* Organization Causes Tags */}
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
						{causes?.map((cause) => {
							return (
								<Chip
									key={cause.causeId}
									label={`#${cause.name}`}
									onClick={() => {
										navigate(`/cause/${cause.causeId}`);
									}}
									size="small"
									sx={{
										bgcolor: 'background.default',
										color: 'text.secondary',
										fontWeight: 500,
									}}
								/>
							);
						})}
					</Box>

					{/* Short Description */}
					{org.description ? (
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
							{org.description}
						</Typography>
					) : null}
				</Box>
			</Box>
		</Box>
	);
};

export { OrgProfileBanner };
