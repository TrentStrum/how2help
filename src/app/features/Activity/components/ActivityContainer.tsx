/* eslint-disable @typescript-eslint/ban-ts-comment */
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import {
	alpha,
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Chip,
	Divider,
	Link,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	MenuItem,
	Pagination,
	Select,
	Stack,
	Tabs,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { ChangeEvent, ReactElement, useState } from 'react';
import { toast } from 'react-toastify';

import { AvatarState } from '@app/components/Avatar/Avatar';
import BaseButtonTab from '@app/components/Buttons/BaseButtonTab';
import { ButtonIcon } from '@app/components/Buttons/ButtonIcon';

type CourseItem = {
	imageSrc: string;
	tags: string[];
	title: string;
	dateRange: string;
	statusIcon: ReactElement;
	statusText: string;
	score: number;
	buttonLabel: string;
	buttonVariant: 'outlined' | 'contained';
};

const ActivityContainer = () => {
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const courseData: CourseItem[] = [
		{
			imageSrc: '/placeholders/covers/landscape1.png',
			tags: ['Software', 'Development', 'AML'],
			title: 'Machine learning basics: Regression',
			dateRange: 'March 14, 2021 - March 28, 2021',
			statusIcon: <TimerTwoToneIcon />,
			statusText: 'In Progress',
			score: 9.2,
			buttonLabel: 'View course',
			buttonVariant: 'outlined',
		},
		{
			imageSrc: '/placeholders/covers/landscape2.png',
			tags: ['Dev Tools', 'Frontend'],
			title: 'Project Management: Managing Front-End Planning',
			dateRange: 'April 5, 2021 - April 12, 2021',
			statusIcon: <CheckTwoToneIcon />,
			statusText: 'Completed',
			score: 6.4,
			buttonLabel: 'Get your certificate',
			buttonVariant: 'contained',
		},
	];

	const handleDelete = () => {
		toast.error('You clicked on delete!');
	};

	const handleClick = () => {
		toast.success('You clicked on the chip!');
	};

	const [currentTab, setCurrentTab] = useState<number>(0);

	const tabs = [
		{ value: 0, label: 'All Courses' },
		{ value: 1, label: 'Active' },
		{ value: 2, label: 'Upcoming' },
	];

	const handleTabsChange = (_event: ChangeEvent<object>, value: number): void => {
		setCurrentTab(value);
	};

	const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
		setCurrentTab(event.target.value as number);
	};

	return (
		<Card>
			<CardContent
				sx={{
					pb: 0,
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
				}}
			>
				<CardHeader
					subheader="Explore our curated selection of recent courses, featuring the latest in industry trends, skill development, and cutting-edge techniques"
					sx={{
						p: 0,
						mb: 2,
					}}
					title="Recent Courses"
				/>
				{smUp ? (
					<Tabs
						onChange={handleTabsChange}
						sx={{
							overflow: 'visible',

							'& .MuiTabs-indicator': {
								display: 'none',
							},

							'& .MuiTabs-scroller': {
								overflow: 'visible !important',
							},
						}}
						value={currentTab}
					>
						{tabs.map((tab) => (
							<BaseButtonTab
								componentType="tab"
								key={tab.value}
								label={tab.label}
								value={tab.value}
							/>
						))}
					</Tabs>
				) : (
					<Select
						fullWidth
						sx={{
							mb: 2,
						}}
						value={currentTab}
						//@ts-ignore
						onChange={handleSelectChange}
					>
						{tabs.map((tab) => (
							<MenuItem key={tab.value} value={tab.value}>
								{tab.label}
							</MenuItem>
						))}
					</Select>
				)}
			</CardContent>
			<Divider />

			{currentTab === 0 ? (
				<>
					<List disablePadding>
						{courseData.map((course, index) => (
							<Box key={index}>
								<ListItem
									sx={{
										display: { xs: 'block', md: 'flex' },
										py: { xs: 2, md: 3 },
									}}
								>
									<ListItemAvatar sx={{ mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
										<Link
											href=""
											onClick={(e) => e.preventDefault()}
											sx={{
												transition: 'all .2s',
												opacity: 1,
												'&:hover': { opacity: 0.8 },
											}}
											underline="none"
										>
											<Avatar
												alt="course"
												src={course.imageSrc}
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
													{course.tags.map((tag, tagIndex) => (
														<Chip
															color="secondary"
															key={tagIndex}
															label={tag}
															onClick={handleClick}
															onDelete={handleDelete}
															size="small"
														/>
													))}
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
													{course.title}
												</Link>
											</>
										}
										primaryTypographyProps={{ variant: 'h4' }}
										secondary={
											<>
												{course.dateRange}
												<Box alignItems="center" display="flex" sx={{ pt: 1 }}>
													{course.statusIcon}
													<Typography sx={{ pl: 1 }}>{course.statusText}</Typography>
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
											<b>{course.score}</b>
										</Box>
										<Button size="small" variant={course.buttonVariant}>
											{course.buttonLabel}
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
			) : null}

			{currentTab === 1 ? (
				<Box
					sx={{
						py: { xs: 2, md: 6, lg: 8 },
						textAlign: 'center',
					}}
				>
					<AvatarState
						isSoft
						state="warning"
						sx={{
							width: 84,
							height: 84,
							mx: 'auto',
							mb: 2,
						}}
					>
						<NotificationsActiveTwoToneIcon />
					</AvatarState>
					<Typography variant="h4">Start learning today!</Typography>
					<Typography
						color="text.secondary"
						fontWeight={400}
						sx={{
							pb: 2,
							px: 3,
						}}
						variant="h5"
					>
						Browse over 500 quality courses to start learning something useful today!
					</Typography>
					<Button
						color="warning"
						sx={{
							borderWidth: '2px',
							'&:hover': {
								borderWidth: '2px',
							},
						}}
						variant="outlined"
					>
						Browse courses
					</Button>
				</Box>
			) : null}

			{currentTab === 2 ? (
				<Box
					sx={{
						py: { xs: 2, md: 6, lg: 8 },
						textAlign: 'center',
					}}
				>
					<AvatarState
						isSoft
						state="info"
						sx={{
							width: 84,
							height: 84,
							mx: 'auto',
							mb: 2,
						}}
					>
						<InsertInvitationTwoToneIcon />
					</AvatarState>
					<Typography variant="h4">Upcoming events</Typography>
					<Typography
						color="text.secondary"
						fontWeight={400}
						sx={{
							px: 3,
							pb: 2,
						}}
						variant="h5"
					>
						Right now there are no upcoming events available!
					</Typography>
					<Button
						color="info"
						startIcon={<MarkEmailReadTwoToneIcon />}
						sx={{
							borderWidth: '2px',
							'&:hover': {
								borderWidth: '2px',
							},
						}}
						variant="outlined"
					>
						Subscribe to newsletter
					</Button>
				</Box>
			) : null}
		</Card>
	);
};

export { ActivityContainer };
