import { HeroContentLeft } from '../components/Hero/HeroContentLeft';
import { HeroContentRight } from '../components/Hero/HeroContentRight';
import { SideBySideLayout } from '../layouts/SideBySideLayout';

const LandingPage = () => {
	const leftHero = <HeroContentLeft />;
	const rightHero = <HeroContentRight />;

	return <SideBySideLayout leftSideContent={leftHero} rightSideContent={rightHero} />;
};

export { LandingPage };
