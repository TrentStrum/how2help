import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';

import { useGetCauseById } from '@api/entities/cause';

type Props = {
	causeId: string;
};

const CauseAdditionalInfoTab = ({ causeId }: Props) => {
	const theme = useTheme();
	const { data: cause, isPending, isError } = useGetCauseById(Number(causeId));

	if (isPending) return <Typography variant="body2">Loading...</Typography>;
	if (isError) return <Typography variant="body2">Error loading cause details</Typography>;
	if (!cause) return null;

	return (
		<Box>
			{/* Mission and Impact Section */}
			<Paper sx={{ p: 3, mb: 3 }}>
				<Typography variant="h4" gutterBottom>
					Mission & Impact
				</Typography>
				<Typography variant="body1" paragraph>
					{cause.mission}
				</Typography>

				<Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
					Focus Areas
				</Typography>
				<Box component="ul" sx={{ pl: 2 }}>
					{cause.focusAreas?.map((area, index) => (
						<Typography component="li" key={index} variant="body1" sx={{ mb: 1 }}>
							{area}
						</Typography>
					))}
				</Box>
			</Paper>

			{/* Statistics Grid */}
			<Grid container spacing={3} sx={{ mb: 3 }}>
				<Grid item md={3} sm={6} xs={12}>
					<Paper
						sx={{
							p: 3,
							textAlign: 'center',
							height: '100%',
							background: theme.palette.background.default,
						}}
					>
						<PeopleAltTwoToneIcon
							sx={{
								fontSize: 40,
								color: 'primary.main',
								mb: 2,
							}}
						/>
						<Typography gutterBottom variant="h4">
							{cause.organizationCount || '50+'}
						</Typography>
						<Typography color="textSecondary" variant="subtitle2">
							Organizations
						</Typography>
					</Paper>
				</Grid>

				<Grid item md={3} sm={6} xs={12}>
					<Paper
						sx={{
							p: 3,
							textAlign: 'center',
							height: '100%',
							background: theme.palette.background.default,
						}}
					>
						<PublicTwoToneIcon
							sx={{
								fontSize: 40,
								color: 'primary.main',
								mb: 2,
							}}
						/>
						<Typography gutterBottom variant="h4">
							{cause.countries?.length || 'Global'}
						</Typography>
						<Typography color="textSecondary" variant="subtitle2">
							Countries Impacted
						</Typography>
					</Paper>
				</Grid>

				<Grid item md={3} sm={6} xs={12}>
					<Paper
						sx={{
							p: 3,
							textAlign: 'center',
							height: '100%',
							background: theme.palette.background.default,
						}}
					>
						<BusinessTwoToneIcon
							sx={{
								fontSize: 40,
								color: 'primary.main',
								mb: 2,
							}}
						/>
						<Typography gutterBottom variant="h4">
							{cause.eventCount || '100+'}
						</Typography>
						<Typography color="textSecondary" variant="subtitle2">
							Active Events
						</Typography>
					</Paper>
				</Grid>

				<Grid item md={3} sm={6} xs={12}>
					<Paper
						sx={{
							p: 3,
							textAlign: 'center',
							height: '100%',
							background: theme.palette.background.default,
						}}
					>
						<TrendingUpTwoToneIcon
							sx={{
								fontSize: 40,
								color: 'primary.main',
								mb: 2,
							}}
						/>
						<Typography gutterBottom variant="h4">
							{cause.growthRate || '27%'}
						</Typography>
						<Typography color="textSecondary" variant="subtitle2">
							Annual Growth
						</Typography>
					</Paper>
				</Grid>
			</Grid>

			{/* Impact Section */}
			<Paper sx={{ p: 3 }}>
				<Typography variant="h4" gutterBottom>
					Our Impact
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Box textAlign="center">
							<Typography variant="h3" color="primary.main">
								{cause.impact?.beneficiariesHelped?.toLocaleString()}
							</Typography>
							<Typography variant="subtitle1">People Helped</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box textAlign="center">
							<Typography variant="h3" color="primary.main">
								{cause.impact?.projectsCompleted?.toLocaleString()}
							</Typography>
							<Typography variant="subtitle1">Projects Completed</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box textAlign="center">
							<Typography variant="h3" color="primary.main">
								{cause.impact?.volunteersEngaged?.toLocaleString()}
							</Typography>
							<Typography variant="subtitle1">Volunteers Engaged</Typography>
						</Box>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
};

export { CauseAdditionalInfoTab };
