import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	Divider,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetCauseById } from '../../../app/api/entities/cause';
import { CauseTabs } from '../cause-tabs/CauseTabs';

const CauseProfile = () => {
	const { causeId } = useParams();
	const { data: cause, isPending, isError } = useGetCauseById(Number(causeId));

	if (causeId === undefined) return <Typography variant='body2'>Error...</Typography>;
	if (isPending) return <Typography variant='body2'>Loading...</Typography>;
	if (isError) return <Typography variant='body2'>Error...</Typography>;

	return (
		<>
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
							src={cause.avatarImageUrl}
						/>
					}
					action={
						<IconButton color='primary'>
							<MoreHorizTwoToneIcon />
						</IconButton>
					}
					titleTypographyProps={{ variant: 'h5' }}
					subheaderTypographyProps={{ variant: 'subtitle2' }}
					title={cause?.name}
				/>
				<Divider />
				<CardMedia
					sx={{
						minHeight: 380,
					}}
					image={cause.avatarImageUrl}
					title='Card Cover'
				/>
				<Box
					py={{ xs: 2, sm: 3 }}
					p={2}
				>
					<Typography
						color='text.primary'
						variant='h3'
					>
						{cause.description}
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
						p={0.5}
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
			<Box
				component='div'
				m={1}
			></Box>
			<CauseTabs cause={cause} />
		</>
	);
};

export { CauseProfile };
