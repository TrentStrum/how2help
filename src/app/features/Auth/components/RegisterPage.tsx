import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import { Box, Container, Grid, Paper, Tooltip, Typography } from '@mui/material';

import { BoxComposedBg, BoxComposedImage, BoxComposedContent } from '@app/components/Boxes';
import { RegisterIconButtonWrapper } from '@app/components/Buttons';
import { RegisterCardActions } from '@app/components/Cards';

import { RegisterForm } from './RegisterForm';

const RegisterPage = () => {
	return (
		<Grid container>
			<Grid item md={6} sm={3} xs={12}>
				<Box
					alignItems="center"
					display="flex"
					position="relative"
					sx={{
						width: '100%',
						position: 'relative',
						minHeight: '100%',
						background: 'linear-gradient(to right, #24c6dc, #514a9d);',
					}}
				>
					<RegisterCardActions alignItems="center" display="flex">
						<Tooltip arrow placement="left" title="Get in touch with support">
							<RegisterIconButtonWrapper
								sx={{
									ml: 0.5,
								}}
							>
								<HelpTwoToneIcon fontSize="small" />
							</RegisterIconButtonWrapper>
						</Tooltip>
					</RegisterCardActions>
					<BoxComposedBg
						sx={{
							opacity: 0.4,
							background: 'linear-gradient(to right, #24c6dc, #514a9d);',
						}}
					/>
					<BoxComposedImage
						sx={{
							opacity: 1,
							backgroundImage: (theme) =>
								theme.palette.mode === 'dark'
									? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders/covers/landscape4.png")`
									: `url("/placeholders/covers/landscape2.png")`,
						}}
					/>
					<BoxComposedContent
						alignItems="center"
						display="flex"
						flexDirection="column"
						flexGrow={1}
						px={{ xs: 0, sm: 3, lg: 6, xl: 8 }}
						py={{ xs: 2, sm: 3, lg: 6, xl: 8 }}
					>
						<Container
							maxWidth="sm"
							sx={{
								flexDirection: 'column',
								display: { xs: 'flex', sm: 'none', md: 'flex' },
							}}
						>
							<Box
								display="flex"
								justifyContent={{ xs: 'center', md: 'flex-start' }}
								sx={{
									'& > *': { transform: 'scale(1.3)' },
								}}
							/>
							<Box display={{ xs: 'none', md: 'block' }}>
								<Typography color="common.white" gutterBottom sx={{ pt: 3 }} variant="h1">
									Discover Customized Solutions.
								</Typography>
								<Typography color="common.white" fontWeight={400} variant="h4">
									Streamlined Processes, and Exclusive Insights Tailored for Your Business Success
								</Typography>
							</Box>
						</Container>
					</BoxComposedContent>
				</Box>
			</Grid>
			<Grid
				component={Paper}
				elevation={6}
				item
				md={6}
				sm={9}
				square
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				xs={12}
			>
				<Box mx={{ xl: 6 }} py={{ xs: 2, sm: 3 }}>
					<RegisterForm />
				</Box>
			</Grid>
		</Grid>
	);
};

export { RegisterPage };
