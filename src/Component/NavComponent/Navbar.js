import React from "react";
import Logo from "./Logo";
import "./nav.css";
import { Link } from "react-router-dom";

import Profilepic from "../../Static/ProfileAvatar.webp";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="logo">
          <Link
            to="https://apps.accolite.com/cob/#/mycards"
            className="aims-logo"
            style={{ width: "120px" }}
          >
            <Logo />
          </Link>
        </li>
        <li className="navigate">
          <Link to="/">Home</Link>
        </li>
        <li className="navigate">
          <Link to="/location">Location</Link>
        </li>
        <li className="navigate">
          <Link to="/register">Register</Link>
        </li>
        <li className="navigate">
          <Link to="/booking">Booking</Link>
        </li>
        <li className="navigate">
          <Link to="/login">Login</Link>
        </li>
        <li className="dropdown">
          <img src={Profilepic} alt="" className="dropbtn" />
          <div className="dropdown-content">
            <Link to="/Profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
