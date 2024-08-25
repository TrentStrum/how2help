
import { HeroContentLeft } from '../../features/components/Hero/HeroContentLeft';
import { HeroContentRight } from '../../features/components/Hero/HeroContentRight';
import { SideBySideLayout } from '../../layouts/SideBySideLayout';

const LandingPage = () => {
	const leftHero = <HeroContentLeft />;
	const rightHero = <HeroContentRight />;

	return (
		<>
			<SideBySideLayout
				leftSideContent={leftHero}
				rightSideContent={rightHero}
			/>
		</>
	);
};

export { LandingPage };
