import { Box, Container } from '@mui/material';

import { CTASection } from '@app/features/LandingPage/CtaSection';
import { Features } from '@app/features/LandingPage/Features';
import { HeroSection } from '@app/features/LandingPage/Hero';
import { ImpactStats } from '@app/features/LandingPage/ImpactStats';
import { RecentEvents } from '@app/features/LandingPage/RecentEvents';
import { Testimonials } from '@app/features/LandingPage/Testimonials';

const LandingPage = () => {
	return (
		<Box className="landing-page" sx={{ bgcolor: 'background.default' }}>
			<HeroSection />
			<Container maxWidth="xl">
				<Box sx={{ py: { xs: 4, md: 8 } }}>
					<ImpactStats />
				</Box>
				<Box sx={{ py: { xs: 4, md: 8 } }}>
					<Features />
				</Box>
				<Box sx={{ py: { xs: 4, md: 8 } }}>
					<RecentEvents />
				</Box>
				<Box sx={{ py: { xs: 4, md: 8 } }}>
					<Testimonials />
				</Box>
				<Box sx={{ py: { xs: 4, md: 8 } }}>
					<CTASection />
				</Box>
			</Container>
		</Box>
	);
};

export { LandingPage };
