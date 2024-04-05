import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRouter from "./infraestructure/routers/AppRouter";
import { Toaster } from 'react-hot-toast';

export default function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouter />
            <Toaster toastOptions={{ position: 'bottom-right' }} />
        </QueryClientProvider>
    )
}