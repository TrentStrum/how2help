import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
	url: string;
	buttonText: string;
};

const LinkButton = ({ url, buttonText }: Props) => {
	return (
		<Link
				to={url}
				style={{ textDecoration: 'none' }}
			>
		<Button variant='contained' >
				<Typography variant='body2' color='white'>{buttonText}</Typography>
		</Button>
			</Link>
	);
};

export { LinkButton };
