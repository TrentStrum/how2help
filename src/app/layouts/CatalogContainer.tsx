import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
	Box,
	alpha,
	Stack,
	Divider,
	Typography,
	Container,
	Theme,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useRef, ReactNode } from 'react';

import { ButtonIcon } from '@app/components/Buttons/ButtonIcon';
import { Sidebar } from '@components/Drawers/Sidebar';
import { useCustomization } from '@hooks/useCustomization';
import { useSidebarDrawer } from '@hooks/useSidebarDrawer';

type Props = {
	children: ReactNode;
};

const CatalogContainer = ({ children }: Props) => {
	const customization = useCustomization();
	const parentRef = useRef<HTMLDivElement | null>(null);
	const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const sidebarDrawer = useSidebarDrawer();
	const theme = useTheme();

	return (
		<>
			<Box
				minWidth="100%"
				p={{ xs: 1, sm: 2 }}
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
				}}
			>
				<Stack
					alignItems="center"
					direction="row"
					divider={<Divider flexItem orientation="vertical" />}
					spacing={{ xs: 2, sm: 3 }}
				>
					<ButtonIcon
						color="secondary"
						onClick={sidebarDrawer.handleToggle}
						sx={{ width: 44, height: 44 }}
						variant="outlined"
					>
						<MenuRoundedIcon />
					</ButtonIcon>
					<Box>
						<Typography component="h2" noWrap sx={{ pb: 0.3 }} variant="h3">
							Organization Catalog
						</Typography>
						<Typography color="text.secondary" fontWeight={400} noWrap variant="h5">
							Browse organizations to get involved in.
						</Typography>
					</Box>
				</Stack>
			</Box>
			<Divider />
			<Box display="flex" flex={1} position="relative">
				<Sidebar
					onClose={sidebarDrawer.handleClose}
					onOpen={sidebarDrawer.handleOpen}
					open={sidebarDrawer.open}
					parentContainer={parentRef.current}
				/>
				<Box
					flex={1}
					position="relative"
					sx={{
						ml: sidebarDrawer.open ? 0 : lgUp ? '-360px' : 0,
						transition: sidebarDrawer.open
							? theme.transitions.create('margin', {
									easing: theme.transitions.easing.easeOut,
									duration: theme.transitions.duration.enteringScreen,
								})
							: theme.transitions.create('margin', {
									easing: theme.transitions.easing.sharp,
									duration: theme.transitions.duration.leavingScreen,
								}),
					}}
					zIndex={5}
				>
					<Box p={{ xs: 2, sm: 3 }}>
						<Container disableGutters maxWidth={customization.stretch ? false : 'xl'}>
							{children}
						</Container>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export { CatalogContainer };
