import React from "react";
import { Link } from "react-router-dom";
import "/src/assets/css/Button.css";

function Button() {
  return (
    <Link to="/login">
      <button className="btnLogin">Log In</button>
    </Link>
    
  );
}

export default Button;