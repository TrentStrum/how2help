import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
	url: string;
	buttonText: string;
};

const LinkButton = ({ url, buttonText }: Props) => {
	return (
		<Link style={{ textDecoration: 'none' }} to={url}>
			<Button variant="contained">
				<Typography color="white" variant="body2">
					{buttonText}
				</Typography>
			</Button>
		</Link>
	);
};

export { LinkButton };
