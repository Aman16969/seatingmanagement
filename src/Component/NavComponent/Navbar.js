import React from 'react'
import Logo from './Logo'
import './nav.css'
import { Link } from 'react-router-dom'

import Profilepic from '../../Static/avatar.png'
const Navbar=()=>{
return(
    <>
    <nav>
    <div class="navbar">
       <div>
  <Link to="https://apps.accolite.com/cob/#/mycards" className='aims-logo' style={{width:'120px'}}><Logo/></Link>
  </div>
  <div>
  <Link to="/">Home</Link>
  <Link to="/location">Location</Link>
  <Link to="/register">Register</Link>
  <Link to="/booking">Booking</Link>
  <Link to="/login">Login</Link>
  <div class="dropdown">
    
        <img src={Profilepic} alt="" class="dropbtn"/>
    
    <div class="dropdown-content">
      <a href="/profile">Profile</a>
      <a href="/logout">Logout</a>
    
    </div>
  </div> 
  
  </div>
</div>
    </nav>
    </>
)
}
export default Navbar