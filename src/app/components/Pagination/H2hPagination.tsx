import { Card, CardContent, Divider, Pagination, Stack } from '@mui/material';
import { ChangeEvent } from 'react';

type Props = {
	count: number;
	changePage: (page: number) => void;
	page: number;
	isFetching: boolean;
};
const H2hPagination = ({ count, changePage, page, isFetching }: Props) => {
	const handleChange = (event: ChangeEvent<unknown>, value: number) => {
		changePage(value);
	};
	return (
		<Card>
			<CardContent>
				<Stack
					alignItems="center"
					divider={<Divider flexItem variant="middle" />}
					justifyContent="center"
					spacing={2}
				>
					<Pagination
						color="primary"
						count={count}
						disabled={isFetching}
						onChange={handleChange}
						page={page}
						showFirstButton
						showLastButton
					/>
				</Stack>
			</CardContent>
		</Card>
	);
};

export { H2hPagination };
