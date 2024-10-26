import { Helmet as Head } from 'react-helmet-async';

type Props = {
	heading?: string;
};

const Helmet = ({ heading }: Props) => {
	const pageTitle = heading ? heading + ' - UIFort' : 'React UI Kit and Admin Dashboard Template';

	return (
		<Head>
			<title>{pageTitle}</title>
		</Head>
	);
};

export { Helmet };
