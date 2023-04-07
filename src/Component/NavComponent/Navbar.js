import React from 'react'
import Logo from './Logo'
import './nav.css'
import Profilepic from '../../Static/avatar.png'
import { Link } from "react-router-dom";
const Navbar=()=>{
return(
    <>
    <nav>
    <div class="navbar">
       <div>
  <a href="https://apps.accolite.com/cob/#/mycards" className='aims-logo' style={{width:'120px'}}><Logo/></a>
  </div>
  <div>
  <a href="#news">Home</a>
  <a href="#news">Register</a>
  <a href="#news">Booking</a>
  <a href="#news">Login</a>
  {/* <Link to="/Register">Register</Link> */}
  <div class="dropdown">
    
        <img src={Profilepic} alt="" class="dropbtn"/>
    
    <div class="dropdown-content">
      <a href="https://apps.accolite.com/cob/#/mycards">Profile</a>
      <a href="https://apps.accolite.com/cob/#/mycards">Logout</a>
    
    </div>
  </div> 
  
  </div>
</div>
    </nav>
    </>
)
}
export default Navbar