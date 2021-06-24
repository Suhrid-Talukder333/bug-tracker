import React from "react";
import "./Navbar_styles.css";

const Navbar = ({ brandName }) => {
  return (
    <nav>
      <div className="brand-container">
        {/* <img className="brand-img" src="" /> */}
        <p className="brand-name">{brandName}.</p>
      </div>
      <div className="nav-links">
        <ul className="nav-links-list">
          <li>
            <a href="#" className="nav-link">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Customers
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Developers
            </a>
          </li>
        </ul>
        <div className="sign-in-up-container">
          <span className="sign-in">Sign In</span>
          <span className="sign-up">Sign Up</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
