import { Box, Chip, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

import { useGetCausesByEntityId } from '@api/entities/cause/hooks/useGetCausesByEntityId';

interface Props {
	orgId: number;
}

const OrgCauses = ({ orgId }: Props) => {
	const { data: causes, isPending, isError, error } = useGetCausesByEntityId(orgId);

	console.log('Causes:', { causes, isPending, isError, error, orgId });

	if (isPending) {
		return (
			<Box display="flex" gap={1}>
				{[1, 2, 3].map((i) => (
					<Skeleton height={32} key={i} variant="rounded" width={80} />
				))}
			</Box>
		);
	}

	if (isError || !causes || !Array.isArray(causes)) {
		return null;
	}

	return (
		<Box>
			<Box display="flex" flexWrap="wrap" gap={1}>
				{causes.map((cause) => (
					<Link
						key={cause.causeId}
						style={{ textDecoration: 'none' }}
						to={`/causes/${cause.causeId}`}
					>
						<Chip
							color="primary"
							label={`# ${cause.name}`}
							size="small"
							sx={{
								transition: 'all 0.2s ease-in-out',
								'&:hover': {
									backgroundColor: 'primary.main',
									color: 'white',
									transform: 'translateY(-1px)',
									boxShadow: 1,
								},
							}}
							variant="outlined"
						/>
					</Link>
				))}
			</Box>
		</Box>
	);
};

export { OrgCauses };
