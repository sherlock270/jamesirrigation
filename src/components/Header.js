import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <span className="logo">
        <p>Jesse James Irrigation</p>
        <i class="fas fa-tint" />
      </span>
      <span className="links">
        <Link to="/">Home</Link>
        <Link to="/request">Request An Appointment</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <p className="login-link" onClick={props.toggleModal}>
          Log In
        </p>
      </span>
      <span className="links-mobile">
        <i class="fas fa-bars" />
      </span>
    </div>
  );
};

export default Header;
