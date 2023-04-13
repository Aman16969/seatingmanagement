import React, { useEffect, useState } from 'react'
import './Auth.css'
import { Link } from "react-router-dom";
import baseurl from '../../ApiFile';
//import Register from './Register';

const Login=()=>{
 
  const [googleToken, setGoogleToken] = useState("");
  const [jwtToken, setJwtToken] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  
  
  useEffect(() => {
    /* global google */
    const onGoogleScriptLoad = () => {
      google.accounts.id.initialize({
        client_id: "946965422673-l41tegruelb9vqb1q6iqrpaf0ha7vnvh.apps.googleusercontent.com",
        callback: handleLoginApi,
      });
      google.accounts.id.renderButton(document.getElementById("LoginButton"), {
        theme: "outline",
        size: "large",
        type: "standard",
      });
    };
  
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = onGoogleScriptLoad;
    document.body.appendChild(script);
  }, []);
  const handleLoginApi = (Response) => {
    setTimeout(() => {
      fetch(`http://localhost:8081/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set request header to specify content type
        },
        body: JSON.stringify({ token: Response.credential }), // Pass googleToken in the request body
      }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("failed to get jwt token");
          }
          
          return res.json();
        })
        .then((data) => {
          setJwtToken(data);
          setIsPending(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 500);
  };
  if(jwtToken){
    localStorage.setItem("email",jwtToken.email);
    localStorage.setItem("accessToken",jwtToken.accessToken)
  }
  
  // const handleLogin=(e)=>{
  //   e.preventDefault();
  //     const data={"email":useremail,"password":password}
  //     console.log(data)
  //     fetch(`http://localhost:8081/auth/login`,{
  //       method:"POST",
  //       headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(data)
  //     }).then((res)=>{
  //       if(!res.ok){
  //         throw Error("Auth fail")
  //       }
  //       return res.json();
  //     })
  //     .then((data)=>{
  //       setUserData(data)
  //     })
  // }
  // if(userData){
  //   localStorage.setItem("token",JSON.stringify(userData.accessToken))
  //   localStorage.setItem("useremail",JSON.stringify(userData.email))
  // }
return(
    <>
    <div className="login-container">
      <h1 style={{color:'black'}}>Login</h1>
  <div id="LoginButton"></div>

   
    

  

  </div>
  {isPending && <div>Loading.....</div>}
  {error&& <div>{error}</div>}
  <h1>Data</h1>
  {jwtToken&&<span style={{color:'red'}}>{jwtToken.accessToken}</span>}
    </>
)
}
export default Login;
