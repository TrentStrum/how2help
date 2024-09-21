import { HeroImage } from '../../ui/HeroImage';
import LandingMain from '../../../../assets/images/LandingMain2.png';

const HeroContentRight = () => {
	return (
		<>
			<HeroImage
				imageSource={LandingMain}
				height={600}
			/>
		</>
	);
};

export { HeroContentRight };
