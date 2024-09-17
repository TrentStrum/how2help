import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

const SearchContained = () => {
	return (
		<FormControl
			variant='outlined'
			fullWidth
		>
			<OutlinedInput
				type='text'
				placeholder='Search terms here...'
				sx={{
					'& .MuiInputAdornment-positionEnd': {
						mr: -0.3,
					},
				}}
				endAdornment={
					<InputAdornment position='end'>
						<Button
							variant='contained'
							size='small'
						>
							Search
						</Button>
					</InputAdornment>
				}
				startAdornment={
					<InputAdornment position='start'>
						<SearchRoundedIcon />
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};

export { SearchContained };
