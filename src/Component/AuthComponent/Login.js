import React from 'react'
import './Auth.css'
import { Link } from "react-router-dom";
//import Register from './Register';
const Login=(props)=>{
return(
    <>
    <div className="login-container">
      <h1 style={{color:'black'}}>Login</h1>
  <form className="modal-content" style={{width:'30%'}} >

      <label for="Email"><b>Email</b></label>
      <input type="email" placeholder="Enter Email" name="email" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/>
        
      <button>Login</button>
      <label>
      <span className="register-link">Don't have an account? 
        <Link to="/Register"> Register</Link>
      </span>
      </label>
      <label>
        <br />
      <span className="forgot-link">Forgot Password? 
        <Link to="/Register"> Reset</Link>
      </span>
      </label>

   
    
  </form>
  </div>
    </>
)
}
export default Login;
