import { Toaster } from "./components/ui/toaster";
// import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "@/hooks/auth/useAuth";
// import ProtectedRoute from "@/components/common/ProtectedRoute";
import CreateProblemPage from "./pages/problems/CreateProblemPage";
import ProblemsPage from "./pages/problems/ProblemsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import DashboardPage from "./pages/Dashboard";
// import NotFound from "@/pages/NotFound";
import { ROUTES } from "./utils/constant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* <Sonner /> */}
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route 
              path={ROUTES.DASHBOARD} 
              element={
                // <ProtectedRoute>
                  <DashboardPage />
                //  </ProtectedRoute> 
              } 
            />
            <Route 
              path={ROUTES.LOGIN} 
              element={
                // <ProtectedRoute requireAuth={false}>
                  <LoginPage />
                // </ProtectedRoute>
              } 
            />
            <Route 
              path={ROUTES.SIGNUP} 
              element={
                // <ProtectedRoute requireAuth={false}>
                  <SignupPage />
                // </ProtectedRoute>
              } 
            />
            <Route 
              path={ROUTES.CREATE_PROBLEM} 
              element={
                // <ProtectedRoute>
                  <CreateProblemPage />
                //  </ProtectedRoute> 
              } 
            />
            <Route 
              path={ROUTES.PROBLEMS} 
              element={<ProblemsPage />} 
            />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
