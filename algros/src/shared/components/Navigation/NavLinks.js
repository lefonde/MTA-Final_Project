import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>home</NavLink>
      </li>
      <li>
        <NavLink to="/intro">intro</NavLink>
      </li>
      <li>
        <NavLink to="/courses">courses</NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Signup/Login</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
