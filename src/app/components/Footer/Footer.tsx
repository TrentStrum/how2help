import { Box, Container, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: (theme) => theme.palette.background.paper,
				borderTop: (theme) => `1px solid ${theme.palette.divider}`,
			}}
		>
			<Container maxWidth="xl">
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Typography variant="body2" color="text.secondary">
						© {new Date().getFullYear()} How2Help. All rights reserved.
					</Typography>
					<Stack direction="row" spacing={3}>
						<Link href="/about" color="text.secondary" underline="hover">
							About
						</Link>
						<Link href="/privacy" color="text.secondary" underline="hover">
							Privacy
						</Link>
						<Link href="/terms" color="text.secondary" underline="hover">
							Terms
						</Link>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export { Footer };
