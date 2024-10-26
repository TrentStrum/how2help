import { alpha, Drawer, SwipeableDrawer, useMediaQuery, Theme, useTheme } from '@mui/material';

import { Scrollbar } from '@app/components/Scrollbar/ScrollbarWrapper-Style';

import { FilterContent } from '../Filter/FilterContent';

type SidebarProps = {
	parentContainer?: HTMLDivElement | null;
	onClose: () => void;
	onOpen: () => void;
	open?: boolean;
};

const Sidebar = ({ parentContainer, onClose, onOpen, open, ...other }: SidebarProps) => {
	const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const theme = useTheme();

	const sidebarContent = <FilterContent />;

	if (lgUp) {
		return (
			<Drawer
				PaperProps={{
					sx: {
						position: 'relative',
						width: 360,
						zIndex: 5,
						boxShadow: (theme) => theme.shadows[0],
					},
				}}
				SlideProps={{ container: parentContainer }}
				anchor="left"
				open={open}
				variant="persistent"
				{...other}
			>
				<Scrollbar>{sidebarContent}</Scrollbar>
			</Drawer>
		);
	}

	return (
		<SwipeableDrawer
			ModalProps={{
				BackdropProps: {
					sx: {
						backdropFilter: 'blur(3px) !important',
						background: `linear-gradient(90deg, ${alpha(
							theme.palette.neutral[200],
							0.7,
						)} 10%, ${alpha(theme.palette.neutral[900], 0.6)} 100%) !important`,
					},
				},
			}}
			PaperProps={{
				sx: {
					maxWidth: '100%',
					width: { xs: 320, sm: 380, md: 400 },
					pointerEvents: 'auto',
					position: 'absolute',
					boxShadow: (theme) => theme.shadows[24],
				},
			}}
			anchor="left"
			onClose={onClose}
			onOpen={onOpen}
			open={open}
			variant="temporary"
			{...other}
		>
			<Scrollbar>{sidebarContent}</Scrollbar>
		</SwipeableDrawer>
	);
};

export { Sidebar };
