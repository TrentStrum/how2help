import FilterListIcon from '@mui/icons-material/FilterList';
import { Button } from '@mui/material';

interface FilterButtonProps {
	onFilterClick: () => void;
	totalActiveFilters?: number;
}

const SearchOutlineFilters = ({ onFilterClick, totalActiveFilters = 0 }: FilterButtonProps) => {
	return (
		<Button
			onClick={onFilterClick}
			startIcon={<FilterListIcon />}
			sx={{ px: 3 }}
			variant="outlined"
		>
			Filters {totalActiveFilters > 0 ? `(${totalActiveFilters})` : null}
		</Button>
	);
};

export { SearchOutlineFilters };
