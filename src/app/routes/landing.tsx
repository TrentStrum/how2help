import { HeroContentLeft } from '../../components/layouts/Hero/HeroContentLeft';
import { HeroContentRight } from '../../components/layouts/Hero/HeroContentRight';
import { SideBySideLayout } from '../layouts/SideBySideLayout';

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
