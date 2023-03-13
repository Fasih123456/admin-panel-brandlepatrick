import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ErrorPage from "./Pages/ErrorPage";

import "./Css/style.css";
import Profile from "./Pages/CMS/Profile";
import Register from "./Pages/CMS/Register";
import FAQ from "./Pages/CMS/FAQ";
import Login from "./Pages/CMS/Login";
import Blank from "./Pages/CMS/Blank";
import Contact from "./Pages/CMS/Contact";
import ManageUsers from "./Pages/UserManagment/ManageUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/usermanage" element={<ManageUsers />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
