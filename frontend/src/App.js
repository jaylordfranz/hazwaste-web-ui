import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/about";
import Policy from "./Components/PrivacyPolicy";
import Terms from "./Components/Terms";
import ContactUs from "./Components/ContactUs";
import { Login } from "./Components/login";
import { Register } from "./Components/Register";
import AdminDashboard from "./Components/admin/AdminDashboard";
import ScanReport from './Components/admin/ScanReport';
import MessageReport from './Components/admin/MessageReport';
import UserDashboard from "./Components/user/UserDashboard";
import EditProfile from "./Components/user/EditProfile";
import History from "./Components/user/History";
import ScanDetail from "./Components/user/ScanDetail";
import Maps from "./Components/user/Maps";
import Awareness from "./Components/user/Awareness";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="scan-report/:id" element={<ScanReport />} />
        <Route path="message-report" element={<MessageReport />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/History" element={<History />} />
        <Route path="/ScanDetail" element={<ScanDetail />} />
        <Route path="/Maps" element={<Maps />} />
        <Route path="/Awareness" element={<Awareness />} />
      </Routes>
    </Router>
  );
}

export default App;
