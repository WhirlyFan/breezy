import AuthLayout from "@/components/layout/AuthLayout";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Auth guard for protected routes
// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModeToggle />
      <Routes>
        {/* <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Button>Sign Up</Button>} />
        </Route> */}
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Button>Not Found</Button>} />
      </Routes>
    </Suspense>
  );
}
