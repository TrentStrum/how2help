import { Card, CardHeader, Divider, Box, Typography } from "@mui/material";
import { AvatarState } from "../../components/ui/avatar";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';


const RecentActivity = () => {

    return (
		<Card>
			<CardHeader title='Recent Activity'/>
			<Divider />
			<Box
				px={2}
				py={{ xs: 2, sm: 3 }}
				display='flex'
				alignItems='flex-start'
			>
				<AvatarState
					state='primary'
					isSoft
					sx={{
						width: 42,
						height: 42,
					}}
				>
					<ShoppingBagTwoToneIcon fontSize='small' />
				</AvatarState>
				<Box
					pl={2}
					flex={1}
				>
					<Typography
						sx={{ pt: 0.7 }}
						variant='h3'
					>
						Orders
					</Typography>

					<Box
						pt={1}
						display='flex'
					>
						<Box
							pr={3}
							minWidth={180}
						>
							<Typography
								gutterBottom
								variant='caption'
								fontSize={16}
								color='text.secondary'
							>
								Total
							</Typography>
							<Typography variant='h2'>485</Typography>
						</Box>
						<Box display={{ xs: 'none', lg: 'block' }}>
							<Typography
								gutterBottom
								variant='caption'
								fontSize={16}
								color='text.secondary'
							>
								Failed
							</Typography>
							<Typography variant='h2'>8</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
			<Divider />
			<Box
				px={2}
				py={{ xs: 2, sm: 3 }}
				display='flex'
				alignItems='flex-start'
			>
				<AvatarState
					state='primary'
					isSoft
					sx={{
						width: 42,
						height: 42,
					}}
				>
					<FavoriteTwoToneIcon fontSize='small' />
				</AvatarState>
				<Box
					pl={2}
					flex={1}
				>
					<Typography
						sx={{ pt: 0.7 }}
						variant='h3'
					>
						Favourites
					</Typography>

					<Box
						pt={1}
						display='flex'
					>
						<Box
							pr={3}
							minWidth={180}
						>
							<Typography
								gutterBottom
								variant='caption'
								fontSize={16}
								color='text.secondary'
							>
								Products
							</Typography>
							<Typography variant='h2'>64</Typography>
						</Box>
						<Box display={{ xs: 'none', lg: 'block' }}>
							<Typography
								gutterBottom
								variant='caption'
								fontSize={16}
								color='text.secondary'
							>
								Lists
							</Typography>
							<Typography variant='h2'>15</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
			<Divider />
			<Box
				px={2}
				py={{ xs: 2, sm: 3 }}
				display='flex'
				alignItems='flex-start'
			>
				<AvatarState
					state='primary'
					isSoft
					sx={{
						width: 42,
						height: 42,
					}}
				>
					<StarTwoToneIcon fontSize='small' />
				</AvatarState>
				<Box
					pl={2}
					flex={1}
				>
					<Typography
						sx={{ pt: 0.7 }}
						variant='h3'
					>
						Reviews
					</Typography>

					<Box
						pt={1}
						display='flex'
					>
						<Box
							pr={3}
							minWidth={180}
						>
							<Typography
								gutterBottom
								variant='caption'
								fontSize={16}
								color='text.secondary'
							>
								Total
							</Typography>
							<Typography variant='h2'>642</Typography>
						</Box>
						<Box display={{ xs: 'none', lg: 'block' }}>
							<Typography
								gutterBottom
								variant='caption'
								fontSize={16}
								color='text.secondary'
							>
								Useful
							</Typography>
							<Typography variant='h2'>21</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Card>
	);
};

export { RecentActivity };