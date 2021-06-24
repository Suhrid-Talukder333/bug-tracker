import React from "react";
import "./Buttons_styles.css";
import { Link } from "react-router-dom";

const Buttons = ({ title, url, bg }) => {
  return (
    <Link className="link" to={"/" + url}>
      <span style={{ backgroundColor: bg }} className="btn">
        {title}
      </span>
    </Link>
  );
};

export default Buttons;
