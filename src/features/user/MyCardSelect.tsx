import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {
	Box,
	Card,
	Grid,
	ListItemButton,
	Radio,
	Stack,
	Tooltip,
	Typography,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ButtonIcon } from './styledComponents';



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
		<Grid
			container
			columns={24}
			spacing={2}
		>
			{items.map((item) => (
				<Grid
					key={item.id}
					xs={24}
					md={12}
					lg={9}
				>
					<Card
						elevation={0}
						sx={{
							border: 0,
							position: 'relative',
						}}
					>
						<ListItemButton
							sx={{
								p: '1px',
								flexDirection: 'column',
								borderRadius: 'inherit',
								boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
								background:
									theme.palette.mode === 'dark'
										? 'black'
										: 'gray',

								'&:hover': {
									backgroundColor: 'background.paper',
									boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
								},

								'&.Mui-selected': {
									backgroundColor: 'background.paper',
									boxShadow: `0 0 0 2px ${theme.palette.primary.main} inset`,

									'&:hover': {
										backgroundColor: 'background.paper',
									},
								},
							}}
							selected={selectedValue === item.id}
							onClick={() => setSelectedValue(item.id)}
						>
							<Box
								display='flex'
								alignItems='center'
								width='100%'
								px={2}
								pt={2}
								pb={1}
							>
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
									<img
										src={item.image}
										alt={item.title}
									/>
								</Card>
								<Box flex={1}>
									<Typography
										variant='h4'
										fontWeight={500}
										lineHeight={1}
										gutterBottom
									>
										•••• {item.cc}
									</Typography>
									<Typography
										variant='h6'
										fontWeight={500}
										color='text.secondary'
									>
										{'Expires' + ' '}
										<Typography
											component='span'
											variant='h6'
											color='text.primary'
										>
											Expires date
										</Typography>
									</Typography>
								</Box>
							</Box>
							<Stack
								direction='row'
								alignItems='center'
								width='100%'
								px={2}
								py={1}
							>
								<Radio
									checked={selectedValue === item.id}
									onChange={handleChange}
									value={item.id}
									size='small'
									edge='start'
									name='radio-buttons'
									inputProps={{
										'aria-label': 'Set' + item.title + 'as primary card',
									}}
									color='primary'
								/>
								<Typography
									variant='h6'
									noWrap
								>
									Primary
								</Typography>
							</Stack>
							<Tooltip
								arrow
								title='Remove this card'
							>
								<ButtonIcon
									sx={{
										position: 'absolute',
										top: theme.spacing(1),
										right: theme.spacing(1),
									}}
									variant='outlined'
									size='small'
									color='error'
									onClick={() => handleDelete()}
								>
									<DeleteTwoToneIcon fontSize='small' />
								</ButtonIcon>
							</Tooltip>
						</ListItemButton>
					</Card>
				</Grid>
			))}
			<Grid
				xs={24}
				lg={6}
			>
			</Grid>
		</Grid>
	);
};

export {MyCardsSelect};
