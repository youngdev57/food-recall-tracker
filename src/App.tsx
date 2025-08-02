import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RecallPage from "./pages/RecallPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/food-recall-tracker">
        <Routes>
          <Route path="/" element={<Navigate to="/recalls" />} />
          <Route path="/recalls" element={<RecallPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
