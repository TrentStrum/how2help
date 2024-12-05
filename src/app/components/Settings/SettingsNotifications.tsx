import {
	Box,
	Card,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
	Switch,
	Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

import { User } from '@api/entities/user/types/user.types';

interface Props {
	user: User;
}

const SettingsNotifications = ({ user }: Props) => {
	const [state, setState] = useState({
		checkedA: true,
		checkedB: false,
		checkedC: true,
		checkedD: false,
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	return (
		<Grid container spacing={{ xs: 2, sm: 3 }}>
			<Grid xs={12}>
				<Box pb={2}>
					<Typography variant="h3">{user.username}&apos;s Notifications</Typography>
					<Typography color="text.secondary" variant="subtitle1">
						Choose what notifications you want to receive
					</Typography>
				</Box>
				<Card>
					<List>
						<ListItem>
							<ListItemText
								primary="Widthdraw Activity"
								primaryTypographyProps={{
									variant: 'h5',
									component: 'label',
									htmlFor: 'checkedA',
								}}
								secondary="Receive an email when a widthdrawal is made"
								secondaryTypographyProps={{
									variant: 'subtitle2',
									component: 'label',
									htmlFor: 'checkedA',
								}}
							/>
							<Switch
								checked={state.checkedA}
								color="primary"
								id="checkedA"
								name="checkedA"
								onChange={handleChange}
							/>
						</ListItem>
						<Divider component="li" />
						<ListItem>
							<ListItemText
								primary="Weekly Report"
								primaryTypographyProps={{
									variant: 'h5',
									component: 'label',
									htmlFor: 'checkedB',
								}}
								secondary="Receive account status weekly report in your inbox"
								secondaryTypographyProps={{
									variant: 'subtitle2',
									component: 'label',
									htmlFor: 'checkedB',
								}}
							/>
							<Switch
								checked={state.checkedB}
								color="primary"
								id="checkedB"
								name="checkedB"
								onChange={handleChange}
							/>
						</ListItem>
					</List>
				</Card>
			</Grid>
			<Grid xs={12}>
				<Box pb={2}>
					<Typography variant="h3">Orders</Typography>
					<Typography color="text.secondary" variant="subtitle1">
						Receive email notifications related to your orders activity
					</Typography>
				</Box>
				<Card>
					<List>
						<ListItem>
							<ListItemText
								primary="Failed Payment"
								primaryTypographyProps={{
									variant: 'h5',
									component: 'label',
									htmlFor: 'checkedC',
								}}
								secondary="Get a message when a payment fails"
								secondaryTypographyProps={{
									variant: 'subtitle2',
									component: 'label',
									htmlFor: 'checkedC',
								}}
							/>
							<Switch
								checked={state.checkedC}
								color="primary"
								name="checkedC"
								onChange={handleChange}
							/>
						</ListItem>
						<Divider component="li" />
						<ListItem>
							<ListItemText
								primary="Order Status Update"
								primaryTypographyProps={{
									variant: 'h5',
									component: 'label',
									htmlFor: 'checkedD',
								}}
								secondary="Whenever an order is updated, get a notification on your phone"
								secondaryTypographyProps={{
									variant: 'subtitle2',
									component: 'label',
									htmlFor: 'checkedD',
								}}
							/>
							<Switch
								checked={state.checkedD}
								color="primary"
								name="checkedD"
								onChange={handleChange}
							/>
						</ListItem>
					</List>
				</Card>
			</Grid>
		</Grid>
	);
};

export { SettingsNotifications };
