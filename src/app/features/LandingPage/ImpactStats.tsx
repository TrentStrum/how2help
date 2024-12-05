import { Box, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import CountUp from 'react-countup';

const stats = [
	{ value: 1000, label: 'Volunteers', suffix: '+' },
	{ value: 250, label: 'Organizations', suffix: '+' },
	{ value: 500, label: 'Events Completed', suffix: '+' },
	{ value: 10000, label: 'Volunteer Hours', suffix: '+' },
];

export const ImpactStats = () => {
	const theme = useTheme();
	const isDark = theme.palette.mode === 'dark';

	return (
		<Container maxWidth="lg" sx={{ mt: -10, mb: 6, position: 'relative', zIndex: 2 }}>
			<Grid container spacing={3}>
				{stats.map((stat, index) => (
					<Grid item xs={12} sm={6} md={3} key={index}>
						<Paper
							elevation={0}
							sx={{
								p: 4,
								textAlign: 'center',
								borderRadius: '16px',
								background: isDark
									? alpha(theme.palette.background.paper, 0.4)
									: 'rgba(255,255,255,0.8)',
								backdropFilter: 'blur(10px)',
								border: '1px solid',
								borderColor: isDark
									? alpha(theme.palette.divider, 0.1)
									: alpha(theme.palette.divider, 0.2),
								boxShadow: isDark
									? `0 4px 20px ${alpha(theme.palette.common.black, 0.3)}`
									: '0 10px 30px -5px rgba(0,0,0,0.1)',
								transition: 'all 0.3s ease',
								'&:hover': {
									transform: 'translateY(-5px)',
									boxShadow: isDark
										? `0 8px 30px ${alpha(theme.palette.common.black, 0.4)}`
										: '0 20px 40px -5px rgba(0,0,0,0.15)',
									borderColor: isDark
										? alpha(theme.palette.primary.main, 0.2)
										: theme.palette.primary.main,
									background: isDark
										? alpha(theme.palette.background.paper, 0.6)
										: 'rgba(255,255,255,0.95)',
								},
							}}
						>
							<Typography
								variant="h2"
								sx={{
									background: isDark
										? `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
										: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									fontWeight: 700,
									mb: 1,
									textShadow: isDark
										? '0 2px 10px rgba(255,255,255,0.1)'
										: 'none',
								}}
							>
								<CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
							</Typography>
							<Typography
								variant="h6"
								sx={{
									color: isDark
										? alpha(theme.palette.text.secondary, 0.8)
										: theme.palette.text.secondary,
									fontWeight: 500,
								}}
							>
								{stat.label}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}; 