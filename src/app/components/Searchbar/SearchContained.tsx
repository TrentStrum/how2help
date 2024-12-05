import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

const SearchContained = () => {
	return (
		<FormControl fullWidth variant="outlined">
			<OutlinedInput
				endAdornment={
					<InputAdornment position="end">
						<Button size="small" variant="contained">
							Search
						</Button>
					</InputAdornment>
				}
				placeholder="Search terms here..."
				startAdornment={
					<InputAdornment position="start">
						<SearchRoundedIcon />
					</InputAdornment>
				}
				sx={{
					'& .MuiInputAdornment-positionEnd': {
						mr: -0.3,
					},
				}}
				type="text"
			/>
		</FormControl>
	);
};

export { SearchContained };
