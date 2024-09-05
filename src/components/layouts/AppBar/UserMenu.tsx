import { Settings, Logout } from "@mui/icons-material";
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Divider, ListItemIcon } from "@mui/material";
import { useState } from "react";


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
				<Tooltip title='Account settings'>
					<IconButton
						onClick={handleClick}
						size='small'
						sx={{ ml: 2 }}
						aria-controls={isOpen ? 'account-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={isOpen ? 'true' : undefined}
					>
						<Avatar sx={{ width: 32, height: 32 }}>T</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={ancherEl}
				id='account-menu'
				open={isOpen}
				onClose={handleClose}
				onClick={handleClose}
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
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
						<Settings fontSize='small' />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
};

export {UserMenu};