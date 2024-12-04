import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Badge,
	Box,
	Button,
	Checkbox,
	Chip,
	Drawer,
	FormControlLabel,
	FormGroup,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { getSuggestedFilters, saveFilterPreferences } from '@api/utils/filterHelpers';

interface FilterSection {
	id: string;
	label: string;
	defaultExpanded?: boolean;
	tooltip?: string;
	options: {
		value: string;
		label: string;
		count?: number;
		tooltip?: string;
	}[];
}

interface FilterDrawerProps {
	open: boolean;
	onClose: () => void;
	sections: FilterSection[];
	activeFilters: Record<string, string[]>;
	tempFilters: Record<string, string[]>;
	onFilterChange: (type: string, value: string) => void;
	onApplyFilters: () => void;
	filterCounts?: Record<string, Record<string, number>>;
	catalogType: 'org' | 'event' | 'activity' | 'cause';
}

export const FilterDrawer = ({
	open,
	onClose,
	sections,
	activeFilters,
	tempFilters,
	onFilterChange,
	onApplyFilters,
	filterCounts,
	catalogType,
}: FilterDrawerProps) => {
	const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});
	const [suggestedFilters, setSuggestedFilters] = useState<
		{ type: string; value: string; label: string; count: number }[]
	>([]);

	// Update suggested filters when active filters change
	useEffect(() => {
		if (filterCounts) {
			const suggestions = getSuggestedFilters(activeFilters, filterCounts);
			setSuggestedFilters(suggestions);
		}
	}, [activeFilters, filterCounts]);

	// Save preferences when filters are applied
	useEffect(() => {
		saveFilterPreferences(catalogType, activeFilters);
	}, [activeFilters, catalogType]);

	const handleSearch = (sectionId: string, term: string) => {
		setSearchTerms((prev) => ({ ...prev, [sectionId]: term }));
	};

	const filterOptions = (options: FilterSection['options'], sectionId: string) => {
		const searchTerm = searchTerms[sectionId]?.toLowerCase() || '';
		return options.filter((option) => option.label.toLowerCase().includes(searchTerm));
	};

	return (
		<Drawer
			PaperProps={{
				sx: { width: { xs: '100%', sm: 400 } },
			}}
			anchor="right"
			onClose={onClose}
			open={open}
		>
			<Box
				sx={{
					p: 3,
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
				}}
			>
				{/* Header */}
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
					<Typography variant="h6">Filters</Typography>
					<IconButton onClick={onClose}>
						<CloseIcon />
					</IconButton>
				</Box>

				{/* Filter Content */}
				<Box sx={{ flex: 1, overflow: 'auto' }}>
					<Stack spacing={3}>
						{/* Suggested Filters */}
						{suggestedFilters.length > 0 && (
							<Box>
								<Typography sx={{ mb: 2 }} variant="subtitle1">
									Suggested Filters
								</Typography>
								<Stack direction="row" flexWrap="wrap" gap={1}>
									{suggestedFilters.map((filter) => (
										<Tooltip
											key={`${filter.type}-${filter.value}`}
											title={`${filter.count} items match this filter`}
										>
											<Chip
												label={filter.label}
												onClick={() => onFilterChange(filter.type, filter.value)}
												color={
													tempFilters[filter.type]?.includes(filter.value)
														? 'primary'
														: 'default'
												}
												sx={{ mb: 1 }}
											/>
										</Tooltip>
									))}
								</Stack>
							</Box>
						)}

						{/* Filter Sections */}
						{sections.map((section) => (
							<Accordion key={section.id} defaultExpanded={section.defaultExpanded}>
								<Tooltip title={section.tooltip || ''}>
									<AccordionSummary expandIcon={<ExpandMoreIcon />}>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between',
												width: '100%',
												pr: 2,
											}}
										>
											<Typography variant="subtitle1">{section.label}</Typography>
											<Badge
												badgeContent={tempFilters[section.id]?.length || 0}
												color="primary"
											/>
										</Box>
									</AccordionSummary>
								</Tooltip>
								<AccordionDetails>
									{/* Search field for sections with many options */}
									{section.options.length > 5 && (
										<TextField
											fullWidth
											size="small"
											placeholder={`Search ${section.label.toLowerCase()}...`}
											value={searchTerms[section.id] || ''}
											onChange={(e) => handleSearch(section.id, e.target.value)}
											InputProps={{
												startAdornment: (
													<InputAdornment position="start">
														<SearchIcon />
													</InputAdornment>
												),
											}}
											sx={{ mb: 2 }}
										/>
									)}

									<FormGroup>
										{filterOptions(section.options, section.id).map((option) => (
											<Tooltip key={option.value} title={option.tooltip || ''}>
												<FormControlLabel
													control={
														<Checkbox
															checked={tempFilters[section.id]?.includes(option.value)}
															onChange={() => onFilterChange(section.id, option.value)}
														/>
													}
													label={
														<Box
															sx={{
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'space-between',
																width: '100%',
															}}
														>
															<Typography>{option.label}</Typography>
															{option.count !== undefined && (
																<Typography
																	variant="caption"
																	color="text.secondary"
																	sx={{ ml: 1 }}
																>
																	({option.count})
																</Typography>
															)}
														</Box>
													}
												/>
											</Tooltip>
										))}
									</FormGroup>
								</AccordionDetails>
							</Accordion>
						))}
					</Stack>
				</Box>

				{/* Apply Button */}
				<Button color="primary" onClick={onApplyFilters} variant="contained" sx={{ mt: 2 }}>
					Apply Filters
				</Button>
			</Box>
		</Drawer>
	);
}; 