import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Swiggy Logo" />
        <span>Swiggy</span>
      </div>
      <div className="navbar-links">
        <a href="#">Swiggy Corporate</a>
        <a href="#">Partner with us</a>
        <button className="get-app">Get the App</button>
        <button className="sign-in">Sign in</button>
      </div>
      
    </nav>
    
  );
};

export default Navbar;
