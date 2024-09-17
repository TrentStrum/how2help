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
import { ButtonIcon } from '../../../features/user/styledComponents';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Sidebar } from './Sidebar';
import { useRef, ReactNode } from 'react';
import { useSidebarDrawer } from '../../../hooks/useSidebarDrawer';
import { useCustomization } from '../../../hooks/useCustomization';

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
				p={{ xs: 1, sm: 2 }}
				minWidth='100%'
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === 'dark'
							? alpha(theme.palette.neutral[25], 0.02)
							: 'neutral.25',
				}}
			>
				<Stack
					direction='row'
					spacing={{ xs: 2, sm: 3 }}
					alignItems='center'
					divider={
						<Divider
							flexItem
							orientation='vertical'
						/>
					}
				>
					<ButtonIcon
						onClick={sidebarDrawer.handleToggle}
						color='secondary'
						variant='outlined'
						sx={{ width: 44, height: 44 }}
					>
						<MenuRoundedIcon />
					</ButtonIcon>
					<Box>
						<Typography
							variant='h3'
							noWrap
							component='h2'
							sx={{ pb: 0.3 }}
						>
							Organization Catalog
						</Typography>
						<Typography
							variant='h5'
							noWrap
							fontWeight={400}
							color='text.secondary'
						>
							Browse organizations to get involved in.
						</Typography>
					</Box>
				</Stack>
			</Box>
			<Divider />
			<Box
				flex={1}
				position='relative'
				display='flex'
			>
				<Sidebar
					parentContainer={parentRef.current}
					onClose={sidebarDrawer.handleClose}
					onOpen={sidebarDrawer.handleOpen}
					open={sidebarDrawer.open}
				/>
				<Box
					flex={1}
					position='relative'
					zIndex={5}
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
				>
					<Box p={{ xs: 2, sm: 3 }}>
						<Container
							disableGutters
							maxWidth={customization.stretch ? false : 'xl'}
						>
							{children}
						</Container>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export { CatalogContainer };
