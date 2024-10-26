import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import {
	Box,
	Card,
	IconButton,
	InputAdornment,
	TablePagination,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';

import { useGetUsersAll } from '@api/entities/user';

import { UserCatalogGridView } from './UserCatalogGridView';
import { UserCatalogTableView } from './UserCatalogTableView';

const UserCatalogDisplay = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [limit, setLimit] = useState<number>(10);
	const [toggleView, setToggleView] = useState<string>('grid_view');

	const [query, setQuery] = useState<string>('');
	const { data, isPending, isError, error } = useGetUsersAll(currentPage, limit);

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">{error.message}</Typography>;

	let users = data.results;

	const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setQuery(event.target.value);
	};

	const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string) => {
		if (newValue !== null) {
			setToggleView(newValue);
		}
	};

	const handlePageChange = (_event: any, newPage: number): void => {
		setCurrentPage(newPage);
	};

	const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setLimit(parseInt(event.target.value));
	};

	return (
		<>
			<Box alignItems="center" display="flex" justifyContent="space-between" py={2}>
				<TextField
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchTwoToneIcon />
							</InputAdornment>
						),
						endAdornment: query && (
							<InputAdornment position="end" sx={{ mr: -0.7 }}>
								<IconButton
									aria-label="clear input"
									color="error"
									edge="end"
									onClick={() => setQuery('')}
									size="small"
									sx={{ color: 'error.main' }}
								>
									<ClearRoundedIcon fontSize="small" />
								</IconButton>
							</InputAdornment>
						),
					}}
					margin="none"
					onChange={handleQueryChange}
					placeholder="Filter results"
					size="small"
					value={query}
					variant="outlined"
				/>
			</Box>
			<Box alignContent="center" ml="auto">
				<ToggleButtonGroup
					color="primary"
					exclusive
					onChange={handleViewOrientation}
					size="large"
					sx={{ ml: 1 }}
					value={toggleView}
				>
					<ToggleButton value="table_view">
						<TableRowsTwoToneIcon />
					</ToggleButton>
					<ToggleButton value="grid_view">
						<GridViewTwoToneIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>

			<Box alignItems="center" display="flex" justifyContent="left" width="100%">
				{users.length === 0 ? (
					<Typography
						align="center"
						color="text.secondary"
						fontWeight={500}
						sx={{ py: { xs: 2, sm: 3, md: 6, lg: 10 } }}
						variant="h3"
					>
						We couldn&apos;t find any users matching your search criteria
					</Typography>
				) : toggleView === 'table_view' ? (
					<UserCatalogTableView users={users} />
				) : (
					<UserCatalogGridView users={users} />
				)}
			</Box>
			<Card
				sx={{
					p: 2,
					mt: 3,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',

					'.MuiTablePagination-select': {
						py: 0.55,
					},
				}}
			>
				<Box>
					{limit > users.length ? (
						<Typography component="span" variant="subtitle1">
							Showing <b>{users.length}</b> of <b>{users.length}</b> <b>users</b>
						</Typography>
					) : (
						<Typography component="span" variant="subtitle1">
							Showing <b>{limit}</b> of <b>{users.length}</b> <b>users</b>
						</Typography>
					)}
				</Box>
				<TablePagination
					component="div"
					count={users.length}
					onPageChange={handlePageChange}
					onRowsPerPageChange={handleLimitChange}
					page={currentPage}
					rowsPerPage={limit}
					rowsPerPageOptions={[5, 10, 15]}
					slotProps={{
						select: {
							variant: 'outlined',
							size: 'small',
							sx: {
								p: 0,
							},
						},
					}}
				/>
			</Card>
		</>
	);
};

export { UserCatalogDisplay };
