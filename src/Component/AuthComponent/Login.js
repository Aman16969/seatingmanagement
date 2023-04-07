import React from 'react'
import './Auth.css'
import Avatar from '../../Static/avatar.png';
import { Link } from "react-router-dom";
//import Register from './Register';
const Login=(props)=>{
return(
    <>
  
  <form className="modal-content animate "  >
    
  <div class="imgcontainer">
     
      <img src={Avatar} alt="Avatar" class="avatar"/>
    </div>
    <div className="container">
      <label for="uname"><b>Useremail</b></label>
      <input type="text" placeholder="Enter Useremail" name="email" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>
        
      <button type="submit">Login</button>
      <label>
      <span className="register-link">Don't have an account?
        {/* <a href="/Register" onClick={() => props.onFormSwitch('register')} 
        style={{color:'red'}}>Register here!</a> */}
        <Link to="/Register">Register</Link>

      </span>
      </label>
    </div>

    <div className="container" >
    <button type="button" className="cancelbtn">Forgot Password</button>
   
  </div>
  </form>


    </>
)
}
export default Login;
