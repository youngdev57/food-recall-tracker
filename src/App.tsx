import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecallPage from "./pages/RecallPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecallPage />
    </QueryClientProvider>
  );
}

export default App;
