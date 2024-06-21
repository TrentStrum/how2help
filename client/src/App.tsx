import { ThemeContextProvider } from './app/Context/ThemeContext';
import TestAppBar from './temp_Test_Layouts/TestAppBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<ThemeContextProvider>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={true} />
					<TestAppBar />
				</QueryClientProvider>
			</ThemeContextProvider>
		</>
	);
}

export default App;
