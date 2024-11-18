import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import {
	alpha,
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	Divider,
	IconButton,
	Link,
	Stack,
	Typography,
} from '@mui/material';

import { User } from '@api/entities/user';

type Props = {
	user: User;
};

const UserProfileActivityTab = ({ user }: Props) => {
	return (
		<Card>
			<CardHeader
				action={
					<IconButton color="primary">
						<MoreHorizTwoToneIcon />
					</IconButton>
				}
				avatar={
					<Avatar
						src="/avatars/5.png"
						sx={{
							width: 54,
							height: 54,
							mb: {
								xs: 1,
								sm: 0,
							},
						}}
					/>
				}
				subheader={<Typography variant="subtitle2">{user.role}</Typography>}
				subheaderTypographyProps={{ variant: 'subtitle2' }}
				sx={{
					'& .MuiCardHeader-action': {
						display: { xs: 'none', sm: 'flex' },
					},
				}}
				title="Allison Lipshutz"
				titleTypographyProps={{ variant: 'h5' }}
			/>
			<Divider />
			<Box
				p={2}
				py={{ xs: 2, sm: 3 }}
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? alpha('black', 0.02) : 'neutral.25',
				}}
			>
				<Typography fontWeight={500} variant="h4">
					Welcome to organizing your remote office for maximum productivity.
				</Typography>
			</Box>
			<CardMedia
				image="/placeholders/covers/6.jpg"
				sx={{
					minHeight: 284,
				}}
				title="Card Cover"
			/>
			<Box p={2} py={{ xs: 2, sm: 3 }}>
				<Link
					color="text.primary"
					href=""
					onClick={(e) => e.preventDefault()}
					underline="hover"
					variant="h3"
				>
					Organizing Your Remote Office for Maximum Productivity
				</Link>
				<Typography sx={{ pt: 0.5 }} variant="subtitle1">
					<Link href="" onClick={(e) => e.preventDefault()} underline="hover" variant="subtitle1">
						example.com
					</Link>{' '}
					• 4 mins read
				</Typography>
			</Box>
			<Divider />
			<CardActions
				sx={{
					display: { xs: 'block', md: 'flex' },
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Stack
					direction="row"
					flexWrap={{ xs: 'wrap', md: 'nowrap' }}
					gap={1}
					justifyContent={{ xs: 'flex-start', md: 'center' }}
				>
					<Button startIcon={<ThumbUpAltTwoToneIcon />} variant="contained">
						Like
					</Button>
					<Button startIcon={<CommentTwoToneIcon />} variant="outlined">
						Comment
					</Button>
					<Button startIcon={<ShareTwoToneIcon />} variant="outlined">
						Share
					</Button>
				</Stack>
				<Box
					sx={{
						mt: { xs: 2, md: 0 },
					}}
				>
					<Typography component="span" variant="subtitle2">
						<b>485</b> reactions • <b>63</b> comments
					</Typography>
				</Box>
			</CardActions>
		</Card>
	);
};

export { UserProfileActivityTab };
