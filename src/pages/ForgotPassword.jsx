import React from "react";
import Navbar from '../components/Navbar.jsx';
import Footer from "../components/Footer.jsx";
import ForgotPasswordInfo from "../components/ForgotPasswordInfo.jsx"
function ForgotPassword() {
  return (
    <div>
      <Navbar />
      <ForgotPasswordInfo />
      <br />
      <Footer />
    </div>
  );
}

export default ForgotPassword;