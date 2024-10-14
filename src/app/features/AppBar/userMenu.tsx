import { Settings, Logout } from '@mui/icons-material';
import {
	Box,
	Tooltip,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	Divider,
	ListItemIcon,
} from '@mui/material';
import { useState } from 'react';
import * as React from 'react';

const UserMenu = () => {
	const [ancherEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpen = Boolean(ancherEl);

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<Tooltip title="Account settings">
					<IconButton
						aria-controls={isOpen ? 'account-menu' : undefined}
						aria-expanded={isOpen ? 'true' : undefined}
						aria-haspopup="true"
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
					>
						<Avatar sx={{ width: 32, height: 32 }}>T</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&::before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				anchorEl={ancherEl}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				id="account-menu"
				onClick={handleClose}
				onClose={handleClose}
				open={isOpen}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			>
				<MenuItem onClick={handleClose}>
					<Avatar /> Profile
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
};

export { UserMenu };
