import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import { useGetActivitiesByEntityId } from '@api/entities/activity/hooks/useGetActivitiesByEntityId';
import { H2hPagination } from '@app/components/Pagination/H2hPagination';
import { SearchOutline } from '@app/components/Searchbar/SearchOutline';

import { OrgProfileActivityCard } from './OrgProfileActivityCard';

type Props = {
	orgId: string;
};

const OrgProfileActivitiesTab = ({ orgId }: Props) => {
	const [currentPage, setCurrentPage] = useState(0);
	const limitCount = 3;
	const [searchTerm, setSearchTerm] = useState('');
	const { data, isPending, isError, error, isFetching } = useGetActivitiesByEntityId(
		orgId,
		'organization',
		currentPage,
		limitCount,
		searchTerm,
	);

	// const actionRef1 = useRef<any>(null);
	// const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);

	// const periods = [
	// 	{
	// 		value: 'popular',
	// 		text: 'Most popular',
	// 	},
	// 	{
	// 		value: 'recent',
	// 		text: 'Recent activities',
	// 	},
	// 	{
	// 		value: 'updated',
	// 		text: 'Latest updated activities',
	// 	},
	// 	{
	// 		value: 'oldest',
	// 		text: 'Oldest activities first',
	// 	},
	// ];
	// const [period, setPeriod] = useState<string>(periods[0].text);

	const handleSearch = (value: string) => {
		setSearchTerm(value);
		setCurrentPage(0);
	};

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	const activities = data?.results || [];
	const total = data?.total || 0;
	const count = Math.ceil(total / limitCount);

	return (
		<>
			<Box sx={{ mb: { xs: 2, sm: 3 } }}>
				<SearchOutline
					onSearch={handleSearch}
					placeholder="Search activities..."
					searchValue={searchTerm}
					sx={{ width: '100%' }}
				/>
			</Box>
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
				{/* <Box alignItems="center" display="flex">
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
				</Box> */}
			</Box>
			<Grid container spacing={3}>
				{activities?.map((activity) => (
					<Grid item key={activity.activityId} xs={12} sm={12} md={4}>
						<OrgProfileActivityCard activity={activity} />
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
				<H2hPagination
					changePage={setCurrentPage}
					count={count}
					isFetching={isFetching}
					page={currentPage}
				/>
			</Box>
		</>
	);
};

export { OrgProfileActivitiesTab };
