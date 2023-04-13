import React, { useEffect, useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import baseurl from "../../ApiFile";
//import Register from './Register';

const Login = () => {
  const [userData, setUserData] = useState([]);
  const handleLoginApi = (Response) => {
    setUserData(Response.crediential);
    if (Response) {
      localStorage.setItem("token", JSON.stringify(Response.crediential));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      google.accounts.id.initialize({
        client_id:
          "946965422673-l41tegruelb9vqb1q6iqrpaf0ha7vnvh.apps.googleusercontent.com",
        callback: handleLoginApi,
      });
      google.accounts.id.renderButton(document.getElementById("LoginButton"), {
        theme: "outline",
        size: "large",
        type: "standard",
      });
    }, 500);
    /* global google */
  }, []);
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const data = { email: useremail, password: password };
  //   console.log(data);
  //   fetch(`http://localhost:8081/auth/login`, {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("Auth fail");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setUserData(data);
  //     });
  // };
  if (userData) {
    localStorage.setItem("token", JSON.stringify(userData.accessToken));
    localStorage.setItem("useremail", JSON.stringify(userData.email));
  }
  return (
    <>
      <div className="login-container">
        <h1 style={{ color: "black" }}>Login</h1>
        <div id="LoginButton"></div>
      </div>
    </>
  );
};
export default Login;
