import { Paper } from '@mui/material';

type Props = {
	imageSource?: string;
};

const HeroImage = ({ imageSource }: Props) => {
	return (
		<Paper variant='outlined'>
			<img src={imageSource} width='100%' height='300'/>
		</Paper>
	);
};

export { HeroImage };
