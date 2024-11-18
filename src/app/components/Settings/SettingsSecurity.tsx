import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import {
	Avatar,
	Box,
	Button,
	Card,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Switch,
	Typography,
	useTheme,
} from '@mui/material';

import { User } from '@api/entities/user';
import { AvatarState } from '@app/components/Avatar/Avatar-Style';
import { SoftButton } from '@app/components/Buttons/SoftButton';

type Props = {
	user: User;
};

const SettingsSecurity = ({ user }: Props) => {
	const theme = useTheme();

	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 3 }}
			sx={{
				'& .MuiListItem-root': {
					display: { xs: 'block', sm: 'flex' },
				},
			}}
		>
			<Grid xs={12}>
				<Box pb={2}>
					<Typography variant="h3">{user.username}&apos;s Social Accounts</Typography>
					<Typography color="text.secondary" variant="subtitle1">
						Manage connected social accounts options
					</Typography>
				</Box>
				<Card>
					<List disablePadding>
						<ListItem sx={{ p: 2 }}>
							<ListItemAvatar
								sx={{
									pr: 2,
								}}
							>
								<Avatar
									src="/placeholders/logo/google-icon.svg"
									sx={{
										width: theme.spacing(5),
										height: theme.spacing(5),
									}}
								/>
							</ListItemAvatar>
							<ListItemText
								primary="Google"
								primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
								secondary="A Google account hasn’t been yet added to your account"
								secondaryTypographyProps={{
									variant: 'subtitle2',
								}}
								sx={{
									py: { xs: 2, sm: 0 },
									pr: { xs: 0, sm: 1 },
									m: 0,
								}}
							/>
							<Button color="secondary" size="large" variant="contained">
								Connect
							</Button>
						</ListItem>
					</List>
				</Card>
			</Grid>
			<Grid xs={12}>
				<Card>
					<List disablePadding>
						<ListItem sx={{ p: 2 }}>
							<ListItemAvatar
								sx={{
									pr: 2,
								}}
							>
								<AvatarState
									isSoft
									state="success"
									sx={{
										width: theme.spacing(5),
										height: theme.spacing(5),
									}}
								>
									<DoneTwoToneIcon />
								</AvatarState>
							</ListItemAvatar>
							<ListItemText
								primary="Facebook"
								primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
								secondary="Your Facebook account has been successfully connected"
								secondaryTypographyProps={{
									variant: 'subtitle2',
								}}
								sx={{
									py: { xs: 2, sm: 0 },
									pr: { xs: 0, sm: 1 },
									m: 0,
								}}
							/>
							<SoftButton
								color="error"
								size="large"
								sx={{
									whiteSpace: 'nowrap',
								}}
								variant="contained"
							>
								Revoke access
							</SoftButton>
						</ListItem>
						<Divider component="li" />
						<ListItem sx={{ p: 2 }}>
							<ListItemAvatar
								sx={{
									pr: 2,
								}}
							>
								<AvatarState
									isSoft
									state="success"
									sx={{
										width: theme.spacing(5),
										height: theme.spacing(5),
									}}
								>
									<DoneTwoToneIcon />
								</AvatarState>
							</ListItemAvatar>
							<ListItemText
								primary="Twitter"
								primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
								secondary="Your Twitter account was last syncronized 6 days ago"
								secondaryTypographyProps={{
									variant: 'subtitle2',
								}}
								sx={{
									py: { xs: 2, sm: 0 },
									pr: { xs: 0, sm: 1 },
									m: 0,
								}}
							/>
							<SoftButton
								color="error"
								size="large"
								sx={{
									whiteSpace: 'nowrap',
								}}
								variant="contained"
							>
								Revoke access
							</SoftButton>
						</ListItem>
					</List>
				</Card>
			</Grid>
			<Grid xs={12}>
				<Box pb={2}>
					<Typography variant="h3">Security</Typography>
					<Typography color="text.secondary" variant="subtitle1">
						Change your security preferences below
					</Typography>
				</Box>
				<Card>
					<List disablePadding>
						<ListItem sx={{ p: 2 }}>
							<ListItemText
								primary="Change password"
								primaryTypographyProps={{
									variant: 'h5',
								}}
								secondary="You can change your password here"
								secondaryTypographyProps={{
									variant: 'subtitle2',
								}}
								sx={{
									pl: 0,
									pr: { xs: 0, sm: 1 },
									m: 0,
								}}
							/>
							<Button
								size="large"
								sx={{
									whiteSpace: 'nowrap',
								}}
								variant="outlined"
							>
								Change password
							</Button>
						</ListItem>
						<Divider component="li" />
						<ListItem sx={{ p: 2 }}>
							<ListItemText
								primary="Two-factor authentication"
								primaryTypographyProps={{
									variant: 'h5',
									component: 'label',
									htmlFor: 'checkedD',
								}}
								secondary="Enable PIN verification for all sign in attempts"
								secondaryTypographyProps={{
									variant: 'subtitle2',
									component: 'label',
									htmlFor: 'checkedD',
								}}
								sx={{
									pl: 0,
									pr: { xs: 0, sm: 1 },
									m: 0,
								}}
							/>
							<Switch color="primary" id="checkedD" name="checkedD" />
						</ListItem>
					</List>
				</Card>
			</Grid>
			<Grid xs={12}>{/* <SecurityLogs /> */}</Grid>
		</Grid>
	);
};

export { SettingsSecurity };
