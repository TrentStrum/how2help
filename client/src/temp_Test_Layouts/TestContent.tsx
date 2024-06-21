import {
	Alert,
	Badge,
	Button,
	ButtonGroup,
	Checkbox,
	CircularProgress,
	Collapse,
	IconButton,
	LinearProgress,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Pagination,
	Paper,
	Slider,
	SpeedDial,
	SpeedDialAction,
	SpeedDialIcon,
	Stack,
	Switch,
	TextField,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import {
	ExpandLess,
	ExpandMore,
	StarBorder,
	VolumeDown,
	VolumeUp,
} from '@mui/icons-material';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const switchLabel = { inputProps: { 'aria-label': 'Switch demo' } };

const actions = [
	{ icon: <FileCopyIcon />, name: 'Copy' },
	{ icon: <SaveIcon />, name: 'Save' },
	{ icon: <PrintIcon />, name: 'Print' },
	{ icon: <ShareIcon />, name: 'Share' },
];



export default function TestContent() {
	const [value, setValue] = useState<number | null>(2);
	const [sliderValue, setSliderValue] = useState<number>(30);
	const [open, setOpen] = useState(true);
	

	const handleClick = () => {
		setOpen(!open);
	};

	const handleChange = (event: Event, newValue: number | number[]) => {
		setSliderValue(newValue as number);
	};


	
	return (
		<>

			<Paper>
				<div>
					<Button variant='text'>Text</Button>
					<Button variant='contained'>Contained</Button>
					<Button variant='outlined'>Outlined</Button>

					<Button color='secondary'>Secondary</Button>
					<Button
						color='secondary'
						variant='contained'
					>
						Secondary
					</Button>
					<Button
						variant='contained'
						color='success'
					>
						Success
					</Button>
					<Button
						variant='outlined'
						color='error'
					>
						Error
					</Button>
					<Button
						variant='outlined'
						startIcon={<DeleteIcon />}
					>
						Delete
					</Button>
					<Button
						variant='contained'
						color='secondary'
						endIcon={<SendIcon />}
					>
						Send
					</Button>
					<IconButton aria-label='delete'>
						<DeleteIcon />
					</IconButton>
					<IconButton
						aria-label='delete'
						disabled
						color='primary'
					>
						<DeleteIcon />
					</IconButton>
					<IconButton
						color='secondary'
						aria-label='add an alarm'
					>
						<AlarmIcon />
					</IconButton>
					<IconButton
						color='primary'
						aria-label='add to shopping cart'
					>
						<AddShoppingCartIcon />
					</IconButton>
					<ButtonGroup
						variant='contained'
						aria-label='Basic button group'
					>
						<Button>One</Button>
						<Button>Two</Button>
						<Button>Three</Button>
					</ButtonGroup>
				</div>
				<div>
					<Checkbox
						{...label}
						defaultChecked
					/>
					<Checkbox {...label} />
					<Checkbox
						{...label}
						disabled
					/>
					<Checkbox
						{...label}
						disabled
						checked
					/>
					<Checkbox
						{...label}
						defaultChecked
					/>
					<Checkbox
						{...label}
						defaultChecked
						color='secondary'
					/>
					<Checkbox
						{...label}
						defaultChecked
						color='success'
					/>
					<Checkbox
						{...label}
						defaultChecked
						color='default'
					/>
					<Checkbox
						{...label}
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
					/>
					<Checkbox
						{...label}
						icon={<BookmarkBorderIcon />}
						checkedIcon={<BookmarkIcon />}
					/>
				</div>
				<div>
					<Fab
						color='primary'
						aria-label='add'
					>
						<AddIcon />
					</Fab>
					<Fab
						color='secondary'
						aria-label='edit'
					>
						<EditIcon />
					</Fab>
					<Fab variant='extended'>
						<NavigationIcon sx={{ mr: 1 }} />
						Navigate
					</Fab>
					<Fab
						disabled
						aria-label='like'
					>
						<FavoriteIcon />
					</Fab>
				</div>
				<div>
					<Box
						sx={{
							'& > legend': { mt: 2 },
						}}
					>
						<Typography component='legend'>Controlled</Typography>
						<Rating
							name='simple-controlled'
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						/>
						<Typography component='legend'>Read only</Typography>
						<Rating
							name='read-only'
							value={value}
							readOnly
						/>
						<Typography component='legend'>Disabled</Typography>
						<Rating
							name='disabled'
							value={value}
							disabled
						/>
						<Typography component='legend'>
							No rating given
						</Typography>
						<Rating
							name='no-value'
							value={null}
						/>
					</Box>
				</div>
				<div>
					<Stack
						spacing={2}
						direction='row'
						sx={{ mb: 1 }}
						alignItems='center'
					>
						<VolumeDown />
						<Slider
							aria-label='Volume'
							value={sliderValue}
							onChange={handleChange}
						/>
						<VolumeUp />
					</Stack>
					<Slider
						disabled
						defaultValue={30}
						aria-label='Disabled slider'
					/>
				</div>
				<div>
					<Switch
						{...label}
						defaultChecked
					/>
					<Switch
						{...label}
						defaultChecked
						color='secondary'
					/>
					<Switch
						{...label}
						defaultChecked
						color='warning'
					/>
					<Switch
						{...label}
						defaultChecked
						color='default'
					/>
				</div>
				<div>
					<Box
						component='form'
						sx={{
							'& .MuiTextField-root': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete='off'
					>
						<div>
							<TextField
								error
								id='outlined-error'
								label='Error'
								defaultValue='Hello World'
							/>
							<TextField
								error
								id='outlined-error-helper-text'
								label='Error'
								defaultValue='Hello World'
								helperText='Incorrect entry.'
							/>
						</div>
						<div>
							<TextField
								error
								id='filled-error'
								label='Error'
								defaultValue='Hello World'
								variant='filled'
							/>
							<TextField
								error
								id='filled-error-helper-text'
								label='Error'
								defaultValue='Hello World'
								helperText='Incorrect entry.'
								variant='filled'
							/>
						</div>
						<div>
							<TextField
								error
								id='standard-error'
								label='Error'
								defaultValue='Hello World'
								variant='standard'
							/>
							<TextField
								error
								id='standard-error-helper-text'
								label='Error'
								defaultValue='Hello World'
								helperText='Incorrect entry.'
								variant='standard'
							/>
						</div>
					</Box>
				</div>
				<div>
					<Box
						component='form'
						sx={{
							'& .MuiTextField-root': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete='off'
					>
						<div>
							<TextField
								required
								id='outlined-required'
								label='Required'
								defaultValue='Hello World'
							/>
							<TextField
								disabled
								id='outlined-disabled'
								label='Disabled'
								defaultValue='Hello World'
							/>
							<TextField
								id='outlined-password-input'
								label='Password'
								type='password'
								autoComplete='current-password'
							/>
							<TextField
								id='outlined-read-only-input'
								label='Read Only'
								defaultValue='Hello World'
								InputProps={{
									readOnly: true,
								}}
							/>
							<TextField
								id='outlined-number'
								label='Number'
								type='number'
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id='outlined-search'
								label='Search field'
								type='search'
							/>
							<TextField
								id='outlined-helperText'
								label='Helper text'
								defaultValue='Default Value'
								helperText='Some important text'
							/>
						</div>
						<div>
							<TextField
								required
								id='filled-required'
								label='Required'
								defaultValue='Hello World'
								variant='filled'
							/>
							<TextField
								disabled
								id='filled-disabled'
								label='Disabled'
								defaultValue='Hello World'
								variant='filled'
							/>
							<TextField
								id='filled-password-input'
								label='Password'
								type='password'
								autoComplete='current-password'
								variant='filled'
							/>
							<TextField
								id='filled-read-only-input'
								label='Read Only'
								defaultValue='Hello World'
								InputProps={{
									readOnly: true,
								}}
								variant='filled'
							/>
							<TextField
								id='filled-number'
								label='Number'
								type='number'
								InputLabelProps={{
									shrink: true,
								}}
								variant='filled'
							/>
							<TextField
								id='filled-search'
								label='Search field'
								type='search'
								variant='filled'
							/>
							<TextField
								id='filled-helperText'
								label='Helper text'
								defaultValue='Default Value'
								helperText='Some important text'
								variant='filled'
							/>
						</div>
						<div>
							<TextField
								required
								id='standard-required'
								label='Required'
								defaultValue='Hello World'
								variant='standard'
							/>
							<TextField
								disabled
								id='standard-disabled'
								label='Disabled'
								defaultValue='Hello World'
								variant='standard'
							/>
							<TextField
								id='standard-password-input'
								label='Password'
								type='password'
								autoComplete='current-password'
								variant='standard'
							/>
							<TextField
								id='standard-read-only-input'
								label='Read Only'
								defaultValue='Hello World'
								InputProps={{
									readOnly: true,
								}}
								variant='standard'
							/>
							<TextField
								id='standard-number'
								label='Number'
								type='number'
								InputLabelProps={{
									shrink: true,
								}}
								variant='standard'
							/>
							<TextField
								id='standard-search'
								label='Search field'
								type='search'
								variant='standard'
							/>
							<TextField
								id='standard-helperText'
								label='Helper text'
								defaultValue='Default Value'
								helperText='Some important text'
								variant='standard'
							/>
						</div>
					</Box>
				</div>
				<div>
					<Stack
						direction='row'
						spacing={2}
					>
						<Avatar>
							<FolderIcon />
						</Avatar>
						<Avatar sx={{ bgcolor: pink[500] }}>
							<PageviewIcon />
						</Avatar>
						<Avatar sx={{ bgcolor: green[500] }}>
							<AssignmentIcon />
						</Avatar>
					</Stack>
				</div>
				<div>
					<Badge
						badgeContent={4}
						color='secondary'
					>
						<MailIcon color='action' />
					</Badge>
					<Badge
						badgeContent={4}
						color='success'
					>
						<MailIcon color='action' />
					</Badge>
				</div>
				<div>
					<List
						sx={{
							width: '100%',
							maxWidth: 360,
							bgcolor: 'background.paper',
						}}
						component='nav'
						aria-labelledby='nested-list-subheader'
						subheader={
							<ListSubheader
								component='div'
								id='nested-list-subheader'
							>
								Nested List Items
							</ListSubheader>
						}
					>
						<ListItemButton>
							<ListItemIcon>
								<SendIcon />
							</ListItemIcon>
							<ListItemText primary='Sent mail' />
						</ListItemButton>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText primary='Drafts' />
						</ListItemButton>
						<ListItemButton onClick={handleClick}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='Inbox' />
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse
							in={open}
							timeout='auto'
							unmountOnExit
						>
							<List
								component='div'
								disablePadding
							>
								<ListItemButton sx={{ pl: 4 }}>
									<ListItemIcon>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary='Starred' />
								</ListItemButton>
							</List>
						</Collapse>
					</List>
				</div>
				<div>
					<Stack
						sx={{ width: '100%' }}
						spacing={2}
					>
						<Alert severity='success'>
							This is a success Alert.
						</Alert>
						<Alert severity='info'>This is an info Alert.</Alert>
						<Alert severity='warning'>
							This is a warning Alert.
						</Alert>
						<Alert severity='error'>This is an error Alert.</Alert>
					</Stack>
				</div>
				<div>
					<Alert
						variant='outlined'
						severity='success'
					>
						This is an outlined success Alert.
					</Alert>
					<Alert
						variant='outlined'
						severity='info'
					>
						This is an outlined info Alert.
					</Alert>
					<Alert
						variant='outlined'
						severity='warning'
					>
						This is an outlined warning Alert.
					</Alert>
					<Alert
						variant='outlined'
						severity='error'
					>
						This is an outlined error Alert.
					</Alert>
				</div>
				<div>
					<CircularProgress color='secondary' />
					<CircularProgress color='success' />
					<CircularProgress color='inherit' />
				</div>
				<div>
					<Stack
						sx={{ width: '100%', color: 'grey.500' }}
						spacing={2}
					>
						<LinearProgress color='secondary' />
						<LinearProgress color='success' />
						<LinearProgress color='inherit' />
					</Stack>
				</div>
				<div>
					<Pagination count={10} />
					<Pagination
						count={10}
						color='primary'
					/>
					<Pagination
						count={10}
						color='secondary'
					/>
					<Pagination
						count={10}
						disabled
					/>
				</div>
				<div>
					<Box
						sx={{
							height: 320,
							transform: 'translateZ(0px)',
							flexGrow: 1,
						}}
					>
						<SpeedDial
							ariaLabel='SpeedDial basic example'
							sx={{ position: 'absolute', bottom: 16, right: 16 }}
							icon={<SpeedDialIcon />}
						>
							{actions.map((action) => (
								<SpeedDialAction
									key={action.name}
									icon={action.icon}
									tooltipTitle={action.name}
								/>
							))}
						</SpeedDial>
					</Box>
				</div>
			</Paper>
		</>
	);
}
