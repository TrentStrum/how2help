import {
	Card,
	alpha,
	Box,
	Rating,
	Stack,
	Chip,
	Typography,
	Button,
	Divider,
	CardActions,
	AvatarGroup,
	Avatar,
	useTheme,
} from '@mui/material';
import { formatDistance, subDays } from 'date-fns';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import { Organization } from '../../../../app/api/entities/organization';

type Props = {
	org: Organization;
};

const CauseOrgSearchCard = ({ org }: Props) => {
	const theme = useTheme();
	const handleDelete = () => {
		toast.error('You clicked on delete!');
	};

	const handleClick = () => {
		toast.success('You clicked on the chip!');
	};
	return (
		<Card
			elevation={0}
			variant='outlined'
			sx={{
				p: 2,
				background: alpha(theme.palette.background.default, 0.3),
				boxShadow: theme.shadows[8],
			}}
		>
			<Box>
				<Rating
					value={4.5}
					defaultValue={4.5}
					precision={0.5}
					readOnly
				/>
			</Box>
			{/* <Link
				href={''}
				onClick={(e) => e.preventDefault()}
				variant='h4'
				color='text.primary'
				underline='hover'
			>
				{org.name}
			</Link> */}
			{org.name}
			<Stack
				py={2}
				gap={1}
				direction='row'
				flexWrap={{ xs: 'wrap', md: 'nowrap' }}
			>
				<Chip
					size='small'
					label='Hosting'
					color='secondary'
					onClick={handleClick}
					onDelete={handleDelete}
				/>
				<Chip
					size='small'
					label='Security'
					color='secondary'
					onClick={handleClick}
					onDelete={handleDelete}
				/>
			</Stack>
			<Typography
				sx={{
					pb: 2,
				}}
				variant='subtitle1'
				color='text.secondary'
			>
				Ensure optimal performance and security by upgrading the hosting platform.
			</Typography>
			<Button
				size='small'
				variant='contained'
			>
				View task
			</Button>
			<Divider
				sx={{
					my: 2,
				}}
			/>
			<CardActions
				sx={{
					p: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					display='flex'
					alignItems='center'
					noWrap
					variant='subtitle2'
					color='text.secondary'
				>
					<TodayTwoToneIcon
						sx={{
							mr: 1,
						}}
					/>
					{formatDistance(subDays(new Date(), 24), new Date(), {
						addSuffix: true,
					})}
				</Typography>
				<AvatarGroup>
					<Avatar
						alt='Travis Howard'
						src='/avatars/2.png'
						sx={{ width: 34, height: 34 }}
					/>
					<Avatar
						alt='Agnes Walker'
						src='/avatars/4.png'
						sx={{ width: 34, height: 34 }}
					/>
				</AvatarGroup>
			</CardActions>
		</Card>
	);
};

export { CauseOrgSearchCard };
