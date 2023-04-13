import React, { useEffect, useState } from 'react'
import './Auth.css'
import { Link } from "react-router-dom";
import baseurl from '../../ApiFile';
//import Register from './Register';
const Login=()=>{
  const[useremail,SetUseremail]=useState("");
  const[password,SetPassword]=useState("");
  const[userData,setUserData]=useState([])
  
  const handleLogin=(e)=>{
    e.preventDefault();
      const data={"email":useremail,"password":password}
      console.log(data)
      fetch(`http://localhost:8081/auth/login`,{
        method:"POST",
        headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
      }).then((res)=>{
        if(!res.ok){
          throw Error("Auth fail")
        }
        return res.json();
      })
      .then((data)=>{
        setUserData(data)
      })
  }
  if(userData){
    localStorage.setItem("token",JSON.stringify(userData.accessToken))
    localStorage.setItem("useremail",JSON.stringify(userData.email))
  }
return(
    <>
    <div className="login-container">
      <h1 style={{color:'black'}}>Login</h1>
  <form className="modal-content" style={{width:'30%'}}  onSubmit={handleLogin}>

      <label for="Email"><b>Email</b></label>
      <input type="email" placeholder="Enter Email" name="email" value={useremail} onChange={(e)=>SetUseremail(e.target.value)} required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e)=>SetPassword(e.target.value)} required/>
        
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
  <h1>Data</h1>
  {userData&&<h1>{userData.email}</h1>}
  </div>
    </>
)
}
export default Login;
