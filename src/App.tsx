import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NotFoundTitle } from "./pages/NotFoundImage/NotFoundTitle";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";
function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<NotFoundTitle />} />
      </Routes>
    </main>
  );
}

export default App;
