import ClearIcon from '@mui/icons-material/Clear';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Box, InputAdornment, TextField, IconButton } from '@mui/material';
import { useState } from 'react';

type Props = {
	onSearch: (value: string) => void;
	searchValue: string;
	placeholder?: string;
	sx?: object;
};

const SearchOutline = ({
	onSearch,
	searchValue,
	placeholder = 'Search by organization name...',
	sx,
}: Props) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleClear = () => {
		onSearch('');
	};

	return (
		<Box sx={{ ...sx }}>
			<TextField
				InputProps={{
					startAdornment: !isFocused && (
						<InputAdornment position="start" sx={{ ml: 1 }}>
							<SearchTwoToneIcon />
						</InputAdornment>
					),
					endAdornment: searchValue && (
						<InputAdornment position="end">
							<IconButton
								onClick={handleClear}
								size="small"
								sx={{
									color: 'text.secondary',
									'&:hover': {
										color: 'text.primary',
									},
								}}
							>
								<ClearIcon fontSize="small" />
							</IconButton>
						</InputAdornment>
					),
				}}
				onBlur={() => setIsFocused(false)}
				onChange={(e) => onSearch(e.target.value)}
				onFocus={() => setIsFocused(true)}
				placeholder={isFocused ? '' : placeholder}
				sx={{
					width: '100%',
					'& .MuiInputBase-root': {
						borderRadius: 2,
						bgcolor: 'background.paper',
						boxShadow: isFocused ? 4 : 1,
						transition: 'box-shadow 0.3s ease-in-out',
					},
					'& .MuiInputBase-input': {
						pl: isFocused ? 2 : 1,
						py: 2,
					},
				}}
				value={searchValue}
			/>
		</Box>
	);
};

export { SearchOutline };
