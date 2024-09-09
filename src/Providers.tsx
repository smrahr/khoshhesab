import { QueryClient, QueryClientProvider, useState } from "@imports";
import { ChildProps } from "./types/generalTypes";

const Providers: React.FC<ChildProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

export default Providers;
