import React from 'react'
import Logo from './Logo'
import './nav.css'
import { Link } from 'react-router-dom'

import Profilepic from '../../Static/ProfileAvatar.webp'

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="https://apps.accolite.com/cob/#/mycards" className='aims-logo' style={{ width: '120px' }}>
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li className="dropdown">
          <img src={Profilepic} alt="" className="dropbtn" />
          <div className="dropdown-content">
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
