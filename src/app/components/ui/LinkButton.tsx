import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
	url: string;
	buttonText: string;
};

const LinkButton = ({ url, buttonText }: Props) => {
	return (
		<Button variant='contained' >
			<Link
				to={url}
				style={{ textDecoration: 'none' }}
			>
				<Typography variant='body2' color='white'>{buttonText}</Typography>
			</Link>
		</Button>
	);
};

export { LinkButton };
