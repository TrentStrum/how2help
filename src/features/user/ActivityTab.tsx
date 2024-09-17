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

const ActivityTab = () => {
	return (
		<Card>
			<CardHeader
				sx={{
					'& .MuiCardHeader-action': {
						display: { xs: 'none', sm: 'flex' },
					},
				}}
				avatar={
					<Avatar
						sx={{
							width: 54,
							height: 54,
							mb: {
								xs: 1,
								sm: 0,
							},
						}}
						src='/avatars/5.png'
					/>
				}
				action={
					<IconButton color='primary'>
						<MoreHorizTwoToneIcon />
					</IconButton>
				}
				titleTypographyProps={{ variant: 'h5' }}
				subheaderTypographyProps={{ variant: 'subtitle2' }}
				title='Allison Lipshutz'
				subheader={
					<>
						Managing Partner,{' '}
						<Link
							underline='hover'
							href=''
							onClick={(e) => e.preventDefault()}
						>
							#software
						</Link>
						,{' '}
						<Link
							underline='hover'
							href=''
							onClick={(e) => e.preventDefault()}
						>
							#managers
						</Link>
						, Google Inc.
					</>
				}
			/>
			<Divider />
			<Box
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? alpha('black', 0.02) : 'neutral.25',
				}}
				py={{ xs: 2, sm: 3 }}
				p={2}
			>
				<Typography
					variant='h4'
					fontWeight={500}
				>
					Welcome to organizing your remote office for maximum productivity.
				</Typography>
			</Box>
			<CardMedia
				sx={{
					minHeight: 284,
				}}
				image='/placeholders/covers/6.jpg'
				title='Card Cover'
			/>
			<Box
				py={{ xs: 2, sm: 3 }}
				p={2}
			>
				<Link
					underline='hover'
					variant='h3'
					color='text.primary'
					href=''
					onClick={(e) => e.preventDefault()}
				>
					Organizing Your Remote Office for Maximum Productivity
				</Link>
				<Typography
					variant='subtitle1'
					sx={{ pt: 0.5 }}
				>
					<Link
						variant='subtitle1'
						href=''
						underline='hover'
						onClick={(e) => e.preventDefault()}
					>
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
					gap={1}
					direction='row'
					flexWrap={{ xs: 'wrap', md: 'nowrap' }}
					justifyContent={{ xs: 'flex-start', md: 'center' }}
				>
					<Button
						startIcon={<ThumbUpAltTwoToneIcon />}
						variant='contained'
					>
						Like
					</Button>
					<Button
						startIcon={<CommentTwoToneIcon />}
						variant='outlined'
					>
						Comment
					</Button>
					<Button
						startIcon={<ShareTwoToneIcon />}
						variant='outlined'
					>
						Share
					</Button>
				</Stack>
				<Box
					sx={{
						mt: { xs: 2, md: 0 },
					}}
				>
					<Typography
						variant='subtitle2'
						component='span'
					>
						<b>485</b> reactions • <b>63</b> comments
					</Typography>
				</Box>
			</CardActions>
		</Card>
	);
};

export { ActivityTab };
