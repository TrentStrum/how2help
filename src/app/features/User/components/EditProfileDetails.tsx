import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import {
	alpha,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Divider,
	Grid,
	Stack,
	Typography,
} from '@mui/material';

const EditProfileDetails = () => {
	return (
		<Grid container spacing={{ xs: 2, sm: 3 }}>
			<Grid item xs={12}>
				<Card>
					<Box
						alignItems={{ xs: 'flex-start', sm: 'center' }}
						display="flex"
						flexDirection={{ xs: 'column', sm: 'row' }}
						justifyContent="space-between"
						p={2}
						sx={{
							backgroundColor: (theme) =>
								theme.palette.mode === 'dark' ? alpha('black', 0.02) : 'neutral.25',
						}}
					>
						<Box mb={{ xs: 2, sm: 0 }}>
							<Typography variant="h4">Personal details</Typography>
							<Typography variant="subtitle1">
								Manage informations related to your personal details
							</Typography>
						</Box>
						<Button color="secondary" startIcon={<EditTwoToneIcon />} variant="outlined">
							Edit
						</Button>
					</Box>
					<Divider />
					<CardContent>
						<Typography variant="subtitle2">
							<Grid container spacing={1}>
								<Grid item md={3} sm={4} textAlign={{ sm: 'right' }} xs={12}>
									<Box pr={{ xs: 2, sm: 3 }}>Name:</Box>
								</Grid>
								<Grid item md={9} sm={8} xs={12}>
									<Typography fontWeight={500} variant="h6">
										Craig Donin
									</Typography>
								</Grid>
								<Grid item md={3} sm={4} textAlign={{ sm: 'right' }} xs={12}>
									<Box pr={{ xs: 2, sm: 3 }}>Date of birth:</Box>
								</Grid>
								<Grid item md={9} sm={8} xs={12}>
									<Typography fontWeight={500} variant="h6">
										15 March 1977
									</Typography>
								</Grid>
								<Grid item md={3} sm={4} textAlign={{ sm: 'right' }} xs={12}>
									<Box pr={{ xs: 2, sm: 3 }}>Address:</Box>
								</Grid>
								<Grid item md={9} sm={8} xs={12}>
									<Box
										sx={{
											maxWidth: { xs: 'auto', sm: 340 },
										}}
									>
										<Typography fontWeight={500} variant="h6">
											1749 High Meadow Lane, SEQUOIA NATIONAL PARK, California, 93262
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card>
					<Box
						alignItems={{ xs: 'flex-start', sm: 'center' }}
						display="flex"
						flexDirection={{ xs: 'column', sm: 'row' }}
						justifyContent="space-between"
						p={2}
						sx={{
							backgroundColor: (theme) =>
								theme.palette.mode === 'dark' ? alpha('black', 0.02) : 'neutral.25',
						}}
					>
						<Box mb={{ xs: 2, sm: 0 }}>
							<Typography variant="h4">Account settings</Typography>
							<Typography variant="subtitle2">Manage details related to your account</Typography>
						</Box>
						<Button color="secondary" startIcon={<EditTwoToneIcon />} variant="outlined">
							Edit
						</Button>
					</Box>
					<Divider />
					<CardContent>
						<Typography variant="subtitle2">
							<Grid container spacing={1}>
								<Grid item md={3} sm={4} textAlign={{ sm: 'right' }} xs={12}>
									<Box pr={{ xs: 2, sm: 3 }}>Language:</Box>
								</Grid>
								<Grid item md={9} sm={8} xs={12}>
									<Typography fontWeight={500} variant="h6">
										English (US)
									</Typography>
								</Grid>
								<Grid item md={3} sm={4} textAlign={{ sm: 'right' }} xs={12}>
									<Box pr={{ xs: 2, sm: 3 }}>Timezone:</Box>
								</Grid>
								<Grid item md={9} sm={8} xs={12}>
									<Typography fontWeight={500} variant="h6">
										GMT +2
									</Typography>
								</Grid>
								<Grid item md={3} sm={4} textAlign={{ sm: 'right' }} xs={12}>
									<Box pr={{ xs: 2, sm: 3 }}>Account status:</Box>
								</Grid>
								<Grid item md={9} sm={8} xs={12}>
									<Chip
										color="success"
										label={
											<Box alignItems="center" display="flex" fontWeight={600}>
												<DoneTwoToneIcon fontSize="inherit" sx={{ mr: 0.5 }} />
												Active
											</Box>
										}
										size="small"
									/>
								</Grid>
							</Grid>
						</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card>
					<Box
						alignItems={{ xs: 'flex-start', sm: 'center' }}
						display="flex"
						flexDirection={{ xs: 'column', sm: 'row' }}
						justifyContent="space-between"
						p={2}
						sx={{
							backgroundColor: (theme) =>
								theme.palette.mode === 'dark' ? alpha('black', 0.02) : 'neutral.25',
						}}
					>
						<Box mb={{ xs: 2, sm: 0 }}>
							<Typography variant="h4">Email addresses</Typography>
							<Typography variant="subtitle2">
								Manage details related to your associated email addresses
							</Typography>
						</Box>
						<Button color="secondary" startIcon={<EditTwoToneIcon />} variant="outlined">
							Edit
						</Button>
					</Box>
					<Divider />
					<CardContent>
						<Typography variant="subtitle2">
							<Grid container spacing={1}>
								<Grid item md={3} sm={4} textAlign={{ sm: 'right' }} xs={12}>
									<Box pr={{ xs: 2, sm: 3 }}>Primary email address:</Box>
								</Grid>
								<Grid item md={9} sm={8} xs={12}>
									<Stack alignItems="center" direction="row" spacing={1}>
										<Typography fontWeight={500} lineHeight={1} variant="h6">
											example@demo.com
										</Typography>
										<Chip
											color="success"
											label={
												<Box alignItems="center" display="flex" fontWeight={600}>
													<DoneTwoToneIcon fontSize="inherit" sx={{ mr: 0.5 }} />
													Primary
												</Box>
											}
											size="small"
										/>
									</Stack>
								</Grid>
								<Grid item md={3} sm={4} textAlign={{ sm: 'right' }} xs={12}>
									<Box pr={{ xs: 2, sm: 3 }}>Secondary email address:</Box>
								</Grid>
								<Grid item md={9} sm={8} xs={12}>
									<Typography fontWeight={500} variant="h6">
										demo@example.com
									</Typography>
								</Grid>
							</Grid>
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export { EditProfileDetails };
