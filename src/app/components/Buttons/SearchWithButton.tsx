import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

const SearchWithButton = () => {
	return (
		<FormControl fullWidth variant="outlined">
			<OutlinedInput
				endAdornment={
					<InputAdornment position="end" sx={{ mr: -0.4 }}>
						<Button color="secondary" size="small" variant="outlined">
							Search
						</Button>
					</InputAdornment>
				}
				placeholder="Search terms here..."
				startAdornment={
					<InputAdornment position="start">
						<SearchTwoToneIcon />
					</InputAdornment>
				}
				type="text"
			/>
		</FormControl>
	);
};

export { SearchWithButton };
