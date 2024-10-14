import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	AccordionDetails,
	AccordionSummary,
	Box,
	Checkbox,
	Divider,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Rating,
	Slider,
	Stack,
	Typography,
} from '@mui/material';
import { useState } from 'react';

import { AccordionMinimal } from '@themes/styles/accordion';

const Component = () => {
	const categories = [
		{
			id: 1,
			name: 'Toys & Hobbies',
			value: 'toys_hobbies',
		},
		{
			id: 2,
			name: 'Office Supplies',
			value: 'office_supplies',
		},
		{
			id: 3,
			name: 'Electronics',
			value: 'electronics',
		},
		{
			id: 4,
			name: 'Video Games',
			value: 'video_games',
		},
	];

	const rating = [
		{
			id: 1,
			rating: 5,
		},
		{
			id: 2,
			rating: 4,
		},
		{
			id: 3,
			rating: 3,
		},
		{
			id: 4,
			rating: 2,
		},
		{
			id: 5,
			rating: 1,
		},
	];

	const [checked, setChecked] = useState([0]);

	const handleToggle = (value: number) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const [checked3, setChecked3] = useState([0]);

	const handleToggle3 = (value: number) => () => {
		const currentIndex = checked3.indexOf(value);
		const newChecked = [...checked3];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked3(newChecked);
	};

	const [value, setValue] = useState<number[]>([200, 800]);

	const handleChange = (_event: Event, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	return (
		<Stack divider={<Divider />}>
			<AccordionMinimal defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5">Price range</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box pb={2} pt={{ xs: 2, sm: 3 }} px={{ xs: 2, sm: 3 }}>
						<Slider
							max={2000}
							min={100}
							onChange={handleChange}
							step={50}
							value={value}
							valueLabelDisplay="on"
							valueLabelFormat={(value) => <div>${value}</div>}
						/>
					</Box>
				</AccordionDetails>
			</AccordionMinimal>
			<AccordionMinimal defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5">Categories</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List
						component="div"
						disablePadding
						sx={{
							px: 2,
							pb: 2,

							'& .MuiListItemButton-root': {
								borderRadius: (theme) => theme.shape.borderRadius + 'px',
								pl: 1.5,
								pr: 1,
							},
						}}
					>
						{categories.map((value) => {
							return (
								<ListItemButton
									key={value.id}
									onClick={handleToggle(value.id)}
									sx={{
										py: 0,
										px: 2,
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 32,
										}}
									>
										<Checkbox
											checked={checked.indexOf(value.id) !== -1}
											edge="start"
											tabIndex={-1}
										/>
									</ListItemIcon>
									<ListItemText
										primary={value.name}
										primaryTypographyProps={{
											variant: 'subtitle1',
											fontWeight: 500,
										}}
									/>
								</ListItemButton>
							);
						})}
					</List>
				</AccordionDetails>
			</AccordionMinimal>
			<AccordionMinimal defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h5">Rating</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List
						component="div"
						disablePadding
						sx={{
							px: 2,
							pb: 2,

							'& .MuiListItemButton-root': {
								borderRadius: (theme) => theme.shape.borderRadius + 'px',
								px: 1.5,
							},
						}}
					>
						{rating.map((value) => {
							return (
								<ListItemButton
									key={value.id}
									onClick={handleToggle3(value.id)}
									sx={{
										py: 0.5,
										px: 2,
									}}
								>
									<ListItemText
										disableTypography
										primary={<Rating precision={1} readOnly size="large" value={value.rating} />}
										sx={{
											alignItems: 'center',
											display: 'flex',
										}}
									/>
								</ListItemButton>
							);
						})}
					</List>
				</AccordionDetails>
			</AccordionMinimal>
			<Box />
		</Stack>
	);
};

export default Component;
