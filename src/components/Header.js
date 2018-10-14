import React from "react";

const Header = props => {
  return (
    <div className="header">
      <span className="logo">
        <p>Jesse James Irrigation</p>
        <i class="fas fa-tint" />
      </span>
      <span className="links">
        <a href="#">Home</a>
        <a href="#">Request An Appointment</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </span>
      <span className="links-mobile">
        <i class="fas fa-bars" />
      </span>
    </div>
  );
};

export default Header;
