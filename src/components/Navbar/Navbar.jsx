import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import "./Navbar_styles.css";

const Navbar = ({ brandName }) => {
  const [navToggle, setNavToggle] = useState(false);
  const myFunction = () => {
    setNavToggle(!navToggle);
  };
  return (
    <nav>
      <div className="brand-container">
        {/* <img className="brand-img" src="" /> */}
        <Link className="link" to="/">
          <p className="brand-name">{brandName}.</p>
        </Link>
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
          <Buttons title="Sign In" url="#" bg="white" />
          <Buttons title="Sign Up" url="#" bg="white" />
        </div>
      </div>
      {/* mobile */}
      <div
        style={{ display: `${navToggle === true ? "flex" : "none"}` }}
        className="mob-nav-links"
      >
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
          <Buttons title="Sign In" url="#" bg="white" />
          <Buttons title="Sign Up" url="#" bg="white" />
        </div>
      </div>
      <div
        className={`container ${navToggle === true ? "change" : ""}`}
        onClick={myFunction}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
