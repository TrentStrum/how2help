import { QueryClient, QueryClientProvider as RQProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

interface Props {
	children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
    return <RQProvider client={queryClient}>{children}</RQProvider>;
};

export default QueryClientProvider;
