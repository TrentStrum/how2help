import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
	Avatar,
	Box,
	Card,
	Divider,
	IconButton,
	Link,
	Stack,
	Tooltip,
	Typography,
	useTheme,
} from '@mui/material';

import { User } from '@api/entities/user';
import { UserCardActions } from '@app/components/Cards/CardActions';

type Props = {
	user: User;
};

const UserCatalogCard = ({ user }: Props) => {
	const theme = useTheme();

	return (
		<Card
			sx={{
				position: 'relative',
				textAlign: 'center',
				p: { xs: 2, md: 4 },
			}}
		>
			<UserCardActions>
				<IconButton color="primary">
					<MoreHorizTwoToneIcon />
				</IconButton>
			</UserCardActions>
			<Link fontWeight={500} href={`/user/${user.userId}`} underline="hover" variant="subtitle1">
				<Avatar
					src={user.avatarImageUrl}
					sx={{
						mx: 'auto',
						mb: 1.5,
						width: 114,
						height: 114,
						border: `${theme.palette.common.white} solid 4px`,
						boxShadow: `0 0 0 3px ${theme.palette.error.main}`,
					}}
				/>
				<Typography variant="h4">
					{user.firstName} {user.lastName}
				</Typography>
			</Link>
			<Box display="flex" justifyContent="center">
				<Tooltip arrow placement="top" title="View details">
					<Link
						fontWeight={500}
						href={`/user/${user.userId}`}
						underline="hover"
						variant="subtitle1"
					>
						<IconButton
							size="large"
							sx={{
								width: 60,
								height: 60,
								borderRadius: 50,
							}}
						>
							<VisibilityTwoToneIcon
								sx={{
									fontSize: theme.typography.pxToRem(20),
								}}
							/>
						</IconButton>
					</Link>
				</Tooltip>
				<Tooltip arrow placement="top" title="Add to favourites">
					<IconButton
						size="large"
						sx={{
							width: 60,
							height: 60,
							borderRadius: 50,
						}}
					>
						<FavoriteTwoToneIcon
							sx={{
								fontSize: theme.typography.pxToRem(20),
							}}
						/>
					</IconButton>
				</Tooltip>
			</Box>
			<Divider
				sx={{
					mt: 1,
				}}
			/>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="space-evenly"
				spacing={2}
				sx={{
					mt: 2.5,
					textAlign: 'center',
				}}
			>
				<Box>
					<Typography variant="h4">TBD</Typography>
					<Typography color="text.secondary" variant="subtitle2">
						Lifetime events attended
					</Typography>
				</Box>
				<Box
					sx={{
						display: { xs: 'none', sm: 'block' },
					}}
				>
					<Typography variant="h4">{user.favoriteOrgs?.length}</Typography>
					<Typography color="text.secondary" variant="subtitle2">
						Favorite Organizations
					</Typography>
				</Box>
				<Box>
					<Typography variant="h4">{user.favoriteCauses?.length}</Typography>
					<Typography color="text.secondary" variant="subtitle2">
						Favorite Causes
					</Typography>
				</Box>
			</Stack>
		</Card>
	);
};

export { UserCatalogCard };
