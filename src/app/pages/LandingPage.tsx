import { Box } from '@mui/material';

import { CTASection } from '@app/features/LandingPage/CtaSection';
import { Features } from '@app/features/LandingPage/Features';
import { HeroSection } from '@app/features/LandingPage/Hero';
import { Testimonials } from '@app/features/LandingPage/Testimonials';

const LandingPage = () => {
	return (
		<Box className="landing-page">
			<HeroSection />
			<Features />
			<Testimonials />
			<CTASection />
		</Box>
	);
};

export { LandingPage };
