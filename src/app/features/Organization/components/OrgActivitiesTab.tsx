import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';
import {
	Link,
	List,
	Box,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Stack,
	Typography,
	Button,
	Divider,
	CardActions,
	Pagination,
	useTheme,
} from '@mui/material';

import { Activity } from '@api/entities/activity';
import { ButtonIcon } from '@app/components/Buttons/ButtonIcon';

type Props = {
	activities?: Activity[];
};

const OrgActivitiesTab = ({ activities }: Props) => {
	const theme = useTheme();
	return (
		<>
			<List disablePadding>
				{activities?.map((activity, index) => (
					<Box key={index}>
						<ListItem
							sx={{
								display: { xs: 'block', md: 'flex' },
								py: { xs: 2, md: 3 },
							}}
						>
							<ListItemAvatar sx={{ mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
								<Link
									href="#"
									onClick={(e) => e.preventDefault()}
									sx={{
										transition: 'all 0.2s',
										opacity: 1,
										'&:hover': {
											opacity: 0.8,
										},
										display: 'inline-block',
									}}
									underline="none"
								>
									<Avatar
										alt="course"
										src={activity.avatarImageUrl}
										sx={{
											width: 'auto',
											height: 138,
										}}
										variant="rounded"
									/>
								</Link>
							</ListItemAvatar>
							<ListItemText
								primary={
									<>
										<Stack direction="row" flexWrap="wrap" gap={1} sx={{ pb: 1 }}>
											{/* {activity.tags.map((tag, tagIndex) => (
														<Chip
															color="secondary"
															key={tagIndex}
															label={tag}
															onClick={handleClick}
															onDelete={handleDelete}
															size="small"
														/>
													))} */}
										</Stack>
										<Link
											href=""
											onClick={(e) => e.preventDefault()}
											sx={{
												'&:hover': {
													color: theme.palette.primary.dark,
												},
											}}
											underline="none"
										>
											{activity.name}
										</Link>
									</>
								}
								primaryTypographyProps={{ variant: 'h4' }}
								secondary={
									<>
										{activity.startDate}
										<Box alignItems="center" display="flex" sx={{ pt: 1 }}>
											<Typography sx={{ pl: 1 }}>{activity.status}</Typography>
										</Box>
									</>
								}
								secondaryTypographyProps={{
									variant: 'subtitle2',
									sx: {
										pt: 1,
									},
								}}
							/>
							<Stack
								alignItems="center"
								direction="row"
								display="flex"
								justifyContent={{ xs: 'space-between', md: 'flex-end' }}
								spacing={1}
								sx={{ my: { xs: 2, md: 0 } }}
								whiteSpace="nowrap"
							>
								<Box alignItems="center" display="flex">
									<LocalFireDepartmentTwoToneIcon sx={{ color: 'warning.main' }} />
									<b>{activity.description}</b>
								</Box>
								<Button size="small" variant="contained">
									test
								</Button>
								<ButtonIcon
									color="secondary"
									size="small"
									startIcon={<PendingTwoToneIcon />}
									sx={{
										display: { xs: 'none', md: 'flex' },
									}}
									variant="outlined"
								/>
							</Stack>
						</ListItem>
						<Divider component="li" />
					</Box>
				))}
			</List>
			<CardActions
				disableSpacing
				sx={{
					p: { xs: 2, sm: 3 },
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Pagination color="primary" count={3} size="large" />
			</CardActions>
		</>
	);
};

export { OrgActivitiesTab };
