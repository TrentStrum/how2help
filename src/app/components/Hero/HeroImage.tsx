import { Paper } from '@mui/material';

import { neutral } from '../../../lib/Themes/colors';

type Props = {
	imageSource?: string;
	height: number;
};

const HeroImage = ({ imageSource, height }: Props) => {
	return (
		<Paper elevation={0} sx={{ backgroundColor: neutral[50] }}>
			<img height={height} src={imageSource} width="100%" />
		</Paper>
	);
};

export { HeroImage };
