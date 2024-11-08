import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
	alpha,
	Avatar,
	Badge,
	Box,
	Button,
	Card,
	Divider,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material';

import { Activity } from '@api/entities/activity';

type Props = {
	activity: Activity;
};
const ActivityCatalogCard = ({ activity }: Props) => {
	const theme = useTheme();

	return (
		<Card
			sx={{
				position: 'relative',
				p: { xs: 2, sm: 3 },
			}}
		>
			<Box
				sx={{ position: 'absolute', right: theme.spacing(1.5), top: theme.spacing(1.5), zIndex: 7 }}
			>
				<IconButton color="primary" size="small">
					<MoreHorizTwoToneIcon />
					{/* drop down here, include quick rsvp to open modal */}
				</IconButton>
			</Box>
			<Box alignItems="center" display="flex" mb={2}>
				<Badge
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					badgeContent="24"
					color="success"
					overlap="circular"
				>
					<Avatar
						sx={{
							fontSize: theme.typography.pxToRem(16),
							background: theme.palette.common.black,
							color: theme.palette.common.white,
							borderRadius: theme.shape.borderRadius,
							width: 95,
							height: 95,
						}}
						variant="rounded"
					>
						{activity.avatarImageUrl}
					</Avatar>
				</Badge>
				<Box
					ml={1.5}
					sx={{
						width: '100%',
					}}
				>
					<Link
						color="text.primary"
						href=""
						onClick={(e) => e.preventDefault()}
						sx={{
							transition: theme.transitions.create(['color']),
							fontSize: theme.typography.pxToRem(17),
							'&:hover': {
								color: theme.palette.primary.main,
							},
						}}
						underline="none"
						variant="h5"
					>
						{activity.name}
					</Link>
					<Typography color="text.secondary" gutterBottom variant="subtitle2">
						Hashtags here
					</Typography>
				</Box>
			</Box>
			<Typography color="text.secondary" variant="subtitle1">
				{activity.description}
			</Typography>
			<Divider
				sx={{
					mt: 3,
				}}
			/>
			<List
				disablePadding
				sx={{
					my: 1.5,
				}}
			>
				<ListItem disableGutters>
					<ListItemText
						primary="Host:"
						primaryTypographyProps={{
							variant: 'subtitle2',
							fontWeight: 500,
							color: 'text.secondary',
						}}
					/>
					<Typography variant="subtitle2">{activity.organizationIds}</Typography>
				</ListItem>
				<ListItem disableGutters>
					<ListItemText
						primary="Event Date:"
						primaryTypographyProps={{
							variant: 'subtitle2',
							fontWeight: 500,
							color: 'text.secondary',
						}}
					/>
					<Typography variant="subtitle2">{activity.postedDate}</Typography>
				</ListItem>
				<ListItem disableGutters>
					<ListItemText
						primary="Location:"
						primaryTypographyProps={{
							variant: 'subtitle2',
							fontWeight: 500,
							color: 'text.secondary',
						}}
					/>
					<Typography variant="subtitle2">{activity.status}</Typography>
				</ListItem>
			</List>
			<Divider
				sx={{
					mb: 3,
				}}
			/>
			<Link href={`/activity/${activity.activityId}`}>
				<Button
					color="primary"
					fullWidth
					sx={{
						backgroundColor: alpha(theme.palette.primary.main, 0.1),
						textTransform: 'uppercase',
						py: 1,
						'&:hover': {
							backgroundColor: theme.palette.primary.main,
							color: theme.palette.primary.contrastText,
						},
					}}
					variant="text"
				>
					View activity details
				</Button>
			</Link>
		</Card>
	);
};
export { ActivityCatalogCard };
