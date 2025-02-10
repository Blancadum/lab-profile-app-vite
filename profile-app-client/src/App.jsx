import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/Signup.jsx";
import LoginPage from "./pages/login.jsx"; 
import NavBar from "./components/navBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* Navbar común a todas las páginas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
