
import LandingPage from "./pages/veteran/LandingPage.js";
import { Route,Routes } from "react-router-dom";
import Register from "./pages/veteran/RegisterVeteranPage.js";
import Login from "./pages/veteran/LoginVeteranPage.js";
import VeteranProfilePage from "./pages/veteran/VeteranProfilePage.js";
import ViewProfilePage from "./pages/veteran/ViewProfilePage.js";

function App()
{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Route for Register Page */}
        <Route path="/veteran/auth/register" element={<Register />} />
        {/* Route for Login Page */}
        <Route path="/veteran/auth/login" element={<Login />} />
        {/* Route for VeternProfilePage */}
        <Route path="/veteran/profile" element={<VeteranProfilePage />} />
        {/* Route For View Profile Page */}
        <Route path="/veteran/view-profile" element={<ViewProfilePage />} />
      </Routes>
    </div >
  );
}

export default App;
