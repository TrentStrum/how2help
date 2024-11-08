import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import {
	alpha,
	Avatar,
	AvatarGroup,
	Box,
	Button,
	Card,
	CardActions,
	Chip,
	Divider,
	Grid,
	Link,
	Menu,
	MenuItem,
	Pagination,
	Rating,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { formatDistance, subDays } from 'date-fns';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { useGetActivitiesByEntityId } from '@api/entities/activity/hooks/useGetActivitiesByEntityId';
import { SearchContained } from '@app/components/Searchbar/SearchContained';

type Props = {
	orgId: string;
};

const OrgActivitySearch = ({ orgId }: Props) => {
	const theme = useTheme();
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState<number>(10);
	const { data, isPending, isError, error } = useGetActivitiesByEntityId(
		orgId,
		'Organization',
		currentPage,
		limit,
	);

	const actionRef1 = useRef<any>(null);
	const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);

	const handleDelete = () => {
		toast.error('You clicked on delete!');
	};

	const handleClick = () => {
		toast.success('You clicked on the chip!');
	};

	const periods = [
		{
			value: 'popular',
			text: 'Most popular',
		},
		{
			value: 'recent',
			text: 'Recent activities',
		},
		{
			value: 'updated',
			text: 'Latest updated activities',
		},
		{
			value: 'oldest',
			text: 'Oldest activities first',
		},
	];
	const [period, setPeriod] = useState<string>(periods[0].text);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const activities = data?.results || [];

	return (
		<>
			<SearchContained />
			<Box alignItems="center" display="flex" justifyContent="space-between" py={{ xs: 2, sm: 3 }}>
				<Box>
					<Typography color="text.secondary" variant="subtitle2">
						<Typography
							component="span"
							sx={{
								display: { xs: 'none', sm: 'inline' },
							}}
						>
							Showing:
						</Typography>{' '}
						<b>{activities?.length}</b>
					</Typography>
				</Box>
				<Box alignItems="center" display="flex">
					<Typography
						sx={{
							pr: 1,
							display: { xs: 'none', sm: 'inline' },
						}}
						variant="subtitle2"
					>
						Sort by:
					</Typography>
					<Button
						endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
						onClick={() => setOpenMenuPeriod(true)}
						ref={actionRef1}
						size="small"
						variant="outlined"
					>
						{period}
					</Button>
					<Menu
						anchorEl={actionRef1.current}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						disableScrollLock
						onClose={() => setOpenMenuPeriod(false)}
						open={openPeriod}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
					>
						{periods.map((_period) => (
							<MenuItem
								key={_period.value}
								onClick={() => {
									setPeriod(_period.text);
									setOpenMenuPeriod(false);
								}}
							>
								{_period.text}
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Box>
			<Grid container spacing={{ xs: 2, sm: 3 }}>
				{activities?.map((activity) => (
					<Grid item key={activity.activityId} lg={4} md={6} xs={12}>
						<Card
							elevation={0}
							sx={{
								p: 2,
								background: alpha(theme.palette.background.default, 0.3),
								boxShadow: theme.shadows[8],
							}}
							variant="outlined"
						>
							<Box>
								<Rating defaultValue={4.5} precision={0.5} readOnly value={4.5} />
							</Box>
							<Link
								color="text.primary"
								href=""
								onClick={(e) => e.preventDefault()}
								underline="hover"
								variant="h4"
							>
								{activity.description}
							</Link>
							<Stack direction="row" flexWrap={{ xs: 'wrap', md: 'nowrap' }} gap={1} py={2}>
								<Chip
									color="secondary"
									label="Hosting"
									onClick={handleClick}
									onDelete={handleDelete}
									size="small"
								/>
								<Chip
									color="secondary"
									label="Security"
									onClick={handleClick}
									onDelete={handleDelete}
									size="small"
								/>
							</Stack>
							<Typography
								color="text.secondary"
								sx={{
									pb: 2,
								}}
								variant="subtitle1"
							>
								Ensure optimal performance and security by upgrading the hosting platform.
							</Typography>
							<Link href={`/activity/${activity.activityId}`}>
								<Button size="small" variant="contained">
									View task
								</Button>
							</Link>
							<Divider
								sx={{
									my: 2,
								}}
							/>
							<CardActions
								sx={{
									p: 0,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<Typography
									alignItems="center"
									color="text.secondary"
									display="flex"
									noWrap
									variant="subtitle2"
								>
									<TodayTwoToneIcon
										sx={{
											mr: 1,
										}}
									/>
									{formatDistance(subDays(new Date(), 24), new Date(), {
										addSuffix: true,
									})}
								</Typography>
								<AvatarGroup>
									<Avatar alt="Travis Howard" src="/avatars/2.png" sx={{ width: 34, height: 34 }} />
									<Avatar alt="Agnes Walker" src="/avatars/4.png" sx={{ width: 34, height: 34 }} />
								</AvatarGroup>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			<Box
				alignItems="center"
				display="flex"
				justifyContent="center"
				sx={{
					pt: { xs: 2, sm: 3 },
				}}
			>
				<Pagination color="primary" count={15} defaultPage={6} shape="rounded" siblingCount={0} />
			</Box>
		</>
	);
};

export { OrgActivitySearch };
