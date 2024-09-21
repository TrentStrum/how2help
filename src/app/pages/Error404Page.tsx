import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { AvatarState } from '../components/ui/avatar';
import { SearchWithButton } from '../components/ui/SearchWithButton';
import { Helmet } from '../components/ui/Helmet';
import { Link } from 'react-router-dom';

const Error404Page = () => {
	return (
		<>
			<Helmet heading='404 - Not found' />
			<Box
				sx={{
					flex: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Container maxWidth='sm'>
					<Stack
						spacing={2}
						justifyContent='center'
						alignItems='center'
						direction='column'
						textAlign='center'
					>
						<AvatarState
							state='warning'
							isSoft
							sx={{
								width: 84,
								height: 84,
							}}
						>
							<WarningTwoToneIcon fontSize='large' />
						</AvatarState>
						<Stack
							width='100%'
							spacing={{ xs: 2, sm: 3 }}
						>
							<Box>
								<Typography
									color='text.primary'
									variant='h2'
									fontWeight={700}
									gutterBottom
									sx={{
										px: { xs: 0, sm: 2, md: 3 },
									}}
								>
									Page not found
								</Typography>
								<Typography
									color='text.secondary'
									variant='h4'
									fontWeight={500}
								>
									We moved the content to a different page
								</Typography>
								<Divider sx={{ my: { xs: 2, sm: 3 } }} />
								<Typography
									color='text.secondary'
									variant='h5'
									fontWeight={500}
								>
									The search below should help!
								</Typography>
							</Box>
							<SearchWithButton />
							<Divider>
								<Divider
									sx={{
										borderWidth: 4,
										width: 60,
										borderRadius: 22,
										borderColor: 'primary.main',
									}}
								/>
							</Divider>
							<Box>
								<Link to={'LandingPage'}>
									<Button
										variant='outlined'
										color='secondary'
										startIcon={<WestRoundedIcon />}
									>
										Go to homepage
									</Button>
								</Link>
							</Box>
						</Stack>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export { Error404Page };
