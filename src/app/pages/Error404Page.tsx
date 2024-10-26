import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { SearchWithButton } from '@components/Buttons/SearchWithButton';

import { AvatarState } from '../components/Avatar/Avatar-Style';
import { Helmet } from '../components/utils/Helmet';

const Error404Page = () => {
	return (
		<>
			<Helmet heading="404 - Not found" />
			<Box
				sx={{
					flex: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Container maxWidth="sm">
					<Stack
						alignItems="center"
						direction="column"
						justifyContent="center"
						spacing={2}
						textAlign="center"
					>
						<AvatarState
							isSoft
							state="warning"
							sx={{
								width: 84,
								height: 84,
							}}
						>
							<WarningTwoToneIcon fontSize="large" />
						</AvatarState>
						<Stack spacing={{ xs: 2, sm: 3 }} width="100%">
							<Box>
								<Typography
									color="text.primary"
									fontWeight={700}
									gutterBottom
									sx={{
										px: { xs: 0, sm: 2, md: 3 },
									}}
									variant="h2"
								>
									Page not found
								</Typography>
								<Typography color="text.secondary" fontWeight={500} variant="h4">
									We moved the content to a different page
								</Typography>
								<Divider sx={{ my: { xs: 2, sm: 3 } }} />
								<Typography color="text.secondary" fontWeight={500} variant="h5">
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
								<Link to="/">
									<Button color="secondary" startIcon={<WestRoundedIcon />} variant="outlined">
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
