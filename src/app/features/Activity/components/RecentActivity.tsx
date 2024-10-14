import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import { Card, CardHeader, Divider, Box, Typography } from '@mui/material';

import { AvatarState } from '@app/components/Avatar/Avatar';

const RecentActivity = () => {
	return (
		<Card>
			<CardHeader title="Recent Activity" />
			<Divider />
			<Box alignItems="flex-start" display="flex" px={2} py={{ xs: 2, sm: 3 }}>
				<AvatarState
					isSoft
					state="primary"
					sx={{
						width: 42,
						height: 42,
					}}
				>
					<ShoppingBagTwoToneIcon fontSize="small" />
				</AvatarState>
				<Box flex={1} pl={2}>
					<Typography sx={{ pt: 0.7 }} variant="h3">
						Orders
					</Typography>

					<Box display="flex" pt={1}>
						<Box minWidth={180} pr={3}>
							<Typography color="text.secondary" fontSize={16} gutterBottom variant="caption">
								Total
							</Typography>
							<Typography variant="h2">485</Typography>
						</Box>
						<Box display={{ xs: 'none', lg: 'block' }}>
							<Typography color="text.secondary" fontSize={16} gutterBottom variant="caption">
								Failed
							</Typography>
							<Typography variant="h2">8</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
			<Divider />
			<Box alignItems="flex-start" display="flex" px={2} py={{ xs: 2, sm: 3 }}>
				<AvatarState
					isSoft
					state="primary"
					sx={{
						width: 42,
						height: 42,
					}}
				>
					<FavoriteTwoToneIcon fontSize="small" />
				</AvatarState>
				<Box flex={1} pl={2}>
					<Typography sx={{ pt: 0.7 }} variant="h3">
						Favourites
					</Typography>

					<Box display="flex" pt={1}>
						<Box minWidth={180} pr={3}>
							<Typography color="text.secondary" fontSize={16} gutterBottom variant="caption">
								Products
							</Typography>
							<Typography variant="h2">64</Typography>
						</Box>
						<Box display={{ xs: 'none', lg: 'block' }}>
							<Typography color="text.secondary" fontSize={16} gutterBottom variant="caption">
								Lists
							</Typography>
							<Typography variant="h2">15</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
			<Divider />
			<Box alignItems="flex-start" display="flex" px={2} py={{ xs: 2, sm: 3 }}>
				<AvatarState
					isSoft
					state="primary"
					sx={{
						width: 42,
						height: 42,
					}}
				>
					<StarTwoToneIcon fontSize="small" />
				</AvatarState>
				<Box flex={1} pl={2}>
					<Typography sx={{ pt: 0.7 }} variant="h3">
						Reviews
					</Typography>

					<Box display="flex" pt={1}>
						<Box minWidth={180} pr={3}>
							<Typography color="text.secondary" fontSize={16} gutterBottom variant="caption">
								Total
							</Typography>
							<Typography variant="h2">642</Typography>
						</Box>
						<Box display={{ xs: 'none', lg: 'block' }}>
							<Typography color="text.secondary" fontSize={16} gutterBottom variant="caption">
								Useful
							</Typography>
							<Typography variant="h2">21</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Card>
	);
};

export { RecentActivity };
