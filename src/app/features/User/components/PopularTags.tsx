import {
	alpha,
	Avatar,
	Card,
	CardHeader,
	Divider,
	List,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	ListSubheader,
} from '@mui/material';

const PopularTags = () => {
	return (
		<Card
			sx={{
				height: '100%',
			}}
		>
			<CardHeader title="Popular Tags" />
			<Divider />
			<List
				disablePadding
				sx={{
					'.MuiListItem-root': {
						borderRadius: 0,
					},
				}}
			>
				<ListItemButton>
					<ListItemText primary="#HTML" />
				</ListItemButton>
				<Divider />
				<ListItemButton>
					<ListItemText primary="#software_development" />
				</ListItemButton>
				<Divider />
				<ListItemButton>
					<ListItemText primary="#TrendingInfuencers" />
				</ListItemButton>
				<Divider />
				<ListItemButton>
					<ListItemText primary="#investorsWatch2022" />
				</ListItemButton>
				<Divider />
				<ListSubheader
					sx={{
						py: 0.5,
						backgroundColor: (theme) =>
							theme.palette.mode === 'dark' ? alpha('black', 0.02) : 'neutral.25',
					}}
				>
					Groups
				</ListSubheader>
				<Divider />
				<ListItemButton>
					<ListItemAvatar>
						<Avatar
							sx={{
								width: 38,
								height: 38,
								backgroundColor: 'info.main',
								color: 'info.contrastText',
							}}
						>
							DL
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary="Web Designers Lounge"
						primaryTypographyProps={{
							variant: 'h5',
							fontWeight: 500,
						}}
					/>
				</ListItemButton>
				<Divider />
				<ListItemButton>
					<ListItemAvatar>
						<Avatar
							sx={{
								width: 38,
								height: 38,
								backgroundColor: 'error.main',
								color: 'error.contrastText',
							}}
						>
							DD
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary="Writer's Digest Daily"
						primaryTypographyProps={{
							variant: 'h5',
							fontWeight: 500,
						}}
					/>
				</ListItemButton>
				<Divider />
				<ListItemButton>
					<ListItemAvatar>
						<Avatar
							src="/placeholders/logo/google-icon.svg"
							sx={{
								width: 38,
								height: 38,
							}}
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Google Developers"
						primaryTypographyProps={{
							variant: 'h5',
							fontWeight: 500,
						}}
					/>
				</ListItemButton>
			</List>
		</Card>
	);
};

export { PopularTags };
