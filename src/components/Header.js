import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <span className="logo">
        <p>Jesse James Irrigation</p>
        <i className="fas fa-tint" />
      </span>
      <span className="links">
        <Link to="/">Home</Link>
        <Link to="/request">Request An Appointment</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        {localStorage.getItem("loggedin") === "true" ? (
          <p
            className="login-link"
            onClick={() => {
              localStorage.setItem("loggedin", false);
              props.history.push("/");
            }}
          >
            Log out
          </p>
        ) : (
          <p className="login-link" onClick={props.toggleModal}>
            Log In
          </p>
        )}
      </span>
      <span className="links-mobile">
        <i className="fas fa-bars" />
      </span>
    </div>
  );
};

export default Header;
