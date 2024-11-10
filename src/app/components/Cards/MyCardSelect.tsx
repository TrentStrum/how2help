import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Box, Card, Grid, Radio, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { ButtonIcon } from '../../features/User/services/styledComponents';
import { ListItemButtonMod } from '../Buttons/listItemButton-Style';

interface Item {
	id: number;
	image: string;
	cc: string;
	expires: string;
	title: string;
}

const MyCardsSelect = () => {
	const theme = useTheme();

	const items: Item[] = [
		{
			id: 1,
			image: '/placeholders/logo/visa.png',
			cc: '6979',
			expires: '12/25',
			title: 'Visa',
		},
		{
			id: 2,
			image: '/placeholders/logo/mastercard.png',
			cc: '5724',
			expires: '06/26',
			title: 'Mastercard',
		},
	];

	const [selectedValue, setSelectedValue] = useState<number>(items[0].id);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(parseInt(event.target.value));
	};

	const handleDelete = () => {
		toast.success('The card has been removed successfully!');
	};

	return (
		<Grid columns={24} container spacing={2}>
			{items.map((item) => (
				<Grid item key={item.id} lg={9} md={12} xs={24}>
					<Card
						elevation={0}
						sx={{
							border: 0,
							position: 'relative',
						}}
					>
						<ListItemButtonMod
							onClick={() => setSelectedValue(item.id)}
							selected={selectedValue === item.id}
						>
							<Box alignItems="center" display="flex" pb={1} pt={2} px={2} width="100%">
								<Card
									elevation={8}
									sx={{
										display: 'flex',
										px: item.id === 2 ? 2 : 1,
										mr: 2,
										py: 1.5,
										img: {
											width: 'auto',
											height: 28,
										},
									}}
								>
									<img alt={item.title} src={item.image} />
								</Card>
								<Box flex={1}>
									<Typography fontWeight={500} gutterBottom lineHeight={1} variant="h4">
										•••• {item.cc}
									</Typography>
									<Typography color="text.secondary" fontWeight={500} variant="h6">
										Expires{' '}
										<Typography color="text.primary" component="span" variant="h6">
											Expires date
										</Typography>
									</Typography>
								</Box>
							</Box>
							<Stack alignItems="center" direction="row" px={2} py={1} width="100%">
								<Radio
									checked={selectedValue === item.id}
									color="primary"
									edge="start"
									inputProps={{
										'aria-label': 'Set' + item.title + 'as primary card',
									}}
									name="radio-buttons"
									onChange={handleChange}
									size="small"
									value={item.id}
								/>
								<Typography noWrap variant="h6">
									Primary
								</Typography>
							</Stack>
							<Tooltip arrow title="Remove this card">
								<ButtonIcon
									color="error"
									onClick={() => handleDelete()}
									size="small"
									sx={{
										position: 'absolute',
										top: theme.spacing(1),
										right: theme.spacing(1),
									}}
									variant="outlined"
								>
									<DeleteTwoToneIcon fontSize="small" />
								</ButtonIcon>
							</Tooltip>
						</ListItemButtonMod>
					</Card>
				</Grid>
			))}
			<Grid item lg={6} xs={24} />
		</Grid>
	);
};

export { MyCardsSelect };
