import { SideBySideLayout } from '../../app/layouts/SideBySideLayout';
import { LoginForm } from '../login';

const LoginContainer = () => {
	return (
		<SideBySideLayout
			leftSideContent={undefined}
			rightSideContent={<LoginForm />}
		/>
	);
};

export { LoginContainer };
