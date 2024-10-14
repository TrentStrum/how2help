import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {
	alpha,
	Avatar,
	Box,
	Button,
	Card,
	CardHeader,
	Divider,
	Grid,
	Typography,
} from '@mui/material';

const Feed = () => {
	const feed = [
		{
			name: 'Munroe Dacks',
			jobTitle: 'Senior Cost Accountant',
			company: 'Trudoo',
			avatar: '/avatars/1.png',
		},
		{
			name: 'Gunilla Canario',
			jobTitle: 'Associate Professor',
			company: 'Buzzdog',
			avatar: '/avatars/2.png',
		},
		{
			name: 'Rowena Geistmann',
			jobTitle: 'Pharmacist',
			company: 'Yozio',
			avatar: '/avatars/3.png',
		},
		{
			name: 'Ede Stoving',
			jobTitle: 'VP Product Management',
			company: 'Cogibox',
			avatar: '/avatars/4.png',
		},
		{
			name: 'Crissy Spere',
			jobTitle: 'Social Worker',
			company: 'Babbleblab',
			avatar: '/avatars/5.png',
		},
		{
			name: 'Michel Greatbanks',
			jobTitle: 'Research Assistant III',
			company: 'Aimbu',
			avatar: '/avatars/1.png',
		},
	];

	return (
		<Card>
			<CardHeader
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? alpha('black', 0.02) : 'neutral.25',
				}}
				title="Followers Feed"
			/>
			<Divider />
			<Box p={2}>
				<Grid container>
					{feed.map((_feed) => (
						<Grid key={_feed.name} lg={4} sm={6} xs={12}>
							<Box alignItems="flex-start" display="flex" p={{ xs: 2, sm: 3 }}>
								<Avatar src={_feed.avatar} />
								<Box flex={1} overflow="hidden" pl={2}>
									<Typography color="text.secondary" gutterBottom noWrap variant="subtitle1">
										{_feed.company}
									</Typography>
									<Typography fontWeight={500} noWrap variant="h5">
										{_feed.name}
									</Typography>
									<Typography
										color="text.primary"
										noWrap
										sx={{
											pb: 2,
										}}
									>
										{_feed.jobTitle}
									</Typography>
									<Button size="small" startIcon={<AddTwoToneIcon />} variant="outlined">
										Follow
									</Button>
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</Card>
	);
};

export { Feed };
